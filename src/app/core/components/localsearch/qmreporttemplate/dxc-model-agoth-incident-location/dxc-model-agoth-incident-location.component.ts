import { Component, OnInit } from '@angular/core';
import { IReportAgothIncidentLocation, AgothIncidentLocationMetadata } from './dxc-model-agoth-incident-location.interface';
import { IDxc_Model_Agoth_IncidentLocation } from 'src/app/core/shared/models/Dxc_Model_Agoth_IncidentLocation';

declare var PDFreactor: any;
declare var document: any;
@Component({
  selector: 'app-dxc-model-agoth-incident-location',
  templateUrl: './dxc-model-agoth-incident-location.component.html',
  styleUrls: ['./dxc-model-agoth-incident-location.component.scss'],
  providers: [ AgothIncidentLocationMetadata ]
})
export class DxcModelAgothIncidentLocationComponent implements OnInit {

  selectData: IDxc_Model_Agoth_IncidentLocation;
  dataSourceName: any;
  dataModelName: any = 'ฐานข้อมูลสถานที่เกิดเหตุ';
  id: any;
  dataHtml: IReportAgothIncidentLocation;

constructor(private html: AgothIncidentLocationMetadata) {
  this.selectData = JSON.parse(localStorage.getItem('agoth-incident-location'));
}

ngOnInit() {
  this.pdfPreview();
}
pdfPreview() {
  var pdfReactor = new PDFreactor();
    console.log(pdfReactor);
    var config = {
      document: this.html.getHtml(this.selectData, this.dataModelName),
      signPDF: {
        'keyAlias': 'le-9474320e-12b6-4d31-b5c2-96673e619c6b',
        'keystorePassword': '1234',
        'keystoreType': 'PKCS12',
        'keystoreURL': 'https://search.dxc.go.th/public/secur/keystore.pfx',
        'signingMode': 'WINCER_SIGNED'
        },
      addAttachments: true,
      addBookmarks: true
    };
    pdfReactor.convertAsync(config, function(id) {
      console.log(id);
      pdfReactor.getProgress(id, function(progress) {
        setTimeout(function() {
          if (!progress.finished) {
            pdfReactor.getDocument(id, function(Result) {
              console.log(Result.document);
              var iframe = document.getElementById('result');
              iframe.src = 'data:application/pdf;base64,' + Result.document;
            });
          }
        }, 3000);
      });
    });
}
}


import { Component, OnInit } from '@angular/core';
import { IDxc_Model_Dopa_Moi_Persons } from 'src/app/core/shared/models/Dxc_Model_Dopa_Moi_Persons';
import { environment } from 'src/environments/environment';
import { DopaMoiPersonsMetadata, IReportDopaMoiPersons } from './dxc-model-dopa-moi-persons.interface';

declare var PDFreactor: any;
declare var document: any;

@Component({
  selector: 'app-dxc-model-dopa-moi-persons',
  templateUrl: './dxc-model-dopa-moi-persons.component.html',
  styleUrls: ['./dxc-model-dopa-moi-persons.component.css'],
  providers: [
    DopaMoiPersonsMetadata
  ]
})
export class DxcModelDopaMoiPersonsComponent implements OnInit {

  selectData: IDxc_Model_Dopa_Moi_Persons;
  dataSourceName: any;
  dataModelName: any = 'ทะเบียนราษฎร (Linkage)';
  id: any;
  dataHtml: IReportDopaMoiPersons;
  constructor(private html: DopaMoiPersonsMetadata) {
    this.selectData = JSON.parse(localStorage.getItem('dopa-moi-dopa-person'));
    console.log(this.selectData);
  }
  ngOnInit() {
    this.pdfPreview();
  }
  pdfPreview() {
    const pdfReactor = new PDFreactor();
    console.log(pdfReactor);
    const config = {
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
    pdfReactor.convertAsync(config, function (id) {
      console.log(id);
      pdfReactor.getProgress(id, function (progress) {
        setTimeout(function () {
          if (!progress.finished) {
            pdfReactor.getDocument(id, function (Result) {
              console.log(Result.document);
              const iframe = document.getElementById('result');
              iframe.src = 'data:application/pdf;base64,' + Result.document;
            });
          }
        }, 3000);
      });
    });
  }
}


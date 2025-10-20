import { Component, OnInit } from '@angular/core';
import { IDxc_Model_Dopa_MoiDopaPersonChangelastname } from 'src/app/core/shared/models/Dxc_Model_Dopa_MoiDopaPersonChangelastname';
import { DopaMoiPersonChangelastnameMetadata, IReportMoiDopaPersonChangelastname } from './dxc-model-dopa-moi-dopa-person-changelastname.interface';

declare var PDFreactor: any;
declare var LogLevel: any;
declare var document: any;
@Component({
  selector: 'app-dxc-model-dopa-moi-dopa-person-changelastname',
  templateUrl: './dxc-model-dopa-moi-dopa-person-changelastname.component.html',
  styleUrls: ['./dxc-model-dopa-moi-dopa-person-changelastname.component.scss'],
  providers: [
    DopaMoiPersonChangelastnameMetadata
  ]
})
export class DxcModelDopaMoiDopaPersonChangelastnameComponent implements OnInit {

  selectData: IDxc_Model_Dopa_MoiDopaPersonChangelastname;
  dataSourceName: any;
  dataModelName: any = 'ฐานข้อมูลการจดทะเบียนเปลี่ยนชื่อสกุล (Linkage)';
  id: any;
  dataHtml: IReportMoiDopaPersonChangelastname;
  constructor(private html: DopaMoiPersonChangelastnameMetadata) {
    const schema = 'dopa-moi-dopa-person-changelastname';
    this.selectData = JSON.parse(localStorage.getItem(schema));
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

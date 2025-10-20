import { Component, OnInit, Input } from '@angular/core';
import { DopaMoiAliensMetadata, IReportDopaMoiAliens } from './dxc-model-dopa-moi-aliens.interface';
import { IDxc_Model_Dopa_Moi_Aliens } from 'src/app/core/shared/models/Dxc_Model_Dopa_Moi_Aliens';
import { environment } from 'src/environments/environment';

declare var PDFreactor: any;
declare var LogLevel: any;
declare var document: any;
@Component({
  selector: 'app-dxc-model-dopa-moi-aliens',
  templateUrl: './dxc-model-dopa-moi-aliens.component.html',
  styleUrls: ['./dxc-model-dopa-moi-aliens.component.css'],
  providers: [
    DopaMoiAliensMetadata
  ]
})
export class DxcModelDopaMoiAliensComponent implements OnInit {

  selectData: IDxc_Model_Dopa_Moi_Aliens;
  dataSourceName: any;
  dataModelName: any = 'ข้อมูลทะเบียนบุคคลต่างด้าว';
  id: any;
  dataHtml: IReportDopaMoiAliens;
  constructor(private html: DopaMoiAliensMetadata) {
    const schema = environment.qm.sub[0]['dopa'].sub[0]['aliens'].schema;
    this.selectData = JSON.parse(localStorage.getItem(schema));
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
    pdfReactor.convertAsync(config, function (id) {
      console.log(id);
      pdfReactor.getProgress(id, function (progress) {
        setTimeout(function () {
          if (!progress.finished) {
            pdfReactor.getDocument(id, function (Result) {
              console.log(Result.document)
              var iframe = document.getElementById('result');
              iframe.src = 'data:application/pdf;base64,' + Result.document
            });
          }
        }, 3000);
      });
    });
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { IReportDopaMoiEducationBackgroundes, DopaMoiEducationBackgroundesMetadata  } from './dxc-model-dopa-moi-education-backgroundes.interface';
import { Dxc_Model_Moi_Dopa_Education_Backgroundes } from 'src/app/core/shared/models/Dxc_Model_Dopa_Moi_Education_Backgroundes';
import { environment } from 'src/environments/environment';

declare var PDFreactor: any;
declare var LogLevel: any;
declare var document: any;

@Component({
  selector: 'app-dxc-model-dopa-moi-education-backgroundes',
  templateUrl: './dxc-model-dopa-moi-education-backgroundes.component.html',
  styleUrls: ['./dxc-model-dopa-moi-education-backgroundes.component.css'],
  providers: [
    DopaMoiEducationBackgroundesMetadata
  ]
})

export class DxcModelDopaMoiEducationBackgroundesComponent implements OnInit {
  selectData: Dxc_Model_Moi_Dopa_Education_Backgroundes;
  dataSourceName: any;
  dataModelName: any = 'ข้อมูลวุฒิการศึกษา (2556) สำนักปลัดกระทรวงศึกษาธิการ(Linkage)';
  id: any;
  dataHtml: IReportDopaMoiEducationBackgroundes;
  constructor(private html: DopaMoiEducationBackgroundesMetadata) {
    this.selectData = JSON.parse(localStorage.getItem('dopa-moi-dopa-education-backgrounds'));
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






import { Component, Input, OnInit } from '@angular/core';
import { IReportMoeMoiGraduates, MoeMoiGraduatesMetadata } from './dxc-model-moi-moe-graduates.interface';
import { Dxc_Model_Moi_Moe_Graduates } from 'src/app/core/shared/models/Dxc_Model_Moi_Moe_Graduates';
import { environment } from 'src/environments/environment';

declare var PDFreactor: any;
declare var document: any;

@Component({
  selector: 'app-dxc-model-moi-moe-graduates',
  templateUrl: './dxc-model-moi-moe-graduates.component.html',
  styleUrls: ['./dxc-model-moi-moe-graduates.component.scss'],
  providers: [
    MoeMoiGraduatesMetadata
  ]
})
export class DxcModelMoiMoeGraduatesComponent implements OnInit {

  @Input() selectData: any;
  dataSourceName: any;
  dataModelName: any = 'ฐานข้อมูลผู้สำเร็จการศึกษา (Linkage2)';
  constructor(private html: MoeMoiGraduatesMetadata) { 
    const schema = environment.qm.sub[0]['moe'].sub[0]['graduates'].schema;
    this.selectData = JSON.parse(localStorage.getItem(schema));
  }

  ngOnInit(): void {
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
    }
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

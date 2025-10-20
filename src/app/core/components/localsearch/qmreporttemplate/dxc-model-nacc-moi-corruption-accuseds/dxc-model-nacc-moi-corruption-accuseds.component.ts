import { Component, OnInit, Input } from '@angular/core';
import { NaccMoiCorruptionAccusedsMetadata, IReportNaccCorruptionaccuseds } from './dxc-model-nacc-moi-corruption-accuseds.interface';
import { Dxc_Model_Nacc_Moi_Corruption_Accuseds } from 'src/app/core/shared/models/Dxc_Model_Nacc_Moi_Corruption_Accuseds';
import { environment } from 'src/environments/environment';

declare var PDFreactor: any;
declare var LogLevel: any;
declare var document: any;

@Component({
  selector: 'app-dxc-model-nacc-moi-corruption-accuseds',
  templateUrl: './dxc-model-nacc-moi-corruption-accuseds.component.html',
  styleUrls: ['./dxc-model-nacc-moi-corruption-accuseds.component.css'],
  providers: [
    NaccMoiCorruptionAccusedsMetadata
  ]
})
export class DxcModelNaccMoiCorruptionAccusedsComponent implements OnInit {

  selectData: Dxc_Model_Nacc_Moi_Corruption_Accuseds;
  dataSourceName: any;
  dataModelName: any = 'ข้อมูลผู้ถูกกล่าวหาคดีด้านการทุจริต(Linkage)';
  id: any;
  dataHtml: IReportNaccCorruptionaccuseds;
  constructor(private html: NaccMoiCorruptionAccusedsMetadata) {
    this.selectData = JSON.parse(localStorage.getItem('nacc-moi-nacc-corruption-accuseds'));
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
    }
    pdfReactor.convertAsync(config, function (id) {
      console.log(id);
      pdfReactor.getProgress(id, function (progress) {
        setTimeout(function () {
          if (!progress.finished) {
            pdfReactor.getDocument(id, function (Result) {
              console.log(Result.document)
              const iframe = document.getElementById('result');
              iframe.src = 'data:application/pdf;base64,' + Result.document;
            });
          }
        }, 3000);
      });
    });
  }
}

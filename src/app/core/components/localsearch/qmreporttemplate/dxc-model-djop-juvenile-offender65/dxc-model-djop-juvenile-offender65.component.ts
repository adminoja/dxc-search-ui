import { Component, OnInit } from '@angular/core';
import { IDxc_Model_Djop_JuvenileOffender65 } from 'src/app/core/shared/models/Dxc_Model_Djop_JuvenileOffender65';
import { DjopJuvenileOffender65Metadata, IReportDjopJuvenileOffender65 } from './dxc-model-djop-juvenile-offender65.interface';
declare var PDFreactor:any;
declare var document:any;

@Component({
  selector: 'app-dxc-model-djop-juvenile-offender65',
  templateUrl: './dxc-model-djop-juvenile-offender65.component.html',
  styleUrls: ['./dxc-model-djop-juvenile-offender65.component.scss'],
  providers: [ DjopJuvenileOffender65Metadata ]
})
export class DxcModelDjopJuvenileOffender65Component implements OnInit {
  selectData: IDxc_Model_Djop_JuvenileOffender65;
  dataModelName: any = 'เด็กหรือเยาวชนผู้กระทำผิด';
  dataHtml: IReportDjopJuvenileOffender65;
  constructor(private html: DjopJuvenileOffender65Metadata) {
    this.selectData = JSON.parse(localStorage.getItem('djop-juvenile-offender-new'))
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
      };
      pdfReactor.convertAsync(config, function(id){
        console.log(id);
        pdfReactor.getProgress(id, function(progress) {
          setTimeout(function() {
            if (!progress.finished) {
              pdfReactor.getDocument(id, function(Result) {
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

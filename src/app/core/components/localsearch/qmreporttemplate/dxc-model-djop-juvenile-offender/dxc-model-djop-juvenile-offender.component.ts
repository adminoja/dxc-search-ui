import { Dxc_Model_Djop_JuvenileOffender } from './../../../../shared/models/Dxc_Model_Djop_JuvenileOffender';
import { Component, OnInit, Input } from '@angular/core';
import { DjopJuvenileOffenderMetadata, IReportDjopJuvenileOffender } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-djop-juvenile-offender/dxc-model-djop-juvenile-offender.interface';
import { environment } from 'src/environments/environment';


declare var PDFreactor:any;
declare var LogLevel:any;
declare var document:any;
@Component({
  selector: 'dxc-model-djop-juvenile-offender',
  templateUrl: './dxc-model-djop-juvenile-offender.component.html',
  styleUrls: ['./dxc-model-djop-juvenile-offender.component.css'],
  providers:[
    DjopJuvenileOffenderMetadata
  ]
})
export class DxcModelDjopJuvenileOffenderComponent implements OnInit {
  selectData: Dxc_Model_Djop_JuvenileOffender;
  dataSourceName:any;
  dataModelName:any='เด็กหรือเยาวชนผู้กระทำผิด';
  id: any;
  dataHtml: IReportDjopJuvenileOffender;
  constructor(private html: DjopJuvenileOffenderMetadata) {
    const schema = environment.qm.sub[0]['djop'].sub[0]['juvenileOffender'].schema;
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




 
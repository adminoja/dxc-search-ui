import { Component, OnInit, Input } from '@angular/core';
import { Dxc_Model_Rlpd_Requestors } from '../../../../shared/models/Dxc_Model_Rlpd_Requestors';
import { RlpdRequestorsMetadata, IReportRlpdRequestors } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-rlpd-requestors/dxc-model-rlpd-requestors.interface';
import { environment } from 'src/environments/environment';

declare var PDFreactor:any;
declare var LogLevel:any;
declare var document:any;
@Component({
  selector: 'dxc-model-rlpd-requestors',
  templateUrl: './dxc-model-rlpd-requestors.component.html',
  styleUrls: ['./dxc-model-rlpd-requestors.component.css'],
  providers:[
    RlpdRequestorsMetadata
  ]
})
export class DxcModelRlpdRequestorsComponent implements OnInit {

  selectData:Dxc_Model_Rlpd_Requestors;
  dataSourceName:any;
  dataModelName:any="ผู้ร้องทุกข์";
  id:any;
  dataHtml:IReportRlpdRequestors;
  constructor(private html:RlpdRequestorsMetadata) {
    const schema = environment.qm.sub[0]['rlpd'].sub[0]['requestors'].schema;
    this.selectData = JSON.parse(localStorage.getItem(schema));
  }
  ngOnInit() {
  this.pdfPreview();
  }
  pdfPreview(){
    const pdfReactor = new PDFreactor();
      console.log(pdfReactor);
      const config = {
        document:this.html.getHtml(this.selectData,this.dataModelName),
        signPDF: {
          "keyAlias": "le-9474320e-12b6-4d31-b5c2-96673e619c6b",
          "keystorePassword": "1234",
          "keystoreType": "PKCS12",
          "keystoreURL": "https://search.dxc.go.th/public/secur/keystore.pfx",
          "signingMode": "WINCER_SIGNED"
          },
        addAttachments:true,
        addBookmarks:true
      }
      pdfReactor.convertAsync(config, function(id) {
        console.log(id);
        pdfReactor.getProgress(id, function(progress) {
          setTimeout(function() {
            if(!progress.finished){
              pdfReactor.getDocument(id, function(Result) {
                console.log(Result.document)
                const iframe=document.getElementById('result');
                iframe.src="data:application/pdf;base64,"+Result.document
              });
            }
          }, 3000);
        });
      });
  }
}

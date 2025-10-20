import { Component, OnInit, Input } from '@angular/core';
import { Dxc_Model_Oncb_NarcoticOffender, IDxc_Model_Oncb_NarcoticOffender } from '../../../../shared/models/Dxc_Model_Oncb_NarcoticOffender';
import { OncbNarcoticOffenderMetadata, IReportOncbNarcoticOffender } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-oncb-narcotic-offender/dxc-model-oncb-narcotic-offender.interface';
declare var PDFreactor: any;
declare var LogLevel: any;
declare var document: any;
@Component({
  selector: 'dxc-model-oncb-narcotic-offender',
  templateUrl: './dxc-model-oncb-narcotic-offender.component.html',
  styleUrls: ['./dxc-model-oncb-narcotic-offender.component.css'],
  providers: [
    OncbNarcoticOffenderMetadata
  ]
})
export class DxcModelOncbNarcoticOffenderComponent implements OnInit {
  selectData: IDxc_Model_Oncb_NarcoticOffender;
    dataSourceName: any;
    dataModelName: any = 'ประวัติคดียาเสพติด';
    id: any;
    dataHtml: IReportOncbNarcoticOffender;
    constructor(private html: OncbNarcoticOffenderMetadata) {
      this.selectData = JSON.parse(localStorage.getItem('oncb-narcotic-offender'));
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

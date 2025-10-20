import { Component, OnInit, Input } from '@angular/core';
import { DolLandAndCondominiumTitlesMetadata, IReportDolLandAndCondominiumTitles } from './dxc-model-dol-land-and-condominium-titles.interface';
import { IDxc_Model_Dol_Land_and_Condominium_Titles } from 'src/app/core/shared/models/Dxc_Model_Dol_Land_and_Condominium_Titles';
import { environment } from 'src/environments/environment.prod';

declare var PDFreactor: any;
declare var LogLevel: any;
declare var document: any;
@Component({
  selector: 'app-dxc-model-dol-land-and-condominium-titles',
  templateUrl: './dxc-model-dol-land-and-condominium-titles.component.html',
  styleUrls: ['./dxc-model-dol-land-and-condominium-titles.component.css'],
  providers: [
    DolLandAndCondominiumTitlesMetadata
  ]
})
export class DxcModelDolLandAndCondominiumTitlesComponent implements OnInit {

  selectData: IDxc_Model_Dol_Land_and_Condominium_Titles;
  dataSourceName: any;
  dataModelName: any = 'ฐานข้อมูลการครอบครองกรรมสิทธิ์ที่ดินและห้องชุด(Linkage)';
  id: any;
  dataHtml: IReportDolLandAndCondominiumTitles;
  constructor(private html: DolLandAndCondominiumTitlesMetadata) {
    const schema = environment.qm.sub[0]['dol'].sub[0]['landandcondominiumtitles'].schema;
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

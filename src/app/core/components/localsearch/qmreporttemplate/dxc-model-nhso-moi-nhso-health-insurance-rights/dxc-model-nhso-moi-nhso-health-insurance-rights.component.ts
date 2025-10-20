import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { IDxc_Model_Nhso_Moi_Health_Insurance_Rights } from 'src/app/core/shared/models/Dxc_Model_Nhso_Moi_Health_Insurance_Rights';
import { environment } from 'src/environments/environment';
import { IReportNhsoMoiHealthInsuranceRights, NhsoMoiHealthInsuranceRightsMetadata } from './dxc-model-nhso-moi-nhso-health-insurance-rights.interface';

declare var PDFreactor: any;
declare var LogLevel: any;
declare var document: any;
@Component({
  selector: 'app-dxc-model-nhso-moi-nhso-health-insurance-rights',
  templateUrl: './dxc-model-nhso-moi-nhso-health-insurance-rights.component.html',
  styleUrls: ['./dxc-model-nhso-moi-nhso-health-insurance-rights.component.css'],
  providers: [
    NhsoMoiHealthInsuranceRightsMetadata
  ]
})
export class DxcModelNhsoMoiHealthInsuranceRightsComponent implements OnInit {

  selectData: IDxc_Model_Nhso_Moi_Health_Insurance_Rights;
  dataSourceName: any;
  dataModelName: any = 'สิทธิประกันสุขภาพและการลงทะเบียนกับหน่วยบริการ';
  id: any;
  dataHtml: IReportNhsoMoiHealthInsuranceRights;

  constructor(private html: NhsoMoiHealthInsuranceRightsMetadata, public sanitizer: DomSanitizer) {
    const schema = environment.qm.sub[0]['nhso'].sub[0]['healthinsuranceright'].schema;
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
  imageEncode(imageCode) {
    var hex = imageCode,
      bytes = [],
      str;

    for (var i = 0; i < hex.length - 1; i += 2) {
      bytes.push(parseInt(hex.substr(i, 2), 16));
    }

    str = String.fromCharCode.apply(String, bytes);

    var image = btoa(str);

    return image;
  }
}

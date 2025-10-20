import { Component, OnInit, Input } from '@angular/core';
import { DopaMoiFacePhotosMetadata, IReportDopaMoiFacePhotos } from './dxc-model-dopa-moi-face-photos.interface';
import { Dxc_Model_Dopa_Moi_Face_Photos, IDxc_Model_Dopa_Moi_Face_Photos } from 'src/app/core/shared/models/Dxc_Model_Dopa_Moi_Face_Photos';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

declare var PDFreactor: any;
declare var LogLevel: any;
declare var document: any;

@Component({
  selector: 'app-dxc-model-dopa-moi-face-photos',
  templateUrl: './dxc-model-dopa-moi-face-photos.component.html',
  styleUrls: ['./dxc-model-dopa-moi-face-photos.component.css'],
  providers: [
    DopaMoiFacePhotosMetadata
  ]
})
export class DxcModelDopaMoiFacePhotosComponent implements OnInit {

  selectData: IDxc_Model_Dopa_Moi_Face_Photos;
  dataSourceName: any;
  dataModelName: any = 'ข้อมูลภาพใบหน้า';
  id: any;
  dataHtml: IReportDopaMoiFacePhotos;
  constructor(private html: DopaMoiFacePhotosMetadata, public sanitizer: DomSanitizer) {
    const schema = 'dopa-moi-dopa-person-face-photo';
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

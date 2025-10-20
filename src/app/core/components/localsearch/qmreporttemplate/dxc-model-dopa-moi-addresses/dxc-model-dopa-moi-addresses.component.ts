import { Component, OnInit, Input } from '@angular/core';
import { DopaMoiAddressesMetadata, IReportDopaMoiAddresses } from './dxc-model-dopa-moi-addresses.interface';
import { IDxc_Model_Dopa_Moi_Addresses } from 'src/app/core/shared/models/Dxc_Model_Dopa_Moi_Addresses';
import { environment } from 'src/environments/environment';

declare var PDFreactor: any;
declare var LogLevel: any;
declare var document: any;

@Component({
  selector: 'app-dxc-model-dopa-moi-addresses',
  templateUrl: './dxc-model-dopa-moi-addresses.component.html',
  styleUrls: ['./dxc-model-dopa-moi-addresses.component.css'],
  providers: [
    DopaMoiAddressesMetadata
  ]
})
export class DxcModelDopaMoiAddressesComponent implements OnInit {

  selectData: IDxc_Model_Dopa_Moi_Addresses;
  dataSourceName: any;
  dataModelName: any = 'ฐานข้อมูลทะเบียนบ้าน (บุคคลทุกประเภท)';
  id: any;
  dataHtml: IReportDopaMoiAddresses;
  constructor(private html: DopaMoiAddressesMetadata) {
    const schema = environment.qm.sub[0]['dopa'].sub[0]['addresses'].schema;
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






import {DopaMoiFacePhotosMetadata} from '../../../../../localsearch/qmreporttemplate/dxc-model-dopa-moi-face-photos/dxc-model-dopa-moi-face-photos.interface';
import {IDxc_Model_Dopa_Moi_Face_Photos} from '../../../../../../shared/models/Dxc_Model_Dopa_Moi_Face_Photos';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-left-face-photos',
  templateUrl: './list-left-face-photos.component.html',
  styleUrls: ['./list-left-face-photos.component.scss'],
  providers: [
    DopaMoiFacePhotosMetadata
  ]
})
export class ListLeftFacePhotosComponent implements OnInit {
  moidopafacephotosResults: IDxc_Model_Dopa_Moi_Face_Photos[];
  checkMoidopafacephotosResults: boolean;
  constructor(private ReportMoiDopaFacePhotos: DopaMoiFacePhotosMetadata) { }

  ngOnInit() {
    this.ReportMoiDopaFacePhotos.getSearchData();
    this.moidopafacephotosResults = this.ReportMoiDopaFacePhotos.$results;
    if(this.moidopafacephotosResults.length !== 0) {
      this.checkMoidopafacephotosResults = true;
    } else {
      this.checkMoidopafacephotosResults = false;
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { DopaMoiFacePhotosMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-dopa-moi-face-photos/dxc-model-dopa-moi-face-photos.interface';
import { Dxc_Model_Dopa_Moi_Face_Photos, IDxc_Model_Dopa_Moi_Face_Photos } from 'src/app/core/shared/models/Dxc_Model_Dopa_Moi_Face_Photos';

@Component({
  selector: 'app-list-top-face-photos',
  templateUrl: './list-top-face-photos.component.html',
  styleUrls: ['./list-top-face-photos.component.scss']
})
export class ListTopFacePhotosComponent implements OnInit {
  facePhotoResults: IDxc_Model_Dopa_Moi_Face_Photos[];
  checkFacephotosResults: boolean;
  report_name: string;
  constructor(private ReportMoiDopaFacePhoto: DopaMoiFacePhotosMetadata) { }

  ngOnInit() {
    this.ReportMoiDopaFacePhoto.getSearchData();
    this.facePhotoResults = this.ReportMoiDopaFacePhoto.$results;
    
    if(this.facePhotoResults.length !== 0) {
      this.checkFacephotosResults = true;
    } else {
      this.checkFacephotosResults = false;
    }
    this.report_name = localStorage.getItem('report_name');
  }
  

}

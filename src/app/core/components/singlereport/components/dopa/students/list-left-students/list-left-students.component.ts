import { MoeMoiStudentsMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-moe-moi-students/dxc-model-moe-moi-students.interface';
import { Dxc_Model_Moi_Moe_Students } from '../../../../../../shared/models/Dxc_Model_Moe_Moi_Students';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-left-students',
  templateUrl: './list-left-students.component.html',
  styleUrls: ['./list-left-students.component.scss'],
  providers: [
    MoeMoiStudentsMetadata
  ]
})
export class ListLeftStudentsComponent implements OnInit {
  MoiDopaStudentsResults: Dxc_Model_Moi_Moe_Students[];
  checkMoiDopaStudentsResults: boolean;

  constructor(private ReportDopaMoiStudents: MoeMoiStudentsMetadata) {
  }

  ngOnInit() {
    this.ReportDopaMoiStudents.getSearchData();
    this.MoiDopaStudentsResults = this.ReportDopaMoiStudents.$results;

    if (this.MoiDopaStudentsResults.length !== 0) {
      this.checkMoiDopaStudentsResults = true;
    } else {
      this.checkMoiDopaStudentsResults = false;
    }
  }

}

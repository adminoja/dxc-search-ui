import { JfoJfoCaseMetadata } from './../../../../../localsearch/qmreporttemplate/dxc-model-jfo-jfo-case/dxc-model-jfo-jfo-case.interface';
import { Component, OnInit } from '@angular/core';
import { IDxc_Model_Jfo_Jfo_Case } from 'src/app/core/shared/models/Dxc_Model_Jfo_Jfo_Case';
@Component({
  selector: 'app-list-left-jfo-case',
  templateUrl: './list-left-jfo-case.component.html',
  styleUrls: ['./list-left-jfo-case.component.scss'],
  providers: [
    JfoJfoCaseMetadata
  ]
})
export class ListLeftJfoCaseComponent implements OnInit {
  jfoCaseResults: IDxc_Model_Jfo_Jfo_Case[];
  checkjfoCaseResults: boolean;
  constructor(private ReportJfoJfoCase: JfoJfoCaseMetadata) { }
  ngOnInit() {
    this.ReportJfoJfoCase.getSearchData();
    this.jfoCaseResults = this.ReportJfoJfoCase.$results;
    console.log(this.jfoCaseResults);
    if(this.jfoCaseResults.length !== 0 ){
      this.checkjfoCaseResults = true;
    } else {
      this.checkjfoCaseResults = false;
    }
  }

}
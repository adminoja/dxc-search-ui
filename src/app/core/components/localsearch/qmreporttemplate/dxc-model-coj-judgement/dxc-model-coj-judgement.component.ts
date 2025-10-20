import { Component, OnInit } from '@angular/core';
import { IDxc_Model_Coj_Judgement } from 'src/app/core/shared/models/Dxc_Model_Coj_Judgement';
import { CojJudgementMetadata, IReportCojJudgement } from './dxc-model-coj-judgement.interface';

@Component({
  selector: 'app-dxc-model-coj-judgement',
  templateUrl: './dxc-model-coj-judgement.component.html',
  styleUrls: ['./dxc-model-coj-judgement.component.scss']
})
export class DxcModelCojJudgementComponent implements OnInit {
  selectData: IDxc_Model_Coj_Judgement;
  dataSourceName: any;
  dataModelName: any = 'ฐานข้อมูลคำพิพากษาฉบับเต็ม';
  id: any;
  dataHtml: IReportCojJudgement;
  constructor(private html: CojJudgementMetadata) {
    this.selectData = JSON.parse(localStorage.getItem('coj-judgement'));
  }

  ngOnInit(): void {
  }

}

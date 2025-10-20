import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IDxc_Model_Coj_JudgementSummarys } from 'src/app/core/shared/models/Dxc_Model_Coj_JudgementSummarys';

import { DxcModelCojJudgementSummarysComponent } from './dxc-model-coj-judgement-summarys.component';
import { CojJudgementSummarysMetadata } from './dxc-model-coj-judgement-summarys.interface';

describe('DxcModelCojJudgementSummarysComponent', () => {
  let component: DxcModelCojJudgementSummarysComponent;
  let fixture: ComponentFixture<DxcModelCojJudgementSummarysComponent>;
  let html: CojJudgementSummarysMetadata
  let selectData: IDxc_Model_Coj_JudgementSummarys = {
    "id": "4Lic4LiaMy8yNTYyfmNpdmlsfjE=",
    "caseNo": "ผบ3/2562",
    "court": "civil",
    "courtText": "ศาลแพ่ง",
    "alleDesc": "ซื้อขาย(อื่นๆ)",
    "caseDate": "2019-01-04",
    "judgingDate": "2019-03-25",
    "judgeDesc": null,
    "redNo": null,
    "appealDate": null,
    "appealSendDate": null,
    "appealReadDate": null,
    "dekaDate": null,
    "dekaSendDate": null,
    "dekaReadDate": null,
    "xbase": {
      "case_no": "ผบ3/2562",
      "red_no": "ผบ1321/2562",
      "case_date": "2019-01-04",
      "judging_date": "2019-03-25",
      "appeal_date": ""
    },
    "appoitment": [
      {
        "date_appoint": "2019-03-11",
        "app_name": "นัดพิจารณา",
        "time_appoint": "09.00",
        "room_desc": "412",
        "delay_name": ""
      },
      {
        "date_appoint": "2019-01-10",
        "app_name": "ไต่สวนขอคุ้มครองชั่วคราว",
        "time_appoint": "13.30",
        "room_desc": "",
        "delay_name": ""
      },
      {
        "date_appoint": "2019-03-25",
        "app_name": "ไต่สวนขอคุ้มครองชั่วคราว",
        "time_appoint": "13.30",
        "room_desc": "412",
        "delay_name": ""
      },
      {
        "date_appoint": "2019-02-25",
        "app_name": "ไต่สวนคำร้อง",
        "time_appoint": "15.00",
        "room_desc": "412",
        "delay_name": ""
      },
      {
        "date_appoint": "2019-03-25",
        "app_name": "ต่สวนคำร้องขอคุ้มครองชั่วคราว  พิจารณาเพื่อการไกล่เกลี่ยให้การและสืบพยานโจทก์ทั้งสอง",
        "time_appoint": "01.00",
        "room_desc": "412",
        "delay_name": ""
      }
    ],
    "sendnotice": [
      {
        "notice_type_name": "หมายเรียกจำเลยและสำเนาคำฟ้อง",
        "noticeto_name": "บริษัท บางกอกลากูน จำกัด จำเลย ",
        "send_date": "2019-01-24",
        "rcvnotice_date": "2019-01-28",
        "input_result_date": "2019-01-28",
        "notice_result": "ส่งได้"
      },
      {
        "notice_type_name": "หมายนัดไต่สวนคำร้อง",
        "noticeto_name": "บริษัท บางกอกลากูน จำกัด จำเลย ",
        "send_date": "2019-01-24",
        "rcvnotice_date": "2019-01-28",
        "input_result_date": "2019-01-28",
        "notice_result": "ส่งได้"
      },
      {
        "notice_type_name": "หมายนัดพิจารณาและสำเนาคำฟ้อง",
        "noticeto_name": "บริษัท บางกอกลากูน จำกัด จำเลย ",
        "send_date": "2019-02-27",
        "rcvnotice_date": "2019-03-02",
        "input_result_date": "2019-03-02",
        "notice_result": "ส่งได้"
      }
    ],
    "caseDescription": {
      "judge_desc": "string"
    },
    "reportName": 'string',
    "reportOfDate": 'string',
    "reportOfTime": 'string',
    "reportBarcode": 'string',
    "wartermarks": 'string',
    "person": {
      "citizenCardNumber": 'string',
      "fullName": 'string',
      "sex": 'string',
      "dateOfBirth": new Date('')
    }
  }
  

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DxcModelCojJudgementSummarysComponent ],
      providers: [CojJudgementSummarysMetadata]
      
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DxcModelCojJudgementSummarysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
  it('test get component', () => {
    
    // expect(component.ngOnInit()).toEqual('-')
  });
});

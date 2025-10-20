import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Dxc_Model_SearchFillter } from 'src/app/core/shared/models/Dxc_Model_SearchFillter';
import { SpecializedjopService } from 'src/app/core/shared/services/dxc/idb/djop/specializedjop.service';
import { SpecializedocService } from 'src/app/core/shared/services/dxc/idb/doc/specializedoc.service';
import { SpecializedopService } from 'src/app/core/shared/services/dxc/idb/dop/specializedop.service';
import { UserService } from 'src/app/core/shared/services/Userprofile/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-load-data2',
  templateUrl: './load-data2.component.html',
  styleUrls: ['./load-data2.component.scss']
})
export class LoadData2Component implements OnInit,OnDestroy {

  dataSearch: Dxc_Model_SearchFillter;
  report_name: string; // ชื่อรายงานเพื่อแสดงสถานะฐานข้อมูล
  reportclick: string;
  lblStatus: number;
  historys: any;
  source: string[];
  sub: string[];
  complete: any;
  constructor(private router: Router,
    private routeparams: ActivatedRoute,
    private specializedopService: SpecializedopService,
    private specializedjopService: SpecializedjopService,
    private specializedocService: SpecializedocService,
    private userService: UserService) {
    this.routeparams.params.subscribe(
      params => this.getReportname(params['reportname'])

    );
    this.routeparams.params.subscribe(
      params => this.dataSearch = new Dxc_Model_SearchFillter(
        params['citizenCardNumber'],
        params['firstName'],
        params['lastName'], '',
        params['prisoner'],
        params['casename'],
        params['dataSetId']
      )
    );
  }

  ngOnInit() {
    this.loadProfile();
    // idb-dop-person-report
    // idb-djop-person-report
    // idb-doc-person-report
    this.clearlocalStore();
    if (this.report_name === 'รายงาน Single Report') {
      this.dataSearch.dataSetId = '';
    } else if (this.report_name === 'กรมคุมประพฤติ') {
      this.dataSearch.dataSetId = 'idb-dop-person-report';
      this.specializedopService.getSerchHistory(this.dataSearch.dataSetId).subscribe(data => {
        this.historys = data['content']
        console.log(this.historys)
      })
      this.complete = setInterval(() => {
        this.specializedopService.getSerchHistory(this.dataSearch.dataSetId).subscribe(data => {
          this.historys = data['content']
          let batchStatus = this.historys.filter(history=> history.status.batchStatus === 'STARTED');
            if(batchStatus.length===0){
              clearInterval(this.complete);
            }
        })
      }, 5000);
    } else if (this.report_name === 'กรมพินิจและคุ้มครองเด็กและเยาวชน') {
      this.dataSearch.dataSetId = 'idb-djop-person-report';
      this.specializedjopService.getSerchHistory(this.dataSearch.dataSetId).subscribe(data => {
        this.historys = data['content']
      })
      this.complete = setInterval(() => {
        this.specializedjopService.getSerchHistory(this.dataSearch.dataSetId).subscribe(data => {
          this.historys = data['content']
          let batchStatus = this.historys.filter(history=> history.status.batchStatus === 'STARTED');
          if(batchStatus.length===0){
            clearInterval(this.complete);
          }
        })
      }, 5000);
    } else if (this.report_name === 'กรมราชทัณฑ์') {
      this.dataSearch.dataSetId = 'idb-doc-person-report';
      this.specializedocService.getSerchHistory(this.dataSearch.dataSetId).subscribe(data => {
        this.historys = data['content']
      })
      this.complete = setInterval(() => {
        this.specializedocService.getSerchHistory(this.dataSearch.dataSetId).subscribe(data => {
          this.historys = data['content']
          let batchStatus = this.historys.filter(history=> history.status.batchStatus === 'STARTED');
          if(batchStatus.length===0){
            clearInterval(this.complete);
          }
        })
      }, 5000);
    }
    this.dataSearch.firstName = '0';
    this.dataSearch.lastname = '0';

    
  }
  btnSearch_Click(searchId) {
    this.router.navigateByUrl('singlereport/reportdop/' + this.report_name + '/' + searchId);
  }
  /**
* preview ข้อมูลก่อน พิมพ์ pdf(เป็นหน้า Single Report)
*/
  pdfPreview(searchId) {
    console.log(searchId)
    if (this.dataSearch.citizenCardNumber === null) {
      this.dataSearch.citizenCardNumber = '0';
    } else if (this.dataSearch.firstName && this.dataSearch.lastname) {
      this.dataSearch.firstName = '0';
      this.dataSearch.lastname = '0';
    }
    if (this.report_name === 'รายงาน Single Report') {
      this.router.navigate(['dxcui0014/dxcui0019/' +
        this.report_name, this.dataSearch.citizenCardNumber, this.dataSearch.firstName, this.dataSearch.lastname, '']);
    } else if (this.report_name === 'กรมคุมประพฤติ') {
      this.specializedopService.getSearchById(searchId).subscribe(data => {
        console.log(data)
        localStorage.setItem('thaiNin', data['parameters']['thaiNin']);
        localStorage.setItem('startTime', data['startTime']);
        localStorage.setItem(`idb-dop-personDetail-reportResults`, JSON.stringify(data['personDetail']['items']));
        localStorage.setItem(`idb-dop-justiceEvents-reportResults`, JSON.stringify(data['justiceEvents']['items']));
        localStorage.setItem(`idb-dop-asset-reportResults`, JSON.stringify(data['asset']['items']));
        localStorage.setItem(`idb-career-reportResults`, JSON.stringify(data['idbCareerReport']['items']));
        localStorage.setItem(`idb-contact-reportResults`, JSON.stringify(data['idbContactReport']['items']));

        let personDetail = localStorage.getItem('idb-dop-personDetail-reportResults');
        let j่usticeEvents = localStorage.getItem('idb-dop-justiceEvents-reportResults');
        let asset = localStorage.getItem('idb-dop-asset-reportResults');
        let career = localStorage.getItem('idb-career-reportResults');
        let contact = localStorage.getItem('idb-contact-reportResults');

        JSON.parse(personDetail).forEach(element => {
          console.log(`${element['dataSetId']}Results`,element['result'])
          if (element['result'] != null) {
            localStorage.setItem(`${element['dataSetId']}Results`, JSON.stringify(element['result']['content']));

          } 
          else {
            let emptyData = [];
            emptyData.push({exitCode: element['status']['exitCode'],Results:'[]'});
            localStorage.setItem(`${element['dataSetId']}Results`, JSON.stringify(emptyData));
            // localStorage.setItem(`${element['dataSetId']}Results`, '[]');
          }
        });

        let dopJusticeEventsObj = []
        let djopdata = []
        let docdata = []
        let dopdata = []
        JSON.parse(j่usticeEvents).forEach(element => {
          if (element.dataSetId == 'djop-juvenile-offender') {
            djopdata.push(element.data)
            localStorage.setItem('djop-juvenile-offenderResults', JSON.stringify(djopdata));
          } else if (element.dataSetId == 'doc-prisoner') {
            docdata.push(element.data);
            localStorage.setItem('doc-prisonerResults', JSON.stringify(docdata));
          } else if (element.dataSetId == 'dop-probationee') {
            dopdata.push(element.data);
            localStorage.setItem('dop-probationeeResults', JSON.stringify(dopdata));
          } 
          dopJusticeEventsObj.push(element['data']);
        });

        JSON.parse(career).forEach(element => {
          console.log(`${element['dataSetId']}Results`,element['result'])
          if (element['result'] != null) {
            localStorage.setItem(`${element['dataSetId']}-career-Results`, JSON.stringify(element['result']['content']));
          } 
          else {
            let emptyData = [];
            emptyData.push({exitCode: element['status']['exitCode'],Results:'[]'});
            localStorage.setItem(`${element['dataSetId']}-career-Results`, JSON.stringify(emptyData));
            // localStorage.setItem(`${element['dataSetId']}Results`, '[]');
          }
        });

        JSON.parse(contact).forEach(element => {
          console.log(`${element['dataSetId']}Results`,element['result'])
          if (element['result'] != null) {
            
            localStorage.setItem(`${element['dataSetId']}-contact-Results`, JSON.stringify(element['result']['content']));

          } 
          else {
            let emptyData = [];
            emptyData.push({exitCode: element['status']['exitCode'],Results:'[]'});
            localStorage.setItem(`${element['dataSetId']}-contact-Results`, JSON.stringify(emptyData));
            // localStorage.setItem(`${element['dataSetId']}Results`, '[]');
          }
        });

        // let careerObj = []
        // let rlpddata =[]
        // JSON.parse(career).forEach(element => {
        //   console.log('element' + element.career);
        //   if (element.dataSetId == 'rlpd-crime-defendant-compensation') {
        //     rlpddata.push(element.career)
        //     localStorage.setItem('rlpd-crime-defendant-compensationResults', JSON.stringify(rlpddata));
        //   } else if (element.dataSetId == 'doc-prisoner') {
        //     docdata.push(element.career);
        //     localStorage.setItem('doc-prisonerResults', JSON.stringify(docdata));
        //   } else if (element.dataSetId == 'dop-probationee') {
        //     dopdata.push(element.career);
        //     localStorage.setItem('dop-probationeeResults', JSON.stringify(dopdata));
        //   } else if (element.dataSetId == 'djop-juvenile-offender') {
        //     djopdata.push(element.career)
        //     localStorage.setItem('djop-juvenile-offenderResults', JSON.stringify(djopdata));
        //   }
        //   careerObj.push(element.career);
        // });

        // localStorage.setItem('dop-probationeeResults', JSON.stringify(dopJusticeEventsObj));

        JSON.parse(asset).forEach(element => {
          // console.log(`${element['dataSetId']}Results`,element['result']['content'])
          if (element['result'] != null) {
            localStorage.setItem(`${element['dataSetId']}Results`, JSON.stringify(element['result']['content']));

          } else {
            let emptyData = [];
            emptyData.push({exitCode: element['status']['exitCode'],Results:'[]'});
            localStorage.setItem(`${element['dataSetId']}Results`, JSON.stringify(emptyData));
          }

        });




        this.router.navigate(['singlereport/reportdop/' +
          this.report_name, searchId]);
      })

    } else if (this.report_name === 'กรมพินิจและคุ้มครองเด็กและเยาวชน') {
      this.specializedjopService.getSearchById(searchId).subscribe(data => {
        console.log(data)
        localStorage.setItem('thaiNin', data['parameters']['thaiNin']);
        localStorage.setItem('startTime', data['startTime']);
        localStorage.setItem(`idb-djop-personDetail-reportResults`, JSON.stringify(data['personDetail']['items']));
        localStorage.setItem(`idb-djop-justiceEvents-reportResults`, JSON.stringify(data['justiceEvents']['items']));
        localStorage.setItem(`idb-djop-asset-reportResults`, JSON.stringify(data['asset']['items']));
        localStorage.setItem(`idb-contact-reportResults`, JSON.stringify(data['idbContactReport']['items']));
        let personDetail = localStorage.getItem('idb-djop-personDetail-reportResults');
        let justiceEvents = localStorage.getItem('idb-djop-justiceEvents-reportResults');
        let asset = localStorage.getItem('idb-djop-asset-reportResults');
        let contact = localStorage.getItem('idb-contact-reportResults');
        

        JSON.parse(personDetail).forEach(element => {
          // console.log(`${element['dataSetId']}Results`,element['result']['content'])
          if (element['result'] != null) {
            localStorage.setItem(`${element['dataSetId']}Results`, JSON.stringify(element['result']['content']));
          } else {
            let emptyData = [];
            emptyData.push({exitCode: element['status']['exitCode'],Results:'[]'});
            localStorage.setItem(`${element['dataSetId']}Results`, JSON.stringify(emptyData));
          }
        });

        let justiceEventsObj = []
        let djopdata = []
        let docdata = []
        let dopdata = []
        JSON.parse(justiceEvents).forEach(element => {
          console.log(element)
          if (element.dataSetId == 'djop-juvenile-offender') {
            djopdata.push(element.data)
            localStorage.setItem('djop-juvenile-offenderResults', JSON.stringify(djopdata));
          } else if (element.dataSetId == 'doc-prisoner') {
            docdata.push(element.data);
            localStorage.setItem('doc-prisonerResults', JSON.stringify(docdata));
          } else if (element.dataSetId == 'dop-probationee') {
            dopdata.push(element.data);
            localStorage.setItem('dop-probationeeResults', JSON.stringify(dopdata));
          } 
          justiceEventsObj.push(element['data']);
          
          
        });
        

        JSON.parse(asset).forEach(element => {
          // console.log(`${element['dataSetId']}Results`,element['result']['content'])
          if (element['result'] != null) {
            localStorage.setItem(`${element['dataSetId']}Results`, JSON.stringify(element['result']['content']));

          } else {
            let emptyData = [];
            emptyData.push({exitCode: element['status']['exitCode'],Results:'[]'});
            localStorage.setItem(`${element['dataSetId']}Results`, JSON.stringify(emptyData));
          }

        });

        JSON.parse(contact).forEach(element => {
          console.log(`${element['dataSetId']}Results`,element['result'])
          if (element['result'] != null) {
            localStorage.setItem(`${element['dataSetId']}-contact-Results`, JSON.stringify(element['result']['content']));

          } 
          else {
            let emptyData = [];
            emptyData.push({exitCode: element['status']['exitCode'],Results:'[]'});
            localStorage.setItem(`${element['dataSetId']}-contact-Results`, JSON.stringify(emptyData));
            // localStorage.setItem(`${element['dataSetId']}Results`, '[]');
          }
        });

        this.router.navigate(['singlereport/reportdjop/' +
          this.report_name, searchId]);
      })
    } else if (this.report_name === 'กรมราชทัณฑ์') {
      this.specializedocService.getSearchById(searchId).subscribe(data => {
        console.log(data)
        localStorage.setItem('thaiNin', data['parameters']['thaiNin']);
        localStorage.setItem('startTime', data['startTime']);
        localStorage.setItem(`idb-doc-personDetail-reportResults`, JSON.stringify(data['personDetail']['items']));
        localStorage.setItem(`idb-doc-justiceEvents-reportResults`, JSON.stringify(data['justiceEvents']['items']));
        localStorage.setItem(`idb-doc-asset-reportResults`, JSON.stringify(data['asset']['items']));
        let personDetail = localStorage.getItem('idb-doc-personDetail-reportResults');
        let justiceEvents = localStorage.getItem('idb-doc-justiceEvents-reportResults');
        let asset = localStorage.getItem('idb-doc-asset-reportResults');

        JSON.parse(personDetail).forEach(element => {
          // console.log(`${element['dataSetId']}Results`,element['result']['content'])
          if (element['result'] != null) {
            localStorage.setItem(`${element['dataSetId']}Results`, JSON.stringify(element['result']['content']));

          } else {
            let emptyData = [];
            emptyData.push({exitCode: element['status']['exitCode'],Results:'[]'});
            localStorage.setItem(`${element['dataSetId']}Results`, JSON.stringify(emptyData));
          }

        });

        let justiceEventsObj = []
        let djopdata = []
        let docdata = []
        let dopdata = []
        JSON.parse(justiceEvents).forEach(element => {
          if (element.dataSetId == 'djop-juvenile-offender') {
            djopdata.push(element.data)
            localStorage.setItem('djop-juvenile-offenderResults', JSON.stringify(djopdata));
          } else if (element.dataSetId == 'doc-prisoner') {
            docdata.push(element.data);
            localStorage.setItem('doc-prisonerResults', JSON.stringify(docdata));
          } else if (element.dataSetId == 'dop-probationee') {
            dopdata.push(element.data);
            localStorage.setItem('dop-probationeeResults', JSON.stringify(dopdata));
          }
          justiceEventsObj.push(element['data']);
        });

        // localStorage.setItem('doc-prisonerResults', JSON.stringify(justiceEventsObj));

        JSON.parse(asset).forEach(element => {
          // console.log(`${element['dataSetId']}Results`,element['result']['content'])
          if (element['result'] != null) {
            localStorage.setItem(`${element['dataSetId']}Results`, JSON.stringify(element['result']['content']));

          } else {
            let emptyData = [];
            emptyData.push({exitCode: element['status']['exitCode'],Results:'[]'});
            localStorage.setItem(`${element['dataSetId']}Results`, JSON.stringify(emptyData));
          }

        });
        this.router.navigate(['singlereport/reportdoc/' +
          this.report_name, searchId]);
      })
    } else {
      this.router.navigate(['/']);
    }
  }
  /**
   * ดาวโหลดเป็น pdf
   */
  pfdDownload() {
    if (this.dataSearch.citizenCardNumber === null) {
      this.dataSearch.citizenCardNumber = '0';
    } else if (this.dataSearch.firstName && this.dataSearch.lastname) {
      this.dataSearch.firstName = '0';
      this.dataSearch.lastname = '0';
    }
    if (this.report_name === 'กรมคุมประพฤติ') {
      this.reportclick = `/singlereport/loaddata2/report1`;
    }
    else {
      this.router.navigate(['/']);
    }
  }
  // checkLblStatus() {
  //   if (this.lblStatus == 100) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }

  /**
   *
   * @param report_name รับชื่อรายงานจากการคลิ๊กจากหน้า 0014-1
   */
  getReportname(reportname: string) {
    this.report_name = reportname;
  }
  
  loadProfile() {
    if (localStorage.getItem('usernameLogin') !== '') {
      // const groupId = localStorage.getItem('usernameLogin');
      // console.log(groupId);
      const userProfile = localStorage.getItem('userProfile');

      const userData = JSON.parse(userProfile);
      // console.log(userData);
      if (userData !== null) {
        this.userService.findMyDataset().subscribe(data => {
          console.log(data)
          this.filter(data,this.report_name);

        }, error => {
          this.httpErrorResponse(null, null, error);
        });
      } else {
        this.router.navigate(['504']);
      }
    }
  }
  filter(value,report_name) {
    if (report_name == 'กรมคุมประพฤติ'){
      let idbDopPersonReport = value.filter(permistion=> permistion === 'idb.dop-person-report');
      if (idbDopPersonReport.length == 0 ){
        alert('ไม่มีสิทธิการเข้าใช้งาน');
        this.router.navigate(['401']);
      }
    }
    if (report_name == 'กรมพินิจและคุ้มครองเด็กและเยาวชน'){
      let idbDjopPersonReport = value.filter(permistion=> permistion === 'idb.djop-person-report');
      if (idbDjopPersonReport.length == 0 ){
        alert('ไม่มีสิทธิการเข้าใช้งาน');
        this.router.navigate(['401']);
      }
    }
    if (report_name == 'กรมราชทัณฑ์'){
      let idbDocPersonReport = value.filter(permistion=> permistion === 'idb.doc-person-report');
      if (idbDocPersonReport.length == 0 ){
        alert('ไม่มีสิทธิการเข้าใช้งาน');
        this.router.navigate(['401']);
      }
    }
  
  }
 
  /**
     *
     * @param no ลำดับ
     * @param dbService ชื่อฐานข้อมูล
     * @param error ข้อมูลที่ responseError กลับมา
     */
    httpErrorResponse(no: number, dbService: string, error: any) {
      let messageError: string;

      if (error.status === 504) {
        messageError = `<span class="badge badge-danger">
      เชื่อมต่อไม่ได้</span>`;
        this.router.navigate(['504']);
        console.log(error);
      } else if (error.status === 500) {
        this.router.navigate(['500']);
      } else if (error.status === 401) {
        messageError = `<span class="badge badge-danger">
      เจ้าหน้าที่ไม่ได้ทำการเข้าระบบด้วยบัตรประชาชน</span>`;
        this.router.navigate(['401']);
      } else if (error.status === 404) {
        console.log('เกิดข้อผิดพลาด');
        this.router.navigate(['404']);
      } else if (error.status === 0) {
        messageError = `<span class="badge badge-danger">
      ไม่พบข้อมูล</span>`;
        this.router.navigate(['0']);
      } else {
        messageError = `<span class="badge badge-danger">
      เกิดข้อผิดพลาดโดยไม่ทราบสาเหตุ</span>`;
      }
      // return `ลำดับ ${no} บริการ ${dbService} เกิดข้อผิดพลาด ${messageError}`;
      return `${messageError}`;
    }

    clearlocalStore() {
      this.source = Object.keys(environment.qm.sub[0]);
      for (const entry of this.source) {
        this.sub = Object.keys(environment.qm.sub[0][entry].sub[0]);
        for (const entry_sub of this.sub) {
          const db = environment.qm.sub[0][entry].sub[0][entry_sub].db;
          const schema = environment.qm.sub[0][entry].sub[0][entry_sub].schema;
          localStorage.removeItem(db);
          localStorage.removeItem(schema + 'Results');
          localStorage.setItem(db, 'true');
          localStorage.setItem('alldb', 'true');
          localStorage.removeItem('undefined');
          localStorage.removeItem('startTime');
          localStorage.removeItem('civilDatas');
          // localStorage.removeItem('report_name');
        }
      }
    }
    ngOnDestroy(): void {
      clearInterval(this.complete);
    }
}

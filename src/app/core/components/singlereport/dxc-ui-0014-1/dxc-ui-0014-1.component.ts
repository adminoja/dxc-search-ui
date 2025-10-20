import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Dxc_Model_SearchFillter } from '../../../../core/shared/models/Dxc_Model_SearchFillter';
import { ThemeLight } from '../../../shared/utils/theme-light';
import { environment } from '../../../../../environments/environment';
import { UserService } from 'src/app/core/shared/services/Userprofile/user.service';
import { DatasetPipe } from 'src/app/core/shared/pipe/dataset.pipe';
import { CountlengthPipe } from 'src/app/core/shared/pipe/countlength.pipe';


@Component({
  selector: 'app-dxc-ui-0014-1',
  templateUrl: './dxc-ui-0014-1.component.html',
  styleUrls: ['./dxc-ui-0014-1.component.css']
})
export class DxcUi00141Component implements OnInit {

  user: any;
  username: string;
  groupName: string;
  usernameLogin: any;
  isValid: boolean;
  // แสดงเงื่อนไขการค้นหา
  values: any;
  valueSingleReport: any = [];
  valueCidSingleReport: any = [];
  valueReport: any = [];
  valuesSub: any;
  keys: any;
  keysSub: any;

  title_sub: string;
  source: any;
  sub: any;

  lblSingleReport: string;
  lblResult: string;
  tgbCitizenNumber = 'เลขบัตรประชาชน';
  txtCitizenNumber: string;

  lblConditionEtc = 'เงื่อนไขเพิ่มเติม';
  chkSearchAdvance: boolean;
  lblNoteMessage = `ระบบ single report เหมาะสำหรับค้นหาข้อมูลจากเลขประจำตัวประชาชน ชื่อนามสกุลที่ถูกต้อง
  ในกรณีที่เงื่อนไขไม่ชัดเจน(เช่น ค้นชื่อที่ขึ้นต้นด้วย "ก") ระบบจะแสดงรายการผลการค้นหาสูงสุด 100 รายการต่อฐาน`;
  tgbFullname = 'ชื่อ - นามสกุล';

  lblFname = 'ชื่อ';
  txtFname = 'ชื่อจริง';
  lblLname = 'นามสกุล';
  txtLname = 'นามสกุล';
  tgbLicenseCar = 'ทะเบียนรถ';

  lblLicenseCar = 'เลขทะเบียน';
  txtLicenseCar = 'ตัวอย่าง กก-9999 หรือ กก 9999';
  lblProvince = 'จังหวัด';
  dpProvince: string[];

  btnSearch: HTMLButtonElement;
  lblNote = 'กรุณากรอก เลขบัตรประชาชน เลขบัตรประชาชนต้องเป็นตัวเลข 13 หลัก';
  tblResultList: HTMLTableElement;

  lblCitizenNumber = 'เลขบัตรประชาชน';

  tabFullname: string;
  dopaItems;
  shouldShow: any;

  // ข้อมูลที่ต้องการฟิลเตอร์มี เลขที่บัตรปชช., ชื่อ - นามสกุล, เลขทะเบียนรถ - จังหวัด
  citizenCardNumber: string;
  firstName: string;
  lastName: string;
  prisoner: string;
  casename: string;
  report_name: string;
  dataSetId: string;
  fnameLname : any[] = [];
  citizenId : any[] = [];

  private theme: ThemeLight;

  DXC_GROUP_DATA_ACL: any;
  checkData: boolean = true;

  reportname(name: any) {
    this.report_name = name;
  }
  public getKeys(data) {
    this.keys = Object.keys(data);
    return true;
  }
  public getKeysSub(data) {
    this.keysSub = Object.keys(data);
    return true;
  }
  constructor(private router: Router, 
    private routeparams: ActivatedRoute, 
    private userService: UserService, 
    private dataset: DatasetPipe,
    private countlengthPipe: CountlengthPipe) {
    this.values = environment.qm.sub;
    console.log(this.values)
    this.valuesSub = [];
    this.routeparams.params.subscribe(
      params => this.reportname(params['reportname'])
    );
    this.citizenCardNumber = '';
    this.firstName = '';
    this.lastName = '';
    this.prisoner = '';
    this.casename = '';
    this.dataSetId = '';
  }
  ngOnInit() {
    this.theme = new ThemeLight();
    
    localStorage.setItem('report_name', this.report_name);
    this.theme.loadScripts();
    this.clearlocalStore();
    this.loadProfile();
    this.isValid = true;
  }

  btnSearch_Click() {

    if (this.report_name === 'รายงาน Single Report') {
      this.dataSetId = '';
    } else if (this.report_name === 'กรมคุมประพฤติ') {
      this.dataSetId = 'idb-dop-person-report';
    } else if (this.report_name === 'กรมพินิจและคุ้มครองเด็กและเยาวชน') {
      this.dataSetId = 'idb-djop-person-report';
    } else if (this.report_name === 'กรมราชทัณฑ์') {
      this.dataSetId = 'idb-doc-person-report';
    }
    const dataSearch = new Dxc_Model_SearchFillter(this.citizenCardNumber, this.firstName, this.lastName, '', this.prisoner, this.casename,this.dataSetId);
    this.router.navigate(['dxcui0014/dxcui0018/',
      this.report_name,
      dataSearch.citizenCardNumber,
      this.firstName, this.lastName,
      this.prisoner, this.casename,this.dataSetId]
    );
  }
  onBackPage() {
    this.router.navigate(['dxcui0014/dxcui0014/']);
  }
  // checkDatabase(id) {
  //   const checkBox = document.getElementById('checkAll') as HTMLInputElement;
  //   const checkIs = document.getElementById(id) as HTMLInputElement;
  //   if (checkBox.checked === true) {
  //       checkIs.style.display = 'none';
  //       this.checkAll();
  //       localStorage.setItem('alldb', 'true');
  //   } else {
  //     checkIs.style.display = 'block';
  //     this.checkAll();
  //     localStorage.setItem('alldb', 'false');
  //   }
  // }
  // checkDatabaseFnameLname(event) {
  //   console.log(event)
  //   const checkBox = document.getElementById('checkAllFnameLname') as HTMLInputElement;
  //   const checkIs = document.getElementById(event.target.id) as HTMLInputElement;
  //   console.log(checkBox.checked)
  //   if (checkBox.checked === true) {
  //       this.checkAllV2(event);
  //       localStorage.setItem('alldb', 'true');
  //   } else {
  //       this.checkAllV2(event);
  //     localStorage.setItem('alldb', 'false');
  //   }
  // }
  checkDjop() {
    for (const dataAcl of this.DXC_GROUP_DATA_ACL) {
      sessionStorage.setItem(dataAcl.schema + 'db', 'false');
    }
    sessionStorage.setItem('investigate-juvenniledb', 'true');
    sessionStorage.setItem('alldb', 'true');
  }
  checkAll() {
    this.source = Object.keys(environment.qm.sub[0]);
    let schemaArray = [];
    
    for (let index = 0; index < this.DXC_GROUP_DATA_ACL.length; index++) {
      const element = this.DXC_GROUP_DATA_ACL[index];
      schemaArray.push(element)
    }
    for (const entry of this.source) {
      const chkDepart = document.getElementById(entry) as HTMLInputElement;
      chkDepart.checked = true;
      this.sub = Object.keys(environment.qm.sub[0][entry].sub[0]);
      for (const entry_sub of this.sub) {
        const db = environment.qm.sub[0][entry].sub[0][entry_sub].db;
        const schema = environment.qm.sub[0][entry].sub[0][entry_sub].schema;
        const singleSearchFnameLname = environment.qm.sub[0][entry].sub[0][entry_sub].singleSearchFnameLname;
        const chkSchema = document.getElementById(entry_sub) as HTMLInputElement;

        if (chkSchema !== null) {
          for (let index = 0; index < schemaArray.length; index++) {
            const element = schemaArray[index];
            if(element.allowValue == 'on') {
              chkSchema.checked = true;
              localStorage.setItem(element.schema + 'db', 'true');
            } else {
              chkSchema.checked = false;
              localStorage.setItem(element.schema + 'db', 'false');
            }
          }
        }
      }

    }
      let accordionList = [];
      let keys:any
      let values = environment.qm.sub;
      for (let index = 0; index < values.length; index++) {
        const element = values[index];
        // this.getKeys(element);
        for (let index = 0; index < Object.keys(element).length; index++) {
          const key = Object.keys(element)[index];
          accordionList.push(element[key]);
        }
      }
      for (const iterator of accordionList) {
        let titleEn = iterator.titleEn
        // console.log(titleEn)
        for (let index = 0; index < Object.keys(iterator.sub[0]).length; index++) {
          const key = Object.keys(iterator.sub[0])[index];
          let schema = iterator.sub[0][key].schema
          let singleSearch = iterator.sub[0][key].singleSearch
          let getDB = undefined;
          getDB = localStorage.getItem(schema + 'db')
        }
      }
  }

  checkAllV2(event, titleEn) {
    // console.log(this.valueSingleReport)
    let data = []
    if (event.target.checked){
      // for (let index = 0; index < this.valueSingleReport.length; index++) {
      //   const element = this.valueSingleReport[index];
      //   console.log(element.titleEn)
      // }
      for (const valueFnameLname of this.fnameLname) {
          data.push(valueFnameLname)
        for (const iterator of data) {
            const chkSchema = document.getElementById(valueFnameLname.titleEn) as HTMLInputElement;
            chkSchema.checked = true
            console.log(chkSchema.checked)
            valueFnameLname.checked = true
            localStorage.setItem(iterator.db, 'true');
        }
      }
    } 
    else {
      for (const valueFnameLname of this.fnameLname) {
        data.push(valueFnameLname)
        for (const iterator of data) {
            const chkSchema = document.getElementById(valueFnameLname.titleEn) as HTMLInputElement;
            chkSchema.checked = false
            console.log(chkSchema.checked)
            valueFnameLname.checked = false
            localStorage.setItem(iterator.db, 'false');
        }
      }
    }
  }

  checkDisable(key) {
    console.log(key);
    const keys = document.getElementById(key) as HTMLInputElement;
    // const values = document.getElementById(value) as HTMLInputElement;
    // console.log(values)
    let schemaArray = [];
    for (let index = 0; index < this.DXC_GROUP_DATA_ACL.length; index++) {
      const element = this.DXC_GROUP_DATA_ACL[index];
      schemaArray.push(element)
    }

    if (keys.checked === true && keys.id === key) {
      for (const entry of this.source) {
        this.sub = Object.keys(environment.qm.sub[0][key].sub[0]);
        console.log(this.sub)
        for (const entry_sub of this.sub) {
          const db = environment.qm.sub[0][key].sub[0][entry_sub].db;
          const chkSchema = document.getElementById(entry_sub) as HTMLInputElement;
          if (chkSchema !== null) {
            for (let index = 0; index < schemaArray.length; index++) {
              const element = schemaArray[index];
              if(element.allowValue == 'on' && element.schema + 'db' == db) {
                chkSchema.checked = true;
                localStorage.setItem(element.schema + 'db', 'true');
              } 
              // else if(element.allowValue == 'off' && element.schema + 'db' == db) {
              //   chkSchema.checked = true;
              //   localStorage.setItem(element.schema + 'db', 'true');
              // } 
            }
          }
        }
      }
    } else if (keys.checked === false && keys.id === key) {
      for (const entry of this.source) {
        this.sub = Object.keys(environment.qm.sub[0][key].sub[0]);
        console.log(this.sub)
        for (const entry_sub of this.sub) {
          const db = environment.qm.sub[0][key].sub[0][entry_sub].db;
          const chkSchema = document.getElementById(entry_sub) as HTMLInputElement;
          if (chkSchema !== null) {
            for (let index = 0; index < schemaArray.length; index++) {
              const element = schemaArray[index];
              if(element.allowValue == 'on' && element.schema + 'db' == db) {
                chkSchema.checked = false;
                localStorage.setItem(element.schema + 'db', 'false');
              } 
              else if(element.allowValue == 'off' && element.schema + 'db' == db) {
                chkSchema.checked = false;
                localStorage.setItem(element.schema + 'db', 'false');
              } 
            }
          }
        }
      }
    }
  }

  checkDisableV2(titleEn,event){
    let data1 = 
            { titleEn:'doc',
              title:'ราชทัณฑ์',
              schema:'doc-prisoner',
              entry_sub:'prisoner',
              db:'doc-prisonerdb',
              checked:true
            }

    let data = []
    if (event.target.checked){
      for (const valueFnameLname of this.fnameLname) {
        let value = valueFnameLname.schema.includes(titleEn)
        if(value) {
          data.push(valueFnameLname)
        }
        for (const iterator of data) {
          if (valueFnameLname.schema == iterator.schema) {
            valueFnameLname.checked = true
            localStorage.setItem(iterator.db, 'true');
          }
        }
        
      }
    } else {
      for (const valueFnameLname of this.fnameLname) {
        let value = valueFnameLname.schema.includes(titleEn)
        if(value) {
          data.push(valueFnameLname)
        }
        for (const iterator of data) {
          if (valueFnameLname.schema == iterator.schema) {
            valueFnameLname.checked = false
            localStorage.setItem(iterator.db, 'false');
          }
        }
      }
    }
  }

  checkDisableCidV2(title,event){
    console.log(title)
    let data1 = 
            {title:'ราชทัณฑ์',
              schema:'doc-prisoner',
              entry_sub:'prisoner',
              db:'doc-prisonerdb',
              checked:true
            }

    let data = []
    if (event.target.checked){
      for (const valuecitizenId of this.citizenId) {
        let value = valuecitizenId.titleTH.includes(title)
        if(value) {
          data.push(valuecitizenId)
        }
        for (const iterator of data) {
          if (valuecitizenId.schema == iterator.schema) {
            valuecitizenId.checked = true
            localStorage.setItem(iterator.db, 'true');
          }
        }
        
      }
    } else {
      for (const valuecitizenId of this.citizenId) {
        let value = valuecitizenId.titleTH.includes(title)
        if(value) {
          data.push(valuecitizenId)
        }
        for (const iterator of data) {
          if (valuecitizenId.schema == iterator.schema) {
            valuecitizenId.checked = false
            localStorage.setItem(iterator.db, 'false');
          }
        }
      }
    }
  }

  checkDb(key, keyx) {
    console.log(key);
    console.log(keyx);
    const keysx = document.getElementById(keyx) as HTMLInputElement;
    console.log(keysx.checked)
    if (keysx.checked === true && keysx.id === keyx) {
      this.sub = Object.keys(environment.qm.sub[0][key].sub[0]);
      const db = environment.qm.sub[0][key].sub[0][keyx].db;
      const chkSchema = document.getElementById(keyx) as HTMLInputElement;
      chkSchema.checked = true;
      localStorage.setItem(db, 'true');
    } else if (keysx.checked === false && keysx.id === keyx) {
      this.sub = Object.keys(environment.qm.sub[0][key].sub[0]);
      const db = environment.qm.sub[0][key].sub[0][keyx].db;
      const chkSchema = document.getElementById(keyx) as HTMLInputElement;
      if (chkSchema !== null) {
        chkSchema.checked = false;
        localStorage.setItem(db, 'false');
      }
    }
  }
  checkDbV2(titleEn, entry_sub, db, event) {
    // const keysx = document.getElementById(entry_sub) as HTMLInputElement;
    console.log(event.target.checked)
    console.log(db)
    if (event.target.checked){
      localStorage.setItem(db, 'true');
    } else {
      localStorage.setItem(db, 'false');
    }
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
        localStorage.removeItem(schema + 'db');
        localStorage.setItem(db, 'true');
        localStorage.setItem('alldb', 'true');
        localStorage.removeItem('undefined');
        localStorage.removeItem('civilDatas');
        // localStorage.removeItem('report_name');
      }
    }
  }
  tapClearLocalStore() {
    this.source = Object.keys(environment.qm.sub[0]);
    for (const entry of this.source) {
      this.sub = Object.keys(environment.qm.sub[0][entry].sub[0]);
      for (const entry_sub of this.sub) {
        const db = environment.qm.sub[0][entry].sub[0][entry_sub].db;
        const schema = environment.qm.sub[0][entry].sub[0][entry_sub].schema;
        localStorage.removeItem(db);
        localStorage.removeItem(schema + 'Results');
        localStorage.removeItem(schema + 'db');
        localStorage.removeItem('undefined');
        localStorage.removeItem('startTime');
        localStorage.removeItem('civilDatas');
      }
    }
  }
  onKeydown(event) {
    if (event.key === 'Enter') {
      this.btnSearch_Click();
    }
  }
  loadProfile() {
    if (localStorage.getItem('usernameLogin') !== '') {
      // const groupId = localStorage.getItem('usernameLogin');
      // console.log(groupId);
      const userProfile = localStorage.getItem('userProfile');

      const userData = JSON.parse(userProfile);
      // console.log(userData);
      if (userData !== null) {
        this.userService.findMyDataset().subscribe({
          next: data => {
            this.filter(data, this.report_name);
            this.DXC_GROUP_DATA_ACL = this.dataset.transform(data);
            this.clickTap('tgbCitizenNumber');
          },
          error: error => this.httpErrorResponse(null, null, error),
          complete: () => {
            // ถ้ามีโค้ดให้ทำหลังจบการ subscribe
          }
        });


        // this.userService.findMyDataset().subscribe(data => {
        //   // console.log(data)
        //   this.filter(data,this.report_name);
        //   this.DXC_GROUP_DATA_ACL = this.dataset.transform(data)
        //   // for (const dataAcl of this.DXC_GROUP_DATA_ACL) {
        //   //   if (dataAcl.allowValue == 'on') {
        //   //     localStorage.setItem(dataAcl.schema + 'db', 'true');
        //   //   } else {
        //   //     localStorage.setItem(dataAcl.schema + 'db', 'false');
        //   //   }
        //   // }
        // this.clickTap('tgbCitizenNumber')

        // }, error => {
        //   this.httpErrorResponse(null, null, error);
        // });
      } else {
        this.router.navigate(['504']);
      }
    }
    // this.userService.findByAcl().subscribe(data => {
    //   this.DXC_GROUP_DATA_ACL = data['content'];
    // });
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

  dataTable() {
    this.router.navigate(['singlereport/loaddata2/' + this.report_name]);
  }

  clickTap(event) {
      this.fnameLname = []
      this.citizenId = []
      this.source = Object.keys(environment.qm.sub[0]);
      let schema
      let singleSearchFnameLname
      let singleSearch
      let valueSingleReport = []
      let valueCidSingleReport = []
      for (const iterator of this.source) {
        this.sub = Object.keys(environment.qm.sub[0][iterator].sub[0]);
        for (const entry_sub of this.sub) {
          const db = environment.qm.sub[0][iterator].sub[0][entry_sub].db;
          schema = environment.qm.sub[0][iterator].sub[0][entry_sub].schema;
          singleSearchFnameLname = environment.qm.sub[0][iterator].sub[0][entry_sub].singleSearchFnameLname;
          singleSearch = environment.qm.sub[0][iterator].sub[0][entry_sub].singleSearch;
          let title = environment.qm.sub[0][iterator].title;
          let titleEn = environment.qm.sub[0][iterator].titleEn;
          let img = environment.qm.sub[0][iterator].img;
          if(typeof(singleSearch) == 'string' || singleSearchFnameLname == 'FnameLname') {
            let data = 
            {title:title, 
              img:img,
              titleEn:titleEn,
              checkes:true}
              valueCidSingleReport.push(data)
          } 
          if (singleSearchFnameLname == 'FnameLname') {
            let data = 
            {title:title, 
              img:img,
              titleEn:titleEn,
              checkes:true}
            valueSingleReport.push(data)
          }
        }
      }
      let result = Array.from(new Set(valueSingleReport.map(s => s.titleEn))).map(
        titleEn => {
          return {
            titleEn:titleEn,
            title:valueSingleReport.find(s => s.titleEn === titleEn).title,
            img:valueSingleReport.find(s => s.titleEn === titleEn).img,
          }
        }
      )
      this.valueSingleReport = result

      let resultCid = Array.from(new Set(valueCidSingleReport.map(s => s.titleEn))).map(
        titleEn => {
          return {
            titleEn:titleEn,
            title:valueCidSingleReport.find(s => s.titleEn === titleEn).title,
            img:valueCidSingleReport.find(s => s.titleEn === titleEn).img,
          }
        }
      )
      this.valueCidSingleReport = resultCid
      console.log(valueCidSingleReport)
      for (const entry of this.source) {
        this.sub = Object.keys(environment.qm.sub[0][entry].sub[0]);
        for (const entry_sub of this.sub) {
          const db = environment.qm.sub[0][entry].sub[0][entry_sub].db;
          schema = environment.qm.sub[0][entry].sub[0][entry_sub].schema;
          singleSearchFnameLname = environment.qm.sub[0][entry].sub[0][entry_sub].singleSearchFnameLname;
          singleSearch = environment.qm.sub[0][entry].sub[0][entry_sub].singleSearch;
          let title = environment.qm.sub[0][entry].sub[0][entry_sub].title;
          let titleTH = environment.qm.sub[0][entry].title;
          let titleEn = environment.qm.sub[0][entry].titleEn;
          const chkSchema = document.getElementById(entry_sub) as HTMLInputElement;
          if(typeof(singleSearch) == 'string' || singleSearchFnameLname == 'FnameLname') {
            let dataCid = 
            {title:title,
              schema:schema,
              entry_sub:entry_sub,
              db:db,
              checked:true,
              titleTH:titleTH,
              titleEn:titleEn
            }
            this.citizenId.push(dataCid)
          } 
          if (singleSearchFnameLname == 'FnameLname') {
            let data = 
            {title:title,
              schema:schema,
              entry_sub:entry_sub,
              db:db,
              checked:true,
              titleEn:titleEn
            }
            this.fnameLname.push(data)
          }
        }
      }
      if (event?.target?.id === 'tgbCitizenNumber') {
        this.tapClearLocalStore()
        if (localStorage.getItem('usernameLogin') !== '') {
          const userProfile = localStorage.getItem('userProfile');
          const userData = JSON.parse(userProfile);
          if (userData !== null) {
            this.userService.findMyDataset().subscribe(data => {
              this.filter(data,this.report_name);
              this.DXC_GROUP_DATA_ACL = this.dataset.transform(data)
              for (const dataAcl of this.DXC_GROUP_DATA_ACL) {
                for (let index = 0; index < this.citizenId.length; index++) {
                  const element = this.citizenId[index];
                  if(dataAcl.schema == element ) {
                    if (dataAcl.allowValue == 'on') {
                      localStorage.setItem(dataAcl.schema + 'db', 'true');
                    } 
                    else {
                      localStorage.setItem(dataAcl.schema + 'db', 'true');
                    }
                  }
                }
              }
    
            }, error => {
              this.httpErrorResponse(null, null, error);
            });
          } else {
            this.router.navigate(['504']);
          }
        }
      } else if(event?.target?.id === 'tgbFullname') {
        this.tapClearLocalStore()
        if (localStorage.getItem('usernameLogin') !== '') {
          const userProfile = localStorage.getItem('userProfile');
          const userData = JSON.parse(userProfile);
          if (userData !== null) {
            this.userService.findMyDataset().subscribe(data => {
              this.filter(data,this.report_name);
              this.DXC_GROUP_DATA_ACL = this.dataset.transform(data)
              let fnameLname = []
              for (let index = 0; index < this.fnameLname.length; index++) {
                const element = this.fnameLname[index].schema;
                fnameLname.push(element)
              }
              for (const dataAcl of this.DXC_GROUP_DATA_ACL) {
                let schema = fnameLname.filter(data => data == dataAcl.schema)
                if(dataAcl.schema == schema ) {
                  if (dataAcl.allowValue == 'on') {
                    localStorage.setItem(dataAcl.schema + 'db', 'true');
                  } 
                  else {
                    localStorage.setItem(dataAcl.schema + 'db', 'true');
                  }
                }
              }
    
            }, error => {
              this.httpErrorResponse(null, null, error);
            });
          } else {
            this.router.navigate(['504']);
          }
        }

      } 
      console.log(this.citizenId)
      // console.log(this.fnameLname)
  }

  onValidData(isValid) {
    this.isValid = isValid;
  }

  checkCidNumber(citizenid) {
    console.log(citizenid.name)
    let i, sum;
    if (citizenid.name.length !== 13) {
      this.isValid = true;
      console.log( this.isValid)
    }
    for (i = 0, sum = 0; i < 12; i++) {
      sum += parseInt(citizenid.name.charAt(i)) * (13 - i);
    }
    const mod = sum % 11;
    const check = (11 - mod) % 10;
    if (check === parseInt(citizenid.name.charAt(12))) {
      this.isValid = false;
    } else {
      this.isValid = true;
    }
  }
}

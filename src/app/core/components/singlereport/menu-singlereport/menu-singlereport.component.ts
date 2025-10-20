import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Dxc_Model_SearchFillter } from 'src/app/core/shared/models/Dxc_Model_SearchFillter';
import { DatasetPipe } from 'src/app/core/shared/pipe/dataset.pipe';
import { UserService } from 'src/app/core/shared/services/Userprofile/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-menu-singlereport',
  templateUrl: './menu-singlereport.component.html',
  styleUrls: ['./menu-singlereport.component.scss']
})
export class MenuSinglereportComponent implements OnInit {
  source: string[];
  sub: string[];
  idbDopPersonReport: any = null;
  idbDjopPersonReport: any = null;
  idbDocPersonReport: any = null;
  constructor(private router: Router, private userService: UserService, private dataset: DatasetPipe) {
  }

  ngOnInit() {
    this.clearlocalStore();
    this.loadProfile();
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
        localStorage.removeItem('idb-dop-person-reportResults');
        localStorage.removeItem('idb-dop-personDetail-reportResults');
        localStorage.removeItem('idb-dop-asset-reportResults');
        localStorage.removeItem('idb-dop-justiceEvents-reportResults');
        localStorage.removeItem('dop-prisonerResults');

        localStorage.removeItem('idb-djop-person-reportResults');
        localStorage.removeItem('idb-djop-justiceEvents-reportResults');
        localStorage.removeItem('idb-djop-personDetail-reportResults');
        localStorage.removeItem('idb-djop-asset-reportResults');
        localStorage.removeItem('djop-prisonerResults');

        localStorage.removeItem('idb-doc-person-reportResults');
        localStorage.removeItem('idb-doc-justiceEvents-reportResults');
        localStorage.removeItem('idb-doc-personDetail-reportResults');
        localStorage.removeItem('idb-doc-asset-reportResults');
        localStorage.removeItem('doc-prisonerResults');
        
        localStorage.setItem(db, 'true');
        localStorage.setItem('alldb', 'true');
        localStorage.removeItem('undefined');
      }
    }
  }
  loadProfile() {
    if (localStorage.getItem('usernameLogin') !== '') {
    const userProfile = localStorage.getItem('userProfile');
    const userData = JSON.parse(userProfile);
    if (localStorage.getItem('usernameLogin') !== '') {
      if (userData.departmentCode == userData.groupId) {
        this.userService.findMyDataset().subscribe(data => {
          this.filter(data);
        }, error => {
          this.httpErrorResponse(null, null, error);
        });
    } else {
      this.userService.findMyDataset().subscribe(data => {
        this.filter(data);
      }, error => {
        this.httpErrorResponse(null, null, error);
      });
    }
    } else {
      this.router.navigate(['504']);
    }
  }
}

 filter(value) {
    this.idbDopPersonReport = value.filter(permistion=> permistion === 'idb.dop-person-report');
    this.idbDjopPersonReport = value.filter(permistion=> permistion === 'idb.djop-person-report');
    this.idbDocPersonReport = value.filter(permistion=> permistion === 'idb.doc-person-report');
  }

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
}

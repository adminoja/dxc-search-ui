import { Component, OnInit, ViewChild, Inject, AfterViewInit } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { DxcUi0021Component } from '../dxc-ui-0021/dxc-ui-0021.component';
import { Router } from '@angular/router';
// import { ThemeLight } from '../../../shared/utils/theme-light';
import { UserService } from '../../../shared/services/Userprofile/user.service';
// import { MatAccordion } from '@angular/material';
import { MatDialog } from '@angular/material/dialog';
import { Dxcui0006Component } from '../../reason/dxcui0006/dxcui0006.component';
import { DatasetPipe } from 'src/app/core/shared/pipe/dataset.pipe';
import { MatAccordion } from '@angular/material/expansion';
declare var $: any;
@Component({
    selector: 'app-dxc-ui-0015',
    templateUrl: './dxc-ui-0015.component.html',
    styleUrls: ['./dxc-ui-0015.component.css']
})

export class DxcUi0015Component implements OnInit, AfterViewInit {
  // theme: ThemeLight;
  shouldShow: any;
  qmTitle: string;
  qmRemark: string;
  qmImg: string;
  departmentImg: string;
  departmentTitle: string; // ชื่อหน่วยงานหลัก

  obj: any;

  users: any;
  Keycloak: any;
  values: any;
  keys: any;

  DXC_GROUP_DATA_ACL: any;
  USER_ACCOUNT: any;
  groupId: any;
  keysSub: any;
  valuesSub: any;

  cells: any;
  Basic_search: any;

  panelOpenState = false;

  accordionList: any;

  downloads: any;
  manuals: any;
  otherlinks: any;
  faqs: any;

  schemaDepartmentCode: any;
  schemaGroupid: any;
  

  loadAPI: Promise<any>;
  @ViewChild('accordion', { static: true }) Accordion: MatAccordion;

  constructor(private rout: Router, private userService: UserService, public dialog: MatDialog, private dataset: DatasetPipe) {
    this.accordionList = [];
    // console.log(this.accordionList);
    this.values = environment.qm.sub;
    this.downloads = environment.download;
    this.manuals = environment.manual;
    this.otherlinks = environment.otherlink;
    this.faqs = environment.faq;
    this.valuesSub = [];
    // console.log(this.values[0]);
    this.loadAPI = new Promise((resolve) => {
      this.loadScript();
      resolve(true);
    });
    for (let index = 0; index < this.values.length; index++) {
      const element = this.values[index];
      this.getKeys(element);
      for (let index = 0; index < this.keys.length; index++) {
        const key = this.keys[index];
        // console.log(element[key]);
        this.accordionList.push(element[key]);
        // console.log('this.accordionList');
        // console.log(this.accordionList);
      }
    }
    // console.log(this.accordionList);
    // console.log(localStorage.getItem('agree'));
  }
  ngAfterViewInit(): void {
    // $('#multiple-two').modal('toggle')
    // if (localStorage.getItem('agree') === 'false' || localStorage.getItem('agree') === null) {
    //   // this.openDialog();
    //   $('#multiple-one').modal('show');
    // } 
    // else if (this.rout.navigate([''])) {
    //   $('#multiple-one').modal('show');
    // }
  }
  openDialog() {
    const dialogRef = this.dialog.open(Dxcui0006Component, { disableClose: true });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  ngOnInit() {
    if (!localStorage.getItem('foo')) {
      localStorage.setItem('foo', 'no reload');
      location.reload();
    } else {
      localStorage.removeItem('foo');
    }
    this.loadProfile();
  }
  lblDatabase_list(title: string, remark: string, img: string, qmImg: string) { }
  btnDatabase_Click(title: string, remark: string, img: string, departmentImg: string, departmentTitle: string) {
    this.qmTitle = title;
    this.qmRemark = remark;
    this.qmImg = img;
    this.departmentImg = departmentImg;
    this.departmentTitle = departmentTitle;
    this.rout.navigate(['localsearch/', title, remark, img, departmentImg, departmentTitle]);
  }
  public getKeys(data) {
    this.keys = Object.keys(data);
    return true;
  }
  public getKeysSub(data) {
    this.keysSub = Object.keys(data);
    return true;
  }
  loadProfile() {
    if (localStorage.getItem('usernameLogin') !== '') {
      // const groupId = localStorage.getItem('usernameLogin');
      const userProfile = localStorage.getItem('userProfile');

      const userData = JSON.parse(userProfile);
      // console.log(userData);
      if (userData != null || userData != undefined) {
        if (userData.departmentCode == userData.groupId) {
          this.userService.findMyDataset().subscribe(data => {
            this.DXC_GROUP_DATA_ACL = this.dataset.transform(data)
            this.schemaDepartmentCode = true;
            this.schemaGroupid = false;
            for (const dataAcl of this.DXC_GROUP_DATA_ACL) {
              if (dataAcl.allowValue == 'on') {
                localStorage.setItem(dataAcl.schema + 'db', 'true');
              } else if (dataAcl.allowValue == 'off'){
                localStorage.setItem(dataAcl.schema + 'db', 'false');
              } 
              // if (dataAcl.schema === 'djop-juvenile-offender' || dataAcl.schema === 'doc-prisoner' || dataAcl.schema === 'doc-reg-seize'
              //   || dataAcl.schema === 'doc-prisoner-no-just' || dataAcl.schema === 'doc-prisoner-images' || dataAcl.schema === 'dop-probationee') {
              //     console.log(dataAcl.allowValue)
              //     // if (dataAcl.allowValue === 'off') {
              //     //     dataAcl.schema = 'idb-released-offender'
              //     //     dataAcl.allowValue = 'off'
              //     //     console.log(dataAcl.schema)
              //     // }
              // }
            }

          }, error => {
            this.httpErrorResponse(null, null, error);
          });
        } else {
          this.userService.findMyDataset().subscribe(data => {
            this.DXC_GROUP_DATA_ACL = this.dataset.transform(data)
            this.schemaGroupid = true;
            this.schemaDepartmentCode = false;
            for (const dataAcl of this.DXC_GROUP_DATA_ACL) {
              if (dataAcl.allowValue == 'on') {
                localStorage.setItem(dataAcl.schema + 'db', 'true');
              } else {
                localStorage.setItem(dataAcl.schema + 'db', 'false');
              }
            }
          }, error => {
            this.httpErrorResponse(null, null, error);
          });
        }
      } else {
        this.rout.navigate(['504']);
      }

    }
    // this.userService.findByAcl().subscribe(data => {
    //   this.DXC_GROUP_DATA_ACL = data['content'];
    // });
  }
  filter(value) {
    const result = this.values.filter(filters => {
      const keys = Object.keys(this.values[0]).map(function (key) {
        return key;
      });
      for (const key of keys) {
        if (filters[key].title.includes(value)) {
          this.values = [];
          this.values = [
            {
              key: filters[key]
            }
          ];
        }
      }
    });
    // console.log(result);
  }
  cleanFilter() {
    this.values = environment.qm.sub;
  }
  beforePanelClosed(panel) {
    panel.isExpanded = false;
    console.log("Panel going to close!");
  }
  beforePanelOpened(panel) {
    panel.isExpanded = true;
    console.log("Panel going to  open!");
  }

  afterPanelClosed() {
    console.log("Panel closed!");
  }
  afterPanelOpened() {
    console.log("Panel opened!");
  }


  closeAllPanels() {
    this.Accordion.closeAll();
  }
  openAllPanels() {
    this.Accordion.openAll();
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
      this.rout.navigate(['504']);
      console.log(error);
    } else if (error.status === 500) {
      this.rout.navigate(['500']);
    } else if (error.status === 401) {
      messageError = `<span class="badge badge-danger">
      เจ้าหน้าที่ไม่ได้ทำการเข้าระบบด้วยบัตรประชาชน</span>`;
      this.rout.navigate(['401']);
    } else if (error.status === 404) {
      console.log('เกิดข้อผิดพลาด');
      this.rout.navigate(['404']);
    } else if (error.status === 0) {
      messageError = `<span class="badge badge-danger">
      ไม่พบข้อมูล</span>`;
      this.rout.navigate(['0']);
    } else {
      messageError = `<span class="badge badge-danger">
      เกิดข้อผิดพลาดโดยไม่ทราบสาเหตุ</span>`;
    }
    // return `ลำดับ ${no} บริการ ${dbService} เกิดข้อผิดพลาด ${messageError}`;
    return `${messageError}`;
  }
  public loadScript() {
    var isFound = false;
    var scripts = document.getElementsByTagName("script")
    for (var i = 0; i < scripts.length; ++i) {
      if (scripts[i].getAttribute('src') != null && scripts[i].getAttribute('src').includes("loader")) {
        isFound = true;
      }
    }

    if (!isFound) {
      var dynamicScripts = [
        "assets/js/vendor/jquery.dataTables.min.js",
        "assets/js/vendor/dataTables.bootstrap4.js",
        "assets/js/vendor/dataTables.responsive.min.js",
        "assets/js/vendor/responsive.bootstrap4.min.js",
        "assets/js/vendor/dataTables.checkboxes.min.js",
        "assets/js/pages/demo.customers.js"
      ];

      for (var i = 0; i < dynamicScripts.length; i++) {
        let node = document.createElement('script');
        node.src = dynamicScripts[i];
        node.type = 'text/javascript';
        node.async = false;
        node.charset = 'utf-8';
        document.getElementsByTagName('head')[0].appendChild(node);
      }

    }
  }
}

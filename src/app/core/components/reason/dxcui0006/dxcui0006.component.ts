import { Component, OnInit, ViewChild } from '@angular/core';
import { IDxcSearchReasonItem } from '../../../shared/models/mssql/IDxcSearchReasonItem';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ReasonService } from '../../../shared/services/reason/reason.service';
import { Dateexpire } from '../../../shared/utils/dateexpire';
import { UseraccountService } from '../../../shared/services/UserAccount/user-account.service'
import { IUserAccountItem } from 'src/app/core/shared/models/mssql/IUserAccountItem';
import { Router } from '@angular/router';
// import { stringify } from '@angular/compiler/src/util';
import { UserloginService } from 'src/app/core/shared/services/Userlogin/userlogin.service';

declare var $: any;

@Component({
  selector: 'app-dxcui0006',
  templateUrl: './dxcui0006.component.html',
  styleUrls: ['./dxcui0006.component.scss'],
  providers: [
    FormBuilder
  ]
})
export class Dxcui0006Component implements OnInit, IDxcSearchReasonItem, IUserAccountItem {
  @ViewChild('closebutton',{ static: false }) closebutton;
  officerNumber: string;
  citizenCardNumber: string;
  departmentCode: string;
  username: string;
  password: string;
  accountType: string;
  activationCode: string;
  registerDate: string;
  lastAccessDate: string;
  createDate: string;
  isBlock: string;
  status: string;
  subStatus: string;
  exprDate: string;
  email: string;
  permissions: string;
  countLogin: string;
  countSearch: string;
  prefix: string;
  firstName: string;
  lastName: string;
  address: string;
  phoneNumber: string;
  hadToken: string;
  adAccount: string;
  groupId: string;
  firstNameEn: string;
  lastNameEn: string;
  position: string;
  createrId: string;
  createrName: string;
  apikey: string;
  isAllowServiceAPI: string;
  apiEnabled: string;
  drmAccount: string;
  drmAccountID: string;
  drmAccountStatus: string;
  countLoginFail: string;
  deletedDatetime: string;
  deleteUsername: string;
  deleteEmail: string;
  deleteCitizenCardNumber: string;
  deleteAdminId: string;
  deleted: string;
  profileCompletedDateTime: string;
  sys_update_registerDate_byscript: string;
  sys_update_lastAccessDate_byscript: string;
  refId: string;
  hideOnReport: string;
  approvalStatus: string;
  approvalStatusBy: string;
  approvalRemark: string;
  approvalDate: string;
  province: string;
  subordinate: string;

  _dateOfExpire: number;
  id: string;
  personal: string;
  caseInfo: string;
  reasons: string;
  agree: string;
  authenId: string;
  userId: string;
  timestamp: string;
  reasons_select: string;
  reasonForm: FormGroup;
  checkaccept: boolean = true;
  dateNow: Date;
  dateExpire: Dateexpire;
  expireDay: string;
  items: any;
  datas: any = [];

  constructor(private router: Router, private dxcreasonservice: ReasonService, private userloginService: UserloginService, private fb: FormBuilder) {
      this.dateNow = new Date();
      this.getcalulaterExpireDay();
      this.reasonForm = this.fb.group({ 
      personal: [''],
      caseInfo: [''],
      reasons_select: ['กรุณาเลือก', Validators.requiredTrue],
      reasons: [''],
      agree: [false, Validators.requiredTrue],
    });
  }

  ngOnInit() {
    
    let accountType = JSON.parse(localStorage.getItem('userProfile'));
    this.accountType = accountType['accountType']
  }

  getcalulaterExpireDay() {
    let userProfile = JSON.parse(localStorage.getItem('userProfile'));
    let username = userProfile['preferred_username'];
    console.log(username)
    this.userloginService.getCountExpireDate(username).subscribe(data => {
      this.datas = data
      for (const iterator of this.datas) {
        this.expireDay = iterator.countExprDate
        console.log(this.expireDay)
      }
    }, err => {
      console.log(err);
      this.dateExpire = userProfile['exprDate'];
      this.dateExpire = new Dateexpire(this.dateNow.toString(), userProfile['exprDate']);
      this.dateExpire.calulaterExpireDay();
      this.expireDay = this.dateExpire.countOfExpireDay.toFixed(0); // ปัดเศษทศนิยม  
      console.log(this.expireDay)
    });
  }

  ClickCheckBox() {
    var agree = document.getElementById("agree") as HTMLInputElement;
    var select = document.getElementById("reasons_select") as HTMLInputElement;
    console.log(agree)
    if (agree.checked === true && select.value !== 'กรุณาเลือก') {
      this.checkaccept = false;
    } else {
      this.checkaccept = true;
    }

    if (agree.checked == true && select.value !== 'กรุณาเลือก') {
      localStorage.setItem("agree", "true");
      localStorage.setItem("reasons_select", "true");
    } else {
      localStorage.setItem("agree", "false");
      localStorage.setItem("reasons_select", "false");
    }
  }


  onSubmit() {
    // console.log(this.reasonForm.value);
    let user;
    let session_state: string;
    let userProfile = JSON.parse(localStorage.getItem('userProfile'));
    user = userProfile['accountId'];
    session_state = userProfile['session_state'];
    const userId = user.substring(39);
    console.log(userId);
    var reasons_select = document.getElementById("reasons_select") as HTMLInputElement;
    this.agree = localStorage.getItem("agree");
    var personal = document.getElementById("personal") as HTMLInputElement;
    var caseInfo = document.getElementById("caseInfo") as HTMLInputElement;
    var reasons = document.getElementById("reasons") as HTMLInputElement;
    var today = new Date();
    console.log(this.agree)
    console.log(reasons_select.value)
    if (this.agree == "true" && reasons_select.value != "1") {
          this.dxcreasonservice.UpdateReason(personal.value, caseInfo.value,
             reasons.value, reasons_select.value, session_state, userId, this.agree, today.toLocaleDateString());
             this.router.navigate(['/localsearch']);
    } else {
        console.log("btn_Click false");
    }
 
    this.closebutton.nativeElement.click();
  }

  addItem(newItem: any){
    this.items = newItem;
    if (localStorage.getItem('agree') === 'false' || localStorage.getItem('agree') === null) {
      // this.openDialog();
      if(this.items > 0 ) {
        $('#multiple-two').modal('show');
      } else if (this.items == 0) {
        $('#multiple-one').modal('show');
      }
    } 
    else if (this.router.navigate([''])) {
      if(this.items > 0 ) {
        $('#multiple-two').modal('show');
      } else if (this.items == 0) {
        $('#multiple-one').modal('show');
      }
    }
  }

  signOut() {
    $('#logout').modal('show');
  }

  cancelSignOut() {
    $('#multiple-one').modal('show');
  }

  logout() {
    localStorage.clear();
  }

}

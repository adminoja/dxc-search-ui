// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { FormBuilder, FormGroup } from '@angular/forms';
// import { IUserAccountItem } from 'src/app/core/shared/models/mssql/IUserAccountItem';
// import { UserAccountService } from 'src/app/core/shared/services/UserAccount/user-account.service';

// @Component({
//   selector: 'app-dxcui030',
//   templateUrl: './dxcui030.component.html',
//   styleUrls: ['./dxcui030.component.scss']
// })
// export class Dxcui030Component implements OnInit, IUserAccountItem {

//   id: string;
//   officerNumber: string;
//   citizenCardNumber: string;
//   departmentCode: string;
//   username: string;
//   password: string;
//   accountType: string;
//   activationCode: string;
//   registerDate: string;
//   lastAccessDate: string;
//   createDate: string;
//   isBlock: string;
//   status: string;
//   subStatus: string;
//   exprDate: string;
//   email: string;
//   permissions: string;
//   countLogin: string;
//   countSearch: string;
//   prefix: string;
//   firstName: string;
//   lastName: string;
//   address: string;
//   phoneNumber: string;
//   hadToken: string;
//   adAccount: string;
//   groupId: string;
//   firstNameEn: string;
//   lastNameEn: string;
//   position: string;
//   createrId: string;
//   createrName: string;
//   apikey: string;
//   isAllowServiceAPI: string;
//   apiEnabled: string;
//   drmAccount: string;
//   drmAccountID: string;
//   drmAccountStatus: string;
//   countLoginFail: string;
//   deletedDatetime: string;
//   deleteUsername: string;
//   deleteEmail: string;
//   deleteCitizenCardNumber: string;
//   deleteAdminId: string;
//   deleted: string;
//   profileCompletedDateTime: string;
//   sys_update_registerDate_byscript: string;
//   sys_update_lastAccessDate_byscript: string;
//   refId: string;
//   hideOnReport: string;
//   approvalStatus: string;
//   approvalStatusBy: string;
//   approvalRemark: string;
//   approvalDate: string;
//   province: string;
//   subordinate: string;
//   model: any = {};

//   reasonForm: FormGroup;

//   constructor(private router: Router, private fb: FormBuilder, private dxcreasonservice: UserAccountService) {
//     this.reasonForm = this.fb.group({
//       // id: "",
//       citizenCardNumber: "",
//       username: "",
//       firstName: "",
//       lastName: "",
//       firstNameEn: "",
//       lastNameEn: "",
//       departmentCode: "",
//       province: "",
//       position: "",
//       subordinate: "",

//       registerDate: "",
//       exprDate: "",

//     })

//     console.log(this.reasonForm);
//   }

//   ngOnInit() {
//   }
//   goToNext() {
//     // Navigate to the result page
//   }
//   onSubmit() {
//     this.dxcreasonservice.CreateReason(this.reasonForm.value);

//   }

// }

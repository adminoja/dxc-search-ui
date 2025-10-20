import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { IUserAccountItem } from '../../models/mssql/IUserAccountItem';
import { Observable } from 'rxjs'; // ✅ ใช้ได้ทุกเวอร์ชันใหม่
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UseraccountService {
  apiUrl: string;
  baseUrl: string;

  constructor(private http: HttpClient) { //ประกาศตัวแปร http เพื่อเรียกใช้

    this.apiUrl = environment.Dxc_Model_UserAccount[0].url.production;
    this.baseUrl = environment.Dxc_Model_GetUserAccount[0].url.production;
  }

  // GetUserAccount() {
  //   //return Data ออกมา
  //   console.log("URL" + this.baseUrl);
  //   return this.http.get(this.baseUrl);
  // }
  GetUserAccount(username: string): Observable<{ length: number }> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token') ? ('Bearer ' + localStorage.getItem('token')) : 'NO-TOKEN',
      }),
    };
    return this.http.get<{ length: number }>(this.baseUrl + `userName/${username}`, httpOptions);
  }

  UpdateUserProfile(UserName: string, citizenCard: string, firstname: string, lastname: string,
    department: string, Account: string, Email: string, phone: string, PassWord: string, today: string) {
    // console.log("DATAAAAAAAAAA" + UserName + citizenCard + today)
    this.http.post(this.apiUrl + "/update", {
      id: "1",
      username: UserName,
      citizenCardNumber: citizenCard,
      firstName: firstname,
      lastName: lastname,
      phoneNumber: phone,
      email: Email,
      departmentCode: department,
      accountType: Account,
      password: PassWord,
      registerDate: today,
      activationCode: "test1234",
      groupId: "testgroupId",
    }).subscribe(res => {
      console.log("AAA" + res);
    }, err => {
      console.log(err);
    })
  }

  UpdateUserAccount(Email: string) {
    console.log("Email" + Email);
    return this.http.post(this.apiUrl + "/update", {
      id: "1",
      email: Email,
    })
  }

  CreateReason(UserAccount: IUserAccountItem) {
    this.http.post(this.baseUrl, {
      // id: UserAccount.id,
      // officerNumber: UserAccount.officerNumber,
      // citizenCardNumber: UserAccount.citizenCardNumber,
      // departmentCode: UserAccount.departmentCode,
      citizenCardNumber: UserAccount.citizenCardNumber,
      username: UserAccount.username,
      firstName: UserAccount.firstName,
      lastName: UserAccount.lastName,
      firstNameEn: UserAccount.firstNameEn,
      lastNameEn: UserAccount.lastNameEn,
      departmentCode: UserAccount.departmentCode,
      province: UserAccount.province,
      position: UserAccount.position,
      subordinate: UserAccount.subordinate,

    }).subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);
    })
  }

}


// import { Injectable } from '@angular/core';
// import { environment } from '../../../../../environments/environment';
// import { HttpClient } from '@angular/common/http';
// import { IUserAccountItem } from '../../models/mssql/IUserAccountItem';


// @Injectable({
//   providedIn: 'root'
// })
// export class UserAccountService {
//   baseUrl: string = environment.Dxc_Model_UserAccount[0].url.production;
//   constructor(private http: HttpClient) { //ประกาศตัวแปร http เพื่อเรียกใช้

//   }

//   GetUserAccount() {
//     //return Data ออกมา
//     console.log("URL" + this.baseUrl);
//     return this.http.get(this.baseUrl);

//   }

//   CreateReason(UserAccount: IUserAccountItem) {
//     this.http.post(this.baseUrl, {
//       // id: UserAccount.id,
//       // officerNumber: UserAccount.officerNumber,
//       // citizenCardNumber: UserAccount.citizenCardNumber,
//       // departmentCode: UserAccount.departmentCode,
//       citizenCardNumber: UserAccount.citizenCardNumber,
//       username: UserAccount.username,
//       firstName: UserAccount.firstName,
//       lastName: UserAccount.lastName,
//       firstNameEn: UserAccount.firstNameEn,
//       lastNameEn: UserAccount.lastNameEn,
//       departmentCode: UserAccount.departmentCode,
//       province: UserAccount.province,
//       position: UserAccount.position,
//       subordinate: UserAccount.subordinate,


//     }).subscribe(res => {
//       console.log(res);
//     }, err => {
//       console.log(err);
//     })
//   }
// }

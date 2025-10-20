import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ThaiDService {
  baseUrl: string = environment.Dxc_Model_Login_ThaiD[0].url.production;
  // 1. ตรวจสอบสถานะเดิมจาก localStorage (เผื่อ user กด refresh)
  private currentStatus = localStorage.getItem('isThaiDLoggedIn') === 'true';

  // 2. สร้าง "กล่องเก็บสถานะ" ที่ component อื่นๆ มา subscribe ได้
  private loginStatus = new BehaviorSubject<boolean>(this.currentStatus);
  
  // 3. เปิดช่องให้คนอื่นมา "ฟัง" สถานะนี้
  public loginStatus$ = this.loginStatus.asObservable();
  constructor(private http: HttpClient) { }

  setLoginStatus(isLoggedIn: boolean): void {
    if (isLoggedIn) {
      localStorage.setItem('isThaiDLoggedIn', 'true');
    } else {
      localStorage.removeItem('isThaiDLoggedIn');
    }
    // 4. ส่งสถานะใหม่ไปให้ทุก component ที่ "ฟัง" อยู่
    this.loginStatus.next(isLoggedIn);
  }

  sendCodeThaiD(code: string): Observable<any> {
    
    const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          // 'Authorization': this.token
        }),
    };
    return this.http.post(this.baseUrl, { code: code },httpOptions); 
    // const res = {
    //   "result": "Success"
    //   }
    // return of(res);
  }


}

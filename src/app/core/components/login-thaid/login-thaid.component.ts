import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ThaiDService } from '../../shared/services/thai-d.service';

declare var $;

@Component({
  selector: 'app-login-thaid',
  templateUrl: './login-thaid.component.html',
  styleUrls: ['./login-thaid.component.scss']
})
export class LoginThaidComponent implements OnInit {

  constructor(private router: Router,private route: ActivatedRoute, private thaiDService: ThaiDService) { }

  ngOnInit(): void {
    const code = this.route.snapshot.queryParamMap.get('code');
    // const code = 'NmVjNTYzZTEtNjBlZi00YTFkLTgwYjktYjA5NDNiN2I3ZjgyIzI2MjBmNWFmLTY1M2YtNDc4NC05ODM1LTBmZmIwMzc2MDQwYg'
    const state = this.route.snapshot.queryParamMap.get('state');
    console.log('Code:', code);
    console.log('State:', state);
    this.thaiDService.sendCodeThaiD(code).subscribe(res => {
      // โค้ดสำหรับจัดการกับ 'res' (response) ที่ส่งกลับมาจาก service
      // เช่น แสดงผลลัพธ์ หรือเก็บค่าไว้
      console.log(res.result); 
      if (res.result === 'Success') {
        this.thaiDService.setLoginStatus(true);
        $('#login-thaid').modal('toggle')
      }

      // ถ้าต้องการจัดการกับ Error (กรณี API พัง)
    }, err => {
      console.error('เกิดข้อผิดพลาด:', err);
    });
  }

  confirmLoginThaiD() {
    this.router.navigate(['/localsearch']);
  }

}

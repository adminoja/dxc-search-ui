import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-errormessage-ui',
  templateUrl: './errormessage-ui.component.html',
  styleUrls: ['./errormessage-ui.component.scss']
})
export class ErrormessageUiComponent implements OnInit {
  @Input() messageErrorUI: number;
  @Input() debugMessage: string;
  messageError: string;
  obj: any;
  constructor() { }

  ngOnInit() {
    // this.errorStatus = err.status;
    console.log(this.debugMessage)
    const errorStatus = this.messageErrorUI;
    if (this.messageErrorUI === 504) {
      this.messageError = `เซิร์ฟเวอร์มีปริมาณใช้งานสูงโปรดลองอีกครั้ง`;
    } else if (this.messageErrorUI === 500 && this.debugMessage !== '[95011] No permission in requested service' 
      && this.debugMessage !== '[95004] No permission in Linkage Center or OfficeID is incorrect') {
      this.messageError = `มีข้อผิดพลาดเกิดขึ้นบนเซิร์ฟเวอร์โปรดติดต่อผู้ดูแลระบบ`;
    } else if (this.messageErrorUI === 505) {
      this.messageError = `ระบบไม่รองรับวิธีการร้องขอที่ส่งมา`;
    } else if (this.messageErrorUI === 401) {
      this.messageError = `ไม่ได้ login หรือ ระบุตัวตนเข้าสู่ระบบ`;
    } else if (this.messageErrorUI === 404) {
      this.messageError = `ไม่พบข้อมูลที่ท่านค้นหา`;
    } else if (this.messageErrorUI === 406) {
      this.messageError = `การร้องขอไม่ถูกต้อง ไม่เป็นไปตามข้อกำหนด`;
    } else if (this.messageErrorUI === 0) {
      this.messageError = `พบปัญหา การตอบสนองล้มเหลวของ HTTP สำหรับ status 0 ข้อผิดพลาดที่ไม่รู้จัก`;
    } else {
      this.messageError = `พบปัญหา เกิดข้อผิดพลาดโดยไม่ทราบสาเหตุ`;
    }
    

  }
}

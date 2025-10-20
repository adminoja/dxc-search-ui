import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DxcUi00141Component } from './dxc-ui-0014-1.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { DriverlicenseService } from '../../../shared/services/dxc/dlt/driverlicense.service';
import { HeaderComponent } from '../header/header.component';
import { HttpClient } from '../../../../../../node_modules/@types/selenium-webdriver/http';
import { HttpClientModule } from '../../../../../../node_modules/@angular/common/http';
import { ThaiDatePipe } from 'src/app/core/shared/pipe/thaidate.pipe';



describe('DxcUi00141Component', () => {
  let component: DxcUi00141Component;
  let fixture: ComponentFixture<DxcUi00141Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DxcUi00141Component, HeaderComponent, ThaiDatePipe],
      imports: [
        HttpClientModule,
        FormsModule,
        RouterTestingModule,
      ],
      providers: [
        DriverlicenseService,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DxcUi00141Component);
    component = fixture.componentInstance;
    //fixture.detectChanges();
  });

  describe('DxcUi00141Component - TEST', () => {

    // xit('เลขบัตรประชาชน', () => {
    //   expect(component.tgbCitizenNumber).toEqual('เลขบัตรประชาชน'); // Expectation - หวังว่า true ต้องเป็น true (แหงละ)
    // });

    // xit('เงื่อนไขเพิ่มเติม', () => {
    //   expect(component.lblConditionEtc).toEqual('เงื่อนไขเพิ่มเติม'); // Expectation - หวังว่า true ต้องเป็น true (แหงละ)
    // });

    // xit("ระบบ single report เหมาะสำหรับค้นหาข้อมูลจากเลขประจำตัวประชาชน ชื่อนามสกุลหรือเลขทะเบียนรถที่ถูกต้อง ในกรณีที่เงื่อนไขไม่ชัดเจน(เช่น ค้นชื่อที่ขึ้นต้นด้วย 'ก') ระบบจะแสดงรายการผลการค้นหาสูงสุด 100 รายการต่อฐาน", () => {
    //   expect(component.lblNoteMessage).toEqual("ระบบ single report เหมาะสำหรับค้นหาข้อมูลจากเลขประจำตัวประชาชน ชื่อนามสกุลหรือเลขทะเบียนรถที่ถูกต้อง ในกรณีที่เงื่อนไขไม่ชัดเจน(เช่น ค้นชื่อที่ขึ้นต้นด้วย 'ก') ระบบจะแสดงรายการผลการค้นหาสูงสุด 100 รายการต่อฐาน"); // Expectation - หวังว่า true ต้องเป็น true (แหงละ)
    // });

    // xit("ชื่อ - นามสกุล", () => {
    //   expect(component.tgbFullname).toEqual("ชื่อ - นามสกุล"); // Expectation - หวังว่า true ต้องเป็น true (แหงละ)
    // });

    // xit("ชื่อ", () => {
    //   expect(component.lblFname).toEqual("ชื่อ"); // Expectation - หวังว่า true ต้องเป็น true (แหงละ)
    // });

    // xit("ชื่อจริง หรือส่วนหนึ่งของชื่อ", () => {
    //   expect(component.txtFname).toEqual("ชื่อจริง หรือส่วนหนึ่งของชื่อ"); // Expectation - หวังว่า true ต้องเป็น true (แหงละ)
    // });

    // xit("นามสกุล", () => {
    //   expect(component.lblLname).toEqual("นามสกุล"); // Expectation - หวังว่า true ต้องเป็น true (แหงละ)
    // });

    // xit("นามสกุล หรือส่วนหนึ่งของนามสกุล", () => {
    //   expect(component.txtLname).toEqual("นามสกุล หรือส่วนหนึ่งของนามสกุล"); // Expectation - หวังว่า true ต้องเป็น true (แหงละ)
    // });

    // xit("ทะเบียนรถ", () => {
    //   expect(component.tgbLicenseCar).toEqual("ทะเบียนรถ"); // Expectation - หวังว่า true ต้องเป็น true (แหงละ)
    // });

    // xit("เลขทะเบียน", () => {
    //   expect(component.lblLicenseCar).toEqual("เลขทะเบียน"); // Expectation - หวังว่า true ต้องเป็น true (แหงละ)
    // });

    // xit("ตัวอย่าง กก-9999 หรือ กก 9999", () => {
    //   expect(component.txtLicenseCar).toEqual("ตัวอย่าง กก-9999 หรือ กก 9999"); // Expectation - หวังว่า true ต้องเป็น true (แหงละ)
    // });

    // xit("จังหวัด", () => {
    //   expect(component.lblProvince).toEqual("จังหวัด"); // Expectation - หวังว่า true ต้องเป็น true (แหงละ)
    // });

    // xit("กรุณากรอก เลขบัตรประชาชน เลขบัตรประชาชนต้องเป็นตัวเลข 13 หลัก", () => {
    //   expect(component.lblNote).toEqual("กรุณากรอก เลขบัตรประชาชน เลขบัตรประชาชนต้องเป็นตัวเลข 13 หลัก"); // Expectation - หวังว่า true ต้องเป็น true (แหงละ)
    // });

    // xit("เลขบัตรประชาชน", () => {
    //   expect(component.lblCitizenNumber).toEqual("เลขบัตรประชาชน"); // Expectation - หวังว่า true ต้องเป็น true (แหงละ)
    // });

    // xit(`เช็คฟังก์ชั่น report_name`, async(() => {
    //   let name = 'TEST'
    //   component.reportname(name);
    //   expect(component.report_name).toEqual('TEST');
    // }));

    // xit('should create', () => {
    //   expect(component).toBeTruthy();
    // });
  });
});

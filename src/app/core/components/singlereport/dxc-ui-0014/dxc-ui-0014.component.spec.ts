import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DxcUi0014Component } from './dxc-ui-0014.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from '../header/header.component';

import { DriverlicenseService } from '../../../shared/services/dxc/dlt/driverlicense.service';
import { HttpClientModule } from '@angular/common/http';


describe('DxcUi0014Component', () => {
  let component: DxcUi0014Component;
  let fixture: ComponentFixture<DxcUi0014Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DxcUi0014Component, HeaderComponent],
      imports: [
        RouterTestingModule,
        HttpClientModule,
      ],
      providers: [

      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DxcUi0014Component);
    component = fixture.componentInstance;
    //เช็คคำสั่ง fixture.detectChanges();
  });

  describe('DxcUi0014Component - TEST', () => {


    // xit(`รายงาน Single Report`, async(() => {
    //   const fixture = TestBed.createComponent(DxcUi0014Component);
    //   const app = fixture.debugElement.componentInstance;
    //   expect(app.lblSingleReportDxc).toEqual('รายงาน Single Report');
    // }));

    // xit(`รายงานสนับสนุนการแสวงหาข้อเท็จจริงกรมคุมประพฤติ`, async(() => {
    //   const fixture = TestBed.createComponent(DxcUi0014Component);
    //   const app = fixture.debugElement.componentInstance;
    //   expect(app.lblSingleReportProbation).toEqual('รายงานสนับสนุนการแสวงหาข้อเท็จจริงกรมคุมประพฤติ');
    // }));

    // xit(`รายงานสนับสนุนการสืบเสาะ ค.ป.๐๔.๑ กรมพินิจฯ`, async(() => {
    //   const fixture = TestBed.createComponent(DxcUi0014Component);
    //   const app = fixture.debugElement.componentInstance;
    //   expect(app.lblSingleReportConsider).toEqual('รายงานสนับสนุนการสืบเสาะ ค.ป.๐๔.๑ กรมพินิจฯ');
    // }));

    // xit(`เช็คฟังก์ชั่น report_name`, async(() => {
    //   let name = 'รายงานสนับสนุนการแสวงหาข้อเท็จจริงกรมคุมประพฤติ'
    //   component.reportname(name);
    //   expect(component.report_name).toEqual(name);
    // }));

//---------------------------------------------------------------------------------

    // it('should create', () => {
    //   expect(component).toBeTruthy();
    // });
    // xit('แสดงเมนู รายงาน Single Report',()=>{
    //   const fixture=TestBed.createComponent(DxcUi0014Component);
    //   fixture.detectChanges();
    //   const compiled=fixture.debugElement.nativeElement;
    //   expect(compiled.querySelector('p').textContent).toContain('รายงาน Single Report');
    // })

    // it('รายงานสนับสนุนการแสวงหาข้อเท็จจริงกรมคุมประพฤติ', () => {

    //   expect(component.lblSingleReportProbation).toEqual('รายงานสนับสนุนการแสวงหาข้อเท็จจริงกรมคุมประพฤติ'); // Expectation - หวังว่า true ต้องเป็น true (แหงละ)
    // });

    // it('รายงานสนับสนุนการสืบเสาะ ค.ป.๐๔.๑ กรมพินิจฯ', () => {

    //   expect(component.lblSingleReportConsider).toEqual('รายงานสนับสนุนการสืบเสาะ ค.ป.๐๔.๑ กรมพินิจฯ'); // Expectation - หวังว่า true ต้องเป็น true (แหงละ)
    // });

    // describe('Test 1 ', () => {
    //   xit('รายงาน Single Report', () => {
    //     expect(component.lblSingleReportDxc)
    //       .toEqual('รายงาน Single Report');
    //   });
    // });

    // describe("A suite", function () {
    //   it('รายงาน Single Report', () => {
    //     expect(component.lblSingleReportDxc)
    //       .toEqual('รายงาน Single Report');
    //   });

    //   it("รายงานสนับสนุนการสืบเสาะ ค.ป.๐๔.๑ กรมพินิจฯ", function () {
    //     expect(component.lblSingleReportConsider)
    //       .toEqual('รายงานสนับสนุนการสืบเสาะ ค.ป.๐๔.๑ กรมพินิจฯ');
    //   });
    // });

    // it(`should have as title 'app'`, async(() => {
    //   const fixture = TestBed.createComponent(DxcUi0014Component);
    //   const app = fixture.debugElement.componentInstance;
    //   expect(app.lblSingleReportDxc).toEqual('รายงาน Single Report');
    // }));

    // it(`test2`, async(() => {
    //   const fixture = TestBed.createComponent(DxcUi0014Component);
    //   const app = fixture.debugElement.componentInstance;
    //   expect(app.lblSingleReportProbation).toEqual('รายงานสนับสนุนการแสวงหาข้อเท็จจริงกรมคุมประพฤติ');
    // }));
  });

});

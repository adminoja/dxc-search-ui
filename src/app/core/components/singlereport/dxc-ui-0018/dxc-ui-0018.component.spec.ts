import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DxcUi0018Component } from './dxc-ui-0018.component';
import { DriverlicenseService } from '../../../shared/services/dxc/dlt/driverlicense.service';
import { PrisonerService } from '../../../shared/services/dxc/doc/prisoner.service';
import { CriminalService } from '../../../shared/services/dxc/rtp/criminal.service';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from '../header/header.component';
import { MissingCarCaseService } from '../../../shared/services/dxc/rtp/missing-car-case.service';
import { MissingPersonCaseService } from '../../../shared/services/dxc/rtp/missing-person-case.service';
import { FooterComponent } from '../footer/footer.component';
import { DxcLoaderComponent } from '../../loader/dxc-loader/dxc-loader.component';

describe('DxcUi0018Component', () => {
  let component: DxcUi0018Component;
  let fixture: ComponentFixture<DxcUi0018Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DxcUi0018Component, HeaderComponent, FooterComponent, DxcLoaderComponent],
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      providers: [
        DriverlicenseService,
        PrisonerService,
        CriminalService,
        MissingPersonCaseService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DxcUi0018Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('DxcUi0018Component - TEST', () => {

    // xit("แสดงสถานะการสืบค้นข้อมูลจากฐานข้อมูลต่างๆ", () => {
    //   expect(component.lblStatusSearch).toEqual("แสดงสถานะการสืบค้นข้อมูลจากฐานข้อมูลต่างๆ"); // Expectation - หวังว่า true ต้องเป็น true (แหงละ)
    // });

    // xit("TEST - prisonerSearchCount", () => {
    //   expect(component.prisonerSearchCount).toEqual(0); // Expectation - หวังว่า true ต้องเป็น true (แหงละ)
    // });

    // xit("TEST - driverlicenseSearchCount", () => {
    //   expect(component.driverlicenseSearchCount).toEqual(0); // Expectation - หวังว่า true ต้องเป็น true (แหงละ)
    // });

    // xit("TEST - criminalSearchCount", () => {
    //   expect(component.criminalSearchCount).toEqual(0); // Expectation - หวังว่า true ต้องเป็น true (แหงละ)
    // });

    // xit("TEST - criminalSearchCount", () => {
    //   expect(component.criminalSearchCount).toEqual(0); // Expectation - หวังว่า true ต้องเป็น true (แหงละ)
    // });

    // it(`เช็คฟังก์ชั่น report_name`, async(() => {
    //   let name = 'TEST'
    //   component.reportname(name);
    //   expect(component.report_name).toEqual(name);
    // }));


    it('should create', () => {
      component.dataSearch.citizenCardNumber = '3230200083344'
      component.report_name = 'รายงาน Single Report'
      fixture.detectChanges();
      expect(component).toBeTruthy();
    });
  });
});

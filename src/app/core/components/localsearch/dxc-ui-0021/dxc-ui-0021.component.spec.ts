import { DxcUi0021Component } from "./dxc-ui-0021.component";
import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientModule } from "@angular/common/http";
import { HeaderComponent } from "../../singlereport/header/header.component";
import { FooterComponent } from "../../singlereport/footer/footer.component";
import { FormsModule } from "@angular/forms";
import { FilterPipe } from "src/app/core/shared/pipe/filter.pipe";
import { PrisonerService } from "src/app/core/shared/services/dxc/doc/prisoner.service";
import { DriverlicenseService } from "src/app/core/shared/services/dxc/dlt/driverlicense.service";
import { environment } from '../../../../../environments/environment.stg';
import { ErrormessageUiComponent } from '../../errormessage/errormessage-ui/errormessage-ui.component';
import { ConverseSexPipe } from 'src/app/core/shared/pipe/probationer/converse-sex.pipe';
import { MissingCarCaseService } from "src/app/core/shared/services/dxc/rtp/missing-car-case.service";
import { MissingPersonCaseService } from "src/app/core/shared/services/dxc/rtp/missing-person-case.service";
import { CriminalService } from "src/app/core/shared/services/dxc/rtp/criminal.service";
import { MatDialogModule } from "@angular/material";
import { ConverseStatusPipe } from "src/app/core/shared/pipe/probationer/converse-status.pipe";
import { ThaiDatePipe } from "src/app/core/shared/pipe/thaidate.pipe";
import { ConverseNullPipe } from "src/app/core/shared/pipe/probationer/converse-null.pipe";
import { ConverseDatePipe } from "src/app/core/shared/pipe/converse-date.pipe";
import { ConverseTimePipe } from "src/app/core/shared/pipe/converse-time.pipe";
import { ChangeDatePipe } from "src/app/core/shared/pipe/change-date.pipe";

describe('DxcUi0021Component', () => {
  let component: DxcUi0021Component;
  let fixture: ComponentFixture<DxcUi0021Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DxcUi0021Component, HeaderComponent, FooterComponent, FilterPipe, ErrormessageUiComponent, ConverseSexPipe],
      imports: [RouterTestingModule, HttpClientModule, FormsModule, MatDialogModule ],
      providers: [
        PrisonerService,
        DriverlicenseService,
        MissingCarCaseService,
        MissingPersonCaseService,
        CriminalService,
        ConverseSexPipe,
        ConverseStatusPipe,
        ThaiDatePipe,
        ConverseNullPipe,
        ConverseDatePipe,
        ConverseTimePipe,
        ChangeDatePipe
      ]
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(DxcUi0021Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeDefined();
  });
  // it('a แสดงรายชื่อหน่วยงานทั้งหมด', () => {
  //   fixture = TestBed.createComponent(DxcUi0021Component);
  //   const compiled = fixture.debugElement.query(By.css('.panel-heading'));
  //   fixture.detectChanges();
  //   expect(component.title).toEqual('ฐานข้อมูลทะเบียนราษฎร');
  // });
  // it('ตรวจสอบ Dxc_Model_Amlo_Moneylaunderingcase url production สำนักงานป้องกันและปราบปรามการฟอกเงิน', () => {
  //   expect(environment.Dxc_Model_Amlo_Moneylaunderingcase[0].url.production).
  //   toEqual('/dxc-qm-amlo-money-laundering-case-service/api/v2/almo/money-laundering-case');
  // });
  // it('ตรวจสอบ Dxc_Model_Dopa_Citizen url production กรมปกครอง', () => {
  //   expect(environment.Dxc_Model_Dopa_Citizen[0].url.production).toEqual('/dxc-qm-dopa-person-service/api/v2/dopa/persons');
  // });
  // it('ตรวจสอบ Dxc_Model_Dopa_Moi_Persons url production ฐานข้อมูลผู้ขอออกหนังสือผ่านแดนทั้งหมด(รอแก้ไขเป็นทะเบียนราษฏร)', () => {
  //   expect(environment.Dxc_Model_Dopa_Moi_Persons[0].url.production).toEqual('/dxc-qm-moi-linkage-service/api/v2/moi-linkage/persons');
  // });
  // it('ตรวจสอบ Dxc_Model_Moi_Dopa_ThaiIdcard url production ฐานข้อมูลบัตรประจำตัวประชาชน', () => {
  //   expect(environment.Dxc_Model_Moi_Dopa_ThaiIdcard[0].url.production).toEqual('/dxc-qm-moi-linkage-service/api/v2/moi-linkage/persons');
  // });
  // it('ตรวจสอบ Dxc_Model_Moi_Dopa_ThaiIdcard url production ฐานข้อมูลฐานข้อมูลทะเบียนบ้าน (บุคคลทุกประเภท)', () => {
  //   expect(environment.Dxc_Model_Moi_Dopa_ThaiIdcard[0].url.production).toEqual('/dxc-qm-moi-linkage-service/api/v2/moi-linkage/persons');
  // });
  // it('ตรวจสอบ Dxc_Model_Moi_Dopa_Birth_Certificates url production ฐานข้อมูลใบสูติบัตร', () => {
  //   expect(environment.Dxc_Model_Moi_Dopa_Birth_Certificates[0].url.production).
  //   toEqual('/dxc-qm-moi-linkage-service/api/v2/moi-linkage/persons');
  // });
  // it('ตรวจสอบ Dxc_Model_Moi_Moac_Fisheries_Illegal url production คดีประมงผิดกฎหมาย', () => {
  //   expect(environment.Dxc_Model_Moi_Moac_Fisheries_Illegal[0].url.production).
  //   toEqual('/dxc-qm-moi-linkage-service/api/v2/moi-linkage/persons');
  // });
  // it('ตรวจสอบ Dxc_Model_Dopa_Moi_Aliens url production ข้อมูลทะเบียนบุคคลต่างด้าว', () => {
  //   expect(environment.Dxc_Model_Dopa_Moi_Aliens[0].url.production).
  //   toEqual('/dxc-qm-moi-linkage-service/api/v2/moi-linkage/persons');
  // });
  // it('ตรวจสอบ Dxc_Model_Moi_Dopa_Border_Passes url production ข้อมูลผู้ขอออกหนังสือผ่านแดนทั้งหมด', () => {
  //   expect(environment.Dxc_Model_Moi_Dopa_Border_Passes[0].url.production).
  //   toEqual('/dxc-qm-moi-linkage-service/api/v2/moi-linkage/persons');
  // });
  // it('ตรวจสอบ Dxc_Model_Dopa_Moi_Death_Certificates url production ข้อมูลใบมรณบัตร', () => {
  //   expect(environment.Dxc_Model_Dopa_Moi_Death_Certificates[0].url.production).
  //   toEqual('/dxc-qm-moi-linkage-service/api/v2/moi-linkage/persons');
  // });
  // it('ตรวจสอบ Dxc_Model_Dopa_Moi_Divorce_Certificates url production ข้อมูลทะเบียนหย่า', () => {
  //   expect(environment.Dxc_Model_Dopa_Moi_Divorce_Certificates[0].url.production).
  //   toEqual('/dxc-qm-moi-linkage-service/api/v2/moi-linkage/persons');
  // });
  // it('ตรวจสอบ Dxc_Model_Moi_Dopa_Education_Backgroundes url production ข้อมูลวุฒิการศึกษา (2556) สำนักปลัดกระทรวงศึกษาธิการ', () => {
  //   expect(environment.Dxc_Model_Moi_Dopa_Education_Backgroundes[0].url.production).
  //   toEqual('/dxc-qm-moi-linkage-service/api/v2/moi-linkage/persons');
  // });
  // it('ตรวจสอบ Dxc_Model_Moi_Dopa_Marriage_Certificates url production ข้อมูลทะเบียนสมรส', () => {
  //   expect(environment.Dxc_Model_Moi_Dopa_Marriage_Certificates[0].url.production).
  //   toEqual('/dxc-qm-moi-linkage-service/api/v2/moi-linkage/persons');
  // });
  // it('ตรวจสอบ Dxc_Model_Moi_Dopa_Passports url production ข้อมูลรายการประวัติหนังสือเดินทาง กรมการกงสุล', () => {
  //   expect(environment.Dxc_Model_Moi_Dopa_Passports[0].url.production).
  //   toEqual('/dxc-qm-moi-linkage-service/api/v2/moi-linkage/persons');
  // });
  // it('ตรวจสอบ Dxc_Model_Moi_Moe_Students url production ข้อมูลนักเรียน-นักศึกษา กระทรวงศึกษาธิการ', () => {
  //   expect(environment.Dxc_Model_Moi_Moe_Students[0].url.production).
  //   toEqual('/dxc-qm-moi-linkage-service/api/v2/moi-linkage/persons');
  // });
  // it('ตรวจสอบ Dxc_Model_Dopa_Moi_Face_Photos url production ข้อมูลภาพใบหน้า', () => {
  //   expect(environment.Dxc_Model_Dopa_Moi_Face_Photos[0].url.production).
  //   toEqual('/dxc-qm-moi-linkage-service/api/v2/moi-linkage/persons');
  // });
  // it('ตรวจสอบ Dxc_Model_Doe_Moi_Alien_Workforces url production ทะเบียนแรงงานต่างด้าว (กลุ่มบัตรสีชมพู)', () => {
  //   expect(environment.Dxc_Model_Doe_Moi_Alien_Workforces[0].url.production).
  //   toEqual('/dxc-qm-moi-linkage-service/api/v2/moi-linkage/persons');
  // });
  // it('ตรวจสอบ Dxc_Model_Dsd_Moi_Workforce_Developments url production ฐานข้อมูลการพัฒนาฝีมือแรงงาน', () => {
  //   expect(environment.Dxc_Model_Dsd_Moi_Workforce_Developments[0].url.production).
  //   toEqual('/dxc-qm-moi-linkage-service/api/v2/moi-linkage/persons');
  // });
  // it('ตรวจสอบ Dxc_Model_Dopa_Moi_Health_Insurance_Rights url production ข้อมูลสิทธิประกันสุขภาพและการลงทะเบียนกับหน่วยบริการ', () => {
  //   expect(environment.Dxc_Model_Nhso_Moi_Health_Insurance_Rights[0].url.production).
  //   toEqual('/dxc-qm-moi-linkage-service/api/v2/moi-linkage/persons');
  // });
  // it('ตรวจสอบ Dxc_Model_Dopa_Moi_Corruption_Accuseds url production ข้อมูลผู้ถูกกล่าวหา คดีด้านการทุจริต', () => {
  //   expect(environment.Dxc_Model_Nacc_Moi_Corruption_Accuseds[0].url.production).
  //   toEqual('/dxc-qm-moi-linkage-service/api/v2/moi-linkage/persons');
  // });
  // it('ตรวจสอบ Dxc_Model_Oncb_NarcoticOffender url production สำนักงานคณะกรรมการป้องกันและปราบปรามยาเสพติด', () => {
  //   expect(environment.Dxc_Model_Oncb_NarcoticOffender[0].url.production).
  //   toEqual('/dxc-qm-oncb-narcotic-offender-service/api/v2/doc/narcotic-offender');
  // });
  // it('ตรวจสอบ Dxc_Model_Dop_Probationer url production กรมคุมประพฤติ', () => {
  //   expect(environment.Dxc_Model_Dop_Probationer[0].url.production).
  //   toEqual('/dxc-qm-dop-probationer-service/api/v2/dop/probationers');
  // });
  // it('ตรวจสอบ Dxc_Model_Djop_JuvenileOffender url production กรมพินิจและคุ้มครองเด็กและเยาวชน', () => {
  //   expect(environment.Dxc_Model_Djop_JuvenileOffender[0].url.production).
  //   toEqual('/dxc-qm-djop-juvenile-offender-service/api/v2/djop/juvenile-offenders');
  // });
  // it('ตรวจสอบ Dxc_Model_Doc_Prisoner url production ผู้ต้องขัง', () => {
  //   expect(environment.Dxc_Model_Doc_Prisoner[0].url.production).
  //   toEqual('/dxc-qm-doc-prisoner-service/api/v2/doc/prisoners');
  // });
  // it('ตรวจสอบ Dxc_Model_Doc_Reg_seize url production อาญัติ', () => {
  //   expect(environment.Dxc_Model_Doc_Reg_seize[0].url.production).
  //   toEqual('/dxc-qm-doc-reg-seize-service/api/v2/doc/reg-seize');
  // });
  // it('ตรวจสอบ Dxc_Model_Rlpd_Requestors url production ผู้ร้องทุกข์', () => {
  //   expect(environment.Dxc_Model_Rlpd_Requestors[0].url.production).
  //   toEqual('/dxc-qm-rlpd-requestor-service/api/am/api/rlpd/complainants');
  // });
  // it('ตรวจสอบ Dxc_Model_Led_BankruptcyCase url production บุคคลล้มละลาย', () => {
  //   expect(environment.Dxc_Model_Led_BankruptcyCase[0].url.production).
  //   toEqual('/dxc-qm-led-bankruptcy-case-service/api/v2/led/bankruptcy-case');
  // });
  // it('ตรวจสอบ Dxc_Model_Mof_Registrant url production ทะเบียนคนจน', () => {
  //   expect(environment.Dxc_Model_Mof_Registrant[0].url.production).
  //   toEqual('/dxc-qm-fpo-welfare-registration-record-service/api/v2/fpo/welfare-registration-record');
  // });
  // it('ตรวจสอบ Dxc_Model_Cifs_AnonymousCorpse url production ศพนิรนาม', () => {
  //   expect(environment.Dxc_Model_Cifs_AnonymousCorpse[0].url.production).
  //   toEqual('/dxc-qm-cifs-anonymous-corpse-service/api/v2/cifs/anonymous-corpse');
  // });
  // it('ตรวจสอบ Dxc_Model_Dol_Land_and_Condominium_Titles url production ฐานข้อมูลการครอบครองกรรมสิทธิ์ที่ดินและห้องชุด', () => {
  //   expect(environment.Dxc_Model_Dol_Land_and_Condominium_Titles[0].url.production).
  //   toEqual('/dxc-qm-moi-linkage-service/api/v2/moi-linkage/persons');
  // });
  // it('ตรวจสอบ Dxc_Model_Msdhs_Moi_New_Born_Babies url production ข้อมูลทะเบียนเด็กแรกเกิด', () => {
  //   expect(environment.Dxc_Model_Msdhs_Moi_New_Born_Babies[0].url.production).
  //   toEqual('/dxc-qm-moi-linkage-service/api/v2/moi-linkage/persons');
  // });
});

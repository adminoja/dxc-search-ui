import { Component, OnInit } from '@angular/core';
import { CitizenService } from 'src/app/core/shared/services/dxc/dopa/citizen.service';
import { PrisonerService } from 'src/app/core/shared/services/dxc/doc/prisoner.service';
import { CriminalService } from 'src/app/core/shared/services/dxc/rtp/criminal.service';
import { JuvenileOffenderService } from 'src/app/core/shared/services/dxc/djop/juvenile-offender.service';
import { MoiDopaPersonsService } from 'src/app/core/shared/services/dxc/dopa/moi-dopa-persons.service';
// import { ProbationerService } from 'src/app/core/shared/services/dxc/dop/probationer.service';
import { NarcoticOffenderService } from 'src/app/core/shared/services/dxc/Oncb/narcotic-offender.service';
import { RequestorsService } from 'src/app/core/shared/services/dxc/Rlpd/requestors.service';
import { MoneyLaunderingCaseService } from 'src/app/core/shared/services/dxc/amlo/money-laundering-case.service';
import { environment } from '../../../../../environments/environment';
import { DriverlicenseService } from 'src/app/core/shared/services/dxc/dlt/driverlicense.service';
import { MoiDopaAddressesService } from 'src/app/core/shared/services/dxc/dopa/moi-dopa-addresses.service';
import { MoiDopaThaiIdCardService } from 'src/app/core/shared/services/dxc/dopa/moi-dopa-thai-id-card.service';
import { MoiDopaBirthCertificatesService } from 'src/app/core/shared/services/dxc/dopa/moi-dopa-birth-certificates.service';
import { RegSeizeService } from 'src/app/core/shared/services/dxc/doc/reg-seize.service';
import { MoiMoacFisheriesIllegalService } from 'src/app/core/shared/services/dxc/moac/moi-moac-fisheries-illegal.service';
import { LandandcondominiumtitlesService } from 'src/app/core/shared/services/dxc/dol/moi-dol-land-and-condominium-titles.service';
import { MoiDopaAliensService } from 'src/app/core/shared/services/dxc/dopa/moi-dopa-aliens.service';
import { MoiDopaBorderPassesService } from 'src/app/core/shared/services/dxc/dopa/moi-dopa-border-passes.service';
import { MoiDopaDeathCertificatesService } from 'src/app/core/shared/services/dxc/dopa/moi-dopa-death-certificates.service';
import { MoiDopaDivorceCertificatesService } from 'src/app/core/shared/services/dxc/dopa/moi-dopa-divorce-certificates.service';
import { MoiDopaEducationBackgroundesService } from 'src/app/core/shared/services/dxc/dopa/moi-dopa-education-backgroundes.service';
import { MoiDopaMarriageCertificatesService } from 'src/app/core/shared/services/dxc/dopa/moi-dopa-marriage-certificates.service';
import { MoiDopaPassportsService } from 'src/app/core/shared/services/dxc/dopa/moi-dopa-passports.service';
import { MoiDopaFacePhotosService } from 'src/app/core/shared/services/dxc/dopa/moi-dopa-face-photos.service';
import { MoiDoeAlienWorkforcesService } from 'src/app/core/shared/services/dxc/doe/moi-doe-alien-workforces.service';
import { WorkforceDevelopmentsService } from 'src/app/core/shared/services/dxc/dsd/workforce-developments.service';
import { BankruptcyCaseService } from 'src/app/core/shared/services/dxc/Led/bankruptcy-case.service';
import { RegistrantService } from 'src/app/core/shared/services/dxc/Mof/registrant.service';
import { AnonymousCorpseService } from 'src/app/core/shared/services/dxc/Cifs/anonymous-corpse.service';
import { CorruptionaccusedsService } from 'src/app/core/shared/services/dxc/nacc/corruptionaccuseds.service';
import { MoiMsdhsNewBornBabiesService } from 'src/app/core/shared/services/dxc/msdhs/moi-msdhs-new-born-babies.service';
import { MoiDopaPor4Service } from 'src/app/core/shared/services/dxc/dopa/moi-dopa-por4.service';
import { MissingPersonCaseService } from 'src/app/core/shared/services/dxc/rtp/missing-person-case.service';
import { DsiWarrantService } from 'src/app/core/shared/services/dxc/Dsi/warrant.service';
import { MissingCarCaseService } from 'src/app/core/shared/services/dxc/rtp/missing-car-case.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Dxc_Model_SearchFillter } from 'src/app/core/shared/models/Dxc_Model_SearchFillter';
import { IEnvironment } from './IEnvironment';
import { MoiNhsoHealthInsuranceRightsService } from 'src/app/core/shared/services/dxc/Nhso/moi-nhso-health-insurance-rights.service';
import { MoiMoeStudentsService } from 'src/app/core/shared/services/dxc/moe/moi-moe-students.service';
@Component({
  selector: 'app-checkdb',
  templateUrl: './checkdb.component.html',
  styleUrls: ['./checkdb.component.scss']
})
export class CheckdbComponent implements OnInit {
  httpErrors: string[];
  httpSuccess: string[];
  countService: number;

  shouldShow: boolean;
  showDetail: boolean;
  table_datas: any[];
  title_sub: string[]; // ชื่อฐานข้อมูลภาษาไทย

  lblId: number; // ลำดับรายงาน
  reportname: string; // ชื่อรายงานที่เลือก
  lblResultSearch: string; // หัวข้อ Page
  lblStatus: number; // คำนวน Progressbar
  lblResult: string; // สำหรับแสดงสถานะการค้นหา

  report_name: string; // ชื่อรายงานเพื่อแสดงสถานะฐานข้อมูล

  // codition search
  dataSearch: Dxc_Model_SearchFillter;

  databaseEnv: IEnvironment;
  databaseEnvs: any[];
  chkfilters: any[];

  constructor(
    private router: Router,
    private routeparams: ActivatedRoute,
    private prisonerService: PrisonerService,
    private juvenileOffenderService: JuvenileOffenderService,
    // private probationerService: ProbationerService,
    private narcoticOffenderService: NarcoticOffenderService,
    private citizenService: CitizenService,
    private requestorsService: RequestorsService,
    private moiDopaThaiIdCardService: MoiDopaThaiIdCardService,
    private moiDopaPersonsService: MoiDopaPersonsService,
    private moiDopaAddressesService: MoiDopaAddressesService,
    private birthcertificatesService: MoiDopaBirthCertificatesService,
    private regSeizeService: RegSeizeService,
    private moiMoacFisheriesIllegalService: MoiMoacFisheriesIllegalService,
    private landandcondominiumtitlesService: LandandcondominiumtitlesService,
    private moiDopaAliensService: MoiDopaAliensService,
    private borderPassesService: MoiDopaBorderPassesService,
    private moiDopaDeathCertificatesService: MoiDopaDeathCertificatesService,
    private moiDopaDivorceCertificatesService: MoiDopaDivorceCertificatesService,
    private moiDopaEducationBackgroundesService: MoiDopaEducationBackgroundesService,
    private marriageCertificatesService: MoiDopaMarriageCertificatesService,
    private moiDopaPassportsService: MoiDopaPassportsService,
    private moiDopaFacePhotosService: MoiDopaFacePhotosService,
    private moiMoeStudentsService: MoiMoeStudentsService,
    private moiDoeAlienWorkforcesService: MoiDoeAlienWorkforcesService,
    private moiDsdWorkforceDevelopmentsService: WorkforceDevelopmentsService,
    private moneyLaunderingCaseService: MoneyLaunderingCaseService,
    private bankruptcyCaseService: BankruptcyCaseService,
    private registrantService: RegistrantService,
    private anonymousCorpseService: AnonymousCorpseService,
    private corruptionaccusedsService: CorruptionaccusedsService,
    private moiMsdhsNewBornBabiesService: MoiMsdhsNewBornBabiesService,
    private moiDopaPor4Service: MoiDopaPor4Service,
    private missingPersonCaseService: MissingPersonCaseService,
    private dsiWarrantService: DsiWarrantService,
    private missingcarcaseService: MissingCarCaseService,
    private moiNhsoHealthInsuranceRightsService: MoiNhsoHealthInsuranceRightsService,
  ) {
    this.routeparams.params.subscribe(
      params => this.getReportname(params['reportname'])
    );
    this.routeparams.params.subscribe(
      params => this.dataSearch = new Dxc_Model_SearchFillter(
        params['citizenCardNumber'],
        params['firstName'],
        params['lastName'], '',
        params['prisoner'],
        params['casename'],
        params['dataSetId'])
    );
  }

  ngOnInit() {
    this.databaseEnvs = [];
    this.chkfilters = [];
    this.httpErrors = [];
    this.httpSuccess = [];
    this.table_datas = [];
    this.countService = 0;
    this.reportname = 'รายงาน Single Report';
    this.lblResultSearch = 'แสดงรายการสืบค้นข้อมูล';
    this.showDetail = false;
    this.lblStatus = 0;
    this.lblId = 1;
    this.report_name = this.reportname;
    this.lblResult = 'แสดงสถานะการค้นหาข้อมูล';
    // this.getEnvironment();
    this.reviewEnvironment();
  }

  httpSuccessResponse(no: number, dbService: string, data: any) {
    let message: any;
    if (data.status === 200) {
      // message = `200: OK การส่งคำขอสำเร็จแล้ว`;
      message = `การส่งคำขอสำเร็จแล้ว`;
    } else if (data['content'].length > 0) {
      message = `<span class="badge badge-success">พบรายการ</span>`;
    } else if (data['content'].length <= 0) {
      message = `<span class="badge badge-danger">การส่งคำขอสำเร็จแล้ว ไม่พบรายการ</span>`;
    } else {
      message = `<span class="badge badge-danger">เกิดข้อผิดพลาดโดยไม่ทราบสาเหตุ</span>`;
    }
    // return `ลำดับ ${no} บริการ ${dbService} พบรายการ ${data['content'].length} รายการ}`;
    return message;
  }

  httpErrorResponse(no: number, dbService: string, error: any) {
    let messageError: string;
    if (error.status === 504) {
      messageError = `<span class="badge badge-danger">504: Gateway Timeout
      เซิร์ฟเวอร์ไม่ได้รับตอบสนองจากเซิร์ฟเวอร์อื่น จนหมดเวลากันก่อน</span>`;
    } else if (error.status === 500) {
      messageError = `<span class="badge badge-danger">"status":"INTERNAL_SERVER_ERROR","message":"ไม่ระบุ"`;
    } else if (error.status === 401) {
      messageError = `<span class="badge badge-danger">เจ้าหน้าที่ไม่ได้ทำการเข้าระบบด้วยบัตรประชาชน</span>`;
    } else if (error.status === 404) {
      messageError = `<span class="badge badge-danger">404: Not Found ไม่พบหน้าที่ร้องขอ</span>`;
    } else if (error.status === 0) {
      messageError = `<span class="badge badge-danger">การตอบสนองล้มเหลวของ HTTP สำหรับ status 0 ข้อผิดพลาดที่ไม่รู้จัก</span>`;
    } else {
      messageError = `<span class="badge badge-danger">เกิดข้อผิดพลาดโดยไม่ทราบสาเหตุ รายละเอียด : ${error}</span>`;
    }
    // return `ลำดับ ${no} บริการ ${dbService} เกิดข้อผิดพลาด ${messageError}`;
    return `${messageError}`;
  }

  getEnvironment() {
    const source = Object.keys(environment.qm.sub[0]);
    const dataSearch: any = this.dataSearch.citizenCardNumber;
    let no: number; // ลำดับบริการ
    no = 0;
    for (const entry of source) {
      const sub = Object.keys(environment.qm.sub[0][entry].sub[0]);
      const img_source = environment.qm.sub[0][entry].img;
      for (const entry_sub of sub) {
        this.countService++;
        const service = environment.qm.sub[0][entry].sub[0][entry_sub].service;
        const title_sub = environment.qm.sub[0][entry].sub[0][entry_sub].title;
        const img_db = environment.qm.sub[0][entry].sub[0][entry_sub].img;
        try {
          this[service].filters(dataSearch, 'citizenCardNumber').subscribe(data => {
            console.log(data);
            no++;
            this.updateProgress(no);
            const table_data = {
              'no': no,
              'img_source': img_source,
              'title_sub': title_sub,
              'img_db': img_db,
              'service': service,
              'httpSuccess': this.httpSuccessResponse(no, service, data),
              'length': data['content'].length
            };
            this.table_datas.push(table_data);
          }, error => {
            console.log(error);
            no++;
            this.updateProgress(no);
            const table_data = {
              'no': no,
              'img_source': img_source,
              'title_sub': title_sub,
              'img_db': img_db,
              'service': service,
              'httpError': this.httpErrorResponse(no, service, error),
              'length': 0
            };
            this.table_datas.push(table_data);
          });
        } catch (error) {
          console.log(error + ' ' + service + 'กรุณาติดต่อผู้พัฒนา');
        }
        console.log(this.table_datas);
      }
    }
  }
  updateProgress(countService: number) {
    this.lblStatus = (countService) / 34 * 100;
  }
  getReportname(reportname: string) {
    this.reportname = reportname;
  }
  onBackPage() {
    this.router.navigate(['dxcui0014/dxcui0014/']);
  }
  onBackPage1() {
    this.router.navigate(['dxcui0014/dxcui0014/']);
  }
  onBackPage2() {
    this.router.navigate(['dxcui0014/dxcui00141/', this.reportname]);
  }
  reviewEnvironment() {
    const source = Object.keys(environment.qm.sub[0]);
    const dataSearch: any = this.dataSearch.citizenCardNumber;
    let no: number; // ลำดับบริการ
    no = 0;
    for (const entry of source) {
      const sub = Object.keys(environment.qm.sub[0][entry].sub[0]);
      const img_source = environment.qm.sub[0][entry].img;
      for (const entry_sub of sub) {
        this.countService++;
        const title_sub = environment.qm.sub[0][entry].sub[0][entry_sub].title;
        const url = environment.qm.sub[0][entry].sub[0][entry_sub].url;
        const img_db = environment.qm.sub[0][entry].sub[0][entry_sub].img;
        const service = environment.qm.sub[0][entry].sub[0][entry_sub].service;
        const model = environment.qm.sub[0][entry].sub[0][entry_sub].model;
        const remark1 = environment.qm.sub[0][entry].sub[0][entry_sub].remark1;
        const schema = environment.qm.sub[0][entry].sub[0][entry_sub].schema;
        const report = environment.qm.sub[0][entry].sub[0][entry_sub].report;
        const db = environment.qm.sub[0][entry].sub[0][entry_sub].db;
        const singleSearch = environment.qm.sub[0][entry].sub[0][entry_sub].singleSearch;
        this.databaseEnv = {
          database: {
            title: title_sub,
            url: url,
            img: img_db,
            model: model,
            remark1: remark1,
            schema: schema,
            service: service,
            report: report,
            db: db,
            singleSearch: singleSearch
          }
        };
        this.databaseEnvs.push(this.databaseEnv);
        this.chkfilters = this.databaseEnvs;
      }
    }
  }
  saveFilter(id: string) {
    console.log(id);
    this.chkfilters = [];
    this.databaseEnvs = [];
    this.countService = 0;
    this.reviewEnvironment();
    const chk = document.getElementById(id) as HTMLInputElement;
    localStorage.setItem(id, chk.value);
    this.databaseEnvs = this.databaseEnvs.filter(env => env.database.db === id);
  }
  getFilter() {
    this.chkfilters = [];
    this.databaseEnvs = [];
    this.countService = 0;
    this.reviewEnvironment();
  }
}

import { RtpArrestWarrantMetadata } from './../../localsearch/qmreporttemplate/dxc-model-rtp-arrest-warrant/dxc-model-rtp-arrest-warrant.interface';
import { CommercialRegistrantService } from './../../../shared/services/dxc/dbd/commercial-registrant.service';
import { MissingPersonService } from '../../../shared/services/dxc/Cifs/missing-person.service';
import { Component, OnInit } from '@angular/core';
import { CitizenService } from 'src/app/core/shared/services/dxc/dopa/citizen.service';
import { PrisonerService } from 'src/app/core/shared/services/dxc/doc/prisoner.service';
import { CriminalService } from 'src/app/core/shared/services/dxc/rtp/criminal.service';
import { JuvenileOffenderService } from 'src/app/core/shared/services/dxc/djop/juvenile-offender.service';
import { MoiDopaPersonsService } from 'src/app/core/shared/services/dxc/dopa/moi-dopa-persons.service';
import { NarcoticOffenderService } from 'src/app/core/shared/services/dxc/Oncb/narcotic-offender.service';
import { RequestorsService } from 'src/app/core/shared/services/dxc/Rlpd/requestors.service';
import { MoneyLaunderingCaseService } from 'src/app/core/shared/services/dxc/amlo/money-laundering-case.service';
import { environment } from '../../../../../environments/environment.stg';
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
import { ArrestWarrantService } from 'src/app/core/shared/services/dxc/rtp/arrest-warrant.service';
import { AttorneyCasesService } from 'src/app/core/shared/services/dxc/agoth/attorney-cases.service';
import { MoiNhsoHealthInsuranceRightsService } from 'src/app/core/shared/services/dxc/Nhso/moi-nhso-health-insurance-rights.service';
import { ProbationerService } from 'src/app/core/shared/services/dxc/Dop/probationer.service';
import { ChargeSubjectService } from 'src/app/core/shared/services/dxc/agoth/charge-subject.service';
import { EmployeeEmploymentService } from 'src/app/core/shared/services/dxc/Sso/employee-employment.service';
import { RemandeeService } from 'src/app/core/shared/services/dxc/doc/remandee.service';
import { JfoCaseService } from 'src/app/core/shared/services/dxc/jfo/jfo-case.service';
import { AgothChargeVictimService } from 'src/app/core/shared/services/dxc/agoth/agoth-charge-victim.service';
import { CorpseService } from 'src/app/core/shared/services/dxc/Cifs/corpse.service';
import { ReleasedPrisonersServiceService } from 'src/app/core/shared/services/dxc/doc/released-prisoners-service.service';
import { MoiReportVerificationServiceService } from 'src/app/core/shared/services/dxc/Cifs/moi-report-verification-service.service';
import { CrimeDefendantCompensationService } from 'src/app/core/shared/services/dxc/Rlpd/crime-defendant-compensation.service';
import { MoiDopaPersonChangenamePrimaryServiceService } from 'src/app/core/shared/services/dxc/dopa/moi-dopa-person-changename-primary-service.service';
import { CrimeVictimCompensationService } from 'src/app/core/shared/services/dxc/Rlpd/crime-victim-compensation.service';
import { ReleasedOffenderServiceService } from 'src/app/core/shared/services/dxc/oja/released-offender-service.service';
import { CarLicenseService } from 'src/app/core/shared/services/dxc/dlt/car-license.service';
import { MoiDopaPersonChangelastnameService } from 'src/app/core/shared/services/dxc/dopa/moi-dopa-person-changelastname.service';
import { EmploymentService } from 'src/app/core/shared/services/dxc/Sso/employment.service';
import { LogTypeService } from 'src/app/core/shared/services/logtype.service';
import { CrippleService } from 'src/app/core/shared/services/dxc/dep/cripple.service';
import { ThailandPassportService } from 'src/app/core/shared/services/dxc/dca/thailand-passport.service';
import { ArrestWarrantsService } from 'src/app/core/shared/services/dxc/coj/arrest-warrants.service';
import { RegisterOfTaxpayersService } from 'src/app/core/shared/services/dxc/Mof/register-of-taxpayers.service';
import { SpecializedopService } from 'src/app/core/shared/services/dxc/idb/dop/specializedop.service';
import { SpecializedjopService } from 'src/app/core/shared/services/dxc/idb/djop/specializedjop.service';
import { SpecializedocService } from 'src/app/core/shared/services/dxc/idb/doc/specializedoc.service';
import { JfoCase64Service } from 'src/app/core/shared/services/dxc/jfo/jfo-case64.service';
import { UserService } from 'src/app/core/shared/services/Userprofile/user.service';
import { DatasetPipe } from 'src/app/core/shared/pipe/dataset.pipe';
import { CriminalCaseService } from 'src/app/core/shared/services/dxc/rtp/criminal-case.service';
import { CriminalRecordService } from 'src/app/core/shared/services/dxc/rtp/criminal-record.service';
import { TravelInformationService } from 'src/app/core/shared/services/dxc/rtp/travel-information.service';
import { TrafficCaseService } from 'src/app/core/shared/services/dxc/rtp/traffic-case.service';
import { WarrantOfArrestService } from 'src/app/core/shared/services/dxc/rtp/warrant-of-arrest.service';
import { JuvenileOffender65Service } from 'src/app/core/shared/services/dxc/djop/juvenile-offender65.service';
import { PrisonerBankruptService } from 'src/app/core/shared/services/dxc/doc/prisoner-bankrupt.service';
import { ProbationerNarcoticsService } from 'src/app/core/shared/services/dxc/Dop/probationer-narcotics.service';
import { AbsolutePrisonerInformationBeforeReleaseOnProbationService } from 'src/app/core/shared/services/dxc/doc/absolute-prisoner-information-before-release-on-probation.service';
import { FactFindingReportService } from 'src/app/core/shared/services/dxc/Dop/fact-finding-report.service';

@Component({
  selector: 'app-dxc-ui-0018',
  templateUrl: './dxc-ui-0018.component.html',
  styleUrls: ['./dxc-ui-0018.component.css']
})
export class DxcUi0018Component implements OnInit {

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
  reportclick: string;
  // codition search
  dataSearch: Dxc_Model_SearchFillter;

  countAllService: number; // จำนวน Service ทั้งหมด
  DXC_GROUP_DATA_ACL: any;
  fnameLname : any[] = [];
  citizenId : any[] = [];
  

  constructor(private router: Router,
    private routeparams: ActivatedRoute,
    private dataset: DatasetPipe,
    private prisonerService: PrisonerService,
    private juvenileOffenderService: JuvenileOffenderService,
    private probationerService: ProbationerService,
    private narcoticOffenderService: NarcoticOffenderService,
    // private citizenService: CitizenService,
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
    // private moiDopaDeathCertificatesService: MoiDopaDeathCertificatesService,
    private moiDopaDivorceCertificatesService: MoiDopaDivorceCertificatesService,
    // private moiDopaEducationBackgroundesService: MoiDopaEducationBackgroundesService,
    private marriageCertificatesService: MoiDopaMarriageCertificatesService,
    // private moiDopaPassportsService: MoiDopaPassportsService,
    private moiDopaFacePhotosService: MoiDopaFacePhotosService,
    // private MoiMoeStudentsService: MoiMoeStudentsService,
    // private moiDoeAlienWorkforcesService: MoiDoeAlienWorkforcesService,
    private moiDsdWorkforceDevelopmentsService: WorkforceDevelopmentsService,
    // private moneyLaunderingCaseService: MoneyLaunderingCaseService,
    private bankruptcyCaseService: BankruptcyCaseService,
    // private registrantService: RegistrantService,
    // private anonymousCorpseService: AnonymousCorpseService,
    private corruptionaccusedsService: CorruptionaccusedsService,
    // private moiMsdhsNewBornBabiesService: MoiMsdhsNewBornBabiesService,
    private moiDopaPor4Service: MoiDopaPor4Service,
    private missingPersonCaseService: MissingPersonCaseService,
    private dsiWarrantService: DsiWarrantService,
    // private missingcarcaseService: MissingCarCaseService,
    // private arrestWarrantService: ArrestWarrantService,
    private missingPersonService: MissingPersonService,
    // private attorneyCasesService: AttorneyCasesService,
    private driverlicenseService: DriverlicenseService,
    private moiNhsoHealthInsuranceRightsService: MoiNhsoHealthInsuranceRightsService,
    private chargeSubjectService: ChargeSubjectService,
    private employeeemploymentService: EmployeeEmploymentService,
    private remandeeService: RemandeeService,
    private chargeVictimService: AgothChargeVictimService,
    private criminalService: CriminalService,
    private corpseService: CorpseService,
    // private releasedPrisonersService: ReleasedPrisonersServiceService,
    private reportVerificationService: MoiReportVerificationServiceService,
    // private crimeDefendantCompensationService: CrimeDefendantCompensationService,
    private moiDopaPersonChangenamePrimaryService: MoiDopaPersonChangenamePrimaryServiceService,
    private crimeVictimCompensationService: CrimeVictimCompensationService,
    private releasedOffenderService: ReleasedOffenderServiceService,
    private carlicenseService: CarLicenseService,
    private jfoCaseService: JfoCaseService,
    private moiDopaPersonChangelastnameService: MoiDopaPersonChangelastnameService,
    private employmentService: EmploymentService,
    private logTypeService: LogTypeService,
    private moiDepcrippleService: CrippleService,
    private moiMfaThailandPassporService: ThailandPassportService,
    private cojArrestWarrantsService: ArrestWarrantsService,
    private registerOfTaxpayersService: RegisterOfTaxpayersService,
    private specializedopService: SpecializedopService,
    private specializedjopService: SpecializedjopService,
    private specializedocService: SpecializedocService,
    private registrantService: RegistrantService,
    private jfoCase64Service: JfoCase64Service,
    private userService: UserService,
    private criminalCaseService: CriminalCaseService,
    private arrestWarrantService : ArrestWarrantService,
    private criminalRecordService: CriminalRecordService,
    private travelInformationService: TravelInformationService,
    private trafficCaseService: TrafficCaseService,
    private warrantOfArrestService: WarrantOfArrestService,
    private juvenileOffender65Service: JuvenileOffender65Service,
    private prisonerBankruptService: PrisonerBankruptService,
    private probationerNarcoticsService: ProbationerNarcoticsService,
    private absolutePrisonerInformationBeforeReleaseOnProbationService: AbsolutePrisonerInformationBeforeReleaseOnProbationService,
    private factFindingReportService: FactFindingReportService,
    
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
        params['dataSetId']
        )
    );
    localStorage.removeItem('dlt-driver-license-newResults');
    localStorage.removeItem('cifs-report-verificationResults');
    this.clearlocalStore();

    this.report_name = this.reportname;
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
  ngOnInit() {
    this.httpErrors = [];
    this.httpSuccess = [];
    this.table_datas = [];
    this.countService = 0;
    this.lblResultSearch = 'แสดงรายการสืบค้นข้อมูล';
    this.showDetail = false;
    this.lblStatus = 0;
    this.lblId = 1;
    this.report_name = this.reportname;
    this.lblResult = 'แสดงสถานะการค้นหาข้อมูล';

    this.countAllService = this.getCountServiceAll(); // รับจำนวน service ทั้งหมด
    // console.log(this.countAllService);
    
    if (this.report_name === 'รายงาน Single Report') {
      this.getEnvironment();
    } else if (this.report_name === 'กรมคุมประพฤติ') {
      this.getSpecializeDop();
    } else if (this.report_name === 'กรมพินิจและคุ้มครองเด็กและเยาวชน') {
      this.getSpecialzeDjop();
    } else if (this.report_name === 'กรมราชทัณฑ์') {
      this.getSpecialzeDoc();
    } else {
      this.router.navigate(['/']);
    }
    // console.log(typeof (this.dataSearch.citizenCardNumber));
    // console.log(this.dataSearch)
  }
  /**
   * เรียก Service ทั้งหมดมาโดยใช้ ค่า จาก environment
   */
  getEnvironment() {
    
    const dataSearch: any = this.dataSearch;
    let no: number; // ลำดับบริการ
    let countNormalDb = 0;
    let countAlgationsDb = 0;
    no = 0;

    this.logTypeService.saveTransection(dataSearch).subscribe(response => {
      let databases = [];
      if(dataSearch.firstName === '0') {
        let dataBase =  this.getDatabasesConfig()
        for (let index = 0; index < dataBase.length; index++) {
          const element = dataBase[index];
          localStorage.removeItem(element.schema + 'db');
          localStorage.setItem(element.schema + 'db', 'true');
          databases.push(element)
        }
      } 
      if (dataSearch.citizenCardNumber !== '') {
        console.log(databases) 
        databases = [];
        let dataBase =  this.getDatabasesConfig()
        for (let index = 0; index < dataBase.length; index++) {
          const element = dataBase[index];
          databases.push(element)
        }
        for (let index = 0; index < databases.length; index++) {
          const element = databases[index];
          const local_db = localStorage.getItem(element.db);
            if(element.singleSearch !== 'null' && element.singleSearch !== undefined && local_db == 'true'){

              console.log(element.service);
              this[element.service].findByCID(dataSearch.citizenCardNumber, 100, 0, response.transactionId).subscribe(data => {
                // console.log(data);
                no++;
                this.countService = no;
                this.updateProgress(no);
                localStorage.setItem(`${element.schema}Results`, JSON.stringify(data['content']));
                const table_data = {
                  'no': no,
                  'img_source': element.imgDepartment,
                  'title_sub': element.title,
                  'img_db': element.img,
                  'service': element.service,
                  'httpSuccess': this.httpSuccessResponse(no, element.service, data),
                  'length': data['content'].length,
                  'data': data['content']
                };
                // if(table_data.title_sub === 'ฐานข้อมูลหนังสือเดินทางประเทศไทย (Linkage)') {
                //   if (table_data.data[0].citizenID == null ) {
                //     data['content'].length = 0;
                //   }
                // } else if(table_data.title_sub === 'ฐานข้อมูลคนพิการ (Linkage)') {
                //   if (table_data.data[0].personName == null ) {
                //     data['content'].length = 0;
                //   }
                // } else if(table_data.title_sub === 'ฐานข้อมูลคนหาย') {
                //   if (table_data.data[0].firstName == null ) {
                //     data['content'].length = 0;
                //   }
                // } else if(table_data.title_sub === 'รายงานการตรวจพิสูจน์ (Linkage)(อยู่ระหว่างการทดสอบ)') {
                //   if (table_data.data[0].firstname == null ) {
                //     data['content'].length = 0;
                //   }
                // }
                this.table_datas.push(table_data);
                console.log(this.table_datas)
                if (data['content'].length > 0) {
                  if (element.countDb === 'normal') {
                    countNormalDb++;
                  } else if (element.countDb === 'allgetion') {
                    countAlgationsDb++;
                  }
                }
                localStorage.setItem('countNormalDb', countNormalDb.toString());
                localStorage.setItem('countAlgationsDb', countAlgationsDb.toString());
              }, error => {
                // console.log(error);
                no++;
                this.countService = no;
                this.updateProgress(no);
                const table_data = {
                  'no': no,
                  'img_source': element.imgDepartment,
                  'title_sub': element.title,
                  'img_db': element.img,
                  'service': element.service,
                  'httpError': this.httpErrorResponse(no, element.service, error),
                  'length': 0
                };
                this.table_datas.push(table_data);
              });
              
              // this[element.service].unsubscribe();
            }
          
          
        }
      } else {
        const source = Object.keys(environment.qm.sub[0]);
      for (const entry of source) {
        const sub = Object.keys(environment.qm.sub[0][entry].sub[0]);
        const img_source = environment.qm.sub[0][entry].img;
        for (const entry_sub of sub) {
          // this.countService++; // จำนวนทั้งหมด
          const service = environment.qm.sub[0][entry].sub[0][entry_sub].service;
          const schema = environment.qm.sub[0][entry].sub[0][entry_sub].schema;
          const title_sub = environment.qm.sub[0][entry].sub[0][entry_sub].title;
          const img_db = environment.qm.sub[0][entry].sub[0][entry_sub].img;
          const db = environment.qm.sub[0][entry].sub[0][entry_sub].db;
          const singleSearch = environment.qm.sub[0][entry].sub[0][entry_sub].singleSearch;
          const countDb = environment.qm.sub[0][entry].sub[0][entry_sub].countDb;
          const local_db = localStorage.getItem(db);
          // const local_db_key = Object.entries(localStorage);
          console.log(db +'+'+ local_db)
          
          
          // for (const key of local_db_key) {
            // console.log(key)
            if (local_db === 'true' && singleSearch !== 'null') {
              // console.log(db +'+'+ local_db)
              try {
                // console.log(singleSearch);
                if (dataSearch.firstName !== '' && dataSearch.lastname !== '') {
                  // console.log(singleSearch);
                  // console.log(service)
                  // console.log(this[service])
                  this[service].findByFullName(dataSearch.firstName, dataSearch.lastname, 100, 0, response.transactionId).subscribe(data => {
                    no++;
                    this.countService = no;
                    this.updateProgress(no);
                    localStorage.setItem(`${schema}Results`, JSON.stringify(data['content']));
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
                    // console.log(this.table_datas)
                    if (data['content'].length > 0) {
                      if (countDb === 'normal') {
                        countNormalDb++;
                      } else if (countDb === 'allgetion') {
                        countAlgationsDb++;
                      }
                    }
                    localStorage.setItem('countNormalDb', countNormalDb.toString());
                    localStorage.setItem('countAlgationsDb', countAlgationsDb.toString());
                  }, error => {
                    // console.log(error);
                    no++;
                    this.countService = no;
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
                } else if (dataSearch.firstName !== '') {
                  this[service].findByFN(dataSearch.firstName, 100, 0, response.transactionId).subscribe(data => {
                    // console.log(data);
                    no++;
                    this.countService = no;
                    this.updateProgress(no);
                    localStorage.setItem(`${schema}Results`, JSON.stringify(data['content']));
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
                    // console.log(this.table_datas)
                    if (data['content'].length > 0) {
                      if (countDb === 'normal') {
                        countNormalDb++;
                      } else if (countDb === 'allgetion') {
                        countAlgationsDb++;
                      }
                    }
                    localStorage.setItem('countNormalDb', countNormalDb.toString());
                    localStorage.setItem('countAlgationsDb', countAlgationsDb.toString());
                  }, error => {
                    // console.log(error);
                    no++;
                    this.countService = no;
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
                } else if (dataSearch.lastname !== '') {
                  this[service].findByLN(dataSearch.lastname, 100, 0, response.transactionId).subscribe(data => {
                    // console.log(data);
                    no++;
                    this.countService = no;
                    this.updateProgress(no);
                    localStorage.setItem(`${schema}Results`, JSON.stringify(data['content']));
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
                    // console.log(this.table_datas)
                    if (data['content'].length > 0) {
                      if (countDb === 'normal') {
                        countNormalDb++;
                      } else if (countDb === 'allgetion') {
                        countAlgationsDb++;
                      }
                    }
                    localStorage.setItem('countNormalDb', countNormalDb.toString());
                    localStorage.setItem('countAlgationsDb', countAlgationsDb.toString());
                  }, error => {
                    // console.log(error);
                    no++;
                    this.countService = no;
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
                }
              } catch (error) {
                console.log(error + ' ' + service + 'กรุณาติดต่อผู้พัฒนา');
              }
            } 
          // }
          // console.log(this.table_datas);
        }
      }
      }
      

    });
  }

  getDatabasesConfig(): any[] {
    let qmSub = environment.qm.sub
    let departments:any[] = [];
    let databases:any[] = [];
    for (let index = 0; index < qmSub.length; index++) {
      const element = qmSub[index];
      let keys = Object.keys(element);
      console.log(keys)
      for (let index = 0; index < keys.length; index++) {
        const key = keys[index];
        departments.push(element[key]);
      }
    }
    for (let index = 0; index < departments.length; index++) {
      const department = departments[index];
      const database = departments[index].sub[0];
      // console.log(department)
      let keys = Object.keys(database);
      for (let index = 0; index < keys.length; index++) {
        const key = keys[index];
        databases.push({
          departmentTitle: department.title,
          imgDepartment: department.img,
          title: database[key].title,
          url: database[key].url,
          img: database[key].img,
          model: database[key].model,
          remark1: database[key].remark1,
          schema: database[key].schema,
          schemaGroup: database[key].schemaGroup,
          service: database[key].service,
          report: database[key].report,
          db: database[key].db,
          singleSearch: database[key].singleSearch,
          countDb: database[key].countDb,
        });
      }
    }
    return databases;
  }


  filter(value,report_name) {
    if (report_name == 'กรมคุมประพฤติ'){
      let idbDopPersonReport = value.filter(permistion=> permistion === 'idb.dop-person-report');
      if (idbDopPersonReport.length == 0 ){
        alert('ไม่มีสิทธิการเข้าใช้งาน');
        this.router.navigate(['401']);
      }
    }
    if (report_name == 'กรมพินิจและคุ้มครองเด็กและเยาวชน'){
      let idbDjopPersonReport = value.filter(permistion=> permistion === 'idb.djop-person-report');
      if (idbDjopPersonReport.length == 0 ){
        alert('ไม่มีสิทธิการเข้าใช้งาน');
        this.router.navigate(['401']);
      }
    }
    if (report_name == 'กรมราชทัณฑ์'){
      let idbDocPersonReport = value.filter(permistion=> permistion === 'idb.doc-person-report');
      if (idbDocPersonReport.length == 0 ){
        alert('ไม่มีสิทธิการเข้าใช้งาน');
        this.router.navigate(['401']);
      }
    }
  
  }

  /**
   *
   * @param no ลำดับ
   * @param dbService ชื่อฐานข้อูล
   * @param data ข้อมูลที่ responsSuccess กลับมา
   */
  httpSuccessResponse(no: number, dbService: string, data: any) {
    let message: any;
    if (data.status === 200) {
      // message = `200: OK การส่งคำขอสำเร็จแล้ว`;
      message = `การส่งคำขอสำเร็จแล้ว`;
    } else if (data['content'].length > 0) {
      message = `<span class='badge badge-success'>พบรายการ</span>`;
    } else if (data['content'].length <= 0) {
      message = `<span class='badge badge-primary'>การส่งคำขอสำเร็จแล้ว ไม่พบรายการ</span>`;
    } else {
      message = `<span class='badge badge-danger'>เกิดข้อผิดพลาดโดยไม่ทราบสาเหตุ</span>`;
    }
    // return `ลำดับ ${no} บริการ ${dbService} พบรายการ ${data['content'].length} รายการ}`;
    return message;
  }
  /**
   *
   * @param no ลำดับ
   * @param dbService ชื่อฐานข้อมูล
   * @param error ข้อมูลที่ responseError กลับมา
   */
  httpErrorResponse(no: number, dbService: string, error: any) {
    let messageError: string;
    // console.log(error.error.debugMessage)
    if (error.status === 504) {
      messageError = `<span class="badge badge-danger">
      เชื่อมต่อไม่ได้</span>`;
      // console.log(error);
    } else if (error.status === 500 && error.error.debugMessage !== '[95011] No permission in requested service' 
    && error.error.debugMessage !== '[95004] No permission in Linkage Center or OfficeID is incorrect') {
      messageError = `<span class="badge badge-danger">
      เชื่อมต่อไม่ได้</span>`;
    } else if (error.status === 401) {
      messageError = `<span class="badge badge-danger">
      เจ้าหน้าที่ไม่ได้ทำการเข้าระบบด้วยบัตรประชาชน</span>`;
    } else if (error.status === 404) {
      messageError = `<span class="badge badge-danger">
      เชื่อมต่อไม่ได้</span>`;
    } else if (error.status === 403) {
      messageError = `<span class="badge badge-danger">
      ท่านไม่มีสิทธิ์</span>`;
    } else if (error.status === 0 && error.error.debugMessage !== '[95011] No permission in requested service' 
    && error.error.debugMessage !== '[95004] No permission in Linkage Center or OfficeID is incorrect') {
      messageError = `<span class="badge badge-danger">
      ไม่พบข้อมูล</span>`;
    } else if (error.error.debugMessage === '[95011] No permission in requested service' || error.error.debugMessage === '[95004] No permission in Linkage Center or OfficeID is incorrect') {
      messageError = `<span class="badge badge-danger">
      ผู้ใช้งานไม่มีสิทธิ์จาก Linkage Center ในฐานข้อมูลนี้</span>`;
    } else {
      messageError = `<span class="badge badge-danger">
      เกิดข้อผิดพลาดโดยไม่ทราบสาเหตุ</span>`;
    }
    // return `ลำดับ ${no} บริการ ${dbService} เกิดข้อผิดพลาด ${messageError}`;
    return `${messageError}`;
  }
  /**
   *
   * @param countService
   * อัพเดทตามจำนวน service ทั้งหมด
   */
  updateProgress(countService: number) {
    // console.log(countService);
    this.lblStatus = (countService) / this.getCountDb() * 100;
  }

  /**
   * return จำนวน Service ทั้งหมดจาก env
   */
  getCountServiceAll() {
    let countAllService: number; // จำนวน
    const source = Object.keys(environment.qm.sub[0]);
    countAllService = 0;
    for (const entry of source) {
      const sub = Object.keys(environment.qm.sub[0][entry].sub[0]);
      for (const entry_sub of sub) {
        console.log(entry_sub)
        countAllService++;
      }
    }
    return countAllService;
  }
  /**
   *
   * @param reportname รับชื่อรายงานจากการคลิ๊กจากหน้า 0014-1
   */
  getReportname(reportname: string) {
    this.reportname = reportname;
  }
  /**
   * ดาวโหลดเป็น pdf
   */
  pfdDownload() {
    if (this.dataSearch.citizenCardNumber === null) {
      this.dataSearch.citizenCardNumber = '0';
    } else if (this.dataSearch.firstName && this.dataSearch.lastname) {
      this.dataSearch.firstName = '0';
      this.dataSearch.lastname = '0';
    }
    if (this.report_name === 'รายงาน Single Report') {
      this.reportclick = `/dxcui0014/dxcui0018/report1`;
    } else if (this.report_name === 'กรมคุมประพฤติ') {
      this.reportclick = `/dxcui0014/dxcui0018/report2`;
    } else if (this.report_name === 'กรมพินิจและคุ้มครองเด็กและเยาวชน') {
      this.reportclick = `/dxcui0014/dxcui0018/report3`;
    } else if (this.report_name === 'กรมราชทัณฑ์') {
      this.reportclick = `/dxcui0014/dxcui0018/report4`;
    } else {
      this.router.navigate(['/']);
    }
  }
  /**
   * preview ข้อมูลก่อน พิมพ์ pdf(เป็นหน้า Single Report)
   */
  pdfPreview() {
    if (this.dataSearch.citizenCardNumber === null) {
      this.dataSearch.citizenCardNumber = '0';
    } else if (this.dataSearch.firstName && this.dataSearch.lastname) {
      this.dataSearch.firstName = '0';
      this.dataSearch.lastname = '0';
    }
    if (this.report_name === 'รายงาน Single Report') {
      this.router.navigate(['dxcui0014/dxcui0019/' +
        this.report_name, this.dataSearch.citizenCardNumber, this.dataSearch.firstName, this.dataSearch.lastname,'']);
    } else if (this.report_name === 'กรมคุมประพฤติ') {
      this.router.navigate(['dxcui0014/dxcui0019/',
        this.report_name, this.dataSearch.citizenCardNumber, this.dataSearch.firstName, this.dataSearch.lastname]);
    } else if (this.report_name === 'กรมพินิจและคุ้มครองเด็กและเยาวชน') {
      this.router.navigate(['dxcui0014/dxcui0019/' +
        this.report_name, this.dataSearch.citizenCardNumber, this.dataSearch.firstName, this.dataSearch.lastname]);
    } else if (this.report_name === 'กรมราชทัณฑ์') {
      this.router.navigate(['dxcui0014/dxcui0019/' +
        this.report_name, this.dataSearch.citizenCardNumber, this.dataSearch.firstName, this.dataSearch.lastname]);
    } else {
      this.router.navigate(['/']);
    }
  }

  getCountDb() {
    const count = [];
    const source = Object.keys(environment.qm.sub[0]);
    for (const entry of source) {
      const sub = Object.keys(environment.qm.sub[0][entry].sub[0]);
      for (const entry_sub of sub) {
        const db = environment.qm.sub[0][entry].sub[0][entry_sub].db;
        if (localStorage.getItem(db) === 'true') {
          // console.log(db)
          count.push(this.filteredLS(db));
        }
      }
    }
    // console.log(count);
    // console.log(count.length);
    return count.length;
  }

  filteredLS(term) {
    const filteredObj = {};
    Object.keys(localStorage)

      .filter(function (key) {
        return key.indexOf(term) >= 0;
      })

      .map(function (key) {
        filteredObj[key] = localStorage.getItem(key);
      });

    return JSON.stringify(filteredObj);
  }

  clearlocalStore() {
    let source = Object.keys(environment.qm.sub[0]);
    for (const entry of source) {
      let sub = Object.keys(environment.qm.sub[0][entry].sub[0]);
      for (const entry_sub of sub) {
        const schema = environment.qm.sub[0][entry].sub[0][entry_sub].schema;
        localStorage.removeItem(schema + 'Results');
      }
    }
  }

  checkLblStatus() {
    if (this.lblStatus == 100) {
      return false;
    } else {
      return true;
    }
  }

  getSpecializeDop() {
    this.specializedopService.findByCID(this.dataSearch.citizenCardNumber, 100, 0, null, this.dataSearch.dataSetId).subscribe(data => {
      console.log(data);
      this.lblStatus = 100;
      this.checkLblStatus();
    });
  }

  getSpecialzeDjop() {
    this.specializedopService.findByCID(this.dataSearch.citizenCardNumber, 100, 0, null, this.dataSearch.dataSetId).subscribe(data => {
      console.log(data);
      this.lblStatus = 100;
      this.checkLblStatus();
    });
  }

  getSpecialzeDoc() {
    this.specializedocService.findByCID(this.dataSearch.citizenCardNumber, 100, 0, null, this.dataSearch.dataSetId).subscribe(data => {
      console.log(data);
      this.lblStatus = 100;
      this.checkLblStatus();
    });
  }

  btnSearch_Click() {
    this.router.navigateByUrl('singlereport/loaddata2/'+this.report_name);
  }
  btnBackSearch_Click() {
    this.router.navigateByUrl('dxcui0014/dxcui00141/'+this.report_name);
  }

}

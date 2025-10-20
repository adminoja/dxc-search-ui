import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as ApexCharts from 'apexcharts';
import * as luxon from 'luxon';
import { IDxc_Model_Dopa_Moi_Persons } from 'src/app/core/shared/models/Dxc_Model_Dopa_Moi_Persons';
import { Dxc_Model_Moi_Dopa_ThaiIdcard } from 'src/app/core/shared/models/Dxc_Model_Dopa_Moi_Thaiidcard';
import { SpecializedopService } from 'src/app/core/shared/services/dxc/idb/dop/specializedop.service';
import { UserService } from 'src/app/core/shared/services/Userprofile/user.service';
import { AgothChargeSubjectMetadata } from '../../localsearch/qmreporttemplate/dxc-model-agoth-charge-subjects/dxc-model-agoth-charge-subjects.interface';
import { AgothChargeVictimMetadata } from '../../localsearch/qmreporttemplate/dxc-model-agoth-charge-victim/dxc-model-agoth-charge-victim.interface';
import { AmloMoneylaunderingcaseMetadata } from '../../localsearch/qmreporttemplate/dxc-model-amlo-money-laundering-case/dxc-model-amlo-money-laundering-case.interface';
import { CifsCorpseMetadata } from '../../localsearch/qmreporttemplate/dxc-model-cifs-corpse/dxc-model-cifs-corpse.interface';
import { CifsMissingPersonMetadata } from '../../localsearch/qmreporttemplate/dxc-model-cifs-missing-person/dxc-model-cifs-missing_person.interface';
import { CifsReportVerificationMetadata } from '../../localsearch/qmreporttemplate/dxc-model-cifs-report-verification/dxc-model-cifs-report-verification.interface';
import { CojArrestWarrantsMetadata } from '../../localsearch/qmreporttemplate/dxc-model-coj-arrest-warrants/dxc-model-coj-arrest-warrants.interface';
import { DcaMoiThailanfPassportMetadata } from '../../localsearch/qmreporttemplate/dxc-model-dca-moi-thailand-passport/dxc-model-dca-moi-thailand-passport.interface';
import { DepMoiCrippleMetadata } from '../../localsearch/qmreporttemplate/dxc-model-dep-moi-cripple/dxc-model-dep-moi-cripple.interface';
import { DjopJuvenileOffenderMetadata } from '../../localsearch/qmreporttemplate/dxc-model-djop-juvenile-offender/dxc-model-djop-juvenile-offender.interface';
import { DltCarLicenseMetadata } from '../../localsearch/qmreporttemplate/dxc-model-dlt-car-license/dxc-model-dlt-car-license.interface';
import { DltDriverLicenseMetadata } from '../../localsearch/qmreporttemplate/dxc-model-dlt-driver-license/dxc-model-dlt-driver-license.interface';
import { DocPrisonerMetadata } from '../../localsearch/qmreporttemplate/dxc-model-doc-prisoner/dxc-model-doc-prisoner.interface';
import { DocRegseizeMetadata } from '../../localsearch/qmreporttemplate/dxc-model-doc-reg-seize/dxc-model-doc-reg-seize.interface';
import { DocRemandeeMetadata } from '../../localsearch/qmreporttemplate/dxc-model-doc-remandee/dxc-model-doc-remandee/dxc-model-doc-remandee.interface';
import { DoeMoiAlienWorkforcesMetadata } from '../../localsearch/qmreporttemplate/dxc-model-doe-moi-alien-workforces/dxc-model-doe-moi-alien-workforces.interface';
import { DolLandAndCondominiumTitlesMetadata } from '../../localsearch/qmreporttemplate/dxc-model-dol-land-and-condominium-titles/dxc-model-dol-land-and-condominium-titles.interface';
import { DopProbationerMetadata } from '../../localsearch/qmreporttemplate/dxc-model-dop-probationer/dxc-model-dop-probationer.interface';
import { DopaMoiAddressesMetadata } from '../../localsearch/qmreporttemplate/dxc-model-dopa-moi-addresses/dxc-model-dopa-moi-addresses.interface';
import { DopaMoiAliensMetadata } from '../../localsearch/qmreporttemplate/dxc-model-dopa-moi-aliens/dxc-model-dopa-moi-aliens.interface';
import { DopaMoiBirthCertificatesMetadata } from '../../localsearch/qmreporttemplate/dxc-model-dopa-moi-birthcertificates/dxc-model-dopa-moi-birthcertificates.interface';
import { DopaMoiBorderPassesMetadata } from '../../localsearch/qmreporttemplate/dxc-model-dopa-moi-border-passes/dxc-model-dopa-moi-border-passes.interface';
import { DopaMoiDeathCertificatesMetadata } from '../../localsearch/qmreporttemplate/dxc-model-dopa-moi-death-certificates/dxc-model-dopa-moi-death-certificates.interface';
import { DopaMoiDivorceCertificatesMetadata } from '../../localsearch/qmreporttemplate/dxc-model-dopa-moi-divorce-certificates/dxc-model-dopa-moi-divorce-certificates.interface';
import { DopaMoiPersonChangelastnameMetadata } from '../../localsearch/qmreporttemplate/dxc-model-dopa-moi-dopa-person-changelastname/dxc-model-dopa-moi-dopa-person-changelastname.interface';
import { DopaMoiEducationBackgroundesMetadata } from '../../localsearch/qmreporttemplate/dxc-model-dopa-moi-education-backgroundes/dxc-model-dopa-moi-education-backgroundes.interface';
import { DopaMoiFacePhotosMetadata } from '../../localsearch/qmreporttemplate/dxc-model-dopa-moi-face-photos/dxc-model-dopa-moi-face-photos.interface';
import { DopaMoiMarriageCertificatesMetadata } from '../../localsearch/qmreporttemplate/dxc-model-dopa-moi-marriage-certificates/dxc-model-dopa-moi-marriage-certificates.interface';
import { DopaMoiPersonChangenamePrimaryMetadata } from '../../localsearch/qmreporttemplate/dxc-model-dopa-moi-person-changename-primary/dxc-model-dopa-moi-person-changename-primary.interface';
import { DopaMoiPersonsMetadata } from '../../localsearch/qmreporttemplate/dxc-model-dopa-moi-persons/dxc-model-dopa-moi-persons.interface';
import { DopaMoiPor4Metadata } from '../../localsearch/qmreporttemplate/dxc-model-dopa-moi-por4/dxc-model-dopa-moi-por4.interface';
import { DopaMoiThaiidcardMetadata } from '../../localsearch/qmreporttemplate/dxc-model-dopa-moi-thaiidcard/dxc-model-dopa-moi-thaiidcard.interface';
import { DsdMoiWorkforceDevelopmentsMetadata } from '../../localsearch/qmreporttemplate/dxc-model-dsd-moi-workforce-developments/dxc-model-dsd-moi-workforce-developments.interface';
import { DsiWarrantMetadata } from '../../localsearch/qmreporttemplate/dxc-model-dsi-warrant/dxc-model-dsi-warrant.interface';
import { JfoJfoCaseMetadata } from '../../localsearch/qmreporttemplate/dxc-model-jfo-jfo-case/dxc-model-jfo-jfo-case.interface';
import { LedBankruptcyCaseMetadata } from '../../localsearch/qmreporttemplate/dxc-model-led-bankruptcy-case/dxc-model-led-bankruptcy-case.interface';
import { MoacMoiFisheriesIllegalMetadata } from '../../localsearch/qmreporttemplate/dxc-model-moac-moi-fisheries-illegal/dxc-model-moac-moi-fisheries-illegal.interface';
import { MofRegisterOfTaxpayersMetadata } from '../../localsearch/qmreporttemplate/dxc-model-mof-register-of-taxpayers/dxc-model-mof-register-of-taxpayers.interface';
import { MsdhsMoiNewBornBabiesMetadata } from '../../localsearch/qmreporttemplate/dxc-model-msdhs-moi-new-born-babies/dxc-model-msdhs-moi-new-born-babies.interface';
import { NaccMoiCorruptionAccusedsMetadata } from '../../localsearch/qmreporttemplate/dxc-model-nacc-moi-corruption-accuseds/dxc-model-nacc-moi-corruption-accuseds.interface';
import { NhsoMoiHealthInsuranceRightsMetadata } from '../../localsearch/qmreporttemplate/dxc-model-nhso-moi-nhso-health-insurance-rights/dxc-model-nhso-moi-nhso-health-insurance-rights.interface';
import { OncbNarcoticOffenderMetadata } from '../../localsearch/qmreporttemplate/dxc-model-oncb-narcotic-offender/dxc-model-oncb-narcotic-offender.interface';
import { DocReleasedOffenderMetadata } from '../../localsearch/qmreporttemplate/dxc-model-released-offender/dxc-model-released-offender.interface';
import { RlpdCrimeDefendantCompensationMetadata } from '../../localsearch/qmreporttemplate/dxc-model-rlpd-crime-defendant-compensation/dxc-model-rlpd-crime-defendant-compensation.interface';
import { RlpdCrimeVictimCompensationMetadata } from '../../localsearch/qmreporttemplate/dxc-model-rlpd-crime-victim-compensation/dxc-model-rlpd-crime-victim-compensation.interface';
import { RlpdRequestorsMetadata } from '../../localsearch/qmreporttemplate/dxc-model-rlpd-requestors/dxc-model-rlpd-requestors.interface';
import { RtpCriminalMetadata } from '../../localsearch/qmreporttemplate/dxc-model-rtp-criminal/dxc-model-rtp-criminal.interface';
import { RtpMissingPersonCaseMetadata } from '../../localsearch/qmreporttemplate/dxc-model-rtp-missing-person-case/dxc-model-rtp-missing-person-case.interface';
import { SsoEmployeeEmploymentMetaData } from '../../localsearch/qmreporttemplate/dxc-model-sso-employee-employment/dxc-model-sso-employee-employment.interface';
import { SsoEmploymentMetaData } from '../../localsearch/qmreporttemplate/dxc-model-sso-employment/dxc-model-sso-employment.interface';
import { MoeMoiStudentsMetadata } from '../../localsearch/qmreporttemplate/dxc-model-moe-moi-students/dxc-model-moe-moi-students.interface';

@Component({
  selector: 'app-report-dop',
  templateUrl: './report-dop.component.html',
  styleUrls: ['./report-dop.component.scss'],
  providers: [
    DopaMoiFacePhotosMetadata,
    DopaMoiThaiidcardMetadata,
    DopaMoiPersonsMetadata,
    DopaMoiAddressesMetadata,
    DopaMoiBirthCertificatesMetadata,
    DopaMoiAliensMetadata,
    DopaMoiBorderPassesMetadata,
    DopaMoiDeathCertificatesMetadata,
    DopaMoiDivorceCertificatesMetadata,
    DopaMoiEducationBackgroundesMetadata,
    DopaMoiMarriageCertificatesMetadata,
    DopaMoiPersonChangenamePrimaryMetadata,
    DopaMoiPersonChangelastnameMetadata,
    RlpdRequestorsMetadata,
    RlpdCrimeDefendantCompensationMetadata,
    RlpdCrimeVictimCompensationMetadata,
    CifsMissingPersonMetadata,
    CifsCorpseMetadata,
    CifsReportVerificationMetadata,
    NhsoMoiHealthInsuranceRightsMetadata,
    DsdMoiWorkforceDevelopmentsMetadata,
    MsdhsMoiNewBornBabiesMetadata,
    RtpMissingPersonCaseMetadata,
    JfoJfoCaseMetadata,
    AgothChargeVictimMetadata,
    DoeMoiAlienWorkforcesMetadata,
    DltCarLicenseMetadata,
    DcaMoiThailanfPassportMetadata,
    DepMoiCrippleMetadata,
    MofRegisterOfTaxpayersMetadata,
    OncbNarcoticOffenderMetadata,
    DopProbationerMetadata,
    DjopJuvenileOffenderMetadata,
    DocPrisonerMetadata,
    DocRegseizeMetadata,
    DocRemandeeMetadata,
    AmloMoneylaunderingcaseMetadata,
    NaccMoiCorruptionAccusedsMetadata,
    MoacMoiFisheriesIllegalMetadata,
    RtpCriminalMetadata,
    DsiWarrantMetadata,
    AgothChargeSubjectMetadata,
    DocReleasedOffenderMetadata,
    CojArrestWarrantsMetadata,
    DopaMoiPor4Metadata,
    LedBankruptcyCaseMetadata,
    DolLandAndCondominiumTitlesMetadata,
    DltDriverLicenseMetadata,
    MoeMoiStudentsMetadata,
    SsoEmployeeEmploymentMetaData,
    SsoEmploymentMetaData,
  ]
})
export class ReportDopComponent implements OnInit {

  DopaMoiThaiidcardResults: Dxc_Model_Moi_Dopa_ThaiIdcard[];
  DopaMoiThaiidcardShow: boolean;
  checkMoiDopaThaiIdcardResults: boolean;
  report_name: string;
  startTime: any;
  thaiNin: any;
  searchId: string;
  // career: string;

  constructor(
    private router: Router,
    private userService: UserService, 
    private routeparams: ActivatedRoute,
    private ReportDopaMoiPersons: DopaMoiPersonsMetadata, 
    private ReportDopaMoiThaiidcard: DopaMoiThaiidcardMetadata,
    private specialDopSerivce: SpecializedopService) { }

  ngOnInit() {
    this.loadProfile();
    this.ReportDopaMoiThaiidcard.getSearchData();
    this.DopaMoiThaiidcardResults = this.ReportDopaMoiThaiidcard.$results;
    this.DopaMoiThaiidcardShow = true;
    
    // this.career = localStorage.getItem('idb-career-reportResults');
    this.routeparams.params.subscribe(
      params => this.getReportname(params['reportname'])
    );
    this.startTime = localStorage.getItem('startTime');
    this.thaiNin = localStorage.getItem('thaiNin');
    this.routeparams.params.subscribe(
      params => this.setSearchId(params['searchId'])
    );
    this.timeLine();
  }
  setSearchId(name: string) {
    this.searchId = name;
  }

  timeLine () {
    this.specialDopSerivce.getTimeline(this.searchId).subscribe(data=> {
      console.log(data)
    const options = {
      series: data,

      chart: {
        type: 'rangeBar',

        events: {
          dataPointSelection(event, chartContext, config) {
            const seriesIndex = config.seriesIndex;
            const dataPointIndex = config.dataPointIndex;
            console.log(seriesIndex);
            console.log(dataPointIndex);
            console.log(config.w.config.series[seriesIndex].data[dataPointIndex]);
          }
        },
        locales: [
          {
            name: 'th',
            options: {
              months: [
                'มกราคม',
                'กุมภาพันธ์',
                'มีนาคม',
                'เมษายน',
                'พฤษภาคม',
                'มิถุนายน',
                'กรกฎาคม',
                'สิงหาคม',
                'กันยายน',
                'ตุลาคม',
                'พฤศจิกายน',
                'ธันวาคม'
              ],
              shortMonths: [
                'ม.ค.',
                'ก.พ.',
                'มี.ค.',
                'เม.ย.',
                'พ.ค.',
                'มิ.ย.',
                'ก.ค.',
                'ส.ค.',
                'ก.ย.',
                'ต.ค.',
                'พ.ย.',
                'ธ.ค.'
              ],
              days: [
                'อาทิตย์',
                'จันทร์',
                'อังคาร',
                'พุธ',
                'พฤหัสบดี',
                'ศุกร์',
                'เสาร์'
              ],
              shortDays: ['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส'],
              toolbar: {
                exportToSVG: 'ดาวน์โหลด SVG',
                exportToPNG: 'ดาวน์โหลด PNG',
                exportToCSV: 'ดาวน์โหลด CSV',
                menu: 'เมนู',
                selection: 'เลือก',
                selectionZoom: 'เลือกจุดที่จะซูม',
                zoomIn: 'ซูมเข้า',
                zoomOut: 'ซูมออก',
                pan: 'ปรากฎว่า',
                reset: 'รีเซ็ตการซูม'
              }
            }
          }
        ],
        defaultLocale: 'th'
      },
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: '80%'
        }
      },
      xaxis: {
        type: 'datetime',
        labels: {
          datetimeFormatter: {
            year: 'yyyy',
            month: 'MMM yy',
            day: 'dd MMMM yy',
            hour: 'HH:mm'
          },
          formatter(value, timestamp, opts) {
            const thaiDateTime = luxon.DateTime.fromMillis(value).setLocale('th');
            // return thaiDateTime.toLocaleString(luxon.DateTime.DATE_SHORT);
            // return thaiDateTime.toFormat('MM/yy');
            console.log('timestamp: ' + timestamp);
            return thaiDateTime.toLocaleString({ month: 'numeric', year: 'numeric' });
          }

        }
        , tickAmount: 10
      },
      stroke: {
        width: 1
      },
      fill: {
        type: 'solid',
        opacity: 0.6
      },
      legend: {
        position: 'top',
        horizontalAlign: 'left'
      }
      , theme: {
        mode: 'dark'
      }
      , dataLabels: {
        enabled: true,
        formatter(val) {
          const a = luxon.DateTime.fromMillis(val[0]);
          const b = luxon.DateTime.fromMillis(val[1]);
          const diff = b.diff(a, 'days').toObject();
          return diff.days + ' วัน';
        }
      }
      , grid: {
        show: true
        , xaxis: {
          lines: {
            show: false
          }
        }
        , yaxis: {
          lines: {
            show: true
          }
        }
        , column: {
          opacity: 0.1
        }
      }
    };

    const chart = new ApexCharts(document.querySelector('#chart'), options);
    chart.render();
  })
  }
  getReportname(reportname: string) {
    this.report_name = reportname;
  }
  loadProfile() {
    if (localStorage.getItem('usernameLogin') !== '') {
      // const groupId = localStorage.getItem('usernameLogin');
      // console.log(groupId);
      const userProfile = localStorage.getItem('userProfile');

      const userData = JSON.parse(userProfile);
      // console.log(userData);
      if (userData !== null) {
        this.userService.findMyDataset().subscribe(data => {
          this.filter(data,this.report_name);

        }, error => {
          this.httpErrorResponse(null, null, error);
        });
      } else {
        this.router.navigate(['504']);
      }
    }
    // this.userService.findByAcl().subscribe(data => {
    //   this.DXC_GROUP_DATA_ACL = data['content'];
    // });
  }
  filter(value,report_name) {
    if (report_name == 'กรมคุมประพฤติ'){
      let idbDopPersonReport = value.filter(permistion=> permistion === 'idb.dop-person-report');
      if (idbDopPersonReport.length == 0 ){
        alert('ไม่มีสิทธิการเข้าใช้งาน');
        this.router.navigate(['401']);
      }
    }
    else{
      alert('ไม่มีสิทธิการเข้าใช้งาน');
      this.router.navigate(['401']);
    }
  }
   
  /**
     *
     * @param no ลำดับ
     * @param dbService ชื่อฐานข้อมูล
     * @param error ข้อมูลที่ responseError กลับมา
     */
   httpErrorResponse(no: number, dbService: string, error: any) {
    let messageError: string;

    if (error.status === 504) {
      messageError = `<span class="badge badge-danger">
    เชื่อมต่อไม่ได้</span>`;
      this.router.navigate(['504']);
      console.log(error);
    } else if (error.status === 500) {
      this.router.navigate(['500']);
    } else if (error.status === 401) {
      messageError = `<span class="badge badge-danger">
    เจ้าหน้าที่ไม่ได้ทำการเข้าระบบด้วยบัตรประชาชน</span>`;
      this.router.navigate(['401']);
    } else if (error.status === 404) {
      console.log('เกิดข้อผิดพลาด');
      this.router.navigate(['404']);
    } else if (error.status === 0) {
      messageError = `<span class="badge badge-danger">
    ไม่พบข้อมูล</span>`;
      this.router.navigate(['0']);
    } else {
      messageError = `<span class="badge badge-danger">
    เกิดข้อผิดพลาดโดยไม่ทราบสาเหตุ</span>`;
    }
    // return `ลำดับ ${no} บริการ ${dbService} เกิดข้อผิดพลาด ${messageError}`;
    return `${messageError}`;
  }


}

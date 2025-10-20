import { RtpArrestWarrantMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-rtp-arrest-warrant/dxc-model-rtp-arrest-warrant.interface';
import { DopaMoiPor4Metadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-dopa-moi-por4/dxc-model-dopa-moi-por4.interface';
import { IDxcModelLedBankruptcyCase } from '../../../shared/models/Dxc_Model_Led_BankruptcyCase';
import { LedBankruptcyCaseMetadata } from '../../localsearch/qmreporttemplate/dxc-model-led-bankruptcy-case/dxc-model-led-bankruptcy-case.interface';
import { IDxc_Model_Rlpd_Requestors } from './../../../shared/models/Dxc_Model_Rlpd_Requestors';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DxcUi0019Imp, Dopa } from './dxc-ui-0019.Interface';
import { Dxc_Model_SearchFillter } from '../../../shared/models/Dxc_Model_SearchFillter';
import { Dxc_Model_Doc_Prisoner } from '../../../shared/models/Dxc_Model_Doc_Prisoner';
import { Dxc_Model_Rtp_Criminal } from '../../../shared/models/Dxc_Model_Rtp_Criminal';
import { ActivatedRoute, Router } from '@angular/router';
import { ThemeLight } from '../../../shared/utils/theme-light';
import { Dxc_Model_Dlt_DriverLicenseNew } from '../../../shared/models/Dxc_Model_Dlt_DriverLicenseNew';
import { Dxc_Model_Dopa_Citizen } from '../../../shared/models/Dxc_Model_Dopa_Citizen';
import { Dxc_Model_Dop_Probationer } from '../../../shared/models/Dxc_Model_Dop_Probationer';
import { Dxc_Model_Oncb_NarcoticOffender, IDxc_Model_Oncb_NarcoticOffender } from '../../../shared/models/Dxc_Model_Oncb_NarcoticOffender';
import { Dxc_Model_Djop_JuvenileOffender, IDxc_Model_Djop_JuvenileOffender } from '../../../shared/models/Dxc_Model_Djop_JuvenileOffender';
import { Dxc_Model_Rlpd_Requestors } from '../../../shared/models/Dxc_Model_Rlpd_Requestors';
import { ThaiDatePipe } from '../../../shared/pipe/thaidate.pipe';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ExportwordService } from '../../../shared/services/Exportword/exportword.service';
import { saveAs } from 'file-saver/FileSaver';
import { ExportWord } from '../reports/report3/report3.exportword.interface';
import { Dxc_Model_Person } from '../../../shared/models/Dxc_Model_Person';
import { DocPrisonerMetadata } from '../../localsearch/qmreporttemplate/dxc-model-doc-prisoner/dxc-model-doc-prisoner.interface';
import {
  DjopJuvenileOffenderMetadata
} from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-djop-juvenile-offender/dxc-model-djop-juvenile-offender.interface';
import {
  DopProbationerMetadata
} from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-dop-probationer/dxc-model-dop-probationer.interface';
import {
  DopaCitizenMetadata
} from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-dopa-citizen/dxc-model-dopa-citizen.interface';
import {
  OncbNarcoticOffenderMetadata
} from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-oncb-narcotic-offender/dxc-model-oncb-narcotic-offender.interface';
import {
  RlpdRequestorsMetadata
} from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-rlpd-requestors/dxc-model-rlpd-requestors.interface';
import {
  IDxc_Model_Dopa_Moi_Addresses,
  Dxc_Model_Dopa_Moi_Addresses
} from 'src/app/core/shared/models/Dxc_Model_Dopa_Moi_Addresses';
import {
  DopaMoiAddressesMetadata
} from '../../localsearch/qmreporttemplate/dxc-model-dopa-moi-addresses/dxc-model-dopa-moi-addresses.interface';
import { Utils } from '../../../shared/utils/Utils';
import { AgothAttorneyCasesMetadata } from '../../localsearch/qmreporttemplate/dxc-model-agoth-attorney-cases/dxc-model-agoth-attorney-cases.interface';
import { RtpMissingPersonCaseMetadata } from '../../localsearch/qmreporttemplate/dxc-model-rtp-missing-person-case/dxc-model-rtp-missing-person-case.interface';
import { environment } from 'src/environments/environment';
import { DopaMoiBirthCertificatesMetadata } from '../../localsearch/qmreporttemplate/dxc-model-dopa-moi-birthcertificates/dxc-model-dopa-moi-birthcertificates.interface';
import { DopaMoiPersonsMetadata } from '../../localsearch/qmreporttemplate/dxc-model-dopa-moi-persons/dxc-model-dopa-moi-persons.interface';
import { AmloMoneylaunderingcaseMetadata } from '../../localsearch/qmreporttemplate/dxc-model-amlo-money-laundering-case/dxc-model-amlo-money-laundering-case.interface';
import { DocRegseizeMetadata } from '../../localsearch/qmreporttemplate/dxc-model-doc-reg-seize/dxc-model-doc-reg-seize.interface';
import { CifsMissingPersonMetadata } from '../../localsearch/qmreporttemplate/dxc-model-cifs-missing-person/dxc-model-cifs-missing_person.interface';
import { DopaMoiFacePhotosMetadata } from '../../localsearch/qmreporttemplate/dxc-model-dopa-moi-face-photos/dxc-model-dopa-moi-face-photos.interface';
import { NhsoMoiHealthInsuranceRightsMetadata } from '../../localsearch/qmreporttemplate/dxc-model-nhso-moi-nhso-health-insurance-rights/dxc-model-nhso-moi-nhso-health-insurance-rights.interface';
import { NaccMoiCorruptionAccusedsMetadata } from '../../localsearch/qmreporttemplate/dxc-model-nacc-moi-corruption-accuseds/dxc-model-nacc-moi-corruption-accuseds.interface';
import { DsdMoiWorkforceDevelopmentsMetadata } from '../../localsearch/qmreporttemplate/dxc-model-dsd-moi-workforce-developments/dxc-model-dsd-moi-workforce-developments.interface';
import { DolLandAndCondominiumTitlesMetadata } from '../../localsearch/qmreporttemplate/dxc-model-dol-land-and-condominium-titles/dxc-model-dol-land-and-condominium-titles.interface';
import { DopaMoiAliensMetadata } from '../../localsearch/qmreporttemplate/dxc-model-dopa-moi-aliens/dxc-model-dopa-moi-aliens.interface';
import { SsoEmployeeEmploymentMetaData } from '../../localsearch/qmreporttemplate/dxc-model-sso-employee-employment/dxc-model-sso-employee-employment.interface';
import { JfoJfoCaseMetadata } from '../../localsearch/qmreporttemplate/dxc-model-jfo-jfo-case/dxc-model-jfo-jfo-case.interface';
import { DopaMoiDivorceCertificatesMetadata } from '../../localsearch/qmreporttemplate/dxc-model-dopa-moi-divorce-certificates/dxc-model-dopa-moi-divorce-certificates.interface';
import { DopaMoiDeathCertificatesMetadata } from '../../localsearch/qmreporttemplate/dxc-model-dopa-moi-death-certificates/dxc-model-dopa-moi-death-certificates.interface';
import { AgothChargeVictimMetadata } from '../../localsearch/qmreporttemplate/dxc-model-agoth-charge-victim/dxc-model-agoth-charge-victim.interface';
import { DsiWarrantMetadata } from '../../localsearch/qmreporttemplate/dxc-model-dsi-warrant/dxc-model-dsi-warrant.interface';
import { DltDriverLicenseMetadata } from '../../localsearch/qmreporttemplate/dxc-model-dlt-driver-license/dxc-model-dlt-driver-license.interface';
import { CifsCorpseMetadata } from '../../localsearch/qmreporttemplate/dxc-model-cifs-corpse/dxc-model-cifs-corpse.interface';
import { DocReleasedPrisonersMetadata } from '../../localsearch/qmreporttemplate/dxc-model-doc-released-prisoners/dxc-model-doc-released-prisoners.interface';
import { CifsReportVerificationMetadata } from '../../localsearch/qmreporttemplate/dxc-model-cifs-report-verification/dxc-model-cifs-report-verification.interface';
import { RlpdCrimeDefendantCompensationMetadata } from '../../localsearch/qmreporttemplate/dxc-model-rlpd-crime-defendant-compensation/dxc-model-rlpd-crime-defendant-compensation.interface';
import { DopaMoiPersonChangenamePrimaryMetadata } from '../../localsearch/qmreporttemplate/dxc-model-dopa-moi-person-changename-primary/dxc-model-dopa-moi-person-changename-primary.interface';
import { RlpdCrimeVictimCompensationMetadata } from '../../localsearch/qmreporttemplate/dxc-model-rlpd-crime-victim-compensation/dxc-model-rlpd-crime-victim-compensation.interface';
import { DocReleasedOffenderMetadata } from '../../localsearch/qmreporttemplate/dxc-model-released-offender/dxc-model-released-offender.interface';
import { DltCarLicenseMetadata } from '../../localsearch/qmreporttemplate/dxc-model-dlt-car-license/dxc-model-dlt-car-license.interface';
import { DopaMoiPersonChangelastnameMetadata } from '../../localsearch/qmreporttemplate/dxc-model-dopa-moi-dopa-person-changelastname/dxc-model-dopa-moi-dopa-person-changelastname.interface';
import { SsoEmploymentMetaData } from '../../localsearch/qmreporttemplate/dxc-model-sso-employment/dxc-model-sso-employment.interface';
import { RtpCriminalMetadata } from '../../localsearch/qmreporttemplate/dxc-model-rtp-criminal/dxc-model-rtp-criminal.interface';
import { MsdhsMoiNewBornBabiesMetadata } from '../../localsearch/qmreporttemplate/dxc-model-msdhs-moi-new-born-babies/dxc-model-msdhs-moi-new-born-babies.interface';
import { MofRegistrantMetadata } from '../../localsearch/qmreporttemplate/dxc-model-mof-registrant/dxc-model-mof-registrant.interface';
import { MoacMoiFisheriesIllegalMetadata } from '../../localsearch/qmreporttemplate/dxc-model-moac-moi-fisheries-illegal/dxc-model-moac-moi-fisheries-illegal.interface';
import { DcaMoiThailanfPassportMetadata } from '../../localsearch/qmreporttemplate/dxc-model-dca-moi-thailand-passport/dxc-model-dca-moi-thailand-passport.interface';
import { DepMoiCrippleMetadata } from '../../localsearch/qmreporttemplate/dxc-model-dep-moi-cripple/dxc-model-dep-moi-cripple.interface';
import { CojArrestWarrantsMetadata } from '../../localsearch/qmreporttemplate/dxc-model-coj-arrest-warrants/dxc-model-coj-arrest-warrants.interface';
import { MofRegisterOfTaxpayersMetadata } from '../../localsearch/qmreporttemplate/dxc-model-mof-register-of-taxpayers/dxc-model-mof-register-of-taxpayers.interface';
import { JfoJfoCase64Metadata } from '../../localsearch/qmreporttemplate/dxc-model-jfo-jfo-case64/dxc-model-jfo-jfo-case64.interface';
import { RtpTrafficCaseMetadata } from '../../localsearch/qmreporttemplate/dxc-model-rtp-traffic-case/dxc-model-rtp-traffic-case.interface';
import { RtpCriminalCaseMetadata } from '../../localsearch/qmreporttemplate/dxc-model-rtp-criminal-case/dxc-model-rtp-criminal-case.interface';
import { RtpCriminalRecordMetadata } from '../../localsearch/qmreporttemplate/dxc-model-rtp-criminal-record/dxc-model-rtp-criminal-record.interface';
import { RtpTravelInformationMetadata } from '../../localsearch/qmreporttemplate/dxc-model-rtp-travel-information/dxc-model-rtp-travel-information.interface';
import { RtpWarrantOfArrestMetadata } from '../../localsearch/qmreporttemplate/dxc-model-rtp-warrant-of-arrest/dxc-model-rtp-warrant-of-arrest.interface';
import { DjopJuvenileOffender65Metadata } from '../../localsearch/qmreporttemplate/dxc-model-djop-juvenile-offender65/dxc-model-djop-juvenile-offender65.interface';
import { DocPrisonerBankruptMetadata } from '../../localsearch/qmreporttemplate/dxc-model-doc-prisoner-bankrupt/dxc-model-doc-prisoner-bankrupt.interface';
import { DopProbationerNarcoticsMetadata } from '../../localsearch/qmreporttemplate/dxc-model-dop-probationer-narcotics/dxc-model-dop-probationer-narcotics.interface';
@Component({
  selector: 'app-dxc-ui-0019',
  templateUrl: './dxc-ui-0019.component.html',
  styleUrls: ['./dxc-ui-0019.component.css'],
  providers: [
    DocPrisonerMetadata,
    DjopJuvenileOffenderMetadata,
    DopProbationerMetadata,
    DopaCitizenMetadata,
    OncbNarcoticOffenderMetadata,
    RlpdRequestorsMetadata,
    DopaMoiAddressesMetadata,
    AgothAttorneyCasesMetadata,
    RtpMissingPersonCaseMetadata,
    LedBankruptcyCaseMetadata,
    DopaMoiBirthCertificatesMetadata,
    DopaMoiPersonsMetadata,
    DopaMoiPor4Metadata,
    AmloMoneylaunderingcaseMetadata,
    DocRegseizeMetadata,
    CifsMissingPersonMetadata,
    DopaMoiFacePhotosMetadata,
    NhsoMoiHealthInsuranceRightsMetadata,
    NaccMoiCorruptionAccusedsMetadata,
    DsdMoiWorkforceDevelopmentsMetadata,
    DolLandAndCondominiumTitlesMetadata,
    DopaMoiAliensMetadata,
    SsoEmployeeEmploymentMetaData,
    JfoJfoCaseMetadata,
    DopaMoiDivorceCertificatesMetadata,
    DopaMoiDeathCertificatesMetadata,
    AgothChargeVictimMetadata,
    DsiWarrantMetadata,
    DltDriverLicenseMetadata,
    CifsCorpseMetadata,
    DocReleasedPrisonersMetadata,
    CifsReportVerificationMetadata,
    RlpdCrimeDefendantCompensationMetadata,
    DopaMoiPersonChangenamePrimaryMetadata,
    RlpdCrimeVictimCompensationMetadata,
    DocReleasedOffenderMetadata,
    DltCarLicenseMetadata,
    DopaMoiPersonChangelastnameMetadata,
    SsoEmploymentMetaData,
    RtpCriminalMetadata,
    MsdhsMoiNewBornBabiesMetadata,
    MofRegistrantMetadata,
    MoacMoiFisheriesIllegalMetadata,
    DcaMoiThailanfPassportMetadata,
    DepMoiCrippleMetadata,
    CojArrestWarrantsMetadata,
    MofRegisterOfTaxpayersMetadata,
    JfoJfoCase64Metadata,
    RtpTravelInformationMetadata,
    RtpTrafficCaseMetadata,
    RtpCriminalCaseMetadata,
    RtpArrestWarrantMetadata,
    RtpCriminalRecordMetadata,
    RtpWarrantOfArrestMetadata,
    DjopJuvenileOffender65Metadata,
    DocPrisonerBankruptMetadata,
    DopProbationerNarcoticsMetadata,
  ]
})
export class DxcUi0019Component implements OnInit, DxcUi0019Imp, OnChanges {
  btnSearch: HTMLButtonElement;

  lblNote: string;
  tblResultList: HTMLTableElement;

  title: string; // ชื่อหน่วยงานย่อย
  remark: string; // หมายเหตุ
  img: string; // รูปภาพหน่วยงานย่อย
  departmentImg: string; // รูปภาพหน่วยงานหลัก
  departmentTitle: string; // ชื่อหน่วยงานหลัก

  viewhtmlReport: any;
  selectItem: any;
  htmlReport: any;
  lblCitizenNumber: string;

  tabFullname: string;

  dopaItems: any;
  person: Dxc_Model_Person;

  report_name: string;
  dataSearch: Dxc_Model_SearchFillter;

  selectData: number = null;
  theme: ThemeLight;
  prisonerFirstName: any;

  prisonerResults: Dxc_Model_Doc_Prisoner[];
  prisonerObj: string;
  prisonerShow: boolean;
  countprisonerResults: number; // ผลรวมคดี

  juvenileOffenderResults: IDxc_Model_Djop_JuvenileOffender[];
  juvenileOffenderObj: string;
  juvenileOffenderShow: boolean;
  countjuvenileOffenderResults: number; // ผลรวมคดีy

  probationerResults: Dxc_Model_Dop_Probationer[];
  probationerObj: string;
  probationerShow: boolean;

  narcoticOffenderResults: IDxc_Model_Oncb_NarcoticOffender[];
  narcoticOffenderObj: string;
  narcoticOffenderShow: boolean;

  requestorsResults: IDxc_Model_Rlpd_Requestors[];
  requestorsobj: string;
  requestorsShow: boolean;

  moidopaaddressesResults: IDxc_Model_Dopa_Moi_Addresses[];
  moidopaaddressesobj: string;
  moidopaaddressesShow: boolean;

  columnvalue: string;
  columnShow: boolean;

  citizenResults: Dxc_Model_Dopa_Citizen[];
  citizenObj: string;
  citizenShow: boolean;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  imageSrc: string;
  nationality: string;
  religion: string;
  homeNumber: string;
  homeMoo: string;
  homeTrock: string;
  homeSoy: string;
  homeRoad: string;
  homeTumbon: string;
  homeAmphur: string;
  homeProvince: string;
  homeAddress: string;
  judgement: string;
  allegationDoc: string[];
  sentenceDate: string;
  prisonName: string;
  releaseDate: string;
  allegationDjop: string[];
  closeResult: string;
  probationPlannedEndDate: string;
  probationActualEndDate: string;

  reportclick: string;
  reportName: string;
  searchId: string;
  shouldShow: any;

  util: Utils;
  listLefts: string[];
  listAlgations: string[];
  listNormals: string[];
  listNormalPersons: string[];
  countNormalDb: string;
  countAlgationsDb: string;

  outputAlgationsPrisoner: string;
  outputAlgationsProbationer: string;
  outputAlgationsRegseize: string;
  outputAlgationsRemandee: string;
  outputAlgationsNarcoticOffender: string;
  outputAlgationsReleasedOffender: string;
  outputAlgationsCriminal: string;
  outputAlgationsJuvenileOffender: string;
  outputNormalMissingPersonCase: string;
  outputNormalCrimeVictimCompensation: string;
  outputNormalRequestors: string;
  outputNormalChargeVictim: string;
  outputNormalCorpse: string;
  outputNormalBankruptcyCase: string;
  outputAllegationChargeSubject: string;
  outputNormalRegistrant: string;
  outputNormalJfoCase64: string;
  outputCitizencardNumber: string;
  outputAlgationsCriminalCase: string;
  outputAllgationsCriminalRecord: string
  outputNormalRtpArrestWarrant: string;
  outputAlgationsJuvenileOffender65: string;
  

  btnSearch_Click() { }
  tblResultList_getData() { }
  tblCitizenNumber_Click() { }
  tabFullname_getFullname() { }

  onClickData(selectData) {
    this.selectData = selectData;
    console.log(this.selectData);
  }

  reportname(name: string) {
    this.report_name = name;
  }

  setSearchId(name: string) {
    this.searchId = name;
  }
  // get dataSearch
  Search(data: any) {
    this.dataSearch = data;
  }
  constructor(
    private routeparams: ActivatedRoute,
    private ReportDocPrisoner: DocPrisonerMetadata,
    private ReportDjopJuvenileOffender: DjopJuvenileOffenderMetadata,
    private ReportDopProbationer: DopProbationerMetadata,
    private ReportJuvenileOffender: DjopJuvenileOffenderMetadata,
    private ReportDopaCitizen: DopaCitizenMetadata,
    private Reportbirthcertificates: DopaMoiBirthCertificatesMetadata,
    private ReportOncbNarcoticOffender: OncbNarcoticOffenderMetadata,
    private ReportRlpdRequestors: RlpdRequestorsMetadata,
    private ReportDopaMoiAddresses: DopaMoiAddressesMetadata,
    private router: Router,
    private modalService: NgbModal,
    private exportWord: ExportwordService,
    private ReportAgothAttorneyCases: AgothAttorneyCasesMetadata,
    private ReportRtpMissingPersonCase: RtpMissingPersonCaseMetadata,
    private ReportLedBankruptcyCase: LedBankruptcyCaseMetadata,
    private ReportDopaMoiPersons: DopaMoiPersonsMetadata,
    private ReportDopaMoiPor4: DopaMoiPor4Metadata,
    private ReportDocRegseize: DocRegseizeMetadata,
    private ReportCifsMissingPerson: CifsMissingPersonMetadata,
    private ReportNhsoMoiHealthInsuranceRights: NhsoMoiHealthInsuranceRightsMetadata,
    private ReportMoiDsdWorkforceDevelopments: DsdMoiWorkforceDevelopmentsMetadata,
    private ReportDolLandAndCondominiumTitles: DolLandAndCondominiumTitlesMetadata,
    private ReportDopaMoiAliens: DopaMoiAliensMetadata,
    private ReportJfoJfoCase: JfoJfoCaseMetadata,
    private ReportDopaMoiDeathCertificates: DopaMoiDeathCertificatesMetadata,
    private ReportAgothChargeVictim: AgothChargeVictimMetadata,
    private ReportDsiWarrant: DsiWarrantMetadata,
    private ReportCifsCifsCorpse: CifsCorpseMetadata,
    private ReportRlpdCrimeDefendantCompensation: RlpdCrimeDefendantCompensationMetadata,
    private ReportDltCarLicense: DltCarLicenseMetadata,
    private ReportSsoEmployeeEmployment: SsoEmployeeEmploymentMetaData,
    private ReportSsoEmployment: SsoEmploymentMetaData,
    private ReportRtpCriminal: RtpCriminalMetadata,
    private ReportNaccCorruptionaccuseds: NaccMoiCorruptionAccusedsMetadata,
    private ReportMsdhsMoiNewBornBabies: MsdhsMoiNewBornBabiesMetadata,
    private ReportMofRegistrant: MofRegistrantMetadata,
    private ReportMoacMoiFisheriesIllegal: MoacMoiFisheriesIllegalMetadata,
    private ReportDltcarLicense: DltCarLicenseMetadata,
    private ReportJfoJfoCase64: JfoJfoCase64Metadata,
    private ReportRtpTravelInformation: RtpTravelInformationMetadata,
    private ReportRtpTrafficCase: RtpTrafficCaseMetadata,
    private ReportRtpCriminalCase: RtpCriminalCaseMetadata,
    private ReportRtpArrestWarrant: RtpArrestWarrantMetadata,
    private ReportRtpCriminalRecord: RtpCriminalRecordMetadata,
    private ReportRtpWarrantOfArrest: RtpWarrantOfArrestMetadata,
    private ReportDjopJuvenileOffender65: DjopJuvenileOffender65Metadata,
    private ReportDocPrisonerBankrupt: DocPrisonerBankruptMetadata,
    private ReportDopProbationerNarcotics: DopProbationerNarcoticsMetadata,

  ) {
    this.routeparams.params.subscribe(
      params => this.reportname(params['reportname'])
    );
    // this.reportname('report2');
    this.routeparams.params.subscribe(
      params => this.dataSearch = new Dxc_Model_SearchFillter(
        params['citizenCardNumber'],
        params['firstName'],
        params['lastName'], '',
        params['prisoner'],
        params['casename'],
        params['dataSetId'])
    );
    this.routeparams.params.subscribe(
      params => this.setSearchId(params['searchId'])
    );
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.getSearchData();
  }
  ngOnInit() {
    this.theme = new ThemeLight;
    this.theme.loadScripts();
    this.prisonerShow = false;
    this.juvenileOffenderShow = false;
    this.probationerShow = false;
    this.requestorsShow = false;
    this.moidopaaddressesShow = false;
    this.columnvalue = '12';
    this.columnShow = false;

    this.citizenShow = false;
    this.firstName = '';
    this.lastName = '';
    this.dateOfBirth = '';
    this.nationality = '';
    this.religion = '';
    this.homeNumber = '';
    this.homeMoo = '';
    this.homeTrock = '';
    this.homeSoy = '';
    this.homeRoad = '';
    this.homeTumbon = '';
    this.homeAmphur = '';
    this.homeProvince = '';
    this.homeAddress = '';
    this.judgement = '';
    this.allegationDoc = [];
    this.sentenceDate = '';
    this.prisonName = '';
    this.releaseDate = '';

    this.listLefts = [];
    this.listAlgations = [];
    this.listNormals = [];
    this.listNormalPersons = [];

    // this.getSearchData();
    if (this.report_name === 'รายงาน Single Report') {
      this.getSearchData();
    } else if (this.report_name === 'กรมคุมประพฤติ') {
      this.getSpecializeDop();
    } else if (this.report_name === 'กรมพินิจและคุ้มครองเด็กและเยาวชน') {
      this.getSpecializeDjop();
    } else if (this.report_name === 'กรมราชทัณฑ์') {
      this.getSpecializeDoc();
    } else {
      this.router.navigate(['/']);
    }
    this.countNormalDb = localStorage.getItem('countNormalDb')
    this.countAlgationsDb = localStorage.getItem('countAlgationsDb')
    this.outputCitizencardNumber = this.dataSearch.citizenCardNumber;
  }
  getSearchData() {
    const source = Object.keys(environment.qm.sub[0]);
    for (const entry of source) {
      const sub = Object.keys(environment.qm.sub[0][entry].sub[0]);
      for (const entry_sub of sub) {
        const db = environment.qm.sub[0][entry].sub[0][entry_sub].db;
        const report = environment.qm.sub[0][entry].sub[0][entry_sub].report;
        const local_db = localStorage.getItem(db);
        const local_db_key = Object.entries(localStorage);
        for (const key of local_db_key) {
          if (db === key[0] && local_db === 'true') {
            try {
              this[report].getSearchData();
              this.listLefts.push(this[report].$listLefts);
              this.listAlgations.push(this[report].$listAlgations);
              this.listNormals.push(this[report].$listNormal);
              this.listNormalPersons.push(this[report].$listNormalPersons);
            } catch (error) {
              console.log(error + ' ' + report + 'กรุณาติดต่อผู้พัฒนา');
            }
          }
        }
      }
    }
  }
  onBackPage() {
    this.router.navigate(['dxcui0014/dxcui0014/']);
  }
  pdfPreview() {
    if (this.report_name === 'รายงาน Single Report') {
      this.reportclick = `/dxcui0014/dxcui0018/report1`;
    } else if (this.report_name === 'รายงานสนับสนุนการแสวงหาข้อเท็จจริงกรมคุมประพฤติ') {
      this.reportclick = `/dxcui0014/dxcui0018/report2`;
    } else if (this.report_name === 'รายงานสนับสนุนการสืบเสาะ ค.ป.๐๔.๑ กรมพินิจฯ') {
      this.reportclick = `/dxcui0014/dxcui0018/report3`;
    } else if (this.report_name === 'รายงานประวัติที่อยู่บุคคล') {
      this.reportclick = `/dxcui0014/dxcui0018/report4`;
    } else {
      this.router.navigate(['/']);
    }
  }
  ExportWord() {
    console.log('export')
    let jsonWord: ExportWord;
    let citizenfirstName;
    let citizenlastName;
    let citizenCardNumber;
    let citizendateOfBirth;
    let citizenage;
    let citizennationality;
    let citizenreligion;
    let citizenfatherFullName;
    let citizenmotherFullName;
    let citizenhomeAddress;
    if (localStorage.getItem('citizenResults') === null) {
      citizenfirstName = 'ไม่พบข้อมูลชื่อ';
      citizenlastName = 'ไม่พบข้อมูลนามสกุล';
      citizenCardNumber = 'ไม่พบข้อมูลเลขบัตรประชาชน';
      citizendateOfBirth = 'ไม่พบข้อมูลวันเดือนปีเกิด';
      citizenage = 'ไม่พบข้อมูลอายุ';
      citizennationality = 'ไม่พบข้อมูลสัญชาติ';
      citizenreligion = 'ไม่พบข้อมูลศาสนา';
      citizenfatherFullName = 'ไม่พบข้อมูลชื่อ-สกุลบิดา';
      citizenmotherFullName = 'ไม่พบข้อมูลชื่อ-สกุลมารดา';
      citizenhomeAddress = 'ไม่พบข้อมูลที่อยู่';
    } else {
      citizenfirstName = this.citizenResults[0].firstName,
        citizenlastName = this.citizenResults[0].lastName,
        citizenCardNumber = this.citizenResults[0].citizenCardNumber,
        citizendateOfBirth = this.citizenResults[0].dateOfBirth,
        citizenage = this.citizenResults[0].age,
        citizennationality = this.citizenResults[0].nationality;
      citizenreligion = this.citizenResults[0].religion,
        citizenfatherFullName = this.citizenResults[0].fatherFullName,
        citizenmotherFullName = this.citizenResults[0].motherFullName,
        citizenhomeAddress = this.citizenResults[0].homeAddress;
    }
    let juvenileOffenderallegation: string[] = [];
    if (localStorage.getItem('juvenileOffenderResults') === null) {
      juvenileOffenderallegation = [];
    } else {
      for (let i = 0; i < this.juvenileOffenderResults.length; i++) {
        if (this.juvenileOffenderResults[i].allegation !== null) {
          juvenileOffenderallegation.push('คดีที่' +
            this.util.thaiNumber(i + 1) + '.' +
            this.juvenileOffenderResults[i].allegation + ''); // Doc
        }
      }
    }
    let nacorticOffendernarcoticName;
    if (localStorage.getItem('narcoticOffenderResults') === null) {
      nacorticOffendernarcoticName = 'ไม่พบข้อมูลประวัติการเกี่ยวข้องกับยา/สารเสพติด';
    } else {
      nacorticOffendernarcoticName = this.narcoticOffenderResults[0].narcoticName;
    }
    jsonWord = {
      citizenfirstName: citizenfirstName,
      citizenlastName: citizenlastName,
      citizenCardNumber: citizenCardNumber,
      citizendateOfBirth: citizendateOfBirth,
      citizenage: citizenage,
      citizennationality: citizennationality,
      citizenreligion: citizenreligion,
      citizenfatherFullName: citizenfatherFullName,
      citizenmotherFullName: citizenmotherFullName,
      citizenhomeAddress: citizenhomeAddress,
      juvenileOffenderallegation: juvenileOffenderallegation.toString(),
      nacorticOffendernarcoticName: nacorticOffendernarcoticName,
    };
    console.log(JSON.stringify(jsonWord));
    this.exportWord.postJson(JSON.stringify(jsonWord)).subscribe(
      response => { // download file
        const blob = new Blob([response], { type: 'application/vnd.ms-word;charset=utf-8' });
        const filename = 'รายงานข้อเท็จจริงเกี่ยวกับเด็ก_เยาวชน.docx';
        saveAs(blob, filename);
        // console.log(blob, filename);
        // var url = window.URL.createObjectURL(blob);
        // window.open(url);
      },
      error => {
        console.error(`Error: ${error.message}`);
      }
    );
  }
  downloadFile(data: any) {
    console.log(data);
    const blob = new Blob([data], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    window.open(url);
  }
  searchByCitizenCardNumber(citizenCardNumber: string) {
    this.dataSearch.citizenCardNumber = citizenCardNumber;
    if (this.dataSearch.citizenCardNumber === null) {
      this.dataSearch.citizenCardNumber = '0';
    } else if (this.dataSearch.firstName && this.dataSearch.lastname) {
      this.dataSearch.firstName = '0';
      this.dataSearch.lastname = '0';
    }
    if (this.report_name === 'รายงาน Single Report') {
      this.router.navigate(['dxcui0014/dxcui0018/' +
        this.report_name,
      this.dataSearch.citizenCardNumber,
      this.dataSearch.firstName,
      this.dataSearch.lastname, '', '']);
    } else if (this.report_name === 'รายงานสนับสนุนการแสวงหาข้อเท็จจริงกรมคุมประพฤติ') {
      this.router.navigate(['dxcui0014/dxcui0018/',
        this.report_name,
        this.dataSearch.citizenCardNumber,
        this.dataSearch.firstName,
        this.dataSearch.lastname, '', '']);
    } else if (this.report_name === 'รายงานสนับสนุนการสืบเสาะ ค.ป.๐๔.๑ กรมพินิจฯ') {
      this.router.navigate(['dxcui0014/dxcui0018/' +
        this.report_name,
      this.dataSearch.citizenCardNumber,
      this.dataSearch.firstName,
      this.dataSearch.lastname, '', '']);
    } else if (this.report_name === 'รายงานประวัติที่อยู่บุคคล') {
      this.router.navigate(['dxcui0014/dxcui0018/' +
        this.report_name,
      this.dataSearch.citizenCardNumber,
      this.dataSearch.firstName,
      this.dataSearch.lastname, '', '']);
    } else {
      this.router.navigate(['/']);
    }
  }
  open(content, citizenCardNumber: string) {
    if (this.report_name === 'รายงานสนับสนุนการแสวงหาข้อเท็จจริงกรมคุมประพฤติ') {
      this.dataSearch.citizenCardNumber = citizenCardNumber;
      this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
        this.searchByCitizenCardNumber(result);
      }, (reason) => {
        // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    } else if (this.report_name === 'รายงานสนับสนุนการสืบเสาะ ค.ป.๐๔.๑ กรมพินิจฯ') {
      this.dataSearch.citizenCardNumber = citizenCardNumber;
      this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
        this.searchByCitizenCardNumber(result);
      }, (reason) => {
        // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    } else if (this.report_name === 'รายงานประวัติที่อยู่บุคคล') {
      this.dataSearch.citizenCardNumber = citizenCardNumber;
      this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
        this.searchByCitizenCardNumber(result);
      }, (reason) => {
        // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }
  }
  getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  imageEncode(imageCode) {
    const hex = imageCode;
    const bytes = [];
    let str = '';
    for (let i = 0; i < hex.length - 1; i += 2) {
      bytes.push(parseInt(hex.substr(i, 2), 16));
    }
    str = String.fromCharCode.apply(String, bytes);
    const image = 'data:image/png;base64,' + btoa(str);
    this.imageSrc = image;
  }
  selectRow(Item: any, title: string, departmentImg: string) {
    this.title = title;
    if (title === 'ผู้ต้องขัง') {
      // filter DateOfBirth และ filter Sex
      const docprisoner = new Dxc_Model_Doc_Prisoner(Item);
      const dataSet = docprisoner.getData();
      localStorage.setItem('docprisoner', JSON.stringify(dataSet));
      this.selectItem = JSON.parse(localStorage.getItem('docprisoner'));
      // แสดง ข้อมูลเบื้องต้น ผู้ต้องขัง
      this.person = {
        citizenCardNumber: this.selectItem.citizenCardNumber,
        fullName: this.selectItem.firstName + ' ' + this.selectItem.lastName,
        sex: this.selectItem.sex,
        dateOfBirth: this.selectItem.dateOfBirth
      };
      this.departmentImg = departmentImg;
      console.log(this.selectItem);
    } else if (title === 'เด็กหรือเยาวชนผู้กระทำผิด') {
      // filter DateOfBirth และ filter Sex
      const djopjuvenileoffender = new Dxc_Model_Djop_JuvenileOffender(Item);
      const dataSet = djopjuvenileoffender.getData();
      localStorage.setItem('djopjuvenileoffender', JSON.stringify(dataSet));
      this.selectItem = JSON.parse(localStorage.getItem('djopjuvenileoffender'));
      // แสดง ข้อมูลเบื้องต้น เด็กหรือเยาวชนผู้กระทำผิด
      this.person = {
        citizenCardNumber: this.selectItem.citizenCardNumber,
        fullName: this.selectItem.firstName + ' ' + this.selectItem.lastName,
        sex: this.selectItem.sex,
        dateOfBirth: this.selectItem.birthDate
      };
      this.departmentImg = departmentImg;
    } else if (title === 'ผู้ถูกคุมประพฤติ') {
      const dopprobationer = new Dxc_Model_Dop_Probationer(Item);
      const dataSet = dopprobationer.getData();
      localStorage.setItem('dopprobationer', JSON.stringify(dataSet));
      this.selectItem = JSON.parse(localStorage.getItem('dopprobationer'));
      // แสดง ข้อมูลเบื้องต้น ผู้ถูกคุมประพฤติ
      this.person = {
        citizenCardNumber: this.selectItem.citizenCardNumber,
        fullName: this.selectItem.firstName + ' ' + this.selectItem.lastName,
        sex: this.selectItem.sex,
        dateOfBirth: this.selectItem.birthDate
      };
      this.departmentImg = departmentImg;
    } else if (title === 'ทะเบียนราษฎร') {
      const dopacitizen = new Dxc_Model_Dopa_Citizen(Item);
      const dataSet = dopacitizen.getData();
      localStorage.setItem('dopacitizen', JSON.stringify(dataSet));
      this.selectItem = JSON.parse(localStorage.getItem('dopacitizen'));
      // แสดง ข้อมูลเบื้องต้น ทะเบียนราษฎร
      this.person = {
        citizenCardNumber: this.selectItem.citizenCardNumber,
        fullName: this.selectItem.firstName + ' ' + this.selectItem.lastName,
        sex: this.selectItem.sex,
        dateOfBirth: this.selectItem.dateOfBirth
      };
      this.departmentImg = departmentImg;
    } else if (title === 'ประวัติคดียาเสพติด') {
      const oncbnarcoticoffenders = new Dxc_Model_Oncb_NarcoticOffender(Item);
      const dataSet = oncbnarcoticoffenders.getData();
      localStorage.setItem('oncbnarcoticoffenders', JSON.stringify(dataSet));
      this.selectItem = JSON.parse(localStorage.getItem('oncbnarcoticoffenders'));
      // แสดง ข้อมูลเบื้องต้น ทะเบียนราษฎร
      this.person = {
        citizenCardNumber: this.selectItem.citizenCardNumber,
        fullName: this.selectItem.firstName + ' ' + this.selectItem.lastName,
        sex: '',
        dateOfBirth: ''
      };
      this.departmentImg = departmentImg;
    } else if (title === 'ผู้ร้องทุกข์') {
      const rlpdrequestors = new Dxc_Model_Rlpd_Requestors(Item);
      const dataSet = rlpdrequestors.getData();
      localStorage.setItem('rlpdrequestors', JSON.stringify(dataSet));
      this.selectItem = JSON.parse(localStorage.getItem('rlpdrequestors'));
      // แสดง ข้อมูลเบื้องต้น ผู้ร้องทุกข์ ในส่วนของหน้า Preview Local
      this.person = {
        citizenCardNumber: this.selectItem.personNationalIdentificationId,
        fullName: this.selectItem.personGivenName + ' ' + this.selectItem.personSurName,
        sex: this.selectItem.personSex,
        dateOfBirth: this.selectItem.personBirthDate
      };
      this.departmentImg = departmentImg;
    } else if (title === 'ฐานข้อมูลทะเบียนบ้าน (บุคคลทุกประเภท) (Moi Linkage)') {
      const moidopaaddresses = new Dxc_Model_Dopa_Moi_Addresses(Item);
      const dataSet = moidopaaddresses.getData();
      localStorage.setItem('MoiDopaAddresses', JSON.stringify(dataSet));
      this.selectItem = JSON.parse(localStorage.getItem('MoiDopaAddresses'));
      this.person = {
        citizenCardNumber: this.selectItem.citizenCardNumber,
        fullName: '',
        sex: '',
        dateOfBirth: null
      };
      this.departmentImg = departmentImg;
    }
    if (title === 'ผู้ต้องขัง') {
      this.selectData = JSON.parse(localStorage.getItem('docprisoner'));
      this.htmlReport = this.ReportDocPrisoner.getHtml(this.selectItem, title);
      this.viewhtmlReport = this.ReportDocPrisoner.viewgetHtml(this.selectItem, title);
    } else if (title === 'เด็กหรือเยาวชนผู้กระทำผิด') {
      this.selectData = JSON.parse(localStorage.getItem('djopjuvenileoffender'));
      this.htmlReport = this.ReportDjopJuvenileOffender.getHtml(this.selectItem, title);
      this.viewhtmlReport = this.ReportDjopJuvenileOffender.viewgetHtml(this.selectItem, title);
    } else if (title === 'ผู้ถูกคุมประพฤติ') {
      this.selectData = JSON.parse(localStorage.getItem('dopprobationer'));
      this.htmlReport = this.ReportDopProbationer.getHtml(this.selectItem, title);
      this.viewhtmlReport = this.ReportDopProbationer.viewgetHtml(this.selectItem, title);
    } else if (title === 'ทะเบียนราษฎร') {
      this.selectData = JSON.parse(localStorage.getItem('dopacitizen'));
      this.htmlReport = this.ReportDopaCitizen.getHtml(this.selectItem, title);
      this.viewhtmlReport = this.ReportDopaCitizen.viewgetHtml(this.selectItem, title);
    } else if (title === 'ประวัติคดียาเสพติด') {
      this.selectData = JSON.parse(localStorage.getItem('oncbnarcoticoffenders'));
      this.htmlReport = this.ReportOncbNarcoticOffender.getHtml(this.selectItem, title);
      this.viewhtmlReport = this.ReportOncbNarcoticOffender.viewgetHtml(this.selectItem, title);
    } else if (title === 'ผู้ร้องทุกข์') {
      this.selectData = JSON.parse(localStorage.getItem('rlpdrequestors'));
      this.htmlReport = this.ReportRlpdRequestors.getHtml(this.selectItem, title);
      this.viewhtmlReport = this.ReportRlpdRequestors.viewgetHtml(this.selectItem, title);
    } else if (title === 'ฐานข้อมูลทะเบียนบ้าน (บุคคลทุกประเภท) (Moi Linkage)') {
      this.selectData = JSON.parse(localStorage.getItem('MoiDopaAddresses'));
      this.htmlReport = this.ReportDopaMoiAddresses.getHtml(this.selectItem, title);
      this.viewhtmlReport = this.ReportDopaMoiAddresses.viewgetHtml(this.selectItem, title);
    }
  }
  pdfPreviewlocal() {
    if (this.title === 'ผู้ต้องขัง') {
      this.reportName = '/ReportDocPrisoner';
      localStorage.setItem('docprisoner', JSON.stringify(this.selectItem));
      console.log(this.reportName);
    } else if (this.title === 'ผู้กระทำผิดกฏหมาย') {
      this.reportName = '/ReportRtpCriminal';
      localStorage.setItem('rtpcriminal', JSON.stringify(this.selectItem));
      console.log(this.selectItem);
    } else if (this.title === 'เด็กหรือเยาวชนผู้กระทำผิด') {
      this.reportName = '/ReportDjopJuvenileOffender';
      localStorage.setItem('djopjuvenileoffender', JSON.stringify(this.selectItem));
      console.log(this.selectItem);
    } else if (this.title === 'ผู้ถูกคุมประพฤติ') {
      this.reportName = '/ReportDopProbationer';
      localStorage.setItem('dopprobationer', JSON.stringify(this.selectItem));
      console.log(this.selectItem);
    } else if (this.title === 'ทะเบียนราษฎร') {
      this.reportName = '/ReportDopaCitizen';
      localStorage.setItem('dopacitizen', JSON.stringify(this.selectItem));
      console.log(this.selectItem);
    } else if (this.title === 'ประวัติคดียาเสพติด') {
      this.reportName = '/ReportOncbNarcoticOffender';
      localStorage.setItem('oncbnarcoticoffenders', JSON.stringify(this.selectItem));
      console.log(this.selectItem);
    } else if (this.title === 'ผู้ร้องทุกข์') {
      this.reportName = '/ReportRlpdRequestors';
      localStorage.setItem('rlpdrequestors', JSON.stringify(this.selectItem));
      console.log(this.selectItem);
    } else if (this.title === 'ใบอนุญาติขับขี่') {
      this.reportName = '/ReportDltDriverLicense';
      localStorage.setItem('dltdriverlicense', JSON.stringify(this.selectItem));
      console.log(this.selectItem);
    } else if (this.title === 'ฐานข้อมูลทะเบียนบ้าน (บุคคลทุกประเภท) (Moi Linkage)') {
      this.reportName = '/ReportMoiDopaAddresses';
      localStorage.setItem('MoiDopaAddresses', JSON.stringify(this.selectItem));
      console.log(this.selectItem);
    } else if (this.title === 'ข้อมูลคดีอาญา') {
      this.reportName = '/ReportRtpCriminalCase';
      localStorage.setItem('rtpcriminalcase', JSON.stringify(this.selectItem));
    } else if (this.title === 'ฐานข้อมูลหมายจับ') {
      this.reportName = '/ReportRtpArrestWarrant';
      localStorage.setItem('rtparrestwarrant', JSON.stringify(this.selectItem));
      console.log(this.selectItem);
    }
    
  }

  reciveMessegeDataPrisoner(event) {
    this.outputAlgationsPrisoner = event.content;
    this.outputCitizencardNumber = undefined;
    this.outputAlgationsProbationer = undefined;
    this.outputAlgationsRegseize = undefined;
    this.outputAlgationsRemandee = undefined;
    this.outputAlgationsNarcoticOffender = undefined;
    this.outputAlgationsReleasedOffender = undefined;
    this.outputAlgationsCriminal = undefined;
    this.outputAlgationsJuvenileOffender = undefined;
    this.outputNormalMissingPersonCase = undefined;
    this.outputNormalCrimeVictimCompensation = undefined;
    this.outputNormalRequestors = undefined;
    this.outputNormalChargeVictim = undefined;
    this.outputNormalCorpse = undefined;
    this.outputNormalBankruptcyCase = undefined;
    this.outputAllegationChargeSubject = undefined;
    this.outputNormalRegistrant = undefined;
    this.outputNormalJfoCase64 = undefined;
    this.outputAllgationsCriminalRecord = undefined;
    this.outputAlgationsJuvenileOffender65 = undefined;
  }
  reciveMessegeDataProbationer(event) {
    this.outputAlgationsProbationer = event.content;
    this.outputCitizencardNumber = undefined;
    this.outputAlgationsPrisoner = undefined;
    this.outputAlgationsRegseize = undefined;
    this.outputAlgationsRemandee = undefined;
    this.outputAlgationsNarcoticOffender = undefined;
    this.outputAlgationsReleasedOffender = undefined;
    this.outputAlgationsCriminal = undefined;
    this.outputAlgationsJuvenileOffender = undefined;
    this.outputNormalMissingPersonCase = undefined;
    this.outputNormalCrimeVictimCompensation = undefined;
    this.outputNormalRequestors = undefined;
    this.outputNormalChargeVictim = undefined;
    this.outputNormalCorpse = undefined;
    this.outputNormalBankruptcyCase = undefined;
    this.outputAllegationChargeSubject = undefined;
    this.outputNormalRegistrant = undefined;
    this.outputNormalJfoCase64 = undefined;
    this.outputAllgationsCriminalRecord = undefined;
    this.outputAlgationsJuvenileOffender65 = undefined;
  }
  reciveMessegeDataRegseize(event) {
    this.outputAlgationsRegseize = event.content;
    this.outputCitizencardNumber = undefined;
    this.outputAlgationsPrisoner = undefined;
    this.outputAlgationsProbationer = undefined;
    this.outputAlgationsRemandee = undefined;
    this.outputAlgationsNarcoticOffender = undefined;
    this.outputAlgationsReleasedOffender = undefined;
    this.outputAlgationsCriminal = undefined;
    this.outputAlgationsJuvenileOffender = undefined;
    this.outputNormalMissingPersonCase = undefined;
    this.outputNormalCrimeVictimCompensation = undefined;
    this.outputNormalRequestors = undefined;
    this.outputNormalChargeVictim = undefined;
    this.outputNormalCorpse = undefined;
    this.outputNormalBankruptcyCase = undefined;
    this.outputAllegationChargeSubject = undefined;
    this.outputNormalRegistrant = undefined;
    this.outputNormalJfoCase64 = undefined;
    this.outputAllgationsCriminalRecord = undefined;
    this.outputAlgationsJuvenileOffender65 = undefined;
  }
  reciveMessegeDataRemandee(event) {
    this.outputAlgationsRemandee = event.content;
    this.outputCitizencardNumber = undefined;
    this.outputAlgationsPrisoner = undefined;
    this.outputAlgationsProbationer = undefined;
    this.outputAlgationsRegseize = undefined;
    this.outputAlgationsNarcoticOffender = undefined;
    this.outputAlgationsReleasedOffender = undefined;
    this.outputAlgationsCriminal = undefined;
    this.outputAlgationsJuvenileOffender = undefined;
    this.outputNormalMissingPersonCase = undefined;
    this.outputNormalCrimeVictimCompensation = undefined;
    this.outputNormalRequestors = undefined;
    this.outputNormalChargeVictim = undefined;
    this.outputNormalCorpse = undefined;
    this.outputNormalBankruptcyCase = undefined;
    this.outputAllegationChargeSubject = undefined;
    this.outputNormalRegistrant = undefined;
    this.outputNormalJfoCase64 = undefined;
    this.outputAllgationsCriminalRecord = undefined;
    this.outputAlgationsJuvenileOffender65 = undefined;
  }
  reciveMessegeDataNarcoticOffender(event) {
    this.outputAlgationsNarcoticOffender = event.content;
    this.outputCitizencardNumber = undefined;
    this.outputAlgationsPrisoner = undefined;
    this.outputAlgationsProbationer = undefined;
    this.outputAlgationsRegseize = undefined;
    this.outputAlgationsRemandee = undefined;
    this.outputAlgationsReleasedOffender = undefined;
    this.outputAlgationsCriminal = undefined;
    this.outputAlgationsJuvenileOffender = undefined;
    this.outputNormalMissingPersonCase = undefined;
    this.outputNormalCrimeVictimCompensation = undefined;
    this.outputNormalRequestors = undefined;
    this.outputNormalChargeVictim = undefined;
    this.outputNormalCorpse = undefined;
    this.outputNormalBankruptcyCase = undefined;
    this.outputAllegationChargeSubject = undefined;
    this.outputNormalRegistrant = undefined;
    this.outputNormalJfoCase64 = undefined;
    this.outputAllgationsCriminalRecord = undefined;
    this.outputAlgationsJuvenileOffender65 = undefined;
  }
  reciveMessegeDataReleasedOffender(event) {
    this.outputAlgationsReleasedOffender = event.content;
    this.outputCitizencardNumber = undefined;
    this.outputAlgationsPrisoner = undefined;
    this.outputAlgationsProbationer = undefined;
    this.outputAlgationsRegseize = undefined;
    this.outputAlgationsRemandee = undefined;
    this.outputAlgationsNarcoticOffender = undefined;
    this.outputAlgationsCriminal = undefined;
    this.outputAlgationsJuvenileOffender = undefined;
    this.outputNormalMissingPersonCase = undefined;
    this.outputNormalCrimeVictimCompensation = undefined;
    this.outputNormalRequestors = undefined;
    this.outputNormalChargeVictim = undefined;
    this.outputNormalCorpse = undefined;
    this.outputNormalBankruptcyCase = undefined;
    this.outputAllegationChargeSubject = undefined;
    this.outputNormalRegistrant = undefined;
    this.outputNormalJfoCase64 = undefined;
    this.outputAllgationsCriminalRecord = undefined;
    this.outputAlgationsJuvenileOffender65 = undefined;
  }
  reciveMessegeDataCriminal(event) {
    this.outputAlgationsCriminal = event.content;
    this.outputCitizencardNumber = undefined;
    this.outputAlgationsPrisoner = undefined;
    this.outputAlgationsProbationer = undefined;
    this.outputAlgationsRegseize = undefined;
    this.outputAlgationsRemandee = undefined;
    this.outputAlgationsNarcoticOffender = undefined;
    this.outputAlgationsReleasedOffender = undefined;
    this.outputAlgationsJuvenileOffender = undefined;
    this.outputNormalMissingPersonCase = undefined;
    this.outputNormalCrimeVictimCompensation = undefined;
    this.outputNormalRequestors = undefined;
    this.outputNormalChargeVictim = undefined;
    this.outputNormalCorpse = undefined;
    this.outputNormalBankruptcyCase = undefined;
    this.outputAllegationChargeSubject = undefined;
    this.outputNormalRegistrant = undefined;
    this.outputNormalJfoCase64 = undefined;
    this.outputAllgationsCriminalRecord = undefined;
    this.outputAlgationsJuvenileOffender65 = undefined;
  }
  reciveMessegeDataJuvenileOffender(event) {
    this.outputAlgationsJuvenileOffender = event.content;
    this.outputCitizencardNumber = undefined;
    this.outputAlgationsPrisoner = undefined;
    this.outputAlgationsProbationer = undefined;
    this.outputAlgationsRegseize = undefined;
    this.outputAlgationsRemandee = undefined;
    this.outputAlgationsNarcoticOffender = undefined;
    this.outputAlgationsReleasedOffender = undefined;
    this.outputAlgationsCriminal = undefined;
    this.outputNormalMissingPersonCase = undefined;
    this.outputNormalCrimeVictimCompensation = undefined;
    this.outputNormalRequestors = undefined;
    this.outputNormalChargeVictim = undefined;
    this.outputNormalCorpse = undefined;
    this.outputNormalBankruptcyCase = undefined;
    this.outputAllegationChargeSubject = undefined;
    this.outputNormalRegistrant = undefined;
    this.outputNormalJfoCase64 = undefined;
    this.outputAllgationsCriminalRecord = undefined;
    this.outputAlgationsJuvenileOffender65 = undefined;
  }
  reciveMessegeDataMissingPersonCase(event) {
    this.outputNormalMissingPersonCase = event.content;
    this.outputCitizencardNumber = undefined;
    this.outputAlgationsPrisoner = undefined;
    this.outputAlgationsProbationer = undefined;
    this.outputAlgationsRegseize = undefined;
    this.outputAlgationsRemandee = undefined;
    this.outputAlgationsNarcoticOffender = undefined;
    this.outputAlgationsReleasedOffender = undefined;
    this.outputAlgationsCriminal = undefined;
    this.outputAlgationsJuvenileOffender = undefined;
    this.outputNormalCrimeVictimCompensation = undefined;
    this.outputNormalRequestors = undefined;
    this.outputNormalChargeVictim = undefined;
    this.outputNormalCorpse = undefined;
    this.outputNormalBankruptcyCase = undefined;
    this.outputAllegationChargeSubject = undefined;
    this.outputNormalRegistrant = undefined;
    this.outputNormalJfoCase64 = undefined;
    this.outputAllgationsCriminalRecord = undefined;
    this.outputAlgationsJuvenileOffender65 = undefined;
  }
  reciveMessegeDataCrimeVictimCompensation(event) {
    this.outputNormalCrimeVictimCompensation = event.content;
    this.outputCitizencardNumber = undefined;
    this.outputAlgationsPrisoner = undefined;
    this.outputAlgationsProbationer = undefined;
    this.outputAlgationsRegseize = undefined;
    this.outputAlgationsRemandee = undefined;
    this.outputAlgationsNarcoticOffender = undefined;
    this.outputAlgationsReleasedOffender = undefined;
    this.outputAlgationsCriminal = undefined;
    this.outputAlgationsJuvenileOffender = undefined;
    this.outputNormalMissingPersonCase = undefined;
    this.outputNormalRequestors = undefined;
    this.outputNormalChargeVictim = undefined;
    this.outputNormalCorpse = undefined;
    this.outputNormalBankruptcyCase = undefined;
    this.outputAllegationChargeSubject = undefined;
    this.outputNormalRegistrant = undefined;
    this.outputNormalJfoCase64 = undefined;
    this.outputAllgationsCriminalRecord = undefined;
    this.outputAlgationsJuvenileOffender65 = undefined;
  }
  reciveMessegeDataRequestors(event) {
    this.outputNormalRequestors = event.content;
    this.outputCitizencardNumber = undefined;
    this.outputAlgationsPrisoner = undefined;
    this.outputAlgationsProbationer = undefined;
    this.outputAlgationsRegseize = undefined;
    this.outputAlgationsRemandee = undefined;
    this.outputAlgationsNarcoticOffender = undefined;
    this.outputAlgationsReleasedOffender = undefined;
    this.outputAlgationsCriminal = undefined;
    this.outputAlgationsJuvenileOffender = undefined;
    this.outputNormalMissingPersonCase = undefined;
    this.outputNormalCrimeVictimCompensation = undefined;
    this.outputNormalChargeVictim = undefined;
    this.outputNormalCorpse = undefined;
    this.outputNormalBankruptcyCase = undefined;
    this.outputAllegationChargeSubject = undefined;
    this.outputNormalRegistrant = undefined;
    this.outputNormalJfoCase64 = undefined;
    this.outputAllgationsCriminalRecord = undefined;
    this.outputAlgationsJuvenileOffender65 = undefined;
  }
  reciveMessegeDataChargeVictim(event) {
    this.outputNormalChargeVictim = event.content;
    this.outputCitizencardNumber = undefined;
    this.outputAlgationsPrisoner = undefined;
    this.outputAlgationsProbationer = undefined;
    this.outputAlgationsRegseize = undefined;
    this.outputAlgationsRemandee = undefined;
    this.outputAlgationsNarcoticOffender = undefined;
    this.outputAlgationsReleasedOffender = undefined;
    this.outputAlgationsCriminal = undefined;
    this.outputAlgationsJuvenileOffender = undefined;
    this.outputNormalMissingPersonCase = undefined;
    this.outputNormalCrimeVictimCompensation = undefined;
    this.outputNormalRequestors = undefined;
    this.outputNormalCorpse = undefined;
    this.outputNormalBankruptcyCase = undefined;
    this.outputAllegationChargeSubject = undefined;
    this.outputNormalRegistrant = undefined;
    this.outputNormalJfoCase64 = undefined;
    this.outputAllgationsCriminalRecord = undefined;
    this.outputAlgationsJuvenileOffender65 = undefined;
  }
  reciveMessegeDataCorpse(event) {
    this.outputNormalCorpse = event.content;
    this.outputCitizencardNumber = undefined;
    this.outputAlgationsPrisoner = undefined;
    this.outputAlgationsProbationer = undefined;
    this.outputAlgationsRegseize = undefined;
    this.outputAlgationsRemandee = undefined;
    this.outputAlgationsNarcoticOffender = undefined;
    this.outputAlgationsReleasedOffender = undefined;
    this.outputAlgationsCriminal = undefined;
    this.outputAlgationsJuvenileOffender = undefined;
    this.outputNormalMissingPersonCase = undefined;
    this.outputNormalCrimeVictimCompensation = undefined;
    this.outputNormalRequestors = undefined;
    this.outputNormalChargeVictim = undefined;
    this.outputNormalBankruptcyCase = undefined;
    this.outputAllegationChargeSubject = undefined;
    this.outputNormalRegistrant = undefined;
    this.outputNormalJfoCase64 = undefined;
    this.outputAllgationsCriminalRecord = undefined;
    this.outputAlgationsJuvenileOffender65 = undefined;
  }
  reciveMessegeDataBankruptcyCase(event) {
    this.outputNormalBankruptcyCase = event.content;
    this.outputCitizencardNumber = undefined;
    this.outputAlgationsPrisoner = undefined;
    this.outputAlgationsProbationer = undefined;
    this.outputAlgationsRegseize = undefined;
    this.outputAlgationsRemandee = undefined;
    this.outputAlgationsNarcoticOffender = undefined;
    this.outputAlgationsReleasedOffender = undefined;
    this.outputAlgationsCriminal = undefined;
    this.outputAlgationsJuvenileOffender = undefined;
    this.outputNormalMissingPersonCase = undefined;
    this.outputNormalCrimeVictimCompensation = undefined;
    this.outputNormalRequestors = undefined;
    this.outputNormalChargeVictim = undefined;
    this.outputNormalCorpse = undefined;
    this.outputAllegationChargeSubject = undefined;
    this.outputNormalRegistrant = undefined;
    this.outputNormalJfoCase64 = undefined;
    this.outputAllgationsCriminalRecord = undefined;
    this.outputAlgationsJuvenileOffender65 = undefined;
  }
  reciveMessegeDataChargeSubject(event) {
    this.outputAllegationChargeSubject = event.content;
    this.outputCitizencardNumber = undefined;
    this.outputAlgationsPrisoner = undefined;
    this.outputAlgationsProbationer = undefined;
    this.outputAlgationsRegseize = undefined;
    this.outputAlgationsRemandee = undefined;
    this.outputAlgationsNarcoticOffender = undefined;
    this.outputAlgationsReleasedOffender = undefined;
    this.outputAlgationsCriminal = undefined;
    this.outputAlgationsJuvenileOffender = undefined;
    this.outputNormalMissingPersonCase = undefined;
    this.outputNormalCrimeVictimCompensation = undefined;
    this.outputNormalRequestors = undefined;
    this.outputNormalChargeVictim = undefined;
    this.outputNormalCorpse = undefined;
    this.outputNormalBankruptcyCase = undefined;
    this.outputNormalRegistrant = undefined;
    this.outputNormalJfoCase64 = undefined;
    this.outputAllgationsCriminalRecord = undefined;
    this.outputAlgationsJuvenileOffender65 = undefined;
  }
  reciveMessegeDataRegistrant(event) {
    this.outputNormalRegistrant = event.content;
    this.outputCitizencardNumber = undefined;
    this.outputAlgationsPrisoner = undefined;
    this.outputAlgationsProbationer = undefined;
    this.outputAlgationsRegseize = undefined;
    this.outputAlgationsRemandee = undefined;
    this.outputAlgationsNarcoticOffender = undefined;
    this.outputAlgationsReleasedOffender = undefined;
    this.outputAlgationsCriminal = undefined;
    this.outputAlgationsJuvenileOffender = undefined;
    this.outputNormalMissingPersonCase = undefined;
    this.outputNormalCrimeVictimCompensation = undefined;
    this.outputNormalRequestors = undefined;
    this.outputNormalChargeVictim = undefined;
    this.outputNormalCorpse = undefined;
    this.outputNormalBankruptcyCase = undefined;
    this.outputAllegationChargeSubject = undefined;
    this.outputNormalJfoCase64 = undefined;
    this.outputAllgationsCriminalRecord = undefined;
    this.outputAlgationsJuvenileOffender65 = undefined;
  }
  reciveMessegeDataJfoCase64(event) {
    this.outputNormalJfoCase64 = event.content;
    this.outputCitizencardNumber = undefined;
    this.outputAlgationsPrisoner = undefined;
    this.outputAlgationsProbationer = undefined;
    this.outputAlgationsRegseize = undefined;
    this.outputAlgationsRemandee = undefined;
    this.outputAlgationsNarcoticOffender = undefined;
    this.outputAlgationsReleasedOffender = undefined;
    this.outputAlgationsCriminal = undefined;
    this.outputAlgationsJuvenileOffender = undefined;
    this.outputNormalMissingPersonCase = undefined;
    this.outputNormalCrimeVictimCompensation = undefined;
    this.outputNormalRequestors = undefined;
    this.outputNormalChargeVictim = undefined;
    this.outputNormalCorpse = undefined;
    this.outputNormalBankruptcyCase = undefined;
    this.outputAllegationChargeSubject = undefined;
    this.outputNormalRegistrant = undefined;
    this.outputAllgationsCriminalRecord = undefined;
    this.outputAlgationsJuvenileOffender65 = undefined;
  }
  reciveMessegeDataCriminalRecord(event) {
    this.outputAllgationsCriminalRecord = event.content;
    this.outputCitizencardNumber = undefined;
    this.outputAlgationsPrisoner = undefined;
    this.outputAlgationsProbationer = undefined;
    this.outputAlgationsRegseize = undefined;
    this.outputAlgationsRemandee = undefined;
    this.outputAlgationsNarcoticOffender = undefined;
    this.outputAlgationsReleasedOffender = undefined;
    this.outputAlgationsCriminal = undefined;
    this.outputAlgationsJuvenileOffender = undefined;
    this.outputNormalMissingPersonCase = undefined;
    this.outputNormalCrimeVictimCompensation = undefined;
    this.outputNormalRequestors = undefined;
    this.outputNormalChargeVictim = undefined;
    this.outputNormalCorpse = undefined;
    this.outputNormalBankruptcyCase = undefined;
    this.outputAllegationChargeSubject = undefined;
    this.outputNormalRegistrant = undefined;
    this.outputNormalJfoCase64 = undefined;
    this.outputAlgationsJuvenileOffender65 = undefined;
  }
  reciveMessegeDataRtpArrestWarrant(event) {
    this.outputNormalRtpArrestWarrant = event.content;
    this.outputNormalJfoCase64 = undefined;
    this.outputCitizencardNumber = undefined;
    this.outputAlgationsPrisoner = undefined;
    this.outputAlgationsProbationer = undefined;
    this.outputAlgationsRegseize = undefined;
    this.outputAlgationsRemandee = undefined;
    this.outputAlgationsNarcoticOffender = undefined;
    this.outputAlgationsReleasedOffender = undefined;
    this.outputAlgationsCriminal = undefined;
    this.outputAlgationsJuvenileOffender = undefined;
    this.outputNormalMissingPersonCase = undefined;
    this.outputNormalCrimeVictimCompensation = undefined;
    this.outputNormalRequestors = undefined;
    this.outputNormalChargeVictim = undefined;
    this.outputNormalCorpse = undefined;
    this.outputNormalBankruptcyCase = undefined;
    this.outputAllegationChargeSubject = undefined;
    this.outputNormalRegistrant = undefined;
    this.outputAlgationsJuvenileOffender65 = undefined;

  }

  reciveMessegeDataCriminalCase(event) {
    this.outputAlgationsCriminalCase = event.content;
    this.outputAlgationsCriminal = undefined;
    this.outputCitizencardNumber = undefined;
    this.outputAlgationsPrisoner = undefined;
    this.outputAlgationsProbationer = undefined;
    this.outputAlgationsRegseize = undefined;
    this.outputAlgationsRemandee = undefined;
    this.outputAlgationsNarcoticOffender = undefined;
    this.outputAlgationsReleasedOffender = undefined;
    this.outputAlgationsJuvenileOffender = undefined;
    this.outputNormalMissingPersonCase = undefined;
    this.outputNormalCrimeVictimCompensation = undefined;
    this.outputNormalRequestors = undefined;
    this.outputNormalChargeVictim = undefined;
    this.outputNormalCorpse = undefined;
    this.outputNormalBankruptcyCase = undefined;
    this.outputAllegationChargeSubject = undefined;
    this.outputNormalRegistrant = undefined;
    this.outputNormalJfoCase64 = undefined;
    this.outputAlgationsJuvenileOffender65 = undefined;
  }

  reciveMessegeDataJuvenileOffender65(event) {
    this.outputAlgationsJuvenileOffender65 = event.content;
    this.outputAlgationsCriminalCase = undefined;
    this.outputAlgationsCriminal = undefined;
    this.outputCitizencardNumber = undefined;
    this.outputAlgationsPrisoner = undefined;
    this.outputAlgationsProbationer = undefined;
    this.outputAlgationsRegseize = undefined;
    this.outputAlgationsRemandee = undefined;
    this.outputAlgationsNarcoticOffender = undefined;
    this.outputAlgationsReleasedOffender = undefined;
    this.outputAlgationsJuvenileOffender = undefined;
    this.outputNormalMissingPersonCase = undefined;
    this.outputNormalCrimeVictimCompensation = undefined;
    this.outputNormalRequestors = undefined;
    this.outputNormalChargeVictim = undefined;
    this.outputNormalCorpse = undefined;
    this.outputNormalBankruptcyCase = undefined;
    this.outputAllegationChargeSubject = undefined;
    this.outputNormalRegistrant = undefined;
    this.outputNormalJfoCase64 = undefined;
  }
  // search(event) {
  //   console.log(event)
  // }
  
  getSpecializeDop() {
    const source = Object.keys(environment.qm.sub[0]);
    for (const entry of source) {
      const sub = Object.keys(environment.qm.sub[0][entry].sub[0]);
      for (const entry_sub of sub) {
        const db = environment.qm.sub[0][entry].sub[0][entry_sub].db;
        const report = environment.qm.sub[0][entry].sub[0][entry_sub].report;
        const local_db = localStorage.getItem(db);
        const local_db_key = Object.entries(localStorage);
        for (const key of local_db_key) {
          if (db === key[0] && local_db === 'true') {
            try {
              this[report].getSearchData();
              this.listLefts.push(this[report].$listLefts);
              this.listAlgations.push(this[report].$listAlgations);
              this.listNormals.push(this[report].$listNormal);
              this.listNormalPersons.push(this[report].$listNormalPersons);
            } catch (error) {
              console.log(error + ' ' + report + 'กรุณาติดต่อผู้พัฒนา');
            }
          }
        }
      }
    }
  }

  getSpecializeDjop() {

  }

  getSpecializeDoc() {

  }

}

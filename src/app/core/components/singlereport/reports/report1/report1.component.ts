import { DopaMoiPor4Metadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-dopa-moi-por4/dxc-model-dopa-moi-por4.interface';
import { DopaMoiAddressesMetadata } from '../../../localsearch/qmreporttemplate/dxc-model-dopa-moi-addresses/dxc-model-dopa-moi-addresses.interface';
import { DopaMoiThaiidcardMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-dopa-moi-thaiidcard/dxc-model-dopa-moi-thaiidcard.interface';
import { DocPrisonerMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-doc-prisoner/dxc-model-doc-prisoner.interface';
import { DopProbationerMetadata } from '../../../localsearch/qmreporttemplate/dxc-model-dop-probationer/dxc-model-dop-probationer.interface';
import { Component, OnInit } from '@angular/core';
import { Metadata, IReport1 } from './report1.interface';
import * as moment from 'moment';
import { DocRegseizeMetadata } from '../../../localsearch/qmreporttemplate/dxc-model-doc-reg-seize/dxc-model-doc-reg-seize.interface';
import { DopaMoiAliensMetadata } from '../../../localsearch/qmreporttemplate/dxc-model-dopa-moi-aliens/dxc-model-dopa-moi-aliens.interface';
import { DopaMoiBirthCertificatesMetadata } from '../../../localsearch/qmreporttemplate/dxc-model-dopa-moi-birthcertificates/dxc-model-dopa-moi-birthcertificates.interface';
import { DopaMoiBorderPassesMetadata } from '../../../localsearch/qmreporttemplate/dxc-model-dopa-moi-border-passes/dxc-model-dopa-moi-border-passes.interface';
import { RlpdRequestorsMetadata } from '../../../localsearch/qmreporttemplate/dxc-model-rlpd-requestors/dxc-model-rlpd-requestors.interface';
import { DjopJuvenileOffenderMetadata } from '../../../localsearch/qmreporttemplate/dxc-model-djop-juvenile-offender/dxc-model-djop-juvenile-offender.interface';
import { DopaMoiFacePhotosMetadata } from '../../../localsearch/qmreporttemplate/dxc-model-dopa-moi-face-photos/dxc-model-dopa-moi-face-photos.interface';
import { DopaCitizenMetadata } from '../../../localsearch/qmreporttemplate/dxc-model-dopa-citizen/dxc-model-dopa-citizen.interface';
import { DopaMoiPassportsMetadata } from '../../../localsearch/qmreporttemplate/dxc-model-dopa-moi-passports/dxc-model-dopa-moi-passports.interface';
import { DopaMoiMarriageCertificatesMetadata } from '../../../localsearch/qmreporttemplate/dxc-model-dopa-moi-marriage-certificates/dxc-model-dopa-moi-marriage-certificates.interface';
import { AmloMoneylaunderingcaseMetadata } from '../../../localsearch/qmreporttemplate/dxc-model-amlo-money-laundering-case/dxc-model-amlo-money-laundering-case.interface';
import { OncbNarcoticOffenderMetadata } from '../../../localsearch/qmreporttemplate/dxc-model-oncb-narcotic-offender/dxc-model-oncb-narcotic-offender.interface';
import { LedBankruptcyCaseMetadata } from '../../../localsearch/qmreporttemplate/dxc-model-led-bankruptcy-case/dxc-model-led-bankruptcy-case.interface';
import { AgothAttorneyCasesMetadata } from '../../../localsearch/qmreporttemplate/dxc-model-agoth-attorney-cases/dxc-model-agoth-attorney-cases.interface';
import { DsiWarrantMetadata } from '../../../localsearch/qmreporttemplate/dxc-model-dsi-warrant/dxc-model-dsi-warrant.interface';
import { DsdMoiWorkforceDevelopmentsMetadata } from '../../../localsearch/qmreporttemplate/dxc-model-dsd-moi-workforce-developments/dxc-model-dsd-moi-workforce-developments.interface';
import { NaccMoiCorruptionAccusedsMetadata } from '../../../localsearch/qmreporttemplate/dxc-model-nacc-moi-corruption-accuseds/dxc-model-nacc-moi-corruption-accuseds.interface';
import { DopaMoiPersonsMetadata } from '../../../localsearch/qmreporttemplate/dxc-model-dopa-moi-persons/dxc-model-dopa-moi-persons.interface';
import { MoacMoiFisheriesIllegalMetadata } from '../../../localsearch/qmreporttemplate/dxc-model-moac-moi-fisheries-illegal/dxc-model-moac-moi-fisheries-illegal.interface';
import { DolLandAndCondominiumTitlesMetadata } from '../../../localsearch/qmreporttemplate/dxc-model-dol-land-and-condominium-titles/dxc-model-dol-land-and-condominium-titles.interface';
import { NhsoMoiHealthInsuranceRightsMetadata } from '../../../localsearch/qmreporttemplate/dxc-model-nhso-moi-nhso-health-insurance-rights/dxc-model-nhso-moi-nhso-health-insurance-rights.interface';
import { AgothChargeSubjectMetadata } from '../../../localsearch/qmreporttemplate/dxc-model-agoth-charge-subjects/dxc-model-agoth-charge-subjects.interface';
import { SsoEmployeeEmploymentMetaData } from '../../../localsearch/qmreporttemplate/dxc-model-sso-employee-employment/dxc-model-sso-employee-employment.interface';
import { DopaMoiDivorceCertificatesMetadata } from '../../../localsearch/qmreporttemplate/dxc-model-dopa-moi-divorce-certificates/dxc-model-dopa-moi-divorce-certificates.interface';
import { DopaMoiEducationBackgroundesMetadata } from '../../../localsearch/qmreporttemplate/dxc-model-dopa-moi-education-backgroundes/dxc-model-dopa-moi-education-backgroundes.interface';
import { DoeMoiAlienWorkforcesMetadata } from '../../../localsearch/qmreporttemplate/dxc-model-doe-moi-alien-workforces/dxc-model-doe-moi-alien-workforces.interface';
import { DocRemandeeMetadata } from '../../../localsearch/qmreporttemplate/dxc-model-doc-remandee/dxc-model-doc-remandee/dxc-model-doc-remandee.interface';
import { JfoJfoCaseMetadata } from '../../../localsearch/qmreporttemplate/dxc-model-jfo-jfo-case/dxc-model-jfo-jfo-case.interface';
import { DopaMoiDeathCertificatesMetadata } from '../../../localsearch/qmreporttemplate/dxc-model-dopa-moi-death-certificates/dxc-model-dopa-moi-death-certificates.interface';
import { MsdhsMoiNewBornBabiesMetadata } from '../../../localsearch/qmreporttemplate/dxc-model-msdhs-moi-new-born-babies/dxc-model-msdhs-moi-new-born-babies.interface';
import { AgothChargeVictimMetadata } from '../../../localsearch/qmreporttemplate/dxc-model-agoth-charge-victim/dxc-model-agoth-charge-victim.interface';
import { DltDriverLicenseMetadata } from '../../../localsearch/qmreporttemplate/dxc-model-dlt-driver-license/dxc-model-dlt-driver-license.interface';
import { RtpCriminalMetadata } from '../../../localsearch/qmreporttemplate/dxc-model-rtp-criminal/dxc-model-rtp-criminal.interface';
import { CifsCorpseMetadata } from '../../../localsearch/qmreporttemplate/dxc-model-cifs-corpse/dxc-model-cifs-corpse.interface';
import { RlpdCrimeDefendantCompensationMetadata } from '../../../localsearch/qmreporttemplate/dxc-model-rlpd-crime-defendant-compensation/dxc-model-rlpd-crime-defendant-compensation.interface';
import { CifsMissingPersonMetadata } from '../../../localsearch/qmreporttemplate/dxc-model-cifs-missing-person/dxc-model-cifs-missing_person.interface';
import { CifsReportVerificationMetadata } from '../../../localsearch/qmreporttemplate/dxc-model-cifs-report-verification/dxc-model-cifs-report-verification.interface';
import { DopaMoiPersonChangenamePrimaryMetadata } from '../../../localsearch/qmreporttemplate/dxc-model-dopa-moi-person-changename-primary/dxc-model-dopa-moi-person-changename-primary.interface';
import { RlpdCrimeVictimCompensationMetadata } from '../../../localsearch/qmreporttemplate/dxc-model-rlpd-crime-victim-compensation/dxc-model-rlpd-crime-victim-compensation.interface';
import { DocReleasedOffenderMetadata } from '../../../localsearch/qmreporttemplate/dxc-model-released-offender/dxc-model-released-offender.interface';
import { DltCarLicenseMetadata } from '../../../localsearch/qmreporttemplate/dxc-model-dlt-car-license/dxc-model-dlt-car-license.interface';
import { DopaMoiPersonChangelastnameMetadata } from '../../../localsearch/qmreporttemplate/dxc-model-dopa-moi-dopa-person-changelastname/dxc-model-dopa-moi-dopa-person-changelastname.interface';
import { SsoEmploymentMetaData } from '../../../localsearch/qmreporttemplate/dxc-model-sso-employment/dxc-model-sso-employment.interface';
import { RtpMissingPersonCaseMetadata } from '../../../localsearch/qmreporttemplate/dxc-model-rtp-missing-person-case/dxc-model-rtp-missing-person-case.interface';
import { CojArrestWarrantsMetadata } from '../../../localsearch/qmreporttemplate/dxc-model-coj-arrest-warrants/dxc-model-coj-arrest-warrants.interface';
import { DcaMoiThailanfPassportMetadata } from '../../../localsearch/qmreporttemplate/dxc-model-dca-moi-thailand-passport/dxc-model-dca-moi-thailand-passport.interface';
import { MofRegistrantMetadata } from '../../../localsearch/qmreporttemplate/dxc-model-mof-registrant/dxc-model-mof-registrant.interface';
import { JfoJfoCase64Metadata } from '../../../localsearch/qmreporttemplate/dxc-model-jfo-jfo-case64/dxc-model-jfo-jfo-case64.interface';
import { RtpCriminalRecordMetadata } from '../../../localsearch/qmreporttemplate/dxc-model-rtp-criminal-record/dxc-model-rtp-criminal-record.interface';
import { RtpTravelInformationMetadata } from '../../../localsearch/qmreporttemplate/dxc-model-rtp-travel-information/dxc-model-rtp-travel-information.interface';
import { RtpArrestWarrantMetadata } from '../../../localsearch/qmreporttemplate/dxc-model-rtp-arrest-warrant/dxc-model-rtp-arrest-warrant.interface';
import { RtpCriminalCaseMetadata } from '../../../localsearch/qmreporttemplate/dxc-model-rtp-criminal-case/dxc-model-rtp-criminal-case.interface';
import { RtpTrafficCaseMetadata } from '../../../localsearch/qmreporttemplate/dxc-model-rtp-traffic-case/dxc-model-rtp-traffic-case.interface';
import { RtpWarrantOfArrestMetadata } from '../../../localsearch/qmreporttemplate/dxc-model-rtp-warrant-of-arrest/dxc-model-rtp-warrant-of-arrest.interface';
import { DjopJuvenileOffender65Metadata } from '../../../localsearch/qmreporttemplate/dxc-model-djop-juvenile-offender65/dxc-model-djop-juvenile-offender65.interface';
import { DopProbationerNarcoticsMetadata } from '../../../localsearch/qmreporttemplate/dxc-model-dop-probationer-narcotics/dxc-model-dop-probationer-narcotics.interface';
import { MoeMoiStudentsMetadata } from '../../../localsearch/qmreporttemplate/dxc-model-moe-moi-students/dxc-model-moe-moi-students.interface';

declare var PDFreactor: any;
declare var document: any;
@Component({
  selector: 'app-report1',
  templateUrl: './report1.component.html',
  styleUrls: ['./report1.component.scss'],
  providers: [
    Metadata,
    DocPrisonerMetadata,
    DocRegseizeMetadata,
    DopaMoiAliensMetadata,
    DopProbationerMetadata,
    DopaMoiBirthCertificatesMetadata,
    DopaMoiAddressesMetadata,
    DopaMoiBorderPassesMetadata,
    RlpdRequestorsMetadata,
    DjopJuvenileOffenderMetadata,
    DopaMoiFacePhotosMetadata,
    // DopaCitizenMetadata,
    DopaMoiPassportsMetadata,
    DopaMoiMarriageCertificatesMetadata,
    DopaMoiPor4Metadata,
    AmloMoneylaunderingcaseMetadata,
    OncbNarcoticOffenderMetadata,
    LedBankruptcyCaseMetadata,
    // AgothAttorneyCasesMetadata
    DsdMoiWorkforceDevelopmentsMetadata,
    NaccMoiCorruptionAccusedsMetadata,
    DopaMoiThaiidcardMetadata,
    DopaMoiPersonsMetadata,
    MoacMoiFisheriesIllegalMetadata,
    DolLandAndCondominiumTitlesMetadata,
    NhsoMoiHealthInsuranceRightsMetadata,
    AgothChargeSubjectMetadata,
    SsoEmployeeEmploymentMetaData,
    DopaMoiDivorceCertificatesMetadata,
    DopaMoiEducationBackgroundesMetadata,
    MoeMoiStudentsMetadata,
    DoeMoiAlienWorkforcesMetadata,
    DocRemandeeMetadata,
    JfoJfoCaseMetadata,
    DopaMoiDeathCertificatesMetadata,
    MsdhsMoiNewBornBabiesMetadata,
    AgothChargeVictimMetadata,
    DsiWarrantMetadata,
    DltDriverLicenseMetadata,
    RtpCriminalMetadata,
    CifsCorpseMetadata,
    RlpdCrimeDefendantCompensationMetadata,
    CifsMissingPersonMetadata,
    CifsReportVerificationMetadata,
    DopaMoiPersonChangenamePrimaryMetadata,
    RlpdCrimeVictimCompensationMetadata,
    DocReleasedOffenderMetadata,
    DltCarLicenseMetadata,
    DopaMoiPersonChangelastnameMetadata,
    SsoEmploymentMetaData,
    RtpMissingPersonCaseMetadata,
    CojArrestWarrantsMetadata,
    DcaMoiThailanfPassportMetadata,
    MofRegistrantMetadata,
    JfoJfoCase64Metadata,
    RtpCriminalRecordMetadata,
    RtpTravelInformationMetadata,
    RtpArrestWarrantMetadata,
    RtpCriminalCaseMetadata,
    RtpTrafficCaseMetadata,
    RtpWarrantOfArrestMetadata,
    DjopJuvenileOffender65Metadata,
    DopProbationerNarcoticsMetadata,
  ]
})
export class Report1Component implements OnInit {

  dataHtml: IReport1;

  reportName: string; // ผู้ขอรายงาน
  reportOfDate: string; // วันที่พิมรายงาน
  reportOfTime: string; // เวลาที่พิมรายงาน
  reportBarcode: string; // เลขที่เอกสาร(เลขบาร์โค๊ด)

  normalBirthcertificates: string[];
  normalBorderpasses: string[];
  normalPassports: string[];
  normalMarriagecertificates: string[];
  normalRequestors: string[];
  normalThaiIdCard: string[];
  normalFacePhotos: string[];
  normalAliens: string[];
  normalAddresses: string[];
  normalPor4: string[];
  normalBankruptcyCase: string[];
  topCitizen: string[];
  normalWorkforceDevelopments: string[];
  topMoiPerson: string[];
  normalPersons: string[];
  normalMoacMoiFisheriesIllegal: string[];
  normalLandAndCondominiumTitles: string[];
  normalHealthInsuranceRights: string[];
  normalEmployeeEmployment: string[];
  normalDivorceCertificates: string[];
  normalEducationBackgroundes: string[];
  normalStudents: string[];
  normalAlienWorkforces: string[];
  normalJfoCases: string[];
  normalDeathCertificates: string[];
  normalNewBornBabies: string[];
  normalchargeVictim: string[];
  normalMissingPerson: string[];
  normalReportVerification: string[];
  normalPersonChangenamePrimary: string[];
  normalCrimeDefendantCompensation: string[];
  normalCrimeVictimCompensation: string[];
  normalCarLicense: string[];
  normalPersonChangelastname: string[];
  normalEmployment: string[];
  normalMissingPersonCase: string[];
  normalThailandPassport: string[];
  normaldriverLicense: string[];
  normalCorpse: string[];
  normalRegistrant: string[];
  normalJfoCase64: string[];
  normalTravelInformation: string[];

  allegationRegseize: string[];
  allegationProbationer: string[];
  allegationPrisoner: string[];
  allegationDjopJuvenlie: string[];
  allegationNarcoticOffender: string[];
  allegationAttorneyCase: string[];
  allegationCorruptionAccuseds: string[];
  allegationChargeSubject: string[];
  allegationRemandee: string[];
  allegationWarrant: string[];
  allegationCriminal: string[];
  allegationReleasedOffender: string[];
  allegationCojArrestWarrants: string[];
  allegationCriminalRecord: string[];
  allegationArrestWarrant: string[];
  allegationCriminalCase: string[];
  allegationTrafficCase: string[];
  allegationWarrantOfArrest: string[];
  allegationDjopJuvenlie65: string[];
  allegationDopProbationerNarcotics: string[];

  // count
  normalPersonsCount: string;
  normalPor4Count: string;
  normalThaiIdCardCount: string;
  normalAliensCount: string;
  normalBirthcertificatesCount: string;
  normalAddressesCount: string;
  normalBorderpassesCount: string;
  normalRequestorsCount: string;
  normalFacePhotosCount: string;
  normalPassportsCount: string;
  normalMarriagecertificatesCount: string;
  normalBankruptcyCaseCount: string;
  normalLandAndCondominiumTitlesCount: string;
  normalHealthInsuranceRightsCount: string;
  normalAlienWorkforcesCount: string;
  normalNewBornBabiesCount: string;
  normalWorkforceDevelopmentsCount: string;
  normalMoacMoiFisheriesIllegalCount: string;
  normalEmployeeEmploymentCount: string;
  normalDivorceCertificatesCount: string;
  normalEducationBackgroundesCount: string;
  normalStudentsCount: string;
  normalJfoCaseCount: string;
  normalDeathCertificatesCount: string;
  normalchargeVictimCount: string;
  normaldriverLicenseCount: string;
  normalCorpseCount: string;
  normalMissingPersonCount: string;
  normalReportVerificationCount: string;
  normalPersonChangenamePrimaryCount: string;
  normalCrimeDefendantCompensationCount: string;
  normalCrimeVictimCompensationCount: string;
  normalCarLicenseCount: string;
  normalPersonChangelastnameCount: string;
  normalEmploymentCount: string;
  normalMissingPersonCaseCount: string;
  normalThailandPassportCount: string;
  normalRegistrantCount: string;
  normalJfoCase64Count: string;
  normalTravelInformationCount: string;

  allegationRegseizeCount: string;
  allegationPrisonerCount: string;
  allegationProbationerCount: string;
  allegationDjopJuvenlieCount: string;
  allegationNarcoticOffenderCount: string;
  allegationAttorneyCaseCount: string;
  allegationCorruptionAccusedsCount: string;
  allegationChargeSubjectCount: string;
  allegationRemandeeCount: string;
  allegationWarrantCount: string;
  allegationCriminalCount: string;
  allegationCrimeDefendantCompensationCount: string;
  allegationReleasedOffenderCount: string;
  allegationCojArrestWarrantsCount: string;
  allegationCriminalRecordCount: string;
  allegationArrestWarrantCount: string;
  allegationCriminalCaseCount: string;
  allegationTrafficCaseCount: string;
  allegationWarrantOfArrestCount:string;
  allegationDjopJuvenlie65Count: string;
  allegationDopProbationerNarcoticsCount: string;

  constructor(private html: Metadata,
    private Reportbirthcertificates: DopaMoiBirthCertificatesMetadata,
    private ReportDopProbationer: DopProbationerMetadata,
    private ReportAliens: DopaMoiAliensMetadata,
    private ReportDocRegseize: DocRegseizeMetadata,
    private ReportDocPrisoner: DocPrisonerMetadata,
    private ReportMoiDopaAddresses: DopaMoiAddressesMetadata,
    private ReportborderPasses: DopaMoiBorderPassesMetadata,
    private ReportRlpdRequestors: RlpdRequestorsMetadata,
    private ReportDjopJuvenlieOffender: DjopJuvenileOffenderMetadata,
    private ReportMoiDopaFacePhotos: DopaMoiFacePhotosMetadata,
    // private ReportDopaCitizen: DopaCitizenMetadata,
    private ReportMoiDopaPassports: DopaMoiPassportsMetadata,
    private ReportMarriageCertificates: DopaMoiMarriageCertificatesMetadata,
    private ReportDopaMoiPor4: DopaMoiPor4Metadata,
    private ReportOncbNarcoticOffender: OncbNarcoticOffenderMetadata,
    private ReportLedBankruptcyCase: LedBankruptcyCaseMetadata,
    // private ReportAgothAttorneyCases: AgothAttorneyCasesMetadata,
    private ReportMoiDsdWorkforceDevelopments: DsdMoiWorkforceDevelopmentsMetadata,
    private ReportNaccCorruptionaccuseds: NaccMoiCorruptionAccusedsMetadata,
    private ReportDopaMoiPerson: DopaMoiPersonsMetadata,
    private ReportDopaMoiThaiidcard: DopaMoiThaiidcardMetadata,
    private ReportMoacMoiFisheriesIllegal: MoacMoiFisheriesIllegalMetadata,
    private ReportDolLandAndCondominiumTitles: DolLandAndCondominiumTitlesMetadata,
    private ReportNhsoMoiHealthInsuranceRights: NhsoMoiHealthInsuranceRightsMetadata,
    private ReportAgothChargeSubject: AgothChargeSubjectMetadata,
    private ReportSsoEmployeeEmployment: SsoEmployeeEmploymentMetaData,
    private ReportDopaMoiDivorceCertificates: DopaMoiDivorceCertificatesMetadata,
    private ReportDopaMoiEducationBackgroundes: DopaMoiEducationBackgroundesMetadata,
    private ReportDopaMoiStudents: MoeMoiStudentsMetadata,
    private ReportDoeMoiAlienWorkforces: DoeMoiAlienWorkforcesMetadata,
    private ReportDocRemandee: DocRemandeeMetadata,
    private ReportJfoJfoCase: JfoJfoCaseMetadata,
    private ReportDopaMoiDeathCertificates: DopaMoiDeathCertificatesMetadata,
    private ReportMsdhsMoiNewBornBabies: MsdhsMoiNewBornBabiesMetadata,
    private ReportAgothChargeVictim: AgothChargeVictimMetadata,
    private ReportDsiWarrant: DsiWarrantMetadata,
    private ReportDltDriverLicense: DltDriverLicenseMetadata,
    private ReportRtpCriminal: RtpCriminalMetadata,
    private ReportCifsCifsCorpse: CifsCorpseMetadata,
    private ReportRlpdCrimeDefendantCompensation: RlpdCrimeDefendantCompensationMetadata,
    private ReportCifsMissingPerson: CifsMissingPersonMetadata,
    private ReportCifsReportVerification: CifsReportVerificationMetadata,
    private ReportMoiDopaPersonChangenamePrimary: DopaMoiPersonChangenamePrimaryMetadata,
    private ReportRlpdCrimeVictimCompensation: RlpdCrimeVictimCompensationMetadata,
    private ReportDocReleasedOffender:DocReleasedOffenderMetadata,
    private ReportDltcarLicense: DltCarLicenseMetadata,
    private ReportMoiDopaPersonChangelastname: DopaMoiPersonChangelastnameMetadata,
    private ReportSsoEmployment: SsoEmploymentMetaData,
    private ReportRtpMissingPersonCase: RtpMissingPersonCaseMetadata,
    private ReportCojArrestWarrants: CojArrestWarrantsMetadata,
    private ReportMoiMfaThailandPassport: DcaMoiThailanfPassportMetadata,
    private ReportMofRegistrant: MofRegistrantMetadata,
    private ReportJfoJfoCase64: JfoJfoCase64Metadata,
    private ReportRtpCriminalRecord: RtpCriminalRecordMetadata,
    private ReportRtpTravelInformation: RtpTravelInformationMetadata,
    private ReportRtpArrestWarrant: RtpArrestWarrantMetadata,
    private ReportRtpCriminalCase: RtpCriminalCaseMetadata,
    private ReportRtpTrafficCase: RtpTrafficCaseMetadata,
    private ReportRtpWarrantOfArrest: RtpWarrantOfArrestMetadata,
    private ReportDjopJuvenileOffender65: DjopJuvenileOffender65Metadata,
    private ReportDopProbationerNarcotics: DopProbationerNarcoticsMetadata
  ) {
    this.initialData();
    this.locadReportName();

    this.ReportDopProbationer.getalgationPdf();
    this.allegationProbationer = this.ReportDopProbationer.$algationPdf;
    this.allegationProbationerCount = this.ReportDopProbationer.$algationPdfCount;
    this.ReportDocPrisoner.getalgationPdf();
    this.allegationPrisoner = this.ReportDocPrisoner.$algationPdf;
    this.allegationPrisonerCount = this.ReportDocPrisoner.$algationPdfCount;
    this.ReportMoiDopaAddresses.getnormalPdf();
    this.normalAddresses = this.ReportMoiDopaAddresses.$normalPdf;
    this.normalAddressesCount = this.ReportMoiDopaAddresses.$normalPdfCount;
    this.ReportAliens.getnormalPdf();
    this.normalAliens = this.ReportAliens.$normalPdf;
    this.normalAliensCount = this.ReportAliens.$normalPdfCount;
    this.ReportDocRegseize.getallegationPdf();
    this.allegationRegseize = this.ReportDocRegseize.$allegationPdf;
    this.allegationRegseizeCount = this.ReportDocRegseize.$allegationPdfCount;
    this.ReportMoiDopaFacePhotos.gettopPdf();
    this.topCitizen = this.ReportMoiDopaFacePhotos.$topPdf;
    this.ReportDopaMoiPerson.gettopPdf();
    this.topMoiPerson = this.ReportDopaMoiPerson.$topPdf;
    this.ReportDopaMoiPerson.getnormalPdf();
    this.normalPersons = this.ReportDopaMoiPerson.$normalPdf;
    this.normalPersonsCount = this.ReportDopaMoiPerson.$normalPdfCount;
    this.ReportDopaMoiThaiidcard.getnormalPdf();
    this.normalThaiIdCard = this.ReportDopaMoiThaiidcard.$normalPdf;
    this.normalThaiIdCardCount = this.ReportDopaMoiThaiidcard.$normalPdfCount;
    this.ReportMoacMoiFisheriesIllegal.getnormalPdf();
    this.normalMoacMoiFisheriesIllegal = this.ReportMoacMoiFisheriesIllegal.$normalPdf;
    this.normalMoacMoiFisheriesIllegalCount = this.ReportMoacMoiFisheriesIllegal.$normalPdfCount;
    this.Reportbirthcertificates.getnormalPdf();
    this.normalBirthcertificates = this.Reportbirthcertificates.$normalPdf;
    this.normalBirthcertificatesCount = this.Reportbirthcertificates.$normalPdfCount;
    this.ReportborderPasses.getnormalPdf();
    this.normalBorderpasses = this.ReportborderPasses.$normalPdf;
    this.normalBorderpassesCount = this.ReportborderPasses.$normalPdfCount;
    this.ReportRlpdRequestors.getnormalPdf();
    this.normalRequestors = this.ReportRlpdRequestors.$normalPdf;
    this.normalRequestorsCount = this.ReportRlpdRequestors.$normalPdfCount;
    // this.ReportDjopJuvenlieOffender.getalgationPdf();
    // this.allegationDjopJuvenlie = this.ReportDjopJuvenlieOffender.$algationPdf;
    // this.allegationDjopJuvenlieCount = this.ReportDjopJuvenlieOffender.$allegationPdfCount;
    this.ReportMoiDopaFacePhotos.getnormalPdf();
    this.normalFacePhotos = this.ReportMoiDopaFacePhotos.$normalPdf;
    this.normalFacePhotosCount = this.ReportMoiDopaFacePhotos.$normalPdfCount;
    this.ReportMoiDopaPassports.getnormalPdf();
    this.normalPassports = this.ReportMoiDopaPassports.$normalPdf;
    this.normalPassportsCount = this.ReportMoiDopaPassports.$normalPdfCount;
    this.ReportMarriageCertificates.getnormalPdf();
    this.normalMarriagecertificates = this.ReportMarriageCertificates.$normalPdf;
    this.normalMarriagecertificatesCount = this.ReportMarriageCertificates.$normalPdfCount;
    this.ReportDopaMoiPor4.getnormalPdf();
    this.normalPor4 = this.ReportDopaMoiPor4.$normalPdf;
    this.normalPor4Count = this.ReportDopaMoiPor4.$normalPdfCount;
    this.ReportOncbNarcoticOffender.getallegationPdf();
    this.allegationNarcoticOffender = this.ReportOncbNarcoticOffender.$allegationPdf;
    this.allegationNarcoticOffenderCount = this.ReportOncbNarcoticOffender.$allegationPdfCount;
    this.ReportLedBankruptcyCase.getnormalPdf();
    this.normalBankruptcyCase = this.ReportLedBankruptcyCase.$normalPdf;
    this.normalBankruptcyCaseCount = this.ReportLedBankruptcyCase.$normalPdfCount;
    // this.ReportAgothAttorneyCases.getallegationPdf();
    // this.allegationAttorneyCase = this.ReportAgothAttorneyCases.$allegationPdf;
    // this.allegationAttorneyCaseCount = this.ReportAgothAttorneyCases.$allegationPdfCount;
    this.ReportMoiDsdWorkforceDevelopments.getnormalPdf();
    this.normalWorkforceDevelopments = this.ReportMoiDsdWorkforceDevelopments.$normalPdf;
    this.normalWorkforceDevelopmentsCount = this.ReportMoiDsdWorkforceDevelopments.$normalPdfCount;
    this.ReportNaccCorruptionaccuseds.getallegationPdf();
    this.allegationCorruptionAccuseds = this.ReportNaccCorruptionaccuseds.$allegationPdf;
    this.allegationCorruptionAccusedsCount = this.ReportNaccCorruptionaccuseds.$allegationPdfCount;
    this.ReportDolLandAndCondominiumTitles.getnormalPdf();
    this.normalLandAndCondominiumTitles = this.ReportDolLandAndCondominiumTitles.$normalPdf;
    this.normalLandAndCondominiumTitlesCount = this.ReportDolLandAndCondominiumTitles.$normalPdfCount;
    this.ReportNhsoMoiHealthInsuranceRights.getnormalPdf();
    this.normalHealthInsuranceRights = this.ReportNhsoMoiHealthInsuranceRights.$normalPdf;
    this.normalHealthInsuranceRightsCount = this.ReportNhsoMoiHealthInsuranceRights.$normalPdfCount;
    this.ReportAgothChargeSubject.getallegationPdf();
    this.allegationChargeSubject = this.ReportAgothChargeSubject.$allegationPdf;
    this.allegationChargeSubjectCount = this.ReportAgothChargeSubject.$allegationPdfCount;
    this.ReportSsoEmployeeEmployment.getnormalPdf();
    this.normalEmployeeEmployment = this.ReportSsoEmployeeEmployment.$normalPdf;
    this.normalEmployeeEmploymentCount = this.ReportSsoEmployeeEmployment.$normalPdfCount;
    this.ReportDopaMoiDivorceCertificates.getnormalPdf();
    this.normalDivorceCertificates = this.ReportDopaMoiDivorceCertificates.$normalPdf;
    this.normalDivorceCertificatesCount = this.ReportDopaMoiDivorceCertificates.$normalPdfCount;
    this.ReportDopaMoiEducationBackgroundes.getnormalPdf();
    this.normalEducationBackgroundes = this.ReportDopaMoiEducationBackgroundes.$normalPdf;
    this.normalEducationBackgroundesCount = this.ReportDopaMoiEducationBackgroundes.$normalPdfCount;
    this.ReportDopaMoiStudents.getnormalPdf();
    this.normalStudents = this.ReportDopaMoiStudents.$normalPdf;
    this.normalStudentsCount = this.ReportDopaMoiStudents.$normalPdfCount;
    this.ReportDoeMoiAlienWorkforces.getnormalPdf();
    this.normalAlienWorkforces = this.ReportDoeMoiAlienWorkforces.$normalPdf;
    this.normalAlienWorkforcesCount = this.ReportDoeMoiAlienWorkforces.$normalPdfCount;
    this.ReportDocRemandee.getalgationPdf();
    this.allegationRemandee = this.ReportDocRemandee.$algationPdf;
    this.allegationRemandeeCount = this.ReportDocRemandee.$algationPdfCount;
    this.ReportJfoJfoCase.getnormalPdf();
    this.normalJfoCases = this.ReportJfoJfoCase.$normalPdf;
    this.normalJfoCaseCount = this.ReportJfoJfoCase.$normalPdfCount;
    this.ReportDopaMoiDeathCertificates.getnormalPdf();
    this.normalDeathCertificates = this.ReportDopaMoiDeathCertificates.$normalPdf;
    this.normalDeathCertificatesCount = this.ReportDopaMoiDeathCertificates.$normalPdfCount;
    this.ReportMsdhsMoiNewBornBabies.getnormalPdf();
    this.normalNewBornBabies = this.ReportMsdhsMoiNewBornBabies.$normalPdf;
    this.normalNewBornBabiesCount = this.ReportMsdhsMoiNewBornBabies.$normalPdfCount;
    this.ReportAgothChargeVictim.getnormalPdf();
    this.normalchargeVictim = this.ReportAgothChargeVictim.$normalPdf;
    this.normalchargeVictimCount = this.ReportAgothChargeVictim.$normalPdfCount;
    this.ReportDsiWarrant.getallegationPdf();
    this.allegationWarrant = this.ReportDsiWarrant.$allegationPdf;
    this.allegationWarrantCount = this.ReportDsiWarrant.$allegationPdfCount;
    this.ReportDltDriverLicense.getnormalPdf();
    this.normaldriverLicense = this.ReportDltDriverLicense.$normalPdf;
    this.normaldriverLicenseCount = this.ReportDltDriverLicense.$normalPdfCount;
    this.ReportRtpCriminal.getallegationPdf();
    this.allegationCriminal = this.ReportRtpCriminal.$allegationPdf;
    this.allegationCriminalCount = this.ReportRtpCriminal.$allegationPdfCount;
    this.ReportCifsCifsCorpse.getallegationPdf();
    this.normalCorpse = this.ReportCifsCifsCorpse.$allegationPdf;
    this.normalCorpseCount = this.ReportCifsCifsCorpse.$allegationPdfCount;
    this.ReportCifsMissingPerson.getnormalPdf();
    this.normalMissingPerson = this.ReportCifsMissingPerson.$normalPdf;
    this.normalMissingPersonCount = this.ReportCifsMissingPerson.$normalPdfCount;
    this.ReportCifsReportVerification.getnormalPdf();
    this.normalReportVerification = this.ReportCifsReportVerification.$normalPdf;
    this.normalReportVerificationCount = this.ReportCifsReportVerification.$normalPdfCount;
    this.ReportMoiDopaPersonChangenamePrimary.getnormalPdf();
    this.normalPersonChangenamePrimary = this.ReportMoiDopaPersonChangenamePrimary.$normalPdf;
    this.normalPersonChangenamePrimaryCount = this.ReportMoiDopaPersonChangenamePrimary.$normalPdfCount;
    this.ReportRlpdCrimeDefendantCompensation.getnormalPdf();
    this.normalCrimeDefendantCompensation = this.ReportRlpdCrimeDefendantCompensation.$normalPdf;
    this.normalCrimeDefendantCompensationCount = this.ReportRlpdCrimeDefendantCompensation.$normalPdfCount;
    this.ReportRlpdCrimeVictimCompensation.getnormalPdf();
    this.normalCrimeVictimCompensation = this.ReportRlpdCrimeVictimCompensation.$normalPdf;
    this.normalCrimeVictimCompensationCount = this.ReportRlpdCrimeVictimCompensation.$normalPdfCount;
    this.ReportDocReleasedOffender.getallegationPdf();
    this.allegationReleasedOffender = this.ReportDocReleasedOffender.$allegationPdf;
    this.allegationReleasedOffenderCount = this.ReportDocReleasedOffender.$allegationPdfCount;
    this.ReportDltcarLicense.getnormalPdf();
    this.normalCarLicense = this.ReportDltcarLicense.$normalPdf;
    this.normalCarLicenseCount = this.ReportDltcarLicense.$normalPdfCount;
    this.ReportMoiDopaPersonChangelastname.getnormalPdf();
    this.normalPersonChangelastname = this.ReportMoiDopaPersonChangelastname.$normalPdf;
    this.normalPersonChangelastnameCount = this.ReportMoiDopaPersonChangelastname.$normalPdfCount;
    this.ReportSsoEmployment.getnormalPdf();
    this.normalEmployment = this.ReportSsoEmployment.$normalPdf;
    this.normalEmploymentCount = this.ReportSsoEmployment.$normalPdfCount;
    this.ReportRtpMissingPersonCase.getnormalPdf();
    this.normalMissingPersonCase = this.ReportRtpMissingPersonCase.$normalPdf;
    this.normalMissingPersonCaseCount = this.ReportRtpMissingPersonCase.$normalPdfCount;
    this.ReportCojArrestWarrants.getnormalPdf();
    this.allegationCojArrestWarrants = this.ReportCojArrestWarrants.$normalPdf;
    this.allegationCojArrestWarrantsCount = this.ReportCojArrestWarrants.$normalPdfCount;
    this.ReportMoiMfaThailandPassport.getnormalPdf();
    this.normalThailandPassport = this.ReportMoiMfaThailandPassport.$normalPdf;
    this.normalThailandPassportCount = this.ReportMoiMfaThailandPassport.$normalPdfCount;
    this.ReportMofRegistrant.getnormalPdf();
    this.normalRegistrant = this.ReportMofRegistrant.$normalPdf;
    this.normalRegistrantCount = this.ReportMofRegistrant.$normalPdfCount;
    this.ReportJfoJfoCase64.getnormalPdf();
    this.normalJfoCase64 = this.ReportJfoJfoCase64.$normalPdf;
    this.normalJfoCase64Count = this.ReportJfoJfoCase64.$normalPdfCount;
    this.ReportRtpCriminalRecord.getallegationPdf();
    this.allegationCriminalRecord = this.ReportRtpCriminalRecord.$allegationPdf;
    this.allegationCriminalRecordCount = this.ReportRtpCriminalRecord.$allegationPdfCount;
    this.ReportRtpTravelInformation.getnormalPdf();
    this.normalTravelInformation = this.ReportRtpTravelInformation.$normalPdf;
    this.normalTravelInformationCount = this.ReportRtpTravelInformation.$normalPdfCount;
    // this.ReportRtpArrestWarrant.getallegationPdf();
    this.allegationArrestWarrant = this.ReportRtpArrestWarrant.$allegationPdf;
    this.allegationArrestWarrantCount = this.ReportRtpArrestWarrant.$allegationPdfCount
    // this.ReportRtpCriminalCase.getallegationPdf();
    this.allegationCriminalCase = this.ReportRtpCriminalCase.$allegationPdf;
    this.allegationCriminalCaseCount = this.ReportRtpCriminalCase.$allegationPdfCount;
    this.ReportRtpTrafficCase.getallegationPdf();
    this.allegationTrafficCase = this.ReportRtpTrafficCase.$allegationPdf;
    this.allegationTrafficCaseCount = this.ReportRtpTrafficCase.$allegationPdfCount;
    this.ReportRtpWarrantOfArrest.getallegationPdf();
    this.allegationWarrantOfArrest = this.ReportRtpWarrantOfArrest.$allegationPdf;
    this.allegationWarrantOfArrestCount = this.ReportRtpWarrantOfArrest.$allegationPdfCount;
    this.ReportDjopJuvenileOffender65.getallegationPdf();
    this.allegationDjopJuvenlie65 = this.ReportDjopJuvenileOffender65.$allegationPdf;
    this.allegationDjopJuvenlie65Count = this.ReportDjopJuvenileOffender65.$allegationPdfCount;
    this.ReportDopProbationerNarcotics.getallgationPdf();
    this.allegationDopProbationerNarcotics = this.ReportDopProbationerNarcotics.$allgationPdf;
    this.allegationDopProbationerNarcoticsCount = this.ReportDopProbationerNarcotics.$allgationPdfCount;
  }

  ngOnInit() {
    this.pdfPreview();
  }

  initialData() {
    this.normalBirthcertificates = [];
    this.normalBorderpasses = [];
    this.normalPassports = [];
    this.normalMarriagecertificates = [];
    this.normalRequestors = [];
    this.normalThaiIdCard = [];
    this.normalFacePhotos = [];
    this.normalAliens = [];
    this.normalAddresses = [];
    this.normalPor4 = [];
    this.normalBankruptcyCase = [];
    this.topCitizen = [];
    this.normalWorkforceDevelopments = [];
    this.topMoiPerson = [];
    this.normalPersons = [];
    this.normalMoacMoiFisheriesIllegal = [];
    this.normalLandAndCondominiumTitles = [];
    this.normalHealthInsuranceRights = [];
    this.normalEmployeeEmployment = [];
    this.normalDivorceCertificates = [];
    this.normalEducationBackgroundes = [];
    this.normalEducationBackgroundes = [];
    this.normalStudents = [];
    this.normalAlienWorkforces = [];
    this.normalJfoCases = [];
    this.normalDeathCertificates = [];
    this.normalNewBornBabies = [];
    this.normalchargeVictim = [];
    this.normaldriverLicense = [];
    this.normalMissingPerson = [];
    this.normalReportVerification = [];
    this.normalPersonChangenamePrimary = [];
    this.normalCrimeDefendantCompensation = [];
    this.normalCrimeVictimCompensation = [];
    this.normalCarLicense = [];
    this.normalPersonChangelastname = [];
    this.normalEmployment = [];
    this.normalMissingPersonCase = [];
    this.normalThailandPassport =[];
    this.normalCorpse = [];
    this.normalRegistrant =[];
    this.normalJfoCase64 = [];
    this.normalTravelInformation = [];

    this.allegationRegseize = [];
    this.allegationProbationer = [];
    this.allegationPrisoner = [];
    this.allegationDjopJuvenlie = [];
    this.allegationNarcoticOffender = [];
    this.allegationAttorneyCase = [];
    this.allegationCorruptionAccuseds = [];
    this.allegationChargeSubject = [];
    this.allegationRemandee = [];
    this.allegationWarrant = [];
    this.allegationCriminal = [];
    this.allegationReleasedOffender = [];
    this.allegationCojArrestWarrants =[];
    this.allegationCriminalRecord = [];
    this.allegationArrestWarrant = [];
    this.allegationCriminalCase = [];
    this.allegationTrafficCase = [];
    this.allegationWarrantOfArrest = [];
    this.allegationDjopJuvenlie65 = [];
    this.allegationDopProbationerNarcotics = []

    // count
    this.normalPersonsCount = '';
    this.normalPor4Count = '';
    this.normalThaiIdCardCount = '';
    this.normalAliensCount = '';
    this.normalBirthcertificatesCount = '';
    this.normalAddressesCount = '';
    this.normalBorderpassesCount = '';
    this.normalRequestorsCount = '';
    this.normalFacePhotosCount = '';
    this.normalPassportsCount = '';
    this.normalMarriagecertificatesCount = '';
    this.normalBankruptcyCaseCount = '';
    this.normalLandAndCondominiumTitlesCount = '';
    this.normalHealthInsuranceRightsCount = '';
    this.normalAlienWorkforcesCount = '';
    this.normalNewBornBabiesCount = '';
    this.normalWorkforceDevelopmentsCount = '';
    this.normalMoacMoiFisheriesIllegalCount = '';
    this.normalEmployeeEmploymentCount = '';
    this.normalDivorceCertificatesCount = '';
    this.normalEducationBackgroundesCount = '';
    this.normalStudentsCount = '';
    this.normalJfoCaseCount = '';
    this.normalDeathCertificatesCount = '';
    this.normalchargeVictimCount = '';
    this.normaldriverLicenseCount = '';
    this.normalCorpseCount = '';
    this.normalMissingPersonCount = '';
    this.normalReportVerificationCount = '';
    this.normalPersonChangenamePrimaryCount = '';
    this.normalCrimeDefendantCompensationCount = '';
    this.normalCrimeVictimCompensationCount = '';
    this.normalCarLicenseCount = '';
    this.normalPersonChangelastnameCount = '';
    this.normalEmploymentCount = '';
    this.normalMissingPersonCaseCount = '';
    this.normalThailandPassportCount = '';
    this.normalRegistrantCount = '';
    this.normalJfoCase64Count = '';
    this.normalTravelInformationCount = '';

    this.allegationRegseizeCount = '';
    this.allegationPrisonerCount = '';
    this.allegationProbationerCount = '';
    this.allegationDjopJuvenlieCount = '';
    this.allegationNarcoticOffenderCount = '';
    this.allegationAttorneyCaseCount = '';
    this.allegationCorruptionAccusedsCount = '';
    this.allegationChargeSubjectCount = '';
    this.allegationRemandeeCount = '';
    this.allegationWarrantCount = '';
    this.allegationCriminalCount = '';
    this.allegationCrimeDefendantCompensationCount = '';
    this.allegationReleasedOffenderCount = '';
    this.allegationCojArrestWarrantsCount = '';
    this.allegationCriminalRecordCount = '';
    this.allegationArrestWarrantCount = '';
    this.allegationCriminalCaseCount = '';
    this.allegationTrafficCaseCount = '';
    this.allegationWarrantOfArrestCount = '';
    this.allegationDjopJuvenlie65Count = '';
    this.allegationDopProbationerNarcoticsCount = '';

  }
  pdfPreview() {
    this.dataHtml = {
      topCitizen: this.changeNull(this.topCitizen.join('').toString()),
      topMoiPerson: this.changeNull(this.topMoiPerson.join('').toString()),
      normalAddresses: this.changeNull(this.normalAddresses.join('').toString()),
      normalAliens: this.changeNull(this.normalAliens.join('').toString()),
      normalBirthcertificates: this.changeNull(this.normalBirthcertificates.join('').toString()),
      normalBorderpasses: this.changeNull(this.normalBorderpasses.join('').toString()),
      normalRequestors: this.changeNull(this.normalRequestors.join('').toString()),
      normalThaiIdCard: this.changeNull(this.normalThaiIdCard.join('').toString()),
      normalFacePhotos: this.changeNull(this.normalFacePhotos.join('').toString()),
      normalPassports: this.changeNull(this.normalPassports.join('').toString()),
      normalMarriagecertificates: this.changeNull(this.normalMarriagecertificates.join('').toString()),
      normalPor4: this.changeNull(this.normalPor4.join('').toString()),
      normalBankruptcyCase: this.changeNull(this.normalBankruptcyCase.join('').toString()),
      normalWorkforceDevelopments: this.changeNull(this.normalWorkforceDevelopments.join('').toString()),
      normalLandAndCondominiumTitles: this.changeNull(this.normalLandAndCondominiumTitles.join('').toString()),
      normalHealthInsuranceRights: this.changeNull(this.normalHealthInsuranceRights.join('').toString()),
      normalAlienWorkforces: this.changeNull(this.normalAlienWorkforces.join('').toString()),
      normalNewBornBabies: this.changeNull(this.normalNewBornBabies.join('').toString()),
      normalPersons: this.changeNull(this.normalPersons.join('').toString()),
      normalMoacMoiFisheriesIllegal: this.changeNull(this.normalMoacMoiFisheriesIllegal.join('').toString()),
      normalEmployeeEmployment: this.changeNull(this.normalEmployeeEmployment.join('').toString()),
      normalDivorceCertificates: this.changeNull(this.normalDivorceCertificates.join('').toString()),
      normalEducationBackgroundes: this.changeNull(this.normalEducationBackgroundes.join('').toString()),
      normalStudents: this.changeNull(this.normalStudents.join('').toString()),
      normalJfoCases: this.changeNull(this.normalJfoCases.join('').toString()),
      normalDeathCertificates: this.changeNull(this.normalDeathCertificates.join('').toString()),
      normalchargeVictim: this.changeNull(this.normalchargeVictim.join('').toString()),
      normaldriverLicense: this.changeNull(this.normaldriverLicense.join('').toString()),
      normalCorpse: this.changeNull(this.normalCorpse.join('').toString()),
      normalMissingPerson: this.changeNull(this.normalMissingPerson.join('').toString()),
      normalReportVerification: this.changeNull(this.normalReportVerification.join('').toString()),
      normalPersonChangenamePrimary: this.changeNull(this.normalPersonChangenamePrimary.join('').toString()),
      normalCrimeDefendantCompensation: this.changeNull(this.normalCrimeDefendantCompensation.join('').toString()),
      normalCrimeVictimCompensation: this.changeNull(this.normalCrimeVictimCompensation.join('').toString()),
      normalCarLicense: this.changeNull(this.normalCarLicense.join('').toString()),
      normalPersonChangelastname: this.changeNull(this.normalPersonChangelastname.join('').toString()),
      normalEmployment: this.changeNull(this.normalEmployment.join('').toString()),
      normalMissingPersonCase: this.changeNull(this.normalMissingPersonCase.join('').toString()),
      normalThailandPassport: this.changeNull(this.normalThailandPassport.join('').toString()),
      normalRegistrant: this.changeNull(this.normalRegistrant.join('').toString()),
      normalJfoCase64: this.changeNull(this.normalJfoCase64.join('').toString()),
      normalTravelInformation: this.changeNull(this.normalTravelInformation.join('').toString()),

      allegationPrisoner: this.changeNull(this.allegationPrisoner.join('').toString()), // Doc
      allegationRegseize: this.changeNull(this.allegationRegseize.join('').toString()), // Doc
      allegationProbationer: this.changeNull(this.allegationProbationer.join('').toString()),
      allegationDjopJuvenlie: this.changeNull(this.allegationDjopJuvenlie.join('').toString()),
      allegationNarcoticOffender: this.changeNull(this.allegationNarcoticOffender.join('').toString()),
      allegationAttorneyCase: this.changeNull(this.allegationAttorneyCase.join('').toString()),
      allegationCorruptionAccuseds: this.changeNull(this.allegationCorruptionAccuseds.join('').toString()),
      allegationChargeSubject: this.changeNull(this.allegationChargeSubject.join('').toString()),
      allegationRemandee: this.changeNull(this.allegationRemandee.join(''.toString())),
      allegationWarrant: this.changeNull(this.allegationWarrant.join('').toString()),
      allegationCriminal: this.changeNull(this.allegationCriminal.join('').toString()),
      allegationReleasedOffender: this.changeNull(this.allegationReleasedOffender.join('').toString()),
      allegationCojArrestWarrants: this.changeNull(this.allegationCojArrestWarrants.join('').toString()),
      allegationCriminalRecord: this.changeNull(this.allegationCriminalRecord.join('').toString()),
      allegationArrestWarrant: this.changeNull(this.allegationArrestWarrant.join('').toString()),
      allegationCriminalCase: this.changeNull(this.allegationCriminalCase.join('').toString()),
      allegationTrafficCase: this.changeNull(this.allegationTrafficCase.join('').toString()),
      allegationWarrantOfArrest: this.changeNull(this.allegationWarrantOfArrest.join('').toString()),
      allegationDjopJuvenlie65: this.changeNull(this.allegationDjopJuvenlie65.join('').toString()),
      allegationDopProbationerNarcotics: this.changeNull(this.allegationDopProbationerNarcotics.join('').toString()),

      // Count
      normalPor4Count: this.normalPor4Count,
      normalThaiIdCardCount: this.normalThaiIdCardCount,
      normalAliensCount: this.normalAliensCount,
      normalBirthcertificatesCount: this.normalBirthcertificatesCount,
      normalAddressesCount: this.normalAddressesCount,
      normalBorderpassesCount: this.normalBorderpassesCount,
      normalRequestorsCount: this.normalRequestorsCount,
      normalFacePhotosCount: this.normalFacePhotosCount,
      normalPassportsCount: this.normalPassportsCount,
      normalMarriagecertificatesCount: this.normalMarriagecertificatesCount,
      normalBankruptcyCaseCount: this.normalBankruptcyCaseCount,
      normalPersonsCount: this.normalPersonsCount,
      normalLandAndCondominiumTitlesCount: this.normalLandAndCondominiumTitlesCount,
      normalHealthInsuranceRightsCount: this.normalHealthInsuranceRightsCount,
      normalAlienWorkforcesCount: this.normalAlienWorkforcesCount,
      normalNewBornBabiesCount: this.normalNewBornBabiesCount,
      normalWorkforceDevelopmentsCount: this.normalWorkforceDevelopmentsCount,
      normalMoacMoiFisheriesIllegalCount: this.normalMoacMoiFisheriesIllegalCount,
      normalEmployeeEmploymentCount: this.normalEmployeeEmploymentCount,
      normalDivorceCertificatesCount: this.normalDivorceCertificatesCount,
      normalEducationBackgroundesCount: this.normalEducationBackgroundesCount,
      normalStudentsCount: this.normalStudentsCount,
      normalJfoCaseCount: this.normalJfoCaseCount,
      normalDeathCertificatesCount: this.normalDeathCertificatesCount,
      normalchargeVictimCount: this.normalchargeVictimCount,
      normaldriverLicenseCount: this.normaldriverLicenseCount,
      normalCorpseCount: this.normalCorpseCount,
      normalMissingPersonCount: this.normalMissingPersonCount,
      normalReportVerificationCount: this.normalReportVerificationCount,
      normalPersonChangenamePrimaryCount: this.normalPersonChangenamePrimaryCount,
      normalCrimeDefendantCompensationCount: this.normalCrimeDefendantCompensationCount,
      normalCrimeVictimCompensationCount: this.normalCrimeVictimCompensationCount,
      normalCarLicenseCount: this.normalCarLicenseCount,
      normalPersonChangelastnameCount: this.normalPersonChangelastnameCount,
      normalEmploymentCount: this.normalEmploymentCount,
      normalMissingPersonCaseCount: this.normalMissingPersonCaseCount,
      normalThailandPassportCount: this.normalThailandPassportCount,
      normalRegistrantCount: this.normalRegistrantCount,
      normalJfoCase64Count: this.normalJfoCase64Count,
      normalTravelInformationCount: this.normalTravelInformationCount,

      allegationRegseizeCount: this.allegationRegseizeCount,
      allegationPrisonerCount: this.allegationPrisonerCount,
      allegationProbationerCount: this.allegationProbationerCount,
      allegationDjopJuvenlieCount: this.allegationDjopJuvenlieCount,
      allegationNarcoticOffenderCount: this.allegationNarcoticOffenderCount,
      allegationAttorneyCaseCount: this.allegationAttorneyCaseCount,
      allegationCorruptionAccusedsCount: this.allegationCorruptionAccusedsCount,
      allegationChargeSubjectCount: this.allegationChargeSubjectCount,
      allegationRemandeeCount: this.allegationRemandeeCount,
      allegationWarrantCount: this.allegationWarrantCount,
      allegationCriminalCount: this.allegationCriminalCount,
      allegationReleasedOffenderCount: this.allegationReleasedOffenderCount,
      allegationCojArrestWarrantsCount: this.allegationCojArrestWarrantsCount,
      allegationCriminalRecordCount: this.allegationCriminalRecordCount,
      allegationArrestWarrantCount: this.allegationArrestWarrantCount,
      allegationCriminalCaseCount: this.allegationCriminalCaseCount,
      allegationTrafficCaseCount: this.allegationTrafficCaseCount,
      allegationWarrantOfArrestCount: this.allegationWarrantOfArrestCount,
      allegationDjopJuvenlie65Count: this.allegationDjopJuvenlie65Count,
      allegationDopProbationerNarcoticsCount: this.allegationDopProbationerNarcoticsCount,

      reportName: this.changeNull(this.reportName),
      reportOfDate: this.changeNull(this.reportOfDate),
      reportOfTime: this.changeNull(this.reportOfTime),
      reportBarcode: 'QP4015-12345678', // เลขที่เอกสาร(เลขบาร์โค๊ด)
    };

    const pdfReactor = new PDFreactor();
    console.log(pdfReactor);
    const config = { 

      document: this.html.getHtml(this.dataHtml),
      signPDF: {
        'keyAlias': 'le-9474320e-12b6-4d31-b5c2-96673e619c6b',
        'keystorePassword': '1234',
        'keystoreType': 'PKCS12',
        'keystoreURL': 'https://search.dxc.go.th/public/secur/keystore.pfx',
        'signingMode': 'WINCER_SIGNED'
      },
      addAttachments: true,
      addBookmarks: true,
      title: 'รายงาน SingleReport'
    };

    pdfReactor.convertAsync(config, function (id) {
      console.log(id);
      pdfReactor.getProgress(id, function (progress) {
        setTimeout(function () {
          if (!progress.finished) {
            pdfReactor.getDocument(id, function (Result) {
              console.log(Result.document)
              const iframe = document.getElementById('result');

              iframe.src = 'data:application/pdf;base64,' + Result.document;
            });
          }
        }, 9000);
      });
    });
  }
  thaiNumber(num) {
    var array = { '1': '๑', '2': '๒', '3': '๓', '4': '๔', '5': '๕', '6': '๖', '7': '๗', '8': '๘', '9': '๙', '0': '๐' };
    var str = num.toString();
    for (var val in array) {
      str = str.split(val).join(array[val]);
    }
    return str;
  }
  changeNull(selectData: string) {
    if (selectData == null || selectData == undefined) {
      return '-';
    } else {
      return selectData;
    }
  }
  /**
 * แสดงข้อมูลชื่อผู้รายงาน วันที่ เวลา
 */
  locadReportName() {
    this.reportName = localStorage.getItem('reportName');
    this.reportOfDate = moment(new Date().toString()).format('L').toString();
    this.reportOfTime = moment(new Date().toString()).format('LTS').toString();
  }
}

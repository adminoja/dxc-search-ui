import * as moment from 'moment';
import { JfoJfoCaseMetadata } from '../qmreporttemplate/dxc-model-jfo-jfo-case/dxc-model-jfo-jfo-case.interface';
import { CommercialRegistrantService } from './../../../shared/services/dxc/dbd/commercial-registrant.service';
import { RtpArrestWarrantMetadata } from '../qmreporttemplate/dxc-model-rtp-arrest-warrant/dxc-model-rtp-arrest-warrant.interface';
import { Component, OnInit, Input, ViewChild, ElementRef, Inject, OnChanges, SimpleChanges } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { Router, ActivatedRoute } from '@angular/router';
import { ThemeLight } from '../../../shared/utils/theme-light';
import { DltDriverLicenseMetadata } from '../qmreporttemplate/dxc-model-dlt-driver-license/dxc-model-dlt-driver-license.interface';
import { RtpCriminalMetadata } from '../qmreporttemplate/dxc-model-rtp-criminal/dxc-model-rtp-criminal.interface';
import { DocPrisonerMetadata } from '../qmreporttemplate/dxc-model-doc-prisoner/dxc-model-doc-prisoner.interface';
import { DjopJuvenileOffenderMetadata } from '../qmreporttemplate/dxc-model-djop-juvenile-offender/dxc-model-djop-juvenile-offender.interface';
import { DopProbationerMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-dop-probationer/dxc-model-dop-probationer.interface';
import { DopaCitizenMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-dopa-citizen/dxc-model-dopa-citizen.interface';
import { OncbNarcoticOffenderMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-oncb-narcotic-offender/dxc-model-oncb-narcotic-offender.interface';
import { RlpdRequestorsMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-rlpd-requestors/dxc-model-rlpd-requestors.interface';
import { DopaMoiPersonsMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-dopa-moi-persons/dxc-model-dopa-moi-persons.interface';
import { DopaMoiThaiidcardMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-dopa-moi-thaiidcard/dxc-model-dopa-moi-thaiidcard.interface';
import { DopaMoiAddressesMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-dopa-moi-addresses/dxc-model-dopa-moi-addresses.interface';
import { DopaMoiBirthCertificatesMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-dopa-moi-birthcertificates/dxc-model-dopa-moi-birthcertificates.interface';
import { DocRegseizeMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-doc-reg-seize/dxc-model-doc-reg-seize.interface';
import { MoacMoiFisheriesIllegalMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-moac-moi-fisheries-illegal/dxc-model-moac-moi-fisheries-illegal.interface';
import { DolLandAndCondominiumTitlesMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-dol-land-and-condominium-titles/dxc-model-dol-land-and-condominium-titles.interface';
import { DopaMoiAliensMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-dopa-moi-aliens/dxc-model-dopa-moi-aliens.interface';
import { DopaMoiBorderPassesMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-dopa-moi-border-passes/dxc-model-dopa-moi-border-passes.interface';
import { DopaMoiDeathCertificatesMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-dopa-moi-death-certificates/dxc-model-dopa-moi-death-certificates.interface';
import { DopaMoiDivorceCertificatesMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-dopa-moi-divorce-certificates/dxc-model-dopa-moi-divorce-certificates.interface';
import { DopaMoiEducationBackgroundesMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-dopa-moi-education-backgroundes/dxc-model-dopa-moi-education-backgroundes.interface';
import { DopaMoiMarriageCertificatesMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-dopa-moi-marriage-certificates/dxc-model-dopa-moi-marriage-certificates.interface';
import { DopaMoiPassportsMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-dopa-moi-passports/dxc-model-dopa-moi-passports.interface';
import { DopaMoiFacePhotosMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-dopa-moi-face-photos/dxc-model-dopa-moi-face-photos.interface';
import { DoeMoiAlienWorkforcesMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-doe-moi-alien-workforces/dxc-model-doe-moi-alien-workforces.interface';
import { DsdMoiWorkforceDevelopmentsMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-dsd-moi-workforce-developments/dxc-model-dsd-moi-workforce-developments.interface';
import { NaccMoiCorruptionAccusedsMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-nacc-moi-corruption-accuseds/dxc-model-nacc-moi-corruption-accuseds.interface';
import { AmloMoneylaunderingcaseMetadata } from '../qmreporttemplate/dxc-model-amlo-money-laundering-case/dxc-model-amlo-money-laundering-case.interface';
import { LedBankruptcyCaseMetadata } from '../qmreporttemplate/dxc-model-led-bankruptcy-case/dxc-model-led-bankruptcy-case.interface';
import { MofRegistrantMetadata } from '../qmreporttemplate/dxc-model-mof-registrant/dxc-model-mof-registrant.interface';
import { CifsAnonymousCorpseMetadata } from '../qmreporttemplate/dxc-model-cifs-anonymous-corpse/dxc-model-cifs-anonymous-corpse.interface';
import { MsdhsMoiNewBornBabiesMetadata } from '../qmreporttemplate/dxc-model-msdhs-moi-new-born-babies/dxc-model-msdhs-moi-new-born-babies.interface';
import { RtpMissingCarCaseMetadata } from '../qmreporttemplate/dxc-model-rtp-missing-car-case/dxc-model-rtp-missing-car-case.interface';
import { CifsMissingPersonMetadata } from '../qmreporttemplate/dxc-model-cifs-missing-person/dxc-model-cifs-missing_person.interface';
import { AgothAttorneyCasesMetadata } from '../qmreporttemplate/dxc-model-agoth-attorney-cases/dxc-model-agoth-attorney-cases.interface';
import { NhsoMoiHealthInsuranceRightsMetadata } from '../qmreporttemplate/dxc-model-nhso-moi-nhso-health-insurance-rights/dxc-model-nhso-moi-nhso-health-insurance-rights.interface';
import { AgothIncidentLocationMetadata } from '../qmreporttemplate/dxc-model-agoth-incident-location/dxc-model-agoth-incident-location.interface';
import { AgothCaseProsecutionAttorneyMetadata } from '../qmreporttemplate/dxc-model-agoth-case-prosecution-attorney/dxc-model-agoth-case-prosecution-attorney.interface';

import { NgForm } from '@angular/forms';
import { PrisonerService } from '../../../shared/services/dxc/doc/prisoner.service';
import { JuvenileOffenderService } from '../../../shared/services/dxc/djop/juvenile-offender.service';
import { NarcoticOffenderService } from '../../../shared/services/dxc/Oncb/narcotic-offender.service';
import { DriverlicenseService } from '../../../shared/services/dxc/dlt/driverlicense.service';
import { CitizenService } from '../../../shared/services/dxc/dopa/citizen.service';

import { MoiDopaThaiIdCardService } from '../../../shared/services/dxc/dopa/moi-dopa-thai-id-card.service';
import { MoiDopaAddressesService } from '../../../shared/services/dxc/dopa/moi-dopa-addresses.service';
import { MoiDopaBirthCertificatesService } from '../../../shared/services/dxc/dopa/moi-dopa-birth-certificates.service';
import { RegSeizeService } from '../../../shared/services/dxc/doc/reg-seize.service';
import { MoiMoacFisheriesIllegalService } from '../../../shared/services/dxc/moac/moi-moac-fisheries-illegal.service';

import { MoiDopaAliensService } from '../../../shared/services/dxc/dopa/moi-dopa-aliens.service';
import { MoiDopaBorderPassesService } from '../../../shared/services/dxc/dopa/moi-dopa-border-passes.service';
import { MoiDopaDeathCertificatesService } from '../../../shared/services/dxc/dopa/moi-dopa-death-certificates.service';
import { MoiDopaDivorceCertificatesService } from '../../../shared/services/dxc/dopa/moi-dopa-divorce-certificates.service';
import { MoiDopaEducationBackgroundesService } from '../../../shared/services/dxc/dopa/moi-dopa-education-backgroundes.service';
import { MoiDopaMarriageCertificatesService } from '../../../shared/services/dxc/dopa/moi-dopa-marriage-certificates.service';
import { MoiDopaPassportsService } from '../../../shared/services/dxc/dopa/moi-dopa-passports.service';
import { MoiDopaFacePhotosService } from '../../../shared/services/dxc/dopa/moi-dopa-face-photos.service';
import { MoiMoeStudentsService } from '../../../shared/services/dxc/moe/moi-moe-students.service';
import { MoiDoeAlienWorkforcesService } from '../../../shared/services/dxc/doe/moi-doe-alien-workforces.service';
import { WorkforceDevelopmentsService } from '../../../shared/services/dxc/dsd/workforce-developments.service';
// import { MoiDopaHealthInsuranceRightsService } from '../../../shared/services/dxc/dopa/moi-dopa-health-insurance-rights.service';
import { MoneyLaunderingCaseService } from 'src/app/core/shared/services/dxc/amlo/money-laundering-case.service';
import { BankruptcyCaseService } from '../../../shared/services/dxc/Led/bankruptcy-case.service';
import { RegistrantService } from '../../../shared/services/dxc/Mof/registrant.service';
import { MissingCarCaseService } from '../../../shared/services/dxc/rtp/missing-car-case.service';
import { MoiDopaPor4Service } from '../../../shared/services/dxc/dopa/moi-dopa-por4.service';
import { DsiWarrantService } from './../../../shared/services/dxc/Dsi/warrant.service';
import { MoiNhsoHealthInsuranceRightsService } from 'src/app/core/shared/services/dxc/Nhso/moi-nhso-health-insurance-rights.service';

import { filter } from 'rxjs/operators';
import { IManageService } from 'src/app/core/shared/services/manageservice.interface';
import { DynamicClass } from 'src/app/core/shared/utils/DynamicClass';
import { Dxc_Model_Person } from 'src/app/core/shared/models/Dxc_Model_Person';
import { RequestorsService } from 'src/app/core/shared/services/dxc/Rlpd/requestors.service';
import { AnonymousCorpseService } from 'src/app/core/shared/services/dxc/Cifs/anonymous-corpse.service';
import { LandandcondominiumtitlesService } from 'src/app/core/shared/services/dxc/dol/moi-dol-land-and-condominium-titles.service';
import { CorruptionaccusedsService } from 'src/app/core/shared/services/dxc/nacc/corruptionaccuseds.service';
import { MoiMsdhsNewBornBabiesService } from 'src/app/core/shared/services/dxc/msdhs/moi-msdhs-new-born-babies.service';
import { ArrestWarrantService } from 'src/app/core/shared/services/dxc/rtp/arrest-warrant.service';
import { CaseProsecutionAttorneyService } from 'src/app/core/shared/services/dxc/agoth/case-prosecution-attorney.service';

import { from } from 'rxjs';
import { MoiDopaPersonsService } from 'src/app/core/shared/services/dxc/dopa/moi-dopa-persons.service';
import { MissingPersonCaseService } from 'src/app/core/shared/services/dxc/rtp/missing-person-case.service';
import { RtpMissingPersonCaseMetadata } from '../qmreporttemplate/dxc-model-rtp-missing-person-case/dxc-model-rtp-missing-person-case.interface';
import { DsiWarrantMetadata } from '../qmreporttemplate/dxc-model-dsi-warrant/dxc-model-dsi-warrant.interface';
import { DbdCommercialRegistrantMetadata } from '../qmreporttemplate/dxc-model-dbd-commercialregistrant/dxc-model-dbd-commercialregistrant.interface';
import { JfoCaseService } from 'src/app/core/shared/services/dxc/jfo/jfo-case.service';
import { CifsCorpseMetadata } from '../qmreporttemplate/dxc-model-cifs-corpse/dxc-model-cifs-corpse.interface';
import { CorpseService } from 'src/app/core/shared/services/dxc/Cifs/corpse.service';
import { MissingPersonService } from '../../../shared/services/dxc/Cifs/missing-person.service';
import { CriminalService } from 'src/app/core/shared/services/dxc/rtp/criminal.service';
import { AttorneyCasesService } from 'src/app/core/shared/services/dxc/agoth/attorney-cases.service';
import { DopaMoiPor4Metadata } from '../qmreporttemplate/dxc-model-dopa-moi-por4/dxc-model-dopa-moi-por4.interface';
import { DltCarLicenseMetadata } from '../qmreporttemplate/dxc-model-dlt-car-license/dxc-model-dlt-car-license.interface';
import { CarLicenseService } from 'src/app/core/shared/services/dxc/dlt/car-license.service';
import { EmployeeEmploymentService } from 'src/app/core/shared/services/dxc/Sso/employee-employment.service';
import { SsoEmployeeEmploymentMetaData } from '../qmreporttemplate/dxc-model-sso-employee-employment/dxc-model-sso-employee-employment.interface';
import { ProbationerService } from 'src/app/core/shared/services/dxc/Dop/probationer.service';
import { ConverseSexPipe } from 'src/app/core/shared/pipe/probationer/converse-sex.pipe';
import { ConverseStatusPipe } from 'src/app/core/shared/pipe/probationer/converse-status.pipe';
import { ThaiIdcardPipe } from 'src/app/core/shared/pipe/thaiIdcard/thai-idcard.pipe';
import { ThaiDatePipe } from 'src/app/core/shared/pipe/thaidate.pipe';
import { ChargeService } from 'src/app/core/shared/services/dxc/agoth/charge.service';
import { ChargeSubjectService } from 'src/app/core/shared/services/dxc/agoth/charge-subject.service';
import { AgothChargeSubjectMetadata } from '../qmreporttemplate/dxc-model-agoth-charge-subjects/dxc-model-agoth-charge-subjects.interface';
import { IncidentLocationService } from 'src/app/core/shared/services/dxc/agoth/incident-location.service';
import { RemandeeService } from 'src/app/core/shared/services/dxc/doc/remandee.service';

import { AgothChargeMetadata } from '../qmreporttemplate/dxc-model-agoth-charge/dxc-model-agoth-charge.interface';
import { DocRemandeeMetadata } from '../qmreporttemplate/dxc-model-doc-remandee/dxc-model-doc-remandee/dxc-model-doc-remandee.interface';
import { AgothChargeVictimService } from 'src/app/core/shared/services/dxc/agoth/agoth-charge-victim.service';
import { AgothChargeVictimMetadata } from '../qmreporttemplate/dxc-model-agoth-charge-victim/dxc-model-agoth-charge-victim.interface';
import { CaseProsecutionAttorneyOrderService } from 'src/app/core/shared/services/dxc/agoth/case-prosecution-attorney-order.service';
import { AgothCaseProsecutionAttorneyOrderMetadata } from '../qmreporttemplate/dxc-model-case-prosecution-attorney-order/dxc-model-case-prosecution-attorney-order.interface';
import { ChargeVerdictServiceService } from 'src/app/core/shared/services/dxc/agoth/charge-verdict-service.service';
import { AgothchargeVerdictMetadata } from '../qmreporttemplate/dxc-model-charge-verdict/dxc-model-charge-verdict.interface';
import { AttorneySubcaseServiceService } from 'src/app/core/shared/services/dxc/agoth/attorney-subcase-service.service';
import { AgothAttorneySubcaseMetadata } from '../qmreporttemplate/dxc-model-agoth-attorney-subcase/dxc-model-agoth-attorney-subcase.interface';
import { CrimeDefendantCompensationService } from 'src/app/core/shared/services/dxc/Rlpd/crime-defendant-compensation.service';
import { RlpdCrimeDefendantCompensationMetadata } from '../qmreporttemplate/dxc-model-rlpd-crime-defendant-compensation/dxc-model-rlpd-crime-defendant-compensation.interface';
import { ReleasedPrisonersServiceService } from 'src/app/core/shared/services/dxc/doc/released-prisoners-service.service';
import { DocReleasedPrisonersMetadata } from '../qmreporttemplate/dxc-model-doc-released-prisoners/dxc-model-doc-released-prisoners.interface';
import { PrisonerImagesServiceService } from 'src/app/core/shared/services/dxc/doc/prisoner-images-service.service';
import { DocPrisonerImagesMetadata } from '../qmreporttemplate/dxc-model-doc-prisoner-images/dxc-model-doc-prisoner-images.interface';
import { MoiReportVerificationServiceService } from 'src/app/core/shared/services/dxc/Cifs/moi-report-verification-service.service';
import { CifsReportVerificationMetadata } from '../qmreporttemplate/dxc-model-cifs-report-verification/dxc-model-cifs-report-verification.interface';
import { MoiDopaPersonChangenamePrimaryServiceService } from 'src/app/core/shared/services/dxc/dopa/moi-dopa-person-changename-primary-service.service';
import { DopaMoiPersonChangenamePrimaryMetadata } from '../qmreporttemplate/dxc-model-dopa-moi-person-changename-primary/dxc-model-dopa-moi-person-changename-primary.interface';
import { RlpdCrimeVictimCompensationMetadata } from '../qmreporttemplate/dxc-model-rlpd-crime-victim-compensation/dxc-model-rlpd-crime-victim-compensation.interface';
import { CrimeVictimCompensationService } from 'src/app/core/shared/services/dxc/Rlpd/crime-victim-compensation.service';
import { ReleasedOffenderServiceService } from 'src/app/core/shared/services/dxc/oja/released-offender-service.service';
import { DocReleasedOffenderMetadata } from '../qmreporttemplate/dxc-model-released-offender/dxc-model-released-offender.interface';
import { ConverseNullPipe } from 'src/app/core/shared/pipe/probationer/converse-null.pipe';
import { ConverseDatePipe } from 'src/app/core/shared/pipe/converse-date.pipe';
import { DirectoryDimensionCaseService } from 'src/app/core/shared/services/dxc/agoth/directory-dimension-case.service';
import { IdbDirectoryDimensionCaseMetadata } from '../qmreporttemplate/dxc-model-idb-directory-dimension-case/dxc-model-idb-directory-dimension-case.interface';
import { DirectoryDimensionPersonService } from 'src/app/core/shared/services/dxc/agoth/directory-dimension-person.service';
import { IdbDirectoryDimensionPersonMetadata } from '../qmreporttemplate/dxc-model-idb-directory-dimension-person/dxc-model-idb-directory-dimension-person.interface';
import { MoiDopaPersonFirstnameLastnameService } from 'src/app/core/shared/services/dxc/dopa/moi-dopa-person-firstname-lastname.service';
import { DopaMoiDopaPersonFirstnameLastnameMetadata } from '../qmreporttemplate/dxc-model-dopa-moi-dopa-person-firstname-lastname/dxc-model-dopa-moi-dopa-person-firstname-lastname.interface';
import { MoiDopaPersonChangelastnameService } from 'src/app/core/shared/services/dxc/dopa/moi-dopa-person-changelastname.service';
import { DopaMoiPersonChangelastnameMetadata } from '../qmreporttemplate/dxc-model-dopa-moi-dopa-person-changelastname/dxc-model-dopa-moi-dopa-person-changelastname.interface';
import { EmploymentService } from 'src/app/core/shared/services/dxc/Sso/employment.service';
import { SsoEmploymentMetaData } from '../qmreporttemplate/dxc-model-sso-employment/dxc-model-sso-employment.interface';
import { ConverseTimePipe } from 'src/app/core/shared/pipe/converse-time.pipe';
// import { invalid } from '@angular/compiler/src/render3/view/util';
import { ChangeDatePipe } from 'src/app/core/shared/pipe/change-date.pipe';
import { CrippleService } from 'src/app/core/shared/services/dxc/dep/cripple.service';
import { DepMoiCrippleMetadata } from '../qmreporttemplate/dxc-model-dep-moi-cripple/dxc-model-dep-moi-cripple.interface';
import { DcaMoiThailanfPassportMetadata } from '../qmreporttemplate/dxc-model-dca-moi-thailand-passport/dxc-model-dca-moi-thailand-passport.interface';
import { ArrestWarrantsService } from 'src/app/core/shared/services/dxc/coj/arrest-warrants.service';
import { CojArrestWarrantsMetadata } from '../qmreporttemplate/dxc-model-coj-arrest-warrants/dxc-model-coj-arrest-warrants.interface';
import { JudgementSummarysService } from 'src/app/core/shared/services/dxc/coj/judgement-summarys.service';
import { CojJudgementSummarysMetadata } from '../qmreporttemplate/dxc-model-coj-judgement-summarys/dxc-model-coj-judgement-summarys.interface';
import { ThailandPassportService } from 'src/app/core/shared/services/dxc/dca/thailand-passport.service';
import { MofRegisterOfTaxpayersMetadata } from '../qmreporttemplate/dxc-model-mof-register-of-taxpayers/dxc-model-mof-register-of-taxpayers.interface';
import { RegisterOfTaxpayersService } from 'src/app/core/shared/services/dxc/Mof/register-of-taxpayers.service';
import { ConverseCourtPipe } from 'src/app/core/shared/pipe/court/converse-court.pipe';
import { JfoCase64Service } from 'src/app/core/shared/services/dxc/jfo/jfo-case64.service';
import { JfoJfoCase64Metadata } from '../qmreporttemplate/dxc-model-jfo-jfo-case64/dxc-model-jfo-jfo-case64.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JudgementService } from 'src/app/core/shared/services/dxc/coj/judgement.service';
import { CojJudgementMetadata } from '../qmreporttemplate/dxc-model-coj-judgement/dxc-model-coj-judgement.interface';
import { DomSanitizer } from '@angular/platform-browser';
import { RtpCriminalCaseMetadata } from '../qmreporttemplate/dxc-model-rtp-criminal-case/dxc-model-rtp-criminal-case.interface';
import { RtpTrafficCaseMetadata } from '../qmreporttemplate/dxc-model-rtp-traffic-case/dxc-model-rtp-traffic-case.interface';
import { RtpCriminalRecordMetadata } from '../qmreporttemplate/dxc-model-rtp-criminal-record/dxc-model-rtp-criminal-record.interface';
import { RtpTravelInformationMetadata } from '../qmreporttemplate/dxc-model-rtp-travel-information/dxc-model-rtp-travel-information.interface';
import { CriminalCaseService } from 'src/app/core/shared/services/dxc/rtp/criminal-case.service';
import { TravelInformationService } from 'src/app/core/shared/services/dxc/rtp/travel-information.service';
import { TrafficCaseService } from 'src/app/core/shared/services/dxc/rtp/traffic-case.service';
import { CriminalRecordService } from 'src/app/core/shared/services/dxc/rtp/criminal-record.service';
import { WarrantOfArrestService } from 'src/app/core/shared/services/dxc/rtp/warrant-of-arrest.service';
import { RtpWarrantOfArrestMetadata } from '../qmreporttemplate/dxc-model-rtp-warrant-of-arrest/dxc-model-rtp-warrant-of-arrest.interface';
import { JuvenileOffender65Service } from 'src/app/core/shared/services/dxc/djop/juvenile-offender65.service';
import { DjopJuvenileOffender65Metadata } from '../qmreporttemplate/dxc-model-djop-juvenile-offender65/dxc-model-djop-juvenile-offender65.interface';
import { SelectedHospitalService } from 'src/app/core/shared/services/dxc/Sso/selected-hospital.service';
import { SsolSsoSelectedHospitalMetaData } from '../qmreporttemplate/dxc-model-sso-selected-hospital/dxc-model-sso-selected-hospital.interface';
import { PrisonerBankruptService } from 'src/app/core/shared/services/dxc/doc/prisoner-bankrupt.service';
import { DocPrisonerBankruptMetadata } from '../qmreporttemplate/dxc-model-doc-prisoner-bankrupt/dxc-model-doc-prisoner-bankrupt.interface';
import { ProbationerNarcoticsService } from 'src/app/core/shared/services/dxc/Dop/probationer-narcotics.service';
import { DopProbationerNarcoticsMetadata } from '../qmreporttemplate/dxc-model-dop-probationer-narcotics/dxc-model-dop-probationer-narcotics.interface';
import { AbsolutePrisonerInformationBeforeReleaseOnProbationService } from 'src/app/core/shared/services/dxc/doc/absolute-prisoner-information-before-release-on-probation.service';
import { DocAbsolutePrisonerInformationBeforeReleaseOnProbationMetadata } from '../qmreporttemplate/dxc-model-doc-absolute-prisoner-information-before-release-on-probation/dxc-model-doc-absolute-prisoner-information-before-release-on-probation.interface';
import { FactFindingReportService } from 'src/app/core/shared/services/dxc/Dop/fact-finding-report.service';
import { DopFactFindingReportMetadata } from '../qmreporttemplate/dxc-model-dop-fact-finding-report/dxc-model-dop-fact-finding-report.interface';
import { MoeMoiStudentsMetadata } from '../qmreporttemplate/dxc-model-moe-moi-students/dxc-model-moe-moi-students.interface';
import { MoiMoeGraduatesService } from 'src/app/core/shared/services/dxc/moe/moi-moe-graduates.service';
import { MoeMoiGraduatesMetadata } from '../qmreporttemplate/dxc-model-moi-moe-graduates/dxc-model-moi-moe-graduates.interface';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';


declare var $;
@Component({
  selector: 'app-dxc-ui-0021',
  templateUrl: './dxc-ui-0021.component.html',
  styleUrls: ['./dxc-ui-0021.component.css'],
  providers: [
    DltCarLicenseMetadata,
    DltDriverLicenseMetadata,
    RtpCriminalMetadata,
    DocPrisonerMetadata,
    DjopJuvenileOffenderMetadata,
    DopProbationerMetadata,
    DopaCitizenMetadata,
    OncbNarcoticOffenderMetadata,
    RlpdRequestorsMetadata,
    DopaMoiPersonsMetadata,
    DopaMoiThaiidcardMetadata,
    DopaMoiAddressesMetadata,
    DopaMoiBirthCertificatesMetadata,
    DocRegseizeMetadata,
    MoacMoiFisheriesIllegalMetadata,
    DolLandAndCondominiumTitlesMetadata,
    DopaMoiAliensMetadata,
    DopaMoiBorderPassesMetadata,
    DopaMoiDeathCertificatesMetadata,
    DopaMoiDivorceCertificatesMetadata,
    DopaMoiEducationBackgroundesMetadata,
    DopaMoiMarriageCertificatesMetadata,
    DopaMoiPassportsMetadata,
    DopaMoiFacePhotosMetadata,
    MoeMoiStudentsMetadata,
    DoeMoiAlienWorkforcesMetadata,
    DsdMoiWorkforceDevelopmentsMetadata,
    NaccMoiCorruptionAccusedsMetadata,
    AmloMoneylaunderingcaseMetadata,
    LedBankruptcyCaseMetadata,
    MofRegistrantMetadata,
    CifsAnonymousCorpseMetadata,
    MsdhsMoiNewBornBabiesMetadata,
    RtpMissingCarCaseMetadata,

    RtpArrestWarrantMetadata,
    RtpMissingPersonCaseMetadata,
    DsiWarrantMetadata,
    DbdCommercialRegistrantMetadata,
    JfoJfoCaseMetadata,
    CifsCorpseMetadata,
    CifsMissingPersonMetadata,
    AgothAttorneyCasesMetadata,
    DopaMoiPor4Metadata,
    SsoEmployeeEmploymentMetaData,
    NhsoMoiHealthInsuranceRightsMetadata,
    AgothChargeSubjectMetadata,
    AgothIncidentLocationMetadata,
    AgothChargeMetadata,
    DocRemandeeMetadata,
    AgothChargeVictimMetadata,
    AgothCaseProsecutionAttorneyMetadata,
    AgothCaseProsecutionAttorneyOrderMetadata,
    AgothchargeVerdictMetadata,
    AgothAttorneySubcaseMetadata,
    RlpdCrimeDefendantCompensationMetadata,
    DocReleasedPrisonersMetadata,
    DocPrisonerImagesMetadata,
    CifsReportVerificationMetadata,
    DopaMoiPersonChangenamePrimaryMetadata,
    RlpdCrimeVictimCompensationMetadata,
    DocReleasedOffenderMetadata,
    IdbDirectoryDimensionCaseMetadata,
    IdbDirectoryDimensionPersonMetadata,
    DopaMoiDopaPersonFirstnameLastnameMetadata,
    DopaMoiPersonChangelastnameMetadata,
    SsoEmploymentMetaData,
    DepMoiCrippleMetadata,
    DcaMoiThailanfPassportMetadata,
    CojArrestWarrantsMetadata,
    CojJudgementSummarysMetadata,
    MofRegisterOfTaxpayersMetadata,
    JfoJfoCase64Metadata,
    RtpCriminalCaseMetadata,
    RtpTrafficCaseMetadata,
    RtpCriminalRecordMetadata,
    RtpTravelInformationMetadata,
    CojJudgementMetadata,
    RtpWarrantOfArrestMetadata,
    DjopJuvenileOffender65Metadata,
    SsolSsoSelectedHospitalMetaData,
    DocPrisonerBankruptMetadata,
    DopProbationerNarcoticsMetadata,
    DocAbsolutePrisonerInformationBeforeReleaseOnProbationMetadata,
    DopFactFindingReportMetadata,
    MoeMoiGraduatesMetadata,
    
  ]
})

export class DxcUi0021Component implements OnInit, OnChanges {

  @ViewChild('closeAddExpenseModal', { static: false }) closeAddExpenseModal: ElementRef;
  @Input() myModalProperty: string;

  dataTable: any;
  dtOptions: any;
  tableData = [];
  @ViewChild('dataTable', { static: true }) table;

  theme: ThemeLight;
  shouldShow: any;
  title: string; // ชื่อหน่วยงานย่อย
  remark: string; // หมายเหตุ
  img: string; // รูปภาพหน่วยงานย่อย
  departmentImg: string; // รูปภาพหน่วยงานหลัก
  departmentTitle: string; // ชื่อหน่วยงานหลัก

  person: Dxc_Model_Person;
  obj: any;
  objRow: string;

  result: any;

  source: any;
  sub: any;
  title_sub: any;
  model_sub: any;
  cells: any;
  Basic_search: any;
  search_title: string;
  queryParam: string;
  selectData: any;

  htmlReport: any;
  viewhtmlReport: any;

  f: NgForm;

  reportName: any;
  // pagination
  beginPage = 10; // Size
  page: number = 0;
  last: number;
  totalElements: number = 0;
  pages: Array<number>;

  isFirst: boolean = true;
  isPrevious: boolean = true;
  isNext: boolean = true;
  isLast: boolean = true;

  totalPages: number = 0;
  pageStatus: boolean = false;
  // Offset
  firstOffset: number = 0;
  lastOffset: number = 0;
  pageOrder: number = 0;

  loadAPI: Promise<any>;

  IsuploadSearch: boolean;

  errorStatus: number;
  debugMessage: string;
  isValid: boolean;
  citizen: string;
  selectedCivil: string = '';
  civilDatas:any = [];
  successCivil: string = '';
  htmlStr: string[] = [];
  offset: any;
  fnameLname: any;
  baseUrl: string = environment.Dxc_Model_Dopa_MoiDopaPersonFirstnameLastname[0].url.production;
  datas: any;
  carvehTypeRefs:any = [];
  selectedVehicleTypeRef: string = '';
  successVehicleTypeRef: string = 'เลือกประเภท';
  carOffLocCodes: any = [];
  province: any = [];
  selectedCarOffLocCode: string = '';
  successCarOffLocCode: string = 'เลือกจังหวัด';
  selectedIndex: number = null;
  successCourt: string = '';

  constructor(private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private prisonerService: PrisonerService,
    private carlicenseService: CarLicenseService,
    private driverlicenseService: DriverlicenseService,
    private juvenileOffenderService: JuvenileOffenderService,
    private probationerService: ProbationerService,
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
    private MoiDopaBorderPassesService: MoiDopaBorderPassesService,
    private MoiDopaAliensService: MoiDopaAliensService,
    private borderPassesService: MoiDopaBorderPassesService,
    private moiDopaDeathCertificatesService: MoiDopaDeathCertificatesService,
    private moiDopaDivorceCertificatesService: MoiDopaDivorceCertificatesService,
    private moiDopaEducationBackgroundesService: MoiDopaEducationBackgroundesService,
    private marriageCertificatesService: MoiDopaMarriageCertificatesService,
    private moiDopaPassportsService: MoiDopaPassportsService,
    private moiDopaFacePhotosService: MoiDopaFacePhotosService,
    private moiDoeAlienWorkforcesService: MoiDoeAlienWorkforcesService,
    // private MoiDopaHealthInsuranceRightsService: MoiDopaHealthInsuranceRightsService,
    private moiDsdWorkforceDevelopmentsService: WorkforceDevelopmentsService,
    // private moiDopaHealthInsuranceRightsService: MoiDopaHealthInsuranceRightsService,
    private moneyLaunderingCaseService: MoneyLaunderingCaseService,
    private bankruptcyCaseService: BankruptcyCaseService,
    private registrantService: RegistrantService,
    private anonymousCorpseService: AnonymousCorpseService,
    private corruptionaccusedsService: CorruptionaccusedsService,
    private moiMsdhsNewBornBabiesService: MoiMsdhsNewBornBabiesService,
    private missingcarcaseService: MissingCarCaseService,
    private arrestWarrantService: ArrestWarrantService,
    private moiDopaPor4Service: MoiDopaPor4Service,
    private missingPersonCaseService: MissingPersonCaseService,
    private dsiWarrantService: DsiWarrantService,
    private commercialRegistrantService: CommercialRegistrantService,
    private jfoCaseService: JfoCaseService,
    private corpseService: CorpseService,
    private missingPersonService: MissingPersonService,
    private criminalService: CriminalService,
    private attorneyCasesService: AttorneyCasesService,
    private employeeemploymentService: EmployeeEmploymentService,
    private moiNhsoHealthInsuranceRightsService: MoiNhsoHealthInsuranceRightsService,
    private chargeService: ChargeService,
    private chargeSubjectService: ChargeSubjectService,
    private incidentLocationService: IncidentLocationService,
    private remandeeService: RemandeeService,
    private chargeVictimService: AgothChargeVictimService,
    private caseProsecutionAttorneyService: CaseProsecutionAttorneyService,
    private caseProsecutionAttorneyOrderService: CaseProsecutionAttorneyOrderService,
    private chargeVerdictService: ChargeVerdictServiceService,
    private attorneySubcaseService: AttorneySubcaseServiceService,
    private crimeDefendantCompensationService: CrimeDefendantCompensationService,
    private releasedPrisonersService: ReleasedPrisonersServiceService,
    private prisonerImagesService: PrisonerImagesServiceService,
    private reportVerificationService: MoiReportVerificationServiceService,
    private moiDopaPersonChangenamePrimaryService: MoiDopaPersonChangenamePrimaryServiceService,
    private crimeVictimCompensationService: CrimeVictimCompensationService,
    private releasedOffenderService: ReleasedOffenderServiceService,
    private directoryDimensionCaseService: DirectoryDimensionCaseService,
    private directoryDimensionPersonService: DirectoryDimensionPersonService,
    private moiDopaPersonFirstnameLastnameService: MoiDopaPersonFirstnameLastnameService,
    private moiDopaPersonChangelastnameService: MoiDopaPersonChangelastnameService,
    private employmentService: EmploymentService,
    private moiDepcrippleService: CrippleService,
    private moiMfaThailandPassporService: ThailandPassportService,
    private cojArrestWarrantsService: ArrestWarrantsService,
    private cojJudgementSummarysService: JudgementSummarysService,
    private registerOfTaxpayersService: RegisterOfTaxpayersService,
    private jfoCase64Service: JfoCase64Service,
    private criminalCaseService: CriminalCaseService,
    private travelInformationService: TravelInformationService,
    private trafficCaseService: TrafficCaseService,
    private criminalRecordService: CriminalRecordService,
    private cojJudgementService: JudgementService,
    private warrantOfArrestService: WarrantOfArrestService,
    private juvenileOffender65Service: JuvenileOffender65Service,
    private selectedHospitalService: SelectedHospitalService,
    private prisonerBankruptService: PrisonerBankruptService,
    private probationerNarcoticsService: ProbationerNarcoticsService,
    private absolutePrisonerInformationBeforeReleaseOnProbationService: AbsolutePrisonerInformationBeforeReleaseOnProbationService,
    private factFindingReportService: FactFindingReportService,
    private moiMoeStudentsService: MoiMoeStudentsService,
    private moiMoeGraduatesService: MoiMoeGraduatesService,

    private ReportDltcarLicense: DltCarLicenseMetadata,
    private ReportDltDriverLicense: DltDriverLicenseMetadata,
    private ReportRtpCriminal: RtpCriminalMetadata,
    private ReportDocPrisoner: DocPrisonerMetadata,
    private ReportJuvenileOffender: DjopJuvenileOffenderMetadata,
    private ReportDopProbationer: DopProbationerMetadata,
    private ReportDopaCitizen: DopaCitizenMetadata,
    private ReportOncbNarcoticOffender: OncbNarcoticOffenderMetadata,
    private ReportRlpdRequestors: RlpdRequestorsMetadata,
    private ReportDopaMoiPersons: DopaMoiPersonsMetadata,
    private ReportDopaMoiThaiidcard: DopaMoiThaiidcardMetadata,
    private ReportMoiDopaAddresses: DopaMoiAddressesMetadata,
    private Reportbirthcertificates: DopaMoiBirthCertificatesMetadata,
    private ReportDocRegseize: DocRegseizeMetadata,
    private ReportMoacMoiFisheriesIllegal: MoacMoiFisheriesIllegalMetadata,
    private ReportDolLandAndCondominiumTitles: DolLandAndCondominiumTitlesMetadata,
    private ReportDopaMoiAliens: DopaMoiAliensMetadata,
    private ReportborderPasses: DopaMoiBorderPassesMetadata,
    private ReportDopaMoiDeathCertificates: DopaMoiDeathCertificatesMetadata,
    private ReportDopaMoiDivorceCertificates: DopaMoiDivorceCertificatesMetadata,
    private ReportDopaEducationBackgroundes: DopaMoiEducationBackgroundesMetadata,
    private ReportMarriageCertificates: DopaMoiMarriageCertificatesMetadata,
    private ReportMoiDopaPassports: DopaMoiPassportsMetadata,
    private ReportMoiDopaFacePhotos: DopaMoiFacePhotosMetadata,
    private ReportMoeStudents: MoeMoiStudentsMetadata,
    private ReportDoeMoiAlienWorkforces: DoeMoiAlienWorkforcesMetadata,
    private ReportMoiDsdWorkforceDevelopments: DsdMoiWorkforceDevelopmentsMetadata,
    private ReportAmloMoneyLaunderingCase: AmloMoneylaunderingcaseMetadata,
    private ReportLedBankruptcyCase: LedBankruptcyCaseMetadata,
    private ReportMofRegistrant: MofRegistrantMetadata,
    private ReportCifsAnonymousCorpse: CifsAnonymousCorpseMetadata,
    private ReportNaccCorruptionaccuseds: NaccMoiCorruptionAccusedsMetadata,
    private ReportMsdhsMoiNewBornBabies: MsdhsMoiNewBornBabiesMetadata,
    private ReportRtpMissingCarCase: RtpMissingCarCaseMetadata,
    private ReportRtpArrestWarrant: RtpArrestWarrantMetadata,
    private ReportRtpMissingPersonCase: RtpMissingPersonCaseMetadata,
    private ReportDsiWarrant: DsiWarrantMetadata,
    private ReportDbdCommercialRegistrant: DbdCommercialRegistrantMetadata,
    private ReportJfoJfoCase: JfoJfoCaseMetadata,
    private ReportCifsCifsCorpse: CifsCorpseMetadata,
    private ReportCifsMissingPerson: CifsMissingPersonMetadata,
    private ReportAgothAttorneyCases: AgothAttorneyCasesMetadata,
    private ReportDopaMoiPor4: DopaMoiPor4Metadata,
    private ReportSsoEmployeeEmployment: SsoEmployeeEmploymentMetaData,
    private ReportNhsoMoiHealthInsuranceRights: NhsoMoiHealthInsuranceRightsMetadata,
    private ReportAgothChargeSubject: AgothChargeSubjectMetadata,
    private ReportAgothChargeVictim: AgothChargeVictimMetadata,
    private ReportAgothCaseProsecutionAttorney: AgothCaseProsecutionAttorneyMetadata,
    private ReportAgothIncidentLocation: AgothIncidentLocationMetadata,
    private ReportDocRemandee: DocRemandeeMetadata,
    private ReportAgothCharge: AgothChargeMetadata,
    private ReportCaseProsecutionAttorneyOrder: AgothCaseProsecutionAttorneyOrderMetadata,
    private ReportAgothChargeVerdict: AgothchargeVerdictMetadata,
    private ReportAgothAttorneySubcase: AgothAttorneySubcaseMetadata,
    private ReportRlpdCrimeDefendantCompensation: RlpdCrimeDefendantCompensationMetadata,
    private ReportDocReleasedPrisoners: DocReleasedPrisonersMetadata,
    private ReportDocPrisonerImages: DocPrisonerImagesMetadata,
    private ReportCifsReportVerification: CifsReportVerificationMetadata,
    private ReportMoiDopaPersonChangenamePrimary: DopaMoiPersonChangenamePrimaryMetadata,
    private ReportRlpdCrimeVictimCompensation: RlpdCrimeVictimCompensationMetadata,
    private ReportDocReleasedOffender: DocReleasedOffenderMetadata,
    private ReportIdbDirectoryDimensionCase: IdbDirectoryDimensionCaseMetadata,
    private ReportIdbDirectoryDimensionPerson: IdbDirectoryDimensionPersonMetadata,
    private ReportMoiDopaPersonFirstnameLastname: DopaMoiDopaPersonFirstnameLastnameMetadata,
    private ReportMoiDopaPersonChangelastname: DopaMoiPersonChangelastnameMetadata,
    private ReportSsoEmployment: SsoEmploymentMetaData,
    private ReportMoiDepcripple: DepMoiCrippleMetadata,
    private ReportMoiMfaThailandPassport: DcaMoiThailanfPassportMetadata,
    private ReportCojArrestWarrants: CojArrestWarrantsMetadata,
    private ReportCojJudgementSummarys: CojJudgementSummarysMetadata,
    private ReportMofRegisterOfTaxpayers: MofRegisterOfTaxpayersMetadata,
    private ReportJfoJfoCase64: JfoJfoCase64Metadata,
    private ReportRtpCriminalCase: RtpCriminalCaseMetadata,
    private ReportRtpTravelInformation: RtpTravelInformationMetadata,
    private ReportRtpTrafficCase: RtpTrafficCaseMetadata,
    private ReportRtpCriminalRecord: RtpCriminalRecordMetadata,
    private ReportCojJudgement: CojJudgementMetadata,
    private ReportRtpWarrantOfArrest: RtpWarrantOfArrestMetadata,
    private ReportDjopJuvenileOffender65: DjopJuvenileOffender65Metadata,
    private ReportSsoSelectedHospital: SsolSsoSelectedHospitalMetaData,
    private ReportDocPrisonerBankrupt: DocPrisonerBankruptMetadata,
    private ReportDopProbationerNarcotics: DopProbationerNarcoticsMetadata,
    private ReportDocAbsolutePrisonerInformationBeforeReleaseOnProbation: DocAbsolutePrisonerInformationBeforeReleaseOnProbationMetadata,
    private ReportDopFactFindingReport: DopFactFindingReportMetadata,
    private ReportMoeGraduates: MoeMoiGraduatesMetadata,
    private routeLink: Router,
    public dialog: MatDialog,
    private convertSex: ConverseSexPipe,
    private converseStatus: ConverseStatusPipe,
    private convertDate: ThaiDatePipe,
    private convertNull: ConverseNullPipe,
    private changeDate: ConverseDatePipe,
    private routeparams: ActivatedRoute,
    private converseTime: ConverseTimePipe,
    private transformDate: ChangeDatePipe,
    private converseCourt: ConverseCourtPipe,
    // private sanitizer: DomSanitizer
  ) {

  }
  ngOnChanges(changes: SimpleChanges): void {

  }

  setOffSet() {
    this.firstOffset = (this.page * this.beginPage) + 1;
    this.lastOffset = (this.firstOffset + this.beginPage) - 1;
  }
  setOffSetLast() {
    this.firstOffset = (this.page * this.beginPage) + 0;
    this.lastOffset = this.totalElements;
  }
  ngOnInit() {
    this.loadAPI = new Promise((resolve) => {
      this.loadScript();
      resolve(true);
    });
    
    localStorage.setItem('report_name', 'รายงาน Single Report');
    // this.theme = new ThemeLight;
    // this.theme.loadScripts();
    this.route.params.subscribe(
      params => this.lblDatabase_list(params['dbname'], params['remark'], params['img'], params['departmentImg'], params['departmentTitle'])
    );

    this.isValid = true;
    this.routeparams.params.subscribe(
      params => this.lblDatabase_list(params['dbname'], params['remark'], params['img'], params['departmentImg'], params['departmentTitle'], params['citizenCardNumber']));
    this.cojJudgementSummarysService.getCourt().subscribe(data =>{
      this.civilDatas = data['content']
      localStorage.setItem('civilDatas',JSON.stringify(this.civilDatas));
    });

    this.carlicenseService.getVehicleTypeRef().subscribe(data => {
      this.carvehTypeRefs = data;
      // localStorage.setItem('vehTypeRefs',JSON.stringify(this.vehTypeRefs));
    });

    this.carlicenseService.getOffLocCode().subscribe(data => {
      this.carOffLocCodes = data;
      this.carOffLocCodes.sort((a, b) => {
        return a.value.localeCompare(b.value, 'th')
      });
      console.log(this.carOffLocCodes)
    });

  }

  lblDatabase_list(title: string, remark: string, img: string, departmentImg: string, departmentTitle: string, citizenCardNumber?: string) {
    this.title = title;

    this.remark = remark;
    this.img = img;
    this.departmentImg = departmentImg;
    this.departmentTitle = departmentTitle;
    this.citizen = citizenCardNumber;
    this.obj = [];
    this.objRow = '';

    this.Basic_search = [];
    this.cells = [];

    this.source = Object.keys(environment.qm.sub[0]);

    for (const entry of this.source) {

      this.sub = Object.keys(environment.qm.sub[0][entry].sub[0]);
      for (const entry_sub of this.sub) {
        this.title_sub = environment.qm.sub[0][entry].sub[0][entry_sub].title;
        let model;
        model = environment.qm.sub[0][entry].sub[0][entry_sub].model;

        if (this.title == this.title_sub) {
          this.cells = environment[model][0].grid[0].cells;
          this.Basic_search = environment[model][0].basicSearch;
          this.model_sub = model;
        }
      }
    }
  }

  btnLocalsearchDetial_Click() {
    this.router.navigate(['/localsearch-report']);
    this.closeAddExpenseModal.nativeElement.click();
  }
  setPage(i, event) {
    event.preventDefault();
    this.page = i;
    this.onLoadData(this.f, this.page);
  }
  firstPage(page, event) {
    this.isFirst = true;
    this.isPrevious = true;
    this.isNext = false;
    this.isLast = false;

    this.pageStatus = true; // แสดงข้อความกำลังค้นหา
    event.preventDefault();
    this.page = page;
    this.onLoadData(this.f, this.page);

  }
  previousPage(page, event) {
    this.isFirst = false;
    this.isPrevious = false;
    this.isNext = false;
    this.isLast = false;

    this.pageStatus = true; // แสดงข้อความกำลังค้นหา
    event.preventDefault();
    this.page = page - 1;
    this.onLoadData(this.f, this.page);
  }
  nextPage(page, event) {
    this.isFirst = false;
    this.isPrevious = false;
    this.isNext = false;
    this.isLast = false;

    this.pageStatus = true; // แสดงข้อความกำลังค้นหา
    event.preventDefault();
    this.page = page + 1;
    this.onLoadData(this.f, this.page);
  }
  lastPage(lastPage, event) {
    this.isFirst = false;
    this.isPrevious = false;
    this.isNext = true;
    this.isLast = false;

    this.pageStatus = true; // แสดงข้อความกำลังค้นหา
    event.preventDefault();
    this.page = lastPage - 1;
    this.last = lastPage - 1;
    this.onLoadData(this.f, this.page);
  }
  onBackPage() {
    this.router.navigate(['dxcui0014/dxcui0014/']);
  }
  btnLocalsearch_Click(f: NgForm, firstpage, event) {
    this.IsuploadSearch = true;
    this.isFirst = true;
    this.isPrevious = true;
    this.isNext = false;
    this.isLast = false;
    this.pageStatus = true;
    event.preventDefault();
    this.page = firstpage;
    if (this.title === 'ผู้ร้องทุกข์') {
      if (f.value['personGivenName'] !== '' && f.value['personSurName'] !== '') {
        f.value['firstNameLastName'] = f.value['personGivenName'] + ' ' + f.value['personSurName']
        f.value['personGivenName'] = ''
        f.value['personSurName'] = ''
        this.onLoadData(f, this.page);
      } else {
        this.onLoadData(f, this.page);
      }
    } else if (this.title === 'ข้อมูลบุคคลล้มละลาย') {
      if (f.value['defendantName'] !== '' && f.value['defendantSurname'] !== '') {
        f.value['fNameLName'] = f.value['defendantName'] + ' ' + f.value['defendantSurname']
        f.value['defendantName'] = ''
        f.value['defendantSurname'] = ''
        this.onLoadData(f, this.page);
      } else {
        this.onLoadData(f, this.page);
      }
    } else if (this.title === 'ฐานข้อมูลคนนิรนาม') {
      if (f.value['personGivenName'] !== '' && f.value['personSurName'] !== '') {
        f.value['fullName'] = f.value['personGivenName'] + ' ' + f.value['personSurName']
        f.value['personGivenName'] = ''
        f.value['personSurName'] = ''
        this.onLoadData(f, this.page);
      } else {
        this.onLoadData(f, this.page);
      }
    } else if(this.title === 'ฐานข้อมูลผู้กระทำผิดกฎหมาย (ฐานข้อมูลเก่า ระบบ Police)' || this.title === 'ประวัติบุคคลสูญหาย (ฐานข้อมูลเก่า ระบบ Police)' || this.title === 'ประวัติคดียาเสพติด' ||
    this.title === 'ผู้ถูกคุมประพฤติ' || this.title === 'เด็กหรือเยาวชนผู้กระทำผิด' || this.title === 'ผู้ต้องขัง (คดีที่พิพากษาแล้ว)' || this.title === 'ผู้ต้องขัง (คดีที่ยังไม่พิพากษา)') {
      if(f.value['firstName'] !== '' && f.value['lastName'] !== '') {
        f.value['fullName'] = f.value['firstName'] + ' '  + f.value['lastName']
        f.value['firstName'] = '' 
        f.value['lastName'] = ''
        this.onLoadData(f, this.page);
      } else {
        this.onLoadData(f, this.page);
      }
    } else if (this.title === 'ฐานข้อมูลสารบบคดี (มิติคดี)') {
      if (f.value['generallcBlackFile'] !== '' && f.value['generallcRedFile'] !== '' && f.value['generalInqnumber'] === '') {
        f.value['fullName'] = f.value['generallcBlackFile'] + ' ' + f.value['generallcRedFile']
        f.value['generallcBlackFile'] = ''
        f.value['generallcRedFile'] = ''
        this.onLoadData(f, this.page);
      } else if (f.value['generallcBlackFile'] !== '' && f.value['generallcRedFile'] === '' && f.value['generalInqnumber'] !== '') {
        console.log(f.value)
        f.value['blackFileAndInqnumber'] = f.value['generallcBlackFile'] + ' ' + f.value['generalInqnumber']
        f.value['generallcBlackFile'] = ''
        f.value['generalInqnumber'] = ''
        this.onLoadData(f, this.page);
      } else if (f.value['generallcBlackFile'] === '' && f.value['generallcRedFile'] !== '' && f.value['generalInqnumber'] !== '') {
        f.value['RedFileAndInqnumber'] = f.value['generallcRedFile'] + ' ' + f.value['generalInqnumber']
        f.value['generallcRedFile'] = ''
        f.value['generalInqnumber'] = ''
        this.onLoadData(f, this.page);
      } else if (f.value['generallcBlackFile'] !== '' && f.value['generallcRedFile'] !== '' && f.value['generalInqnumber'] !== '') {
        f.value['BlackFileRedFileAndInqnumber'] = f.value['generallcBlackFile'] + ' ' + f.value['generallcRedFile'] + ' ' + f.value['generalInqnumber']
        f.value['generallcBlackFile'] = ''
        f.value['generallcRedFile'] = ''
        f.value['generalInqnumber'] = ''
        this.onLoadData(f, this.page);
      } else {
        this.onLoadData(f, this.page);
      }
    } else if (this.title === 'ฐานข้อมูลสารบบคดี (มิติคน)') {
      if (f.value['accusedsName'] !== '' && f.value['accusedsSurname'] !== '' && f.value['accusedCitizenId'] === '') {
        f.value['fullName'] = f.value['accusedsName'] + ' ' + f.value['accusedsSurname']
        f.value['accusedsName'] = ''
        f.value['accusedsSurname'] = ''
        this.onLoadData(f, this.page);
      } else {
        this.onLoadData(f, this.page);
      }
    } else if (this.title === 'ฐานข้อมูลคำพิพากษาอย่างย่อ') {
      if (f.value['caseNo'] !== '' && f.value['court'] !== '') {
        f.value['fullName'] = f.value['caseNo'] + ' ' + f.value['court']
        f.value['caseNo'] = ''
        f.value['court'] = ''
        this.onLoadData(f, this.page);
      } else {
        this.onLoadData(f, this.page);
      }
    } else if (this.title === 'ทะเบียนผู้มีรายได้น้อย') {
      if (f.value['citizenCardNumber'] === '' &&f.value['firstName'] !== '' && f.value['lastName'] !== '') {
        f.value['fullNameRegistrant'] = f.value['firstName'] + ' ' + f.value['lastName']
        f.value['firstName'] = ''
        f.value['lastName'] = ''
        this.onLoadData(f, this.page);
      } else if (f.value['citizenCardNumber'] !== '' && f.value['firstName'] !== '' && f.value['lastName'] !== '') {
        f.value['fullRegistrant'] = f.value['citizenCardNumber'] + ' ' + f.value['firstName'] + ' ' + f.value['lastName']
        f.value['citizenCardNumber'] = ''
        f.value['firstName'] = ''
        f.value['lastName'] = ''
        this.onLoadData(f, this.page);
      }  else {
        this.onLoadData(f, this.page);
      }
    } 
    else if (this.title === 'ทะเบียนยานพาหนะ') {
      if (f.value['docNo'] === '' && f.value['offLocCode'] !== '' && f.value['plate1'] !== '' 
        && f.value['plate2'] !== ''  && f.value['vehTypeRef'] !== '') {
        f.value['CarLicense'] = f.value['offLocCode'] + ' ' + f.value['plate1'] + ' ' + f.value['plate2'] + ' ' + f.value['vehTypeRef']
        f.value['offLocCode'] = ''
        f.value['plate1'] = ''
        f.value['plate2'] = ''
        f.value['vehTypeRef'] = ''
        this.onLoadData(f, this.page);
      } else if (f.value['docNo'] !== '' &&f.value['offLocCode'] !== '' && f.value['plate1'] !== '' 
        && f.value['plate2'] !== ''  && f.value['vehTypeRef'] !== '') {
        f.value['CidAndCarLicense'] = f.value['docNo'] + ' ' + f.value['offLocCode'] + ' ' + f.value['plate1'] + ' ' + f.value['plate2'] + ' ' + f.value['vehTypeRef']
        f.value['docNo'] = ''
        f.value['offLocCode'] = ''
        f.value['plate1'] = ''
        f.value['plate2'] = ''
        f.value['vehTypeRef'] = ''
        this.onLoadData(f, this.page);
      } else if (f.value['docNo'] !== '' &&f.value['offLocCode'] !== '' && f.value['plate1'] !== '' 
        && f.value['plate2'] !== ''  && f.value['vehTypeRef'] !== '') {
        f.value['CidAndCarLicense'] = f.value['docNo'] + ' ' + f.value['offLocCode'] + ' ' + f.value['plate1'] + ' ' + f.value['plate2'] + ' ' + f.value['vehTypeRef']
        f.value['docNo'] = ''
        f.value['offLocCode'] = ''
        f.value['plate1'] = ''
        f.value['plate2'] = ''
        f.value['vehTypeRef'] = ''
        this.onLoadData(f, this.page);
      } else if (f.value['docNo'] !== '' && f.value['offLocCode'] === 'เลือกจังหวัด'  && f.value['vehTypeRef'] === 'เลือกประเภท') {
        f.value['offLocCode'] = ''
        f.value['vehTypeRef'] = ''
        this.onLoadData(f, this.page);
      }else {
        this.onLoadData(f, this.page);
      }
    } else if (this.title === 'ฐานข้อมูลประกาศสืบจับ (ฐานข้อมูลเก่า ระบบ Police)') {
      if (f.value['subjectFullName'] !== '' && f.value['courtName'] !== '') {
        f.value['fullNameAndCourtName'] = f.value['subjectFullName'] + ' ' + f.value['courtName']
        f.value['subjectFullName'] = ''
        f.value['courtName'] = ''
        this.onLoadData(f, this.page);
      } else {
        this.onLoadData(f, this.page);
      }
    } 
    else if (this.title === 'ฐานข้อมูลคำพิพากษาฉบับเต็ม') {
      if (f.value['blackNo'] !== '' && f.value['courtCode'] !== '') {
        f.value['fullName'] = f.value['blackNo'] + ' ' + f.value['courtCode']
        f.value['blackNo'] = ''
        f.value['courtCode'] = ''
        this.onLoadData(f, this.page);
      } else {
        this.onLoadData(f, this.page);
      }
    } else if (this.title === 'ฐานข้อมูลคดีอาญา') {
      if (f.value['fname'] !== '' && f.value['lname'] !== '') {
        f.value['flname'] = f.value['fname'] + ' ' + f.value['lname']
        f.value['fname'] = ''
        f.value['lname'] = ''
        this.onLoadData(f, this.page);
      } else {
        this.onLoadData(f, this.page);
      }
    } else if (this.title === 'ข้อมูลเลือกสถานพยาบาล') {
      if (f.value['ssoNum'] !== '' && f.value['year'] !== '') {
        f.value['fullSso'] = f.value['ssoNum'] + ' ' + f.value['year']
        f.value['ssoNum'] = ''
        f.value['year'] = ''
        this.onLoadData(f, this.page);
      } else {
        this.onLoadData(f, this.page);
      } 
    } else if (this.title === 'เด็กหรือเยาวชนผู้กระทำผิด') {
      if (f.value['jvnCardId'] !== '' && f.value['jvnFname'] !== '' && f.value['jvnLname'] !== '') {
        f.value['jvnFullNameAndjvnCardId'] = f.value['jvnCardId'] + ' ' + f.value['jvnFname'] + ' ' + f.value['jvnLname']
        f.value['jvnCardId'] = ''
        f.value['jvnFname'] = ''
        f.value['jvnLname'] = ''
        this.onLoadData(f, this.page);
      } else if (f.value['jvnCardId'] == '' && f.value['jvnFname'] !== '' && f.value['jvnLname'] !== '') {
        f.value['jvnFullName'] = f.value['jvnFname'] + ' ' + f.value['jvnLname']
        f.value['jvnFname'] = ''
        f.value['jvnLname'] = ''
        this.onLoadData(f, this.page);
      }  else {
        this.onLoadData(f, this.page);
      } 
    } else if (this.title === 'ผลการสืบเสาะ (รายงานการสืบเสาะข้อเท็จจริง (แบบ ส.2 – 46))') {
      if (f.value['firstName'] !== '' && f.value['lastName'] !== '') {
        f.value['fullName'] = f.value['firstName'] + ' ' + f.value['lastName']
        f.value['firstName'] = ''
        f.value['lastName'] = ''
        this.onLoadData(f, this.page);
      } else if (f.value['firstName'] !== '' && f.value['lastName'] !== '' && f.value['prison'] !== '') {
        f.value['fullNameAndPrison'] = f.value['firstName'] + ' ' + f.value['lastName'] + ' ' + f.value['prison'] 
        f.value['firstName'] = ''
        f.value['lastName'] = ''
        f.value['prison'] = ''
      } else if (f.value['firstName'] !== '' && f.value['lastName'] === '' && f.value['prison'] !== '') {
        f.value['firstNameAndPrison'] = f.value['firstName'] + ' ' + f.value['prison'] 
        f.value['firstName'] = ''
        f.value['prison'] = ''
        this.onLoadData(f, this.page);
      } else if (f.value['firstName'] === '' && f.value['lastName'] !== '' && f.value['prison'] !== '') {
        f.value['lastNameAndPrison'] = f.value['lastName'] + ' ' + f.value['prison'] 
        f.value['lastName'] = ''
        f.value['prison'] = ''
        this.onLoadData(f, this.page);
      } else if (f.value['firstName'] === '' && f.value['lastName'] === '' && f.value['prison'] !== '' && f.value['citizenCardNumber'] !== '') {
        f.value['citizenCardNumberAndPrison'] = f.value['citizenCardNumber'] + ' ' + f.value['prison'] 
        f.value['citizenCardNumber'] = ''
        f.value['prison'] = ''
        this.onLoadData(f, this.page);
      }  else {
        this.onLoadData(f, this.page);
      } 
    } else if (this.title === 'ผู้ต้องขัง (บุคคลล้มละลาย)') {
      if (f.value['citizenCardNumber'] !== '' && f.value['firstName'] !== '' && f.value['lastName'] !== '') {
        f.value['fullNameAndhistIdCard'] = f.value['citizenCardNumber'] + ' ' + f.value['firstName'] + ' ' + f.value['lastName']
        f.value['histIdCard'] = ''
        f.value['firstName'] = ''
        f.value['lastName'] = ''
        this.onLoadData(f, this.page);
      } else if (f.value['citizenCardNumber'] == '' && f.value['firstName'] !== '' && f.value['lastName'] !== '') {
        console.log(f.value)
        f.value['fullName'] = f.value['firstName'] + ' ' + f.value['lastName']
        f.value['firstName'] = ''
        f.value['lastName'] = ''
        this.onLoadData(f, this.page);
      }  else {
        this.onLoadData(f, this.page);
      } 
    }
    else {
      this.onLoadData(f, this.page);
    }
    
  }

  onValid(even, isValid) {
    // console.log(even.target.form['input'])
    console.log(even)
    // console.log(isValid)
    // this.isValid = true
    if(even.target.id=='citizenCardNumber' || even.target.id=='docNo' || even.target.id=='personNationalIdentificationId'
    || even.target.id=='dftCitizenId' || even.target.id=='victimCitizenId' || even.target.id=='defendantId'
    || even.target.id=='idCard' || even.target.id=='cardId' || even.target.id=='citizenId' || even.target.id=='accusedCitizenId' 
    || even.target.id=='complainantCitizenId' || even.target.id=='ssoNum'
    || even.target.id=='accCardId' || even.target.id=='personId'){
      // || even.target.id=='pid'
      if (this.title !== 'ข้อมูลทะเบียนบุคคลต่างด้าว (Linkage)') {
        let check = this.checkCidNumber(even.target.value);
        if(check){
          this.isValid = false;
          console.log(isValid)
          if (this.title == 'ข้อมูลเลือกสถานพยาบาล') {
            console.log('test')
            const ssoNum = document.getElementById('ssoNum') as HTMLOptionElement;
            const year = document.getElementById('year') as HTMLOptionElement;
            if(ssoNum.value !== '' && year.value !== '') {
              this.isValid = false;
              console.log(this.isValid)
            } else {
              this.isValid = true;
            }
            console.log(year.value)
          }
        }else{
          this.isValid = true;
          // console.log(isValid)
        }
      }

      if (this.title == 'ข้อมูลทะเบียนบุคคลต่างด้าว (Linkage)') {
        if (even.target.value.length !== 13) {
          this.isValid = true;
        } else {
          this.isValid = false;
          console.log(isValid)
        }
      }

      if (this.title == 'ผลการสืบเสาะ (รายงานการสืบเสาะข้อเท็จจริง (แบบ ส.2 – 46))' || this.title == 'แบบบันทึกข้อมูลนักโทษเด็ดขาดก่อนปล่อยคุมประพฤติ (แบบ ส.1 - 46)') {
        if (even.target.value.length !== 13) {
          this.isValid = true;
        } else {
          this.isValid = false;
          console.log(isValid)
        }
      }
      
    }else if(even.target.id!=='citizenCardNumber' || even.target.id!=='docNo' || even.target.id!=='personNationalIdentificationId'
    || even.target.id!=='dftCitizenId' || even.target.id!=='victimCitizenId' || even.target.id!=='defendantId'
    || even.target.id!=='idCard' || even.target.id!=='cardId' || even.target.id!=='citizenId' || even.target.id!=='accusedCitizenId' 
    || even.target.id!=='complainantCitizenId' || even.target.id!=='ssoNum'
    || even.target.id!=='accCardId' || even.target.id!=='personId'){
      this.isValid = isValid;
      // console.log('นอก' + this.isValid)
      // console.log(even.target.value)
      let count = [];
      for (let index = 0; index < even.target.form.length; index++) {
        this.isValid = false;
          if (this.title == 'ข้อมูลเลือกสถานพยาบาล') {
            const ssoNum = document.getElementById('ssoNum') as HTMLOptionElement;
            const year = document.getElementById('year') as HTMLOptionElement;
            if (ssoNum.value == '' && year.value !== '') {
              // console.log(this.isValid)
              this.isValid = true;
              // console.log(this.isValid)
            } else if (ssoNum.value !== '' && year.value == '') {
              // console.log(this.isValid)
              this.isValid = true;
              // console.log(this.isValid)
            }
          }

          if (this.title == 'ฐานข้อมูลคดีอาญา') {
            const pid = document.getElementById('pid') as HTMLOptionElement;
            const fname = document.getElementById('fname') as HTMLOptionElement;
            const lname = document.getElementById('lname') as HTMLOptionElement;
            if (pid.value == '' && fname.value == '' && lname.value !== '') {
              // console.log(this.isValid)
              this.isValid = true;
              // console.log(this.isValid)
            } else if (pid.value == '' && fname.value !== '' && lname.value == '') {
              // console.log(this.isValid)
              this.isValid = true;
              // console.log(this.isValid)
            } else if (pid.value !== '' && fname.value == '' && lname.value == '') {
              // console.log(this.isValid)
              this.isValid = false        ;
              // console.log(this.isValid)
            } else if (pid.value !== '' && fname.value !== '' && lname.value !== '') {
              // console.log(this.isValid)
              this.isValid = true;
              // console.log(this.isValid)
            } else if (pid.value !== '' && fname.value == '' && lname.value !== '') {
              // console.log(this.isValid)
              this.isValid = true;
              // console.log(this.isValid)
            } else if (pid.value !== '' && fname.value !== '' && lname.value == '') {
              // console.log(this.isValid)
              this.isValid = true;
              // console.log(this.isValid)
            } 
          }
          // if (this.title == 'ผลการสืบเสาะ (รายงานการสืบเสาะข้อเท็จจริง (แบบ ส.2 – 46))') {
          //   for (let index = 0; index < even.target.form.length; index++) {
          //     this.isValid = false;
          //     const element = even.target.form[index].value;
          //     if (element === "") {
          //       count.push(element)
          //       if (even.target.form.length == count.length) {
          //         this.isValid = true
          //         console.log(this.isValid)
          //       }
          //     }
          //   }
          // }
        const element = even.target.form[index].value;
        
        // console.log('ใน' + even.target.form[index].value)
        if (element === "") {
          count.push(element)
          // console.log(count)
          if (even.target.form.length == count.length) {
            this.isValid = true
            // console.log(this.isValid)
          }
        }
      }
      
      if (this.title == 'ฐานข้อมูลทะเบียนราษฎร (ค้นหาด้วยชื่อตัว-ชื่อสกุล) (Linkage)') {
        if(even.target.id !== 'firstName' && even.target.id !== 'lastName'){
          if(this.numberOnly(even)){
            this.isValid = false;
            // console.log(this.isValid)
          }else{
            this.isValid = true;
            // console.log(this.isValid)
          }
        }
      }
      //เช็ค "." และช่องว่าง ฐานข้อมูลคำพิพากษาฉบับเต็ม
      if (this.title == 'ฐานข้อมูลคำพิพากษาฉบับเต็ม') {
        console.log('เต็ม')
        for (let index = 0; index < even.target.form.length; index++) {
          this.isValid = false;
          const element = even.target.form[index].value;
          count.push(element)
        }
        // var a1 = [".", " "]
        // let result = count.filter(s => a1.some(p => s.includes(p)));
        let recheck = /^[กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮ]+\d+\/\d+$/.test(even.target.value);
        if(recheck == false) {
          this.isValid = true;
          console.log('เต็มtrue')
        } else {
          this.onChangeCourt()
          
          console.log('เต็มfalse')
        }
      }

      //เช็ค "." และช่องว่าง ฐานข้อมูลคำพิพากษาอย่างย่อ
      if (this.title == 'ฐานข้อมูลคำพิพากษาอย่างย่อ') {
        for (let index = 0; index < even.target.form.length; index++) {
          this.isValid = false;
          const element = even.target.form[index].value;
          count.push(element)
        }
        // var a1 = [".", " "]
        // let result = count.filter(s => a1.some(p => s.includes(p)));
        let recheck = /^[กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮ]+\d+\/\d+$/.test(even.target.value);
        if(recheck == false) {
          this.isValid = true;
        } else {
          this.onChange()
        }
      }


      
      // checkvalue
      if(even.target.id === 'offLocCode' || even.target.id === 'plate1' || even.target.id === 'plate2' || even.target.id === 'vehTypeRef') {
        // console.log(even.target.id)
        const offLocCode = document.getElementById('offLocCode') as HTMLOptionElement;
        const plate1 = document.getElementById('plate1') as HTMLInputElement;
        const plate2 = document.getElementById('plate2') as HTMLInputElement;
        const vehTypeRef = document.getElementById('vehTypeRef') as HTMLOptionElement
        if (offLocCode.value !== 'เลือกจังหวัด' && plate1.value !== '' && plate2.value !== '' && vehTypeRef.value !== 'เลือกประเภท' 
        && offLocCode.value !== '' && vehTypeRef.value !== '') {
          this.isValid = false;
        } else {
          this.isValid = true;
        } 
      }

      
    }

    // console.log(this.isValid)

    // if(isValid == true) {
    //   this.isValid = false
    // } else {
    //   this.isValid = isValid;
    // }
  }
  onValidData(isValid) {
    this.isValid = isValid;
  }
  async onLoadData(f: NgForm, page) {
    this.isFirst = true;
    this.isPrevious = true;
    this.isNext = true;
    this.isLast = true;
    this.page = page;
    this.f = f;
    this.Basic_search = [];
    this.source = Object.keys(environment.qm.sub[0]);
    let filter = '';
    let name = '';
    let fnameLname = [];
    let lName = [];
    for (const entry of this.source) {
      this.sub = Object.keys(environment.qm.sub[0][entry].sub[0]);
      for (const entry_sub of this.sub) {
        this.title_sub = environment.qm.sub[0][entry].sub[0][entry_sub].title;
        const model = environment.qm.sub[0][entry].sub[0][entry_sub].model;
        const service = environment.qm.sub[0][entry].sub[0][entry_sub].service;
        if (this.title === this.title_sub) {
          this.Basic_search = environment[model][0].basicSearch;
          let filter = '';
          let name = '';
          for (let i = 0; i < this.Basic_search.length; i++) {
            if (this.Basic_search[i].name !== '') {
              name = this.Basic_search[i].name;
              filter = f.value[this.Basic_search[i].name];
            } else {
              console.log('ไม่พบเงื่อนไขการค้นหา');
              this.IsuploadSearch = false;
            }
            if (filter !== '' && this.title !== 'ฐานข้อมูลทะเบียนราษฎร (ค้นหาด้วยชื่อตัว-ชื่อสกุล) (Linkage)') {
              this.onFilters(this[service], filter, name, fnameLname, lName);
            }
            else {
              this.obj = null;
            }
          } // จบ for Basic_search
        } 
        else if (this.title == 'ฐานข้อมูลทะเบียนราษฎร (ค้นหาด้วยชื่อตัว-ชื่อสกุล) (Linkage)') {
          for (let i = 0; i < this.Basic_search.length; i++) {
            if (this.Basic_search[i].name !== '' && this.title == 'ฐานข้อมูลทะเบียนราษฎร (ค้นหาด้วยชื่อตัว-ชื่อสกุล) (Linkage)') {
              name = this.Basic_search[0].name;
              filter = f.value[this.Basic_search[i].name];
              fnameLname.push(filter)
              localStorage.setItem('FnameLname', JSON.stringify(fnameLname))
            } else {
              console.log('ไม่พบเงื่อนไขการค้นหา');
              this.IsuploadSearch = false;
            }
          }// จบ for Basic_search
        }
      } // จบ for entry_sub
    } // จบ for entry
    if (filter !== '') {
      // let data = await this.moiDopaPersonFirstnameLastnameService.getContent(fnameLname);
      this.onFilters(this.moiDopaPersonFirstnameLastnameService, filter, name, fnameLname);
    } else {
      this.obj = null;
    }
  }

  selectRow(selectData: any) {
    console.log(selectData)
    this.source = Object.keys(environment.qm.sub[0]);
    for (const entry of this.source) {
      this.sub = Object.keys(environment.qm.sub[0][entry].sub[0]);
      for (const entry_sub of this.sub) {
        this.title_sub = environment.qm.sub[0][entry].sub[0][entry_sub].title;
        const model = environment.qm.sub[0][entry].sub[0][entry_sub].model;
        const schema = environment.qm.sub[0][entry].sub[0][entry_sub].schema;
        const report = environment.qm.sub[0][entry].sub[0][entry_sub].report;

        if (this.title === this.title_sub) {
          this.reportName = `/${report}`;
          const dynamicClass = new DynamicClass().dynamicClass(model, selectData);
          console.log(dynamicClass)
          const dataSet = dynamicClass.$dataSet;
          console.log(dataSet)
          if (schema !== undefined) {
            localStorage.setItem(schema, JSON.stringify(dataSet));
            this.selectData = JSON.parse(localStorage.getItem(schema));
            console.log(this.selectData)
            // แสดง ซ้ายมือ
            this.person = {
              citizenCardNumber: this.selectData.person.citizenCardNumber,
              fullName: this.selectData.person.fullName,
              sex: this.selectData.person.sex,
              dateOfBirth: this.selectData.person.dateOfBirth
            };
            // if(this.title === 'เด็กหรือเยาวชนผู้กระทำผิด'){
            //   this.selectData = JSON.parse(localStorage.getItem(schema));
            //   console.log(this.selectData)
            //   // แสดง ซ้ายมือ
            //   this.person = {
            //     citizenCardNumber: this.selectData.person.citizenCardNumber,
            //     fullName: this.selectData.person.fullName,
            //     sex: this.selectData.person.sex,
            //     dateOfBirth: this.selectData.person.dateOfBirth
            //   };
            // }
            // else{
            //   this.onGetHtml(this[report]);
            // }
            this.onGetHtml(this[report]);
          }
        }
      }
    }
  }

  pdfPreview() {
    console.log("PDF opened!");
    this.source = Object.keys(environment.qm.sub[0]);
    for (const entry of this.source) {
      this.sub = Object.keys(environment.qm.sub[0][entry].sub[0]);
      for (const entry_sub of this.sub) {
        this.title_sub = environment.qm.sub[0][entry].sub[0][entry_sub].title;
        const schema = environment.qm.sub[0][entry].sub[0][entry_sub].schema;
        const report = environment.qm.sub[0][entry].sub[0][entry_sub].report;
        if (this.title === this.title_sub) {
          this.reportName = `/${report}`;
          localStorage.setItem(schema, JSON.stringify(this.selectData));
        }
      }
    }
  }


  onReset() {
    window.location.reload();
  }

  onPagination(data: any) {
    this.pageStatus = false; //ค้นหาเรียบร้อยแล้ว
    this.pages = new Array(this.beginPage);
    this.totalElements = data['totalElements']; //จำนวน record ที่ค้นเจอทั้งหมด
    this.totalPages = data['totalPages'];
    if (this.page <= 0) {
      this.isFirst = false;
      this.isPrevious = true;  // ไม่แสดง Previous
      this.isNext = false;
      this.isLast = false;
      this.setOffSet();
    } else if (this.page > 0 && this.page != this.last) {
      this.isFirst = false;// แสดง Firstpage
      this.isPrevious = false;//แสดง Previous
      this.isNext = false;
      this.isLast = false;
      this.setOffSet();
    } else if (this.page == this.last) {
      this.isFirst = false;
      this.isPrevious = false;
      this.isNext = true;// ไม่แสดง NextPage
      this.isLast = false;
      this.setOffSetLast();
    }
  }
  someClickHandler(info: any): void {
    // console.log("info")
    // console.log(info.token_fileId)
    if(this.title === 'ฐานข้อมูลคำพิพากษาฉบับเต็ม'){
      if(info.token_fileId == undefined) {
        $("#standard-modal").modal()
      } else {
        this.openDialog(info);
      }
    } else {
      this.openDialog(info);
    }
    
    // this.message = info.id + ' - ' + info.firstName;        
    
  }
  onFilters(service: IManageService, filters: string, name: string, fnameLname?: string[], data?: any, lName?: string[], offSet?: any) {
    if (this.tableData.length >= 1) {
      this.tableData = [];
      this.htmlStr = [];
      $('#table1').dataTable().fnClearTable();
      $('#table1').dataTable().fnDestroy();
    } else {
      this.tableData = [];
      this.htmlStr = [];
    }
    console.log('filters',filters)
    console.log('service',service)
    service.filters(filters, name, fnameLname, data, lName, offSet).subscribe(data => {
      console.log('1361',data)
      moment.locale('th');
      this.obj = data['content'];

      if(this.title === 'ฐานข้อมูลทะเบียนราษฎร (ค้นหาด้วยชื่อตัว-ชื่อสกุล) (Linkage)') {
        let totalPage:number = Number.parseInt(data['totalPages']);
        if (this.obj.length <= 5) {
          let pageTotal = totalPage - 1;
          for (let index = 1; index <= pageTotal; index++) {
            let offset = ( 5 * (index-1) ) + 1
            this.htmlStr.push(`${offset}`);
          }
        } else {
          for (let index = 1; index <= totalPage; index++) {
            let offset = ( 5 * (index-1) ) + 1
            this.htmlStr.push(`${offset}`);
          }
        }
        this.selectedIndex = 0;
      }
      if(this.title === 'ฐานข้อมูลคำพิพากษาฉบับเต็ม') {
        for (let index = 0; index < this.obj.length; index++) {
          const element = this.obj[index];
          let file_id = element.fileId;
              this.cojJudgementService.getFile(file_id).subscribe(data => {
                const blob = new Blob([data.body], { type: 'application/pdf' });
                var fileUrl = URL.createObjectURL(blob);
                console.log(fileUrl)
                element.token_fileId = fileUrl;
                this.obj[index].token_fileId = fileUrl
                this.tableData = this.obj;
              }, error => {
                console.log(error)
              })
        }
              
      } else if(this.title === 'ฐานข้อมูลการเดินทางเข้าออกประเทศ') {
        console.log(this.obj)
      } else if(this.title === 'เด็กหรือเยาวชนผู้กระทำผิด') {
        console.log(this.obj)
      }

      this.tableData = this.obj;
      console.log(this.tableData)
      for (let index = 0; index < this.tableData.length; index++) {
        if(this.title === 'บัตรประจำตัวประชาชน (Linkage)'){
            this.tableData[index].birthDate = this.convertDate.transform(this.tableData[index].birthDate);
            this.tableData[index].issueDate = this.convertDate.transform(this.tableData[index].issueDate);
            this.tableData[index].expireDate = this.convertDate.transform(this.tableData[index].expireDate);
        } else if(this.title === 'ข้อมูลผู้ต้องหา/จำเลย'){
          this.tableData[index].birthDate = this.changeDate.transform(this.tableData[index].birthDate);
        } else if(this.title === 'เด็กหรือเยาวชนผู้กระทำผิด'){
          this.tableData[index].birthDate = this.changeDate.transform(this.tableData[index].birthDate);
        } else if(this.title === 'ผู้ต้องขัง (คดีที่พิพากษาแล้ว)'){
          this.tableData[index].dateOfBirth = this.changeDate.transform(this.tableData[index].dateOfBirth);
        } else if(this.title === 'ฐานข้อมูลบุคคลพ้นโทษ'){
          this.tableData[index].dateOfBirth = this.changeDate.transform(this.tableData[index].dateOfBirth);
        } else if(this.title === 'ผู้ต้องขัง (คดีที่ยังไม่พิพากษา)'){
          this.tableData[index].dateOfBirth = this.changeDate.transform(this.tableData[index].dateOfBirth);
        } else if(this.title === 'ข้อมูลทะเบียนบุคคลต่างด้าว (Linkage)'){
          this.tableData[index].dateOfBirth = this.convertDate.transform(this.tableData[index].dateOfBirth);
        } else if(this.title === 'ฐานข้อมูลใบสูติบัตร (Linkage)'){
          this.tableData[index].dateOfBirth = this.convertDate.transform(this.tableData[index].dateOfBirth);
        } else if(this.title === 'ข้อมูลผู้ขอออกหนังสือผ่านแดนทั้งหมด (Linkage)'){
          this.tableData[index].dateOfBirth = this.convertDate.transform(this.tableData[index].dateOfBirth);
          this.tableData[index].expireDate = this.convertDate.transform(this.tableData[index].expireDate);
        } else if(this.title === 'ฐานข้อมูลการจดทะเบียนเปลี่ยนชื่อสกุล (Linkage)'){
          this.tableData[index].dateOfBirth = this.convertDate.transform(this.tableData[index].dateOfBirth);
        } else if(this.title === 'ฐานข้อมูลทะเบียนราษฎร (ค้นหาด้วยชื่อตัว-ชื่อสกุล) (Linkage)'){
          this.tableData[index].dateOfBirth = this.convertDate.transform(this.tableData[index].dateOfBirth);
        } else if(this.title === 'ฐานข้อมูลการจดทะเบียนเปลี่ยนชื่อตัว (Linkage)'){
          this.tableData[index].dateOfBirth = this.convertDate.transform(this.tableData[index].dateOfBirth);
        } else if(this.title === 'ทะเบียนราษฎร (Linkage)'){
          this.tableData[index].dateOfBirth = this.convertDate.transform(this.tableData[index].dateOfBirth);
        } else if(this.title === 'รายงานการตรวจพิสูจน์ (Linkage)(อยู่ระหว่างการทดสอบ)'){
          this.tableData[index].reportDate = this.transformDate.transform(this.tableData[index].reportDate);
        } else if(this.title === 'ฐานข้อมูลคำพิพากษาอย่างย่อ'){
           this.tableData[index].court = this.converseCourt.transform(this.tableData[index].court);
           this.tableData[index].xbase.red_no = this.convertNull.transform(this.tableData[index].xbase.red_no);
           this.tableData[index].juding_date = this.changeDate.transform(this.tableData[index].juding_date);          
           this.tableData[index].case_date = this.changeDate.transform(this.tableData[index].case_date);          
        } else if(this.title === 'ทะเบียนผู้มีรายได้น้อย'){
          this.tableData[index].dateOfBirth = this.changeDate.transform(this.tableData[index].dateOfBirth);
        } else if(this.title === 'ฐานข้อมูลคดีอาญา'){
          this.tableData[index].eventDate = this.changeDate.transform(this.tableData[index].eventDate);
        } else if(this.title === 'ฐานข้อมูลผู้กระทำผิดกฎหมาย (ฐานข้อมูลเก่า ระบบ Police)'){
          this.tableData[index].eventDate = this.convertDate.transform(this.tableData[index].eventDate);
          this.tableData[index].crimeDate = this.convertDate.transform(this.tableData[index].crimeDate);
        } else if(this.title === 'เด็กหรือเยาวชนผู้กระทำผิด'){
          this.tableData[index].eventDate = this.convertDate.transform(this.tableData[index].eventDate);
          this.tableData[index].releaseDate = this.changeDate.transform(this.tableData[index].releaseDate);
          this.tableData[index].jvnSex = this.convertSex.transform(this.tableData[index].jvnSex);
          this.tableData[index].jvnBirthDate = this.changeDate.transform(this.tableData[index].jvnBirthDate);
        } else if(this.title === 'ประวัติคดียาเสพติด'){
          this.tableData[index].arrestDate = this.changeDate.transform(this.tableData[index].arrestDate);
        } else if(this.title === 'ฐานข้อมูลหมายจับศาล'){
          this.tableData[index].arrestDate = this.changeDate.transform(this.tableData[index].arrestDate);
        } else if (this.title === 'ฐานข้อมูลหมายจับคดีพิเศษ') {
          this.tableData[index].startDate = this.changeDate.transform(this.tableData[index].startDate);
        } else if (this.title === 'ฐานข้อมูลคำพิพากษาในตัวผู้ต้องหา/จำเลย') {
          this.tableData[index].judgementDate = this.changeDate.transform(this.tableData[index].judgementDate);
        } else if (this.title === 'ผู้ต้องขัง (บุคคลล้มละลาย)') {
          this.tableData[index].releaseDate = this.changeDate.transform(this.tableData[index].releaseDate);
        } else if (this.title === 'ผู้ถูกคุมประพฤติในคดียาเสพติดและผลการเข้าร่วมกิจกรรมแก้ไขฟื้นฟู') {
          this.tableData[index].startDate = this.changeDate.transform(this.tableData[index].startDate);
          this.tableData[index].endDate = this.changeDate.transform(this.tableData[index].endDate);
        } 
        // else if(this.title === 'ฐานข้อมูลทะเบียนประวัติอาชญากร'){
        //   this.tableData[index].birthDate = this.changeDate.transform(this.tableData[index].birthDate);
        // } 
        const element = this.tableData[index];
        this.tableData[index].sex = this.convertSex.transform(this.tableData[index].sex);
        this.tableData[index].probationStatus = this.converseStatus.transform(this.tableData[index].probationStatus);
        // this.tableData[index].birthDate = this.changeDate.transform(this.tableData[index].birthDate);
        this.tableData[index].probationStartDateSrc = this.changeDate.transform(this.tableData[index].probationStartDateSrc);
        this.tableData[index].birthDateSrc = this.changeDate.transform(this.tableData[index].birthDateSrc);
        this.tableData[index].probationPlannedEndDateSrc = this.changeDate.transform(this.tableData[index].probationPlannedEndDateSrc);
        this.tableData[index].seizeCaseDate = this.changeDate.transform(this.tableData[index].seizeCaseDate);
        this.tableData[index].personBirthDate = this.changeDate.transform(this.tableData[index].personBirthDate);
        this.tableData[index].entryDate = this.changeDate.transform(this.tableData[index].entryDate);
        this.tableData[index].sentenceDate = this.changeDate.transform(this.tableData[index].sentenceDate);
        this.tableData[index].probationActualEndDateSrc = this.changeDate.transform(this.tableData[index].probationActualEndDateSrc);
        // this.tableData[index].dateOfBirth = this.convertDate.transform(this.tableData[index].dateOfBirth);
        this.tableData[index].dateOfReq = this.convertDate.transform(this.tableData[index].dateOfReq);
        this.tableData[index].divorceDate = this.convertDate.transform(this.tableData[index].divorceDate);
        this.tableData[index].marryDate = this.convertDate.transform(this.tableData[index].marryDate);
        this.tableData[index].startdate = this.convertDate.transform(this.tableData[index].startdate);
        this.tableData[index].caseDate = this.changeDate.transform(this.tableData[index].caseDate);
        this.tableData[index].autopsyDate = this.changeDate.transform(this.tableData[index].autopsyDate);
        this.tableData[index].missingDate = this.changeDate.transform(this.tableData[index].missingDate);
        // this.tableData[index].reportDate = this.convertDate.transform(this.tableData[index].reportDate);
        this.tableData[index].licenseExpirationDate = this.changeDate.transform(this.tableData[index].licenseExpirationDate);
        this.tableData[index].licenseIssueDate = this.changeDate.transform(this.tableData[index].licenseIssueDate);
        this.tableData[index].imageDate = this.changeDate.transform(this.tableData[index].imageDate);
        this.tableData[index].docDate = this.convertDate.transform(this.tableData[index].docDate);
        this.tableData[index].receiveDate = this.changeDate.transform(this.tableData[index].receiveDate);
        this.tableData[index].weight = this.convertNull.transform(this.tableData[index].weight);
        this.tableData[index].height = this.convertNull.transform(this.tableData[index].height);
        this.tableData[index].suspectPlace = this.convertNull.transform(this.tableData[index].suspectPlace);
        this.tableData[index].lastName = this.convertNull.transform(this.tableData[index].lastName);
        this.tableData[index].judgementName = this.convertNull.transform(this.tableData[index].judgementName);
        this.tableData[index].undecidedCaseId = this.convertNull.transform(this.tableData[index].undecidedCaseId);
        this.tableData[index].dftCitizenId = this.convertNull.transform(this.tableData[index].dftCitizenId);
        this.tableData[index].dftAttorneyFullName = this.convertNull.transform(this.tableData[index].dftAttorneyFullName);
        this.tableData[index].personSex = this.convertSex.transform(this.tableData[index].personSex);
        this.tableData[index].defendantSurname = this.convertNull.transform(this.tableData[index].defendantSurname);
        this.tableData[index].personNationalityText = this.convertNull.transform(this.tableData[index].personNationalityText);
        // this.tableData[index].citizenCardNumber = this.convertNull.transform(this.tableData[index].citizenCardNumber);
        this.tableData[index].lastAddressProvince = this.convertNull.transform(this.tableData[index].lastAddressProvince);
        this.tableData[index].courtName = this.convertNull.transform(this.tableData[index].courtName);
        this.tableData[index].blackFile = this.convertNull.transform(this.tableData[index].blackFile);
        this.tableData[index].redFile = this.convertNull.transform(this.tableData[index].redFile);
        this.tableData[index].policeName = this.convertNull.transform(this.tableData[index].policeName);
        this.tableData[index].manageManagedate = this.changeDate.transform(this.tableData[index].manageManagedate);
        this.tableData[index].engineNumber = this.convertNull.transform(this.tableData[index].engineNumber);
        this.tableData[index].bodyNumber = this.convertNull.transform(this.tableData[index].bodyNumber);
        this.tableData[index].type = this.convertNull.transform(this.tableData[index].type);
        this.tableData[index].brand = this.convertNull.transform(this.tableData[index].brand);
        this.tableData[index].color = this.convertNull.transform(this.tableData[index].color);
        this.tableData[index].occupationName = this.convertNull.transform(this.tableData[index].occupationName);
        this.tableData[index].tambolName = this.convertNull.transform(this.tableData[index].tambolName);
        this.tableData[index].amphurName = this.convertNull.transform(this.tableData[index].amphurName);
        this.tableData[index].provinceName = this.convertNull.transform(this.tableData[index].provinceName);
        this.tableData[index].fileTypeName = this.convertNull.transform(this.tableData[index].fileTypeName);
        this.tableData[index].inqDetail = this.convertNull.transform(this.tableData[index].inqDetail);
        this.tableData[index].incedentDetail = this.convertNull.transform(this.tableData[index].incedentDetail);
        this.tableData[index].prosName = this.convertNull.transform(this.tableData[index].prosName);
        this.tableData[index].assignTypeName = this.convertNull.transform(this.tableData[index].assignTypeName);
        this.tableData[index].accusedsName = this.convertNull.transform(this.tableData[index].accusedsName);
        this.tableData[index].accusedsSurname = this.convertNull.transform(this.tableData[index].accusedsSurname);
        this.tableData[index].complainantName = this.convertNull.transform(this.tableData[index].complainantName);
        this.tableData[index].complainantSurname = this.convertNull.transform(this.tableData[index].complainantSurname);
        this.tableData[index].accusedchargeChargeName = this.convertNull.transform(this.tableData[index].accusedchargeChargeName);
        this.tableData[index].courtresultJudgementDetail = this.convertNull.transform(this.tableData[index].courtresultJudgementDetail);
        this.tableData[index].manageDescrition = this.convertNull.transform(this.tableData[index].manageDescrition);
        this.tableData[index].manageManagedate = this.convertNull.transform(this.tableData[index].manageManagedate);
        // this.tableData[index].arrestDate = this.changeDate.transform(this.tableData[index].arrestDate);
        this.tableData[index].dateofbirth = this.changeDate.transform(this.tableData[index].dateofbirth);
        this.tableData[index].empBirthDate = this.changeDate.transform(this.tableData[index].empBirthDate);
        this.tableData[index].expStartDate = this.changeDate.transform(this.tableData[index].expStartDate);
        this.tableData[index].courtDate = this.changeDate.transform(this.tableData[index].courtDate);
        this.tableData[index].importDate = this.changeDate.transform(this.tableData[index].importDate);
        this.tableData[index].migratedDate = this.changeDate.transform(this.tableData[index].migratedDate);
        this.tableData[index].victimAppealRedDate = this.changeDate.transform(this.tableData[index].victimAppealRedDate);
        this.tableData[index].victimAttorneyBirthDay = this.changeDate.transform(this.tableData[index].victimAttorneyBirthDay);
        this.tableData[index].victimCaseDate = this.changeDate.transform(this.tableData[index].victimCaseDate);
        this.tableData[index].victimCasePoliceDate = this.changeDate.transform(this.tableData[index].victimCasePoliceDate);
        this.tableData[index].victimCommitteeInspectDate = this.changeDate.transform(this.tableData[index].victimCommitteeInspectDate);
        this.tableData[index].expDate = this.changeDate.transform(this.tableData[index].expDate);
        this.tableData[index].regDate = this.changeDate.transform(this.tableData[index].regDate);
        this.tableData[index].wsZonedDateTime = this.changeDate.transform(this.tableData[index].wsZonedDateTime);
        this.tableData[index].dateOfMoveIn = this.convertDate.transform(this.tableData[index].dateOfMoveIn);
        this.tableData[index].dateInThai = this.convertDate.transform(this.tableData[index].dateInThai);
        this.tableData[index].personAddDate = this.convertDate.transform(this.tableData[index].personAddDate);
        this.tableData[index].passportExpireDate = this.convertDate.transform(this.tableData[index].passportExpireDate);
        this.tableData[index].passportIssueDate = this.convertDate.transform(this.tableData[index].passportIssueDate);
        this.tableData[index].visaExpireDate = this.convertDate.transform(this.tableData[index].visaExpireDate);
        this.tableData[index].visaIssueDate = this.convertDate.transform(this.tableData[index].visaIssueDate);
        this.tableData[index].terminateDate = this.convertDate.transform(this.tableData[index].terminateDate);
        this.tableData[index].femaleDateOfBirth = this.convertDate.transform(this.tableData[index].femaleDateOfBirth);
        this.tableData[index].maleDateOfBirth = this.convertDate.transform(this.tableData[index].maleDateOfBirth);
        this.tableData[index].dateOfNotifying = this.convertDate.transform(this.tableData[index].dateOfNotifying);
        this.tableData[index].requestDate = this.convertDate.transform(this.tableData[index].requestDate);
        // this.tableData[index].eventDate = this.convertDate.transform(this.tableData[index].eventDate);
        this.tableData[index].dataSubmitDate = this.convertDate.transform(this.tableData[index].dataSubmitDate);
        this.tableData[index].inqDate = this.changeDate.transform(this.tableData[index].inqDate);
        this.tableData[index].incedentDate = this.changeDate.transform(this.tableData[index].incedentDate);
        this.tableData[index].empResignDate = this.changeDate.transform(this.tableData[index].empResignDate);
        this.tableData[index].effectiveDate = this.changeDate.transform(this.tableData[index].effectiveDate);
        this.tableData[index].expirationDate = this.changeDate.transform(this.tableData[index].expirationDate);
        this.tableData[index].generallcRecDate = this.changeDate.transform(this.tableData[index].generallcRecDate);
        this.tableData[index].seizeBookDate = this.changeDate.transform(this.tableData[index].seizeBookDate);
        this.tableData[index].seizeWithdrawBookDate = this.changeDate.transform(this.tableData[index].seizeWithdrawBookDate);
        this.tableData[index].dftCommitteeInspectDate = this.changeDate.transform(this.tableData[index].dftCommitteeInspectDate);
        this.tableData[index].marryTime = moment(this.tableData[index].marryTime).format('LT');
        this.tableData[index].divorceTime = moment(this.tableData[index].divorceTime).format('LT');
        this.tableData[index].ofcStartDate = this.changeDate.transform(this.tableData[index].ofcStartDate);
        this.tableData[index].ofcResultDate = this.changeDate.transform(this.tableData[index].ofcResultDate);
        this.tableData[index].caseEndDate = this.changeDate.transform(this.tableData[index].caseEndDate);
        this.tableData[index].accusedsBirthDate = this.changeDate.transform(this.tableData[index].accusedsBirthDate);
        this.tableData[index].complainantBirthDate = this.changeDate.transform(this.tableData[index].complainantBirthDate);
        this.tableData[index].accAge = this.convertNull.transform(this.tableData[index].accAge);
        this.tableData[index].passsportInfoSex = this.convertSex.transform(this.tableData[index].passsportInfoSex);
        this.tableData[index].createDate = this.changeDate.transform(this.tableData[index].createDate);
        this.tableData[index].registerDate = this.changeDate.transform(this.tableData[index].registerDate);
        this.tableData[index].modifiedDate = this.changeDate.transform(this.tableData[index].modifiedDate);
        this.tableData[index].cc = this.convertNull.transform(this.tableData[index].cc);
        this.tableData[index].toDate = this.changeDate.transform(this.tableData[index].toDate);
        this.tableData[index].wantD = this.changeDate.transform(this.tableData[index].wantD);
        this.tableData[index].complainDate = this.changeDate.transform(this.tableData[index].complainDate);
        this.tableData[index].dateEnforcement = this.changeDate.transform(this.tableData[index].dateEnforcement);
        this.tableData[index].finishDate = this.changeDate.transform(this.tableData[index].finishDate);
        this.tableData[index].dateArrest = this.changeDate.transform(this.tableData[index].dateArrest);
        this.tableData[index].dateUpdate = this.changeDate.transform(this.tableData[index].dateUpdate);
        this.tableData[index].caseCreateDate = this.changeDate.transform(this.tableData[index].caseCreateDate);
        this.tableData[index].eventDateFrom = this.changeDate.transform(this.tableData[index].eventDateFrom);
        this.tableData[index].dataUpdateDateTimeFrom = this.changeDate.transform(this.tableData[index].dataUpdateDateTimeFrom);
        this.tableData[index].dataUpdateDateTimeTo = this.changeDate.transform(this.tableData[index].dataUpdateDateTimeTo);
        this.tableData[index].importDateTime = this.changeDate.transform(this.tableData[index].importDateTime);
        
      }

      const columns = [];

      for (let index = 0; index < this.cells.length; index++) {
        const title = this.cells[index]['title'];
        const data = this.cells[index]['id'];
        // console.log(data)
        columns.push({ 'title': title, 'data': data });
        if (index === this.cells.length - 1) {
          //  this.IsuploadFile = false;
        }
      }
      if (this.title == 'ฐานข้อมูลทะเบียนราษฎร (ค้นหาด้วยชื่อตัว-ชื่อสกุล) (Linkage)') {
        this.dtOptions = {
          data: this.tableData,
          columns: columns,
          retrieve: true,
          rowCallback: (row: Node, data: any[] | Object, index: number) => {
            const self = this;
            // Unbind first in order to avoid any duplicate handler
            // (see https://github.com/l-lin/angular-datatables/issues/87)
            $('td', row).unbind('click');
            $('td', row).bind('click', () => {
              self.someClickHandler(data);
            });
            return row;
          },
          pagingType: 'full_numbers',
          paging: false,
          ordering: false,
          info: false,
          language: {
            sLengthMenu: "แสดง _MENU_ รายการ",
            sZeroRecords: "ไม่พบข้อมูลที่ค้นหา",
            sInfo: "แสดง _START_ ถึง _END_ ทั้งหมด _TOTAL_ รายการ",
            sInfoEmpty: "แสดง 0 ถึง 0 จาก 0 รายการ",
            sInfoFiltered: "(จากจำนวนทั้งหมด _MAX_ รายการ)",
            sSearch: "ค้นหา:",
            oPaginate: {
              sFirst: "หน้าแรก",
              sPrevious: "ก่อนหน้า",
              sNext: "ถัดไป",
              sLast: "หน้าสุดท้าย"
            }
          },
        };
      } else if(this.title == 'เด็กหรือเยาวชนผู้กระทำผิด') {
        let data
        let dataAll = {}
        let tableData = []
        this.tableData
        for (let index = 0; index < this.tableData.length; index++) {
          const element = this.tableData[index];
          // data = element.caseList[0]
          dataAll = {
            cmstJuvenileRef: element.cmstJuvenileRef,
            jvnId: element.jvnId,
            jvnCardId: element.jvnCardId,
            jvnTitleName: element.jvnTitleName,
            jvnFname: element.jvnFname,
            jvnLname: element.jvnLname,
            jvnBirthDate: element.jvnBirthDate,
            jvnSex: element.jvnSex,
            jvnStatus: element.jvnStatus,
            jvnNickName: element.jvnNickName,
            jvnNumberChild: element.jvnNumberChild,
            jvnNumberBroSis: element.jvnNumberBroSis,
            jvnHisEduflag: element.jvnHisEduflag,
            jvnEduStatus: element.jvnEduStatus,
            eduCation: element.eduCation,
            eduStatusAcademy: element.eduStatusAcademy,
            jvnNationName: element.jvnNationName,
            jvnRaceName: element.jvnRaceName,
            jvnReligionName: element.jvnReligionName,
            jvnOccupationStatus: element.jvnOccupationStatus,
            jvnOccupationStatusName: element.jvnOccupationStatusName,
            jvnOccupationName: element.jvnOccupationName,
            jvnHouseNo: element.jvnHouseNo,
            jvnLiveHouseNo: element.jvnLiveHouseNo,
            jvnLiveProvince: element.jvnLiveProvince,
            jvnLineName: element.jvnLineName,
            liveRelationName: element.liveRelationName,
            liveRelationCode: element.liveRelationCode,
            createDate: element.createDate,
            updateDate: element.updateDate,
            caseDetailList: element.caseDetailList,
            juvenileRelativeDetailResponseList: element.juvenileRelativeDetailResponseList,
            dataUpdateDateTimeFrom: element.dataUpdateDateTimeFrom,
            dataUpdateDateTimeTo: element.dataUpdateDateTimeTo,
            importDateTime: element.importDateTime,
            caseNoFirst: element.caseDetailList[0].caseNo,
            caseYearFirst: element.caseDetailList[0].caseYear,
            caseNocaseYearFirst: element.caseDetailList[0].caseNo + '/' + element.caseDetailList[0].caseYear,
          }


          tableData.push(dataAll)
        }
        // console.log(tableData)
        this.dtOptions = {
          data: tableData,
          columns: columns,
          retrieve: true,
          rowCallback: (row: Node, data: any[] | Object, index: number) => {
            const self = this;
            $('td', row).unbind('click');
            $('td', row).bind('click', () => {
              self.someClickHandler(data);
            });
            return row;
          },
          pagingType: 'full_numbers',
          language: {
            sLengthMenu: "แสดง _MENU_ รายการ",
            sZeroRecords: "ไม่พบข้อมูลที่ค้นหา",
            sInfo: "แสดง _START_ ถึง _END_ ทั้งหมด _TOTAL_ รายการ",
            sInfoEmpty: "แสดง 0 ถึง 0 จาก 0 รายการ",
            sInfoFiltered: "(จากจำนวนทั้งหมด _MAX_ รายการ)",
            sSearch: "ค้นหา:",
            oPaginate: {
              sFirst: "หน้าแรก",
              sPrevious: "ก่อนหน้า",
              sNext: "ถัดไป",
              sLast: "หน้าสุดท้าย"
            }
          },
        };
      } else if (this.title == 'ฐานข้อมูลนิติบุคคล') {
        let data
        let dataAll = {}
        let tableData = []
        this.tableData
        console.log(this.tableData)
        for (let index = 0; index < this.tableData.length; index++) {
          const element = this.tableData[index];
          const org = element.data.organizationJuristicPerson;

          dataAll = {
            organizationJuristicID: org.organizationJuristicID,
            organizationOldJuristicID: org.organizationOldJuristicID,
            organizationJuristicNameTH: org.organizationJuristicNameTH,
            organizationJuristicNameEN: org.organizationJuristicNameEN,
            organizationJuristicType: org.organizationJuristicType,
            organizationJuristicRegisterDate: org.organizationJuristicRegisterDate,
            organizationJuristicStatus: org.organizationJuristicStatus,
            organizationJuristicObjective: org.organizationJuristicObjective, // ถ้าต้องการแยกข้อมูลเพิ่มเติมระบุเพิ่มได้
            organizationJuristicObjectiveItems: org.organizationJuristicObjectiveItems,
            organizationJuristicObjectivePages: org.organizationJuristicObjectivePages,
            organizationJuristicRegisterCapital: org.organizationJuristicRegisterCapital,
            organizationJuristicPaidUpCapital: org.organizationJuristicPaidUpCapital,
            organizationJuristicPersonList: org.organizationJuristicPersonList,
            organizationJuristicBranchName: org.organizationJuristicBranchName,
            organizationJuristicAddress: org.organizationJuristicAddress            , // ถ้าอยากให้เป็น string ใช้ฟังก์ชัน formatAddress ด้านล่าง
            organizationJuristicPersonDescription: org.organizationJuristicPersonDescription,
            financialSubmitRecord: org.financialSubmitRecord            ,
            digitalIDFlag: org.digitalIDFlag
          };
          tableData.push(dataAll)
        }
        this.dtOptions = {
          data: tableData,
          columns: columns,
          retrieve: true,
          rowCallback: (row: Node, data: any[] | Object, index: number) => {
            const self = this;
            $('td', row).unbind('click');
            $('td', row).bind('click', () => {
              self.someClickHandler(data);
            });
            return row;
          },
          pagingType: 'full_numbers',
          language: {
            sLengthMenu: "แสดง _MENU_ รายการ",
            sZeroRecords: "ไม่พบข้อมูลที่ค้นหา",
            sInfo: "แสดง _START_ ถึง _END_ ทั้งหมด _TOTAL_ รายการ",
            sInfoEmpty: "แสดง 0 ถึง 0 จาก 0 รายการ",
            sInfoFiltered: "(จากจำนวนทั้งหมด _MAX_ รายการ)",
            sSearch: "ค้นหา:",
            oPaginate: {
              sFirst: "หน้าแรก",
              sPrevious: "ก่อนหน้า",
              sNext: "ถัดไป",
              sLast: "หน้าสุดท้าย"
            }
          },
        };
      }
      else {
        console.log('ไม่เจอ')
        this.dtOptions = {
          data: this.tableData,
          columns: columns,
          retrieve: true,
          rowCallback: (row: Node, data: any[] | Object, index: number) => {
            const self = this;
            // Unbind first in order to avoid any duplicate handler
            // (see https://github.com/l-lin/angular-datatables/issues/87)
            $('td', row).unbind('click');
            $('td', row).bind('click', () => {
              console.log(data)
              self.someClickHandler(data);
            });
            return row;
          },
          pagingType: 'full_numbers',
          language: {
            sLengthMenu: "แสดง _MENU_ รายการ",
            sZeroRecords: "ไม่พบข้อมูลที่ค้นหา",
            sInfo: "แสดง _START_ ถึง _END_ ทั้งหมด _TOTAL_ รายการ",
            sInfoEmpty: "แสดง 0 ถึง 0 จาก 0 รายการ",
            sInfoFiltered: "(จากจำนวนทั้งหมด _MAX_ รายการ)",
            sSearch: "ค้นหา:",
            oPaginate: {
              sFirst: "หน้าแรก",
              sPrevious: "ก่อนหน้า",
              sNext: "ถัดไป",
              sLast: "หน้าสุดท้าย"
            }
          },
        };
      }
      this.dataTable = $(this.table.nativeElement);
      this.dataTable.DataTable(this.dtOptions);
      this.IsuploadSearch = false;
      this.onPagination(data);
    }, err => {
      $('#error-one').modal('show');
      console.log(err.error.debugMessage)
      this.debugMessage = err.error.debugMessage
      this.errorStatus = err.status;
      this.IsuploadSearch = false;
      this.tableData = [];
    }, () => {
      // const keyColumn = Object.keys(this.obj[0]);
    });
  }

  pageOffset(offset, index) { 
    this.IsuploadSearch = true;
    if (this.tableData.length >= 1) {
      this.tableData = [];
      $('#table1').dataTable().fnClearTable();
      $('#table1').dataTable().fnDestroy();
    } else {
      this.tableData = [];
    }
    this.selectedIndex = index;
    this.moiDopaPersonFirstnameLastnameService.pageOffset(offset).subscribe(data => {
      moment.locale('th');
      this.obj = data['content'];
      this.tableData = this.obj;
      const columns = [];
      for (let index = 0; index < this.cells.length; index++) {
        const title = this.cells[index]['title'];
        const data = this.cells[index]['id'];
        columns.push({ 'title': title, 'data': data });
        if (index === this.cells.length - 1) {
          //  this.IsuploadFile = false;
        }
      }
      this.tableData = this.obj;
      for (let index = 0; index < this.tableData.length; index++) {
        this.tableData[index].dateOfBirth = this.convertDate.transform(this.tableData[index].dateOfBirth);
      }
      this.dtOptions = {
        data: this.tableData,
        columns: columns,
        retrieve: true,
        rowCallback: (row: Node, data: any[] | Object, index: number) => {
          const self = this;
          // Unbind first in order to avoid any duplicate handler
          // (see https://github.com/l-lin/angular-datatables/issues/87)
          $('td', row).unbind('click');
          $('td', row).bind('click', () => {
            self.someClickHandler(data);
          });
          return row;
        },
        pagingType: 'full_numbers',
        paging: false,
        ordering: false,
        info: false,
        language: {
          sLengthMenu: "แสดง _MENU_ รายการ",
          sZeroRecords: "ไม่พบข้อมูลที่ค้นหา",
          sInfo: "แสดง _START_ ถึง _END_ ทั้งหมด _TOTAL_ รายการ",
          sInfoEmpty: "แสดง 0 ถึง 0 จาก 0 รายการ",
          sInfoFiltered: "(จากจำนวนทั้งหมด _MAX_ รายการ)",
          sSearch: "ค้นหา:",
          oPaginate: {
            sFirst: "หน้าแรก",
            sPrevious: "ก่อนหน้า",
            sNext: "ถัดไป",
            sLast: "หน้าสุดท้าย"
          }
        },
      };
      this.dataTable = $(this.table.nativeElement);
      this.dataTable.DataTable(this.dtOptions);
      this.IsuploadSearch = false;
      this.onPagination(data);
    }, err => {
      $('#error-one').modal('show');
      console.log(err)
      this.debugMessage = err.error.debugMessage
      this.errorStatus = err.status;
      this.IsuploadSearch = false;
      this.tableData = [];
    }, () => {
      // const keyColumn = Object.keys(this.obj[0]);
    });
  }

  onGetHtml(report: IManageService) {
    console.log(report)
    this.htmlReport = report.getHtml(this.selectData, this.title);
    this.viewhtmlReport = report.viewgetHtml(this.selectData, this.title);
  }
  openDialog(arrData) {
    // $("#full-width-modal").modal();
    console.log(arrData)
    this.selectRow(arrData);
      const dialogRef = this.dialog.open(DialogContentExampleDialog, {
        data: {
          title: this.title, //dbname
          remark: this.remark,
          img: this.img,
          departmentImg: this.departmentImg,
          departmentTitle: this.departmentTitle,
          reportName: this.reportName,
          selectData: this.selectData,
          viewhtmlReport: this.viewhtmlReport,
          person: this.person,
          pdfPreview: () => this.pdfPreview()
        }
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    const dataSearch = {
      title: this.title, //dbname
      remark: this.remark,
      img: this.img,
      departmentImg: this.departmentImg,
      departmentTitle: this.departmentTitle,
    }
    localStorage.setItem('searchData', JSON.stringify(dataSearch));
  }
  
  public loadScript() {
    var isFound = false;
    var scripts = document.getElementsByTagName("script")
    for (var i = 0; i < scripts.length; ++i) {
      if (scripts[i].getAttribute('src') != null && scripts[i].getAttribute('src').includes("loader")) {
        isFound = true;
      }
    }

    if (!isFound) {
      var dynamicScripts = [
        "assets/js/pages/demo.products.js"
      ];

      for (var i = 0; i < dynamicScripts.length; i++) {
        let node = document.createElement('script');
        node.src = dynamicScripts[i];
        node.type = 'text/javascript';
        node.async = false;
        node.charset = 'utf-8';
        document.getElementsByTagName('head')[0].appendChild(node);
      }

    }
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }

//   checkvalue() :boolean {
//     let offLocCode = document.getElementById('offLocCode') as HTMLOptionElement;
//     const plate1 = document.getElementById('plate1') as HTMLInputElement;
//     const plate2 = document.getElementById('plate2') as HTMLInputElement;
//     const vehTypeRef = document.getElementById('vehTypeRef') as HTMLOptionElement
//     console.log(offLocCode.value)
//     if(offLocCode.value !== '' && plate1.value !== '' && plate2.value !== '' && vehTypeRef.value !== '') {
//       return true;
//     }
//     return false;
// }

  onChange=()=> {
    const value = document.getElementById('caseNo') as HTMLOptionElement;
    console.log(value.oninvalid)
    let data = this.civilDatas.filter(permistion=> permistion.court_name === this.selectedCivil);
    if(data.length != 0) {
      this.successCivil = data[0].abbr
    } else {
      this.successCivil = ''
    }
    let recheck = /^[กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮ]+\d+\/\d+$/.test(value.value);
    // console.log(recheck)
    if (this.successCivil.length <= 0 || value.value == '' || recheck == false) {
        this.isValid = true;
    } 
    else {
      this.isValid = false;
    }

    
  }
  onChangeCourt=()=> {
    const value = document.getElementById('blackNo') as HTMLOptionElement;
    console.log(value.value)
    let data = this.civilDatas.filter(permistion=> permistion.court_name === this.selectedCivil);
    if(data.length != 0) {
      this.successCourt = data[0].court_code
    } else {
      this.successCourt = ''
    }
    let recheck = /^[กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮ]+\d+\/\d+$/.test(value.value);
    if (this.successCourt.length <= 0 || value.value == '' || recheck == false) {
        this.isValid = true;
    } 
    else {
      this.isValid = false;
    }
  }
  changeVehicleTypeRef=()=> {
    let vehicleTypeRef = this.carvehTypeRefs.filter(permistion => permistion.vehicleTypeDesc === this.selectedVehicleTypeRef);
    if(vehicleTypeRef.length != 0) {
      this.successVehicleTypeRef = vehicleTypeRef[0].vehicleTypeRef
    }
  }

  changeCarOffLocCode=()=> {
    let carOffLocCode = this.carOffLocCodes.filter(permistion => permistion.value === this.selectedCarOffLocCode);
    console.log(carOffLocCode)
    if(carOffLocCode.length != 0) {
      this.successCarOffLocCode = carOffLocCode[0].offLocCode
      console.log(this.successCarOffLocCode)
    }
  }
   checkCidNumber(citizenid) {
    let i, sum;
    if (citizenid.length !== 13) {
      return false;
    }
    for (i = 0, sum = 0; i < 12; i++) {
      sum += parseInt(citizenid.charAt(i)) * (13 - i);
    }
    const mod = sum % 11;
    const check = (11 - mod) % 10;
    if (check === parseInt(citizenid.charAt(12))) {
      return true;
    } else {
      return false;
    }
  }


} // end class DxcUi0021Component

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
})
export class DialogContentExampleDialog {
  constructor(public dialogRef: MatDialogRef<DialogContentExampleDialog>, @Inject(MAT_DIALOG_DATA) public data: any, private cojJudgementService?: JudgementService )   {

  }
  closeDialog(): void {
    this.dialogRef.close();
  }
  open() {
    $(document).ready(function () {
      $("#centermodal").modal("show");
      // console.log($("#centermodal").modal("show"))
    });

  }
}


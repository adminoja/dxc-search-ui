

import { AnonymousCorpseService } from './shared/services/dxc/Cifs/anonymous-corpse.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
// import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';

import { DxcUi0014Component } from './components/singlereport/dxc-ui-0014/dxc-ui-0014.component';
import { DxcUi00141Component } from './components/singlereport/dxc-ui-0014-1/dxc-ui-0014-1.component';
import { DxcUi0018Component } from './components/singlereport/dxc-ui-0018/dxc-ui-0018.component';
import { DxcUi0019Component } from './components/singlereport/dxc-ui-0019/dxc-ui-0019.component';

import { DriverlicenseService } from './shared/services/dxc/dlt/driverlicense.service';
import { PrisonerService } from './shared/services/dxc/doc/prisoner.service';
import { CriminalService } from './shared/services/dxc/rtp/criminal.service';
import { ArrestWarrantService } from './shared/services/dxc/rtp/arrest-warrant.service';
import { MissingCarCaseService } from './shared/services/dxc/rtp/missing-car-case.service';
import { MissingPersonCaseService } from './shared/services/dxc/rtp/missing-person-case.service';
import { JuvenileOffenderService } from './shared/services/dxc/djop/juvenile-offender.service';
import { NarcoticOffenderService } from './shared/services/dxc/Oncb/narcotic-offender.service';
import { RequestorsService } from './shared/services/dxc/Rlpd/requestors.service';
import { MoiDopaPersonsService } from './shared/services/dxc/dopa/moi-dopa-persons.service';
import { MoiDopaAddressesService } from './shared/services/dxc/dopa/moi-dopa-addresses.service';
import { MoiDopaThaiIdCardService } from './shared/services/dxc/dopa/moi-dopa-thai-id-card.service';
import { MoiDopaBirthCertificatesService } from './shared/services/dxc/dopa/moi-dopa-birth-certificates.service';
import { RegSeizeService } from './shared/services/dxc/doc/reg-seize.service';
import { MoiMoacFisheriesIllegalService } from './shared/services/dxc/moac/moi-moac-fisheries-illegal.service';
import { MoiDopaAliensService } from './shared/services/dxc/dopa/moi-dopa-aliens.service';
import { MoiDopaBorderPassesService } from './shared/services/dxc/dopa/moi-dopa-border-passes.service';
import { MoiDopaDeathCertificatesService } from './shared/services/dxc/dopa/moi-dopa-death-certificates.service';
import { MoiDopaDivorceCertificatesService } from './shared/services/dxc/dopa/moi-dopa-divorce-certificates.service';
import { MoiDopaEducationBackgroundesService } from './shared/services/dxc/dopa/moi-dopa-education-backgroundes.service';
import { MoiDopaMarriageCertificatesService } from './shared/services/dxc/dopa/moi-dopa-marriage-certificates.service';
import { MoiDopaPassportsService } from './shared/services/dxc/dopa/moi-dopa-passports.service';
import { MoiDopaFacePhotosService } from './shared/services/dxc/dopa/moi-dopa-face-photos.service';
import { MoiMoeStudentsService } from './shared/services/dxc/moe/moi-moe-students.service';
import { MoiDoeAlienWorkforcesService } from './shared/services/dxc/doe/moi-doe-alien-workforces.service';
import { CorruptionaccusedsService } from 'src/app/core/shared/services/dxc/nacc/corruptionaccuseds.service';
import { WorkforceDevelopmentsService } from 'src/app/core/shared/services/dxc/dsd/workforce-developments.service';
import { MoiMsdhsNewBornBabiesService } from './shared/services/dxc/msdhs/moi-msdhs-new-born-babies.service';
import { LandandcondominiumtitlesService } from './shared/services/dxc/dol/moi-dol-land-and-condominium-titles.service';
import { CorpseService } from './shared/services/dxc/Cifs/corpse.service';
import { AttorneyCasesService } from './shared/services/dxc/agoth/attorney-cases.service';
import { DsiWarrantService } from './shared/services/dxc/Dsi/warrant.service';
import { MoiDopaPor4Service } from './shared/services/dxc/dopa/moi-dopa-por4.service';
import { BankruptcyCaseService } from './shared/services/dxc/Led/bankruptcy-case.service';
import { MoiNhsoHealthInsuranceRightsService } from './shared/services/dxc/Nhso/moi-nhso-health-insurance-rights.service';
import { ChargeSubjectService } from './shared/services/dxc/agoth/charge-subject.service';
import { IncidentLocationService } from './shared/services/dxc/agoth/incident-location.service';
import { CaseProsecutionAttorneyService } from './shared/services/dxc/agoth/case-prosecution-attorney.service';
import { CrimeVictimCompensationService } from './shared/services/dxc/Rlpd/crime-victim-compensation.service';

import { UserService } from './shared/services/Userprofile/user.service';
import { CitizenService } from './shared/services/dxc/dopa/citizen.service';
import { RemandeeService } from './shared/services/dxc/doc/remandee.service';

import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/singlereport/header/header.component';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FooterComponent } from './components/singlereport/footer/footer.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Report1Component } from '../core/components/singlereport/reports/report1/report1.component';
import { Report2Component } from '../core/components/singlereport/reports/report2/report2.component';
import { Report3Component } from '../core/components/singlereport/reports/report3/report3.component';
import { Report4Component } from '../core/components/singlereport/reports/report4/report4.component';
import { DxcUi0015Component } from './components/localsearch/dxc-ui-0015/dxc-ui-0015.component';
import { DxcUi0021Component, DialogContentExampleDialog } from './components/localsearch/dxc-ui-0021/dxc-ui-0021.component';
import { DxcModelDocPrisonerComponent } from '../core/components/localsearch/qmreporttemplate/dxc-model-doc-prisoner/dxc-model-doc-prisoner.component';
import { DxcModelAmloMoneyLaunderingCaseComponent } from '../core/components/localsearch/qmreporttemplate/dxc-model-amlo-money-laundering-case/dxc-model-amlo-money-laundering-case.component';
import { DxcModelDltDriverLicenseComponent } from '../core/components/localsearch/qmreporttemplate/dxc-model-dlt-driver-license/dxc-model-dlt-driver-license.component';
import { DxcModelRtpCriminalComponent } from './components/localsearch/qmreporttemplate/dxc-model-rtp-criminal/dxc-model-rtp-criminal.component';
import { DxcModelDopProbationerComponent } from './components/localsearch/qmreporttemplate/dxc-model-dop-probationer/dxc-model-dop-probationer.component';
import { DxcModelDjopJuvenileOffenderComponent } from './components/localsearch/qmreporttemplate/dxc-model-djop-juvenile-offender/dxc-model-djop-juvenile-offender.component';
import { DxcModelOncbNarcoticOffenderComponent } from './components/localsearch/qmreporttemplate/dxc-model-oncb-narcotic-offender/dxc-model-oncb-narcotic-offender.component';
import { DxcModelDopaCitizenComponent } from './components/localsearch/qmreporttemplate/dxc-model-dopa-citizen/dxc-model-dopa-citizen.component';
import { FilterPipe } from './shared/pipe/filter.pipe';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ThainumberPipe } from './shared/pipe/thainumber.pipe';
import { ThaiDatePipe } from './shared/pipe/thaidate.pipe';
import { DxcModelCifsAnonymousCorpseComponent } from './components/localsearch/qmreporttemplate/dxc-model-cifs-anonymous-corpse/dxc-model-cifs-anonymous-corpse.component';
import { DxcModelCifsCorpseComponent } from './components/localsearch/qmreporttemplate/dxc-model-cifs-corpse/dxc-model-cifs-corpse.component';
import { DxcModelCifsMissingPersonComponent } from './components/localsearch/qmreporttemplate/dxc-model-cifs-missing-person/dxc-model-cifs-missing-person.component';
import { DxcModelDjopJuvenileInvestigationReportsComponent } from './components/localsearch/qmreporttemplate/dxc-model-djop-juvenile-investigation-reports/dxc-model-djop-juvenile-investigation-reports.component';
import { DxcModelDltCarLicenseComponent } from './components/localsearch/qmreporttemplate/dxc-model-dlt-car-license/dxc-model-dlt-car-license.component';
import { DxcModelDocGoodConductAllowanceWithdrawalsComponent } from './components/localsearch/qmreporttemplate/dxc-model-doc-good-conduct-allowance-withdrawals/dxc-model-doc-good-conduct-allowance-withdrawals.component';
import { DxcModelDocParoleWithdrawalsComponent } from './components/localsearch/qmreporttemplate/dxc-model-doc-parole-withdrawals/dxc-model-doc-parole-withdrawals.component';
import { DxcModelDsiWarrantComponent } from './components/localsearch/qmreporttemplate/dxc-model-dsi-warrant/dxc-model-dsi-warrant.component';
import { DxcModelLedBankruptcyCaseComponent } from './components/localsearch/qmreporttemplate/dxc-model-led-bankruptcy-case/dxc-model-led-bankruptcy-case.component';
import { DxcModelRlpdComplainantComponent } from './components/localsearch/qmreporttemplate/dxc-model-rlpd-complainant/dxc-model-rlpd-complainant.component';
import { DxcModelRlpdCrimeDefendantCompensationComponent } from './components/localsearch/qmreporttemplate/dxc-model-rlpd-crime-defendant-compensation/dxc-model-rlpd-crime-defendant-compensation.component';
import { DxcModelRlpdCrimeVictimCompensationComponent } from './components/localsearch/qmreporttemplate/dxc-model-rlpd-crime-victim-compensation/dxc-model-rlpd-crime-victim-compensation.component';
import { DxcModelRlpdJusticeFundComponent } from './components/localsearch/qmreporttemplate/dxc-model-rlpd-justice-fund/dxc-model-rlpd-justice-fund.component';
import { DxcModelRtpArrestWarrantComponent } from './components/localsearch/qmreporttemplate/dxc-model-rtp-arrest-warrant/dxc-model-rtp-arrest-warrant.component';
import { DxcModelRtpMissingCarCaseComponent } from './components/localsearch/qmreporttemplate/dxc-model-rtp-missing-car-case/dxc-model-rtp-missing-car-case.component';
import { DxcModelRtpMissingPersonCaseComponent } from './components/localsearch/qmreporttemplate/dxc-model-rtp-missing-person-case/dxc-model-rtp-missing-person-case.component';
import { DxcModelSsoEmployeeEmploymentComponent } from './components/localsearch/qmreporttemplate/dxc-model-sso-employee-employment/dxc-model-sso-employee-employment.component';
import { DxcModelSsoEmployerDetailComponent } from './components/localsearch/qmreporttemplate/dxc-model-sso-employer-detail/dxc-model-sso-employer-detail.component';
import { DxcModelSsoSelectedHospitalComponent } from './components/localsearch/qmreporttemplate/dxc-model-sso-selected-hospital/dxc-model-sso-selected-hospital.component';
import { DxcModelRlpdRequestorsComponent } from './components/localsearch/qmreporttemplate/dxc-model-rlpd-requestors/dxc-model-rlpd-requestors.component';

import { Dxcui0006Component } from './components/reason/dxcui0006/dxcui0006.component';
import { DxcLoginComponent } from './components/reason/dxc-login/dxc-login.component';

import { DxcModelDopaMoiPersonsComponent } from './components/localsearch/qmreporttemplate/dxc-model-dopa-moi-persons/dxc-model-dopa-moi-persons.component';
import { DxcModelDopaMoiThaiidcardComponent } from './components/localsearch/qmreporttemplate/dxc-model-dopa-moi-thaiidcard/dxc-model-dopa-moi-thaiidcard.component';
import { DxcModelDopaMoiAddressesComponent } from './components/localsearch/qmreporttemplate/dxc-model-dopa-moi-addresses/dxc-model-dopa-moi-addresses.component';
import { DxcModelDopaMoiBirthcertificatesComponent } from './components/localsearch/qmreporttemplate/dxc-model-dopa-moi-birthcertificates/dxc-model-dopa-moi-birthcertificates.component';
import { DxcModelDocRegSeizeComponent } from './components/localsearch/qmreporttemplate/dxc-model-doc-reg-seize/dxc-model-doc-reg-seize.component';
import { DxcModelMoacMoiFisheriesIllegalComponent } from './components/localsearch/qmreporttemplate/dxc-model-moac-moi-fisheries-illegal/dxc-model-moac-moi-fisheries-illegal.component';
import { DxcModelDolLandAndCondominiumTitlesComponent } from './components/localsearch/qmreporttemplate/dxc-model-dol-land-and-condominium-titles/dxc-model-dol-land-and-condominium-titles.component';
import { DxcModelDopaMoiAliensComponent } from './components/localsearch/qmreporttemplate/dxc-model-dopa-moi-aliens/dxc-model-dopa-moi-aliens.component';
import { DxcModelDopaMoiBorderPassesComponent } from './components/localsearch/qmreporttemplate/dxc-model-dopa-moi-border-passes/dxc-model-dopa-moi-border-passes.component';
import { DxcModelDopaMoiDeathCertificatesComponent } from './components/localsearch/qmreporttemplate/dxc-model-dopa-moi-death-certificates/dxc-model-dopa-moi-death-certificates.component';
import { DxcModelDopaMoiDivorceCertificatesComponent } from './components/localsearch/qmreporttemplate/dxc-model-dopa-moi-divorce-certificates/dxc-model-dopa-moi-divorce-certificates.component';
import { DxcModelDopaMoiEducationBackgroundesComponent } from './components/localsearch/qmreporttemplate/dxc-model-dopa-moi-education-backgroundes/dxc-model-dopa-moi-education-backgroundes.component';
import { DxcModelDopaMoiMarriageCertificatesComponent } from './components/localsearch/qmreporttemplate/dxc-model-dopa-moi-marriage-certificates/dxc-model-dopa-moi-marriage-certificates.component';
import { DxcModelDopaMoiPassportsComponent } from './components/localsearch/qmreporttemplate/dxc-model-dopa-moi-passports/dxc-model-dopa-moi-passports.component';
import { DxcModelDopaMoiFacePhotosComponent } from './components/localsearch/qmreporttemplate/dxc-model-dopa-moi-face-photos/dxc-model-dopa-moi-face-photos.component';
import { DxcModelDoeMoiAlienWorkforcesComponent } from './components/localsearch/qmreporttemplate/dxc-model-doe-moi-alien-workforces/dxc-model-doe-moi-alien-workforces.component';
import { DxcModelDsdMoiWorkforceDevelopmentsComponent } from './components/localsearch/qmreporttemplate/dxc-model-dsd-moi-workforce-developments/dxc-model-dsd-moi-workforce-developments.component';
import { DxcModelNaccMoiCorruptionAccusedsComponent } from './components/localsearch/qmreporttemplate/dxc-model-nacc-moi-corruption-accuseds/dxc-model-nacc-moi-corruption-accuseds.component';
import { DxcModelMofRegistrantComponent } from './components/localsearch/qmreporttemplate/dxc-model-mof-registrant/dxc-model-mof-registrant.component';
import { DxcModelMsdhsMoiNewBornBabiesComponent } from './components/localsearch/qmreporttemplate/dxc-model-msdhs-moi-new-born-babies/dxc-model-msdhs-moi-new-born-babies.component';
import { DxcModelNhsoMoiHealthInsuranceRightsComponent } from './components/localsearch/qmreporttemplate/dxc-model-nhso-moi-nhso-health-insurance-rights/dxc-model-nhso-moi-nhso-health-insurance-rights.component';
import { DxcModelAgothCaseProsecutionAttorneyComponent } from './components/localsearch/qmreporttemplate/dxc-model-agoth-case-prosecution-attorney/dxc-model-agoth-case-prosecution-attorney.component';

import { CheckdbComponent } from './components/singlereport/checkdb/checkdb.component';
import { DxcModelJfoJfoCaseComponent } from './components/localsearch/qmreporttemplate/dxc-model-jfo-jfo-case/dxc-model-jfo-jfo-case.component';
import { DxcModelDbdCommercialregistrantComponent } from './components/localsearch/qmreporttemplate/dxc-model-dbd-commercialregistrant/dxc-model-dbd-commercialregistrant.component';
import { DxcModelAgothAttorneyCasesComponent } from './components/localsearch/qmreporttemplate/dxc-model-agoth-attorney-cases/dxc-model-agoth-attorney-cases.component';
import { DxcModelDopaMoiPor4Component } from './components/localsearch/qmreporttemplate/dxc-model-dopa-moi-por4/dxc-model-dopa-moi-por4.component';
import { ListLeftRegseizeComponent } from './components/singlereport/components/doc/regseize/list-left-regseize/list-left-regseize.component';
import { ListLeftProbationsComponent } from './components/singlereport/components/Dop/probations/list-left-probations/list-left-probations.component';
import { ListAlgationsProbationsComponent, AlgationsProbationsDialog } from './components/singlereport/components/Dop/probations/list-algations-probations/list-algations-probations.component';
import { ListLeftAddressesComponent } from './components/singlereport/components/dopa/addresses/list-left-addresses/list-left-addresses.component';
import { DialogContentAddressesDialog, ListNormalAddressesComponent } from './components/singlereport/components/dopa/addresses/list-normal-addresses/list-normal-addresses.component';
import { ListLeftFacePhotosComponent } from './components/singlereport/components/dopa/face-photos/list-left-face-photos/list-left-face-photos.component';
import { DialogContentFacephotosDialog, ListNormalFacePhotosComponent } from './components/singlereport/components/dopa/face-photos/list-normal-face-photos/list-normal-face-photos.component';
import { ListLeftPrisonerComponent } from './components/singlereport/components/doc/prisoner/list-left-prisoner/list-left-prisoner.component';
import { DialogContentPrisonerDialog, ListAlgationsPrisonerComponent } from './components/singlereport/components/doc/prisoner/list-algations-prisoner/list-algations-prisoner.component';
import { ListLeftRequestorsComponent } from './components/singlereport/components/Rlpd/Requestors/list-left-requestors/list-left-requestors.component';
import { DialogContentRequestorsDialog, ListNormalRequestorsComponent } from './components/singlereport/components/Rlpd/Requestors/list-normal-requestors/list-normal-requestors.component';
import { ListLeftJuvenileOffenderComponent } from './components/singlereport/components/Djop/JuvenileOffender/list-left-juvenile-offender/list-left-juvenile-offender.component';
import { ListLeftPersonsComponent } from './components/singlereport/components/dopa/persons/list-left-persons/list-left-persons.component';
import { DialogContentPersonDialog, ListNormalPersonsComponent } from './components/singlereport/components/dopa/persons/list-normal-persons/list-normal-persons.component';
import { ListLeftPor4Component } from './components/singlereport/components/dopa/por4/list-left-por4/list-left-por4.component';
import { DialogContentPor4Dialog, ListNormalPor4Component } from './components/singlereport/components/dopa/por4/list-normal-por4/list-normal-por4.component';
import { ListLeftBirthcertificatesComponent } from './components/singlereport/components/dopa/Birthcertificates/list-left-birthcertificates/list-left-birthcertificates.component';
import { DialogContentBirthcertificatesDialog, ListNormalBirthcertificatesComponent } from './components/singlereport/components/dopa/Birthcertificates/list-normal-birthcertificates/list-normal-birthcertificates.component';
import { ListLeftBorderpassesComponent } from './components/singlereport/components/dopa/Borderpasses/list-left-borderpasses/list-left-borderpasses.component';
import { DialogContentBorderPassesDialog, ListNormalBorderpassesComponent } from './components/singlereport/components/dopa/Borderpasses/list-normal-borderpasses/list-normal-borderpasses.component';
import { DialogContentJuvenileOffenderDialog, ListAllegationJuvenileOffenderComponent } from './components/singlereport/components/Djop/JuvenileOffender/list-allegation-juvenile-offender/list-allegation-juvenile-offender.component';
import { ListAllegationRegseizeComponent, AllegationsRegseizeDialog } from './components/singlereport/components/doc/regseize/list-allegation-regseize/list-allegation-regseize.component';
import { DialogContentThaiIdcardDialog, ListNormalThaiidcardComponent } from './components/singlereport/components/dopa/ThaiIdCard/list-normal-thaiidcard/list-normal-thaiidcard.component';
import { ListLeftAliensComponent } from './components/singlereport/components/dopa/aliens/list-left-aliens/list-left-aliens.component';
import { DialogContentAlienDialog, ListNormalAliensComponent } from './components/singlereport/components/dopa/aliens/list-normal-aliens/list-normal-aliens.component';
import { ListLeftThaiidcardComponent } from './components/singlereport/components/dopa/ThaiIdCard/list-left-thaiidcard/list-left-thaiidcard.component';
import { SearchByCidComponent } from './components/singlereport/components/search-by-cid/search-by-cid.component';
import { ListLeftNarcoticOffenderComponent } from './components/singlereport/components/oncb/narcotic-offender/list-left-narcotic-offender/list-left-narcotic-offender.component';
import { DialogContentNarcoticOffenderDialog, ListAllegationNarcoticOffenderComponent } from './components/singlereport/components/oncb/narcotic-offender/list-allegation-narcotic-offender/list-allegation-narcotic-offender.component';
import { ListAddressPrisonerComponent } from './components/singlereport/components/doc/prisoner/list-address-prisoner/list-address-prisoner.component';
import { ListAddressRequestorsComponent } from './components/singlereport/components/Rlpd/Requestors/list-address-requestors/list-address-requestors.component';
import { ViewReport2UpComponent } from './components/singlereport/components/view-report2-up/view-report2-up.component';
import { ViewReport2DownComponent } from './components/singlereport/components/view-report2-down/view-report2-down.component';
import { ViewReport3Component } from './components/singlereport/components/view-report3/view-report3.component';
import { ListLeftBankruptcyCaseComponent } from './components/singlereport/components/led/bankruptcy-case/list-left-bankruptcy-case/list-left-bankruptcy-case.component';
import { DialogContentBankruptcyCaseDialog, ListNormalBankruptcyCaseComponent } from './components/singlereport/components/led/bankruptcy-case/list-normal-bankruptcy-case/list-normal-bankruptcy-case.component';
import { ListAddressProbationsComponent } from './components/singlereport/components/Dop/probations/list-address-probations/list-address-probations.component';
import { ListLeftAttorneyCasesComponent } from './components/singlereport/components/agoth/attorney-cases/list-left-attorney-cases/list-left-attorney-cases.component';
import { ListAllegationAttorneyCasesComponent } from './components/singlereport/components/agoth/attorney-cases/list-allegation-attorney-cases/list-allegation-attorney-cases.component';
import { ListLeftPassportsComponent } from './components/singlereport/components/dopa/passports/list-left-passports/list-left-passports.component';
import { ListNormalPassportsComponent } from './components/singlereport/components/dopa/passports/list-normal-passports/list-normal-passports.component';
import { ListLeftMarriagecertificatesComponent } from './components/singlereport/components/dopa/Marriagecertificates/list-left-marriagecertificates/list-left-marriagecertificates.component';
import { DialogContentMarriageCertificatesDialog, ListNormalMarriagecertificatesComponent } from './components/singlereport/components/dopa/Marriagecertificates/list-normal-marriagecertificates/list-normal-marriagecertificates.component';
import { ListAddressNarcoticOffenderComponent } from './components/singlereport/components/oncb/narcotic-offender/list-address-narcotic-offender/list-address-narcotic-offender.component';
import { ListLeftMoneyLaunderingCaseComponent } from './components/singlereport/components/amlo/list-left-money-laundering-case/list-left-money-laundering-case.component';
import { DialogContentMoneyLaunderingCaseDialog, ListAllegationMoneyLaunderingCaseComponent } from './components/singlereport/components/amlo/list-allegation-money-laundering-case/list-allegation-money-laundering-case.component';
import { DialogContentDriverLicenseDialog, ListNormalDriverLicenseComponent } from './components/singlereport/components/dlt/driver-license/list-normal-driver-license/list-normal-driver-license.component';
import { ListLeftDriverLicenseComponent } from './components/singlereport/components/dlt/driver-license/list-left-driver-license/list-left-driver-license.component';
import { ListLeftWorkforceDevelopmentsComponent } from './components/singlereport/components/dsd/workforce-developments/list-left-workforce-developments/list-left-workforce-developments.component';
import { DialogContentWorkforceDevelopmentsDialog, ListNormalWorkforceDevelopmentsComponent } from './components/singlereport/components/dsd/workforce-developments/list-normal-workforce-developments/list-normal-workforce-developments.component';
import { ListLeftMissingPersonComponent } from './components/singlereport/components/cifs/MissingPerson/list-left-missing-person/list-left-missing-person.component';
// import { Dxcui030Component } from './components/localadmin/dxcui030/dxcui030.component';
import { PermissionGuard } from '../core/model/permission-guard';
import { AuthGuardService as AuthGuard } from '../core/guard/auth-guard.service';
import { WrongRouteComponent } from './components/wrong-route/wrong-route.component';
import { HistoryComponent } from './components/localsearch/dxc-ui-0015/component/history/history.component';
import { ObjectvaluePipe } from './shared/pipe/objectvalue.pipe';
import { DxcLoaderComponent } from './components/loader/dxc-loader/dxc-loader.component';
import { LoaderService } from './shared/services/loader.service';
import { LoaderInterceptorService } from './interceptor/loader-interceptor.service';
import { ConverseSexPipe } from './shared/pipe/probationer/converse-sex.pipe';
import { ConverseStatusPipe } from './shared/pipe/probationer/converse-status.pipe';
import { ThaiIdcardPipe } from './shared/pipe/thaiIdcard/thai-idcard.pipe';
import { CountlengthPipe } from './shared/pipe/countlength.pipe';
import { ListLeftCorruptionAccusedsComponent } from './components/singlereport/components/nacc/corruption_accuseds/list-left-corruption-accuseds/list-left-corruption-accuseds.component';
import { DialogContentCorruptionAccusedsDialog, ListAlgationsCorruptionAccusedsComponent } from './components/singlereport/components/nacc/corruption_accuseds/list-algations-corruption-accuseds/list-algations-corruption-accuseds.component';
import { ListTopPersonsComponent } from './components/singlereport/components/dopa/persons/list-top-persons/list-top-persons.component';
import { ListTopFacePhotosComponent } from './components/singlereport/components/dopa/face-photos/list-top-face-photos/list-top-face-photos.component';
import { ListLeftHealthInsuranceRightsComponent } from './components/singlereport/components/Nhso/health-insurance-rights/list-left-health-insurance-rights/list-left-health-insurance-rights.component';
import { DialogContentHealthInsuranceRightsDialog, ListNormalHealthInsuranceRightsComponent } from './components/singlereport/components/Nhso/health-insurance-rights/list-normal-health-insurance-rights/list-normal-health-insurance-rights.component';
import { ListLeftFisheriesillegalComponent } from './components/singlereport/components/moac/Fisheriesillegal/list-left-fisheriesillegal/list-left-fisheriesillegal.component';
import { ErrormessageUiComponent } from './components/errormessage/errormessage-ui/errormessage-ui.component';
import { DialogContentFisheriesIllegalDialog, ListNormalFisheriesillegalComponent } from './components/singlereport/components/moac/Fisheriesillegal/list-normal-fisheriesillegal/list-normal-fisheriesillegal/list-normal-fisheriesillegal.component';
import { ListLeftAlienWorkforcesComponent } from './components/singlereport/components/doe/alien-workforces/list-left-alien-workforces/list-left-alien-workforces.component';
import { ListLeftLandAndCondominiumTitlesComponent } from './components/singlereport/components/dol/land-and-condominium-titles/list-left-land-and-condominium-titles/list-left-land-and-condominium-titles.component';
import { DialogContentLandAndCondominiumDialog, ListNormalLandAndCondominiumTitlesComponent } from './components/singlereport/components/dol/land-and-condominium-titles/list-normal-land-and-condominium-titles/list-normal-land-and-condominium-titles.component';
import { DxcModelAgothChargeSubjectsComponent } from './components/localsearch/qmreporttemplate/dxc-model-agoth-charge-subjects/dxc-model-agoth-charge-subjects.component';
import { Dxc_Model_Agoth_ChargeSubject } from './shared/models/Dxc_Model_Agoth_ChargeSubject';
import { DxcModelAgothIncidentLocationComponent } from './components/localsearch/qmreporttemplate/dxc-model-agoth-incident-location/dxc-model-agoth-incident-location.component';
import { DxcModelAgothChargeComponent } from './components/localsearch/qmreporttemplate/dxc-model-agoth-charge/dxc-model-agoth-charge.component';
import { ListLeftChargeSubjectComponent } from './components/singlereport/components/agoth/charge-subject/list-left-charge-subject/list-left-charge-subject.component';
import { DialogContentChargeSubjectDialog, ListAllegationChargeSubjectComponent } from './components/singlereport/components/agoth/charge-subject/list-allegation-charge-subject/list-allegation-charge-subject.component';
import { ListLeftEmployeeEmploymentComponent } from './components/singlereport/components/sso/employee-employment/list-left-employee-employment/list-left-employee-employment.component';
import { DialogContentemployeeEmploymentDialog, ListNormalEmployeeEmploymentComponent } from './components/singlereport/components/sso/employee-employment/list-normal-employee-employment/list-normal-employee-employment.component';
import { ListLeftJfoCaseComponent } from './components/singlereport/components/jfo/jfoCase/list-left-jfo-case/list-left-jfo-case.component';
import { DialogContentJfoCaseDialog, ListNormalJfoCaseComponent } from './components/singlereport/components/jfo/jfoCase/list-normal-jfo-case/list-normal-jfo-case.component';

import { ListLeftDivorceCertificatesComponent } from './components/singlereport/components/dopa/DivorceCertificates/list-left-divorce-certificates/list-left-divorce-certificates.component';
import { DialogContentDivorceCertificatesDialog, ListNormalDivorceCertificatesComponent } from './components/singlereport/components/dopa/DivorceCertificates/list-normal-divorce-certificates/list-normal-divorce-certificates.component';
import { ListLeftEducationbackgroundesComponent } from './components/singlereport/components/dopa/education-backgroundes/list-left-educationbackgroundes/list-left-educationbackgroundes.component';
import { ListNormalEducationBackgroundesComponent } from './components/singlereport/components/dopa/education-backgroundes/list-normal-education-backgroundes/list-normal-education-backgroundes.component';
import { ListLeftStudentsComponent } from './components/singlereport/components/dopa/students/list-left-students/list-left-students.component';
import { ListNormalStudentsComponent } from './components/singlereport/components/dopa/students/list-normal-students/list-normal-students.component';
import { ListNormalAlienWorkforcesComponent } from './components/singlereport/components/doe/alien-workforces/list-normal-alien-workforces/list-normal-alien-workforces.component';
import { DxcModelDocRemandeeComponent } from './components/localsearch/qmreporttemplate/dxc-model-doc-remandee/dxc-model-doc-remandee/dxc-model-doc-remandee.component';
import { ListLeftRemandeeComponent } from './components/singlereport/components/doc/remandee/list-left-remandee/list-left-remandee/list-left-remandee.component';
import { DialogContentRemandeeDialog, ListAllegaitonRemandeeComponent } from './components/singlereport/components/doc/remandee/list-allegation-remandee/list-allegaiton-remandee/list-allegaiton-remandee.component';
import { ListLeftDeathCertificatesComponent } from './components/singlereport/components/dopa/deathcertificates/list-left-death-certificates/list-left-death-certificates.component';
import { ListNormalDeathCertificatesComponent } from './components/singlereport/components/dopa/deathcertificates/list-normal-death-certificates/list-normal-death-certificates.component';
import { ListLeftNewBornBabiesComponent } from './components/singlereport/components/msdhs/list-left-new-born-babies/list-left-new-born-babies.component';
import { DialogContentNewBornBabiesDialog, ListNormalNewBornBabiesComponent } from './components/singlereport/components/msdhs/list-normal-new-born-babies/list-normal-new-born-babies.component';
import { DxcModelAgothChargeVictimComponent } from './components/localsearch/qmreporttemplate/dxc-model-agoth-charge-victim/dxc-model-agoth-charge-victim.component';
import { ListLeftAgothChargeVictimComponent } from './components/singlereport/components/agoth/agoth-charge-victim/list-left-agoth-charge-victim/list-left-agoth-charge-victim.component';
import { DialogContentChargeVictimDialog, ListNormalAgothChargeVictimComponent } from './components/singlereport/components/agoth/agoth-charge-victim/list-normal-agoth-charge-victim/list-normal-agoth-charge-victim.component';


import { DxcModelCaseProsecutionAttorneyOrderComponent } from './components/localsearch/qmreporttemplate/dxc-model-case-prosecution-attorney-order/dxc-model-case-prosecution-attorney-order.component';
import { DxcModelChargeVerdictComponent } from './components/localsearch/qmreporttemplate/dxc-model-charge-verdict/dxc-model-charge-verdict.component';
import { DxcModelAgothAttorneySubcaseComponent } from './components/localsearch/qmreporttemplate/dxc-model-agoth-attorney-subcase/dxc-model-agoth-attorney-subcase.component';
import { ListLeftWarrantComponent } from './components/singlereport/components/Dsi/list-left-warrant/list-left-warrant.component';
import { DialogContentWarrantDialog, ListAllegationWarrantComponent } from './components/singlereport/components/Dsi/list-allegation-warrant/list-allegation-warrant.component';
import { ListLeftCriminalComponent } from './components/singlereport/components/rtp/criminal/list-left-criminal/list-left-criminal.component';
import { DialogContentCriminalDialog, ListAllegationCriminalComponent } from './components/singlereport/components/rtp/criminal/list-allegation-criminal/list-allegation-criminal.component';
import { DialogContentcorpseDialog, ListNormalCorpseComponent } from './components/singlereport/components/cifs/Corpse/list-normal-corpse/list-normal-corpse.component';
import { ListLeftCorpseComponent } from './components/singlereport/components/cifs/Corpse/list-left-corpse/list-left-corpse.component';
import { DxcModelDocReleasedPrisonersComponent } from './components/localsearch/qmreporttemplate/dxc-model-doc-released-prisoners/dxc-model-doc-released-prisoners.component';
import { DxcModelDocPrisonerImagesComponent } from './components/localsearch/qmreporttemplate/dxc-model-doc-prisoner-images/dxc-model-doc-prisoner-images.component';
import { DxcModelCifsReportVerificationComponent } from './components/localsearch/qmreporttemplate/dxc-model-cifs-report-verification/dxc-model-cifs-report-verification.component';
import { ListLeftReportVerificationComponent } from './components/singlereport/components/cifs/report-verification/list-left-report-verification/list-left-report-verification.component';
import { DialogContentVerificationDialog, ListNormalReportVerificationComponent } from './components/singlereport/components/cifs/report-verification/list-normal-report-verification/list-normal-report-verification.component';
import { DialogContentMissingPersonDialog, ListNormalMissingPersonComponent } from './components/singlereport/components/cifs/MissingPerson/list-normal-missing-person/list-normal-missing-person.component';
import { ListLeftCrimeDefendantCompensationComponent } from './components/singlereport/components/Rlpd/crime-defendant-compensation/list-left-crime-defendant-compensation/list-left-crime-defendant-compensation.component';
import { CrimeDefendantCompensationService } from './shared/services/dxc/Rlpd/crime-defendant-compensation.service';
import { DxcModelDopaMoiPersonChangenamePrimaryComponent } from './components/localsearch/qmreporttemplate/dxc-model-dopa-moi-person-changename-primary/dxc-model-dopa-moi-person-changename-primary.component';
import { ListLeftPersonChangenamePrimaryComponent } from './components/singlereport/components/dopa/PersonChangenamePrimary/list-left-person-changename-primary/list-left-person-changename-primary.component';
import { DialogContentChangenamePrimaryDialog, ListNormalPersonChangenamePrimaryComponent } from './components/singlereport/components/dopa/PersonChangenamePrimary/list-normal-person-changename-primary/list-normal-person-changename-primary.component';
import { DialogContentCrimeDefendantCompensationDialog, ListNormalCrimeDefendantCompensationComponent } from './components/singlereport/components/Rlpd/crime-defendant-compensation/list-normal-crime-defendant-compensation/list-normal-crime-defendant-compensation.component';
import { ListLeftCrimeVictimCompensationComponent } from './components/singlereport/components/Rlpd/crime-victim-compensation/list-left-crime-victim-compensation/list-left-crime-victim-compensation.component';
import { ListNormalCrimeVictimCompensationComponent } from './components/singlereport/components/Rlpd/crime-victim-compensation/list-normal-crime-victim-compensation/list-normal-crime-victim-compensation.component';
import { ListLeftReleasedOffenderComponent } from './components/singlereport/components/oja/list-left-released-offender/list-left-released-offender.component';
import { DialogContentReleasedOffenderDialog, ListAllegationReleasedOffenderComponent } from './components/singlereport/components/oja/list-allegation-released-offender/list-allegation-released-offender.component';
import { DxcModelReleasedOffenderComponent } from './components/localsearch/qmreporttemplate/dxc-model-released-offender/dxc-model-released-offender.component';
import { ListLeftCarLicenseComponent } from './components/singlereport/components/dlt/car-license/list-left-car-license/list-left-car-license.component';
import { DialogContentCarLicenseDialog, ListNormalCarLicenseComponent } from './components/singlereport/components/dlt/car-license/list-normal-car-license/list-normal-car-license.component';
import { ConverseNullPipe } from './shared/pipe/probationer/converse-null.pipe';
import { ConverseDatePipe } from './shared/pipe/converse-date.pipe';
import { DxcModelIdbDirectoryDimensionCaseComponent } from './components/localsearch/qmreporttemplate/dxc-model-idb-directory-dimension-case/dxc-model-idb-directory-dimension-case.component';
import { DxcModelIdbDirectoryDimensionPersonComponent } from './components/localsearch/qmreporttemplate/dxc-model-idb-directory-dimension-person/dxc-model-idb-directory-dimension-person.component';
import { DxcModelDopaMoiDopaPersonFirstnameLastnameComponent } from './components/localsearch/qmreporttemplate/dxc-model-dopa-moi-dopa-person-firstname-lastname/dxc-model-dopa-moi-dopa-person-firstname-lastname.component';
import { ConfirmMessageComponent} from './components/confirm-message/confirm-message.component';
import { SafeHtmlPipe } from './shared/pipe/safe-html.pipe';
import { RunScriptsDirectiveDirective } from './shared/pipe/run-scripts-directive.directive';
import { DxcModelDopaMoiDopaPersonChangelastnameComponent } from './components/localsearch/qmreporttemplate/dxc-model-dopa-moi-dopa-person-changelastname/dxc-model-dopa-moi-dopa-person-changelastname.component';
import { ListLeftPersonChangelastnameComponent } from './components/singlereport/components/dopa/PersonChangelastname/list-left-person-changelastname/list-left-person-changelastname.component';
import { DialogContentChangelastnameDialog, ListNormalPersonChangelastnameComponent } from './components/singlereport/components/dopa/PersonChangelastname/list-normal-person-changelastname/list-normal-person-changelastname.component';
import { DxcModelSsoEmploymentComponent } from './components/localsearch/qmreporttemplate/dxc-model-sso-employment/dxc-model-sso-employment.component';
import { ListLeftEmploymentComponent } from './components/singlereport/components/sso/employment/list-left-employment/list-left-employment.component';
import { SearchTimelineComponent } from './components/singlereport/search-timeline/search-timeline.component';
import { SearchInputComponent } from './components/singlereport/search-input/search-input.component';
import { SearchStatusComponent } from './components/singlereport/search-status/search-status.component';
import { DialogContentEmploymentDialog, ListNormalEmploymentComponent } from './components/singlereport/components/sso/employment/list-normal-employment/list-normal-employment.component';
import { DialogContentmissingPersonCaseDialog, ListNormalMissingPersonCaseComponent } from './components/singlereport/components/rtp/missing-person-case/list-normal-missing-person-case/list-normal-missing-person-case.component';
import { ModalModule } from './shared/services/components/modal';
import { ListLeftMissingPersonCaseComponent } from './components/singlereport/components/rtp/missing-person-case/list-left-missing-person-case/list-left-missing-person-case.component';
import { ConverseTimePipe } from './shared/pipe/converse-time.pipe';
import { ChangeDatePipe } from './shared/pipe/change-date.pipe';
import { PermissionDeniedComponent } from './components/permission-denied/permission-denied.component';
import { DatasetPipe } from './shared/pipe/dataset.pipe';
import { DxcModelDepMoiCrippleComponent } from './components/localsearch/qmreporttemplate/dxc-model-dep-moi-cripple/dxc-model-dep-moi-cripple.component';
import { ListLeftCrippleComponent } from './components/singlereport/components/dep/list-left-cripple/list-left-cripple.component';
import { DialogContentcrippleDialog, ListNormalCrippleComponent } from './components/singlereport/components/dep/list-normal-cripple/list-normal-cripple.component';
import { DxcModelCojArrestWarrantsComponent } from './components/localsearch/qmreporttemplate/dxc-model-coj-arrest-warrants/dxc-model-coj-arrest-warrants.component';
import { DxcModelCojJudgementSummarysComponent } from './components/localsearch/qmreporttemplate/dxc-model-coj-judgement-summarys/dxc-model-coj-judgement-summarys.component';
import { ListLeftCojArrestWarrantsComponent } from './components/singlereport/components/coj/arrest-warrants/list-left-coj-arrest-warrants/list-left-coj-arrest-warrants.component';
import { DialogContentCojArrestWarrantsDialog, ListAllgetionCojArrestWarrantsComponent } from './components/singlereport/components/coj/arrest-warrants/list-allgetion-coj-arrest-warrants/list-allgetion-coj-arrest-warrants.component';

import { SinglereportMenuComponent } from './components/singlereport/singlereport-menu/singlereport-menu.component';
// import { NgApexchartsModule } from 'ng-apexcharts';
import { ListTopThaiidcardComponent } from './components/singlereport/components/dopa/ThaiIdCard/list-top-thaiidcard/list-top-thaiidcard.component';
import { DialogContentThailandPassportDialog, ListNormalThailandPassportComponent } from './components/singlereport/components/dca/thailand-passport/list-normal-thailand-passport/list-normal-thailand-passport.component';
import { ListLeftThailandPassportComponent } from './components/singlereport/components/dca/thailand-passport/list-left-thailand-passport/list-left-thailand-passport.component';
import { DxcModelMofRegisterOfTaxpayersComponent } from './components/localsearch/qmreporttemplate/dxc-model-mof-register-of-taxpayers/dxc-model-mof-register-of-taxpayers.component';
import { DialogContentRegistrantDialog, ListNormalRegistrantComponent } from './components/singlereport/components/mof/registrant/list-normal-registrant/list-normal-registrant.component';
import { DialogContentRegisterOfTaxpayersDialog, ListNormalRegisterOfTaxpayersComponent } from './components/singlereport/components/mof/register-of-taxpayers/list-normal-register-of-taxpayers/list-normal-register-of-taxpayers.component';
import { ListLeftRegisterOfTaxpayersComponent } from './components/singlereport/components/mof/register-of-taxpayers/list-left-register-of-taxpayers/list-left-register-of-taxpayers.component';
import { DatePipe } from './shared/pipe/date.pipe';
import { ListLeftRegistrantComponent } from './components/singlereport/components/mof/registrant/list-left-registrant/list-left-registrant.component';
import { DxcModelMfaMoiThailandPassportComponent } from './components/localsearch/qmreporttemplate/dxc-model-dca-moi-thailand-passport/dxc-model-dca-moi-thailand-passport.component';
import { DialogContentPersonTableDialog, ListTableComponent } from './components/singlereport/components/dopa/persons/list-table-persons/list-table-persons.component';
import { ListTableEmploymentComponent } from './components/singlereport/components/sso/employment/list-table-employment/list-table-employment.component';
import { MenuSinglereportComponent } from './components/singlereport/menu-singlereport/menu-singlereport.component';
import { SearchIdcardComponent } from './components/singlereport/search-idcard/search-idcard.component';
import { LoadData1Component } from './components/singlereport/load-data1/load-data1.component';
import { LoadData2Component } from './components/singlereport/load-data2/load-data2.component';
import { ReportDocComponent } from './components/singlereport/report-doc/report-doc.component';
import { ReportDjopComponent } from './components/singlereport/report-djop/report-djop.component';
import { ListTopReportPersonsComponent } from './components/singlereport/components/dopa/persons/list-top-report-persons/list-top-report-persons.component';
import { DialogContentLandAndCondominiumTableDialog, ListTableLandAndCondominiumTitlesComponent } from './components/singlereport/components/dol/land-and-condominium-titles/list-table-land-and-condominium-titles/list-table-land-and-condominium-titles.component';
import { DialogContentCarLicenseTableDialog, ListTableCarLicenseComponent } from './components/singlereport/components/dlt/car-license/list-table-car-license/list-table-car-license.component';
import { DialogContentPrisonerTableDialog,ListTablePrisonerComponent } from './components/singlereport/components/doc/prisoner/list-table-prisoner/list-table-prisoner.component';
import { DialogContentjuvenileOffenderTableDialog, ListTableJuvenileOffenderComponent } from './components/singlereport/components/Djop/JuvenileOffender/list-table-juvenile-offender/list-table-juvenile-offender.component';
import { DialogContentProbationerTableDialog, ListTableProbationsComponent } from './components/singlereport/components/Dop/probations/list-table-probations/list-table-probations.component';
import { ReportDopComponent } from './components/singlereport/report-dop/report-dop.component';
import { ConverseCourtPipe } from './shared/pipe/court/converse-court.pipe';
import { DialogContentAddressesTableDialog, ListTableAddressesComponent } from './components/singlereport/components/dopa/addresses/list-table-addresses/list-table-addresses.component';
import { DialogContentAliensTableDialog, ListTableAliensComponent } from './components/singlereport/components/dopa/aliens/list-table-aliens/list-table-aliens.component';
import { DialogContentBirthcertificatesTableDialog, ListTableBirthcertificatesComponent } from './components/singlereport/components/dopa/Birthcertificates/list-table-birthcertificates/list-table-birthcertificates.component';
import { DialogContentDivorceCertificatesTableDialog, ListTableDivorceCertificatesComponent } from './components/singlereport/components/dopa/DivorceCertificates/list-table-divorce-certificates/list-table-divorce-certificates.component';
import { DialogContentMarriageCertificatesTableDialog, ListTableMarriagecertificatesComponent } from './components/singlereport/components/dopa/Marriagecertificates/list-table-marriagecertificates/list-table-marriagecertificates.component';
import { DialogContentFacephotosTableDialog, ListTableFacePhotosComponent } from './components/singlereport/components/dopa/face-photos/list-table-face-photos/list-table-face-photos.component';
import { DialogContentThaiIdcardTableDialog, ListTableThaiidcardComponent } from './components/singlereport/components/dopa/ThaiIdCard/list-table-thaiidcard/list-table-thaiidcard.component';
import { ListCareerCrimeDefendantCompensationComponent } from './components/singlereport/components/Rlpd/crime-defendant-compensation/list-career-crime-defendant-compensation/list-career-crime-defendant-compensation.component';
import { ListTableCareerCrimeDefendantCompensationComponent } from './components/singlereport/components/Rlpd/crime-defendant-compensation/list-table-career-crime-defendant-compensation/list-table-career-crime-defendant-compensation.component';
import { ChangeStatusPipe } from './shared/pipe/change-status.pipe';
import { DxcModelJfoJfoCase64Component } from './components/localsearch/qmreporttemplate/dxc-model-jfo-jfo-case64/dxc-model-jfo-jfo-case64.component';
import { ListLeftJfoCase64Component } from './components/singlereport/components/jfo/jfoCase64/list-left-jfo-case64/list-left-jfo-case64.component';
import { DialogContentJfoCase64Dialog, ListNormalJfoCase64Component } from './components/singlereport/components/jfo/jfoCase64/list-normal-jfo-case64/list-normal-jfo-case64.component';
import { ListCareerCrimeVictimCompensationComponent } from './components/singlereport/components/Rlpd/crime-victim-compensation/list-career-crime-victim-compensation/list-career-crime-victim-compensation.component';
import { ListCareerAgothChargeVictimComponent } from './components/singlereport/components/agoth/agoth-charge-victim/list-career-agoth-charge-victim/list-career-agoth-charge-victim.component';
import { ListCareerChargeSubjectComponent } from './components/singlereport/components/agoth/charge-subject/list-career-charge-subject/list-career-charge-subject.component';
import { ListCareerRequestorsComponent } from './components/singlereport/components/Rlpd/Requestors/list-career-requestors/list-career-requestors.component';
import { ListCareerCojArrestWarrantsComponent } from './components/singlereport/components/coj/arrest-warrants/list-career-coj-arrest-warrants/list-career-coj-arrest-warrants.component';
import { ListCareerBorderpassesComponent } from './components/singlereport/components/dopa/Borderpasses/list-career-borderpasses/list-career-borderpasses.component';
import { ListTableCareerAgothChargeVictimComponent } from './components/singlereport/components/agoth/agoth-charge-victim/list-table-career-agoth-charge-victim/list-table-career-agoth-charge-victim.component';
import { ListTableCareerChargeSubjectComponent } from './components/singlereport/components/agoth/charge-subject/list-table-career-charge-subject/list-table-career-charge-subject.component';
import { ListTableCareerCojArrestWarrantsComponent } from './components/singlereport/components/coj/arrest-warrants/list-table-career-coj-arrest-warrants/list-table-career-coj-arrest-warrants.component';
import { ListTableCareerBorderpassesComponent } from './components/singlereport/components/dopa/Borderpasses/list-table-career-borderpasses/list-table-career-borderpasses.component';
import { ListTableCareerCrimeVictimCompensationComponent } from './components/singlereport/components/Rlpd/crime-victim-compensation/list-table-career-crime-victim-compensation/list-table-career-crime-victim-compensation.component';
import { ListTableCareerRequestorsComponent } from './components/singlereport/components/Rlpd/Requestors/list-table-career-requestors/list-table-career-requestors.component';
import { ListContactAgothChargeVictimComponent } from './components/singlereport/components/agoth/agoth-charge-victim/list-contact-agoth-charge-victim/list-contact-agoth-charge-victim.component';
import { ListTableContactAgothChargeVictimComponent } from './components/singlereport/components/agoth/agoth-charge-victim/list-table-contact-agoth-charge-victim/list-table-contact-agoth-charge-victim.component';
import { ListContactChargeSubjectComponent } from './components/singlereport/components/agoth/charge-subject/list-contact-charge-subject/list-contact-charge-subject.component';
import { ListTableContactChargeSubjectComponent } from './components/singlereport/components/agoth/charge-subject/list-table-contact-charge-subject/list-table-contact-charge-subject.component';
import { ListContactCojArrestWarrantsComponent } from './components/singlereport/components/coj/arrest-warrants/list-contact-coj-arrest-warrants/list-contact-coj-arrest-warrants.component';
import { ListTableContactCojArrestWarrantsComponent } from './components/singlereport/components/coj/arrest-warrants/list-table-contact-coj-arrest-warrants/list-table-contact-coj-arrest-warrants.component';
import { ListContactCarLicenseComponent } from './components/singlereport/components/dlt/car-license/list-contact-car-license/list-contact-car-license.component';
import { ListTableCaontactCarLicenseComponent } from './components/singlereport/components/dlt/car-license/list-table-caontact-car-license/list-table-caontact-car-license.component';
import { ListContactPrisonerComponent } from './components/singlereport/components/doc/prisoner/list-contact-prisoner/list-contact-prisoner.component';
import { ListTableContactPrisonerComponent } from './components/singlereport/components/doc/prisoner/list-table-contact-prisoner/list-table-contact-prisoner.component';
import { ListContactRemandeeComponent } from './components/singlereport/components/doc/remandee/list-contact-remandee/list-contact-remandee.component';
import { ListTableContactRemandeeComponent } from './components/singlereport/components/doc/remandee/list-table-contact-remandee/list-table-contact-remandee.component';
import { ListContactProbationsComponent } from './components/singlereport/components/Dop/probations/list-contact-probations/list-contact-probations.component';
import { ListTableContactProbationsComponent } from './components/singlereport/components/Dop/probations/list-table-contact-probations/list-table-contact-probations.component';
import { ListContactAddressesComponent } from './components/singlereport/components/dopa/addresses/list-contact-addresses/list-contact-addresses.component';
import { ListTableContactAddressesComponent } from './components/singlereport/components/dopa/addresses/list-table-contact-addresses/list-table-contact-addresses.component';
import { ListContactBirthcertificatesComponent } from './components/singlereport/components/dopa/Birthcertificates/list-contact-birthcertificates/list-contact-birthcertificates.component';
import { ListTableContactBirthcertificatesComponent } from './components/singlereport/components/dopa/Birthcertificates/list-table-contact-birthcertificates/list-table-contact-birthcertificates.component';
import { ListContactBorderpassesComponent } from './components/singlereport/components/dopa/Borderpasses/list-contact-borderpasses/list-contact-borderpasses.component';
import { ListTableContactBorderpassesComponent } from './components/singlereport/components/dopa/Borderpasses/list-table-contact-borderpasses/list-table-contact-borderpasses.component';
import { ListContactPersonChangelastnameComponent } from './components/singlereport/components/dopa/PersonChangelastname/list-contact-person-changelastname/list-contact-person-changelastname.component';
import { ListTableContactPersonChangelastnameComponent } from './components/singlereport/components/dopa/PersonChangelastname/list-table-contact-person-changelastname/list-table-contact-person-changelastname.component';
import { ListContactPor4Component } from './components/singlereport/components/dopa/por4/list-contact-por4/list-contact-por4.component';
import { ListTableContactPor4Component } from './components/singlereport/components/dopa/por4/list-table-contact-por4/list-table-contact-por4.component';
import { ListContactThaiidcardComponent } from './components/singlereport/components/dopa/ThaiIdCard/list-contact-thaiidcard/list-contact-thaiidcard.component';
import { ListTableContactThaiidcardComponent } from './components/singlereport/components/dopa/ThaiIdCard/list-table-contact-thaiidcard/list-table-contact-thaiidcard.component';
import { ListContactWorkforceDevelopmentsComponent } from './components/singlereport/components/dsd/workforce-developments/list-contact-workforce-developments/list-contact-workforce-developments.component';
import { ListTableContactWorkforceDevelopmentsComponent } from './components/singlereport/components/dsd/workforce-developments/list-table-contact-workforce-developments/list-table-contact-workforce-developments.component';
import { ListContactRegisterOfTaxpayersComponent } from './components/singlereport/components/mof/register-of-taxpayers/list-contact-register-of-taxpayers/list-contact-register-of-taxpayers.component';
import { ListTableContactRegisterOfTaxpayersComponent } from './components/singlereport/components/mof/register-of-taxpayers/list-table-contact-register-of-taxpayers/list-table-contact-register-of-taxpayers.component';
import { ListContactRequestorsComponent } from './components/singlereport/components/Rlpd/Requestors/list-contact-requestors/list-contact-requestors.component';
import { ListTableContactRequestorsComponent } from './components/singlereport/components/Rlpd/Requestors/list-table-contact-requestors/list-table-contact-requestors.component';
import { ListContactCriminalComponent } from './components/singlereport/components/rtp/criminal/list-contact-criminal/list-contact-criminal.component';
import { ListTableContactCriminalComponent } from './components/singlereport/components/rtp/criminal/list-table-contact-criminal/list-table-contact-criminal.component';
import { DialogContentChangelastnameTableDialog, ListTablePersonChangelastnameComponent } from './components/singlereport/components/dopa/PersonChangelastname/list-table-person-changelastname/list-table-person-changelastname.component';
import { DialogContentChangenamePrimaryTableDialog, ListTablePersonChangenamePrimaryComponent } from './components/singlereport/components/dopa/PersonChangenamePrimary/list-table-person-changename-primary/list-table-person-changename-primary.component';
import { DialogContentBorderPassesTableDialog, ListTableBorderpassesComponent } from './components/singlereport/components/dopa/Borderpasses/list-table-borderpasses/list-table-borderpasses.component';
import { DialogPor4TableDialog, ListTablePor4Component } from './components/singlereport/components/dopa/por4/list-table-por4/list-table-por4.component';
import { ListCareerCriminalComponent } from './components/singlereport/components/rtp/criminal/list-career-criminal/list-career-criminal.component';
import { ListTableCareerCriminalComponent } from './components/singlereport/components/rtp/criminal/list-table-career-criminal/list-table-career-criminal.component';
import { DxcNoticeComponent } from './components/reason/dxcui0006/dxc-notice/dxc-notice/dxc-notice.component';
import { DxcPolicyComponent } from './components/reason/dxcui0006/dxc-policy/dxc-policy.component';

import { DxcModelCojJudgementComponent } from './components/localsearch/qmreporttemplate/dxc-model-coj-judgement/dxc-model-coj-judgement.component';
import { DxcModalRtpCriminalCaseComponent } from './components/localsearch/qmreporttemplate/dxc-model-rtp-criminal-case/dxc-modal-rtp-criminal-case.component';
import { DxcModelRtpTravelInformationComponent } from './components/localsearch/qmreporttemplate/dxc-model-rtp-travel-information/dxc-model-rtp-travel-information.component';
import { DxcModelRtpTrafficCaseComponent } from './components/localsearch/qmreporttemplate/dxc-model-rtp-traffic-case/dxc-model-rtp-traffic-case.component';
import { DxcModelRtpCriminalRecordComponent } from './components/localsearch/qmreporttemplate/dxc-model-rtp-criminal-record/dxc-model-rtp-criminal-record.component';
import { DialogContentCriminalRecordDialog, ListAllegationCriminalRecordComponent } from './components/singlereport/components/rtp/criminal-record/list-allegation-criminal-record/list-allegation-criminal-record.component';
import { DialogContentTravelInformationDialog, ListNormalTravelInformationComponent } from './components/singlereport/components/rtp/travel-information/list-normal-travel-information/list-normal-travel-information.component';
import { DialogContentTrafficCaseDialog, ListAllegationTrafficCaseComponent } from './components/singlereport/components/rtp/traffic-case/list-allegation-traffic-case/list-allegation-traffic-case.component';
import { ListLeftCriminalCaseComponent } from './components/singlereport/components/rtp/criminal/list-left-criminal-case/list-left-criminal-case.component';
import { DialogContentCriminalCaseDialog, ListAllegationCriminalCaseComponent } from './components/singlereport/components/rtp/criminal/list-allegation-criminal-case/list-allegation-criminal-case.component';
import { ListLeftCriminalRecordComponent } from './components/singlereport/components/rtp/criminal-record/list-left-criminal-record/list-left-criminal-record.component';
import { ListLeftTravelInformationComponent } from './components/singlereport/components/rtp/travel-information/list-left-travel-information/list-left-travel-information.component';
import { TrafficCaseService } from './shared/services/dxc/rtp/traffic-case.service';
import { CriminalCaseService } from './shared/services/dxc/rtp/criminal-case.service';
import { CriminalRecordService } from './shared/services/dxc/rtp/criminal-record.service';
import { ListLeftTrafficCaseComponent } from './components/singlereport/components/rtp/traffic-case/list-left-traffic-case/list-left-traffic-case.component';
import { DxcModelRtpWarrantOfArrestComponent } from './components/localsearch/qmreporttemplate/dxc-model-rtp-warrant-of-arrest/dxc-model-rtp-warrant-of-arrest.component';
import { DialogContentWarrantOfArrestDialog, ListNormalWarrantOfArrestComponent } from './components/singlereport/components/rtp/warrant-of-arrest/list-allgetion-warrant-of-arrest/list-normal-warrant-of-arrest.component';
import { DxcModelDjopJuvenileOffender65Component } from './components/localsearch/qmreporttemplate/dxc-model-djop-juvenile-offender65/dxc-model-djop-juvenile-offender65.component';
import { DialogContentJuvenileOffender65Dialog, ListAllegationJuvenileOffender65Component } from './components/singlereport/components/Djop/JuvenileOffender65/list-allegation-juvenile-offender65/list-allegation-juvenile-offender65.component';
import { ListLeftJuvenileOffender65Component } from './components/singlereport/components/Djop/JuvenileOffender65/list-left-juvenile-offender65/list-left-juvenile-offender65.component';
import { DxcModelDocPrisonerBankruptComponent } from './components/localsearch/qmreporttemplate/dxc-model-doc-prisoner-bankrupt/dxc-model-doc-prisoner-bankrupt.component';
import { DxcModelDopProbationerNarcoticsComponent } from './components/localsearch/qmreporttemplate/dxc-model-dop-probationer-narcotics/dxc-model-dop-probationer-narcotics.component';
import { DxcModelDocAbsolutePrisonerInformationBeforeReleaseOnProbationComponent } from './components/localsearch/qmreporttemplate/dxc-model-doc-absolute-prisoner-information-before-release-on-probation/dxc-model-doc-absolute-prisoner-information-before-release-on-probation.component';
import { DxcModelDopFactFindingReportComponent } from './components/localsearch/qmreporttemplate/dxc-model-dop-fact-finding-report/dxc-model-dop-fact-finding-report.component';
import { DialogContentAllgationsProbationerNarcoticsDialog, ListAllgationsProbationerNarcoticsComponent } from './components/singlereport/components/Dop/probationer-narcotics/list-allgations-probationer-narcotics/list-allgations-probationer-narcotics.component';
import { LoginThaidComponent } from './components/login-thaid/login-thaid.component';
import { DxcModelMoeMoiStudentsComponent } from './components/localsearch/qmreporttemplate/dxc-model-moe-moi-students/dxc-model-moe-moi-students.component';
import { DxcModelMoiMoeGraduatesComponent } from './components/localsearch/qmreporttemplate/dxc-model-moi-moe-graduates/dxc-model-moi-moe-graduates.component';
import { MatDialogModule } from '@angular/material/dialog';


const routes: Routes = [
  // SingleReport
  { path: '', component: Dxcui0006Component },
  { path: 'localsearch', component: DxcUi0015Component },
  { path: 'loginThaiD', component: LoginThaidComponent },
  { path: 'dxcui0014/dxcui00141/:reportname', component: DxcUi00141Component },
  { path: 'dxcui0014/singlereport', component: SinglereportMenuComponent },

  { path: 'dxcui0014/dxcui00142/report1', component: Report1Component },
  { path: 'dxcui0014/dxcui00142/report2', component: Report2Component },
  { path: 'dxcui0014/dxcui00142/report3', component: Report3Component },
  { path: 'dxcui0014/dxcui00142/report4', component: Report4Component },

  { path: 'dxcui0014/dxcui0018/:reportname/:citizenCardNumber/:firstName/:lastName/:prisoner/:casename/:dataSetId', component: DxcUi0018Component },
  { path: 'dxcui0014/dxcui0018/report1', component: Report1Component },
  { path: 'dxcui0014/dxcui0018/report2', component: Report2Component },
  { path: 'dxcui0014/dxcui0018/report3', component: Report3Component },
  { path: 'dxcui0014/dxcui0018/report4', component: Report4Component },

  { path: 'dxcui0014/dxcui0019/:reportname/:citizenCardNumber/:firstName/:lastName/:searchId', component: DxcUi0019Component },
  { path: 'dxcui0014/timeline/:reportname', component: SearchTimelineComponent },
  { path: 'dxcui0014/dxcui0019/report1', component: Report1Component },
  { path: 'dxcui0014/dxcui0019/report2', component: Report2Component },
  { path: 'dxcui0014/dxcui0019/report3', component: Report3Component },
  { path: 'dxcui0014/dxcui0019/report4', component: Report4Component },
  // { path: 'dxcui0014/reportdop/:reportname/:citizenCardNumber/:firstName/:lastName', component: ReportDopComponent },
  // { path: 'reportdop', component: ReportDopComponent },
  { path: 'singlereport', component: MenuSinglereportComponent },
  { path: 'singlereport/search-idcard/:reportname', component: SearchIdcardComponent},
  { path: 'singlereport/reportdop/:reportname/:searchId', component: ReportDopComponent },
  { path: 'loaddata1', component: LoadData1Component },
  { path: 'singlereport/loaddata1/:reportname', component: LoadData1Component },
  { path: 'loaddata2', component: LoadData2Component },
  { path: 'singlereport/loaddata2/:reportname', component: LoadData2Component },
  { path: 'singlereport/loaddata2/report1', component: Report1Component },
  { path: 'singlereport/reportdjop/:reportname/:searchId', component: ReportDjopComponent },
  { path: 'singlereport/reportdoc/:reportname/:searchId', component: ReportDocComponent },

  // LocalSearch
  { path: 'localsearch', component: DxcUi0015Component },
  { path: 'localsearch/:dbname/:remark/:img/:departmentImg/:departmentTitle', component: DxcUi0021Component },
  { path: 'ReportDltcarLicense', component: DxcModelDltCarLicenseComponent },
  { path: 'ReportDltDriverLicense', component: DxcModelDltDriverLicenseComponent },
  { path: 'ReportRtpCriminal', component: DxcModelRtpCriminalComponent },
  { path: 'ReportDocPrisoner', component: DxcModelDocPrisonerComponent },
  { path: 'ReportJuvenileOffender', component: DxcModelDjopJuvenileOffenderComponent },
  { path: 'ReportDopProbationer', component: DxcModelDopProbationerComponent },
  { path: 'ReportOncbNarcoticOffender', component: DxcModelOncbNarcoticOffenderComponent },
  { path: 'ReportRlpdRequestors', component: DxcModelRlpdRequestorsComponent },
  { path: 'ReportDopaCitizen', component: DxcModelDopaCitizenComponent },
  { path: 'ReportDopaMoiPersons', component: DxcModelDopaMoiPersonsComponent },
  { path: 'ReportDopaMoiThaiidcard', component: DxcModelDopaMoiThaiidcardComponent },
  { path: 'ReportMoiDopaAddresses', component: DxcModelDopaMoiAddressesComponent },
  { path: 'Reportbirthcertificates', component: DxcModelDopaMoiBirthcertificatesComponent },
  { path: 'ReportDocRegseize', component: DxcModelDocRegSeizeComponent },
  { path: 'ReportMoacMoiFisheriesIllegal', component: DxcModelMoacMoiFisheriesIllegalComponent },
  { path: 'ReportDolLandAndCondominiumTitles', component: DxcModelDolLandAndCondominiumTitlesComponent },
  { path: 'ReportDopaMoiAliens', component: DxcModelDopaMoiAliensComponent },
  { path: 'ReportborderPasses', component: DxcModelDopaMoiBorderPassesComponent },
  { path: 'ReportDopaMoiDeathCertificates', component: DxcModelDopaMoiDeathCertificatesComponent },
  { path: 'ReportDopaMoiDivorceCertificates', component: DxcModelDopaMoiDivorceCertificatesComponent },
  { path: 'ReportDopaEducationBackgroundes', component: DxcModelDopaMoiEducationBackgroundesComponent },
  { path: 'ReportMarriageCertificates', component: DxcModelDopaMoiMarriageCertificatesComponent },
  { path: 'ReportMoiDopaPassports', component: DxcModelDopaMoiPassportsComponent },
  { path: 'ReportMoiDopaFacePhotos', component: DxcModelDopaMoiFacePhotosComponent },
  { path: 'ReportMoeStudents', component: DxcModelMoeMoiStudentsComponent },
  { path: 'ReportDoeMoiAlienWorkforces', component: DxcModelDoeMoiAlienWorkforcesComponent },
  { path: 'ReportMoiDsdWorkforceDevelopments', component: DxcModelDsdMoiWorkforceDevelopmentsComponent },
  { path: 'ReportNaccCorruptionaccuseds', component: DxcModelNaccMoiCorruptionAccusedsComponent },
  { path: 'ReportAmloMoneyLaunderingCase', component: DxcModelAmloMoneyLaunderingCaseComponent },
  { path: 'ReportLedBankruptcyCase', component: DxcModelLedBankruptcyCaseComponent },
  { path: 'ReportMofRegistrant', component: DxcModelMofRegistrantComponent },
  { path: 'ReportCifsAnonymousCorpse', component: DxcModelCifsAnonymousCorpseComponent },
  { path: 'ReportMsdhsMoiNewBornBabies', component: DxcModelMsdhsMoiNewBornBabiesComponent },
  { path: 'ReportRtpMissingCarCase', component: DxcModelRtpMissingCarCaseComponent },
  { path: 'ReportRtpArrestWarrant', component: DxcModelRtpArrestWarrantComponent },
  { path: 'ReportCifsMissingPerson', component: DxcModelCifsMissingPersonComponent },
  { path: 'ReportDsiWarrant', component: DxcModelDsiWarrantComponent },
  { path: 'ReportDbdCommercialRegistrant', component: DxcModelDbdCommercialregistrantComponent },
  { path: 'ReportJfoJfoCase', component: DxcModelJfoJfoCaseComponent },
  { path: 'ReportCifsCifsCorpse', component: DxcModelCifsCorpseComponent },
  { path: 'ReportAgothAttorneyCases', component: DxcModelAgothAttorneyCasesComponent },
  { path: 'ReportDopaMoiPor4', component: DxcModelDopaMoiPor4Component },
  { path: 'ReportSsoEmployeeEmployment', component: DxcModelSsoEmployeeEmploymentComponent },
  { path: 'ReportNhsoMoiHealthInsuranceRights', component: DxcModelNhsoMoiHealthInsuranceRightsComponent },
  { path: 'ReportNaccCorruptionaccuseds', component: DxcModelNaccMoiCorruptionAccusedsComponent },
  { path: 'ReportAgothChargeSubject', component: DxcModelAgothChargeSubjectsComponent },
  { path: 'ReportAgothIncidentLocation', component: DxcModelAgothIncidentLocationComponent },
  { path: 'ReportAgothCharge', component: DxcModelAgothChargeComponent },
  { path: 'ReportDopaMoiDivorceCertificates', component: DxcModelDopaMoiDivorceCertificatesComponent },
  { path: 'ReportDocRemandee', component: DxcModelDocRemandeeComponent },
  { path: 'ReportAgothChargeVictim', component: DxcModelAgothChargeVictimComponent },
  { path: 'ReportAgothCaseProsecutionAttorney', component: DxcModelAgothCaseProsecutionAttorneyComponent },
  { path: 'ReportCaseProsecutionAttorneyOrder', component: DxcModelCaseProsecutionAttorneyOrderComponent },
  { path: 'ReportAgothChargeVerdict', component: DxcModelChargeVerdictComponent },
  { path: 'ReportAgothAttorneySubcase', component: DxcModelAgothAttorneySubcaseComponent },
  { path: 'ReportRtpMissingPersonCase', component: DxcModelRtpMissingPersonCaseComponent },
  { path: 'ReportRlpdCrimeDefendantCompensation', component: DxcModelRlpdCrimeDefendantCompensationComponent },
  { path: 'ReportDocReleasedPrisoners', component: DxcModelDocReleasedPrisonersComponent },
  { path: 'ReportDocPrisonerImages', component: DxcModelDocPrisonerImagesComponent },
  { path: 'ReportCifsReportVerification', component: DxcModelCifsReportVerificationComponent },
  { path: 'ReportMoiDopaPersonChangenamePrimary', component: DxcModelDopaMoiPersonChangenamePrimaryComponent },
  { path: 'ReportRlpdCrimeVictimCompensation', component: DxcModelRlpdCrimeVictimCompensationComponent },
  { path: 'ReportDocReleasedOffender', component: DxcModelReleasedOffenderComponent },
  { path: 'ReportIdbDirectoryDimensionCase', component: DxcModelIdbDirectoryDimensionCaseComponent },
  { path: 'ReportIdbDirectoryDimensionPerson', component: DxcModelIdbDirectoryDimensionPersonComponent },
  { path: 'ReportMoiDopaPersonFirstnameLastname', component: DxcModelDopaMoiDopaPersonFirstnameLastnameComponent },
  { path: 'ReportMoiDopaPersonChangelastname', component: DxcModelDopaMoiDopaPersonChangelastnameComponent },
  { path: 'confirm/:citizenCardNumber', component: ConfirmMessageComponent},
  { path: 'localsearch/:dbname/:remark/:img/:departmentImg/:departmentTitle/:citizenCardNumber', component: DxcUi0021Component },
  { path: 'ReportSsoEmployment', component: DxcModelSsoEmploymentComponent },
  { path: 'ReportMoiDepcripple', component: DxcModelDepMoiCrippleComponent },
  { path: 'ReportMoiMfaThailandPassport', component: DxcModelMfaMoiThailandPassportComponent },
  { path: 'ReportCojArrestWarrants', component: DxcModelCojArrestWarrantsComponent },
  { path: 'ReportCojJudgementSummarys', component: DxcModelCojJudgementSummarysComponent},
  { path: 'ReportMofRegisterOfTaxpayers', component: DxcModelMofRegisterOfTaxpayersComponent},
  { path: 'ReportJfoJfoCase64', component: DxcModelJfoJfoCase64Component},
  { path: 'ReportRtpCriminalCase', component: DxcModalRtpCriminalCaseComponent},
  { path: 'ReportRtpTravelInformation', component: DxcModelRtpTravelInformationComponent},
  { path: 'ReportRtpTrafficCase', component: DxcModelRtpTrafficCaseComponent},
  { path: 'ReportRtpCriminalRecord', component: DxcModelRtpCriminalRecordComponent},
  { path: 'ReportSsoSelectedHospital', component: DxcModelSsoSelectedHospitalComponent},
  { path: 'Policy', component: DxcPolicyComponent},
  { path: 'ReportRtpWarrantOfArrest', component: DxcModelRtpWarrantOfArrestComponent},
  { path: 'ReportDjopJuvenileOffender65', component: DxcModelDjopJuvenileOffender65Component},
  { path: 'ReportDocPrisonerBankrupt', component: DxcModelDocPrisonerBankruptComponent},
  { path: 'ReportDopProbationerNarcotics', component: DxcModelDopProbationerNarcoticsComponent},
  { path: 'ReportDopFactFindingReport', component: DxcModelDopFactFindingReportComponent},
  { path: 'ReportDocAbsolutePrisonerInformationBeforeReleaseOnProbation', component: DxcModelDocAbsolutePrisonerInformationBeforeReleaseOnProbationComponent},
  { path: 'ReportMoeGraduates', component: DxcModelMoiMoeGraduatesComponent},


  // Reason
  // { path: 'dxcui0006', component: Dxcui0006Component },
  // { path: 'dxcuilogin', component: DxcLoginComponent },
  // {path:'dxcui0030',component:Dxcui030Component}

  // Check Status Database
  // { path: 'checkStatus', component: CheckdbComponent},

  // Error
  { path: '401', component: WrongRouteComponent },
  { path: '404', component: WrongRouteComponent },
  { path: '500', component: WrongRouteComponent },
  { path: '504', component: WrongRouteComponent },
  { path: '0', component: WrongRouteComponent },
  { path: 'denied/:error', component: PermissionDeniedComponent },

];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes),
        // HttpModule,
        // StorageServiceModule,
        // NgProgressModule.forRoot({
        //   trickleSpeed: 200,
        //   min: 20,
        //   meteor: false
        // }),
        NgbModule,
        ReactiveFormsModule,
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        MatSidenavModule,
        MatListModule,
        MatExpansionModule,
        MatCardModule,
        MatDialogModule,
        ModalModule,
        // NgApexchartsModule,
    ],
    declarations: [
        // SingleReport
        // SidemenuComponent,
        DialogContentExampleDialog,
        AlgationsProbationsDialog,
        AllegationsRegseizeDialog,
        DialogContentPrisonerDialog,
        DialogContentRemandeeDialog,
        DialogContentReleasedOffenderDialog,
        DialogContentChargeVictimDialog,
        DialogContentChargeSubjectDialog,
        DialogContentMoneyLaunderingCaseDialog,
        DialogContentcorpseDialog,
        DialogContentemployeeEmploymentDialog,
        DialogContentEmploymentDialog,
        DialogContentmissingPersonCaseDialog,
        DialogContentCriminalDialog,
        DialogContentCrimeDefendantCompensationDialog,
        DialogContentNarcoticOffenderDialog,
        DialogContentHealthInsuranceRightsDialog,
        DialogContentCorruptionAccusedsDialog,
        DialogContentNewBornBabiesDialog,
        DialogContentRegistrantDialog,
        DialogContentFisheriesIllegalDialog,
        DialogContentMissingPersonDialog,
        DialogContentJuvenileOffenderDialog,
        DialogContentCarLicenseDialog,
        DialogContentAddressesDialog,
        DialogContentAlienDialog,
        DialogContentDriverLicenseDialog,
        DialogContentVerificationDialog,
        DialogContentLandAndCondominiumDialog,
        DialogContentBirthcertificatesDialog,
        DialogContentBorderPassesDialog,
        DialogContentDivorceCertificatesDialog,
        DialogContentFacephotosDialog,
        DialogContentMarriageCertificatesDialog,
        DialogContentChangelastnameDialog,
        DialogContentChangenamePrimaryDialog,
        DialogContentPersonDialog,
        DialogContentPor4Dialog,
        DialogContentThaiIdcardDialog,
        DialogContentWorkforceDevelopmentsDialog,
        DialogContentJfoCaseDialog,
        DialogContentBankruptcyCaseDialog,
        DialogContentcrippleDialog,
        DialogContentRequestorsDialog,
        DialogContentThailandPassportDialog,
        DialogContentCojArrestWarrantsDialog,
        DialogContentRegisterOfTaxpayersDialog,
        DialogContentPersonTableDialog,
        DialogContentLandAndCondominiumTableDialog,
        DialogContentCarLicenseTableDialog,
        DialogContentPrisonerTableDialog,
        DialogContentjuvenileOffenderTableDialog,
        DialogContentProbationerTableDialog,
        DialogContentAddressesTableDialog,
        DialogContentAliensTableDialog,
        DialogContentBirthcertificatesTableDialog,
        DialogContentDivorceCertificatesTableDialog,
        DialogContentMarriageCertificatesTableDialog,
        DialogContentFacephotosTableDialog,
        DialogContentThaiIdcardTableDialog,
        DialogContentJfoCase64Dialog,
        DialogContentChangelastnameTableDialog,
        DialogContentChangenamePrimaryTableDialog,
        DialogContentBorderPassesTableDialog,
        DialogContentCriminalRecordDialog,
        DialogPor4TableDialog,
        DialogContentTravelInformationDialog,
        DialogContentTrafficCaseDialog,
        DialogContentWarrantDialog,
        DialogContentWarrantOfArrestDialog,
        DialogContentJuvenileOffender65Dialog,
        DialogContentAllgationsProbationerNarcoticsDialog,
        Dxcui0006Component,
        DxcUi0014Component,
        DxcUi00141Component,
        DxcUi0018Component,
        DxcUi0019Component,
        // LocalSearch
        DxcUi0015Component,
        DxcUi0021Component,
        DxcModelDocPrisonerComponent,
        DxcModelAmloMoneyLaunderingCaseComponent,
        DxcModelDltDriverLicenseComponent,
        DxcModelDjopJuvenileOffenderComponent,
        DxcModelRtpCriminalComponent,
        DxcModelDopProbationerComponent,
        DxcModelOncbNarcoticOffenderComponent,
        DxcModelDopaCitizenComponent,
        // HeaderComponent,
        DashboardComponent,
        FooterComponent,
        Report1Component,
        Report2Component,
        Report3Component,
        Report4Component,
        FilterPipe,
        ThainumberPipe,
        ThaiDatePipe,
        DxcModelCifsAnonymousCorpseComponent,
        DxcModelCifsCorpseComponent,
        DxcModelCifsMissingPersonComponent,
        DxcModelDjopJuvenileInvestigationReportsComponent,
        DxcModelDltCarLicenseComponent,
        DxcModelDocGoodConductAllowanceWithdrawalsComponent,
        DxcModelDocParoleWithdrawalsComponent,
        DxcModelDsiWarrantComponent,
        DxcModelLedBankruptcyCaseComponent,
        DxcModelRlpdComplainantComponent,
        DxcModelRlpdCrimeDefendantCompensationComponent,
        DxcModelRlpdCrimeVictimCompensationComponent,
        DxcModelRlpdJusticeFundComponent,
        DxcModelRtpArrestWarrantComponent,
        DxcModelRtpMissingCarCaseComponent,
        DxcModelRtpMissingPersonCaseComponent,
        DxcModelSsoEmployeeEmploymentComponent,
        DxcModelSsoEmployerDetailComponent,
        DxcModelSsoSelectedHospitalComponent,
        DxcModelRlpdRequestorsComponent,
        DxcLoginComponent,
        DxcModelDopaMoiPersonsComponent,
        DxcModelDopaMoiThaiidcardComponent,
        DxcModelDopaMoiAddressesComponent,
        DxcModelDopaMoiBirthcertificatesComponent,
        DxcModelDocRegSeizeComponent,
        DxcModelMoacMoiFisheriesIllegalComponent,
        DxcModelDolLandAndCondominiumTitlesComponent,
        DxcModelDopaMoiAliensComponent,
        DxcModelDopaMoiBorderPassesComponent,
        DxcModelDopaMoiDeathCertificatesComponent,
        DxcModelDopaMoiDivorceCertificatesComponent,
        DxcModelDopaMoiEducationBackgroundesComponent,
        DxcModelDopaMoiMarriageCertificatesComponent,
        DxcModelDopaMoiPassportsComponent,
        DxcModelDopaMoiFacePhotosComponent,
        DxcModelMoeMoiStudentsComponent,
        DxcModelDoeMoiAlienWorkforcesComponent,
        DxcModelDsdMoiWorkforceDevelopmentsComponent,
        DxcModelNaccMoiCorruptionAccusedsComponent,
        DxcModelMofRegistrantComponent,
        DxcModelCifsAnonymousCorpseComponent,
        DxcModelMsdhsMoiNewBornBabiesComponent,
        DxcModelNhsoMoiHealthInsuranceRightsComponent,
        DxcModelAgothChargeSubjectsComponent,
        DxcModelAgothIncidentLocationComponent,
        DxcModelDocRemandeeComponent,
        DxcModelAgothCaseProsecutionAttorneyComponent,
        // Dxcui030Component,
        CheckdbComponent,
        DxcModelJfoJfoCaseComponent,
        DxcModelDbdCommercialregistrantComponent,
        DxcModelCifsCorpseComponent,
        DxcModelAgothAttorneyCasesComponent,
        DxcModelDopaMoiPor4Component,
        ListLeftProbationsComponent,
        ListLeftRegseizeComponent,
        ListAlgationsProbationsComponent,
        ListLeftPersonsComponent,
        ListNormalPersonsComponent,
        ListLeftAddressesComponent,
        ListNormalAddressesComponent,
        ListLeftFacePhotosComponent,
        ListNormalFacePhotosComponent,
        ListLeftPrisonerComponent,
        ListAlgationsPrisonerComponent,
        ListLeftRequestorsComponent,
        ListNormalRequestorsComponent,
        ListLeftJuvenileOffenderComponent,
        ListLeftPersonsComponent,
        ListNormalPersonsComponent,
        ListLeftPor4Component,
        ListNormalPor4Component,
        ListLeftBirthcertificatesComponent,
        ListNormalBirthcertificatesComponent,
        ListLeftBorderpassesComponent,
        ListNormalBorderpassesComponent,
        ListAllegationJuvenileOffenderComponent,
        ListAllegationRegseizeComponent,
        ListNormalThaiidcardComponent,
        ListLeftAliensComponent,
        ListNormalAliensComponent,
        ListLeftThaiidcardComponent,
        SearchByCidComponent,
        ListLeftNarcoticOffenderComponent,
        ListAllegationNarcoticOffenderComponent,
        ListAddressPrisonerComponent,
        ListAddressRequestorsComponent,
        ViewReport2UpComponent,
        ViewReport2DownComponent,
        ViewReport3Component,
        ListLeftBankruptcyCaseComponent,
        ListNormalBankruptcyCaseComponent,
        ListAddressProbationsComponent,
        ListLeftAttorneyCasesComponent,
        ListAllegationAttorneyCasesComponent,
        ListLeftPassportsComponent,
        ListNormalPassportsComponent,
        ListLeftMarriagecertificatesComponent,
        ListNormalMarriagecertificatesComponent,
        ListAddressNarcoticOffenderComponent,
        ListLeftDriverLicenseComponent,
        ListNormalDriverLicenseComponent,
        WrongRouteComponent,
        ListLeftMoneyLaunderingCaseComponent,
        ListAllegationMoneyLaunderingCaseComponent,
        HistoryComponent,
        ObjectvaluePipe,
        DxcLoaderComponent,
        ListLeftWorkforceDevelopmentsComponent,
        ListNormalWorkforceDevelopmentsComponent,
        ListLeftMissingPersonComponent,
        ListNormalMissingPersonComponent,
        ConverseSexPipe,
        ConverseStatusPipe,
        HeaderComponent,
        ThaiIdcardPipe,
        CountlengthPipe,
        ListLeftCorruptionAccusedsComponent,
        ListAlgationsCorruptionAccusedsComponent,
        ListTopPersonsComponent,
        ListTopFacePhotosComponent,
        ListLeftHealthInsuranceRightsComponent,
        ListNormalHealthInsuranceRightsComponent,
        ListLeftFisheriesillegalComponent,
        ErrormessageUiComponent,
        ListNormalFisheriesillegalComponent,
        ListLeftAlienWorkforcesComponent,
        ListLeftLandAndCondominiumTitlesComponent,
        ListNormalLandAndCondominiumTitlesComponent,
        DxcModelAgothIncidentLocationComponent,
        DxcModelAgothChargeComponent,
        ListLeftChargeSubjectComponent,
        ListAllegationChargeSubjectComponent,
        ListLeftEmployeeEmploymentComponent,
        ListNormalEmployeeEmploymentComponent,
        ListLeftJfoCaseComponent,
        ListNormalJfoCaseComponent,
        ListLeftDivorceCertificatesComponent,
        ListNormalDivorceCertificatesComponent,
        ListLeftEducationbackgroundesComponent,
        ListNormalEducationBackgroundesComponent,
        ListLeftStudentsComponent,
        ListNormalStudentsComponent,
        ListNormalAlienWorkforcesComponent,
        ListLeftRemandeeComponent,
        ListAllegaitonRemandeeComponent,
        ListLeftDeathCertificatesComponent,
        ListNormalDeathCertificatesComponent,
        ListLeftNewBornBabiesComponent,
        ListNormalNewBornBabiesComponent,
        ListLeftRegistrantComponent,
        ListNormalRegistrantComponent,
        DxcModelAgothChargeVictimComponent,
        ListLeftAgothChargeVictimComponent,
        ListNormalAgothChargeVictimComponent,
        DxcModelCaseProsecutionAttorneyOrderComponent,
        DxcModelChargeVerdictComponent,
        DxcModelAgothAttorneySubcaseComponent,
        ListLeftWarrantComponent,
        ListAllegationWarrantComponent,
        ListLeftCriminalComponent,
        ListAllegationCriminalComponent,
        ListNormalCorpseComponent,
        ListLeftCorpseComponent,
        DxcModelDocReleasedPrisonersComponent,
        DxcModelDocPrisonerImagesComponent,
        DxcModelCifsReportVerificationComponent,
        ListLeftReportVerificationComponent,
        ListNormalReportVerificationComponent,
        ListLeftCrimeDefendantCompensationComponent,
        DxcModelDopaMoiPersonChangenamePrimaryComponent,
        ListLeftPersonChangenamePrimaryComponent,
        ListNormalPersonChangenamePrimaryComponent,
        ListNormalCrimeDefendantCompensationComponent,
        ListLeftCrimeVictimCompensationComponent,
        ListNormalCrimeVictimCompensationComponent,
        ListLeftReleasedOffenderComponent,
        ListAllegationReleasedOffenderComponent,
        DxcModelReleasedOffenderComponent,
        ListLeftCarLicenseComponent,
        ListNormalCarLicenseComponent,
        DxcModelIdbDirectoryDimensionCaseComponent,
        DxcModelIdbDirectoryDimensionPersonComponent,
        ConverseDatePipe,
        ConverseNullPipe,
        DxcModelDopaMoiDopaPersonFirstnameLastnameComponent,
        ConfirmMessageComponent,
        SafeHtmlPipe,
        RunScriptsDirectiveDirective,
        DxcModelDopaMoiDopaPersonChangelastnameComponent,
        ListLeftPersonChangelastnameComponent,
        ListNormalPersonChangelastnameComponent,
        DxcModelSsoEmploymentComponent,
        ListLeftEmploymentComponent,
        ListNormalEmploymentComponent,
        SearchTimelineComponent,
        SearchInputComponent,
        SearchStatusComponent,
        ListNormalMissingPersonCaseComponent,
        ListLeftMissingPersonCaseComponent,
        ConverseTimePipe,
        ChangeDatePipe,
        PermissionDeniedComponent,
        DatasetPipe,
        DxcModelDepMoiCrippleComponent,
        ListLeftCrippleComponent,
        ListNormalCrippleComponent,
        DxcModelMfaMoiThailandPassportComponent,
        ListNormalThailandPassportComponent,
        ListLeftThailandPassportComponent,
        DxcModelCojArrestWarrantsComponent,
        DxcModelCojJudgementSummarysComponent,
        ListLeftCojArrestWarrantsComponent,
        ListAllgetionCojArrestWarrantsComponent,
        ReportDopComponent,
        SinglereportMenuComponent,
        DxcModelMofRegisterOfTaxpayersComponent,
        ListNormalRegisterOfTaxpayersComponent,
        ListLeftRegisterOfTaxpayersComponent,
        DatePipe,
        ListTopThaiidcardComponent,
        DxcModelMofRegisterOfTaxpayersComponent,
        ListNormalRegisterOfTaxpayersComponent,
        ListLeftRegisterOfTaxpayersComponent,
        ListTableComponent,
        ListTableEmploymentComponent,
        MenuSinglereportComponent,
        SearchIdcardComponent,
        LoadData1Component,
        LoadData2Component,
        ReportDocComponent,
        ReportDjopComponent,
        ListTopReportPersonsComponent,
        ListTableLandAndCondominiumTitlesComponent,
        ListTableCarLicenseComponent,
        ListTablePrisonerComponent,
        ListTableJuvenileOffenderComponent,
        ListTableProbationsComponent,
        ConverseCourtPipe,
        ListTableAddressesComponent,
        ListTableAliensComponent,
        ListTableBirthcertificatesComponent,
        ListTableDivorceCertificatesComponent,
        ListTableMarriagecertificatesComponent,
        ListTableFacePhotosComponent,
        ListTableThaiidcardComponent,
        ListCareerCrimeDefendantCompensationComponent,
        ListTableCareerCrimeDefendantCompensationComponent,
        ChangeStatusPipe,
        DxcModelJfoJfoCase64Component,
        ListLeftJfoCase64Component,
        ListNormalJfoCase64Component,
        ListCareerCrimeVictimCompensationComponent,
        ListCareerAgothChargeVictimComponent,
        ListCareerChargeSubjectComponent,
        ListCareerRequestorsComponent,
        ListCareerCojArrestWarrantsComponent,
        ListCareerBorderpassesComponent,
        ListTableCareerAgothChargeVictimComponent,
        ListTableCareerChargeSubjectComponent,
        ListTableCareerCojArrestWarrantsComponent,
        ListTableCareerBorderpassesComponent,
        ListTableCareerCrimeVictimCompensationComponent,
        ListTableCareerRequestorsComponent,
        ListContactAgothChargeVictimComponent,
        ListTableContactAgothChargeVictimComponent,
        ListContactChargeSubjectComponent,
        ListTableContactChargeSubjectComponent,
        ListContactCojArrestWarrantsComponent,
        ListTableContactCojArrestWarrantsComponent,
        ListContactCarLicenseComponent,
        ListTableCaontactCarLicenseComponent,
        ListContactPrisonerComponent,
        ListTableContactPrisonerComponent,
        ListContactRemandeeComponent,
        ListTableContactRemandeeComponent,
        ListContactProbationsComponent,
        ListTableContactProbationsComponent,
        ListContactAddressesComponent,
        ListTableContactAddressesComponent,
        ListContactBirthcertificatesComponent,
        ListTableContactBirthcertificatesComponent,
        ListContactBorderpassesComponent,
        ListTableContactBorderpassesComponent,
        ListContactPersonChangelastnameComponent,
        ListTableContactPersonChangelastnameComponent,
        ListContactPor4Component,
        ListTableContactPor4Component,
        ListContactThaiidcardComponent,
        ListTableContactThaiidcardComponent,
        ListContactWorkforceDevelopmentsComponent,
        ListTableContactWorkforceDevelopmentsComponent,
        ListContactRegisterOfTaxpayersComponent,
        ListTableContactRegisterOfTaxpayersComponent,
        ListContactRequestorsComponent,
        ListTableContactRequestorsComponent,
        ListContactCriminalComponent,
        ListTableContactCriminalComponent,
        ListTablePersonChangelastnameComponent,
        ListTablePersonChangenamePrimaryComponent,
        ListTableBorderpassesComponent,
        ListTablePor4Component,
        ListCareerCriminalComponent,
        ListTableCareerCriminalComponent,
        DxcNoticeComponent,
        DxcModalRtpCriminalCaseComponent,
        DxcModelRtpTravelInformationComponent,
        DxcModelRtpTrafficCaseComponent,
        DxcModelRtpCriminalRecordComponent,
        ListLeftCriminalCaseComponent,
        ListAllegationCriminalCaseComponent,
        DialogContentCriminalCaseDialog,
        ListLeftCriminalRecordComponent,
        ListAllegationCriminalRecordComponent,
        ListLeftTravelInformationComponent,
        ListNormalTravelInformationComponent,
        ListAllegationTrafficCaseComponent,
        DxcModelCojJudgementComponent,
        ListLeftTrafficCaseComponent,
        DxcPolicyComponent,
        DxcModelRtpWarrantOfArrestComponent,
        ListNormalWarrantOfArrestComponent,
        DxcModelDjopJuvenileOffender65Component,
        ListAllegationJuvenileOffender65Component,
        ListLeftJuvenileOffender65Component,
        DxcModelDocPrisonerBankruptComponent,
        DxcModelDopProbationerNarcoticsComponent,
        DxcModelDocAbsolutePrisonerInformationBeforeReleaseOnProbationComponent,
        DxcModelDopFactFindingReportComponent,
        ListAllgationsProbationerNarcoticsComponent,
        LoginThaidComponent,
        DxcModelMoiMoeGraduatesComponent,
    ],
    providers: [
        DriverlicenseService,
        PrisonerService,
        CriminalService,
        ArrestWarrantService,
        MissingCarCaseService,
        MissingPersonCaseService,
        JuvenileOffenderService,
        UserService,
        CitizenService,
        NarcoticOffenderService,
        RequestorsService,
        MoiDopaAddressesService,
        MoiDopaPersonsService,
        MoiDopaThaiIdCardService,
        MoiDopaBirthCertificatesService,
        RegSeizeService,
        MoiMoacFisheriesIllegalService,
        MoiDopaAliensService,
        MoiDopaBorderPassesService,
        MoiDopaDeathCertificatesService,
        MoiDopaDivorceCertificatesService,
        MoiDopaEducationBackgroundesService,
        MoiDopaMarriageCertificatesService,
        MoiDopaPassportsService,
        MoiDopaFacePhotosService,
        MoiMoeStudentsService,
        MoiDoeAlienWorkforcesService,
        MoiNhsoHealthInsuranceRightsService,
        // AnonymousCorpseService,
        CorruptionaccusedsService,
        WorkforceDevelopmentsService,
        MoiMsdhsNewBornBabiesService,
        DsiWarrantService,
        // CorpseService,
        // AttorneyCasesService,
        // MoiDopaPor4Service,
        LandandcondominiumtitlesService,
        ChargeSubjectService,
        CaseProsecutionAttorneyService,
        CrimeDefendantCompensationService,
        CrimeVictimCompensationService,
        TrafficCaseService,
        CriminalRecordService,
        // BankruptcyCaseService
        IncidentLocationService,
        MissingPersonCaseService,
        CriminalCaseService,
        RemandeeService,
        LoaderService,
        ConverseSexPipe,
        ConverseStatusPipe,
        ThaiDatePipe,
        ConverseNullPipe,
        ConverseDatePipe,
        ConverseTimePipe,
        ChangeDatePipe,
        DatasetPipe,
        ConverseCourtPipe,
        ChangeStatusPipe,
        CountlengthPipe,
        { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptorService, multi: true }
    ]
})
export class CoreModule { }

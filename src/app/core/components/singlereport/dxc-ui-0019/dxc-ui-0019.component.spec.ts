import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DxcUi0019Component } from './dxc-ui-0019.component';
import { RouterTestingModule } from '@angular/router/testing';
import { DriverlicenseService } from '../../../shared/services/dxc/dlt/driverlicense.service';
import { PrisonerService } from '../../../shared/services/dxc/doc/prisoner.service';
import { CriminalService } from '../../../shared/services/dxc/rtp/criminal.service';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from '../header/header.component';
import { ListLeftRegseizeComponent } from '../components/doc/regseize/list-left-regseize/list-left-regseize.component';
import { ListLeftPrisonerComponent } from '../components/doc/prisoner/list-left-prisoner/list-left-prisoner.component';
import { ListLeftAddressesComponent } from '../components/dopa/addresses/list-left-addresses/list-left-addresses.component';
import { ListAddressNarcoticOffenderComponent } from '../components/oncb/narcotic-offender/list-address-narcotic-offender/list-address-narcotic-offender.component';
import { ListAddressPrisonerComponent } from '../components/doc/prisoner/list-address-prisoner/list-address-prisoner.component';
import { ListLeftAgothChargeVictimComponent } from '../components/agoth/agoth-charge-victim/list-left-agoth-charge-victim/list-left-agoth-charge-victim.component';
import { ListLeftAliensComponent } from '../components/dopa/aliens/list-left-aliens/list-left-aliens.component';
import { ListLeftAlienWorkforcesComponent } from '../components/doe/alien-workforces/list-left-alien-workforces/list-left-alien-workforces.component';
import { ListLeftAttorneyCasesComponent } from '../components/agoth/attorney-cases/list-left-attorney-cases/list-left-attorney-cases.component';
import { ListLeftBankruptcyCaseComponent } from '../components/led/bankruptcy-case/list-left-bankruptcy-case/list-left-bankruptcy-case.component';
import { ListLeftBirthcertificatesComponent } from '../components/dopa/Birthcertificates/list-left-birthcertificates/list-left-birthcertificates.component';
import { ListLeftBorderpassesComponent } from '../components/dopa/Borderpasses/list-left-borderpasses/list-left-borderpasses.component';
import { ListLeftCarLicenseComponent } from '../components/dlt/car-license/list-left-car-license/list-left-car-license.component';
import { ListLeftChargeSubjectComponent } from '../components/agoth/charge-subject/list-left-charge-subject/list-left-charge-subject.component';
import { ListAddressProbationsComponent } from '../components/Dop/probations/list-address-probations/list-address-probations.component';
import { ListLeftCojArrestWarrantsComponent } from '../components/coj/arrest-warrants/list-left-coj-arrest-warrants/list-left-coj-arrest-warrants.component';
import { ListLeftCorpseComponent } from '../components/cifs/Corpse/list-left-corpse/list-left-corpse.component';
import { ListLeftCorruptionAccusedsComponent } from '../components/nacc/corruption_accuseds/list-left-corruption-accuseds/list-left-corruption-accuseds.component';
import { ListLeftCrimeDefendantCompensationComponent } from '../components/Rlpd/crime-defendant-compensation/list-left-crime-defendant-compensation/list-left-crime-defendant-compensation.component';
import { ListLeftCrimeVictimCompensationComponent } from '../components/Rlpd/crime-victim-compensation/list-left-crime-victim-compensation/list-left-crime-victim-compensation.component';
import { ListLeftCriminalComponent } from '../components/rtp/criminal/list-left-criminal/list-left-criminal.component';
import { ListLeftCrippleComponent } from '../components/dep/list-left-cripple/list-left-cripple.component';
import { ListLeftDeathCertificatesComponent } from '../components/dopa/deathcertificates/list-left-death-certificates/list-left-death-certificates.component';
import { ListLeftDivorceCertificatesComponent } from '../components/dopa/DivorceCertificates/list-left-divorce-certificates/list-left-divorce-certificates.component';
import { ListLeftDriverLicenseComponent } from '../components/dlt/driver-license/list-left-driver-license/list-left-driver-license.component';
import { ListLeftEducationbackgroundesComponent } from '../components/dopa/education-backgroundes/list-left-educationbackgroundes/list-left-educationbackgroundes.component';
import { ListLeftEmployeeEmploymentComponent } from '../components/sso/employee-employment/list-left-employee-employment/list-left-employee-employment.component';
import { ListLeftEmploymentComponent } from '../components/sso/employment/list-left-employment/list-left-employment.component';
import { ListLeftFacePhotosComponent } from '../components/dopa/face-photos/list-left-face-photos/list-left-face-photos.component';
import { ListLeftFisheriesillegalComponent } from '../components/moac/Fisheriesillegal/list-left-fisheriesillegal/list-left-fisheriesillegal.component';
import { ListLeftHealthInsuranceRightsComponent } from '../components/Nhso/health-insurance-rights/list-left-health-insurance-rights/list-left-health-insurance-rights.component';
import { ListLeftJfoCase64Component } from '../components/jfo/jfoCase64/list-left-jfo-case64/list-left-jfo-case64.component';
import { ListLeftJfoCaseComponent } from '../components/jfo/jfoCase/list-left-jfo-case/list-left-jfo-case.component';
import { ListLeftJuvenileOffenderComponent } from '../components/Djop/JuvenileOffender/list-left-juvenile-offender/list-left-juvenile-offender.component';
import { ListLeftLandAndCondominiumTitlesComponent } from '../components/dol/land-and-condominium-titles/list-left-land-and-condominium-titles/list-left-land-and-condominium-titles.component';
import { ListLeftMarriagecertificatesComponent } from '../components/dopa/Marriagecertificates/list-left-marriagecertificates/list-left-marriagecertificates.component';
import { ListLeftMissingPersonCaseComponent } from '../components/rtp/missing-person-case/list-left-missing-person-case/list-left-missing-person-case.component';
import { ListLeftMissingPersonComponent } from '../components/cifs/MissingPerson/list-left-missing-person/list-left-missing-person.component';
import { ListLeftMoneyLaunderingCaseComponent } from '../components/amlo/list-left-money-laundering-case/list-left-money-laundering-case.component';
import { ListLeftNarcoticOffenderComponent } from '../components/oncb/narcotic-offender/list-left-narcotic-offender/list-left-narcotic-offender.component';
import { ListLeftNewBornBabiesComponent } from '../components/msdhs/list-left-new-born-babies/list-left-new-born-babies.component';
import { ListLeftPassportsComponent } from '../components/dopa/passports/list-left-passports/list-left-passports.component';
import { ListLeftPersonChangelastnameComponent } from '../components/dopa/PersonChangelastname/list-left-person-changelastname/list-left-person-changelastname.component';
import { ListLeftPersonChangenamePrimaryComponent } from '../components/dopa/PersonChangenamePrimary/list-left-person-changename-primary/list-left-person-changename-primary.component';
import { ListLeftPersonsComponent } from '../components/dopa/persons/list-left-persons/list-left-persons.component';
import { ListLeftPor4Component } from '../components/dopa/por4/list-left-por4/list-left-por4.component';
import { ListLeftProbationsComponent } from '../components/Dop/probations/list-left-probations/list-left-probations.component';
import { ListLeftRegisterOfTaxpayersComponent } from '../components/mof/register-of-taxpayers/list-left-register-of-taxpayers/list-left-register-of-taxpayers.component';
import { ListLeftRegistrantComponent } from '../components/mof/registrant/list-left-registrant/list-left-registrant.component';
import { ListLeftReleasedOffenderComponent } from '../components/oja/list-left-released-offender/list-left-released-offender.component';
import { ListLeftRemandeeComponent } from '../components/doc/remandee/list-left-remandee/list-left-remandee/list-left-remandee.component';
import { ListLeftReportVerificationComponent } from '../components/cifs/report-verification/list-left-report-verification/list-left-report-verification.component';
import { ListLeftRequestorsComponent } from '../components/Rlpd/Requestors/list-left-requestors/list-left-requestors.component';
import { ListLeftStudentsComponent } from '../components/dopa/students/list-left-students/list-left-students.component';
import { ListLeftThaiidcardComponent } from '../components/dopa/ThaiIdCard/list-left-thaiidcard/list-left-thaiidcard.component';
import { ListLeftThailandPassportComponent } from '../components/dca/thailand-passport/list-left-thailand-passport/list-left-thailand-passport.component';
import { ListLeftWarrantComponent } from '../components/Dsi/list-left-warrant/list-left-warrant.component';
import { ListLeftWorkforceDevelopmentsComponent } from '../components/dsd/workforce-developments/list-left-workforce-developments/list-left-workforce-developments.component';
import { ListTopFacePhotosComponent } from '../components/dopa/face-photos/list-top-face-photos/list-top-face-photos.component';
import { ListTopPersonsComponent } from '../components/dopa/persons/list-top-persons/list-top-persons.component';
import { ListAllegationNarcoticOffenderComponent } from '../components/oncb/narcotic-offender/list-allegation-narcotic-offender/list-allegation-narcotic-offender.component';
import { ListAllegationJuvenileOffenderComponent } from '../components/Djop/JuvenileOffender/list-allegation-juvenile-offender/list-allegation-juvenile-offender.component';
import { ListAlgationsProbationsComponent } from '../components/Dop/probations/list-algations-probations/list-algations-probations.component';
import { ListAlgationsPrisonerComponent } from '../components/doc/prisoner/list-algations-prisoner/list-algations-prisoner.component';
import { ListAlgationsCorruptionAccusedsComponent } from '../components/nacc/corruption_accuseds/list-algations-corruption-accuseds/list-algations-corruption-accuseds.component';
import { ListAllegationChargeSubjectComponent } from '../components/agoth/charge-subject/list-allegation-charge-subject/list-allegation-charge-subject.component';
import { ListAllegationAttorneyCasesComponent } from '../components/agoth/attorney-cases/list-allegation-attorney-cases/list-allegation-attorney-cases.component';
import { ListAllegationRegseizeComponent } from '../components/doc/regseize/list-allegation-regseize/list-allegation-regseize.component';
import { ListAllegationReleasedOffenderComponent } from '../components/oja/list-allegation-released-offender/list-allegation-released-offender.component';
import { ListAllegationMoneyLaunderingCaseComponent } from '../components/amlo/list-allegation-money-laundering-case/list-allegation-money-laundering-case.component';
import { ListNormalAddressesComponent } from '../components/dopa/addresses/list-normal-addresses/list-normal-addresses.component';
import { ListNormalAgothChargeVictimComponent } from '../components/agoth/agoth-charge-victim/list-normal-agoth-charge-victim/list-normal-agoth-charge-victim.component';
import { ListNormalAliensComponent } from '../components/dopa/aliens/list-normal-aliens/list-normal-aliens.component';
import { ListNormalAlienWorkforcesComponent } from '../components/doe/alien-workforces/list-normal-alien-workforces/list-normal-alien-workforces.component';
import { ListNormalBankruptcyCaseComponent } from '../components/led/bankruptcy-case/list-normal-bankruptcy-case/list-normal-bankruptcy-case.component';
import { ListNormalBirthcertificatesComponent } from '../components/dopa/Birthcertificates/list-normal-birthcertificates/list-normal-birthcertificates.component';
import { ListNormalBorderpassesComponent } from '../components/dopa/Borderpasses/list-normal-borderpasses/list-normal-borderpasses.component';
import { ListNormalCarLicenseComponent } from '../components/dlt/car-license/list-normal-car-license/list-normal-car-license.component';
import { ListNormalCorpseComponent } from '../components/cifs/Corpse/list-normal-corpse/list-normal-corpse.component';
import { ListNormalCrimeDefendantCompensationComponent } from '../components/Rlpd/crime-defendant-compensation/list-normal-crime-defendant-compensation/list-normal-crime-defendant-compensation.component';
import { ListNormalCrimeVictimCompensationComponent } from '../components/Rlpd/crime-victim-compensation/list-normal-crime-victim-compensation/list-normal-crime-victim-compensation.component';
import { ListNormalCrippleComponent } from '../components/dep/list-normal-cripple/list-normal-cripple.component';
import { ListAllegaitonRemandeeComponent } from '../components/doc/remandee/list-allegation-remandee/list-allegaiton-remandee/list-allegaiton-remandee.component';
import { ListAllegationCriminalComponent } from '../components/rtp/criminal/list-allegation-criminal/list-allegation-criminal.component';
import { ListAllegationWarrantComponent } from '../components/Dsi/list-allegation-warrant/list-allegation-warrant.component';
import { ListAllgetionCojArrestWarrantsComponent } from '../components/coj/arrest-warrants/list-allgetion-coj-arrest-warrants/list-allgetion-coj-arrest-warrants.component';
import { ListNormalFisheriesillegalComponent } from '../components/moac/Fisheriesillegal/list-normal-fisheriesillegal/list-normal-fisheriesillegal/list-normal-fisheriesillegal.component';
import { ListNormalFacePhotosComponent } from '../components/dopa/face-photos/list-normal-face-photos/list-normal-face-photos.component';
import { ListNormalJfoCase64Component } from '../components/jfo/jfoCase64/list-normal-jfo-case64/list-normal-jfo-case64.component';
import { ListNormalJfoCaseComponent } from '../components/jfo/jfoCase/list-normal-jfo-case/list-normal-jfo-case.component';
import { ListNormalWorkforceDevelopmentsComponent } from '../components/dsd/workforce-developments/list-normal-workforce-developments/list-normal-workforce-developments.component';
import { ListNormalRegisterOfTaxpayersComponent } from '../components/mof/register-of-taxpayers/list-normal-register-of-taxpayers/list-normal-register-of-taxpayers.component';
import { ListNormalDeathCertificatesComponent } from '../components/dopa/deathcertificates/list-normal-death-certificates/list-normal-death-certificates.component';
import { ListNormalReportVerificationComponent } from '../components/cifs/report-verification/list-normal-report-verification/list-normal-report-verification.component';
import { ListNormalDivorceCertificatesComponent } from '../components/dopa/DivorceCertificates/list-normal-divorce-certificates/list-normal-divorce-certificates.component';
import { ListNormalPassportsComponent } from '../components/dopa/passports/list-normal-passports/list-normal-passports.component';
import { ListNormalPersonChangelastnameComponent } from '../components/dopa/PersonChangelastname/list-normal-person-changelastname/list-normal-person-changelastname.component';
import { ListNormalPersonChangenamePrimaryComponent } from '../components/dopa/PersonChangenamePrimary/list-normal-person-changename-primary/list-normal-person-changename-primary.component';
import { ListNormalPersonsComponent } from '../components/dopa/persons/list-normal-persons/list-normal-persons.component';
import { ListNormalPor4Component } from '../components/dopa/por4/list-normal-por4/list-normal-por4.component';
import { ListNormalMissingPersonCaseComponent } from '../components/rtp/missing-person-case/list-normal-missing-person-case/list-normal-missing-person-case.component';
import { ListNormalMissingPersonComponent } from '../components/cifs/MissingPerson/list-normal-missing-person/list-normal-missing-person.component';
import { ListNormalThailandPassportComponent } from '../components/dca/thailand-passport/list-normal-thailand-passport/list-normal-thailand-passport.component';
import { ListNormalEmployeeEmploymentComponent } from '../components/sso/employee-employment/list-normal-employee-employment/list-normal-employee-employment.component';
import { ListNormalMarriagecertificatesComponent } from '../components/dopa/Marriagecertificates/list-normal-marriagecertificates/list-normal-marriagecertificates.component';
import { ListNormalEducationBackgroundesComponent } from '../components/dopa/education-backgroundes/list-normal-education-backgroundes/list-normal-education-backgroundes.component';
import { ListNormalHealthInsuranceRightsComponent } from '../components/Nhso/health-insurance-rights/list-normal-health-insurance-rights/list-normal-health-insurance-rights.component';
import { ListNormalLandAndCondominiumTitlesComponent } from '../components/dol/land-and-condominium-titles/list-normal-land-and-condominium-titles/list-normal-land-and-condominium-titles.component';
import { ListContactCriminalComponent } from '../components/rtp/criminal/list-contact-criminal/list-contact-criminal.component';
import { ListTableContactCriminalComponent } from '../components/rtp/criminal/list-table-contact-criminal/list-table-contact-criminal.component';
import { ListNormalThaiidcardComponent } from '../components/dopa/ThaiIdCard/list-normal-thaiidcard/list-normal-thaiidcard.component';
import { ListNormalStudentsComponent } from '../components/dopa/students/list-normal-students/list-normal-students.component';
import { ListNormalDriverLicenseComponent } from '../components/dlt/driver-license/list-normal-driver-license/list-normal-driver-license.component';
import { ListNormalEmploymentComponent } from '../components/sso/employment/list-normal-employment/list-normal-employment.component';
import { ListNormalNewBornBabiesComponent } from '../components/msdhs/list-normal-new-born-babies/list-normal-new-born-babies.component';
import { ListNormalRegistrantComponent } from '../components/mof/registrant/list-normal-registrant/list-normal-registrant.component';
import { ListNormalRequestorsComponent } from '../components/Rlpd/Requestors/list-normal-requestors/list-normal-requestors.component';
import { FooterComponent } from '../footer/footer.component';
import { DxcLoaderComponent } from '../../loader/dxc-loader/dxc-loader.component';
import { ModalModule } from 'src/app/core/shared/services/components/modal';
import { FilterPipe } from 'src/app/core/shared/pipe/filter.pipe';
import { SearchByCidComponent } from '../components/search-by-cid/search-by-cid.component';
import { ThaiDatePipe } from 'src/app/core/shared/pipe/thaidate.pipe';
import { ConverseDatePipe } from 'src/app/core/shared/pipe/converse-date.pipe';
import { ChangeStatusPipe } from 'src/app/core/shared/pipe/change-status.pipe';
import { ConverseNullPipe } from 'src/app/core/shared/pipe/probationer/converse-null.pipe';
import { ChangeDatePipe } from 'src/app/core/shared/pipe/change-date.pipe';
import { MatDialog, MatDialogModule } from '@angular/material';


describe('DxcUi0019Component', () => {
    let component: DxcUi0019Component;
    let fixture: ComponentFixture<DxcUi0019Component>;


    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [
                DxcUi0019Component,
                HeaderComponent,
                ListLeftRegseizeComponent,
                ListLeftPrisonerComponent,
                ListLeftAddressesComponent,
                ListAddressNarcoticOffenderComponent,
                ListAddressPrisonerComponent,
                ListLeftAgothChargeVictimComponent,
                ListLeftAliensComponent,
                ListLeftAlienWorkforcesComponent,
                ListLeftAttorneyCasesComponent,
                ListLeftBankruptcyCaseComponent,
                ListLeftBirthcertificatesComponent,
                ListLeftBorderpassesComponent,
                ListLeftCarLicenseComponent,
                ListLeftChargeSubjectComponent,
                ListAddressProbationsComponent,
                ListLeftCojArrestWarrantsComponent,
                ListLeftCorpseComponent,
                ListLeftCorruptionAccusedsComponent,
                ListLeftCrimeDefendantCompensationComponent,
                ListLeftCrimeVictimCompensationComponent,
                ListLeftCriminalComponent,
                ListLeftCrippleComponent,
                ListLeftDeathCertificatesComponent,
                ListLeftDivorceCertificatesComponent,
                ListLeftDriverLicenseComponent,
                ListLeftEducationbackgroundesComponent,
                ListLeftEmployeeEmploymentComponent,
                ListLeftEmploymentComponent,
                ListLeftFacePhotosComponent,
                ListLeftFisheriesillegalComponent,
                ListLeftHealthInsuranceRightsComponent,
                ListLeftJfoCase64Component,
                ListLeftJfoCaseComponent,
                ListLeftJuvenileOffenderComponent,
                ListLeftLandAndCondominiumTitlesComponent,
                ListLeftMarriagecertificatesComponent,
                ListLeftMissingPersonCaseComponent,
                ListLeftMissingPersonComponent,
                ListLeftMoneyLaunderingCaseComponent,
                ListLeftNarcoticOffenderComponent,
                ListLeftNewBornBabiesComponent,
                ListLeftPassportsComponent,
                ListLeftPersonChangelastnameComponent,
                ListLeftPersonChangenamePrimaryComponent,
                ListLeftPersonsComponent,
                ListLeftPor4Component,
                ListLeftProbationsComponent,
                ListLeftRegisterOfTaxpayersComponent,
                ListLeftRegistrantComponent,
                ListLeftReleasedOffenderComponent,
                ListLeftRemandeeComponent,
                ListLeftReportVerificationComponent,
                ListLeftRequestorsComponent,
                ListLeftStudentsComponent,
                ListLeftThaiidcardComponent,
                ListLeftThailandPassportComponent,
                ListLeftWarrantComponent,
                ListLeftWorkforceDevelopmentsComponent,
                ListTopFacePhotosComponent,
                ListTopPersonsComponent,
                ListAllegationNarcoticOffenderComponent,
                ListAllegationJuvenileOffenderComponent,
                ListAlgationsProbationsComponent,
                ListAlgationsPrisonerComponent,
                ListAlgationsCorruptionAccusedsComponent,
                ListAllegationChargeSubjectComponent,
                ListAllegationAttorneyCasesComponent,
                ListAllegationRegseizeComponent,
                ListAllegationReleasedOffenderComponent,
                ListAllegationMoneyLaunderingCaseComponent,
                ListAllegaitonRemandeeComponent,
                ListAllegationCriminalComponent,
                ListAllegationWarrantComponent,
                ListAllgetionCojArrestWarrantsComponent,
                ListNormalAddressesComponent,
                ListNormalAgothChargeVictimComponent,
                ListNormalAliensComponent,
                ListNormalAlienWorkforcesComponent,
                ListNormalBankruptcyCaseComponent,
                ListNormalBirthcertificatesComponent,
                ListNormalBorderpassesComponent,
                ListNormalCarLicenseComponent,
                ListNormalCorpseComponent,
                ListNormalCrimeDefendantCompensationComponent,
                ListNormalCrimeVictimCompensationComponent,
                ListNormalCrippleComponent,
                ListNormalFisheriesillegalComponent,
                ListNormalFacePhotosComponent,
                ListNormalJfoCase64Component,
                ListNormalJfoCaseComponent,
                ListNormalWorkforceDevelopmentsComponent,
                ListNormalRegisterOfTaxpayersComponent,
                ListNormalDeathCertificatesComponent,
                ListNormalReportVerificationComponent,
                ListNormalDivorceCertificatesComponent,
                ListNormalPassportsComponent,
                ListNormalPersonChangelastnameComponent,
                ListNormalPersonChangenamePrimaryComponent,
                ListNormalPersonsComponent,
                ListNormalPor4Component,
                ListNormalMissingPersonCaseComponent,
                ListNormalMissingPersonComponent,
                ListNormalThailandPassportComponent,
                ListNormalEmployeeEmploymentComponent,
                ListNormalMarriagecertificatesComponent,
                ListNormalEducationBackgroundesComponent,
                ListNormalHealthInsuranceRightsComponent,
                ListNormalLandAndCondominiumTitlesComponent,
                ListNormalThailandPassportComponent,
                ListNormalThaiidcardComponent,
                ListNormalStudentsComponent,
                ListNormalDriverLicenseComponent,
                ListNormalEmploymentComponent,
                ListNormalNewBornBabiesComponent,
                ListNormalRegistrantComponent,
                ListNormalRequestorsComponent,
                FooterComponent,
                DxcLoaderComponent,
                FilterPipe,
                SearchByCidComponent,
                ThaiDatePipe,
                ConverseDatePipe,
                ChangeStatusPipe,
                ConverseNullPipe,
                ChangeDatePipe
                
                

            ],
            imports: [
                RouterTestingModule,
                HttpClientModule,
                ModalModule,
                MatDialogModule
            ],
            providers: [
                DriverlicenseService,
                PrisonerService,
                CriminalService
                
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DxcUi0019Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    //   it("TEST - criminalResults", () => {
    //     expect(component.criminalResults).toBeNull(); // Expectation - หวังว่า true ต้องเป็น true (แหงละ)
    //   });

    //   it("TEST - criminalSearchCount", () => {
    //     expect(component.criminalSearchCount).toEqual(0); // Expectation - หวังว่า true ต้องเป็น true (แหงละ)
    //   });

    //   it("TEST - criminalSearchCount", () => {
    //     expect(component.criminalSearchCount).toEqual(0); // Expectation - หวังว่า true ต้องเป็น true (แหงละ)
    //   });
    //   // it(`เช็คฟังก์ชั่น report_name`, async(() => {
    //   //   let name = 'TEST'
    //   //   component.reportname(name);
    //   //   expect(component.report_name).toEqual(name);
    //   // }));


    //   // it("TEST - driverlicenseResults", () => {
    //   //   expect(component.driverlicenseResults).toBeNull(); // Expectation - หวังว่า true ต้องเป็น true (แหงละ)
    //   // });


    //   // xit(`เช็คฟังก์ชั่น report_name`, async(() => {
    //   //   let name = 'TEST'
    //   //   component.reportname(name);
    //   //   expect(component.report_name).toEqual(name);
    //   // }));

    it('should create', () => {
        component.dataSearch.citizenCardNumber = '3230200083344';
        // component.report_name='รายงาน Single Report';
        component.getSearchData();
        component.outputCitizencardNumber = '3230200083344';
        fixture.detectChanges();
        expect(component.listAlgations).toEqual('')
        expect(component).toBeTruthy();
    });

});


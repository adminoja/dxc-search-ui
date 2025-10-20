import { Injectable } from "@angular/core";

export interface IReport1 {
  topCitizen: string;
  topMoiPerson: string;
  allegationPrisoner: string;
  allegationRegseize: string;
  allegationProbationer: string;
  allegationDjopJuvenlie: string;
  allegationNarcoticOffender: string;
  allegationAttorneyCase: string;
  allegationCorruptionAccuseds: string;
  allegationRemandee: string;
  normalCorpse: string;
  normalAddresses: string;
  normalAliens: string;
  normalBirthcertificates: string;
  normalBorderpasses: string;
  normalRequestors: string;
  normalThaiIdCard: string;
  normalFacePhotos: string;
  normalPassports: string;
  normalMarriagecertificates: string;
  normalPor4: string;
  normalBankruptcyCase: string;
  normalWorkforceDevelopments: string;
  normalPersons: string;
  normalMoacMoiFisheriesIllegal: string;
  normalLandAndCondominiumTitles: string;
  normalHealthInsuranceRights: string;
  normalAlienWorkforces: string;
  normalNewBornBabies: string;
  allegationChargeSubject: string;
  normalEmployeeEmployment: string;
  normalDivorceCertificates: string;
  normalEducationBackgroundes: string;
  normalStudents: string;
  normalJfoCases: string;
  normalDeathCertificates: string;
  normalchargeVictim: string;
  allegationWarrant: string;
  normaldriverLicense: string;
  allegationCriminal: string;
  normalMissingPerson: string;
  normalReportVerification: string;
  normalPersonChangenamePrimary: string;
  normalCrimeDefendantCompensation: string;
  normalCrimeVictimCompensation: string;
  allegationReleasedOffender: string;
  normalCarLicense: string;
  normalPersonChangelastname: string;
  normalEmployment: string;
  normalMissingPersonCase: string;
  allegationCojArrestWarrants: string;
  normalThailandPassport: string;
  normalRegistrant: string;
  normalJfoCase64: string;
  allegationCriminalRecord: string;
  normalTravelInformation: string;
  allegationArrestWarrant: string;
  allegationCriminalCase: string;
  allegationTrafficCase: string;
  allegationWarrantOfArrest: string;
  allegationDjopJuvenlie65: string;
  allegationDopProbationerNarcotics: string;

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
  normalWorkforceDevelopmentsCount: string;
  normalPersonsCount: string;
  normalLandAndCondominiumTitlesCount: string;
  normalHealthInsuranceRightsCount: string;
  normalAlienWorkforcesCount: string;
  normalNewBornBabiesCount: string;
  allegationRegseizeCount: string;
  allegationPrisonerCount: string;
  allegationProbationerCount: string;
  allegationDjopJuvenlieCount: string;
  allegationNarcoticOffenderCount: string;
  allegationAttorneyCaseCount: string;
  allegationCorruptionAccusedsCount: string;
  normalMoacMoiFisheriesIllegalCount: string;
  allegationChargeSubjectCount: string;
  normalEmployeeEmploymentCount: string;
  normalDivorceCertificatesCount: string;
  normalEducationBackgroundesCount: string;
  allegationRemandeeCount: string;
  normalStudentsCount: string;
  normalJfoCaseCount: string;
  normalDeathCertificatesCount: string;
  normalchargeVictimCount: string;
  allegationWarrantCount: string;
  normaldriverLicenseCount: string;
  allegationCriminalCount: string;
  normalCorpseCount: string;
  normalMissingPersonCount: string;
  normalReportVerificationCount: string;
  normalPersonChangenamePrimaryCount: string;
  normalCrimeDefendantCompensationCount: string;
  normalCrimeVictimCompensationCount: string;
  allegationReleasedOffenderCount: string;
  normalCarLicenseCount: string;
  normalPersonChangelastnameCount: string;
  normalEmploymentCount: string;
  normalMissingPersonCaseCount: string;
  allegationCojArrestWarrantsCount: string;
  normalThailandPassportCount: string;
  normalRegistrantCount: string;
  normalJfoCase64Count: string;
  allegationCriminalRecordCount: string;
  normalTravelInformationCount: string;
  allegationArrestWarrantCount: string;
  allegationCriminalCaseCount: string;
  allegationTrafficCaseCount: string;
  allegationWarrantOfArrestCount: string;
  allegationDjopJuvenlie65Count: string;
  allegationDopProbationerNarcoticsCount: string;

  reportName: string; // ผู้ขอรายงาน
  reportOfDate: string; // วันที่พิมรายงาน
  reportOfTime: string; // เวลาที่พิมรายงาน
  reportBarcode: string; // เลขที่เอกสาร(เลขบาร์โค๊ด)
}
@Injectable()
export class Metadata {

  html: string;
  public getHtml(model: IReport1) {

    return this.html = `<html>

    <head>

    <style>
    @font-face {
      font-family: "THSarabunNew";
      src: url(https://search.dxc.go.th/public/font/THSarabunNew.ttf);
    }
    html {
      font-family: "THSarabunNew";
      height: 100%;
      width: 100%;
    }
    .watermark {
      content: "";
      z-index: 50;
      font-family: THSarabunNew;
      font-size: 11pt;
      color: rgba(192,192,192,0.7);
      text-transform: uppercase;
      text-align: center;
      transform: rotate(-45.7deg);
      position: absolute;
      width: 150%;
      height: 150%;
      top: -180px;
      left: 30px;
    }
    .watermark2 {
      content: "";
      z-index: 100;
      font-family: THSarabunNew;
      font-size: 11pt;
      text-align: center;
      color: rgba(192,192,192,0.7);
      text-transform: uppercase;
      transform: rotate(-45.7deg);
      position: absolute;
      width: 150%;
      height: 150%;
      top: -90px;
      left: 50px;
    }
    .watermark3 {
      content: "";
      z-index: 100;
      font-family: THSarabunNew;
      font-size: 11pt;
      color: rgba(192,192,192,0.7);
      text-align: center;
      text-transform: uppercase;
      transform: rotate(-45.7deg);
      position: absolute;
      width: 150%;
      height: 150%;
      top: -10px;
      left: 80px;
    }
    .watermark4 {
      content: "";
      z-index: 100;
      font-family: THSarabunNew;
      font-size: 11pt;
      color: rgba(192,192,192,0.7);
      text-align: center;
      text-transform: uppercase;
      transform: rotate(-45.7deg);
      position: absolute;
      width: 150%;
      height: 150%;
      top: 0px;
      left: 200px;
    }
    .watermark5 {
      content: "";
      z-index: 100;
      font-family: THSarabunNew;
      font-size: 11pt;
      color: rgba(192,192,192,0.7);
      text-align: center;
      text-transform: uppercase;
      transform: rotate(-45.7deg);
      position: absolute;
      width: 150%;
      height: 150%;
      top: 5px;
      left: 300px;
    }
    .watermark6 {
      content: "";
      z-index: 100;
      font-family: THSarabunNew;
      font-size: 11pt;
      color: rgba(192,192,192,0.7);
      text-align: center;
      text-transform: uppercase;
      transform: rotate(-45.7deg);
      position: absolute;
      width: 150%;
      height: 150%;
      top: 50px;
      left: 350px;
    }
    .watermark7 {
      content: "";
      z-index: 100;
      font-family: THSarabunNew;
      font-size: 11pt;
      color: rgba(192,192,192,0.7);
      text-align: center;
      text-transform: uppercase;
      transform: rotate(-45.7deg);
      position: absolute;
      width: 150%;
      height: 150%;
      top: 120px;
      left: 400px;
    }
    .watermark8 {
      content: "";
      z-index: 100;
      font-family: THSarabunNew;
      font-size: 11pt;
      color: rgba(192,192,192,0.7);
      text-align: center;
      text-transform: uppercase;
      transform: rotate(-45.7deg);
      position: absolute;
      width: 150%;
      height: 150%;
      top: 190px;
      left: 450px;
    }
    .watermark9 {
      content: "";
      z-index: 100;
      font-family: THSarabunNew;
      font-size: 11pt;
      color: rgba(192,192,192,0.7);
      text-align: center;
      text-transform: uppercase;
      transform: rotate(-45.7deg);
      position: absolute;
      width: 150%;
      height: 150%;
      top: 260px;
      left: 500px;
    }
    .watermark10 {
      content: "";
      z-index: 100;
      font-family: THSarabunNew;
      font-size: 11pt;
      color: rgba(192,192,192,0.7);
      text-align: center;
      text-transform: uppercase;
      transform: rotate(-45.7deg);
      position: absolute;
      width: 150%;
      height: 150%;
      top: 330px;
      left: 550px;
    }
    .watermark11 {
      content: "";
      z-index: 100;
      font-family: THSarabunNew;
      font-size: 11pt;
      color: rgba(192,192,192,0.7);
      text-align: center;
      text-transform: uppercase;
      transform: rotate(-45.7deg);
      position: absolute;
      width: 150%;
      height: 150%;
      top: 390px;
      left: 600px;
    }
    .colorfont {
      color: blue;
    }
    body {
      font-family: THSarabunNew;
      font-size: 18px;
    }
    div.header {
      display: block;
      text-align: center;
      position: running(header);
      width: 100%;
    }
    div.footer {
      display: block;
      text-align: center;
      position: running(footer);
      width: 100%;
    }
    footer{
      position: running(footerIdentifier);
  }
  barcode {
    top: 0px;
    width:120px;
    height:40px;
  }
  @page {
      @bottom-left {
        font: 9pt arial, THSarabunNew;
        text-align: right;
        margin-bottom: 5mm;
        margin-top: 0mm;
        border-top: 0.2mm solid #006DAB;
        vertical-align: top;
        padding-top: 0cm;
        content: element(footerIdentifier);
      }
  }
    div.container {
      min-height: 10em;
      display: table-cell;
      vertical-align: middle
    }
     @media print {
     @page {
     font-family: THSarabunNew;
     margin: 1.5cm;
     padding-top: 12pt;
                                /* Initialize the page counter */
                                counter-increment: page 1;

                                /* The following lines are styles for page margin boxes
                    which are described in the CSS 3 paged media module draft.
                    The @xyz selector indicates the location of the box
                 */



                                @bottom-right {
     font: 9pt arial, THSarabunNew;
     text-align: right;
     margin-bottom: 5mm;
     margin-top: 0mm;
     border-top: 0.2mm solid #006DAB;
     vertical-align: top;
     padding-top: 0.1cm;
     content: "หน้า " counter(page) " / " counter(pages);
    }
    }
    /* repeating page background image */

    html {
      font-family: "THSarabunNew";
      height: 100%;
      width: 100%;
      background-attachment: scroll;
      box-decoration-break: clone;
      background-position: 0 -12pt;
    }
    .barcode {
      font: 7pt arial, THSarabunNew;
      text-align: left;
      margin-bottom: 5mm;
      margin-top: 2mm;
      border-top: 0.2mm solid #006DAB;
      vertical-align: top;
      padding-top: 0.1cm;
      content: "";
    }
    #tablecollapse {
      width: 100%;
      border-collapse: collapse;
      border: 1px solid black;
    }
    #tablecollapse > tbody > tr > td {
      border: 1px solid black;
    }
    /* Cross-references */
    a.int::after {
      content: ' (see page ' target-counter(-ro-attr(href url), page) ')';
    }
    }

    .list-normal-design-head-collapse{
      width: 850px;
      text-indent:25px;
      font-size: 16px;
      line-height:30px;
      padding-top: 0px;
      margin-top: 0pxp;
    }

    .depart{
      color: #0070C0;
    }

    .departdata{
      color: #C00000;
    }

    .count{
      color: black;
    }

    .list-normal-design-underline{
      text-decoration:underline;
      font-weight: bold;
    }
    </style>

    </head>

    <body>
    <footer>

            <table border="0">
            <tr>
              <td rowspan="2"> <barcode:barcode xmlns:barcode="http://barcode4j.krysalis.org/ns" message="123456789012">
              <barcode:ean-13/>
            </barcode:barcode></td>
                <td >ผู้พิมพ์ ${model.reportName}</td>
              </tr>
              <tr>
                <td >วันที่ ${model.reportOfDate} เวลา ${model.reportOfTime}</td>
              </tr>
            </table>
            </footer>

                <div>
                    <img src="https://search.dxc.go.th/public/image/DXC_logo.jpg" style="width: 150px; height: 50px" />
                    <div>
                        <label>DXC Report</label>
                        <br>
                        <a href="www.dxc.go.th">www.dxc.go.th</a>

                    </div>
                    <hr>
                </div>



                <!-- //รายงาน single report -->

          <div *ngIf="report_name=='รายงาน Single Report'">

            <div class="card example-3 scrollbar-deep-blue">
              <div class="card">
                <div class="row">
                  <div class="body">
                    <div class="container-fluid">

                      <div class="row">
                      <div>${model.topCitizen}</div>
                      <div>${model.topMoiPerson}</div>


                      <div class="row" style="font-size: 20px;">
                        <div class="col-md-12">
                          <div class="panel-group" id="accordion">
                            <div class="panel ">
                              <div class="panel-heading">
                                <h4 class="panel-title">
                                  <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                                    <span class="report-section-title"
                                    style="font-size: 25px; font-weight: bold; color: blue; border: 1; border-color: black;">
                                    ประวัติการกระทำผิด</span>
                                  </a>
                                </h4>
                              </div>

                              <div>
                                ${model.allegationPrisonerCount}
                                ${model.allegationPrisoner}
                              </div>

                              <div>
                                ${model.allegationRegseizeCount}
                                ${model.allegationRegseize}
                              </div>

                              <div>
                                ${model.allegationProbationerCount}
                                ${model.allegationProbationer}
                              </div>

                              <div>
                                ${model.allegationNarcoticOffenderCount}
                                ${model.allegationNarcoticOffender}
                              </div>

                              <div>
                                ${model.allegationAttorneyCaseCount}
                                ${model.allegationAttorneyCase}
                              </div>
                              <div>
                                ${model.allegationDjopJuvenlie65Count}
                                ${model.allegationDjopJuvenlie65}
                              </div> 
                              <div>
                                ${model.allegationCorruptionAccusedsCount}
                                ${model.allegationCorruptionAccuseds}
                              </div>
                              <div>
                                ${model.normalMoacMoiFisheriesIllegalCount}
                                ${model.normalMoacMoiFisheriesIllegal}
                              </div>
                              <div>
                                ${model.allegationChargeSubjectCount}
                                ${model.allegationChargeSubject}
                              </div>
                              <div>
                                ${model.allegationRemandeeCount}
                                ${model.allegationRemandee}
                              </div>
                              <div>
                                ${model.allegationWarrantCount}
                                ${model.allegationWarrant}
                              </div>
                              <div>
                                ${model.allegationCriminalCount}
                                ${model.allegationCriminal}
                              </div>
                              <div>
                                ${model.allegationReleasedOffenderCount}
                                ${model.allegationReleasedOffender}
                              </div>
                              <div>
                                ${model.allegationCojArrestWarrantsCount}
                                ${model.allegationCojArrestWarrants}
                              </div>
                              <div>
                                ${model.allegationCriminalRecordCount}
                                ${model.allegationCriminalRecord}
                              </div>
                              <div>
                                ${model.allegationArrestWarrantCount}
                                ${model.allegationArrestWarrant}
                              </div>
                              <div>
                                ${model.allegationCriminalCaseCount}
                                ${model.allegationCriminalCase}
                              </div>
                              <div>
                                ${model.allegationTrafficCaseCount}
                                ${model.allegationTrafficCase}
                              </div>
                              <div>
                                ${model.allegationWarrantOfArrestCount}
                                ${model.allegationWarrantOfArrest}
                              </div>
                              <div>
                                ${model.allegationDopProbationerNarcoticsCount}
                                ${model.allegationDopProbationerNarcotics}
                              </div>                                

                            </div>


                            <div class="panel" style="font-size: 20px;">
                              <div class="panel-heading ">
                                <h4 class="panel-title">
                                  <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">
                                    <span class="report-section-title"
                                    style=" border: 1; border-color: black; font-size: 25px; font-weight: bold; color: blue;">
                                    ประวัติทั่วไป</span>
                                    </a>
                                </h4>
                              </div>

                            <div>
                              ${model.normalAliensCount}
                              ${model.normalAliens}
                            </div>

                            <div>
                              ${model.normalBirthcertificatesCount}
                              ${model.normalBirthcertificates}
                            </div>

                            <div>
                              ${model.normalAddressesCount}
                              ${model.normalAddresses}
                            </div>

                            <div>
                              ${model.normalBorderpassesCount}
                              ${model.normalBorderpasses}
                            </div>

                            <div>
                              ${model.normalRequestorsCount}
                              ${model.normalRequestors}
                            </div>

                            <div>
                              ${model.normalThaiIdCardCount}
                              ${model.normalThaiIdCard}
                            </div>

                            <div>
                              ${model.normalFacePhotosCount}
                              ${model.normalFacePhotos}
                            </div>

                            <div>
                              ${model.normalPassportsCount}
                              ${model.normalPassports}
                            </div>

                            <div>
                              ${model.normalMarriagecertificatesCount}
                              ${model.normalMarriagecertificates}
                            </div>

                            <div>
                              ${model.normalPor4Count}
                              ${model.normalPor4}
                            </div>

                            <div>
                              ${model.normalBankruptcyCaseCount}
                              ${model.normalBankruptcyCase}
                            </div>
                            <div>
                              ${model.normalWorkforceDevelopmentsCount}
                              ${model.normalWorkforceDevelopments}
                            </div>

                            <div>
                              ${model.normalPersonsCount}
                              ${model.normalPersons}
                            </div>

                            <div>
                              ${model.normalLandAndCondominiumTitlesCount}
                              ${model.normalLandAndCondominiumTitles}
                            </div>

                            <div>
                              ${model.normalHealthInsuranceRightsCount}
                              ${model.normalHealthInsuranceRights}
                            </div>

                            <div>
                              ${model.normalEmployeeEmploymentCount}
                              ${model.normalEmployeeEmployment}
                            </div>

                            <div>
                              ${model.normalDivorceCertificatesCount}
                              ${model.normalDivorceCertificates}
                            </div>

                              ${model.normalEducationBackgroundesCount}
                              ${model.normalEducationBackgroundes}
                            </div>

                            <div>
                              ${model.normalStudentsCount}
                              ${model.normalStudents}
                            </div>

                            <div>
                              ${model.normalAlienWorkforcesCount}
                              ${model.normalAlienWorkforces}
                            </div>
                              ${model.normalJfoCaseCount}
                              ${model.normalJfoCases}
                            </div>

                            <div>
                              ${model.normalDeathCertificatesCount}
                              ${model.normalDeathCertificates}
                            </div>

                            <div>
                            ${model.normalNewBornBabiesCount}
                            ${model.normalNewBornBabies}
                            </div>

                            <div>
                            ${model.normalchargeVictimCount}
                            ${model.normalchargeVictim}
                            </div>

                            <div>
                            ${model.normaldriverLicenseCount}
                            ${model.normaldriverLicense}
                            </div>
                            
                            <div>
                            ${model.normalCorpseCount}
                            ${model.normalCorpse}
                            </div>

                            <div>
                            ${model.normalMissingPersonCount}
                            ${model.normalMissingPerson}
                            </div>

                            <div>
                            ${model.normalReportVerificationCount}
                            ${model.normalReportVerification}
                            </div>

                            <div>
                            ${model.normalPersonChangenamePrimaryCount}
                            ${model.normalPersonChangenamePrimary}
                            </div>

                            <div>
                            ${model.normalCrimeVictimCompensationCount}
                            ${model.normalCrimeVictimCompensation}
                            </div>

                            <div>
                              ${model.normalCrimeDefendantCompensationCount}
                              ${model.normalCrimeDefendantCompensation}
                            </div>

                            <div>
                              ${model.normalCarLicenseCount}
                              ${model.normalCarLicense}
                            </div>

                            <div>
                              ${model.normalPersonChangelastnameCount}
                              ${model.normalPersonChangelastname}
                            </div>

                            <div>
                              ${model.normalEmploymentCount}
                              ${model.normalEmployment}
                            </div>

                            <div>
                              ${model.normalMissingPersonCaseCount}
                              ${model.normalMissingPersonCase}
                            </div>

                            <div>
                              ${model.normalThailandPassportCount}
                              ${model.normalThailandPassport}
                            </div>

                            <div>
                              ${model.normalRegistrantCount}
                              ${model.normalRegistrant}
                            </div>

                            <div>
                              ${model.normalJfoCase64Count}
                              ${model.normalJfoCase64}
                            </div>

                            <div>
                              ${model.normalTravelInformationCount}
                              ${model.normalTravelInformation}
                            </div>
                          </div>

                        </div>

                      </div>

                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>



          <!-- //ปิดรายงาน single report -->




      </div>


    </body>

    </html>`;

  }
}

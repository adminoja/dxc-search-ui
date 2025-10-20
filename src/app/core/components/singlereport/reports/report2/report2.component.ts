import { Component, OnInit } from '@angular/core';
import { IReport2, Metadata } from './report2.interface';
import { ThemeLight } from '../../../../shared/utils/theme-light';

import { Dxc_Model_Doc_Prisoner } from '../../../../shared/models/Dxc_Model_Doc_Prisoner';
import { Dxc_Model_Dopa_Citizen } from '../../../../shared/models/Dxc_Model_Dopa_Citizen';
import {IDxc_Model_Dop_Probationer} from '../../../../shared/models/Dxc_Model_Dop_Probationer';
import { ThaiDatePipe } from '../../../../shared/pipe/thaidate.pipe';
import * as moment from 'moment'
import { IDxc_Model_Oncb_NarcoticOffender } from '../../../../shared/models/Dxc_Model_Oncb_NarcoticOffender';
import { IDxc_Model_Djop_JuvenileOffender } from 'src/app/core/shared/models/Dxc_Model_Djop_JuvenileOffender';



declare var PDFreactor: any;
declare var LogLevel: any;
declare var document: any;
@Component({
  selector: 'app-report2',
  templateUrl: './report2.component.html',
  styleUrls: ['./report2.component.scss'],
  providers: [
    Metadata
  ]
})
export class Report2Component implements OnInit {
  dataHtml: IReport2;
  theme: ThemeLight;

  citizenResults: Dxc_Model_Dopa_Citizen[];
  citizenObj: string;

  prisonerResults: Dxc_Model_Doc_Prisoner[];
  prisonerObj: string;

  juvenileOffenderResults: IDxc_Model_Djop_JuvenileOffender[];
  juvenileOffenderObj: string;

  probationerResults: IDxc_Model_Dop_Probationer[];
  probationerObj: string;

  narcoticOffenderResults: IDxc_Model_Oncb_NarcoticOffender[];
  narcoticOffenderObj: string;


  firstName: string = "";
  lastName: string = "";
  dateOfBirth: string="";
  nationality: string = "";
  religion: string = "";
  homeNumber: string = "";
  homeMoo: string = "";
  homeTrock: string = "";
  homeSoy: string = "";
  homeRoad: string = "";
  homeTumbon: string = "";
  homeAmphur: string = "";
  homeProvince: string = "";
  allegationDoc: string[]=[];
  sentenceDate: string = "";
  releaseDate: string = "";
  prisonName: string = "";
  judgement: string = "" ;
  allegationDjop: string = "";
  allegationDocNumber: number=0;
  age:string="";
  narcoticName:string[]=[];

  reportName:string; //ผู้ขอรายงาน
  reportOfDate:string; // วันที่พิมรายงาน
  reportOfTime:string; //เวลาที่พิมรายงาน
  reportBarcode:string; //เลขที่เอกสาร(เลขบาร์โค๊ด)
  wartermarks:string;
  constructor(private html: Metadata) {
    this.loadReportDetail();
    if (localStorage.getItem("prisonerResults") === null) {
      this.allegationDoc = []; //Doc
      this.sentenceDate = ""; //Doc
      this.releaseDate = ""; //Doc
      this.prisonName = "";
      this.judgement = "";

      console.log("1.1")
    } else {
      this.prisonerObj = localStorage.getItem("prisonerResults");
      this.prisonerResults = JSON.parse(this.prisonerObj);
      console.log("prisonerObj" + this.prisonerObj);


      for(let i=0;i<this.prisonerResults.length;i++){

        this.allegationDocNumber++;
        console.log("sum "+this.allegationDocNumber);
          console.log("DOC.allegation"+this.allegationDoc[i]);
          this.allegationDoc.push("<tr>"+"<td style='width: 5%;'></td>"+
          "<td style='width: 5%;'></td>"+
          "<td style='width: 5%;'></td>"+
          "<td style='width: 5%;'></td>"+
          "<td style='width: 5%;'></td>"+
          "<td style='width: 5%;'></td>"+
          "<td style='width: 5%;'></td>"+
          "<td style='width: 5%;'></td>"+
          "<td style='width: 5%;'></td>"+
          "<td style='width: 5%;'></td>"+
          "<td style='width: 5%;'></td>"+
          "<td style='width: 5%;'></td>"+
          "<td style='width: 5%;'></td>"+
          "<td style='width: 5%;'></td>"+
          "<td style='width: 5%;'></td>"+
          "<td style='width: 5%;'></td>"+
          "<td style='width: 5%;'></td>"+
          "<td style='width: 5%;'></td>"+
          "<td style='width: 5%;'></td>"+
          "<td style='width: 5%;'></td>"+
          "</tr>"+

          "<tr>"+
          "<td style='font-weight: bold; text-decoration: underline;' colspan='2'>ครั้งที่ "+this.thaiNumber(i+1)+"</td>"+
          "<td colspan='2'>สถานีตำรวจ</td>"+
          "<td style='border-bottom: black 1px dotted;'></td>"+
          "<td colspan='1'>ข้อหา</td>"+
          "<td class='colorfont' style='border-bottom: black 1px dotted; ' colspan='14'>"+this.changeNull(this.prisonerResults[i].allegation)+"</td>"+
          "</tr>"+

          "<tr>"+
          "<td colspan='2'>เมื่อวันที่</td>"+
          "<td class='colorfont' style='border-bottom: black 1px dotted; ' colspan='7'>"+this.changeNull(this.prisonerResults[i].sentenceDate)+"</td>"+
          "<td colspan='4'>ใช้ชื่อในการกระทำผิดว่า</td>"+
          "<td style='border-bottom: black 1px dotted;' colspan='7'></td>"+
          "</tr>"+

          "<tr>"+
          "<td style='font-weight: bold; text-decoration: underline;' colspan='2'>ผลคดี</td>"+
          "<td>"+
          "  <input type='checkbox' />"+
          "</td>"+
          "<td style='font-weight: bold;' colspan='5'>ได้รับการปล่อยตัวพ้นข้อหา</td>"+
          "<td>"+
          "  <input type='checkbox' />"+
          "</td>"+
          "<td style='font-weight: bold;' colspan='4'>ในชั้นตำรวจ/อัยการ</td>"+
          "<td>"+
          "  <input type='checkbox' />"+
          "</td>"+
          "<td style='font-weight: bold;' colspan='2'>ในชั้นศาล</td>"+
          "<td style='border-bottom: black 1px dotted;' colspan='4'></td>"+
          "</tr>"+
          "<tr>"+
          "<td colspan='2'></td>"+
          "<td>"+
          "  <input type='checkbox' />"+
          "</td>"+
          "<td style='font-weight: bold;' colspan='4'>ได้รับโทษ ศาล</td>"+
          "<td style='border-bottom: black 1px dotted;'></td>"+
          "<td style='font-weight: bold;' colspan='2'>พิพากษา</td>"+
          "<td class='colorfont' style='border-bottom: black 1px dotted; ' colspan='2' >"+this.changeNull(this.prisonerResults[i].judgement)+"</td>"+
          "<td style='border-bottom: black 1px dotted;' colspan='10'></td>"+
          "</tr>"+
          "<tr>"+
          "<td colspan='2'></td>"+
          "<td style='font-weight: bold;' colspan='4'>พ้นโทษจำคุกจาก</td>"+
          "<td class='colorfont' style='border-bottom: black 1px dotted; ' colspan='6' >"+this.changeNull(this.prisonerResults[i].prisonName)+"</td>"+

          "<td style='font-weight: bold;'>เมื่อ</td>"+
          "<td class='colorfont' style='border-bottom: black 1px dotted; ' colspan='4' >"+this.changeNull(this.prisonerResults[i].releaseDate)+"</td>"+
          "</tr>"+

          "<tr>"+
          "<td colspan='2'></td>"+
          "<td style='font-weight: bold;'>คดีนี้</td>"+
          "<td>"+
          "  <input type='checkbox' />"+
          "</td>"+
          "<td>ผ่าน</td>"+
          "<td>"+
          "  <input type='checkbox' />"+
          "</td>"+
          "<td colspan='14'>ไม่ผ่าน ขั้นตอนการสืบเสาะและพินิจ/การควบคุมและสอดส่อง</td>"+
          "</tr>"+

          "<tr>"+
          "<td colspan='2'></td>"+
          "<td colspan='5'>ผลการคุมความประพฤติ</td>"+
          "<td style='border-bottom: black 1px dotted;' colspan='13'></td>"+
          "</tr>")

      }

      console.log("1.2")
    }
    if (localStorage.getItem("citizenResults") === null) {

      this.firstName = "";
      this.lastName = "";
      this.dateOfBirth = null; //Dopa
      this.nationality = ""; //Dopa
      this.religion = ""; //Dopa
      this.homeNumber = ""; //Dopa
      this.homeMoo = ""; //Dopa
      this.homeTrock = ""; //Dopa
      this.homeSoy = ""; //Dopa
      this.homeRoad = ""; //Dopa
      this.homeTumbon = ""; //Dopa
      this.homeAmphur = ""; //Dopa
      this.homeProvince = ""; //Dopa
      this.age="";
      console.log("2.1")
    } else {
      this.citizenObj = localStorage.getItem("citizenResults")
      this.citizenResults = JSON.parse(this.citizenObj);
      this.firstName = this.changeNull(this.citizenResults[0].firstName);
      this.lastName = this.changeNull(this.citizenResults[0].lastName);
      this.dateOfBirth = this.citizenResults[0].dateOfBirth; //Dopa
      this.nationality = this.changeNull(this.citizenResults[0].nationality); //Dopa
      this.religion = this.changeNull(this.citizenResults[0].religion); //Dopa
      this.homeNumber = this.changeNull(this.citizenResults[0].homeNumber); //Dopa
      this.homeMoo = this.changeNull(this.citizenResults[0].homeMoo); //Dopa
      this.homeTrock = this.changeNull(this.citizenResults[0].homeTrock); //Dopa
      this.homeSoy = this.changeNull(this.citizenResults[0].homeSoy); //Dopa
      this.homeRoad = this.changeNull(this.citizenResults[0].homeRoad); //Dopa
      this.homeTumbon = this.changeNull(this.citizenResults[0].homeTumbon); //Dopa
      this.homeAmphur = this.changeNull(this.citizenResults[0].homeAmphur); //Dopa
      this.homeProvince = this.changeNull(this.citizenResults[0].homeProvince); //Dopa
      this.age = this.changeNull(this.citizenResults[0].age);
      console.log("2.2")
    }

    if (localStorage.getItem("juvenileOffenderResults") === null) {

      this.allegationDjop = ""; //Djop
      console.log("3.1")
    } else {
      this.juvenileOffenderObj = localStorage.getItem("juvenileOffenderResults");
      this.juvenileOffenderResults = JSON.parse(this.juvenileOffenderObj);
      this.allegationDjop = this.changeNull(this.juvenileOffenderResults[0].allegation); //Djop
      console.log("3.2")
    }

    if (localStorage.getItem("probationerResults") === null) {


      console.log("4.1")
    } else {
      this.probationerObj = localStorage.getItem("probationerResults");
      this.probationerResults = JSON.parse(this.probationerObj);
      this.probationerResults[0].caseName;

      console.log("4.2"+this.probationerResults[0].caseName)
    }
    if (localStorage.getItem("narcoticOffenderResults") === null) {


      console.log("5.1")
    } else {
      this.narcoticOffenderObj = localStorage.getItem("narcoticOffenderResults");
      this.narcoticOffenderResults = JSON.parse(this.narcoticOffenderObj);
      this.narcoticOffenderResults[0].narcoticName;

      for(let i=0;i<this.narcoticOffenderResults.length;i++){
        if(this.narcoticOffenderResults[i].allegation!==null){
          this.narcoticName.push("<td style='border-bottom: black 1px dotted; color:blue;' colspan='5'>"+this.narcoticOffenderResults[i].narcoticName+"</td>"); //Narcotic
          console.log("narcoticName"+this.narcoticName[i]);

        }
      }

      console.log("5.2"+this.narcoticOffenderResults[0].narcoticName)
    }


  }

  ngOnInit() {
    this.theme = new ThemeLight;
    this.theme.loadScripts();
    this.pdfPreview();
  }

  pdfPreview() {
      this.dataHtml = {
      firstName: this.firstName,
      lastName: this.lastName,
      dateOfBirth: new ThaiDatePipe().transform(this.dateOfBirth), //Dopa
      nationality: this.nationality, //Dopa
      religion: this.religion, //Dopa
      homeNumber: this.homeNumber, //Dopa
      homeMoo: this.homeMoo, //Dopa
      homeTrock: this.homeTrock, //Dopa
      homeSoy: this.homeSoy, //Dopa
      homeRoad: this.homeRoad, //Dopa
      homeTumbon: this.homeTumbon, //Dopa
      homeAmphur: this.homeAmphur, //Dopa
      homeProvince: this.homeProvince, //Dopa
      age:this.age,
      allegationDoc: this.allegationDoc.join("").toString(), //Doc
      sentenceDate: this.sentenceDate, //Doc
      releaseDate: this.releaseDate, //Doc
      prisonName: this.prisonName,
      judgement: this.judgement,
      allegationDJop: this.allegationDjop, //Djop
      allegationDocNumber:this.thaiNumber(this.allegationDocNumber),
      narcoticName: this.narcoticName, //Once
      reportName:this.reportName,
      reportOfDate:this.reportOfDate,
      reportOfTime:this.reportOfTime,
      reportBarcode:"QP4015-12345678", //เลขที่เอกสาร(เลขบาร์โค๊ด)
      wartermarks:this.wartermarks
    }
    var pdfReactor = new PDFreactor();
    console.log(pdfReactor);
    var config = {

      document: this.html.getHtml(this.dataHtml),
      signPDF: {
        "keyAlias": "le-9474320e-12b6-4d31-b5c2-96673e619c6b",
        "keystorePassword": "1234",
        "keystoreType": "PKCS12",
        "keystoreURL": "https://search.dxc.go.th/public/secur/keystore.pfx",
        "signingMode": "WINCER_SIGNED"
        },
      addAttachments: true,
      addBookmarks: true,
      title:"รายงานสืบเสาะคุมประพฤติ"
    }

    pdfReactor.convertAsync(config, function (id) {
      console.log(id);
      pdfReactor.getProgress(id, function (progress) {
        setTimeout(function () {
          if (!progress.finished) {
            pdfReactor.getDocument(id, function (Result) {
              console.log(Result.document)
              var iframe = document.getElementById('result')

              iframe.src = "data:application/pdf;base64," + Result.document
            })
          }
        }, 9000)
      })
    })
  }
  thaiNumber(num){
    var array = {"1":"๑", "2":"๒", "3":"๓", "4" : "๔", "5" : "๕", "6" : "๖", "7" : "๗", "8" : "๘", "9" : "๙", "0" : "๐"};
    var str = num.toString();
    for (var val in array) {
     str = str.split(val).join(array[val]);
    }
    return str;
   }
   changeNull(selectData:string){
    if(selectData==null || selectData==undefined){
        return '-';
    }else if(selectData.length == 0){
        return '-';
    }else{
        return selectData;
    }
}
   loadReportDetail() {
    if (localStorage.getItem("reportName") !== null) {
      this.reportName = localStorage.getItem("reportName");
      this.reportOfDate=moment(new Date().toString()).format('L').toString();
      this.reportOfTime=moment(new Date().toString()).format('LTS').toString();
      this.reportBarcode="QP4015-12345678";
      this.wartermarks=`<div class="watermark">
      ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
      ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
</div>
<div class="watermark2">
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
</div>
<div class="watermark3">
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
</div>
<div class="watermark4">
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
</div>
<div class="watermark5">
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
</div>
<div class="watermark6">
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
</div>
<div class="watermark7">
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
</div>
<div class="watermark8">
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
</div>
<div class="watermark9">
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
</div>
<div class="watermark10">
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
</div>
<div class="watermark11">
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
</div>`;

    }else{
      this.reportName = "เกิดข้อผิดพลาด";
      this.reportOfDate=moment(new Date().toString()).format('L').toString();
      this.reportOfTime=moment(new Date().toString()).format('LTS').toString();
      this.reportBarcode="QP4015-12345678";
      this.wartermarks=`<div class="watermark">
      ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
      ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
</div>
<div class="watermark2">
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
</div>
<div class="watermark3">
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
</div>
<div class="watermark4">
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
</div>
<div class="watermark5">
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
</div>
<div class="watermark6">
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
</div>
<div class="watermark7">
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
</div>
<div class="watermark8">
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
</div>
<div class="watermark9">
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
</div>
<div class="watermark10">
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
</div>
<div class="watermark11">
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
  ผู้พิมพ์รายงาน ${this.reportName} ${this.reportOfDate} ${this.reportOfTime} เลขที่เอกสาร ${this.reportBarcode} www.dxc.go.th
</div>`;

    }
  }
}

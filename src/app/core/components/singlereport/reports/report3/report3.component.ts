import { Component, OnInit } from '@angular/core';
import { Metadata, IReport3 } from './report3.interface';
import { ThemeLight } from '../../../../shared/utils/theme-light';
import { Dxc_Model_Dopa_Citizen } from '../../../../shared/models/Dxc_Model_Dopa_Citizen';
import { Dxc_Model_Doc_Prisoner } from '../../../../shared/models/Dxc_Model_Doc_Prisoner';
import { IDxc_Model_Djop_JuvenileOffender } from '../../../../shared/models/Dxc_Model_Djop_JuvenileOffender';
import {IDxc_Model_Dop_Probationer} from '../../../../shared/models/Dxc_Model_Dop_Probationer';
import { ThaiDatePipe } from '../../../../shared/pipe/thaidate.pipe';
import * as moment from 'moment'
import { IDxc_Model_Oncb_NarcoticOffender } from '../../../../shared/models/Dxc_Model_Oncb_NarcoticOffender';
declare var PDFreactor: any;
declare var LogLevel: any;
declare var document: any;
@Component({
  selector: 'app-report3',
  templateUrl: './report3.component.html',
  styleUrls: ['./report3.component.scss'],
  providers:[
    Metadata
  ]
})
export class Report3Component implements OnInit {
  dataHtml:IReport3;
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

  citizenCardNumber:string="";
  firstName: string = "";
  lastName: string = "";
  dateOfBirth: string="";
  age:string="";
  nationality: string = "";
  religion: string = "";
  fatherFullName:string=""
  motherFullName:string=""
  homeNumber: string = "";
  homeMoo: string = "";
  homeTrock: string = "";
  homeSoy: string = "";
  homeRoad: string = "";
  homeTumbon: string = "";
  homeAmphur: string = "";
  homeProvince: string = "";
  homeAddress: string = "";
  allegationDoc: string[]=[];
  sentenceDate: string = "";
  releaseDate: string = "";
  allegationDjop: string[] = [];
  allegationDocNumber: number;
  allegationDjopNumber: number;
  narcoticName:string[]=[];


  reportName:string; //ผู้ขอรายงาน
  reportOfDate:string; // วันที่พิมรายงาน
  reportOfTime:string; //เวลาที่พิมรายงาน
  reportBarcode:string; //เลขที่เอกสาร(เลขบาร์โค๊ด)
  wartermarks:string;
  constructor(private html:Metadata) {
      this.loadReportDetail();
    if (localStorage.getItem("prisonerResults") === null) {
      this.allegationDoc = []; //Doc
      this.sentenceDate = ""; //Doc
      this.releaseDate = ""; //Doc

      console.log("1.1")
    } else {
      this.prisonerObj = localStorage.getItem("prisonerResults");
      this.prisonerResults = JSON.parse(this.prisonerObj);
      console.log("prisonerObj" + this.prisonerObj);


      for(let i=0;i<this.prisonerResults.length;i++){
        if(this.prisonerResults[i].allegation!==null){
          this.allegationDoc.push("<tr><td colspan="+this.thaiNumber(i+1)+">คดีที่ "+this.thaiNumber(i.toString())+" ข้อหา</td><td class='colorfont' style='border-bottom: black 1px dotted;' colspan='11'>"+this.changeNull(this.prisonerResults[i].allegation)+"</td></tr>"); //Doc
          console.log("DOC.allegation"+this.allegationDoc[i]);
          this.allegationDocNumber=i++;
        }
      }
      this.sentenceDate = this.prisonerResults[0].sentenceDate; //Doc
      this.releaseDate = this.prisonerResults[0].releaseDate; //Doc
      console.log("1.2")
    }
    if (localStorage.getItem("citizenResults") === null) {
      this.citizenCardNumber="";
      this.firstName = "";
      this.lastName = "";
      this.dateOfBirth = ""; //Dopa
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
      this.homeAddress = "";
      this.age= "";
      console.log("2.1")
    } else {
      this.citizenObj = localStorage.getItem("citizenResults")
      this.citizenResults = JSON.parse(this.citizenObj);
      this.citizenCardNumber=this.citizenResults[0].citizenCardNumber;
      this.firstName = this.citizenResults[0].firstName;
      this.lastName = this.citizenResults[0].lastName;
      this.dateOfBirth = new ThaiDatePipe().transform(this.citizenResults[0].dateOfBirth); //Dopa
      this.nationality = this.citizenResults[0].nationality; //Dopa
      this.religion = this.citizenResults[0].religion; //Dopa
      this.fatherFullName=this.citizenResults[0].fatherFullName, //Dopa
      this.motherFullName=this.citizenResults[0].motherFullName, //Dopa
      this.homeNumber = this.citizenResults[0].homeNumber; //Dopa
      this.homeMoo = this.citizenResults[0].homeMoo; //Dopa
      this.homeTrock = this.citizenResults[0].homeTrock; //Dopa
      this.homeSoy = this.citizenResults[0].homeSoy; //Dopa
      this.homeRoad = this.citizenResults[0].homeRoad; //Dopa
      this.homeTumbon = this.citizenResults[0].homeTumbon; //Dopa
      this.homeAmphur = this.citizenResults[0].homeAmphur; //Dopa
      this.homeProvince = this.citizenResults[0].homeProvince; //Dopa
      this.homeAddress = this.citizenResults[0].homeAddress;
      this.age = this.citizenResults[0].age;
      console.log("2.2")
    }

    if (localStorage.getItem("juvenileOffenderResults") === null) {

      this.allegationDjop = []; //Djop
      console.log("3.1")
    } else {
      this.juvenileOffenderObj = localStorage.getItem("juvenileOffenderResults");
      this.juvenileOffenderResults = JSON.parse(this.juvenileOffenderObj);

      for(let i=0;i<this.juvenileOffenderResults.length;i++){
        if(this.juvenileOffenderResults[i].allegation!==null){
          this.allegationDjop.push("<tr><td colspan='4'>คดีที่ "+this.thaiNumber(i+1)+" ข้อหา</td><td class='colorfont' style='border-bottom: black 1px dotted;' colspan='11'>"+this.changeNull(this.juvenileOffenderResults[i].allegation)+"</td></tr>"); //Doc
          console.log("DOC.allegation"+this.allegationDoc[i]);
          this.allegationDjopNumber=this.thaiNumber(this.juvenileOffenderResults.length);
        }
      }
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
          this.narcoticName.push("<td style='border-bottom: black 1px dotted; color:blue;' colspan='5'>"
          +""+this.narcoticOffenderResults[i].narcoticName+"</td>"+""); //Narcotic
          console.log("narcoticName"+this.narcoticName[i]);

        }
      }

      console.log("5.2"+this.narcoticOffenderResults[0].narcoticName)
    }
  }

  ngOnInit() {
    this.theme=new ThemeLight;
    this.theme.loadScripts();
    this.pdfPreview();
  }
  pdfPreview() {
    this.dataHtml = {
      citizenCardNumber:this.changeNull(this.citizenCardNumber),
      firstName:this.changeNull(this.firstName), //Dopa
      lastName:this.changeNull(this.lastName), //Dopa
      dateOfBirth:this.changeNull(this.dateOfBirth), //Dopa
      age:this.changeNull(this.age), //Dopa
      nationality:this.changeNull(this.nationality), //Dopa
      religion:this.changeNull(this.religion), //Dopa
      fatherFullName:this.changeNull(this.fatherFullName), //Dopa
      motherFullName:this.changeNull(this.motherFullName), //Dopa
      homeNumber:this.changeNull(this.homeNumber), //Dopa
      homeMoo:this.changeNull(this.homeMoo), //Dopa
      homeTrock:this.changeNull(this.homeTrock), //Dopa
      homeSoy:this.changeNull(this.homeSoy), //Dopa
      homeRoad:this.changeNull(this.homeRoad), //Dopa
      homeTumbon:this.changeNull(this.homeTumbon), //Dopa
      homeAmphur:this.changeNull(this.homeAmphur), //Dopa
      homeProvince:this.changeNull(this.homeProvince), //Dopa
      homeAddress:this.changeNull(this.homeAddress),
      allegationDoc:this.allegationDoc, //Doc
      allegationDocNumber:this.allegationDocNumber,
      sentenceDate:this.changeNull(this.sentenceDate), //Doc
      releaseDate:this.changeNull(this.releaseDate), //Doc
      allegationDjop:this.allegationDjop, //Djop
      allegationDjopNumber:this.allegationDjopNumber,
      narcoticName:this.narcoticName, //Once
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
      title:"รายงานสืบเสาะพินิจ"
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

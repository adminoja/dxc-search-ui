import * as moment from 'moment';
export interface IPerson {
  citizenCardNumber: string;
  fullName: string;
  sex: string;
  birthDateSrc: Date;
}
export interface IDxc_Model_Dop_Probationer_Narcotics {
  activityName: string
  activityResult: string
  activityTypeName: string
  birthdate: string
  caseBegin: string
  caseGuilty: string
  classifyDate: string
  classifyNo: string
  corn0: number
  corn1: number
  corn10: number
  corn11: number
  corn2: number
  corn3: number
  corn4: number
  corn5: number
  corn6: number
  corn7: number
  corn8: number
  corn9: number
  cornNo: number
  drugName: string
  drugType: string
  endControlDate: string
  endDate: string
  firstName: string
  guiltyId: string
  guiltyName: string
  guiltySubName: string
  id: number
  idCardNo: string
  judControlDays: string
  judControlMonths: string
  judControlYear: string
  lastName: string
  officeId: string
  officeName: string
  otherCorn: string
  registerId: number
  registerNumber: string
  risk: string
  startDate: string
  type: string
  corn: string;
  person: IPerson;
  reportName: string; // ผู้ขอรายงาน
  reportOfDate: string; // วันที่พิมรายงาน
  reportOfTime: string; // เวลาที่พิมรายงาน
  reportBarcode: string; // เลขที่เอกสาร(เลขบาร์โค๊ด)
  wartermarks: string;
  status: string; // ex.status == '200'
  body: string[]; //

}


export class Dxc_Model_Dop_Probationer_Narcotics {
  dopprobationerNarcotics: any;
    reportName: string;
    reportOfDate: string;
    reportOfTime: string;
    dataDopprobationer: any;
    corn: any;
    private dataSet: IDxc_Model_Dop_Probationer_Narcotics;
    constructor(selectData: any) {
          // if (selectData.cornNo == 1 && selectData.corn1 == 0 && selectData.corn2 == 0 && selectData.corn3 == 0 
          //   && selectData.corn4 == 0 && selectData.corn5 == 0 && selectData.corn6 == 0 && selectData.corn7 == 0 && selectData.corn8 == 0 
          //   && selectData.corn9 == 0 && selectData.corn10 == 0 && selectData.corn11 == 0 && selectData.corn0 == 0) {
          //     this.corn = 'ไม่มีปัญหา'
          // } else if (selectData.cornNo == 0 && selectData.corn1 == 1 && selectData.corn2 == 0 && selectData.corn3 == 0 
          //   && selectData.corn4 == 0 && selectData.corn5 == 0 && selectData.corn6 == 0 && selectData.corn7 == 0 && selectData.corn8 == 0 
          //   && selectData.corn9 == 0 && selectData.corn10 == 0 && selectData.corn11 == 0 && selectData.corn0 == 0) {
          //     console.log('corn1')
          //     this.corn = 'ปัญหาเกี่ยวกับที่อยู่อาศัย / สภาพแวดล้อม'
          // } else if (selectData.cornNo == 0 && selectData.corn1 == 0 && selectData.corn2 == 1 && selectData.corn3 == 0 
          //   && selectData.corn4 == 0 && selectData.corn5 == 0 && selectData.corn6 == 0 && selectData.corn7 == 0 && selectData.corn8 == 0 
          //   && selectData.corn9 == 0 && selectData.corn10 == 0 && selectData.corn11 == 0 && selectData.corn0 == 0 && selectData.corn0 == 0) {
          //     this.corn = 'ปัญหาเกี่ยวกับผู้อุปการะ/ผู้ดูแล'
          // } else if (selectData.cornNo == 0 && selectData.corn1 == 0 && selectData.corn2 == 0 && selectData.corn3 == 1 
          //   && selectData.corn4 == 0 && selectData.corn5 == 0 && selectData.corn6 == 0 && selectData.corn7 == 0 && selectData.corn8 == 0 
          //   && selectData.corn9 == 0 && selectData.corn10 == 0 && selectData.corn11 == 0 && selectData.corn0 == 0) {
          //     this.corn = 'ปัญหาเกี่ยวกับสัมพันธภาพบุคคลในครอบครัว/บุคคลที่พักอาศัยอยู่ด้วย'
          // } else if (selectData.cornNo == 0 && selectData.corn1 == 0 && selectData.corn2 == 0 && selectData.corn3 == 0 
          //   && selectData.corn4 == 1 && selectData.corn5 == 0 && selectData.corn6 == 0 && selectData.corn7 == 0 && selectData.corn8 == 0 
          //   && selectData.corn9 == 0 && selectData.corn10 == 0 && selectData.corn11 == 0 && selectData.corn0 == 0) {
          //     this.corn = 'ปัญหาเกี่ยวกับการศึกษา'
          // } else if (selectData.cornNo == 0 && selectData.corn1 == 0 && selectData.corn2 == 0 && selectData.corn3 == 0 
          //   && selectData.corn4 == 0 && selectData.corn5 == 1 && selectData.corn6 == 0 && selectData.corn7 == 0 && selectData.corn8 == 0 
          //   && selectData.corn9 == 0 && selectData.corn10 == 0 && selectData.corn11 == 0 && selectData.corn0 == 0) {
          //     this.corn = 'ปัญหาเกี่ยวกับอาชีพ'
          // } else if (selectData.cornNo == 0 && selectData.corn1 == 0 && selectData.corn2 == 0 && selectData.corn3 == 0 
          //   && selectData.corn4 == 0 && selectData.corn5 == 0 && selectData.corn6 == 1 && selectData.corn7 == 0 && selectData.corn8 == 0 
          //   && selectData.corn9 == 0 && selectData.corn10 == 0 && selectData.corn11 == 0 && selectData.corn0 == 0) {
          //     this.corn = 'ปัญหาทางการเงิน'
          // } else if (selectData.cornNo == 0 && selectData.corn1 == 0 && selectData.corn2 == 0 && selectData.corn3 == 0 
          //   && selectData.corn4 == 0 && selectData.corn5 == 0 && selectData.corn6 == 0 && selectData.corn7 == 1 && selectData.corn8 == 0 
          //   && selectData.corn9 == 0 && selectData.corn10 == 0 && selectData.corn11 == 0 && selectData.corn0 == 0) {
          //     this.corn = 'มีโรคประจำตัวร้ายแรง'
          // } else if (selectData.cornNo == 0 && selectData.corn1 == 0 && selectData.corn2 == 0 && selectData.corn3 == 0 
          //   && selectData.corn4 == 0 && selectData.corn5 == 0 && selectData.corn6 == 0 && selectData.corn7 == 0 && selectData.corn8 == 1 
          //   && selectData.corn9 == 0 && selectData.corn10 == 0 && selectData.corn11 == 0 && selectData.corn0 == 0) {
          //     this.corn = 'บุคลิคภาพ / พฤติกรรม'
          // } else if (selectData.cornNo == 0 && selectData.corn1 == 0 && selectData.corn2 == 0 && selectData.corn3 == 0 
          //   && selectData.corn4 == 0 && selectData.corn5 == 0 && selectData.corn6 == 0 && selectData.corn7 == 0 && selectData.corn8 == 0 
          //   && selectData.corn9 == 1 && selectData.corn10 == 0 && selectData.corn11 == 0 && selectData.corn0 == 0) {
          //     this.corn = 'ปัญหาจากการดื่มสุรา'
          // } else if (selectData.cornNo == 0 && selectData.corn1 == 0 && selectData.corn2 == 0 && selectData.corn3 == 0 
          //   && selectData.corn4 == 0 && selectData.corn5 == 0 && selectData.corn6 == 0 && selectData.corn7 == 0 && selectData.corn8 == 0 
          //   && selectData.corn9 == 0 && selectData.corn10 == 1 && selectData.corn11 == 0 && selectData.corn0 == 0) {
          //     this.corn = 'ปัญหาการใช้ยาและสารเสพติด'
          // } else if (selectData.cornNo == 0 && selectData.corn1 == 0 && selectData.corn2 == 0 && selectData.corn3 == 0 
          //   && selectData.corn4 == 0 && selectData.corn5 == 0 && selectData.corn6 == 0 && selectData.corn7 == 0 && selectData.corn8 == 0 
          //   && selectData.corn9 == 0 && selectData.corn10 == 0 && selectData.corn11 == 1 && selectData.corn0 == 0) {
          //     this.corn = 'มีอาการผิดปกติทางจิต'
          // } else if (selectData.cornNo == 0 && selectData.corn1 == 0 && selectData.corn2 == 0 && selectData.corn3 == 0 
          //   && selectData.corn4 == 0 && selectData.corn5 == 0 && selectData.corn6 == 0 && selectData.corn7 == 0 && selectData.corn8 == 0 
          //   && selectData.corn9 == 0 && selectData.corn10 == 0 && selectData.corn11 == 0 && selectData.corn0 == 1) {
          //     this.corn = 'ปัญหาอื่นๆ ระบุ'
          // }

          this.dopprobationerNarcotics = {
            'id': this.changeNull(selectData.id),
            'activityName': this.changeNull(selectData.activityName),
            'activityResult': this.changeNull(selectData.activityResult),
            'activityTypeName': this.changeNull(selectData.activityTypeName),
            'birthdate': this.formatDate(selectData.birthdate),
            'caseBegin': this.formatDate(selectData.caseBegin),
            'caseGuilty': this.changeNull(selectData.caseGuilty),
            'classifyDate': this.formatDate(selectData.classifyDate),
            'classifyNo': this.changeNull(selectData.classifyNo),
            'drugName': this.changeNull(selectData.drugName),
            'drugType': this.changeNull(selectData.drugType),
            'endControlDate': this.formatDate(selectData.endControlDate),
            'endDate': selectData.endDate,
            'firstName': this.changeNull(selectData.firstName),
            'guiltyId': this.changeNull(selectData.guiltyId),
            'guiltyName': this.changeNull(selectData.guiltyName),
            'guiltySubName': this.changeNull(selectData.guiltySubName),
            'idCardNo': this.changeNull(selectData.idCardNo),
            'judControlDays': this.changeNull(selectData.judControlDays),
            'judControlMonths': this.changeNull(selectData.judControlDays),
            'judControlYear': this.changeNull(selectData.judControlYear),
            'lastName': this.changeNull(selectData.lastName),
            'officeId': this.changeNull(selectData.officeId),
            'officeName': this.changeNull(selectData.officeName),
            'otherCorn': this.changeNull(selectData.otherCorn),
            'registerId': this.changeNull(selectData.registerId),
            'registerNumber': this.changeNull(selectData.registerNumber),
            'risk': this.changeNull(selectData.risk),
            'startDate': selectData.startDate,
            'type': this.changeNull(selectData.type),
            'corn0': this.changeCorn(selectData.corn0),
            'corn1': this.changeCorn(selectData.corn1),
            'corn2': this.changeCorn(selectData.corn2),
            'corn3': this.changeCorn(selectData.corn3),
            'corn4': this.changeCorn(selectData.corn4),
            'corn5': this.changeCorn(selectData.corn5),
            'corn6': this.changeCorn(selectData.corn6),
            'corn7': this.changeCorn(selectData.corn7),
            'corn8': this.changeCorn(selectData.corn8),
            'corn9': this.changeCorn(selectData.corn9),
            'corn10': this.changeCorn(selectData.corn10),
            'corn11': this.changeCorn(selectData.corn11),
            'cornNo': this.changeCorn(selectData.cornNo),
            'person': {
              'citizenCardNumber': this.changeNull(selectData.idCardNo),
              'fullName': this.changeNull(selectData.firstName) + ' ' +  this.changeNull(selectData.lastName),
              'sex': '',
              'dateOfBirth': this.formatDate(selectData.birthdate),
            },
            'wartermarks': this.loadReportDetail(),
            'reportName' : this.reportName,
            'reportOfDate': this.reportOfDate,
            'reportOfTime': this.reportOfTime
          };
          this.dataSet = this.dopprobationerNarcotics;
    }

    setData(selectData: any) {
      this.dopprobationerNarcotics = {
        'id': this.changeNull(selectData.id),
        'activityName': this.changeNull(selectData.activityName),
        'activityResult': this.changeNull(selectData.activityResult),
        'activityTypeName': this.changeNull(selectData.activityTypeName),
        'birthdate': selectData.birthdate, //วันเดือนปีเกิด
        'caseBegin': selectData.caseBegin, //วันที่ศาลสั่งให้คุมประพฤติ
        'caseGuilty': this.changeNull(selectData.caseGuilty),
        'classifyDate': selectData.classifyDate, //วันที่จำแนก
        'classifyNo': this.changeNull(selectData.classifyNo),
        'drugName': this.changeNull(selectData.drugName),
        'drugType': this.changeNull(selectData.drugType),
        'endControlDate': selectData.endControlDate, //วันครบกำหนดคุมประพฤติ
        'endDate': this.formatDate(selectData.endDate), //วันที่สิ้นสุดกิจกรรม
        'firstName': this.changeNull(selectData.firstName),
        'guiltyId': this.changeNull(selectData.guiltyId),
        'guiltyName': this.changeNull(selectData.guiltyName),
        'guiltySubName': this.changeNull(selectData.guiltySubName),
        'idCardNo': this.changeNull(selectData.idCardNo),
        'judControlDays': this.changeNull(selectData.judControlDays),
        'judControlMonths': this.changeNull(selectData.judControlDays),
        'judControlYear': this.changeNull(selectData.judControlYear),
        'lastName': this.changeNull(selectData.lastName),
        'officeId': this.changeNull(selectData.officeId),
        'officeName': this.changeNull(selectData.officeName),
        'otherCorn': this.changeNull(selectData.otherCorn),
        'registerId': this.changeNull(selectData.registerId),
        'registerNumber': this.changeNull(selectData.registerNumber),
        'risk': this.changeNull(selectData.risk),
        'startDate': this.formatDate(selectData.startDate), //วันที่เริ่มกิจกรรม
        'type': this.changeNull(selectData.type),
        'corn0': this.changeCorn(selectData.corn0),
        'corn1': this.changeCorn(selectData.corn1),
        'corn2': this.changeCorn(selectData.corn2),
        'corn3': this.changeCorn(selectData.corn3),
        'corn4': this.changeCorn(selectData.corn4),
        'corn5': this.changeCorn(selectData.corn5),
        'corn6': this.changeCorn(selectData.corn6),
        'corn7': this.changeCorn(selectData.corn7),
        'corn8': this.changeCorn(selectData.corn8),
        'corn9': this.changeCorn(selectData.corn9),
        'corn10': this.changeCorn(selectData.corn10),
        'corn11': this.changeCorn(selectData.corn11),
        'cornNo': this.changeCorn(selectData.cornNo),
        'person': {
          'citizenCardNumber': this.changeNull(selectData.idCardNo),
          'fullName': this.changeNull(selectData.firstName) + ' ' +  this.changeNull(selectData.lastName),
          'sex': '',
          'dateOfBirth': this.formatDate(selectData.birthdate),
        },
        'wartermarks': this.loadReportDetail(),
        'reportName' : this.reportName,
        'reportOfDate': this.reportOfDate,
        'reportOfTime': this.reportOfTime
      };
    }

    getData(): any {
        return this.dopprobationerNarcotics;
    }

    /**
     * Getter $dataSet
     * @return {IDxc_Model_Dop_Probationer_Narcotics}
     */
    public get $dataSet(): IDxc_Model_Dop_Probationer_Narcotics {
        return this.dataSet;
    }

    /**
     * Setter $dataSet
     * @param {IDxc_Model_Dop_Probationer_Narcotics} value
     */
    public set $dataSet(value: IDxc_Model_Dop_Probationer_Narcotics) {
        this.dataSet = value;
    }

    formatDate(birthDate: string): string {

      const date = new Date(birthDate);
      const day = date.getDate();
      const month = date.getMonth();
      const year = date.getFullYear() + 543;
      if (birthDate === 'null') {
        return '-';
      } else if (birthDate == null) {
        return '-';
      } else {
        const thmonth = new Array('มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน',
          'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม');
        return `${day} ${thmonth[month]} ${year}`;
      }
    }
    changeSex(sex: string) {
        if (sex === '1') {
            return 'ชาย';
        } else if (sex === '2') {
            return 'หญิง';
        }else if (sex === 'MALE') {
          return 'ชาย';
        } else if (sex === 'FEMALE') {
        return 'หญิง';
        }else if (sex === 'OTHER') {
            return 'อื่นๆ';
        } else if (sex === 'null') {
            return '-';
        }
    }
    changeNull(selectData: string) {
      if (selectData == null) {
        return '-';
      } else if (selectData == 'Invalid date') {
        return '-';
      } else {
        return selectData;
      }
    }

    changeCorn(corn: number) {
      console.log(corn)
      if (corn == null) {
        return '-';
      } else if (corn == 0) {
        return '';
      } else if (corn == 1) {
        return 'checked';
      } else {
        return corn;
      }
    }
    changeStatus(probationStatus: any) {
      if (probationStatus == '0') {
        return 'อยู่ระหว่างดำเนินการ';
      }
      else if (probationStatus == '1') {
        return 'เสร็จสิ้นการดำเนินการ';
      }else if (probationStatus == 'OTHER') {
        return 'อื่นๆ';
      } else if (probationStatus == 'null') {
        return '-';
      }else {
        return probationStatus;
      }
    }

    loadReportDetail() {
        if (localStorage.getItem('reportName') !== null) {
          const reportName = localStorage.getItem('reportName');
          this.reportName = localStorage.getItem('reportName');
          const reportOfDate = moment(new Date().toString()).format('L').toString();
          this.reportOfDate = moment(new Date().toString()).format('L').toString();
          const reportOfTime = moment(new Date().toString()).format('LTS').toString();
          this.reportOfTime = moment(new Date().toString()).format('LTS').toString();
          const reportBarcode = 'QP4015-12345678';
          const wartermarks = `<div class="watermark">
          ผู้พิมพ์รายงาน ${reportName} ${this.reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
          ผู้พิมพ์รายงาน ${reportName} ${this.reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
          </div>
          <div class="watermark2">
            ผู้พิมพ์รายงาน ${reportName} ${this.reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
            ผู้พิมพ์รายงาน ${reportName} ${this.reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
          </div>
          <div class="watermark3">
            ผู้พิมพ์รายงาน ${reportName} ${this.reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
            ผู้พิมพ์รายงาน ${reportName} ${this.reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
          </div>
          <div class="watermark4">
            ผู้พิมพ์รายงาน ${reportName} ${this.reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
            ผู้พิมพ์รายงาน ${reportName} ${this.reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
          </div>
          <div class="watermark5">
            ผู้พิมพ์รายงาน ${reportName} ${this.reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
            ผู้พิมพ์รายงาน ${reportName} ${this.reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
          </div>
          <div class="watermark6">
            ผู้พิมพ์รายงาน ${reportName} ${this.reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
            ผู้พิมพ์รายงาน ${reportName} ${this.reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
          </div>
          <div class="watermark7">
            ผู้พิมพ์รายงาน ${reportName} ${this.reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
            ผู้พิมพ์รายงาน ${reportName} ${this.reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
          </div>
          <div class="watermark8">
            ผู้พิมพ์รายงาน ${reportName} ${this.reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
            ผู้พิมพ์รายงาน ${reportName} ${this.reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
          </div>
          <div class="watermark9">
            ผู้พิมพ์รายงาน ${reportName} ${this.reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
            ผู้พิมพ์รายงาน ${reportName} ${this.reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
          </div>
          <div class="watermark10">
            ผู้พิมพ์รายงาน ${reportName} ${this.reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
            ผู้พิมพ์รายงาน ${reportName} ${this.reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
          </div>
          <div class="watermark11">
            ผู้พิมพ์รายงาน ${reportName} ${this.reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
            ผู้พิมพ์รายงาน ${reportName} ${this.reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
          </div>`;
          return wartermarks;
        }else{
          const reportName = 'เกิดข้อผิดพลาด';
          const reportOfDate = moment(new Date().toString()).format('L').toString();
          const reportOfTime = moment(new Date().toString()).format('LTS').toString();
          const reportBarcode = 'QP4015-12345678';
          const wartermarks = `<div class="watermark">
          ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
          ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
          </div>
          <div class="watermark2">
            ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
            ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
          </div>
          <div class="watermark3">
            ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
            ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
          </div>
          <div class="watermark4">
            ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
            ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
          </div>
          <div class="watermark5">
            ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
            ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
          </div>
          <div class="watermark6">
            ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
            ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
          </div>
          <div class="watermark7">
            ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
            ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
          </div>
          <div class="watermark8">
            ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
            ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
          </div>
          <div class="watermark9">
            ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
            ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
          </div>
          <div class="watermark10">
            ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
            ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
          </div>
          <div class="watermark11">
            ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
            ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
          </div>`;
          return wartermarks;
        }
    }
}

import * as moment from 'moment';


export interface Status {
  code: string;
  description: string;
}

// export interface Data {
//   organizationJuristicPerson: OrganizationJuristicPerson;
// }

// export interface OrganizationJuristicPerson {
//   organizationJuristicID: string;
//   organizationOldJuristicID: string;
//   organizationJuristicNameTH: string;
//   organizationJuristicNameEN: string;
//   organizationJuristicType: string;
//   organizationJuristicRegisterDate: string;
//   organizationJuristicStatus: string;
//   organizationJuristicObjective: JuristicObjective[];
//   organizationJuristicObjectiveItems: string;
//   organizationJuristicObjectivePages: string;
//   organizationJuristicRegisterCapital: string;
//   organizationJuristicPaidUpCapital: string;
//   organizationJuristicPersonList: JuristicPersonListItem[];
//   organizationJuristicBranchName: string;
//   organizationJuristicAddress: OrganizationJuristicAddress;
//   organizationJuristicPersonDescription: JuristicPersonDescription[];
//   financialSubmitRecord: string;
//   digitalIDFlag: string;
// }

export interface JuristicObjective {
  juristicObjective: string;
  juristicObjectiveCode: string;
  juristicObjectiveTextTH: string;
  juristicObjectiveTextEN: string;
}

export interface JuristicPersonListItem {
  juristicPersonSequence: number;
  juristicPersonType: string;
  juristicPerson: {
    personNameTH: {
      personNameTitleTextTH: string;
      personFirstNameTH: string;
      personMiddleNameTH: string;
      personLastNameTH: string;
    };
  };
  juristicPersonInvestType: string;
  juristicPersonInvestAmount: string;
}

export interface OrganizationJuristicAddress {
  addressType: {
    address: string;
    building: string;
    roomNo: string;
    floor: string;
    addressNo: string;
    moo: string;
    yaek: string;
    soi: string;
    trok: string;
    village: string;
    road: string;
    citySubDivision: {
      citySubDivisionCode: string;
      citySubDivisionTextTH: string;
    };
    city: {
      cityCode: string;
      cityTextTH: string;
    };
    countrySubDivision: {
      countrySubDivisionCode: string;
      countrySubDivisionTextTH: string;
    };
  };
}

export interface JuristicPersonDescription {
  organizationJuristicPersonDescriptionSequence: number;
  organizationJuristicPersonDescriptionType: string;
  organizationJuristicPersonDescriptionDetail: string;
}

export interface Dxc_Model_Dbd_CommercialRegistrant {
    status: Status
    // data: Data
    organizationJuristicID: string;
    organizationOldJuristicID: string;
    organizationJuristicNameTH: string;
    organizationJuristicNameEN: string;
    organizationJuristicType: string;
    organizationJuristicRegisterDate: string;
    organizationJuristicStatus: string;
    organizationJuristicObjective: JuristicObjective[];
    organizationJuristicObjectiveItems: string;
    organizationJuristicObjectivePages: string;
    organizationJuristicRegisterCapital: string;
    organizationJuristicPaidUpCapital: string;
    organizationJuristicPersonList: JuristicPersonListItem[];
    organizationJuristicBranchName: string;
    organizationJuristicAddress: OrganizationJuristicAddress[];
    organizationJuristicPersonDescription: JuristicPersonDescription[];
    financialSubmitRecord: string;
    digitalIDFlag: string;

    reportName: string;
    reportOfDate: string;
    reportOfTime: string;
    reportBarcode: string;
    wartermarks: string;
    body: string[];

}

export class Dxc_Model_Dbd_CommercialRegistrant {
    private dataSet: Dxc_Model_Dbd_CommercialRegistrant;
    dbdcommercialregistrant: any;
    reportName: string;
    reportOfDate: string;
    reportOfTime: string;
    address: any = [] ;
    branchName: string;
    digitalIDFlag: string;
    financialSubmitRecord: string;
    juristicID: string;
    nameEN: string;
    nameTH: string;
    objectiveItems: string;
    objectivePages: string;
    oldJuristicID: string;
    paidUpCapital: string;
    type: string;
    registerDate: string;
    registerCapital: string;
    statusOrg: string;
    objectives: any = [];
    descriptions: any = [];
    personList: any = [];
    constructor(selectData: any) {
      
      console.log('selectData.data', selectData)
      if(selectData) {
      // ถ้าอยากวนลูป objectives
        const address = selectData.organizationJuristicAddress.addressType;
        console.log('address', address)
        this.address.push(
          {
            addressType: {
              address: this.changeNull(address.address),
              building: this.changeNull(address.building),
              roomNo: this.changeNull(address.roomNo),
              floor: this.changeNull(address.floor),
              addressNo: this.changeNull(address.addressNo),
              moo: this.changeNull(address.moo),
              yaek: this.changeNull(address.yaek),
              soi: this.changeNull(address.soi),
              trok: this.changeNull(address.trok),
              village: this.changeNull(address.village),
              road: this.changeNull(address.road),
              citySubDivision: {
                citySubDivisionTextTH: this.changeNull(address.citySubDivision.citySubDivisionTextTH),
              },
              city: {
                cityTextTH: this.changeNull(address.city.cityTextTH),
              },
              countrySubDivision: {
                countrySubDivisionTextTH: this.changeNull(address.countrySubDivision.countrySubDivisionTextTH)
              }
            }
            
          }   
        )
        console.log('this.address',this.address)
        const branchName = selectData.organizationJuristicBranchName
        this.branchName = this.changeNull(branchName);
        const digitalIDFlag = selectData.digitalIDFlag
        this.digitalIDFlag = this.changeDigitalIDFlag(digitalIDFlag);
        const financialSubmitRecord = selectData.financialSubmitRecord
        this.financialSubmitRecord = this.changeNull(financialSubmitRecord);
        const juristicID = selectData.organizationJuristicID
        this.juristicID = this.changeNull(juristicID);
        const nameEN = selectData.organizationJuristicNameEN
        this.nameEN = this.changeNull(nameEN);
        const nameTH = selectData.organizationJuristicNameTH
        this.nameTH = this.changeNull(nameTH);
        const objectiveItems = selectData.organizationJuristicObjectiveItems
        this.objectiveItems = this.changeNull(objectiveItems);
        const objectivePages = selectData.organizationJuristicObjectivePages
        this.objectivePages = this.changeNull(objectivePages);
        const oldJuristicID = selectData.organizationOldJuristicID
        this.oldJuristicID = this.changeNull(oldJuristicID);
        const paidUpCapital = selectData.organizationJuristicPaidUpCapital
        this.paidUpCapital = this.changeNull(paidUpCapital);
        const registerCapital = selectData.organizationJuristicRegisterCapital
        this.registerCapital = this.changeNull(registerCapital);
        const registerDate = selectData.organizationJuristicRegisterDate
        this.registerDate = this.formatDate(registerDate);
        const status = selectData.organizationJuristicStatus
        this.statusOrg = this.changeNull(status);
        const type = selectData.organizationJuristicType
        this.type = this.changeNull(type);

        for (const obj of selectData.organizationJuristicObjective) {
          this.objectives.push(
            {
              juristicObjectiveCode: this.changeNull(obj.juristicObjectiveCode),
              juristicObjective: this.changeNull(obj.juristicObjective),
              juristicObjectiveTextEN: this.changeNull(obj.juristicObjectiveTextEN),
              juristicObjectiveTextTH: this.changeNull(obj.juristicObjectiveTextTH),
            }
          )
          console.log('objective:', this.objectives);
        }
        // หรือวนลูป descriptions
        for (const desc of selectData.organizationJuristicPersonDescription) {
          this.descriptions.push(
            {
              organizationJuristicPersonDescriptionDetail: this.changeNull(desc.organizationJuristicPersonDescriptionDetail),
              organizationJuristicPersonDescriptionSequence: this.changeNull(desc.organizationJuristicPersonDescriptionSequence),
              organizationJuristicPersonDescriptionType: this.changeNull(desc.organizationJuristicPersonDescriptionType),
            }
          )
          console.log('description:', this.descriptions);
        }

        // personList
        for (const person of selectData.organizationJuristicPersonList) {
          if (person.juristicPerson && person.juristicPerson.personNameTH) {
            const nameTH = person.juristicPerson.personNameTH;
            this.personList.push({
              
              juristicPersonInvestAmount: this.changeNull(person.juristicPersonInvestAmount),
              juristicPersonType: this.changeNull(person.juristicPersonType),
              juristicPersonSequence: this.changeNull(person.juristicPersonSequence),
              juristicPersonInvestType: this.changeNull(person.juristicPersonInvestType),
              juristicPerson: {
                personNameTH:{
                  personNameTitleTextTH: this.changeNull(nameTH.personNameTitleTextTH),
                  personFirstNameTH: this.changeNull(nameTH.personFirstNameTH),
                  personMiddleNameTH: this.changeNull(nameTH.personMiddleNameTH),
                  personLastNameTH: this.changeNull(nameTH.personLastNameTH),
                }
              }
             
            });
          }
        }
        
        console.log('personList:', this.personList);
        
      }

        this.dbdcommercialregistrant = {
            'organizationJuristicBranchName':  this.branchName,
            'digitalIDFlag': this.digitalIDFlag,
            'financialSubmitRecord': this.financialSubmitRecord,
            'organizationJuristicID': this.juristicID,
            'organizationJuristicNameEN': this.nameEN,
            'organizationJuristicNameTH': this.nameTH,
            'organizationJuristicObjectiveItems': this.objectiveItems,
            'organizationJuristicObjectivePages': this.objectivePages,
            'organizationOldJuristicID': this.oldJuristicID,
            'organizationJuristicPaidUpCapital': this.paidUpCapital,
            'organizationJuristicRegisterCapital': this.registerCapital,
            'organizationJuristicRegisterDate': this.registerDate,
            'organizationJuristicStatus': this.statusOrg,
            'organizationJuristicType':  this.type,
            'organizationJuristicAddress': this.address,
            'organizationJuristicObjective': this.objectives,
            'organizationJuristicPersonDescription': this.descriptions,
            'organizationJuristicPersonList': this.personList,
            'person': {
                'citizenCardNumber': '',
                'fullName': '',
                'sex': '',
                'dateOfBirth': '',
            },
            'wartermarks': this.loadReportDetail(),
            'reportName': this.reportName,
            'reportOfDate': this.reportOfDate,
            'reportOfTime': this.reportOfTime,
            'reportBarcode': this.reportBarcode
        };
        this.dataSet = this.dbdcommercialregistrant;
    }

    getData(): any {
        return this.dbdcommercialregistrant;
    }

    formatDate(dateOfBirth: string): string {

      if (!/^\d{8}$/.test(dateOfBirth)) {
        return 'รูปแบบวันที่ไม่ถูกต้อง';
      }
    
      const year = parseInt(dateOfBirth.slice(0, 4), 10) + 543;
      const month = parseInt(dateOfBirth.slice(4, 6), 10);
      const day = parseInt(dateOfBirth.slice(6, 8), 10);
    
      const thaiMonths = [
        '', // index 0 ไม่ใช้
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
      ];
    
      return `${day} ${thaiMonths[month]} ${year}`;
    }

    changeSex(sex: string) {
        if (sex == 'MALE') {
            return 'ชาย';
        } else if (sex == 'FEMALE') {
            return 'หญิง';
        } else if (sex == 'OTHER') {
            return 'อื่นๆ';
        } else if (sex == 'null') {
            return '-';
        }
    }

    changeNull(selectData: string) {
        if (selectData == null || selectData == 'null' || selectData == '') {
            return '-';
        } else {
            return selectData;
        }
    }

    changeDigitalIDFlag(selectData: string) {
      if (selectData == '' || selectData == 'null' || selectData == '') {
          return '-';
      } else if (selectData === 'Y') {
        return 'รองรับการให้บริการ Digital ID';
      }  else if (selectData === 'N') {
        return 'ไม่รองรับการให้บริการ Digital ID';
      } else {
          return selectData;
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
              ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
              ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
        </div>
        <div class='watermark2'>
          ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
          ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
        </div>
        <div class='watermark3'>
          ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
          ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
        </div>
        <div class='watermark4'>
          ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
          ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
        </div>
        <div class='watermark5'>
          ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
          ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
        </div>
        <div class='watermark6'>
          ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
          ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
        </div>
        <div class='watermark7'>
          ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
          ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
        </div>
        <div class='watermark8'>
          ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
          ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
        </div>
        <div class='watermark9'>
          ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
          ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
        </div>
        <div class='watermark10'>
          ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
          ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
        </div>
        <div class='watermark11'>
          ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
          ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
        </div>`;
        return wartermarks;
      } else {
        const reportName = 'เกิดข้อผิดพลาด';
        const reportOfDate = moment(new Date().toString()).format('L').toString();
        const reportOfTime = moment(new Date().toString()).format('LTS').toString();
        const reportBarcode = 'QP4015-12345678';
        const wartermarks = `<div class="watermark">
              ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
              ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
        </div>
        <div class='watermark2'>
          ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
          ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
        </div>
        <div class='watermark3'>
          ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
          ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
        </div>
        <div class='watermark4'>
          ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
          ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
        </div>
        <div class='watermark5'>
          ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
          ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
        </div>
        <div class='watermark6'>
          ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
          ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
        </div>
        <div class='watermark7'>
          ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
          ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
        </div>
        <div class='watermark8'>
          ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
          ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
        </div>
        <div class='watermark9'>
          ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
          ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
        </div>
        <div class='watermark10'>
          ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
          ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
        </div>
        <div class='watermark11'>
          ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
          ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
        </div>`;
        return wartermarks;
      }
    }


    /**
     * Getter $dataSet
     * @return {Dxc_Model_Dbd_CommercialRegistrant}
     */
    public get $dataSet(): Dxc_Model_Dbd_CommercialRegistrant {
        return this.dataSet;
    }

    /**
     * Setter $dataSet
     * @param {Dxc_Model_Dbd_CommercialRegistrant} value
     */
    public set $dataSet(value: Dxc_Model_Dbd_CommercialRegistrant) {
        this.dataSet = value;
    }

}

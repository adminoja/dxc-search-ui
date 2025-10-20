import * as moment from 'moment';

export interface IDxc_Model_Rlpd_CrimeDefendantCompensation {
    caseId: string; // รหัสคดี
    dataId: string; // รหัสข้อมูล
    dftCitizenId: string;
    dataSubmitDate: string; // วันที่นำเข้าข้อมูล
    departmentAbbriviation: string; // ชื่อย่อหน่วยงาน
    departmentId: string; // รหัสหน่วยงานเจ้าของเรื่อง
    departmentName: string; // ชื่อหน่วยงานที่รับเรื่อง //ศูนย์เจ้าของเรื่อง
    dftAppealFrom: string; // รับเรื่องอุทธรณ์มาจาก//สถานที่รับอุทธรณ์
    dftAppealOpinion: string; // ความเห็นศาลอุทธรณ์
    dftAppealRecieveDate: string; // วันที่ สชง. รับเรื่องอุทธรณ์
    dftAppealRedDate: string; // วันที่ศาลอุทธรณ์มีคำสั่ง
    dftAppealRedNo: string; // ศาลอุทธรณ์มีคำวินิจฉัยตามหมายเลขคดีแดงที่
    dftAppealRemark: string; // ความเห็นเพิ่มเติมศาลอุทธรณ์
    dftAttorneyBirthday: string; // วันเกิดของผู้ยื่นคำขอแทน
    dftAttorneyDistrictFullText: string; // อำเภอของผู้ยื่นคำขอแทน
    dftAttorneyDistrictId: string; // รหัสอำเภอของผู้ยื่นคำขอแทน
    dftAttorneyFullName: string; // ชื่อ-สกุลของผู้ยื่นคำขอแทน
    dftAttorneyGivenName: string; // ชื่อผู้ยื่นแทน
    dftAttorneyNationalIdentificationId: string; // รหัสประจำตัวประชาชนของผู้ยื่นคำขอแทน
    dftAttorneyPhone: string; // เบอร์โทรศัพท์ของผ้ยื่นคำขอแทน
    dftAttorneyProvinceFullText: string; // จังหวัดของผู้ยื่นคำขอแทน
    dftAttorneyProvinceId: string; // รหัสจังหวัดของผู้ยื่นคำขอแทน
    dftAttorneyRelativeby: string; // ผู้ยื่นคำขอแทนในฐานะ
    dftAttorneyRemark: string; // หมายเหตุ* // ผู้ร้องไม่สามารถยื่นคำร้องได้]
    dftAttorneySubdistrictFullText: string; // ตำบลของผู้ยื่นคำขอแทน
    dftAttorneySubdistrictId: string; // รหัสตำบลของผู้ยื่นคำขอแทน
    dftAttorneySurName: string; // นามสกุลผู้ยื่นแทน
    dftAttorneyTitle: string; // คำนำหน้าผู้ยื่นแทน
    dftAttroneyAddress: string; // ที่อยู่ของผู้ยื่นคำขอแทน
    dftBaseGuilt: string; // เวลาที่เกิดเหตุ
    dftBlackCaseNo: string; // คดีอาญาหมายเลขดำ
    dftCancleDate: string; // วันที่ศาลมีคำสั่งอนุญาติให้ถอนฟ้อง/ จำหน่ายคดี / พิพากษายกฟ้อง
    dftCareer: string; // อาชีพของผู้เสียหาย
    dftCodftAmount: string; // จำเลยร่วม
    dftCodftDescription: string; // รายละเอียดจำเลยร่วม
    dftCommitteeInspectDate: string; // วันที่ออกคำวินิจฉัย
    dftCommitteeInspectNo: string; // เลขที่คำวินิจฉัย
    dftCommitteeOpinion: string; // ความเห็นคณะกรรมการ
    dftCommitteeRemark: string; // ความเห็นเพิ่มเติมคณะกรรมการ
    dftConnectPersonAddress: string; // ที่อยู่ของผู้ที่ติดต่อได้
    dftConnectPersonFullName: string; // ชื่อ-สกุลของผู้ที่ติดต่อได้
    dftConnectPersonGivenName: string; // ชื่อผู้ที่สามารถติดต่อได้
    dftConnectPersonPhone: string; // เบอร์โทรศัพท์ของผู้ที่ติดต่อได้
    dftConnectPersonRelative: string; // เกี่ยวข้องเป็น
    dftConnectPersonSurName: string; // นามสกุลผู้ที่สามารถติดต่อได้
    dftConnectPersonTitle: string; // คำนำหน้าผู้ที่สามารถติดต่อได้
    dftCourt: string; // ชื่อศาล
    dftDamage: string; // ความเสียหายที่เกิดขึ้น
    dftDirectorOpinion: string; // ความเห็นผู้อำนวยการ
    dftDirectorRemark: string; // ความเห็นเพิ่มเติมผู้อำนวยการ
    dftEndCourt: string; // ศาลที่คดีถึงที่สุด
    dftEverUseDate: string; // วันที่เคยยื่นคำขอรับค่าทดแทน
    dftIncome: string; // รายได้
    dftIncomePer: string; // ต่อ วัน/เดือน/ปี
    dftIsCareer: string; // สถานะการประกอบอาชีพ
    dftLawOpinion: string; // ผลการลงความเห็นของนิติกร
    dftLawSummary1: string; // คำกล่าวอ้างของโจทย์
    dftLawSummary2: string; // คำต่อสู้ของจำเลย
    dftLawSummary3: string; // ข้อมูลของจำเลย
    dftLawSummary4: string; // สรุปความเห็นของนิติกร
    dftLawSummary5: string; // คำวินิจฉัยของศาล
    dftNo: string; // เป็นจำเลยที่
    dftRedCaseNo: string; // คดีอาญาหมายเลขแดง
    dftSubcommitteeOpinion: string; // ผลการลงความเห็นของ คณะอนุกรรมการ
    dftSubcommitteeRemark: string; // ความเห็นคณะอนุกรรมการ
    dftUnCareer: string; // กรณีไม่ได้ประกอบอาชีพอื่นๆ
    dftUnCareerType: string; // กรณีไม่ได้ประกอบอาชีพ
    dftWorkPlace: string; // สถานที่ทำงาน
    dftWorkplaceProvinceFullText: string; // จังหวัดที่ทำงาน
    dftWorkplaceProvinceId: string; // รหัสจังหวัดที่ทำงาน
    masGuiltId: string; // รหัสฐานความผิด
    masGuiltName: string; // ชื่อฐานความผิด
    oldCaseId: string; // รหัส CASE_ID ของระบบเก่า
    partyIndex: string; // รหัส Party index
    dftAppealOpinionDesc: string; // ความเห็นศาลอุทธรณ์

    reportName: string;
    reportOfDate: string;
    reportOfTime: string;
    reportBarcode: string;
    wartermarks: string;
}

export class Dxc_Model_Rlpd_CrimeDefendantCompensation {
    crimedefendantcompensation: any;
    reportName: string;
    reportOfDate: string;
    reportOfTime: string;
    reportBarcode: string;
    wartermarks: string;
    private dataSet: IDxc_Model_Rlpd_CrimeDefendantCompensation;
    constructor(selectData: any) {
        this.crimedefendantcompensation = {
            'dftCitizenId': this.changeNull(selectData.dftCitizenId),
            'caseId': this.changeNull(selectData.caseId),
            'dataId': this.changeNull(selectData.dataId),
            'dataSubmitDate': this.changeNull(selectData.dataSubmitDate),
            'departmentAbbriviation': this.changeNull(selectData.departmentAbbriviation),
            'departmentId': this.changeNull(selectData.departmentId),
            'departmentName': this.changeNull(selectData.departmentName),
            'dftAppealFrom': this.changeNull(selectData.dftAppealFrom),
            'dftAppealOpinion': this.changeNull(selectData.dftAppealOpinion),
            'dftAppealRecieveDate': this.changeNull(selectData.dftAppealRecieveDate),
            'dftAppealRedDate': this.changeNull(selectData.dftAppealRedDate),
            'dftAppealRedNo': this.changeNull(selectData.dftAppealRedNo),
            'dftAppealRemark': this.changeNull(selectData.dftAppealRemark),
            'dftAttorneyBirthday': this.changeNull(selectData.dftAttorneyBirthday),
            'dftAttorneyDistrictFullText': this.changeNull(selectData.dftAttorneyDistrictFullText),
            'dftAttorneyDistrictId': this.changeNull(selectData.dftAttorneyDistrictId),
            'dftAttorneyFullName': this.changeNull(selectData.dftAttorneyFullName),
            'dftAttorneyGivenName': this.changeNull(selectData.dftAttorneyGivenName),
            'dftAttorneyNationalIdentificationId': this.changeNull(selectData.dftAttorneyNationalIdentificationId),
            'dftAttorneyPhone': this.changeNull(selectData.dftAttorneyPhone),
            'dftAttorneyProvinceFullText': this.changeNull(selectData.dftAttorneyProvinceFullText),
            'dftAttorneyProvinceId': this.changeNull(selectData.dftAttorneyProvinceId),
            'dftAttorneyRelativeby': this.changeNull(selectData.dftAttorneyRelativeby),
            'dftAttorneyRemark': this.changeNull(selectData.dftAttorneyRemark),
            'dftAttorneySubdistrictFullText': this.changeNull(selectData.dftAttorneySubdistrictFullText),
            'dftAttorneySubdistrictId': this.changeNull(selectData.dftAttorneySubdistrictId),
            'dftAttorneySurName': this.changeNull(selectData.dftAttorneySurName),
            'dftAttorneyTitle': this.changeNull(selectData.dftAttorneyTitle),
            'dftAttroneyAddress': this.changeNull(selectData.dftAttroneyAddress),
            'dftBaseGuilt': this.changeNull(selectData.dftBaseGuilt),
            'dftBlackCaseNo': this.changeNull(selectData.dftBlackCaseNo),
            'dftCancleDate': this.changeNull(selectData.dftCancleDate),
            'dftCareer': this.changeNull(selectData.dftCareer),
            'dftCodftAmount': this.changeNull(selectData.dftCodftAmount),
            'dftCodftDescription': this.changeNull(selectData.dftCodftDescription),
            'dftCommitteeInspectDate': this.changeNull(selectData.dftCommitteeInspectDate),
            'dftCommitteeInspectNo': this.changeNull(selectData.dftCommitteeInspectNo),
            'dftCommitteeOpinion': this.changeNull(selectData.dftCommitteeOpinion),
            'dftCommitteeRemark': this.changeNull(selectData.dftCommitteeRemark),
            'dftConnectPersonAddress': this.changeNull(selectData.dftConnectPersonAddress),
            'dftConnectPersonFullName': this.changeNull(selectData.dftConnectPersonFullName),
            'dftConnectPersonGivenName': this.changeNull(selectData.dftConnectPersonGivenName),
            'dftConnectPersonPhone': this.changeNull(selectData.dftConnectPersonPhone),
            'dftConnectPersonRelative': this.changeNull(selectData.dftConnectPersonRelative),
            'dftConnectPersonSurName': this.changeNull(selectData.dftConnectPersonSurName),
            'dftConnectPersonTitle': this.changeNull(selectData.dftConnectPersonTitle),
            'dftCourt': this.changeNull(selectData.dftCourt),
            'dftDamage': this.changeNull(selectData.dftDamage),
            'dftDirectorOpinion': this.changeNull(selectData.dftDirectorOpinion),
            'dftDirectorRemark': this.changeNull(selectData.dftDirectorRemark),
            'dftEndCourt': this.changeNull(selectData.dftEndCourt),
            'dftEverUseDate': this.changeNull(selectData.dftEverUseDate),
            'dftIncome': this.changeNull(selectData.dftIncome),
            'dftIncomePer': this.changeNull(selectData.dftIncomePer),
            'dftIsCareer': this.changeNull(selectData.dftIsCareer),
            'dftLawOpinion': this.changeNull(selectData.dftLawOpinion),
            'dftLawSummary1': this.changeNull(selectData.dftLawSummary1),
            'dftLawSummary2': this.changeNull(selectData.dftLawSummary2),
            'dftLawSummary3': this.changeNull(selectData.dftLawSummary3),
            'dftLawSummary4': this.changeNull(selectData.dftLawSummary4),
            'dftLawSummary5': this.changeNull(selectData.dftLawSummary5),
            'dftNo': this.changeNull(selectData.dftNo),
            'dftRedCaseNo': this.changeNull(selectData.id),
            'dftSubcommitteeOpinion': this.changeNull(selectData.dftSubcommitteeOpinion),
            'dftSubcommitteeRemark': this.changeNull(selectData.dftSubcommitteeRemark),
            'dftUnCareer': this.changeNull(selectData.dftUnCareer),
            'dftUnCareerType': this.changeNull(selectData.dftUnCareerType),
            'dftWorkPlace': this.changeNull(selectData.dftWorkPlace),
            'dftWorkplaceProvinceFullText': this.changeNull(selectData.dftWorkplaceProvinceFullText),
            'dftWorkplaceProvinceId': this.changeNull(selectData.dftWorkplaceProvinceId),
            'masGuiltId': this.changeNull(selectData.masGuiltId),
            'masGuiltName': this.changeNull(selectData.masGuiltName),
            'oldCaseId': this.changeNull(selectData.oldCaseId),
            'partyIndex': this.changeNull(selectData.partyIndex),
            'dftAppealOpinionDesc': this.changeNull(selectData.dftAppealOpinionDesc),

            'wartermarks': this.loadReportDetail(),
            'reportName': this.reportName,
            'reportOfDate': this.reportOfDate,
            'reportOfTime': this.reportOfTime,
            'person': {
                'citizenCardNumber': this.changeNull(selectData.dftCitizenId),
                'fullName': this.changeNull(selectData.dftAttorneyFullName),
                'sex': '',
                'dateOfBirth': this.changeNull(selectData.dftAttorneyBirthday)
            }
        };
        this.dataSet = this.crimedefendantcompensation;
    }

    getData(): any {
        return this.crimedefendantcompensation;
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
        if (selectData == null) {
          return '-';
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
   * @return {IDxc_Model_Rlpd_CrimeDefendantCompensation}
   */
  public get $dataSet(): IDxc_Model_Rlpd_CrimeDefendantCompensation {
    return this.dataSet;
  }

  /**
   * Setter $dataSet
   * @param {IDxc_Model_Rlpd_CrimeDefendantCompensation} value
   */
  public set $dataSet(value: IDxc_Model_Rlpd_CrimeDefendantCompensation) {
    this.dataSet = value;
  }
}

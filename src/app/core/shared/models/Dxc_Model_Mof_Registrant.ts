import * as moment from 'moment';
export interface IPerson {
  citizenCardNumber: string;
  fullName: string;
  sex: string;
  dateOfBirth: Date;
}
export interface IDxc_Model_Mof_Registrant {
    dataId: number;
    // ApiModelProperty(value = "ที่อยู่ปัจจุบัน")
    addrCode: string;
    // ApiModelProperty(value = "อาเภอ/เขต")
    addrDist: string;
    // ApiModelProperty(value = "ชั้นที่")
    addrFloor: string;
    // ApiModelProperty(value = "หมู่ที่")
    addrMoo: string;
    // ApiModelProperty(value = "เลขที่")
    addrNo: string;
    // ApiModelProperty(value = "รหัสไปรษณีย์")
    addrPost: string;
    // ApiModelProperty(value = "จังหวัด")
    // Column(name="addr_prov")
    addrProv: string;
    // ApiModelProperty(value = "ถนน")
    addrRoad: string;
    // ApiModelProperty(value = "ตรอก/ซอย")
    addrSoi: string;
    // ApiModelProperty(value = "ตาบล/แขวง")
    addrSubDist: string;
    // ApiModelProperty(value = "แยก")
    addrSubSoi: string;
    // ApiModelProperty(value = "หมู่บ้าน/อาคาร")
    addrVillage: string;
    // ApiModelProperty(value = "ที่อยู่ตามหน้าบัตร")
    addressCard: string;
    // ApiModelProperty(value = "อายุ (MOI)")
    ageMoi: number;
    // ApiModelProperty(value = "ประเภทของพืช (กรณีเลือก Field74=07)")
    agriCode: string;
    // ApiModelProperty(value = "ปลูกพืชอื่นๆ (กรณีเลือก field76=6)")
    agriOther: string;
    // ApiModelProperty(value = "เป็นผู้ลงทะเบียนกับกรมส่งเสริมการเกษตร ระบุรหัสทะเบียนเกษตรกร")
    agriRegisId: string;
    // ApiModelProperty(value = "ไม่ได้ลงทะเบียน แต่มีรายชื่อเป็นสมาชิกอยู่ในทะเบียนเกษตรกร ระบุรหัสทะเบียนเกษตรกร")
    agriUnregisId: string;
    // ApiModelProperty(value = "ไม่ได้ลงทะเบียน แต่เป็นเกษตรกรรายย่อย ระบุพืชที่ปลูก")
    agriUnregisPlant: string;
    // ApiModelProperty(value = "ที่ดินทากินกรณีทาการเกษตร (ทานา ทาสาน)")
    assetCode: string;
    // ApiModelProperty(value = "ที่ดินทากิน กรณีไม่ได้ทาประโยชน์/รกร้างว่างเปล่า")
    assetNonCode: string;
    // ApiModelProperty(value = "ที่ดินทากิน กรณีทาประโยชน์อื่นๆ (ทาการค้า โกดัง ยุ้งฉาง)")
    assetOtherCode: string;
    // ApiModelProperty(value = "เลขที่บัญชี")
    bankAccount: string;
    // ApiModelProperty(value = "ชื่อธนาคาร")
    bankCode: string;
    // ApiModelProperty(value = "เงินฝากธนาคาร/สลากออมสิน/สลาก ธกส.")
    bankDepositAmount: number;
    // ApiModelProperty(value = "จำนวนรถจักรยานยนต์")
    bikeNumber: number;
    // ApiModelProperty(value = "สถานภาพร่างกาย")
    bodyCode: string;
    // ApiModelProperty(value = "พันธบัตร/ตราสารหนี้")
    bondAmount: number;
    // ApiModelProperty(value = "จำนวนรถยนต์")
    carNumber: number;
    // ApiModelProperty(value = "จำนวนบุตร (กรณีเลือก field51= 2)")
    childNo: number;
    // ApiModelProperty(value = "อายุบุตรคนที่ 1 (กรณีเลือก field51=2)")
    child1Age: string;
    // ApiModelProperty(value = "เลข ปชช. บุตรคนที่ 1 (กรณีเลือก field51=2)")
    child1CitizenCardNumber: string;
    // ApiModelProperty(value = "อายุบุตรคนที่ 2 (กรณีเลือก field51=2)")
    // Column(name="child2_age")
    child2Age: string;
    // ApiModelProperty(value = "เลข ปชช. บุตรคนที่ 2 (กรณีเลือก field51=2)")
    child2CitizenCardNumber: string;
    // ApiModelProperty(value = "อายุบุตรคนที่ 3 (กรณีเลือก field51=2)")
    child3Age: string;
    // ApiModelProperty(value = "เลข ปชช. บุตรคนที่ 3 (กรณีเลือก field51=2)")
    child3CitizenCardNumber: string;
    // ApiModelProperty(value = "อายุบุตรคนที่ 4 (กรณีเลือก field51=2)")
    child4Age: string;
    // ApiModelProperty(value = "เลข ปชช. บุตรคนที่ 4 (กรณีเลือก field51=2)")
    child4CitizenCardNumber: string;
    // ApiModelProperty(value = "อายุบุตรคนที่ 3 (กรณีเลือก field51=2)")
    child5Age: string;
    // ApiModelProperty(value = "เลข ปชช. บุตรคนที่ 5 (กรณีเลือก field51=2)")
    child5CitizenCardNumber: string;
    // ApiModelProperty(value = "อายุบุตรคนที่ 6 (กรณีเลือก field51=2)")
    child6Age: string;
    // ApiModelProperty(value = "เลข ปชช. บุตรคนที่ 6 (กรณีเลือก field51=2)")
    child6CitizenCardNumber: string;
    // ApiModelProperty(value = "เลขประจาตัวประชาชน")
    citizenCardNumber: string;
    // ApiModelProperty(value = "สถานะของผู้อนุบาล(ผู้ดูแลตามกฎหมาย/ศาลสั่ง สามารถทาธุรกรรมทางกฎหมายแทนผู้พิการได้)")
    curatorCode: string;
    // ApiModelProperty(value = "วันเดือนปีเกิด")
    dateOfBirth: string;
    // ApiModelProperty(value = "หนี้เพื่อการเกษตร")
    debtAgriAmount: number;
    // ApiModelProperty(value = "หนี้เพื่อประกอบธุรกิจ")
    debtBusinessAmount: number;
    // ApiModelProperty(value = "หนี้เพื่ออุปโภค/บริโภค")
    debtConsumptionAmount: number;
    // ApiModelProperty(value = "หนี้เพื่อการศึกษา")
    debtEduAmount: number;
    // ApiModelProperty(value = "หนี้เพื่อซื้อบ้าน/ที่ดิน")
    debtHouseAmount: number;
    // ApiModelProperty(value = "หนี้เพื่อซื้อรถยนต์/จักรยานยนต์")
    debtVehicleAmount: number;
    // ApiModelProperty(value = "หนี้บัตรเครดิต")
    deptCreditAmount: number;
    // ApiModelProperty(value = "บัตรผู้พิการ (กรณีเลือก Field17=2)")
    disabledCode: string;
    // ApiModelProperty(value = "เป็นผู้ลงทะเบียนกับกรมปศุสัตว์ ระบุเลขทะเบียน")
    dldId: string;
    // ApiModelProperty(value = "วุฒิการศึกษาสูงสุด")
    eduCode: string;
    // ApiModelProperty(value = "ระดับที่กาลังศึกษา (กรณีเลือก Field70=2)")
    eduLevel: string;
    // ApiModelProperty(value = "เลข ปชช. ผู้อุปการะการศึกษา (กรณีเลือก Field70=2)")
    eduSponsorCitizenCardNumber: string;
    // ApiModelProperty(value = "รายได้เฉลี่ยของผู้อุปการะต่อปี (กรณีเลือก Field70=2)")
    eduSponsorIncome: string;
    // ApiModelProperty(value = "อีเมล์")
    email: string;
    // ApiModelProperty(value = "ผู้บันทึกข้อมูล")
    entryName: string;
    // ApiModelProperty(value = "ประเภทการลงทะเบียน")
    entryTry: string;
    // ApiModelProperty(value = "สถานภาพในครอบครัว")
    familyCode: string;
    // ApiModelProperty(value = "จำนวนสมาชกิ ในครอบครัว (กรณีเลือก Field49=2)")
    familyMember: number;
    // ApiModelProperty(value = "ชื่อ")
    firstName: string;
    // ApiModelProperty(value = "เป็นผู้ลงทะเบียนกับกรมประมง ระบุเลขทะเบียน(กรณีเลือก field74=09")
    fisheryId: string;
    // ApiModelProperty(value = "การค้าประกันเงินกู้นอกระบบ")
    guaranteeCode: string;
    // ApiModelProperty(value = "เลขรหัสประจาบ้าน (MOI)")
    hidMoi: string;
    // ApiModelProperty(value = "อำเภอ/เขต")
    houseAddrDist: string;
    // ApiModelProperty(value = "ชั้นที่")
    houseAddrFloor: string;
    // ApiModelProperty(value = "หมู่ที่")
    houseAddrMoo: string;
    // ApiModelProperty(value = "รหัสไปรษณีย์")
    houseAddrPost: string;
    // ApiModelProperty(value = "จังหวัด")
    houseAddrProv: string;
    // ApiModelProperty(value = "ถนน")
    houseAddrRoad: string;
    // ApiModelProperty(value = "ตรอก/ซอย")
    houseAddrSoi: string;
    // ApiModelProperty(value = "ตาบล/แขวง")
    houseAddrSubDist: string;
    // ApiModelProperty(value = "แยก")
    houseAddrSubSoi: string;
    // ApiModelProperty(value = "หมู่บ้าน/อาคาร")
    houseAddrVillage: string;
    // ApiModelProperty(value = "เลขรหัสประจาบ้าน")
    houseCode: string;
    // ApiModelProperty(value = "เลขที่")
    houseNo: string;
    // ApiModelProperty(value = "ค่าเช่าบ้าน/ที่อยู่อาศัย (กรณีเลือก field67=3)")
    housingRent: number;
    // ApiModelProperty(value = "สถานะของผู้ดูแล ")
    keeperCode: string;
    // ApiModelProperty(value = "ขนาดที่ดินรวม(กรณีไม่สามารถแยกได้)")
    landAssetCode: string;
    // ApiModelProperty(value = "ที่ดินเพื่ออยู่อาศัยกรณีบ้านเดี่ยว/ทาวน์เฮ้าส์/ทาวน์โฮม")
    landCode: string;
    // ApiModelProperty(value = "ที่ดินเพื่ออยู่อาศัย\r\n" + "กรณีห้องชุด")
    landRoomCode: string;
    // ApiModelProperty(value = "นามสกุล")
    lastName: string;
    // ApiModelProperty(value = "วันเวลาที่ปรับปรุงข้อมูลล่าสุด")
    lastupdate: Date;
    // ApiModelProperty(value = "สถานภาพการอยู่อาศัย")
    liveCode: string;
    // ApiModelProperty(value = "เลข ปชช. มารดา (กรณีเลือก field51= 2)")
    motherCitizenCardNumber: string;
    // ApiModelProperty(value = "ชื่อผู้ลงทะเบียน (MOI)")
    nameCardMoi: string;
    // ApiModelProperty(value = "เงินกู้นอกระบบ")
    neesinAmount: number;
    // ApiModelProperty(value = "ประกอบอาชีพ (กรณีเลือก Field70=3 หรือ 4)")
    occupationCode: string;
    // ApiModelProperty(value = "รหัสหน่วยงานย่อย/สาขา")
    officeBrEntry: string;
    // ApiModelProperty(value = "รหัสหน่วยงานหลักที่บันทึกข้อมูล")
    officeEntry: string;
    // ApiModelProperty(value = "รหัสจังหวัดของหน่วยรับลงทะเบียน")
    officeProv: string;
    // ApiModelProperty(value = "โทรศัพท์บ้าน")
    phoneHome: string;
    // ApiModelProperty(value = "โทรศัพท์มือถือ")
    phoneMobile: string;
    // ApiModelProperty(value = "โทรศัพท์ที่ทางาน")
    phoneOffice: string;
    // ApiModelProperty(value = "คำนำหน้าชื่อ")
    prefixName: string;
    // ApiModelProperty(value = "วันที่ลงทะเบียน")
    registerDate: string;
    // ApiModelProperty(value = "เพศ (MOI)")
    sexCardMoi: string;
    // ApiModelProperty(value = "สภาพความเป็นอยู่")
    statusCode: string;
    // ApiModelProperty(value = "เงินได้ทั้งสิ้นในปี 2559")
    totalIncome59: string;
    // ApiModelProperty(value = "อาชีพ/การทำงาน")
    workCode: string;
    // ApiModelProperty(value = "อาชีพอื่นๆ (กรณีเลือก Field74=12)")
    workOther: string;
    person: IPerson;
    reportName: string; // ผู้ขอรายงาน
    reportOfDate: string; // วันที่พิมรายงาน
    reportOfTime: string; // เวลาที่พิมรายงาน
    reportBarcode: string; // เลขที่เอกสาร(เลขบาร์โค๊ด)
    wartermarks: string;
    body: any;
    status: any;
}
export class Dxc_Model_Mof_Registrant {
    private dataSet: IDxc_Model_Mof_Registrant;
    docMofRegistrant: any;
    reportName: string;
    reportOfDate: string;
    reportOfTime: string;
    constructor(selectData: any) {
        this.docMofRegistrant = {
          'dataId':  this.changeNull(selectData.dataId),
          'addrCode':  this.changeNull(selectData.addrCode),
          'addrDist':  this.changeNull(selectData.addrDist),
          'addrFloor':  this.changeNull(selectData.addrFloor),
          'addrMoo':  this.changeNull(selectData.addrMoo),
          'addrNo':  this.changeNull(selectData.addrNo),
          'addrPost':  this.changeNull(selectData.addrPost),
          'addrProv':  this.changeNull(selectData.addrProv),
          'addrRoad':  this.changeNull(selectData.addrRoad),
          'addrSoi':  this.changeNull(selectData.addrSoi),
          'addrSubDist':  this.changeNull(selectData.addrSubDist),
          'addrSubSoi':  this.changeNull(selectData.addrSubSoi),
          'addrVillage':  this.changeNull(selectData.addrVillage),
          'addressCard': this.changeNull(selectData.addressCard),
          'ageMoi': this.changeNull(selectData.ageMoi),
          'agriCode': this.changeNull(selectData.agriCode),
          'agriOther': this.changeNull(selectData.agriOther),
          'agriRegisId': this.changeNull(selectData.agriRegisId),
          'agriUnregisId': this.changeNull(selectData.agriUnregisId),
          'agriUnregisPlant': this.changeNull(selectData.agriUnregisPlant),
          'assetCode': this.changeNull(selectData.assetCode),
          'assetNonCode': this.changeNull(selectData.assetNonCode),
          'assetOtherCode': this.changeNull(selectData.assetOtherCode),
          'bankAccount': this.changeNull(selectData.bankAccount),
          'bankCode': this.changeNull(selectData.bankCode),
          'bankDepositAmount': this.changeNull(selectData.bankDepositAmount),
          'bikeNumber': this.changeNull(selectData.bikeNumber),
          'bodyCode': this.changeNull(selectData.bodyCode),
          'bondAmount': this.changeNull(selectData.bondAmount),
          'carNumber': this.changeNull(selectData.carNumber),
          'childNo': this.changeNull(selectData.childNo),
          'child1Age': this.changeNull(selectData.child1Age),
          'child1CitizenCardNumber': this.changeNull(selectData.child1CitizenCardNumber),
          'child2Age': this.changeNull(selectData.child2Age),
          'child2CitizenCardNumber': this.changeNull(selectData.child2CitizenCardNumber),
          'child3Age': this.changeNull(selectData.child3Age),
          'child3CitizenCardNumber': this.changeNull(selectData.child3CitizenCardNumber),
          'child4Age': this.changeNull(selectData.child4Age),
          'child4CitizenCardNumber': this.changeNull(selectData.child4CitizenCardNumber),
          'child5Age': this.changeNull(selectData.child5Age),
          'child5CitizenCardNumber': this.changeNull(selectData.child5CitizenCardNumber),
          'child6Age': this.changeNull(selectData.child6Age),
          'child6CitizenCardNumber': this.changeNull(selectData.child6CitizenCardNumber),
          'citizenCardNumber': this.changeNull(selectData.citizenCardNumber),
          'curatorCode': this.changeNull(selectData.curatorCode),
          'dateOfBirth': selectData.dateOfBirth,
          'debtAgriAmount': this.changeNull(selectData.debtAgriAmount),
          'debtBusinessAmount': this.changeNull(selectData.debtBusinessAmount),
          'debtConsumptionAmount': this.changeNull(selectData.debtConsumptionAmount),
          'debtEduAmount': this.changeNull(selectData.debtEduAmount),
          'debtHouseAmount': this.changeNull(selectData.debtHouseAmount),
          'debtVehicleAmount': this.changeNull(selectData.debtVehicleAmount),
          'deptCreditAmount': this.changeNull(selectData.deptCreditAmount),
          'disabledCode': this.changeNull(selectData.disabledCode),
          'dldId': this.changeNull(selectData.dldId),
          'eduCode': this.changeNull(selectData.eduCode),
          'eduLevel': this.changeNull(selectData.eduLevel),
          'eduSponsorCitizenCardNumber': this.changeNull(selectData.eduSponsorCitizenCardNumber),
          'eduSponsorIncome': this.changeNull(selectData.eduSponsorIncome),
          'email': this.changeNull(selectData.email),
          'entryName': this.changeNull(selectData.entryName),
          'entryTry': this.changeNull(selectData.entryTry),
          'familyCode': this.changeNull(selectData.familyCode),
          'familyMember': this.changeNull(selectData.familyMember),
          'firstName': this.changeNull(selectData.firstName),
          'fisheryId': this.changeNull(selectData.fisheryId),
          'guaranteeCode': this.changeNull(selectData.guaranteeCode),
          'hidMoi': this.changeNull(selectData.hidMoi),
          'houseAddrDist': this.changeNull(selectData.houseAddrDist),
          'houseAddrFloor': this.changeNull(selectData.houseAddrFloor),
          'houseAddrMoo': this.changeNull(selectData.houseAddrMoo),
          'houseAddrPost': this.changeNull(selectData.houseAddrPost),
          'houseAddrProv': this.changeNull(selectData.houseAddrProv),
          'houseAddrRoad': this.changeNull(selectData.houseAddrRoad),
          'houseAddrSoi': this.changeNull(selectData.houseAddrSoi),
          'houseAddrSubDist': this.changeNull(selectData.houseAddrSubDist),
          'houseAddrSubSoi': this.changeNull(selectData.houseAddrSubSoi),
          'houseAddrVillage': this.changeNull(selectData.houseAddrVillage),
          'houseCode': this.changeNull(selectData.houseCode),
          'houseNo': this.changeNull(selectData.houseNo),
          'housingRent': this.changeNull(selectData.housingRent),
          'keeperCode': this.changeNull(selectData.keeperCode),
          'landAssetCode': this.changeNull(selectData.landAssetCode),
          'landCode': this.changeNull(selectData.landCode),
          'landRoomCode': this.changeNull(selectData.landRoomCode),
          'lastName': this.changeNull(selectData.lastName),
          'lastupdate': this.changeNull(selectData.lastupdate),
          'liveCode': this.changeNull(selectData.liveCode),
          'motherCitizenCardNumber': this.changeNull(selectData.motherCitizenCardNumber),
          'nameCardMoi': this.changeNull(selectData.nameCardMoi),
          'neesinAmount': this.changeNull(selectData.neesinAmount),
          'occupationCode': this.changeNull(selectData.occupationCode),
          'officeBrEntry': this.changeNull(selectData.officeBrEntry),
          'officeEntry': this.changeNull(selectData.officeEntry),
          'officeProv': this.changeNull(selectData.officeProv),
          'phoneHome': this.changeNull(selectData.phoneHome),
          'phoneMobile': this.changeNull(selectData.phoneMobile),
          'phoneOffice': this.changeNull(selectData.phoneOffice),
          'prefixName': this.changeNull(selectData.prefixName),
          'registerDate': this.changeNull(selectData.registerDate),
          'sexCardMoi': this.changeNull(selectData.sexCardMoi),
          'statusCode': this.changeNull(selectData.statusCode),
          'totalIncome59': this.changeNull(selectData.totalIncome59),
          'workCode': this.changeNull(selectData.workCode),
          'workOther': this.changeNull(selectData.workOther),
            'person': {
              'citizenCardNumber': this.changeNull(selectData.citizenCardNumber),
              'fullName': this.changeNull(selectData.firstName) + ' ' + this.changeNull(selectData.lastName),
              'sex': '',
              'dateOfBirth': selectData.dateOfBirth
            },
            'wartermarks': this.loadReportDetail(),
          'reportName' : this.reportName,
          'reportOfDate': this.reportOfDate,
          'reportOfTime': this.reportOfTime
        };
        this.dataSet = this.docMofRegistrant;
    }

    setData(selectData: any) {
      this.docMofRegistrant = {
        'dataId':  this.changeNull(selectData.dataId),
        'addrCode':  this.changeNull(selectData.addrCode),
        'addrDist':  this.changeNull(selectData.addrDist),
        'addrFloor':  this.changeNull(selectData.addrFloor),
        'addrMoo':  this.changeNull(selectData.addrMoo),
        'addrNo':  this.changeNull(selectData.addrNo),
        'addrPost':  this.changeNull(selectData.addrPost),
        'addrProv':  this.changeNull(selectData.addrProv),
        'addrRoad':  this.changeNull(selectData.addrRoad),
        'addrSoi':  this.changeNull(selectData.addrSoi),
        'addrSubDist':  this.changeNull(selectData.addrSubDist),
        'addrSubSoi':  this.changeNull(selectData.addrSubSoi),
        'addrVillage':  this.changeNull(selectData.addrVillage),
        'addressCard': this.changeNull(selectData.addressCard),
        'ageMoi': this.changeNull(selectData.ageMoi),
        'agriCode': this.changeNull(selectData.agriCode),
        'agriOther': this.changeNull(selectData.agriOther),
        'agriRegisId': this.changeNull(selectData.agriRegisId),
        'agriUnregisId': this.changeNull(selectData.agriUnregisId),
        'agriUnregisPlant': this.changeNull(selectData.agriUnregisPlant),
        'assetCode': this.changeNull(selectData.assetCode),
        'assetNonCode': this.changeNull(selectData.assetNonCode),
        'assetOtherCode': this.changeNull(selectData.assetOtherCode),
        'bankAccount': this.changeNull(selectData.bankAccount),
        'bankCode': this.changeNull(selectData.bankCode),
        'bankDepositAmount': this.changeNull(selectData.bankDepositAmount),
        'bikeNumber': this.changeNull(selectData.bikeNumber),
        'bodyCode': this.changeNull(selectData.bodyCode),
        'bondAmount': this.changeNull(selectData.bondAmount),
        'carNumber': this.changeNull(selectData.carNumber),
        'childNo': this.changeNull(selectData.childNo),
        'child1Age': this.changeNull(selectData.child1Age),
        'child1CitizenCardNumber': this.changeNull(selectData.child1CitizenCardNumber),
        'child2Age': this.changeNull(selectData.child2Age),
        'child2CitizenCardNumber': this.changeNull(selectData.child2CitizenCardNumber),
        'child3Age': this.changeNull(selectData.child3Age),
        'child3CitizenCardNumber': this.changeNull(selectData.child3CitizenCardNumber),
        'child4Age': this.changeNull(selectData.child4Age),
        'child4CitizenCardNumber': this.changeNull(selectData.child4CitizenCardNumber),
        'child5Age': this.changeNull(selectData.child5Age),
        'child5CitizenCardNumber': this.changeNull(selectData.child5CitizenCardNumber),
        'child6Age': this.changeNull(selectData.child6Age),
        'child6CitizenCardNumber': this.changeNull(selectData.child6CitizenCardNumber),
        'citizenCardNumber': this.changeNull(selectData.citizenCardNumber),
        'curatorCode': this.changeNull(selectData.curatorCode),
        'dateOfBirth': this.formatDate(selectData.dateOfBirth),
        'debtAgriAmount': this.changeNull(selectData.debtAgriAmount),
        'debtBusinessAmount': this.changeNull(selectData.debtBusinessAmount),
        'debtConsumptionAmount': this.changeNull(selectData.debtConsumptionAmount),
        'debtEduAmount': this.changeNull(selectData.debtEduAmount),
        'debtHouseAmount': this.changeNull(selectData.debtHouseAmount),
        'debtVehicleAmount': this.changeNull(selectData.debtVehicleAmount),
        'deptCreditAmount': this.changeNull(selectData.deptCreditAmount),
        'disabledCode': this.changeNull(selectData.disabledCode),
        'dldId': this.changeNull(selectData.dldId),
        'eduCode': this.changeNull(selectData.eduCode),
        'eduLevel': this.changeNull(selectData.eduLevel),
        'eduSponsorCitizenCardNumber': this.changeNull(selectData.eduSponsorCitizenCardNumber),
        'eduSponsorIncome': this.changeNull(selectData.eduSponsorIncome),
        'email': this.changeNull(selectData.email),
        'entryName': this.changeNull(selectData.entryName),
        'entryTry': this.changeNull(selectData.entryTry),
        'familyCode': this.changeNull(selectData.familyCode),
        'familyMember': this.changeNull(selectData.familyMember),
        'firstName': this.changeNull(selectData.firstName),
        'fisheryId': this.changeNull(selectData.fisheryId),
        'guaranteeCode': this.changeNull(selectData.guaranteeCode),
        'hidMoi': this.changeNull(selectData.hidMoi),
        'houseAddrDist': this.changeNull(selectData.houseAddrDist),
        'houseAddrFloor': this.changeNull(selectData.houseAddrFloor),
        'houseAddrMoo': this.changeNull(selectData.houseAddrMoo),
        'houseAddrPost': this.changeNull(selectData.houseAddrPost),
        'houseAddrProv': this.changeNull(selectData.houseAddrProv),
        'houseAddrRoad': this.changeNull(selectData.houseAddrRoad),
        'houseAddrSoi': this.changeNull(selectData.houseAddrSoi),
        'houseAddrSubDist': this.changeNull(selectData.houseAddrSubDist),
        'houseAddrSubSoi': this.changeNull(selectData.houseAddrSubSoi),
        'houseAddrVillage': this.changeNull(selectData.houseAddrVillage),
        'houseCode': this.changeNull(selectData.houseCode),
        'houseNo': this.changeNull(selectData.houseNo),
        'housingRent': this.changeNull(selectData.housingRent),
        'keeperCode': this.changeNull(selectData.keeperCode),
        'landAssetCode': this.changeNull(selectData.landAssetCode),
        'landCode': this.changeNull(selectData.landCode),
        'landRoomCode': this.changeNull(selectData.landRoomCode),
        'lastName': this.changeNull(selectData.lastName),
        'lastupdate': this.changeNull(selectData.lastupdate),
        'liveCode': this.changeNull(selectData.liveCode),
        'motherCitizenCardNumber': this.changeNull(selectData.motherCitizenCardNumber),
        'nameCardMoi': this.changeNull(selectData.nameCardMoi),
        'neesinAmount': this.changeNull(selectData.neesinAmount),
        'occupationCode': this.changeNull(selectData.occupationCode),
        'officeBrEntry': this.changeNull(selectData.officeBrEntry),
        'officeEntry': this.changeNull(selectData.officeEntry),
        'officeProv': this.changeNull(selectData.officeProv),
        'phoneHome': this.changeNull(selectData.phoneHome),
        'phoneMobile': this.changeNull(selectData.phoneMobile),
        'phoneOffice': this.changeNull(selectData.phoneOffice),
        'prefixName': this.changeNull(selectData.prefixName),
        'registerDate': this.changeNull(selectData.registerDate),
        'sexCardMoi': this.changeNull(selectData.sexCardMoi),
        'statusCode': this.changeNull(selectData.statusCode),
        'totalIncome59': this.changeNull(selectData.totalIncome59),
        'workCode': this.changeNull(selectData.workCode),
        'workOther': this.changeNull(selectData.workOther),
          'person': {
            'citizenCardNumber': this.changeNull(selectData.citizenCardNumber),
            'fullName': this.changeNull(selectData.firstName) + ' ' + this.changeNull(selectData.lastName),
            'sex': '',
            'dateOfBirth': this.formatDate(selectData.dateOfBirth)
          },
          'wartermarks': this.loadReportDetail(),
        'reportName' : this.reportName,
        'reportOfDate': this.reportOfDate,
        'reportOfTime': this.reportOfTime
      };
    }
    getData(): any {
      return this.docMofRegistrant;
    }
    /**
     * Getter selectData
     * //return {IDxc_Model_Mof_Registrant}
     */
    public get $dataSet(): IDxc_Model_Mof_Registrant {
        return this.dataSet;
    }
    /**
     * Setter selectData
     * //param {IDxc_Model_Mof_Registrant} value
     */
    public set $dataSet(value: IDxc_Model_Mof_Registrant) {
        this.dataSet = value;
    }

    formatDate(dateOfBirth: string): string {

        const date = new Date(dateOfBirth);
        const day = date.getDate();
        const month = date.getMonth();
        const year = date.getFullYear() + 543;
        if (dateOfBirth === 'null' || dateOfBirth === null || dateOfBirth === '') {
            return '-';
        } else {
            const thmonth = new Array ('มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน',
            'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม');
            return `${day} ${thmonth[month]} ${year}`;
        }
    }

    changeSex(sex: string) {
        if (sex === 'MALE') {
            return 'ชาย';
        } else if (sex === 'FEMALE') {
            return 'หญิง';
        } else if (sex === 'OTHER') {
            return 'อื่นๆ';
        } else if (sex === 'null') {
            return '-';
        }
    }

    changeNull(selectData: string) {
        if (selectData == null || selectData == 'null' || selectData == '0') {
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
      } else {
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

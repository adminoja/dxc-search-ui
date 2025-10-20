export interface DxcUi0019Imp {
    // String -> String
    // produce "reportname" 3 report
    report_name: string;
    reportname(name);

    btnSearch: HTMLButtonElement; //สืบค้น
    btnSearch_Click(); //กดที่นี่เพิ่อกลับไปหน้าฟอร์มสืบค้น

    lblNote: string //กดที่นี่เพิ่อกลับไปหน้าฟอร์มสืบค้น
    tblResultList: HTMLTableElement; //เช่น ผู้ประกันตน,เลขประชาชน,ชื่อ,เพศ
    tblResultList_getData(); //แสดงข้อมูลที่ค้นหา

    lblCitizenNumber: string //เช่น 1100800912338
    tblCitizenNumber_Click(); //กดเพื่อแสดงข้อมูลใน Tab 

    tabFullname: string //เช่น สิทธิพงษ์ ติยะภูมิ
    tabFullname_getFullname(); //แสดงชื่อ นามสกุล

    getSearchData(); //ดึงข้อมูลจาก Service
    
    dopaItems:Dopa;
}
export class Dopa {
    lblDopa: string;
    lblDopaFname: string //ชื่อ
    lblDopaSex: string //เพศ
    lblDopaCitizenNumber: string //เลขประจำตัวประชาชน
    lblDopaBirthdate:string //เกิดวันที่
    lblDopaAge:string //อายุ
    lblDopaNation:string //สัญชาติ
    lblDopaRegion:string //ศาสนา
    lblDopaAddress:string //ที่อยู่
    lblDopaFarthername:string //บิดาชื่อ
    lblDopaMothername:string //มารดาชื่อ
    lblDopaoldName:string //ชื่อเดิม
    lblDopaMarry:string //สถานะ
    lblWrongHistory:string //ประวัติการกระทำผิด
    lblNotfound:string //แสดงสถานะการค้นหาข้อมูล	เช่น ไม่พบข้อมูล
    lblGHistory:string //ประวัติทั่วไป
    lblGHistoryOffice:string //แสดงชื่อสังกัด	เช่น สำนักงานประกันตน
    lblGHistoryDB:string //แสดงชื่อฐานข้อมูล	เช่น ผู้ประกันตน
    lblGHistoryFullname:string //ชื่อ
    lblGHistoryCitizenNumber:string //เลขประจำตัวประชาชน
    lblGHistoryBirthDate:string //วันเกิด
    lblGHistoryStatus:string //สถานะลูกจ้าง
    constructor(citizenCardNumber:string,firstName:string,lastName:string,sex:string,age:string){
        this.lblDopaCitizenNumber=citizenCardNumber;
        this.lblDopaFname=firstName+" "+lastName;
        this.lblDopaSex=sex;
        this.lblDopaAge=age;
    }

}
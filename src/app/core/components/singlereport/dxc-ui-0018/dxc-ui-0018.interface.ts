export interface IdxcUi0018 {
  lblStatusSearch: string; // ทำแล้ว  //แสดงสถานะการสืบค้นข้อมูลจากฐานข้อมูลต่างๆ
  tblStatusSearch: string; // เช่น ฐานข้อมูล,เจ้าของ,สถานะ,ผลการสืบค้น,รายการ
  tblStatusSearch_List(); // แสดงรายการฐานข้อมูลที่ค้นหา
  lblDatabase: string; // แสดงชื่อฐานข้อมูล เช่น ผู้ประกันตน,ผู้กระทำผิดกฎหมาย,ประวัติคดียาเสพติ,เด็กหรือเยาวชนผู้กระทำผิด
  imgOffice: HTMLImageElement;  //แสดงรูปภาพหน่วยงาน
  imgOffic_getUrl: string; //Url รูปภาพ
  lblStatus: number; //ทำแล้ว  //เช่น 100%
  lblStatus_getStatus(); //แสดงสถานะProgress เป็นแถบบาร์สีเขียว และจำนวน %
  lblSearchResult: string; //เช่น พบข้อมูล,ไม่พบข้อมูล
  lblSearchResult_getResult(); //แสดงผลการค้นหาข้อมูล

  lblList: string //เช่น 1 หรือ 0
  lblList_Count(); //แสดงจำนวนผลการค้นหาข้อมูล
  onBackPage();
}
export class dxcUi018App {

  Obj: any[];
  SearchCount: number = 0;
  CountObj: number;

  constructor(private obj: any[], private dataSearch: any) {
    console.log(obj);
    for (var i = 0; i < this.obj.length; i++) {
      if (this.obj[i].citizenCardNumber == this.dataSearch.citizenCardNumber) {
        this.SearchCount++;
        console.log("count: " + this.SearchCount + " dataCitizenCardNumber: " + this.obj[i].citizenCardNumber);
      } else if (this.obj[i].personNationalIdentificationId==this.dataSearch.citizenCardNumber) {
        this.SearchCount++;
      } else if (this.obj[i].personGivenName == this.dataSearch.firstName) {
        this.SearchCount++;
      } else if (this.obj[i].personSurName == this.dataSearch.lastName && this.dataSearch.lastName !== undefined) {
        this.SearchCount++;
        console.log("count: " + this.obj[i].personSurName + ' ' + this.dataSearch.lastname);
      } else if (this.obj[i].personGivenName == this.dataSearch.firstName && this.obj[i].personSurName == this.dataSearch.lastname) {
        this.SearchCount++;
      } else if (this.obj[i].firstName == this.dataSearch.firstName && this.obj[i].lastName == this.dataSearch.lastname) {
        this.SearchCount++;
      } else if (this.obj[i].firstName) {
        this.SearchCount++;
      } else if (this.obj[i].lastName) {
        this.SearchCount++;
      } else if (this.obj[i].casedataid == this.dataSearch.firstName) {
        this.SearchCount++;
        console.log('count: ' + this.SearchCount + ' casedataid: ' + this.obj[i].casedataid);
        console.log(this.dataSearch.firstName);
      }
    }
  }
  public getSearchCount() {
    return this.SearchCount;
  }
}

export interface IdxcUi00141{
    lblSingleReport:string //Single Report
    lblResult:string //ผลการสืบค้น
    tgbCitizenNumber:string //ทำแล้ว  //เลขบัตรประชาชน
    txtCitizenNumber:string //ใส่เลขที่บัตร 13 หลัก
    lblNote:string //ทำแล้ว //กรุณากรอก เลขประจำตัวประชาชน เลขประจำตัวประชาชนต้องเป็น 13 หลัก
    lblConditionEtc:string //ทำแล้ว  //เงื่อนไขเพิ่มเติม
    chkSearchAdvance:boolean //ค้นจากทุกฐาน <- คลิ๊กที่นี่เพื่อเลือกฐานข้อมูลที่ต้องการที่สืบค้น
    lblNoteMessage:string //ทำแล้ว //ระบบ single report เหมาะสำหรับค้นหาข้อมูลจากเลขประจำตัวประชาชน ชื่อนามสกุลหรือเลขทะเบียนรถที่ถูกต้อง ในกรณีที่เงื่อนไขไม่ชัดเจน(เช่น ค้นชื่อที่ขึ้นต้นด้วย 'ก') ระบบจะแสดงรายการผลการค้นหาสูงสุด 100 รายการต่อฐาน
    btnSearch:HTMLButtonElement //ค้นหา 
    tgbFullname:string //ทำแล้ว //ชื่อ – นามสกุล
    lblFname:string //ทำแล้ว  //ชื่อ
    txtFname:string //ทำแล้ว  //ชื่อจริง หรือส่วนหนึ่งของชื่อ
    lblLname:string //ทำแล้ว  //นามสกุล
    txtLname:string //ทำแล้ว  //นามสกุล หรือส่วนหนึ่งของนามสกุล
    tgbLicenseCar:string //ทำแล้ว //ทะเบียนรถ
    lblLicenseCar:string //ทำแล้ว  //เลขทะเบียน
    txtLicenseCar:string //ทำแล้ว  //ตัวอย่าง กก-9999 หรือ กก 9999
    lblProvince:string //ทำแล้ว  //จังหวัด
    dpProvince:string[] //เช่น ทุกจังหวัด,นนบุรี,กรุงเทพมหานคร
    tgbCitizenNumber_Click(); //กดเพื่อค้นหาตามเลขบัตรประชาชน
    txtCitizenNumber_Click(); //เลข 13 หลักไม่มีขีด
    btnSearch_Click(); //ค้นหาตามเงื่อนไขที่เลือก
    tgbFullname_Click(); //กดเพื่อค้นหาตามชื่อนามสกุล
    tgbLicenseCar_Click();//กดเพื่อค้นหาตามทะเบียนรถ
    dpProvince_List(); //แสดงข้อมูลจังหวัด
}

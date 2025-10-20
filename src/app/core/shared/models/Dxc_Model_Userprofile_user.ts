export interface Dxc_Model_Userprofile_user{

    id : number;//"id", "number", "รหัสข้อมูล", { "pk": "true" }],
    citizenCardNumber : number;//citizenCardNumber, number, เลขประจำตัวประชาชน],
    title: string;//prefix, string, คำนำหน้าชื่อ],
    firstName: string;//firstName, string, ชื่อ],
    lastName: string;//lastName, string, นามสกุล],
    sex: string;//sex, string, เพศ],
    officeId: string;//officeId, string, สำนักงานคุมประพฤติ],
    dateOfBirth: string;//birthDate, datetime, วันเดือนปีเกิด],
    tag: string;
    source: string;
    schema: string;
    groupId: string;
    allowValue: string;
    
    }
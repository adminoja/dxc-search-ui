export interface DxcUi0014Imp{

    lblSingleReportForm:string //รายงาน Single Report
    lblSingleReportDxc:string //รายงาน Single Report
    lblSingleReportProbation:string //รายงานสนับสนุนการแสวงหาข้อเท็จจริงกรมคุมประพฤติ
    lblSingleReportConsider:string //รายงานสนับสนุนการสืบเสาะ ค.ป.๐๔.๑ กรมพินิจฯ
    lblHistory:string //ประวัติการเรียกดูข้อมูล //แสดงข้อมูล //เช่น เวลา,ข้อมูล,รายละเอียดข้อมูล
    tblHistory:HTMLTableElement; //แสดงข้อมูล เช่น เวลา,ข้อมูล,รายละเอียดข้อมูล
    lblSingleReportForm_Click(name:string);
}

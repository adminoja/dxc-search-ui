import { Dxc_Model_Cifs_AnonymousCorpse } from "../../../../shared/models/Dxc_Model_Cifs_AnonymousCorpse";

export interface IReportCifsAnonymousCorpse {
    model:Dxc_Model_Cifs_AnonymousCorpse;
  }
 
  export class Metadata {
  
    html: string;
    public getHtml(selectData: Dxc_Model_Cifs_AnonymousCorpse ,title:string) {
        
      return this.html = `<html>
          <head>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <title>{{dataSourceName}} {{dataModelName}}</title>

            <style>body{font-size:11px}</style>
            </head>

            <body>
            <div>
                <table border="1px" style="border-style:solid; border-color:#000; width:100%">
                          <tr>
                              <td align="center">{{dataModelName}}</td>
                            </tr>
                    </table>
            <br />
            <br />
                <table style="width:100%">
                        
                        <tr>
                            <td style="width:25%"></td>
                            <td style="width:25%"></td>
                            <td style="width:5%"></td>
                            <td style="width:15%"></td>
                            <td style="width:30%"></td>
                        </tr>
                        
                        <tr>
                            <td>เลขที่ศพนิรนาม</td>
                            <td colspan="4" style="color:blue" data-attributeName="anonymousCorpseNumber"  data-role="dxc-hyperlink" data-value="[[selectData.anonymousCorpseNumber]]">{{anonymousCorpseNumber}}</td>
                            
                        </tr>
                        
                        <tr>
                            <td colspan="5" style="height:5px"></td>
                        </tr>

                        <tr >
                            <td>ต่างชาติ</td>
                            <td style="color:blue">{{selectData.personNationalityText}}</td>
                            <td>&nbsp;</td>
                            <td>วันที่ชันสูตรศพ</td>
                            <td style="color:blue">{{selectData.autopsyDate}}</td>
                        </tr>
                        
                        <tr>
                            <td colspan="5" style="height:5px"></td>
                        </tr>
                        
                        <tr>
                            <td>สถานีตำรวจท้องที่ที่พบศพ</td>
                            <td style="color:blue">{{selectData.policeOffice}}</td>
                            <td>&nbsp;</td>
                            <td>เพศ</td>
                            <td style="color:blue">{{selectData.sex}}</td>
                        </tr>
                        
                        <tr>
                            <td colspan="5" style="height:5px"></td>
                        </tr>
                        
                        <tr>
                            <td>ข้อมูลฟัน</td>
                            <td style="color:blue">{{selectData.teethDescriptionText}}</td>
                            <td>&nbsp;</td>
                            <td>แผลเป็น/ตำหนิ</td>
                            <td style="color:blue">{{selectData.scarDescriptionText}}</td>
                        </tr>
                            
                        <tr>
                            <td colspan="5" style="height:5px"></td>
                        </tr>
                        
                        <tr>
                            <td>รอยสัก</td>
                            <td style="color:blue">{{selectData.tattooDescriptionText}}</td>
                            <td>&nbsp;</td>
                            <td>ลักษณะพิเศษ</td>
                            <td style="color:blue">{{characteristicsDescriptionText}}</td>
                        </tr>
                        
                        <tr>
                            <td colspan="5" style="height:5px"></td>
                        </tr>
                                                              
                        <tr>
                            <td>ประวัติทางการแพทย์</td>
                            <td colspan="4" style="color:blue">{{selectData.medicalHistory}}</td>
                        </tr>
                        
                        <tr>
                            <td colspan="5" style="height:5px"></td>
                        </tr>
                        
                        <tr>
                            <td>การแต่งกายและทรัพย์สินติดตัว</td>
                            <td colspan="4" style="color:blue">{{selectData.dressDescriptionText}}</td>
                        </tr>
                        
                        <tr>
                            <td colspan="5" style="height:5px"></td>
                        </tr>
                        
                        
                        <tr>
                            <td>หมายเหตุ</td>
                            <td colspan="4" style="color:blue">{{selectData.remark}}</td>
                        </tr>
                        
                      
                        
                    
              </table>
              
              </div>

              

            </body>
            </html>
      `;
  
    }
  }
  
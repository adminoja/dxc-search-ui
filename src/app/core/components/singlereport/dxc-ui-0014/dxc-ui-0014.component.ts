import { Component, OnInit } from '@angular/core';
import { DxcUi0014Imp } from './dxc-ui-0014.interface';
import { Router } from '@angular/router';
import { DxcUi0019Imp } from '../dxc-ui-0019/dxc-ui-0019.Interface';
import { ThemeLight } from '../../../shared/utils/theme-light';
import { UserService } from '../../../shared/services/Userprofile/user.service';
import { KeycloakService } from 'src/app/core/auth/keycloak.service';


@Component({
  selector: 'app-dxc-ui-0014',
  templateUrl: './dxc-ui-0014.component.html',
  styleUrls: ['./dxc-ui-0014.component.css']
})
export class DxcUi0014Component implements OnInit, DxcUi0014Imp {
  user: any;
  username: string;
  groupName: string;
  usernameLogin: any;

  btnSearch: HTMLButtonElement;
  lblNote: string;
  tblResultList: HTMLTableElement;
  lblCitizenNumber: string;
  tabFullname: string;

  dopaItems;
  tblHistory: HTMLTableElement;
  lblSingleReportForm: string;
  lblSingleReportDxc: string;
  lblSingleReportProbation: string;
  lblSingleReportConsider: string;
  lblSingleReportAddress: string;
  lblHistory: string;

  report_name: string;
  shouldShow: any;
  theme: ThemeLight;

  constructor(private userService: UserService, private router: Router) {
    localStorage.clear();
  }

  btnSearch_Click() { }
  tblResultList_getData() { }
  tblCitizenNumber_Click() { }
  tabFullname_getFullname() { }
  lblSingleReportForm_Click(name: string) {
    this.router.navigate(['dxcui0014/dxcui00141/', name]);
  }
  reportname(name: any) {
    this.report_name = name;
  }
  ngOnInit() {
    this.lblSingleReportDxc = 'รายงาน Single Report';
    this.lblSingleReportProbation = 'รายงานสนับสนุนการแสวงหาข้อเท็จจริงกรมคุมประพฤติ';
    this.lblSingleReportConsider = 'รายงานสนับสนุนการสืบเสาะ ค.ป.๐๔.๑ กรมพินิจฯ';
    this.lblSingleReportAddress = 'รายงานประวัติที่อยู่บุคคล';
    this.lblSingleReportForm = '';
    this.lblHistory = '';
    this.theme = new ThemeLight;
    this.theme.loadScripts();
    localStorage.clear();
  }

  getKeycloakService() {
    return KeycloakService;
}


}

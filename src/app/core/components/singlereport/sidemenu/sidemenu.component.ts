import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { KeycloakService } from 'src/app/core/auth/keycloak.service';
import { Router } from '@angular/router';
import { KeycloakServiceApi } from 'src/app/core/shared/services/KeycloakServiceApi.service';
import { ThaiDService } from 'src/app/core/shared/services/thai-d.service';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {
  menuItems = environment.menu;
  public isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map((result: BreakpointState) => result.matches));

  firstName: any;
  lastName: any;
  departmentCode: any;

  user: any;
  username: string;
  groupName: string;
  usernameLogin: any;
  loadAPI: Promise<any>;
  accountType: any;
  isLoggedInThaiD: boolean = false;
  private thaiDAuthSub: Subscription;
  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    public keycloakservice: KeycloakServiceApi, 
    private thaiDService: ThaiDService
  ) {
    this.loadAPI = new Promise((resolve) => {
      this.loadScript();
      resolve(true);
    });

    if (localStorage.getItem('usernameLogin') == null) {
      this.loadUserlogin();
    } else {
      this.loadUserprofile();
    }
  }

  ngOnInit() {
    // 7. เริ่ม "ฟัง" สถานะจาก Service
    // เมื่อสถานะเปลี่ยน (เช่น ถูกตั้งค่าเป็น true) ตัวแปร this.isLoggedInThaiD จะอัปเดตตาม
    this.thaiDAuthSub = this.thaiDService.loginStatus$.subscribe(status => {
      this.isLoggedInThaiD = status;
    });
  }

  ngOnDestroy(): void {
    if (this.thaiDAuthSub) {
      this.thaiDAuthSub.unsubscribe();
    }
  }

  getKeycloakService() {
    return KeycloakService;
  }

  logout() {
    localStorage.clear();
  }

  loadUserlogin() {
    this.keycloakservice.GetUserProfile().subscribe({
      next: (data) => {
        console.log(data);
        this.usernameLogin = data;
        if (
          [11, 22, 24, 25, 21, 12, 1, 7].includes(this.usernameLogin.userstatus)
        ) {
          this.router.navigate([`denied/${this.usernameLogin.userstatus}`]);
        } else {
          localStorage.setItem('usernameLogin', this.usernameLogin.preferred_username);
          localStorage.setItem('reportName', this.usernameLogin.name);
          localStorage.setItem('nin', this.usernameLogin.nin);
          this.loadUserprofile();
        }
      },
      error: (error) => {
        this.httpErrorResponse(null, null, error);
      }
    });
  }

  loadUserprofile() {
    if (localStorage.getItem('usernameLogin') !== '') {
      const userProfile = localStorage.getItem('userProfile');
      const userData = JSON.parse(userProfile);

      if (JSON.stringify(userData) === null) {
        if (!localStorage.getItem('foo')) {
          localStorage.setItem('foo', 'no reload');
          location.reload();
        } else {
          localStorage.removeItem('foo');
        }
      }

      if (userData != null) {
        this.firstName = userData.given_name;
        this.lastName = userData.family_name;
        this.departmentCode = userData.departmentCode;
        this.accountType = userData.accountType;
        console.log(this.accountType);
      } else if (localStorage.getItem('usernameLogin') !== null) {
        const usernameLogin = localStorage.getItem('usernameLogin');

        this.keycloakservice.GetUserProfile().subscribe({
          next: (data) => {
            localStorage.setItem('userProfile', JSON.stringify(data));
            this.user = data;
            this.username = this.user.username;
            this.groupName = this.user.groupName;
          },
          error: (error) => {
            this.httpErrorResponse(null, null, error);
          }
        });
      }
    }
  }

  httpErrorResponse(no: number, dbService: string, error: any) {
    let messageError: string;

    if (error.status === 504) {
      messageError = `<span class="badge badge-danger">เชื่อมต่อไม่ได้</span>`;
      this.router.navigate(['504']);
      console.log(error);
    } else if (error.status === 500) {
      this.router.navigate(['500']);
    } else if (error.status === 401) {
      messageError = `<span class="badge badge-danger">เจ้าหน้าที่ไม่ได้ทำการเข้าระบบด้วยบัตรประชาชน</span>`;
      this.router.navigate(['401']);
    } else if (error.status === 404) {
      console.log('เกิดข้อผิดพลาด');
      this.router.navigate(['404']);
    } else if (error.status === 0) {
      messageError = `<span class="badge badge-danger">ไม่พบข้อมูล</span>`;
      this.router.navigate(['0']);
    } else {
      messageError = `<span class="badge badge-danger">เกิดข้อผิดพลาดโดยไม่ทราบสาเหตุ</span>`;
    }

    return `${messageError}`;
  }

  public loadScript() {
    let isFound = false;
    const scripts = document.getElementsByTagName('script');

    for (let i = 0; i < scripts.length; ++i) {
      if (
        scripts[i].getAttribute('src') != null &&
        scripts[i].getAttribute('src').includes('loader')
      ) {
        isFound = true;
        break;
      }
    }

    if (!isFound) {
      const dynamicScripts = ['assets/js/pages/demo.customers.js'];

      for (let i = 0; i < dynamicScripts.length; i++) {
        const node = document.createElement('script');
        node.src = dynamicScripts[i];
        node.type = 'text/javascript';
        node.async = false;
        // node.charset = 'utf-8';
        document.getElementsByTagName('head')[0].appendChild(node);
      }
    }
  }

  loginThaID(): void {
    const state = crypto.randomUUID(); // ป้องกัน CSRF
    const clientId = 'd3E5WUNxNWZqQWtWWThOcmRGb3ZPSVVFMjFhOWRBM04';
    const redirectUri = encodeURIComponent('https://search-linkage2.dxc.go.th/secured/v2/index.html#/loginThaiD');

    const authUrl = `https://imauth.bora.dopa.go.th/api/v2/oauth2/auth/?response_type=code` +
                    `&client_id=${clientId}` +
                    `&redirect_uri=${redirectUri}` +
                    `&scope=openid+pid+given_name+family_name` +
                    `&state=${state}`;

    localStorage.setItem('thaid_oauth_state', state);
    window.location.href = authUrl;
  }

}

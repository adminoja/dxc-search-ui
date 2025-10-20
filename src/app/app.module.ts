import { BrowserModule } from '@angular/platform-browser';
import { NgModule, importProvidersFrom } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { provideHttpClient, withInterceptorsFromDi, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SecuredHttpInterceptor } from './core/interceptor/secured-http.interceptor';
import { AuthGuardService } from './core/guard/auth-guard.service';
import { KeycloakService } from './core/auth/keycloak.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidemenuComponent } from './core/components/singlereport/sidemenu/sidemenu.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { DepartmentNamePipe } from '../app/core/shared/pipe/department-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SidemenuComponent,
    DepartmentNamePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    // ห้ามใส่ importProvidersFrom(HttpClientModule) ที่นี่
  ],
  providers: [
    KeycloakService,
    AuthGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SecuredHttpInterceptor,
      multi: true
    },
    provideHttpClient(withInterceptorsFromDi()), // <-- แนะนำให้เพิ่มตรงนี้แทน import HttpClientModule แบบเดิม
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

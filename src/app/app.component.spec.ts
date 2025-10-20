import { HttpClientModule } from '@angular/common/http';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { SidemenuComponent } from './core/components/singlereport/sidemenu/sidemenu.component';
import { DepartmentNamePipe } from './core/shared/pipe/department-name.pipe';

describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SidemenuComponent,
        DepartmentNamePipe
      ],
      imports: [ RouterTestingModule, HttpClientModule ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});

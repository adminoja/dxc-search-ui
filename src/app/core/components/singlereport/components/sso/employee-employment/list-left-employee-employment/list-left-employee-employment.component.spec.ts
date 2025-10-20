import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { SsoEmployeeEmploymentMetaData } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-sso-employee-employment/dxc-model-sso-employee-employment.interface';
import { FilterPipe } from 'src/app/core/shared/pipe/filter.pipe';

import { ListLeftEmployeeEmploymentComponent } from './list-left-employee-employment.component';

describe('ListLeftEmployeeEmploymentComponent', () => {
  let component: ListLeftEmployeeEmploymentComponent;
  let fixture: ComponentFixture<ListLeftEmployeeEmploymentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLeftEmployeeEmploymentComponent, FilterPipe ],
      providers: [ SsoEmployeeEmploymentMetaData ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLeftEmployeeEmploymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

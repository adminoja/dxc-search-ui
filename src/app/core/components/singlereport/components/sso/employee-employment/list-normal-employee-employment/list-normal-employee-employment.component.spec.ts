import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material';
import { SsoEmployeeEmploymentMetaData } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-sso-employee-employment/dxc-model-sso-employee-employment.interface';
import { ConverseDatePipe } from 'src/app/core/shared/pipe/converse-date.pipe';
import { FilterPipe } from 'src/app/core/shared/pipe/filter.pipe';
import { ConverseNullPipe } from 'src/app/core/shared/pipe/probationer/converse-null.pipe';

import { ListNormalEmployeeEmploymentComponent } from './list-normal-employee-employment.component';

describe('ListNormalEmployeeEmploymentComponent', () => {
  let component: ListNormalEmployeeEmploymentComponent;
  let fixture: ComponentFixture<ListNormalEmployeeEmploymentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListNormalEmployeeEmploymentComponent, ConverseNullPipe, FilterPipe, ConverseDatePipe ],
      imports: [ MatDialogModule ],
      providers: [ SsoEmployeeEmploymentMetaData ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNormalEmployeeEmploymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

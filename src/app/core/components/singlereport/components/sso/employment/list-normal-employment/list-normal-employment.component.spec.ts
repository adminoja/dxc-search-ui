import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material';
import { SsoEmploymentMetaData } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-sso-employment/dxc-model-sso-employment.interface';
import { ConverseDatePipe } from 'src/app/core/shared/pipe/converse-date.pipe';
import { ConverseNullPipe } from 'src/app/core/shared/pipe/probationer/converse-null.pipe';

import { ListNormalEmploymentComponent } from './list-normal-employment.component';

describe('ListNormalEmploymentComponent', () => {
  let component: ListNormalEmploymentComponent;
  let fixture: ComponentFixture<ListNormalEmploymentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListNormalEmploymentComponent , ConverseNullPipe, ConverseDatePipe],
      imports: [ MatDialogModule ],
      providers: [ SsoEmploymentMetaData ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNormalEmploymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

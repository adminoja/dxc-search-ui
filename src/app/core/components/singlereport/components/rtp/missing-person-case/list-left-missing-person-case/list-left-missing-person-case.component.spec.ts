import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RtpMissingPersonCaseMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-rtp-missing-person-case/dxc-model-rtp-missing-person-case.interface';
import { FilterPipe } from 'src/app/core/shared/pipe/filter.pipe';
import { ModalComponent } from 'src/app/core/shared/services/components/modal/modal.component';

import { ListLeftMissingPersonCaseComponent } from './list-left-missing-person-case.component';

describe('ListLeftMissingPersonCaseComponent', () => {
  let component: ListLeftMissingPersonCaseComponent;
  let fixture: ComponentFixture<ListLeftMissingPersonCaseComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLeftMissingPersonCaseComponent, FilterPipe, ModalComponent ],
      providers: [ RtpMissingPersonCaseMetadata ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLeftMissingPersonCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

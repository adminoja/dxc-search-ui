import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { DocReleasedOffenderMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-released-offender/dxc-model-released-offender.interface';
import { FilterPipe } from 'src/app/core/shared/pipe/filter.pipe';
import { ModalComponent } from 'src/app/core/shared/services/components/modal/modal.component';

import { ListLeftReleasedOffenderComponent } from './list-left-released-offender.component';

describe('ListLeftReleasedOffenderComponent', () => {
  let component: ListLeftReleasedOffenderComponent;
  let fixture: ComponentFixture<ListLeftReleasedOffenderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLeftReleasedOffenderComponent, FilterPipe, ModalComponent ],
      providers: [ DocReleasedOffenderMetadata ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLeftReleasedOffenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

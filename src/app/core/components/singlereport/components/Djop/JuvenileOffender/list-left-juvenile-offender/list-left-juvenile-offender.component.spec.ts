import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { DjopJuvenileOffenderMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-djop-juvenile-offender/dxc-model-djop-juvenile-offender.interface';
import { FilterPipe } from 'src/app/core/shared/pipe/filter.pipe';
import { ModalComponent } from 'src/app/core/shared/services/components/modal/modal.component';

import { ListLeftJuvenileOffenderComponent } from './list-left-juvenile-offender.component';

describe('ListLeftJuvenileOffenderComponent', () => {
  let component: ListLeftJuvenileOffenderComponent;
  let fixture: ComponentFixture<ListLeftJuvenileOffenderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLeftJuvenileOffenderComponent, ModalComponent, FilterPipe ],
      providers: [DjopJuvenileOffenderMetadata]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLeftJuvenileOffenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

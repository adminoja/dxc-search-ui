import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AgothChargeVictimMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-agoth-charge-victim/dxc-model-agoth-charge-victim.interface';
import { FilterPipe } from 'src/app/core/shared/pipe/filter.pipe';
import { ModalComponent } from 'src/app/core/shared/services/components/modal/modal.component';

import { ListLeftAgothChargeVictimComponent } from './list-left-agoth-charge-victim.component';

describe('ListLeftAgothChargeVictimComponent', () => {
  let component: ListLeftAgothChargeVictimComponent;
  let fixture: ComponentFixture<ListLeftAgothChargeVictimComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLeftAgothChargeVictimComponent, FilterPipe, ModalComponent ],
      providers: [ AgothChargeVictimMetadata ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLeftAgothChargeVictimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

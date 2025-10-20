import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material';
import { AgothChargeVictimMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-agoth-charge-victim/dxc-model-agoth-charge-victim.interface';
import { FilterPipe } from 'src/app/core/shared/pipe/filter.pipe';

import { ListNormalAgothChargeVictimComponent } from './list-normal-agoth-charge-victim.component';

describe('ListNormalAgothChargeVictimComponent', () => {
  let component: ListNormalAgothChargeVictimComponent;
  let fixture: ComponentFixture<ListNormalAgothChargeVictimComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListNormalAgothChargeVictimComponent, FilterPipe ],
      imports: [ MatDialogModule ],
      providers: [ AgothChargeVictimMetadata ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNormalAgothChargeVictimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

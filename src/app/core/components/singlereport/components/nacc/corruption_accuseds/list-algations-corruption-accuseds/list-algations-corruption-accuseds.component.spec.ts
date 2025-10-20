import { Overlay } from '@angular/cdk/overlay';
import { InjectionToken } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NaccMoiCorruptionAccusedsMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-nacc-moi-corruption-accuseds/dxc-model-nacc-moi-corruption-accuseds.interface';
import { FilterPipe } from 'src/app/core/shared/pipe/filter.pipe';

import { ListAlgationsCorruptionAccusedsComponent } from './list-algations-corruption-accuseds.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

describe('ListAlgationsCorruptionAccusedsComponent', () => {
  let component: ListAlgationsCorruptionAccusedsComponent;
  let fixture: ComponentFixture<ListAlgationsCorruptionAccusedsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAlgationsCorruptionAccusedsComponent, FilterPipe ],
      imports: [ MatDialogModule ],
      providers: [ NaccMoiCorruptionAccusedsMetadata, MatDialog ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAlgationsCorruptionAccusedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

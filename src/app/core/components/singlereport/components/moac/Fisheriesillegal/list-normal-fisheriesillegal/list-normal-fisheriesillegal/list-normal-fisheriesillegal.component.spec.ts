import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { MoacMoiFisheriesIllegalMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-moac-moi-fisheries-illegal/dxc-model-moac-moi-fisheries-illegal.interface';
import { FilterPipe } from 'src/app/core/shared/pipe/filter.pipe';

import { ListNormalFisheriesillegalComponent } from './list-normal-fisheriesillegal.component';

describe('ListNormalFisheriesillegalComponent', () => {
  let component: ListNormalFisheriesillegalComponent;
  let fixture: ComponentFixture<ListNormalFisheriesillegalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListNormalFisheriesillegalComponent, FilterPipe ],
      imports: [ RouterTestingModule, MatDialogModule ],
      providers: [ MoacMoiFisheriesIllegalMetadata ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNormalFisheriesillegalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

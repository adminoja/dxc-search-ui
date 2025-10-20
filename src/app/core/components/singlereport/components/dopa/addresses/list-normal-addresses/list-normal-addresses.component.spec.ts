import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { DopaMoiAddressesMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-dopa-moi-addresses/dxc-model-dopa-moi-addresses.interface';
import { FilterPipe } from 'src/app/core/shared/pipe/filter.pipe';
import { ConverseNullPipe } from 'src/app/core/shared/pipe/probationer/converse-null.pipe';

import { ListNormalAddressesComponent } from './list-normal-addresses.component';

describe('ListNormalAddressesComponent', () => {
  let component: ListNormalAddressesComponent;
  let fixture: ComponentFixture<ListNormalAddressesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListNormalAddressesComponent, FilterPipe, ConverseNullPipe ],
      imports: [ RouterTestingModule, MatDialogModule ],
      providers: [DopaMoiAddressesMetadata]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNormalAddressesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

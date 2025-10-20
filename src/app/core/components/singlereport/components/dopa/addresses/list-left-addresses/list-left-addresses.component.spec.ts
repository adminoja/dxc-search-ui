import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DopaMoiAddressesMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-dopa-moi-addresses/dxc-model-dopa-moi-addresses.interface';
import { FilterPipe } from 'src/app/core/shared/pipe/filter.pipe';

import { ListLeftAddressesComponent } from './list-left-addresses.component';

describe('ListLeftAddressesComponent', () => {
  let component: ListLeftAddressesComponent;
  let fixture: ComponentFixture<ListLeftAddressesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLeftAddressesComponent, FilterPipe ],
      imports: [ RouterTestingModule ],
      providers: [ DopaMoiAddressesMetadata ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLeftAddressesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RlpdRequestorsMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-rlpd-requestors/dxc-model-rlpd-requestors.interface';
import { FilterPipe } from 'src/app/core/shared/pipe/filter.pipe';

import { ListAddressRequestorsComponent } from './list-address-requestors.component';

describe('ListAddressRequestorsComponent', () => {
  let component: ListAddressRequestorsComponent;
  let fixture: ComponentFixture<ListAddressRequestorsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAddressRequestorsComponent, FilterPipe ],
      imports: [ RouterTestingModule ],
      providers: [RlpdRequestorsMetadata]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAddressRequestorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { OncbNarcoticOffenderMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-oncb-narcotic-offender/dxc-model-oncb-narcotic-offender.interface';
import { FilterPipe } from 'src/app/core/shared/pipe/filter.pipe';

import { ListAddressNarcoticOffenderComponent } from './list-address-narcotic-offender.component';

describe('ListAddressNarcoticOffenderComponent', () => {
  let component: ListAddressNarcoticOffenderComponent;
  let fixture: ComponentFixture<ListAddressNarcoticOffenderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAddressNarcoticOffenderComponent, FilterPipe ],
      imports: [ RouterTestingModule ],
      providers: [OncbNarcoticOffenderMetadata]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAddressNarcoticOffenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

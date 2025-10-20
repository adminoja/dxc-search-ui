import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DocPrisonerMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-doc-prisoner/dxc-model-doc-prisoner.interface';
import { FilterPipe } from 'src/app/core/shared/pipe/filter.pipe';

import { ListAddressPrisonerComponent } from './list-address-prisoner.component';

describe('ListAddressPrisonerComponent', () => {
  let component: ListAddressPrisonerComponent;
  let fixture: ComponentFixture<ListAddressPrisonerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAddressPrisonerComponent, FilterPipe ],
      imports: [ RouterTestingModule ],
      providers: [DocPrisonerMetadata]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAddressPrisonerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

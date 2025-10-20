import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DopProbationerMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-dop-probationer/dxc-model-dop-probationer.interface';
import { FilterPipe } from 'src/app/core/shared/pipe/filter.pipe';

import { ListAddressProbationsComponent } from './list-address-probations.component';

describe('ListAddressProbationsComponent', () => {
  let component: ListAddressProbationsComponent;
  let fixture: ComponentFixture<ListAddressProbationsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAddressProbationsComponent, FilterPipe ],
      imports: [ RouterTestingModule ],
      providers: [DopProbationerMetadata]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAddressProbationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

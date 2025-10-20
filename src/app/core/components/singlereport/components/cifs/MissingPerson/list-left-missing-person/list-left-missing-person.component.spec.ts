import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CifsMissingPersonMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-cifs-missing-person/dxc-model-cifs-missing_person.interface';
import { FilterPipe } from 'src/app/core/shared/pipe/filter.pipe';
import { SearchByCidComponent } from '../../../search-by-cid/search-by-cid.component';

import { ListLeftMissingPersonComponent } from './list-left-missing-person.component';

describe('ListLeftMissingPersonComponent', () => {
  let component: ListLeftMissingPersonComponent;
  let fixture: ComponentFixture<ListLeftMissingPersonComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLeftMissingPersonComponent, FilterPipe ],
      imports: [ RouterTestingModule ],
      providers: [CifsMissingPersonMetadata]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLeftMissingPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

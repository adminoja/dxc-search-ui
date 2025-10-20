import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FilterPipe } from 'src/app/core/shared/pipe/filter.pipe';
import { SearchByCidComponent } from '../../../search-by-cid/search-by-cid.component';

import { ListLeftPassportsComponent } from './list-left-passports.component';

describe('ListLeftPassportsComponent', () => {
  let component: ListLeftPassportsComponent;
  let fixture: ComponentFixture<ListLeftPassportsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLeftPassportsComponent, FilterPipe, SearchByCidComponent ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLeftPassportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FilterPipe } from 'src/app/core/shared/pipe/filter.pipe';
import { SearchByCidComponent } from '../../../search-by-cid/search-by-cid.component';

import { ListLeftMarriagecertificatesComponent } from './list-left-marriagecertificates.component';

describe('ListLeftMarriagecertificatesComponent', () => {
  let component: ListLeftMarriagecertificatesComponent;
  let fixture: ComponentFixture<ListLeftMarriagecertificatesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLeftMarriagecertificatesComponent, FilterPipe, SearchByCidComponent ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLeftMarriagecertificatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SearchByCidComponent } from '../../../search-by-cid/search-by-cid.component';

import { ListLeftAttorneyCasesComponent } from './list-left-attorney-cases.component';

describe('ListLeftAttorneyCasesComponent', () => {
  let component: ListLeftAttorneyCasesComponent;
  let fixture: ComponentFixture<ListLeftAttorneyCasesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLeftAttorneyCasesComponent, SearchByCidComponent ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLeftAttorneyCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

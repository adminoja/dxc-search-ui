import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ConverseDatePipe } from 'src/app/core/shared/pipe/converse-date.pipe';

import { ListAllegationAttorneyCasesComponent } from './list-allegation-attorney-cases.component';

describe('ListAllegationAttorneyCasesComponent', () => {
  let component: ListAllegationAttorneyCasesComponent;
  let fixture: ComponentFixture<ListAllegationAttorneyCasesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAllegationAttorneyCasesComponent, ConverseDatePipe ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAllegationAttorneyCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

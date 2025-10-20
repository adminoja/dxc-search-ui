import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FilterPipe } from 'src/app/core/shared/pipe/filter.pipe';
import { ThaiDatePipe } from 'src/app/core/shared/pipe/thaidate.pipe';

import { ListNormalEducationBackgroundesComponent } from './list-normal-education-backgroundes.component';

describe('ListNormalEducationBackgroundesComponent', () => {
  let component: ListNormalEducationBackgroundesComponent;
  let fixture: ComponentFixture<ListNormalEducationBackgroundesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListNormalEducationBackgroundesComponent, FilterPipe, ThaiDatePipe ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNormalEducationBackgroundesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

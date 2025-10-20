import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FilterPipe } from 'src/app/core/shared/pipe/filter.pipe';

import { ListLeftStudentsComponent } from './list-left-students.component';

describe('ListLeftStudentsComponent', () => {
  let component: ListLeftStudentsComponent;
  let fixture: ComponentFixture<ListLeftStudentsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLeftStudentsComponent, FilterPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLeftStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

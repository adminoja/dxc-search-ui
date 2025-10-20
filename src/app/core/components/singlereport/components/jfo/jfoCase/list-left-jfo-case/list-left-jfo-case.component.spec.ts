import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FilterPipe } from 'src/app/core/shared/pipe/filter.pipe';

import { ListLeftJfoCaseComponent } from './list-left-jfo-case.component';

describe('ListLeftJfoCaseComponent', () => {
  let component: ListLeftJfoCaseComponent;
  let fixture: ComponentFixture<ListLeftJfoCaseComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLeftJfoCaseComponent, FilterPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLeftJfoCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

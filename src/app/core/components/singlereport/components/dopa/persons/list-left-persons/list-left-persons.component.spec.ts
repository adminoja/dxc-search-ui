import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FilterPipe } from 'src/app/core/shared/pipe/filter.pipe';

import { ListLeftPersonsComponent } from './list-left-persons.component';

describe('ListLeftPersonsComponent', () => {
  let component: ListLeftPersonsComponent;
  let fixture: ComponentFixture<ListLeftPersonsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLeftPersonsComponent, FilterPipe ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLeftPersonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

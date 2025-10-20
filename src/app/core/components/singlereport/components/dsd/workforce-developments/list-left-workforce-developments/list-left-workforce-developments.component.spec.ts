import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FilterPipe } from 'src/app/core/shared/pipe/filter.pipe';

import { ListLeftWorkforceDevelopmentsComponent } from './list-left-workforce-developments.component';

describe('ListLiftWorkforceDevelopmentsComponent', () => {
  let component: ListLeftWorkforceDevelopmentsComponent;
  let fixture: ComponentFixture<ListLeftWorkforceDevelopmentsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLeftWorkforceDevelopmentsComponent, FilterPipe ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLeftWorkforceDevelopmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

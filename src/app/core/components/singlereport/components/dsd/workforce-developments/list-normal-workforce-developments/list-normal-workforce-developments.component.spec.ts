import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { FilterPipe } from 'src/app/core/shared/pipe/filter.pipe';

import { ListNormalWorkforceDevelopmentsComponent } from './list-normal-workforce-developments.component';

describe('ListNormalWorkforceDevelopmentsComponent', () => {
  let component: ListNormalWorkforceDevelopmentsComponent;
  let fixture: ComponentFixture<ListNormalWorkforceDevelopmentsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListNormalWorkforceDevelopmentsComponent, FilterPipe ],
      imports: [ RouterTestingModule, MatDialogModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNormalWorkforceDevelopmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

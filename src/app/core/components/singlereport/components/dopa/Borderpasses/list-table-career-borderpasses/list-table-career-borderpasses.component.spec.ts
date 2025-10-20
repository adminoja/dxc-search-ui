import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListTableCareerBorderpassesComponent } from './list-table-career-borderpasses.component';

describe('ListTableCareerBorderpassesComponent', () => {
  let component: ListTableCareerBorderpassesComponent;
  let fixture: ComponentFixture<ListTableCareerBorderpassesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTableCareerBorderpassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTableCareerBorderpassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

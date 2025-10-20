import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListLeftEmploymentComponent } from './list-left-employment.component';

describe('ListLeftEmploymentComponent', () => {
  let component: ListLeftEmploymentComponent;
  let fixture: ComponentFixture<ListLeftEmploymentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLeftEmploymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLeftEmploymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

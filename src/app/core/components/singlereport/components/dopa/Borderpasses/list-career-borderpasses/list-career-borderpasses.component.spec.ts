import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListCareerBorderpassesComponent } from './list-career-borderpasses.component';

describe('ListCareerBorderpassesComponent', () => {
  let component: ListCareerBorderpassesComponent;
  let fixture: ComponentFixture<ListCareerBorderpassesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCareerBorderpassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCareerBorderpassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

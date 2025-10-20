import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListCareerRequestorsComponent } from './list-career-requestors.component';

describe('ListCareerRequestorsComponent', () => {
  let component: ListCareerRequestorsComponent;
  let fixture: ComponentFixture<ListCareerRequestorsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCareerRequestorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCareerRequestorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

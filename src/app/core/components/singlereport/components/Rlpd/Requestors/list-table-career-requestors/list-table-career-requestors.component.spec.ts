import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListTableCareerRequestorsComponent } from './list-table-career-requestors.component';

describe('ListTableCareerRequestorsComponent', () => {
  let component: ListTableCareerRequestorsComponent;
  let fixture: ComponentFixture<ListTableCareerRequestorsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTableCareerRequestorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTableCareerRequestorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

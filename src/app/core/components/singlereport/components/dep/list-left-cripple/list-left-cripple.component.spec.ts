import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListLeftCrippleComponent } from './list-left-cripple.component';

describe('ListLeftCrippleComponent', () => {
  let component: ListLeftCrippleComponent;
  let fixture: ComponentFixture<ListLeftCrippleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLeftCrippleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLeftCrippleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

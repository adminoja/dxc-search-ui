import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListNormalCrippleComponent } from './list-normal-cripple.component';

describe('ListNormalCrippleComponent', () => {
  let component: ListNormalCrippleComponent;
  let fixture: ComponentFixture<ListNormalCrippleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListNormalCrippleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNormalCrippleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SinglereportMenuComponent } from './singlereport-menu.component';

describe('SinglereportMenuComponent', () => {
  let component: SinglereportMenuComponent;
  let fixture: ComponentFixture<SinglereportMenuComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglereportMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglereportMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MenuSinglereportComponent } from './menu-singlereport.component';

describe('MenuSinglereportComponent', () => {
  let component: MenuSinglereportComponent;
  let fixture: ComponentFixture<MenuSinglereportComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuSinglereportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuSinglereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

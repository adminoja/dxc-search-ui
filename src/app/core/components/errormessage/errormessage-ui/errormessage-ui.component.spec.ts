import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ErrormessageUiComponent } from './errormessage-ui.component';

describe('ErrormessageUiComponent', () => {
  let component: ErrormessageUiComponent;
  let fixture: ComponentFixture<ErrormessageUiComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrormessageUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrormessageUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

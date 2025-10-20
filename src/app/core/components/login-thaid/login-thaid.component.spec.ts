import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginThaidComponent } from './login-thaid.component';

describe('LoginThaidComponent', () => {
  let component: LoginThaidComponent;
  let fixture: ComponentFixture<LoginThaidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginThaidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginThaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

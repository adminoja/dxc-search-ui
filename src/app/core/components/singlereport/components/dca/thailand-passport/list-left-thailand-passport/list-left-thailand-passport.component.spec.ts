import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListLeftThailandPassportComponent } from './list-left-thailand-passport.component';

describe('ListLeftThailandPassportComponent', () => {
  let component: ListLeftThailandPassportComponent;
  let fixture: ComponentFixture<ListLeftThailandPassportComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLeftThailandPassportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLeftThailandPassportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

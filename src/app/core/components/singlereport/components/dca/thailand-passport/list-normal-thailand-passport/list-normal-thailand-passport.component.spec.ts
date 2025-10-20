import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListNormalThailandPassportComponent } from './list-normal-thailand-passport.component';

describe('ListNormalThailandPassportComponent', () => {
  let component: ListNormalThailandPassportComponent;
  let fixture: ComponentFixture<ListNormalThailandPassportComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListNormalThailandPassportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNormalThailandPassportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

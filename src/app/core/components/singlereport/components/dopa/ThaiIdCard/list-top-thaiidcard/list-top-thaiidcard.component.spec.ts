import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListTopThaiidcardComponent } from './list-top-thaiidcard.component';

describe('ListTopThaiidcardComponent', () => {
  let component: ListTopThaiidcardComponent;
  let fixture: ComponentFixture<ListTopThaiidcardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTopThaiidcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTopThaiidcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

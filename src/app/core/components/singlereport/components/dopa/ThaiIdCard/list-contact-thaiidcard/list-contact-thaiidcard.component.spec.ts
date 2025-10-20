import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListContactThaiidcardComponent } from './list-contact-thaiidcard.component';

describe('ListContactThaiidcardComponent', () => {
  let component: ListContactThaiidcardComponent;
  let fixture: ComponentFixture<ListContactThaiidcardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListContactThaiidcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListContactThaiidcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

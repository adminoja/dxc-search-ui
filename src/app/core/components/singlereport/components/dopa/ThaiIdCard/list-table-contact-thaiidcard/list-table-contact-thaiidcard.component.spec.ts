import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListTableContactThaiidcardComponent } from './list-table-contact-thaiidcard.component';

describe('ListTableContactThaiidcardComponent', () => {
  let component: ListTableContactThaiidcardComponent;
  let fixture: ComponentFixture<ListTableContactThaiidcardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTableContactThaiidcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTableContactThaiidcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

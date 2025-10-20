import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListTableThaiidcardComponent } from './list-table-thaiidcard.component';

describe('ListTableThaiidcardComponent', () => {
  let component: ListTableThaiidcardComponent;
  let fixture: ComponentFixture<ListTableThaiidcardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTableThaiidcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTableThaiidcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

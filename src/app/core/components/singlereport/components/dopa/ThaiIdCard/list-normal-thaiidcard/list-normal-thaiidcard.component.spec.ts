import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { FilterPipe } from 'src/app/core/shared/pipe/filter.pipe';
import { ConverseNullPipe } from 'src/app/core/shared/pipe/probationer/converse-null.pipe';
import { ThaiDatePipe } from 'src/app/core/shared/pipe/thaidate.pipe';

import { ListNormalThaiidcardComponent } from './list-normal-thaiidcard.component';

describe('ListNormalThaiidcardComponent', () => {
  let component: ListNormalThaiidcardComponent;
  let fixture: ComponentFixture<ListNormalThaiidcardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListNormalThaiidcardComponent, FilterPipe, ThaiDatePipe, ConverseNullPipe ],
      imports: [ RouterTestingModule, MatDialogModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNormalThaiidcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { FilterPipe } from 'src/app/core/shared/pipe/filter.pipe';
import { ThaiDatePipe } from 'src/app/core/shared/pipe/thaidate.pipe';

import { ListNormalAliensComponent } from './list-normal-aliens.component';

describe('ListNormalAliensComponent', () => {
  let component: ListNormalAliensComponent;
  let fixture: ComponentFixture<ListNormalAliensComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListNormalAliensComponent, FilterPipe, ThaiDatePipe ],
      imports: [ RouterTestingModule, MatDialogModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNormalAliensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

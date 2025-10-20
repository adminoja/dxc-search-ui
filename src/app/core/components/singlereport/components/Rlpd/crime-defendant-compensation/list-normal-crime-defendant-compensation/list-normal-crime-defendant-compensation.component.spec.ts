import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material';
import { ConverseDatePipe } from 'src/app/core/shared/pipe/converse-date.pipe';
import { FilterPipe } from 'src/app/core/shared/pipe/filter.pipe';

import { ListNormalCrimeDefendantCompensationComponent } from './list-normal-crime-defendant-compensation.component';

describe('ListNormalCrimeDefendantCompensationComponent', () => {
  let component: ListNormalCrimeDefendantCompensationComponent;
  let fixture: ComponentFixture<ListNormalCrimeDefendantCompensationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListNormalCrimeDefendantCompensationComponent, FilterPipe, ConverseDatePipe ],
      imports: [ MatDialogModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNormalCrimeDefendantCompensationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

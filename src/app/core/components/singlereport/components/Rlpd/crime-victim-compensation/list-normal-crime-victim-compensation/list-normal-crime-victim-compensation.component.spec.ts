import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ConverseDatePipe } from 'src/app/core/shared/pipe/converse-date.pipe';
import { FilterPipe } from 'src/app/core/shared/pipe/filter.pipe';

import { ListNormalCrimeVictimCompensationComponent } from './list-normal-crime-victim-compensation.component';

describe('ListNormalCrimeVictimCompensationComponent', () => {
  let component: ListNormalCrimeVictimCompensationComponent;
  let fixture: ComponentFixture<ListNormalCrimeVictimCompensationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListNormalCrimeVictimCompensationComponent, FilterPipe, ConverseDatePipe ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNormalCrimeVictimCompensationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

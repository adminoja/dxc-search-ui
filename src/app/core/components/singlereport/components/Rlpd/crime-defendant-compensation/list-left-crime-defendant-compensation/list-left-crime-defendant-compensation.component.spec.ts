import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ModalComponent } from 'src/app/core/shared/services/components/modal/modal.component';

import { ListLeftCrimeDefendantCompensationComponent } from './list-left-crime-defendant-compensation.component';

describe('ListLeftCrimeDefendantCompensationComponent', () => {
  let component: ListLeftCrimeDefendantCompensationComponent;
  let fixture: ComponentFixture<ListLeftCrimeDefendantCompensationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLeftCrimeDefendantCompensationComponent, ModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLeftCrimeDefendantCompensationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

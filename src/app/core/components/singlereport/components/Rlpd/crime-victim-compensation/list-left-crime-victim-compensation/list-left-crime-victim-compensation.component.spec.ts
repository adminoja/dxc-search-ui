import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ModalComponent } from 'src/app/core/shared/services/components/modal/modal.component';

import { ListLeftCrimeVictimCompensationComponent } from './list-left-crime-victim-compensation.component';

describe('ListLeftCrimeVictimCompensationComponent', () => {
  let component: ListLeftCrimeVictimCompensationComponent;
  let fixture: ComponentFixture<ListLeftCrimeVictimCompensationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLeftCrimeVictimCompensationComponent, ModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLeftCrimeVictimCompensationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

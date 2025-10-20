import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FilterPipe } from 'src/app/core/shared/pipe/filter.pipe';
import { ModalComponent } from 'src/app/core/shared/services/components/modal/modal.component';

import { ListLeftNarcoticOffenderComponent } from './list-left-narcotic-offender.component';

describe('ListLeftNarcoticOffenderComponent', () => {
  let component: ListLeftNarcoticOffenderComponent;
  let fixture: ComponentFixture<ListLeftNarcoticOffenderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLeftNarcoticOffenderComponent, FilterPipe, ModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLeftNarcoticOffenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

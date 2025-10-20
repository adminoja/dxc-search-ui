import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FilterPipe } from 'src/app/core/shared/pipe/filter.pipe';
import { ModalComponent } from 'src/app/core/shared/services/components/modal/modal.component';

import { ListLeftCriminalComponent } from './list-left-criminal.component';

describe('ListLeftCriminalComponent', () => {
  let component: ListLeftCriminalComponent;
  let fixture: ComponentFixture<ListLeftCriminalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLeftCriminalComponent, FilterPipe, ModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLeftCriminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

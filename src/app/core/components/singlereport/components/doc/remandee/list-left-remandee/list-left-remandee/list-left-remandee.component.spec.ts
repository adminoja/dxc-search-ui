import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FilterPipe } from 'src/app/core/shared/pipe/filter.pipe';
import { ModalComponent } from 'src/app/core/shared/services/components/modal/modal.component';

import { ListLeftRemandeeComponent } from './list-left-remandee.component';

describe('ListLeftRemandeeComponent', () => {
  let component: ListLeftRemandeeComponent;
  let fixture: ComponentFixture<ListLeftRemandeeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLeftRemandeeComponent, ModalComponent, FilterPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLeftRemandeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

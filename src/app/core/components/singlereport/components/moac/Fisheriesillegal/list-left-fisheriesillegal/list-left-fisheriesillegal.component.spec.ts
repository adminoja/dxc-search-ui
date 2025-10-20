import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FilterPipe } from 'src/app/core/shared/pipe/filter.pipe';

import { ListLeftFisheriesillegalComponent } from './list-left-fisheriesillegal.component';

describe('ListLeftFisheriesillegalComponent', () => {
  let component: ListLeftFisheriesillegalComponent;
  let fixture: ComponentFixture<ListLeftFisheriesillegalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLeftFisheriesillegalComponent, FilterPipe ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLeftFisheriesillegalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FilterPipe } from 'src/app/core/shared/pipe/filter.pipe';

import { ListLeftNewBornBabiesComponent } from './list-left-new-born-babies.component';

describe('ListLeftNewBornBabiesComponent', () => {
  let component: ListLeftNewBornBabiesComponent;
  let fixture: ComponentFixture<ListLeftNewBornBabiesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLeftNewBornBabiesComponent, FilterPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLeftNewBornBabiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

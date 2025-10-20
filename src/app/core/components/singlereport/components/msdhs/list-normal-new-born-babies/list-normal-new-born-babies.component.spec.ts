import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material';
import { FilterPipe } from 'src/app/core/shared/pipe/filter.pipe';

import { ListNormalNewBornBabiesComponent } from './list-normal-new-born-babies.component';

describe('ListNormalNewBornBabiesComponent', () => {
  let component: ListNormalNewBornBabiesComponent;
  let fixture: ComponentFixture<ListNormalNewBornBabiesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListNormalNewBornBabiesComponent, FilterPipe ],
      imports: [ MatDialogModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNormalNewBornBabiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

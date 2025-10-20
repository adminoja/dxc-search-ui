import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material';
import { FilterPipe } from 'src/app/core/shared/pipe/filter.pipe';

import { ListNormalMissingPersonCaseComponent } from './list-normal-missing-person-case.component';

describe('ListNormalMissingPersonCaseComponent', () => {
  let component: ListNormalMissingPersonCaseComponent;
  let fixture: ComponentFixture<ListNormalMissingPersonCaseComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListNormalMissingPersonCaseComponent, FilterPipe ],
      imports: [ MatDialogModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNormalMissingPersonCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

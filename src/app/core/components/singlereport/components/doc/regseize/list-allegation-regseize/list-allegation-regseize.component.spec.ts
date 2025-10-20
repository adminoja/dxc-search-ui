import { Overlay } from '@angular/cdk/overlay';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ConverseDatePipe } from 'src/app/core/shared/pipe/converse-date.pipe';
import { FilterPipe } from 'src/app/core/shared/pipe/filter.pipe';
import { ListAllegationRegseizeComponent } from '../list-allegation-regseize/list-allegation-regseize.component';
import { MatDialogModule } from '@angular/material/dialog';

describe('ListAllegationRegseizeComponent', () => {
  let component: ListAllegationRegseizeComponent;
  let fixture: ComponentFixture<ListAllegationRegseizeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAllegationRegseizeComponent, FilterPipe, ConverseDatePipe ],
      imports: [ MatDialogModule ],
      // providers: [ MatDialog ]  <-- ไม่ต้องใส่
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAllegationRegseizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

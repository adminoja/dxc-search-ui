import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { CifsMissingPersonMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-cifs-missing-person/dxc-model-cifs-missing_person.interface';
import { ConverseDatePipe } from 'src/app/core/shared/pipe/converse-date.pipe';
import { FilterPipe } from 'src/app/core/shared/pipe/filter.pipe';
import { ListNormalMissingPersonComponent } from './list-normal-missing-person.component';


describe('ListNormalMissingPersonComponent', () => {
  let component: ListNormalMissingPersonComponent;
  let fixture: ComponentFixture<ListNormalMissingPersonComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListNormalMissingPersonComponent, FilterPipe, ConverseDatePipe ],
      imports: [ RouterTestingModule, MatDialogModule ],
      providers: [CifsMissingPersonMetadata]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNormalMissingPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

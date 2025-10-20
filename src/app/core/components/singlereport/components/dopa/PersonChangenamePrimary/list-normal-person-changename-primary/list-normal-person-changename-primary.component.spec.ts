import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material';
import { DopaMoiPersonChangenamePrimaryMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-dopa-moi-person-changename-primary/dxc-model-dopa-moi-person-changename-primary.interface';
import { FilterPipe } from 'src/app/core/shared/pipe/filter.pipe';
import { ThaiDatePipe } from 'src/app/core/shared/pipe/thaidate.pipe';

import { ListNormalPersonChangenamePrimaryComponent } from './list-normal-person-changename-primary.component';

describe('ListNormalPersonChangenamePrimaryComponent', () => {
  let component: ListNormalPersonChangenamePrimaryComponent;
  let fixture: ComponentFixture<ListNormalPersonChangenamePrimaryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListNormalPersonChangenamePrimaryComponent, FilterPipe, ThaiDatePipe ],
      imports: [ MatDialogModule ],
      providers: [ DopaMoiPersonChangenamePrimaryMetadata ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNormalPersonChangenamePrimaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material';
import { DopaMoiPersonChangelastnameMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-dopa-moi-dopa-person-changelastname/dxc-model-dopa-moi-dopa-person-changelastname.interface';
import { FilterPipe } from 'src/app/core/shared/pipe/filter.pipe';
import { ThaiDatePipe } from 'src/app/core/shared/pipe/thaidate.pipe';

import { ListNormalPersonChangelastnameComponent } from './list-normal-person-changelastname.component';

describe('ListNormalPersonChangelastnameComponent', () => {
  let component: ListNormalPersonChangelastnameComponent;
  let fixture: ComponentFixture<ListNormalPersonChangelastnameComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListNormalPersonChangelastnameComponent, FilterPipe, ThaiDatePipe ],
      imports: [ MatDialogModule ],
      providers: [ DopaMoiPersonChangelastnameMetadata ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNormalPersonChangelastnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

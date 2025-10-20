import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { DopaMoiPersonChangelastnameMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-dopa-moi-dopa-person-changelastname/dxc-model-dopa-moi-dopa-person-changelastname.interface';
import { FilterPipe } from 'src/app/core/shared/pipe/filter.pipe';

import { ListLeftPersonChangelastnameComponent } from './list-left-person-changelastname.component';

describe('ListLeftPersonChangelastnameComponent', () => {
  let component: ListLeftPersonChangelastnameComponent;
  let fixture: ComponentFixture<ListLeftPersonChangelastnameComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLeftPersonChangelastnameComponent, FilterPipe ],
      providers: [ DopaMoiPersonChangelastnameMetadata ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLeftPersonChangelastnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

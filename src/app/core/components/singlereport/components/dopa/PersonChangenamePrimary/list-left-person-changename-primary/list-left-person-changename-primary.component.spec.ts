import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { DopaMoiPersonChangenamePrimaryMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-dopa-moi-person-changename-primary/dxc-model-dopa-moi-person-changename-primary.interface';
import { FilterPipe } from 'src/app/core/shared/pipe/filter.pipe';

import { ListLeftPersonChangenamePrimaryComponent } from './list-left-person-changename-primary.component';

describe('ListLeftPersonChangenamePrimaryComponent', () => {
  let component: ListLeftPersonChangenamePrimaryComponent;
  let fixture: ComponentFixture<ListLeftPersonChangenamePrimaryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLeftPersonChangenamePrimaryComponent, FilterPipe ],
      providers: [ DopaMoiPersonChangenamePrimaryMetadata ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLeftPersonChangenamePrimaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

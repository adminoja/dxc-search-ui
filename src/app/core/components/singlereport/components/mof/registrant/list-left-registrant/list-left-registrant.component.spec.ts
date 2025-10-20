import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MofRegistrantMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-mof-registrant/dxc-model-mof-registrant.interface';
import { FilterPipe } from 'src/app/core/shared/pipe/filter.pipe';

import { ListLeftRegistrantComponent } from './list-left-registrant.component';

describe('ListLeftRegistrantComponent', () => {
  let component: ListLeftRegistrantComponent;
  let fixture: ComponentFixture<ListLeftRegistrantComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLeftRegistrantComponent, FilterPipe ],
      providers: [ MofRegistrantMetadata ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLeftRegistrantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

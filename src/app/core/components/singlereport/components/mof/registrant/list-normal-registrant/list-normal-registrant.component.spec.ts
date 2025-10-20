import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { MofRegistrantMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-mof-registrant/dxc-model-mof-registrant.interface';
import { FilterPipe } from 'src/app/core/shared/pipe/filter.pipe';

import { ListNormalRegistrantComponent } from './list-normal-registrant.component';

describe('ListNormalRegistrantComponent', () => {
  let component: ListNormalRegistrantComponent;
  let fixture: ComponentFixture<ListNormalRegistrantComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListNormalRegistrantComponent, FilterPipe ],
      imports: [ RouterTestingModule, MatDialogModule ],
      providers: [ MofRegistrantMetadata ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNormalRegistrantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

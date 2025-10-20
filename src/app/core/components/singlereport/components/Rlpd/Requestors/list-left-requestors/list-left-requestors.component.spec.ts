import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RlpdRequestorsMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-rlpd-requestors/dxc-model-rlpd-requestors.interface';
import { FilterPipe } from 'src/app/core/shared/pipe/filter.pipe';
import { ModalComponent } from 'src/app/core/shared/services/components/modal/modal.component';

import { ListLeftRequestorsComponent } from './list-left-requestors.component';

describe('ListLeftRequestorsComponent', () => {
  let component: ListLeftRequestorsComponent;
  let fixture: ComponentFixture<ListLeftRequestorsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLeftRequestorsComponent, ModalComponent, FilterPipe ],
      providers: [RlpdRequestorsMetadata]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLeftRequestorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

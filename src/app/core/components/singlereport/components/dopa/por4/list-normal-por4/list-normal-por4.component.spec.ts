import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { DopaMoiPor4Metadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-dopa-moi-por4/dxc-model-dopa-moi-por4.interface';
import { FilterPipe } from 'src/app/core/shared/pipe/filter.pipe';

import { ListNormalPor4Component } from './list-normal-por4.component';

describe('ListNormalPor4Component', () => {
  let component: ListNormalPor4Component;
  let fixture: ComponentFixture<ListNormalPor4Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListNormalPor4Component, FilterPipe ],
      imports: [ RouterTestingModule, MatDialogModule ],
      providers: [ DopaMoiPor4Metadata ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNormalPor4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

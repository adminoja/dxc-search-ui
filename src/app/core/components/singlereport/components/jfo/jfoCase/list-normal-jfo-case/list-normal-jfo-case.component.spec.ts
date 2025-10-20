import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { JfoJfoCaseMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-jfo-jfo-case/dxc-model-jfo-jfo-case.interface';
import { FilterPipe } from 'src/app/core/shared/pipe/filter.pipe';

import { ListNormalJfoCaseComponent } from './list-normal-jfo-case.component';

describe('ListNormalJfoCaseComponent', () => {
  let component: ListNormalJfoCaseComponent;
  let fixture: ComponentFixture<ListNormalJfoCaseComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListNormalJfoCaseComponent, FilterPipe ],
      imports: [ RouterTestingModule, MatDialogModule ],
      providers: [ JfoJfoCaseMetadata ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNormalJfoCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

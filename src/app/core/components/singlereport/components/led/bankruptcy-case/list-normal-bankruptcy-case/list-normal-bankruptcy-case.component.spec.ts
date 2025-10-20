import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { LedBankruptcyCaseMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-led-bankruptcy-case/dxc-model-led-bankruptcy-case.interface';
import { FilterPipe } from 'src/app/core/shared/pipe/filter.pipe';

import { ListNormalBankruptcyCaseComponent } from './list-normal-bankruptcy-case.component';

describe('ListNormalBankruptcyCaseComponent', () => {
  let component: ListNormalBankruptcyCaseComponent;
  let fixture: ComponentFixture<ListNormalBankruptcyCaseComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListNormalBankruptcyCaseComponent, FilterPipe ],
      imports: [ RouterTestingModule, MatDialogModule ],
      providers: [LedBankruptcyCaseMetadata]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNormalBankruptcyCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

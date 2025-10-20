import { DxcUi0015Component } from "./dxc-ui-0015.component";
import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientModule } from "@angular/common/http";
import { DxcUi0021Component } from "../dxc-ui-0021/dxc-ui-0021.component";
import { HeaderComponent } from "../../singlereport/header/header.component";
import { FooterComponent } from "../../singlereport/footer/footer.component";
import { FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FilterPipe } from "src/app/core/shared/pipe/filter.pipe";
import { CountlengthPipe } from 'src/app/core/shared/pipe/countlength.pipe';
import { ErrormessageUiComponent } from '../../errormessage/errormessage-ui/errormessage-ui.component';
import { ObjectvaluePipe } from 'src/app/core/shared/pipe/objectvalue.pipe';
import { Dxcui0006Component } from '../../reason/dxcui0006/dxcui0006.component';
import { MatDialog, MatDialogModule } from '@angular/material';

describe('DxcUi0015Component', () => {
  let component: DxcUi0015Component;
  let fixture: ComponentFixture<DxcUi0015Component>;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DxcUi0015Component, DxcUi0021Component, HeaderComponent, FooterComponent, FilterPipe, CountlengthPipe,
        ErrormessageUiComponent, ObjectvaluePipe, Dxcui0006Component],
      imports: [RouterTestingModule, HttpClientModule, FormsModule, MatDialogModule, ReactiveFormsModule],
      providers: [
        MatDialog
      ]
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(DxcUi0015Component);
    component = fixture.componentInstance;

  });
  it('should create', () => {
    expect(component).toBeDefined();
  });
});

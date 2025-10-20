import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DxcModelDopaMoiPersonChangenamePrimaryComponent } from './dxc-model-dopa-moi-person-changename-primary.component';

describe('DxcModelDopaMoiPersonChangenamePrimaryComponent', () => {
  let component: DxcModelDopaMoiPersonChangenamePrimaryComponent;
  let fixture: ComponentFixture<DxcModelDopaMoiPersonChangenamePrimaryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DxcModelDopaMoiPersonChangenamePrimaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DxcModelDopaMoiPersonChangenamePrimaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

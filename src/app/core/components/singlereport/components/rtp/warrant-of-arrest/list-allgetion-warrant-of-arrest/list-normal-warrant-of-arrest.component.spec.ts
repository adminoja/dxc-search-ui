import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNormalWarrantOfArrestComponent } from './list-normal-warrant-of-arrest.component';

describe('ListNormalWarrantOfArrestComponent', () => {
  let component: ListNormalWarrantOfArrestComponent;
  let fixture: ComponentFixture<ListNormalWarrantOfArrestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListNormalWarrantOfArrestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNormalWarrantOfArrestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

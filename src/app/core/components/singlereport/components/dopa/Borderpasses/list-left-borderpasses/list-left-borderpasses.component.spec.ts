import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListLeftBorderpassesComponent } from './list-left-borderpasses.component';

describe('ListLeftBorderpassesComponent', () => {
  let component: ListLeftBorderpassesComponent;
  let fixture: ComponentFixture<ListLeftBorderpassesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLeftBorderpassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLeftBorderpassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

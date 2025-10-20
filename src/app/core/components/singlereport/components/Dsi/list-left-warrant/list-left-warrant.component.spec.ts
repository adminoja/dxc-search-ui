import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListLeftWarrantComponent } from './list-left-warrant.component';

describe('ListLeftWarrantComponent', () => {
  let component: ListLeftWarrantComponent;
  let fixture: ComponentFixture<ListLeftWarrantComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLeftWarrantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLeftWarrantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

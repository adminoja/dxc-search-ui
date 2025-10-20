import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListContactRemandeeComponent } from './list-contact-remandee.component';

describe('ListContactRemandeeComponent', () => {
  let component: ListContactRemandeeComponent;
  let fixture: ComponentFixture<ListContactRemandeeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListContactRemandeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListContactRemandeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

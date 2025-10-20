import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListTableContactRemandeeComponent } from './list-table-contact-remandee.component';

describe('ListTableContactRemandeeComponent', () => {
  let component: ListTableContactRemandeeComponent;
  let fixture: ComponentFixture<ListTableContactRemandeeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTableContactRemandeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTableContactRemandeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

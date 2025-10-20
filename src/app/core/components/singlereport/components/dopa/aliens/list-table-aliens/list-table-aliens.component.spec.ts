import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListTableAliensComponent } from './list-table-aliens.component';

describe('ListTableAliensComponent', () => {
  let component: ListTableAliensComponent;
  let fixture: ComponentFixture<ListTableAliensComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTableAliensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTableAliensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

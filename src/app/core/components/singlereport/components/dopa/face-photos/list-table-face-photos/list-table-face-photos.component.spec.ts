import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListTableFacePhotosComponent } from './list-table-face-photos.component';

describe('ListTableFacePhotosComponent', () => {
  let component: ListTableFacePhotosComponent;
  let fixture: ComponentFixture<ListTableFacePhotosComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTableFacePhotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTableFacePhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

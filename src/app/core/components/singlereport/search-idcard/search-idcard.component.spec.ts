import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SearchIdcardComponent } from './search-idcard.component';

describe('SearchIdcardComponent', () => {
  let component: SearchIdcardComponent;
  let fixture: ComponentFixture<SearchIdcardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchIdcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchIdcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

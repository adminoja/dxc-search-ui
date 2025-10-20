import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SearchTimelineComponent } from './search-timeline.component';

describe('SearchTimelineComponent', () => {
  let component: SearchTimelineComponent;
  let fixture: ComponentFixture<SearchTimelineComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchTimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FilterPipe } from 'src/app/core/shared/pipe/filter.pipe';

import { ListLeftEducationbackgroundesComponent } from './list-left-educationbackgroundes.component';

describe('ListLeftEducationbackgroundesComponent', () => {
  let component: ListLeftEducationbackgroundesComponent;
  let fixture: ComponentFixture<ListLeftEducationbackgroundesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLeftEducationbackgroundesComponent, FilterPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLeftEducationbackgroundesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

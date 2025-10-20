import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DopaMoiFacePhotosMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-dopa-moi-face-photos/dxc-model-dopa-moi-face-photos.interface';
import { FilterPipe } from 'src/app/core/shared/pipe/filter.pipe';

import { ListTopFacePhotosComponent } from './list-top-face-photos.component';

describe('ListTopFacePhotosComponent', () => {
  let component: ListTopFacePhotosComponent;
  let fixture: ComponentFixture<ListTopFacePhotosComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTopFacePhotosComponent, FilterPipe ],
      imports: [ RouterTestingModule ],
      providers: [DopaMoiFacePhotosMetadata]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTopFacePhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

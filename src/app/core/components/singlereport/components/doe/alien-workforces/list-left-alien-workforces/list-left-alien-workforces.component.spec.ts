import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DoeMoiAlienWorkforcesMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-doe-moi-alien-workforces/dxc-model-doe-moi-alien-workforces.interface';
import { FilterPipe } from 'src/app/core/shared/pipe/filter.pipe';

import { ListLeftAlienWorkforcesComponent } from './list-left-alien-workforces.component';

describe('ListLeftAlienWorkforcesComponent', () => {
  let component: ListLeftAlienWorkforcesComponent;
  let fixture: ComponentFixture<ListLeftAlienWorkforcesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLeftAlienWorkforcesComponent, FilterPipe ],
      imports: [ RouterTestingModule ],
      providers: [ DoeMoiAlienWorkforcesMetadata ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLeftAlienWorkforcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

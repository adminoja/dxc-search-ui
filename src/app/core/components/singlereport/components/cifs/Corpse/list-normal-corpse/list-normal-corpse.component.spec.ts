import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material';
import { CifsCorpseMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-cifs-corpse/dxc-model-cifs-corpse.interface';
import { FilterPipe } from 'src/app/core/shared/pipe/filter.pipe';

import { ListNormalCorpseComponent } from './list-normal-corpse.component';

describe('ListNormalCorpseComponent', () => {
  let component: ListNormalCorpseComponent;
  let fixture: ComponentFixture<ListNormalCorpseComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListNormalCorpseComponent, FilterPipe ],
      imports: [ MatDialogModule ],
      providers: [ CifsCorpseMetadata ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNormalCorpseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NaccMoiCorruptionAccusedsMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-nacc-moi-corruption-accuseds/dxc-model-nacc-moi-corruption-accuseds.interface';
import { FilterPipe } from 'src/app/core/shared/pipe/filter.pipe';

import { ListLeftCorruptionAccusedsComponent } from './list-left-corruption-accuseds.component';

describe('ListLeftCorruptionAccusedsComponent', () => {
  let component: ListLeftCorruptionAccusedsComponent;
  let fixture: ComponentFixture<ListLeftCorruptionAccusedsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLeftCorruptionAccusedsComponent, FilterPipe ],
      imports: [ RouterTestingModule ],
      providers: [NaccMoiCorruptionAccusedsMetadata]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLeftCorruptionAccusedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

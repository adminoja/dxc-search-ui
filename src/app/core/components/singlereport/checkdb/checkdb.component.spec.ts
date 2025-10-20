import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CheckdbComponent } from './checkdb.component';
import { environment } from '../../../../../environments/environment';
import { NgProgress, NgProgressModule } from '@ngx-progressbar/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink, RouterModule } from '@angular/router';

describe('CheckdbComponent', () => {
  let component: CheckdbComponent;
  let fixture: ComponentFixture<CheckdbComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckdbComponent, HeaderComponent, FooterComponent ],
      // imports: [NgProgressModule.forRoot({
      //   trickleSpeed: 200,
      //   min: 20,
      //   meteor: false
      // }), RouterModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckdbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});

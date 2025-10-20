import { Component, OnInit } from '@angular/core';
import { DoeMoiAlienWorkforcesMetadata } from 'src/app/core/components/localsearch/qmreporttemplate/dxc-model-doe-moi-alien-workforces/dxc-model-doe-moi-alien-workforces.interface';
import { IDxc_Model_Doe_Moi_Alien_Workforces } from 'src/app/core/shared/models/Dxc_Model_Doe_Moi_Alien_Workforces';

@Component({
  selector: 'app-list-left-alien-workforces',
  templateUrl: './list-left-alien-workforces.component.html',
  styleUrls: ['./list-left-alien-workforces.component.scss'],
  providers: [DoeMoiAlienWorkforcesMetadata]
})
export class ListLeftAlienWorkforcesComponent implements OnInit {
  alienWorkforcesResults: IDxc_Model_Doe_Moi_Alien_Workforces[];
  checkalienWorkforcesResults: boolean;

  constructor(private ReportalienWorkforcesResults: DoeMoiAlienWorkforcesMetadata) { }

  ngOnInit() {
    this.ReportalienWorkforcesResults.getSearchData();
    this.alienWorkforcesResults = this.ReportalienWorkforcesResults.$results;
    console.log('this.alienWorkforcesResults');
    console.log(this.alienWorkforcesResults);

    if (this.alienWorkforcesResults.length !== 0) {
      this.checkalienWorkforcesResults = true;
    } else {
      this.checkalienWorkforcesResults = false;
    }
  }

}

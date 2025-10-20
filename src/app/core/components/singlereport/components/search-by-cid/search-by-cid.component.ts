import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-by-cid',
  templateUrl: './search-by-cid.component.html',
  styleUrls: ['./search-by-cid.component.scss']
})
export class SearchByCidComponent implements OnInit {
@Input() citizenCardNumber;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  searchByCid(citizenCardNumber) {
    console.log(citizenCardNumber);
    if (citizenCardNumber === null) {
      citizenCardNumber = '0';
    }
    this.router.navigate(['dxcui0014/dxcui0018/',
      'รายงาน Single Report',
      citizenCardNumber,
      '0', '0',
      '0', '0']
    );
  }

}

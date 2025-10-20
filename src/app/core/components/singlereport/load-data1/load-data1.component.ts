import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-load-data1',
  templateUrl: './load-data1.component.html',
  styleUrls: ['./load-data1.component.scss']
})
export class LoadData1Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  btnSearch_Click() {
  this.router.navigateByUrl('singlereport/loaddata2/กรมคุมประพฤติ');
  }
}

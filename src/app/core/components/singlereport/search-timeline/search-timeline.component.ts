import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-timeline',
  templateUrl: './search-timeline.component.html',
  styleUrls: ['./search-timeline.component.scss']
})
export class SearchTimelineComponent implements OnInit {
  report_name: string;
  constructor(private routeparams: ActivatedRoute,) { 
    this.routeparams.params.subscribe(
      params => this.reportname(params['reportname'])
    );
    console.log(this.report_name);
  }

  ngOnInit() {
  }

  reportname(name: string) {
    this.report_name = name;
  }

}

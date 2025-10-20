import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-permission-denied',
  templateUrl: './permission-denied.component.html',
  styleUrls: ['./permission-denied.component.scss']
})
export class PermissionDeniedComponent implements OnInit {

  constructor(private routeparams: ActivatedRoute) { }

  ngOnInit() {
    
    this.routeparams.params.subscribe(status =>{
      console.log(status)
      if (status.error == '11' || status.error == '22' 
      || status.error == '24' || status.error == '25' 
      || status.error == '21' || status.error == '12') {
        $('#denied-modal').modal('show');
      } else if(status.error == '1') {
        $('#denied2-modal').modal('show');
      } else if(status.error == '7') {
        $('#denied3-modal').modal('show');
      }
      
    })
  }

  logout() {
    localStorage.clear();
  }

}

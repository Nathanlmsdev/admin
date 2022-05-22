import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-venue-add',
  templateUrl: './venue-add.component.html',
  styleUrls: ['./venue-add.component.css']
})
export class VenueAddComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function() {
      $('.select2').select2();
  });
  }

}

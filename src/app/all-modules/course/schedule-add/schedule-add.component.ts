import { Component, OnInit } from "@angular/core";
declare var $: any;

@Component({
  selector: "app-schedule-add",
  templateUrl: "./schedule-add.component.html",
  styleUrls: ["./schedule-add.component.css"],
})
export class ScheduleAddComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    $(document).ready(function () {
      $(".select2").select2();
    });
  }
}

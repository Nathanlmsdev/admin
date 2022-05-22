import { Component, OnInit } from "@angular/core";
declare var $: any;

@Component({
  selector: "app-assessment-add",
  templateUrl: "./assessment-add.component.html",
  styleUrls: ["./assessment-add.component.css"],
})
export class AssessmentAddComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    $(document).ready(function () {
      $(".select2").select2();
    });
  }
}

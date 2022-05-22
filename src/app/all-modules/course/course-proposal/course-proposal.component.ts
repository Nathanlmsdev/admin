import { Component, OnInit } from "@angular/core";
declare var $: any;
@Component({
  selector: "app-course-proposal",
  templateUrl: "./course-proposal.component.html",
  styleUrls: ["./course-proposal.component.css"],
})
export class CourseProposalComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    $(document).ready(function () {
      $(".select2").select2();
    });
  }
}

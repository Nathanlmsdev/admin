import { Component, OnInit } from "@angular/core";
declare var $: any;

@Component({
  selector: "app-lesson-add",
  templateUrl: "./lesson-add.component.html",
  styleUrls: ["./lesson-add.component.css"],
})
export class LessonAddComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    $(document).ready(function () {
      $(".select2").select2();
    });
  }
}

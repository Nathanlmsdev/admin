import { Component, OnInit, ViewChild, OnDestroy } from "@angular/core";
import { DataTableDirective } from "angular-datatables";
import { Subject } from "rxjs";
declare var $: any;

@Component({
  selector: "app-attendance-course-end",
  templateUrl: "./attendance-course-end.component.html",
  styleUrls: ["./attendance-course-end.component.css"],
})
export class AttendanceCourseEndComponent implements OnInit {
  @ViewChild(DataTableDirective, { static: true })
  public dtElement: DataTableDirective;
  public dtOptions: DataTables.Settings = {};
  public dtTrigger: Subject<any> = new Subject();
  constructor() {}

  ngOnInit() {
    // for data table configuration
    this.dtOptions = {
      pageLength: 10,
    };

    $(document).ready(function () {
      $(".select2").select2();
    });
  }
}

import { Component, OnInit, ViewChild } from "@angular/core";
import { DataTableDirective } from "angular-datatables";
import { Subject } from "rxjs";
@Component({
  selector: "app-assessment-list",
  templateUrl: "./assessment-list.component.html",
  styleUrls: ["./assessment-list.component.css"],
})
export class AssessmentListComponent implements OnInit {
  @ViewChild(DataTableDirective, { static: true })
  public dtElement: DataTableDirective;
  public dtOptions: DataTables.Settings = {};
  public dtTrigger: Subject<any> = new Subject();
  constructor() {}

  ngOnInit() {
    // for data table configuration
    this.dtOptions = {
      // ... skipped ...
      pageLength: 10,
      // dom: "lrtip",
    };
  }
}

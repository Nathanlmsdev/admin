import { Component, OnInit, ViewChild } from "@angular/core";
import { DataTableDirective } from "angular-datatables";
import { Subject } from "rxjs";
declare var $: any;
@Component({
  selector: "app-assessment-plan",
  templateUrl: "./assessment-plan.component.html",
  styleUrls: ["./assessment-plan.component.css"],
})
export class AssessmentPlanComponent implements OnInit {
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

    $(".select2").select2();
  }
}

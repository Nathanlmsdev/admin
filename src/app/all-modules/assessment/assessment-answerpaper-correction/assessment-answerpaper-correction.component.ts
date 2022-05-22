import { Component, OnInit, ViewChild } from "@angular/core";
import { DataTableDirective } from "angular-datatables";
import { Subject } from "rxjs";
declare var $: any;

@Component({
  selector: "app-assessment-answerpaper-correction",
  templateUrl: "./assessment-answerpaper-correction.component.html",
  styleUrls: ["./assessment-answerpaper-correction.component.css"],
})
export class AssessmentAnswerpaperCorrectionComponent implements OnInit {
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

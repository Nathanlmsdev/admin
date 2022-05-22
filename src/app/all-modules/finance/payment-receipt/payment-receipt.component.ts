import { Component, OnInit, ViewChild } from "@angular/core";
import { DataTableDirective } from "angular-datatables";
import { Subject } from "rxjs";
declare var $: any;

@Component({
  selector: "app-payment-receipt",
  templateUrl: "./payment-receipt.component.html",
  styleUrls: ["./payment-receipt.component.css"],
})
export class PaymentReceiptComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

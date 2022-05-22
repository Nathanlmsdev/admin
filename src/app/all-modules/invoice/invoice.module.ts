import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { InvoiceRoutingModule } from "./invoice-routing.module";
import { InvoiceComponent } from "./invoice.component";
import { DataTablesModule } from "angular-datatables";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { InvoiceMainComponent } from './invoice-main/invoice-main.component';
import { InvoiceMakepaymentComponent } from './invoice-makepayment/invoice-makepayment.component';
import { PaymentHistoryComponent } from './payment-history/payment-history.component';
import { GrantListComponent } from './grant-list/grant-list.component';

@NgModule({
  declarations: [InvoiceComponent, InvoiceMainComponent, InvoiceMakepaymentComponent, PaymentHistoryComponent, GrantListComponent],
  imports: [
    CommonModule,
    InvoiceRoutingModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class InvoiceModule {}

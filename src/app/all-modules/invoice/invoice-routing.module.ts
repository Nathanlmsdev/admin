import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GrantListComponent } from "./grant-list/grant-list.component";
import { InvoiceMainComponent } from "./invoice-main/invoice-main.component";
import { InvoiceMakepaymentComponent } from "./invoice-makepayment/invoice-makepayment.component";
import { InvoiceComponent } from "./invoice.component";
import { PaymentHistoryComponent } from "./payment-history/payment-history.component";

const routes: Routes = [
  {
    path: "",
    component: InvoiceComponent,
    children: [
      { path: "invoice-list", component: InvoiceMainComponent },
      { path: "making-payments", component: InvoiceMakepaymentComponent },
      { path: "payment-history", component: PaymentHistoryComponent },
      { path: "grant-list", component: GrantListComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvoiceRoutingModule {}

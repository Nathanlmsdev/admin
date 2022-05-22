import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ApprovedSupplierVendorListComponent } from "./approved-supplier-vendor-list/approved-supplier-vendor-list.component";
import { FinanceComponent } from "./finance.component";
import { GrantSubmissionHistoryComponent } from "./grant-submission-history/grant-submission-history.component";
import { GrantSubmissionComponent } from "./grant-submission/grant-submission.component";
import { InvoiceHistoryComponent } from "./invoice-history/invoice-history.component";
import { InvoiceManualModeComponent } from "./invoice-manual-mode/invoice-manual-mode.component";
import { MakePaymentsComponent } from "./make-payments/make-payments.component";
import { MakingPaymentsReceivedComponent } from "./making-payments-received/making-payments-received.component";
import { PaymentReceiptComponent } from "./payment-receipt/payment-receipt.component";
import { PaymentReceivedHistoryComponent } from "./payment-received-history/payment-received-history.component";
import { PaymentsMadeListComponent } from "./payments-made-list/payments-made-list.component";
import { ReviewPaymentsReceivedComponent } from "./review-payments-received/review-payments-received.component";
import { SalarySlipComponent } from "./salary-slip/salary-slip.component";
import { SupplierVendorManagementComponent } from "./supplier-vendor-management/supplier-vendor-management.component";

const routes: Routes = [
  {
    path: "",
    component: FinanceComponent,
    children: [
      { path: "invoice-manual-mode", component: InvoiceManualModeComponent },
      {
        path: "making-payments-received",
        component: MakingPaymentsReceivedComponent,
      },
      {
        path: "review-payments-received",
        component: ReviewPaymentsReceivedComponent,
      },
      { path: "invoice-history", component: InvoiceHistoryComponent },
      {
        path: "payment-received-history",
        component: PaymentReceivedHistoryComponent,
      },
      {
        path: "grant-submission-history",
        component: GrantSubmissionHistoryComponent,
      },
      { path: "grant-submission", component: GrantSubmissionComponent },
      { path: "make-payments", component: MakePaymentsComponent },
      { path: "payments-made-list", component: PaymentsMadeListComponent },
      { path: "payment-receipt", component: PaymentReceiptComponent },
      { path: "salary-slip", component: SalarySlipComponent },
      {
        path: "supplier-vendor-management",
        component: SupplierVendorManagementComponent,
      },

      {
        path: "approved-supplier-vendor-list",
        component: ApprovedSupplierVendorListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinanceRoutingModule {}

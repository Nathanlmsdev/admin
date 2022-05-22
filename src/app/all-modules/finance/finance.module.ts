import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FinanceRoutingModule } from "./finance-routing.module";
import { FinanceComponent } from "./finance.component";
import { DataTablesModule } from "angular-datatables";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { InvoiceManualModeComponent } from './invoice-manual-mode/invoice-manual-mode.component';
import { MakingPaymentsReceivedComponent } from './making-payments-received/making-payments-received.component';
import { ReviewPaymentsReceivedComponent } from './review-payments-received/review-payments-received.component';
import { InvoiceHistoryComponent } from './invoice-history/invoice-history.component';
import { PaymentReceivedHistoryComponent } from './payment-received-history/payment-received-history.component';
import { GrantSubmissionHistoryComponent } from './grant-submission-history/grant-submission-history.component';
import { GrantSubmissionComponent } from './grant-submission/grant-submission.component';
import { MakePaymentsComponent } from './make-payments/make-payments.component';
import { PaymentsMadeListComponent } from './payments-made-list/payments-made-list.component';
import { PaymentReceiptComponent } from './payment-receipt/payment-receipt.component';
import { SalarySlipComponent } from './salary-slip/salary-slip.component';
import { SupplierVendorManagementComponent } from './supplier-vendor-management/supplier-vendor-management.component';
import { ApprovedSupplierVendorListComponent } from './approved-supplier-vendor-list/approved-supplier-vendor-list.component';

@NgModule({
  declarations: [FinanceComponent, InvoiceManualModeComponent, MakingPaymentsReceivedComponent, ReviewPaymentsReceivedComponent, InvoiceHistoryComponent, PaymentReceivedHistoryComponent, GrantSubmissionHistoryComponent, GrantSubmissionComponent, MakePaymentsComponent, PaymentsMadeListComponent, PaymentReceiptComponent, SalarySlipComponent, SupplierVendorManagementComponent, ApprovedSupplierVendorListComponent],
  imports: [
    CommonModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule,
    FinanceRoutingModule,
    CommonModule,
  ],
})
export class FinanceModule {}

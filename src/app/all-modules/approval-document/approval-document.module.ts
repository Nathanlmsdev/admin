import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ApprovalDocumentRoutingModule } from "./approval-document-routing.module";
import { ApprovalDocumentComponent } from "./approval-document.component";
import { DataTablesModule } from "angular-datatables";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DocumentationManagementComponent } from "./documentation-management/documentation-management.component";
import { DocumentationListComponent } from "./documentation-list/documentation-list.component";
import { DocumentationAccessHistoryComponent } from "./documentation-access-history/documentation-access-history.component";
import { ComplianceDocumentationListComponent } from "./compliance-documentation-list/compliance-documentation-list.component";

@NgModule({
  declarations: [
    ApprovalDocumentComponent,
    DocumentationManagementComponent,
    DocumentationListComponent,
    DocumentationAccessHistoryComponent,
    ComplianceDocumentationListComponent,
  ],
  imports: [
    CommonModule,
    ApprovalDocumentRoutingModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class ApprovalDocumentModule {}

import { compileComponentFromRender2 } from "@angular/compiler/src/render3/view/compiler";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ApprovalDocumentComponent } from "./approval-document.component";
import { ComplianceDocumentationListComponent } from "./compliance-documentation-list/compliance-documentation-list.component";
import { DocumentationAccessHistoryComponent } from "./documentation-access-history/documentation-access-history.component";
import { DocumentationListComponent } from "./documentation-list/documentation-list.component";
import { DocumentationManagementComponent } from "./documentation-management/documentation-management.component";

const routes: Routes = [
  {
    path: "",
    component: ApprovalDocumentComponent,
    children: [
      {
        path: "documentation-management",
        component: DocumentationManagementComponent,
      },
      {
        path: "documentation-list",
        component: DocumentationListComponent,
      },
      {
        path: "documentation-access-history",
        component: DocumentationAccessHistoryComponent,
      },
      {
        path: "compliance-documentation-list",
        component: ComplianceDocumentationListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApprovalDocumentRoutingModule {}

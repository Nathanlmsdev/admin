import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppealManagementComponent } from "./appeal-management/appeal-management.component";
import { AppealsListComponent } from "./appeals-list/appeals-list.component";
import { ComplaintListComponent } from "./complaint-list/complaint-list.component";
import { ComplaintManagementFollowupComponent } from "./complaint-management-followup/complaint-management-followup.component";
import { ComplaintManagementResponseComponent } from "./complaint-management-response/complaint-management-response.component";
import { ComplaintComponent } from "./complaint.component";
import { QueryListComponent } from "./query-list/query-list.component";
import { QueryManagementCourseApplicationComponent } from "./query-management-course-application/query-management-course-application.component";
import { QueryManagementOthersComponent } from "./query-management-others/query-management-others.component";
import { QueryManagementPaymentComponent } from "./query-management-payment/query-management-payment.component";
import { QueryManagementTechnicalComponent } from "./query-management-technical/query-management-technical.component";
import { QueryManagementTrainingComponent } from "./query-management-training/query-management-training.component";

const routes: Routes = [
  {
    path: "",
    component: ComplaintComponent,
    children: [
      {
        path: "complaint-management-response",
        component: ComplaintManagementResponseComponent,
      },
      {
        path: "complaint-management-followup-actions",
        component: ComplaintManagementFollowupComponent,
      },
      {
        path: "complaint-list",
        component: ComplaintListComponent,
      },
      {
        path: "appeal-management",
        component: AppealManagementComponent,
      },
      {
        path: "appeals-list",
        component: AppealsListComponent,
      },
      {
        path: "query-management-course-application",
        component: QueryManagementCourseApplicationComponent,
      },
      {
        path: "query-management-technical",
        component: QueryManagementTechnicalComponent,
      },
      {
        path: "query-management-training",
        component: QueryManagementTrainingComponent,
      },
      {
        path: "query-management-payment",
        component: QueryManagementPaymentComponent,
      },
      {
        path: "query-management-others",
        component: QueryManagementOthersComponent,
      },
      {
        path: "query-list",
        component: QueryListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComplaintRoutingModule {}

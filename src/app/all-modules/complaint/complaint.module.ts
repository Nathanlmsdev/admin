import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DataTablesModule } from "angular-datatables";
import { ComplaintRoutingModule } from "../complaint/complaint-routing.module";
import { ComplaintManagementResponseComponent } from "./complaint-management-response/complaint-management-response.component";
import { ComplaintComponent } from "./complaint.component";
import { ComplaintManagementFollowupComponent } from './complaint-management-followup/complaint-management-followup.component';
import { ComplaintListComponent } from './complaint-list/complaint-list.component';
import { AppealManagementComponent } from './appeal-management/appeal-management.component';
import { AppealsListComponent } from './appeals-list/appeals-list.component';
import { QueryManagementCourseApplicationComponent } from './query-management-course-application/query-management-course-application.component';
import { QueryManagementTechnicalComponent } from './query-management-technical/query-management-technical.component';
import { QueryManagementTrainingComponent } from './query-management-training/query-management-training.component';
import { QueryManagementPaymentComponent } from './query-management-payment/query-management-payment.component';
import { QueryManagementOthersComponent } from './query-management-others/query-management-others.component';
import { QueryListComponent } from './query-list/query-list.component';

@NgModule({
  declarations: [ComplaintManagementResponseComponent, ComplaintComponent, ComplaintManagementFollowupComponent, ComplaintListComponent, AppealManagementComponent, AppealsListComponent, QueryManagementCourseApplicationComponent, QueryManagementTechnicalComponent, QueryManagementTrainingComponent, QueryManagementPaymentComponent, QueryManagementOthersComponent, QueryListComponent],
  imports: [
    CommonModule,
    ComplaintRoutingModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class ComplaintModule {}

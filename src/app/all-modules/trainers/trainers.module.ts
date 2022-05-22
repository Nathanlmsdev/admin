import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TrainersRoutingModule } from "./trainers-routing.module";
import { TrainersComponent } from "./trainers.component";
import { DataTablesModule } from "angular-datatables";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TrainerListComponent } from "./trainer-list/trainer-list.component";
import { TrainerProfileComponent } from "./trainer-profile/trainer-profile.component";
import { TrainerApprovalsComponent } from "./trainer-approvals/trainer-approvals.component";
import { TrainerAttendanceManagementComponent } from "./trainer-attendance-management/trainer-attendance-management.component";
import { TrainerCourseMaterialsComponent } from "./trainer-course-materials/trainer-course-materials.component";
import { TrainerCoursewiseFeedbackComponent } from "./trainer-coursewise-feedback/trainer-coursewise-feedback.component";
import { TrainerCostCalculationComponent } from "./trainer-cost-calculation/trainer-cost-calculation.component";
import { TrainerAppraisalComponent } from "./trainer-appraisal/trainer-appraisal.component";
import { TrainerExitInterviewComponent } from "./trainer-exit-interview/trainer-exit-interview.component";
import { TrainerApprovalsListComponent } from './trainer-approvals-list/trainer-approvals-list.component';

@NgModule({
  declarations: [
    TrainersComponent,
    TrainerListComponent,
    TrainerProfileComponent,
    TrainerApprovalsComponent,
    TrainerAttendanceManagementComponent,
    TrainerCourseMaterialsComponent,
    TrainerCoursewiseFeedbackComponent,
    TrainerCostCalculationComponent,
    TrainerAppraisalComponent,
    TrainerExitInterviewComponent,
    TrainerApprovalsListComponent,
  ],
  imports: [
    CommonModule,
    TrainersRoutingModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class TrainersModule {}

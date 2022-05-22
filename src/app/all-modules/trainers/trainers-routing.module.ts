import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TrainerAppraisalComponent } from "./trainer-appraisal/trainer-appraisal.component";
import { TrainerApprovalsListComponent } from "./trainer-approvals-list/trainer-approvals-list.component";
import { TrainerApprovalsComponent } from "./trainer-approvals/trainer-approvals.component";
import { TrainerAttendanceManagementComponent } from "./trainer-attendance-management/trainer-attendance-management.component";
import { TrainerCostCalculationComponent } from "./trainer-cost-calculation/trainer-cost-calculation.component";
import { TrainerCourseMaterialsComponent } from "./trainer-course-materials/trainer-course-materials.component";
import { TrainerCoursewiseFeedbackComponent } from "./trainer-coursewise-feedback/trainer-coursewise-feedback.component";
import { TrainerExitInterviewComponent } from "./trainer-exit-interview/trainer-exit-interview.component";
import { TrainerListComponent } from "./trainer-list/trainer-list.component";
import { TrainerProfileComponent } from "./trainer-profile/trainer-profile.component";
import { TrainersComponent } from "./trainers.component";

const routes: Routes = [
  {
    path: "",
    component: TrainersComponent,
    children: [
      { path: "trainers", component: TrainersComponent },
      { path: "trainers-list", component: TrainerListComponent },
      { path: "trainers-profile", component: TrainerProfileComponent },
      { path: "trainers-approvals", component: TrainerApprovalsComponent },
      {
        path: "trainers-approvals-list",
        component: TrainerApprovalsListComponent,
      },
      {
        path: "trainers-attendance-management",
        component: TrainerAttendanceManagementComponent,
      },
      {
        path: "trainers-course-materials-index",
        component: TrainerCourseMaterialsComponent,
      },
      {
        path: "trainers-coursewise-feedback",
        component: TrainerCoursewiseFeedbackComponent,
      },
      {
        path: "trainers-cost-calculation",
        component: TrainerCostCalculationComponent,
      },
      { path: "trainers-appraisal", component: TrainerAppraisalComponent },
      {
        path: "trainers-exit-interview",
        component: TrainerExitInterviewComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainersRoutingModule {}

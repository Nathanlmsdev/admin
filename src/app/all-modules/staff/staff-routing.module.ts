import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EmployeeAnnualAppraisalComponent } from "./employee-annual-appraisal/employee-annual-appraisal.component";
import { EmployeeApprovedRolesComponent } from "./employee-approved-roles/employee-approved-roles.component";
import { EmployeeAttendanceComponent } from "./employee-attendance/employee-attendance.component";
import { EmployeeCompetencyMatrixReviewComponent } from "./employee-competency-matrix-review/employee-competency-matrix-review.component";
import { EmployeeExitInterviewComponent } from "./employee-exit-interview/employee-exit-interview.component";
import { EmployeeInternalTrainingFeedbackComponent } from "./employee-internal-training-feedback/employee-internal-training-feedback.component";
import { EmployeeLeaveManagementComponent } from "./employee-leave-management/employee-leave-management.component";
import { EmployeeListComponent } from "./employee-list/employee-list.component";
import { EmployeeOjtComponent } from "./employee-ojt/employee-ojt.component";
import { EmployeeProfileComponent } from "./employee-profile/employee-profile.component";
import { EmployeeProposedCompetencyMatrixComponent } from "./employee-proposed-competency-matrix/employee-proposed-competency-matrix.component";
import { EmployeeTrainingAttendanceComponent } from "./employee-training-attendance/employee-training-attendance.component";
import { EmployeeTrainingPlanComponent } from "./employee-training-plan/employee-training-plan.component";
import { HrCandidateApplicationReviewComponent } from "./hr-candidate-application-review/hr-candidate-application-review.component";
import { HrCandidateInterviewComponent } from "./hr-candidate-interview/hr-candidate-interview.component";
import { StaffComponent } from "./staff.component";
import { TrainingOrganisationProfileComponent } from "./training-organisation-profile/training-organisation-profile.component";

const routes: Routes = [
  {
    path: "",
    component: StaffComponent,
    children: [
      { path: "staff", component: StaffComponent },
      { path: "employee-list", component: EmployeeListComponent },
      { path: "employee-profile", component: EmployeeProfileComponent },
      {
        path: "employee-approved-roles",
        component: EmployeeApprovedRolesComponent,
      },
      { path: "employee-attendance", component: EmployeeAttendanceComponent },
      {
        path: "employee-leave-management",
        component: EmployeeLeaveManagementComponent,
      },
      {
        path: "employee-annual-appraisal",
        component: EmployeeAnnualAppraisalComponent,
      },
      {
        path: "employee-proposed-competency-matrix",
        component: EmployeeProposedCompetencyMatrixComponent,
      },
      {
        path: "employee-competency-matrix-review",
        component: EmployeeCompetencyMatrixReviewComponent,
      },
      {
        path: "employee-training-plan",
        component: EmployeeTrainingPlanComponent,
      },
      { path: "employee-ojt", component: EmployeeOjtComponent },
      {
        path: "employee-training-attendance",
        component: EmployeeTrainingAttendanceComponent,
      },
      {
        path: "employee-internal-training-feedback",
        component: EmployeeInternalTrainingFeedbackComponent,
      },
      {
        path: "hr-candidate-application-review",
        component: HrCandidateApplicationReviewComponent,
      },
      {
        path: "hr-candidate-interview",
        component: HrCandidateInterviewComponent,
      },
      {
        path: "employee-exit-interview",
        component: EmployeeExitInterviewComponent,
      },
      {
        path: "training-organisation-profile",
        component: TrainingOrganisationProfileComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StaffRoutingModule {}

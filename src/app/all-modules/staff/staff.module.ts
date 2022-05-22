import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { StaffRoutingModule } from "./staff-routing.module";
import { StaffComponent } from "./staff.component";
import { DataTablesModule } from "angular-datatables";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { EmployeeListComponent } from "./employee-list/employee-list.component";
import { EmployeeProfileComponent } from "./employee-profile/employee-profile.component";
import { EmployeeApprovedRolesComponent } from "./employee-approved-roles/employee-approved-roles.component";
import { EmployeeAttendanceComponent } from "./employee-attendance/employee-attendance.component";
import { EmployeeLeaveManagementComponent } from "./employee-leave-management/employee-leave-management.component";
import { EmployeeAnnualAppraisalComponent } from "./employee-annual-appraisal/employee-annual-appraisal.component";
import { EmployeeProposedCompetencyMatrixComponent } from "./employee-proposed-competency-matrix/employee-proposed-competency-matrix.component";
import { EmployeeCompetencyMatrixReviewComponent } from "./employee-competency-matrix-review/employee-competency-matrix-review.component";
import { EmployeeTrainingPlanComponent } from "./employee-training-plan/employee-training-plan.component";
import { EmployeeOjtComponent } from "./employee-ojt/employee-ojt.component";
import { EmployeeTrainingAttendanceComponent } from "./employee-training-attendance/employee-training-attendance.component";
import { EmployeeInternalTrainingFeedbackComponent } from "./employee-internal-training-feedback/employee-internal-training-feedback.component";
import { HrCandidateApplicationReviewComponent } from "./hr-candidate-application-review/hr-candidate-application-review.component";
import { HrCandidateInterviewComponent } from "./hr-candidate-interview/hr-candidate-interview.component";
import { EmployeeExitInterviewComponent } from "./employee-exit-interview/employee-exit-interview.component";
import { TrainingOrganisationProfileComponent } from "./training-organisation-profile/training-organisation-profile.component";

@NgModule({
  declarations: [
    StaffComponent,
    EmployeeListComponent,
    EmployeeProfileComponent,
    EmployeeApprovedRolesComponent,
    EmployeeAttendanceComponent,
    EmployeeLeaveManagementComponent,
    EmployeeAnnualAppraisalComponent,
    EmployeeProposedCompetencyMatrixComponent,
    EmployeeCompetencyMatrixReviewComponent,
    EmployeeTrainingPlanComponent,
    EmployeeOjtComponent,
    EmployeeTrainingAttendanceComponent,
    EmployeeInternalTrainingFeedbackComponent,
    HrCandidateApplicationReviewComponent,
    HrCandidateInterviewComponent,
    EmployeeExitInterviewComponent,
    TrainingOrganisationProfileComponent,
  ],
  imports: [
    CommonModule,
    StaffRoutingModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class StaffModule {}

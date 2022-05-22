import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AssessmentRoutingModule } from "./assessment-routing.module";
import { AssessmentComponent } from "./assessment.component";
import { DataTablesModule } from "angular-datatables";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AssessmentPlanComponent } from "./assessment-plan/assessment-plan.component";
import { AssessmentEntriesComponent } from "./assessment-entries/assessment-entries.component";
import { AssessmentAnswerpaperCorrectionComponent } from "./assessment-answerpaper-correction/assessment-answerpaper-correction.component";
import { AssessmentResultsOverallComponent } from "./assessment-results-overall/assessment-results-overall.component";
import { AssessmentResultsIndividualComponent } from './assessment-results-individual/assessment-results-individual.component';
import { AssessmentUploadQuestionComponent } from './assessment-upload-question/assessment-upload-question.component';
import { AssessmentUploadAnswerComponent } from './assessment-upload-answer/assessment-upload-answer.component';
import { AssessmentUploadQuestionBankComponent } from './assessment-upload-question-bank/assessment-upload-question-bank.component';
import { AssessmentReviewComponent } from './assessment-review/assessment-review.component';
import { AssessmentUploadBatchComponent } from './assessment-upload-batch/assessment-upload-batch.component';
import { StudentApcorrectionComponent } from './student-apcorrection/student-apcorrection.component';

@NgModule({
  declarations: [
    AssessmentComponent,
    AssessmentPlanComponent,
    AssessmentEntriesComponent,
    AssessmentAnswerpaperCorrectionComponent,
    AssessmentResultsOverallComponent,
    AssessmentResultsIndividualComponent,
    AssessmentUploadQuestionComponent,
    AssessmentUploadAnswerComponent,
    AssessmentUploadQuestionBankComponent,
    AssessmentReviewComponent,
    AssessmentUploadBatchComponent,
    StudentApcorrectionComponent,
  ],
  imports: [
    CommonModule,
    AssessmentRoutingModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class AssessmentModule {}

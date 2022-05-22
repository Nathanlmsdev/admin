import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AssessmentAnswerpaperCorrectionComponent } from "./assessment-answerpaper-correction/assessment-answerpaper-correction.component";
import { AssessmentEntriesComponent } from "./assessment-entries/assessment-entries.component";
import { AssessmentPlanComponent } from "./assessment-plan/assessment-plan.component";
import { AssessmentResultsIndividualComponent } from "./assessment-results-individual/assessment-results-individual.component";
import { AssessmentResultsOverallComponent } from "./assessment-results-overall/assessment-results-overall.component";
import { AssessmentReviewComponent } from "./assessment-review/assessment-review.component";
import { AssessmentUploadAnswerComponent } from "./assessment-upload-answer/assessment-upload-answer.component";
import { AssessmentUploadBatchComponent } from "./assessment-upload-batch/assessment-upload-batch.component";
import { AssessmentUploadQuestionBankComponent } from "./assessment-upload-question-bank/assessment-upload-question-bank.component";
import { AssessmentUploadQuestionComponent } from "./assessment-upload-question/assessment-upload-question.component";
import { AssessmentComponent } from "./assessment.component";
import { StudentApcorrectionComponent } from "./student-apcorrection/student-apcorrection.component";

const routes: Routes = [
  {
    path: "",
    component: AssessmentComponent,
    children: [
      { path: "assessment-plan", component: AssessmentPlanComponent },
      { path: "assessment-entries", component: AssessmentEntriesComponent },
      {
        path: "assessment-answer-paper-correction",
        component: AssessmentAnswerpaperCorrectionComponent,
      },
      {
        path: "assessment-results-individual",
        component: AssessmentResultsIndividualComponent,
      },
      {
        path: "assessment-results-overall",
        component: AssessmentResultsOverallComponent,
      },
      {
        path: "assessment-upload-question-sheet",
        component: AssessmentUploadQuestionComponent,
      },
      {
        path: "assessment-upload-answer-sheet",
        component: AssessmentUploadAnswerComponent,
      },
      {
        path: "assessment-upload-question-bank",
        component: AssessmentUploadQuestionBankComponent,
      },
      { path: "assessment-review", component: AssessmentReviewComponent },
      {
        path: "assessment-upload-batch-assessments",
        component: AssessmentUploadBatchComponent,
      },
      {
        path: "evaluation-apc",
        component: StudentApcorrectionComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssessmentRoutingModule {}

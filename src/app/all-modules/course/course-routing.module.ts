import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AssessmentAddComponent } from "./assessment-add/assessment-add.component";
import { AssessmentListComponent } from "./assessment-list/assessment-list.component";
import { CourseAddComponent } from "./course-add/course-add.component";
import { CourseListComponent } from "./course-list/course-list.component";
import { CourseProposalListComponent } from "./course-proposal-list/course-proposal-list.component";
import { CourseProposalComponent } from "./course-proposal/course-proposal.component";
import { CourseRequirementListComponent } from "./course-requirement-list/course-requirement-list.component";
import { CourseRequirementComponent } from "./course-requirement/course-requirement.component";
import { CourseComponent } from "./course.component";
import { LessonAddComponent } from "./lesson-add/lesson-add.component";
import { LessonListComponent } from "./lesson-list/lesson-list.component";
import { ScheduleAddComponent } from "./schedule-add/schedule-add.component";
import { ScheduleComponent } from "./schedule/schedule.component";
import { VenueAddComponent } from "./venue-add/venue-add.component";
import { VenueComponent } from "./venue/venue.component";

const routes: Routes = [
  {
    path: "",
    component: CourseComponent,
    children: [
      { path: "course-list", component: CourseListComponent },
      { path: "course-add", component: CourseAddComponent },
      { path: "venue-list", component: VenueComponent },
      { path: "venue-add", component: VenueAddComponent },
      { path: "schedule-list", component: ScheduleComponent },
      { path: "schedule-add", component: ScheduleAddComponent },
      { path: "lesson-list", component: LessonListComponent },
      { path: "lesson-add", component: LessonAddComponent },
      { path: "assessment-list", component: AssessmentListComponent },
      { path: "assessment-add", component: AssessmentAddComponent },
      //
      { path: "course-proposal-list", component: CourseProposalListComponent },
      { path: "course-proposal-add", component: CourseProposalComponent },
      {
        path: "course-requirement-list",
        component: CourseRequirementListComponent,
      },
      { path: "course-requirement-add", component: CourseRequirementComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { VenueComponent } from './venue/venue.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { VenueAddComponent } from './venue-add/venue-add.component';
import { ScheduleAddComponent } from './schedule-add/schedule-add.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseAddComponent } from './course-add/course-add.component';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LessonListComponent } from './lesson-list/lesson-list.component';
import { LessonAddComponent } from './lesson-add/lesson-add.component';
import { AssessmentListComponent } from './assessment-list/assessment-list.component';
import { AssessmentAddComponent } from './assessment-add/assessment-add.component';
import { CourseProposalComponent } from './course-proposal/course-proposal.component';
import { CourseRequirementComponent } from './course-requirement/course-requirement.component';
import { CourseProposalListComponent } from './course-proposal-list/course-proposal-list.component';
import { CourseRequirementListComponent } from './course-requirement-list/course-requirement-list.component';


@NgModule({
  declarations: [VenueComponent, ScheduleComponent, VenueAddComponent, ScheduleAddComponent, CourseListComponent, CourseAddComponent, LessonListComponent, LessonAddComponent, AssessmentListComponent, AssessmentAddComponent, CourseProposalComponent, CourseRequirementComponent, CourseProposalListComponent, CourseRequirementListComponent],
  imports: [
    CommonModule,
    CourseRoutingModule, 
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class CourseModule { }

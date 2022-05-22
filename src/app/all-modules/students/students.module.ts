import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DataTablesModule } from "angular-datatables";

import { StudentsRoutingModule } from "./students-routing.module";
import { StudentsComponent } from "./students.component";
import { StudentsListComponent } from "./students-list/students-list.component";
import { StudentsDetailsComponent } from "./students-details/students-details.component";
import { StudentsAddComponent } from "./students-add/students-add.component";
import { StudentsEditComponent } from "./students-edit/students-edit.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CourseConfirmationComponent } from './course-confirmation/course-confirmation.component';
import { ManualStudentRegistrationComponent } from './manual-student-registration/manual-student-registration.component';
import { StudentProfileStatusComponent } from './student-profile-status/student-profile-status.component';
import { PreCourseAdministrationComponent } from './pre-course-administration/pre-course-administration.component';
import { InCourseAdministrationComponent } from './in-course-administration/in-course-administration.component';
import { PostCourseAdministrationComponent } from './post-course-administration/post-course-administration.component';

@NgModule({
  declarations: [
    StudentsComponent,
    StudentsListComponent,
    StudentsDetailsComponent,
    StudentsAddComponent,
    StudentsEditComponent,
    CourseConfirmationComponent,
    ManualStudentRegistrationComponent,
    StudentProfileStatusComponent,
    PreCourseAdministrationComponent,
    InCourseAdministrationComponent,
    PostCourseAdministrationComponent,
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class StudentsModule {}

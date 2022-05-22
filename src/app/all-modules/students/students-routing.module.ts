import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { StudentsListComponent } from "./students-list/students-list.component";
import { StudentsDetailsComponent } from "./students-details/students-details.component";
import { StudentsComponent } from "./students.component";
import { StudentsAddComponent } from "./students-add/students-add.component";
import { StudentsEditComponent } from "./students-edit/students-edit.component";
import { ManualStudentRegistrationComponent } from "./manual-student-registration/manual-student-registration.component";
import { StudentProfileStatusComponent } from "./student-profile-status/student-profile-status.component";
import { PreCourseAdministrationComponent } from "./pre-course-administration/pre-course-administration.component";
import { InCourseAdministrationComponent } from "./in-course-administration/in-course-administration.component";
import { PostCourseAdministrationComponent } from "./post-course-administration/post-course-administration.component";
import { CourseConfirmationComponent } from "./course-confirmation/course-confirmation.component";

const routes: Routes = [
  {
    path: "",
    component: StudentsComponent,
    children: [
      { path: "students-list", component: StudentsListComponent },
      // { path: "students-details", component: StudentsDetailsComponent },
      // { path: "students-add", component: StudentsAddComponent },
      { path: "course-confirmation", component: CourseConfirmationComponent },
      {
        path: "manual-student-registration",
        component: ManualStudentRegistrationComponent,
      },
      {
        path: "student-profile-status-search",
        component: StudentProfileStatusComponent,
      },
      {
        path: "pre-course-administration",
        component: PreCourseAdministrationComponent,
      },
      {
        path: "in-course-administration",
        component: InCourseAdministrationComponent,
      },
      {
        path: "post-course-administration",
        component: PostCourseAdministrationComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentsRoutingModule {}

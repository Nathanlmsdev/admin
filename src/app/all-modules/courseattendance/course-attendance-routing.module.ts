import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AttendanceCourseDuringComponent } from "./attendance-course-during/attendance-course-during.component";
import { AttendanceCourseEndComponent } from "./attendance-course-end/attendance-course-end.component";
import { AttendanceCourseForecastComponent } from "./attendance-course-forecast/attendance-course-forecast.component";
import { AttendanceCourseStartComponent } from "./attendance-course-start/attendance-course-start.component";
import { CourseAttendanceListComponent } from "./course-attendance-list/course-attendance-list.component";
import { CourseAttendanceComponent } from "./course-attendance.component";

const routes: Routes = [
  {
    path: "",
    component: CourseAttendanceComponent,
    children: [
      {
        path: "course-attendance-list",
        component: CourseAttendanceListComponent,
      },
      {
        path: "attendance-course-forecast",
        component: AttendanceCourseForecastComponent,
      },
      {
        path: "attendance-course-during",
        component: AttendanceCourseDuringComponent,
      },
      {
        path: "attendance-course-start",
        component: AttendanceCourseStartComponent,
      },
      {
        path: "attendance-course-end",
        component: AttendanceCourseEndComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseAttendanceRoutingModule {}

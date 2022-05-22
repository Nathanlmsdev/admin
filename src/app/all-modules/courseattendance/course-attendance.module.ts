import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CourseAttendanceRoutingModule } from "./course-attendance-routing.module";
import { CourseAttendanceComponent } from "./course-attendance.component";
import { DataTablesModule } from "angular-datatables";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CourseAttendanceListComponent } from './course-attendance-list/course-attendance-list.component';
import { AttendanceCourseStartComponent } from './attendance-course-start/attendance-course-start.component';
import { AttendanceCourseEndComponent } from './attendance-course-end/attendance-course-end.component';
import { AttendanceCourseDuringComponent } from './attendance-course-during/attendance-course-during.component';
import { AttendanceCourseForecastComponent } from './attendance-course-forecast/attendance-course-forecast.component';

@NgModule({
  declarations: [CourseAttendanceComponent, CourseAttendanceListComponent, AttendanceCourseStartComponent, AttendanceCourseEndComponent, AttendanceCourseDuringComponent, AttendanceCourseForecastComponent],
  imports: [
    CommonModule,
    CourseAttendanceRoutingModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class CourseAttendanceModule {}

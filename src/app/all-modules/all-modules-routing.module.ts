import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AllModulesComponent } from "./all-modules.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full",
  },
  {
    path: "",
    component: AllModulesComponent,
    children: [
      {
        path: "dashboard",
        loadChildren: () =>
          import("./dashboard/dashboard.module").then((m) => m.DashboardModule),
      },
      {
        path: "course",
        loadChildren: () =>
          import("./course/course.module").then((m) => m.CourseModule),
      },
      {
        path: "students",
        loadChildren: () =>
          import("./students/students.module").then((m) => m.StudentsModule),
      },
      {
        path: "staff",
        loadChildren: () =>
          import("./staff/staff.module").then((m) => m.StaffModule),
      },
      {
        path: "trainers",
        loadChildren: () =>
          import("./trainers/trainers.module").then((m) => m.TrainersModule),
      },

      {
        path: "courseattendance",
        loadChildren: () =>
          import("./courseattendance/course-attendance.module").then(
            (m) => m.CourseAttendanceModule
          ),
      },
      {
        path: "accounts",
        loadChildren: () =>
          import("./accounts/accounts.module").then((m) => m.AccountsModule),
      },

      {
        path: "finance",
        loadChildren: () =>
          import("./finance/finance.module").then((m) => m.FinanceModule),
      },
      {
        path: "certificate",
        loadChildren: () =>
          import("./certificate/certificate.module").then(
            (m) => m.CertificateModule
          ),
      },
      {
        path: "assessment",
        loadChildren: () =>
          import("./assessment/assessment.module").then(
            (m) => m.AssessmentModule
          ),
      },
      {
        path: "examlist",
        loadChildren: () =>
          import("./examlist/examlist.module").then((m) => m.ExamlistModule),
      },

      {
        path: "blankpage",
        loadChildren: () =>
          import("./blankpage/blankpage.module").then((m) => m.BlankpageModule),
      },
      {
        path: "components",
        loadChildren: () =>
          import("./components/components.module").then(
            (m) => m.ComponentsModule
          ),
      },
      {
        path: "forms",
        loadChildren: () =>
          import("./forms/forms.module").then((m) => m.FormsModule),
      },
      {
        path: "tables",
        loadChildren: () =>
          import("./tables/tables.module").then((m) => m.TablesModule),
      },
      {
        path: "profile",
        loadChildren: () =>
          import("./profile/profile.module").then((m) => m.ProfileModule),
      },
      {
        path: "corporate",
        loadChildren: () =>
          import("./corporate/corporate.module").then((m) => m.CorporateModule),
      },
      {
        path: "approval-document",
        loadChildren: () =>
          import("./approval-document/approval-document.module").then(
            (m) => m.ApprovalDocumentModule
          ),
      },
      {
        path: "discount",
        loadChildren: () =>
          import("./discount/discount.module").then((m) => m.DiscountModule),
      },
      {
        path: "complaint",
        loadChildren: () =>
          import("./complaint/complaint.module").then((m) => m.ComplaintModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllModulesRoutingModule {}

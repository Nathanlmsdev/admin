import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CorporateComponent } from "./corporate.component";
import { CorporateMainComponent } from "./corporate-main/corporate-main.component";
import { AddCorporateComponent } from "./add-corporate/add-corporate.component";

const routes: Routes = [
  {
    path: "",
    component: CorporateComponent,
    children: [
      { path: "corporate-list", component: CorporateMainComponent },
      { path: "corporate-add", component: AddCorporateComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CorporateRoutingModule {}

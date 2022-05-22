import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CorporateRoutingModule } from "./corporate-routing.module";
import { CorporateComponent } from "./corporate.component";
import { CorporateMainComponent } from "./corporate-main/corporate-main.component";
import { AddCorporateComponent } from "./add-corporate/add-corporate.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DataTablesModule } from "angular-datatables";

@NgModule({
  declarations: [
    CorporateComponent,
    CorporateMainComponent,
    AddCorporateComponent,
  ],
  imports: [
    CommonModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule,
    CorporateRoutingModule,
  ],
})
export class CorporateModule {}

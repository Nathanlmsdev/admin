import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DiscountRoutingModule } from "./discount-routing.module";
import { DiscountComponent } from "./discount.component";
import { DataTablesModule } from "angular-datatables";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DiscountGenerateCodeComponent } from "./discount-generate-code/discount-generate-code.component";
import { DiscountValidatorComponent } from "./discount-validator/discount-validator.component";

@NgModule({
  declarations: [
    DiscountComponent,
    DiscountGenerateCodeComponent,
    DiscountValidatorComponent,
  ],
  imports: [
    CommonModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule,
    DiscountRoutingModule,
    CommonModule,
  ],
})
export class DiscountModule {}

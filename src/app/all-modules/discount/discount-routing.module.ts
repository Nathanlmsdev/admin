import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DiscountGenerateCodeComponent } from "./discount-generate-code/discount-generate-code.component";
import { DiscountValidatorComponent } from "./discount-validator/discount-validator.component";
import { DiscountComponent } from "./discount.component";

const routes: Routes = [
  {
    path: "",
    component: DiscountComponent,
    children: [
      {
        path: "discount-generate-code",
        component: DiscountGenerateCodeComponent,
      },
      {
        path: "discount-validator",
        component: DiscountValidatorComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiscountRoutingModule {}

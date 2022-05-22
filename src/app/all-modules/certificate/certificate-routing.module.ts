import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CardGenerationAutoComponent } from "./card-generation-auto/card-generation-auto.component";
import { CardGenerationManualComponent } from "./card-generation-manual/card-generation-manual.component";
import { CardListComponent } from "./card-list/card-list.component";
import { CardTemplateComponent } from "./card-template/card-template.component";
import { CertificateGenerationAutoComponent } from "./certificate-generation-auto/certificate-generation-auto.component";
import { CertificateGenerationManualComponent } from "./certificate-generation-manual/certificate-generation-manual.component";
import { CertificateListComponent } from "./certificate-list/certificate-list.component";
import { CertificateMainComponent } from "./certificate-main/certificate-main.component";
import { CertificateSummaryComponent } from "./certificate-summary/certificate-summary.component";
import { CertificateTemplateComponent } from "./certificate-template/certificate-template.component";
import { CertificateComponent } from "./certificate.component";

const routes: Routes = [
  {
    path: "",
    component: CertificateComponent,
    children: [
      { path: "certificate-template", component: CertificateTemplateComponent },
      { path: "card-template", component: CardTemplateComponent },
      {
        path: "certificate-generation-manual",
        component: CertificateGenerationManualComponent,
      },
      {
        path: "certificate-generation-auto",
        component: CertificateGenerationAutoComponent,
      },
      {
        path: "card-generation-manual",
        component: CardGenerationManualComponent,
      },
      { path: "card-generation-auto", component: CardGenerationAutoComponent },
      { path: "certificate-list", component: CertificateListComponent },
      { path: "card-list", component: CardListComponent },
      { path: "certificate-summary", component: CertificateSummaryComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CertificateRoutingModule {}

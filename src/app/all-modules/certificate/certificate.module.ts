import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CertificateRoutingModule } from "./certificate-routing.module";
import { CertificateComponent } from "./certificate.component";
import { DataTablesModule } from "angular-datatables";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CertificateMainComponent } from './certificate-main/certificate-main.component';
import { CertificateTemplateComponent } from './certificate-template/certificate-template.component';
import { CardTemplateComponent } from './card-template/card-template.component';
import { CertificateGenerationManualComponent } from './certificate-generation-manual/certificate-generation-manual.component';
import { CertificateGenerationAutoComponent } from './certificate-generation-auto/certificate-generation-auto.component';
import { CardGenerationManualComponent } from './card-generation-manual/card-generation-manual.component';
import { CardGenerationAutoComponent } from './card-generation-auto/card-generation-auto.component';
import { CertificateListComponent } from './certificate-list/certificate-list.component';
import { CardListComponent } from './card-list/card-list.component';
import { CertificateSummaryComponent } from './certificate-summary/certificate-summary.component';

@NgModule({
  declarations: [CertificateComponent, CertificateMainComponent, CertificateTemplateComponent, CardTemplateComponent, CertificateGenerationManualComponent, CertificateGenerationAutoComponent, CardGenerationManualComponent, CardGenerationAutoComponent, CertificateListComponent, CardListComponent, CertificateSummaryComponent],
  imports: [
    CommonModule,
    CertificateRoutingModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class CertificateModule {}

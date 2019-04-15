import { LaboratorioService } from './../services/laboratorio.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminTemaComponent } from './../temas/admin-tema/admin-tema.component';
import { MaterialModule } from '../temas/material/material.module';
import { UtilService } from '../services/util.service';
import { NgxGraphModule } from '@swimlane/ngx-graph';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ListaLaboratoriosComponent } from './lista-laboratorios/lista-laboratorios.component';
import { CriarLaboratorioComponent } from './criar-laboratorio/criar-laboratorio.component';
import { UpdateLaboratorioComponent } from './update-laboratorio/update-laboratorio.component';
import { LinkRedeSocialService } from '../services/link-rede-social.service';
import { TelefoneService } from '../services/telefone.service';
import { EmailService } from '../services/email.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    NgxGraphModule,
    NgxChartsModule,
  ],
  declarations: [
    AdminTemaComponent,
    DashboardComponent,
    LoginComponent,
    ListaLaboratoriosComponent,
    CriarLaboratorioComponent,
    UpdateLaboratorioComponent,
  ],
  exports: [
    AdminTemaComponent,
    DashboardComponent,
    LoginComponent
  ],
  providers: [UtilService, LaboratorioService, LinkRedeSocialService, TelefoneService, EmailService]
})
 
export class AdminModule { }

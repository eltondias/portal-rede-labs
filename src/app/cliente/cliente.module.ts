import { RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './../temas/material/material.module';
import {NgxMaskModule} from 'ngx-mask';
import { AreasAtuacaoComponent } from './areas-atuacao/areas-atuacao.component';
import { ListaSegmentosComponent } from './lista-segmentos/lista-segmentos.component';
import { ServicosLaboratoriosComponent } from './servicos-laboratorios/servicos-laboratorios.component';
import { PageLaboratorioComponent } from './page-laboratorio/page-laboratorio.component';
import { LaboratoriosComponent } from './laboratorios/laboratorios.component';
import { ServicosComponent } from './servicos/servicos.component';
import { AgmCoreModule } from '@agm/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NovaContaComponent } from './nova-conta/nova-conta.component';
import { AutenticarComponent } from './autenticar/autenticar.component';
import { AtivacaoComponent } from './ativacao/ativacao.component';
import { ObservatorioComponent } from './observatorio/observatorio.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    NgxMaskModule.forRoot(),
    RouterModule,
    NgbModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDAuYFsYX3Xtz6KX8BURrTyRJa4OyXOl0U'
  })
  ],
  declarations: [
      HomeComponent,
      AreasAtuacaoComponent,
      ListaSegmentosComponent,
      ServicosLaboratoriosComponent,
      PageLaboratorioComponent,
      LaboratoriosComponent,
      ServicosComponent,
      NovaContaComponent,
      AutenticarComponent,
      AtivacaoComponent,
      ObservatorioComponent,
          ],
  exports:  [
    HomeComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ClienteModule { }

import { ListaLaboratoriosComponent } from './admin/lista-laboratorios/lista-laboratorios.component';
import { AutenticarComponent } from './cliente/autenticar/autenticar.component';
import { NovaContaComponent } from './cliente/nova-conta/nova-conta.component';
import { ServicosComponent } from './cliente/servicos/servicos.component';
import { LaboratoriosComponent } from './cliente/laboratorios/laboratorios.component';
import { PageLaboratorioComponent } from './cliente/page-laboratorio/page-laboratorio.component';
import { ListaSegmentosComponent } from './cliente/lista-segmentos/lista-segmentos.component';
import { AreasAtuacaoComponent } from './cliente/areas-atuacao/areas-atuacao.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { CustomPreloading } from './custom-preloading';
import { AdminTemaComponent } from './temas/admin-tema/admin-tema.component';
import { ComumTemaComponent } from './temas/comum-tema/comum-tema.component';
import { ClienteTemaComponent } from './temas/cliente-tema/cliente-tema.component';
import { HomeComponent } from './cliente/home/home.component';
import { LoginComponent } from './admin/login/login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ServicosLaboratoriosComponent } from './cliente/servicos-laboratorios/servicos-laboratorios.component';
import { ObservatorioComponent } from './cliente/observatorio/observatorio.component';
import { UpdateLaboratorioComponent } from './admin/update-laboratorio/update-laboratorio.component';

const routes: Routes = [
  {
    path: '',
    component: ClienteTemaComponent, data: { preload: true },
    children: [
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'home', component: HomeComponent, data: { preload: true } },
      { path: 'areas-atuacao', component: AreasAtuacaoComponent, data: { preload: true } },
      { path: 'lista-segmentos/:id', component: ListaSegmentosComponent, data: { preload: true } },
      { path: 'servicos-segmento/:id', component: ServicosLaboratoriosComponent },
      {
        path: 'laboratorio-page/:id',
        component: PageLaboratorioComponent
      },
      {
        path: 'lista-laboratorios',
        component: LaboratoriosComponent
      },
      {
        path: 'servicos',
        component: ServicosComponent
      },
      {
        path: 'nova-conta',
        component: NovaContaComponent
      },
      {
        path: 'autenticar',
        component: AutenticarComponent
      },
      {
        path: 'observatorio',
        component: ObservatorioComponent
      },
    ]
  },
  {
    path: 'admin',
    component: AdminTemaComponent,
    children: [
      { path: '', component: DashboardComponent, },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'lista-laboratorios', component: ListaLaboratoriosComponent },
      { path: 'update-laboratorio/:id', component: UpdateLaboratorioComponent },
      // { path: 'editar-usuario/:id', component: EditarUsuarioComponent }
    ]
  },
  {
    path: 'autenticacao',
    component: ComumTemaComponent,
    children: [{ path: 'login', component: LoginComponent }]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: CustomPreloading })],
  exports: [RouterModule],
  providers: [CustomPreloading]
})
export class AppRoutingModule { }

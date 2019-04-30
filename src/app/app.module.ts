import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './temas/material/material.module';
import { AppComponent } from './app.component';
import { ComumTemaComponent } from './temas/comum-tema/comum-tema.component';
import { UtilService } from './services/util.service';
import { ClienteTemaComponent } from './temas/cliente-tema/cliente-tema.component';
import { ClienteModule } from './cliente/cliente.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InterceptorModule } from './auth/interceptor/interceptor.module';
import { environment } from './../environments/environment';
import { AdminModule } from './admin/admin.module';
 

@NgModule({
  declarations: [
      AppComponent,
      ComumTemaComponent,
      ClienteTemaComponent
    ],
  imports: [
      CommonModule,
      BrowserModule,
      HttpClientModule,
      HttpModule,
      InterceptorModule,
      AppRoutingModule,
      RouterModule,
      MaterialModule,
      ClienteModule,
      AdminModule,
      BrowserAnimationsModule
    ],
providers: [UtilService],
bootstrap: [AppComponent]
})
export class AppModule {


  authToken = localStorage.getItem('auth_token');
  authTokenAdmin = localStorage.getItem('auth_token_admin');
  logado = <any>(localStorage.getItem('logado'));

  constructor (
    private http: HttpClient
  ) {

    this.http.post<any[]>(environment.urlApiSistemaInterno +  'authenticate', {'password': 'admin', 'rememberMe': true, 'username': 'admin'
    }).subscribe((token: any) => {
      localStorage.setItem('auth_token', token.id_token);
    });

    // if (this.authToken === null ) {    
    //   this.http.post<any[]>(environment.urlApiSistemaInterno +  'authenticate', {'password': 'admin', 'rememberMe': true, 'username': 'admin'
    //   }).subscribe((token: any) => {
    //     localStorage.setItem('auth_token', token.id_token);
    //   });
    // } else if(!<boolean>this.logado) {
    //   localStorage.setItem('auth_token', this.authTokenAdmin);
    // }

  }
}

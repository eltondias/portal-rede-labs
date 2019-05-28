import { Telefone } from './../model/telefone.model';
import { Laboratorio } from 'src/app/model/laboratorio.model';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LinkRedeSocial } from '../model/link-rede-social.model';
import { Email } from '../model/email.model';

@Injectable({
  providedIn: 'root'
})
export class LaboratorioService {

  URL_API = environment.urlApiSistemaInterno;
  constructor(private http: HttpClient) { }

  atualizarLaboratorio(lab: Laboratorio): Observable<any> {
    return this.http.put<any>(this.URL_API + 'laboratorios', lab);
  }

  salvarLaboratorio(lab: Laboratorio): Observable<any> {    
    return this.http.post<any>(this.URL_API + 'laboratorios', lab);
  }

  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(this.URL_API + 'laboratorios/' + id, { observe: 'response' });
}



  getLaboratorios(usuario: Account): Observable<any[]> {
    return this.http.get<any[]>(this.URL_API + 'laboratorios/user?=id=' + usuario.id + '&id=' + usuario.id + '&page=0&size=1000&sort=id,asc');
  }

}

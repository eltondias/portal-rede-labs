import { ILaboratorio } from './../model/laboratorio.model';
import { map } from 'rxjs/operators';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  URL_API = environment.urlApiSistemaInterno;

  constructor(private http: HttpClient) {}

    getAreasDeAtuacao(): Observable<any[]> {
        return this.http.get<any[]>(this.URL_API + 'area-de-atuacaos');
    }

    getAreaDeAtuacao(id): Observable<any[]> {
        return this.http.get<any[]>(this.URL_API + 'area-de-atuacaos/' + id);
    }

    getSegmentosAreaAtuacao(id): Observable<any[]> {
        return this.http.get<any[]>(this.URL_API + 'segmentos/areaatuacao/' + id);
    }

    getSegmento(id): Observable<any[]> {
        return this.http.get<any[]>(this.URL_API + 'segmentos/' + id);
    }

    getEnsaios(): Observable<any[]> {
        return this.http.get<any[]>(this.URL_API + 'ensaios');
    }

    getEnsaioSegmento(id): Observable<any[]> {
        return this.http.get<any[]>(this.URL_API + 'ensaios/segmento/' + id);
    }

    getLaboratorios(): Observable<any[]> {
        return this.http.get<any[]>(this.URL_API + 'laboratorios' + '?page=0&size=1000&sort=id,asc');
    }

    getLaboratorio(id): Observable<any[]> {
        return this.http.get<any[]>(this.URL_API + 'laboratorios/' + id);
    }

    getMembrosLaboratorio(id): Observable<any[]> {
        return this.http.get<any[]>(this.URL_API + 'atuacao-membros/laboratorio/' + id);
    }

    getTelefonesLaboratorio(id): Observable<any[]> {
        return this.http.get<any[]>(this.URL_API + 'telefones/laboratorio/' + id);
    }

    getEmailsLaboratorio(id): Observable<any[]> {
        return this.http.get<any[]>(this.URL_API + 'emails/laboratorio/' + id);
    }

    getLinkRedeSocialsLaboratorio(id): Observable<any[]> {
        return this.http.get<any[]>(this.URL_API + 'link-rede-socials/laboratorio/' + id);
    }

    getAcreditacaosLaboratorio(id): Observable<any[]> {
        return this.http.get<any[]>(this.URL_API + 'acreditacaos/laboratorio/' + id);
    }

    getPhotosLaboratorio(id): Observable<any[]> {
        return this.http.get<any[]>(this.URL_API + 'photos/laboratorio/' + id);
    }

    getCaracterizacaoLaboratoriosLaboratorio(id): Observable<any[]> {
        return this.http.get<any[]>(this.URL_API + 'caracterizacao-laboratorios/' + id);
    }

    getEndereco(id) {
        return this.http.get<any[]>(this.URL_API + 'enderecos/' + id);
    }

    getEnsaio(id) {
        return this.http.get<any[]>(this.URL_API + 'ensaios/' + id);
    }

    getPesquisadors(id) {
        return this.http.get<any[]>(this.URL_API + 'pesquisadors/' + id);
    }

    registarConta(account: any): Observable<any> {
        return this.http.post(this.URL_API + 'register', account);
    }

    loginAuthenticate(credentials): Observable<any> {
        const data = {
            username: credentials.username,
            password: credentials.password,
            rememberMe: credentials.rememberMe
        };
        return this.http.post(this.URL_API + 'authenticate', data, { observe: 'response' });

       
    }


    login(credentials, callback?) {
        const cb = callback || function() {};
        return new Promise((resolve, reject) => {
            this.loginAuthenticate(credentials).subscribe(
                data => {
                    console.log(data);
                    resolve(data);
                    return cb();
                },
                err => {
                    this.logout();
                    reject(err);
                    return cb(err);
                }
            );
        });
    }

    logout(): Observable<any> {
        return new Observable(observer => {
            // this.$localStorage.clear('authenticationToken');
            // this.$sessionStorage.clear('authenticationToken');
            observer.complete();
        });
    }

    criarLaboratorio(lab: ILaboratorio): Observable<any> {
        return this.http.post(this.URL_API + 'laboratorios', lab);
    }


    getAccount(): Observable<HttpResponse<Account>> {
        return this.http.get<Account>(this.URL_API + 'account', { observe: 'response' });
    }


    getInstituicoes() {
        return this.http.get<any[]>(this.URL_API + 'instituicaos/?sort=nome,asc&sort=id');
    }

    getCoordenadores() {
        return this.http.get<any[]>(this.URL_API + 'pesquisadors/?filter=laboratorio-is-null');
    }


    getCidades() {
        return this.http.get<any[]>(this.URL_API + 'cidades/all');        
    }

}

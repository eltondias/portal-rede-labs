import { ITelefone } from '../model/telefone.model';
 import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Telefone } from '../model/telefone.model';

 

type EntityResponseType = HttpResponse<ITelefone>;
type EntityArrayResponseType = HttpResponse<ITelefone[]>;

@Injectable({ providedIn: 'root' })
export class TelefoneService {
    private resourceUrl = environment.urlApiSistemaInterno + 'telefones';

    telefones: Telefone[] = [];

    constructor(private http: HttpClient) {}

    create(telefone: ITelefone): Observable<EntityResponseType> {
        return this.http.post<ITelefone>(this.resourceUrl, telefone, { observe: 'response' });
    }

    update(telefone: ITelefone): Observable<EntityResponseType> {
        return this.http.put<ITelefone>(this.resourceUrl, telefone, { observe: 'response' });
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<ITelefone>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }


    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    findTelefonesByInstituicao(id?: any): Observable<EntityArrayResponseType> {
        return this.http.get<ITelefone[]>(`${this.resourceUrl}/instituicao/${id}`, { observe: 'response' });
    }

    findTelefonesByUnidade(id?: any): Observable<EntityArrayResponseType> {
        return this.http.get<ITelefone[]>(`${this.resourceUrl}/unidade/${id}`, { observe: 'response' });
    }

    findTelefonesByLaboratorio(id?: any): Observable<EntityArrayResponseType> {
        return this.http.get<ITelefone[]>(`${this.resourceUrl}/laboratorio/${id}`, { observe: 'response' });
    }
}

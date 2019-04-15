 
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICaracterizacaoLaboratorio } from '../model/caracterizacao-laboratorio.model';

 

type EntityResponseType = HttpResponse<ICaracterizacaoLaboratorio>;
type EntityArrayResponseType = HttpResponse<ICaracterizacaoLaboratorio[]>;

@Injectable({ providedIn: 'root' })
export class CaracterizacaoLaboratorioService {
   
    private resourceUrl = environment.urlApiSistemaInterno + 'caracterizacao-laboratorios';

    constructor(private http: HttpClient) {}

    create(caracterizacaoLaboratorio: ICaracterizacaoLaboratorio): Observable<EntityResponseType> {
        return this.http.post<ICaracterizacaoLaboratorio>(this.resourceUrl, caracterizacaoLaboratorio, { observe: 'response' });
    }

    update(caracterizacaoLaboratorio: ICaracterizacaoLaboratorio): Observable<EntityResponseType> {
        return this.http.put<ICaracterizacaoLaboratorio>(this.resourceUrl, caracterizacaoLaboratorio, { observe: 'response' });
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<ICaracterizacaoLaboratorio>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
}

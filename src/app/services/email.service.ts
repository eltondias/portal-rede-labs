import { Email } from 'src/app/model/email.model';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEmail } from '../model/email.model';
 

type EntityResponseType = HttpResponse<IEmail>;
type EntityArrayResponseType = HttpResponse<IEmail[]>;

@Injectable({ providedIn: 'root' })
export class EmailService {
    private resourceUrl = environment.urlApiSistemaInterno + 'emails';
 

    emails: Email[] = [];

    constructor(private http: HttpClient) {}


    create(email: IEmail): Observable<EntityResponseType> {
        return this.http.post<IEmail>(this.resourceUrl, email, { observe: 'response' });
    }

    update(email: IEmail): Observable<EntityResponseType> {
        return this.http.put<IEmail>(this.resourceUrl, email, { observe: 'response' });
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<IEmail>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    delete(id?: number): Observable<HttpResponse<any>> {        
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    findEmailsByInstituicao(id?: any): Observable<EntityArrayResponseType> {
        return this.http.get<IEmail[]>(`${this.resourceUrl}/instituicao/${id}`, { observe: 'response' });
    }

    findEmailsByUnidade(id?: any): Observable<EntityArrayResponseType> {
        return this.http.get<IEmail[]>(`${this.resourceUrl}/unidade/${id}`, { observe: 'response' });
    }

    findEmailsByLaboratorio(id?: any): Observable<EntityArrayResponseType> {
        return this.http.get<IEmail[]>(`${this.resourceUrl}/laboratorio/${id}`, { observe: 'response' });
    }
}

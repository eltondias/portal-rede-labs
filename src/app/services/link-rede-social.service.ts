import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LinkRedeSocial, ILinkRedeSocial } from '../model/link-rede-social.model';
import { IEmail } from '../model/email.model';
 
type EntityResponseType = HttpResponse<ILinkRedeSocial>;
type EntityArrayResponseType = HttpResponse<ILinkRedeSocial[]>;

@Injectable({ providedIn: 'root' })
export class LinkRedeSocialService {
    redesSociais: LinkRedeSocial[] = [];
    private resourceUrl = environment.urlApiSistemaInterno + 'link-rede-socials';
 
    constructor(private http: HttpClient) {}

    create(linkRedeSocial: ILinkRedeSocial): Observable<EntityResponseType> {
        return this.http.post<ILinkRedeSocial>(this.resourceUrl, linkRedeSocial, { observe: 'response' });
    }

    update(linkRedeSocial: ILinkRedeSocial): Observable<EntityResponseType> {
        return this.http.put<ILinkRedeSocial>(this.resourceUrl, linkRedeSocial, { observe: 'response' });
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<ILinkRedeSocial>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
 
    delete(id: number): Observable<HttpResponse<any>> {    
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    findRedeSociaisByInstituicao(id?: any): Observable<EntityArrayResponseType> {
        return this.http.get<IEmail[]>(`${this.resourceUrl}/instituicao/${id}`, { observe: 'response' });
    }

    findRedeSociaisByUnidade(id?: any): Observable<EntityArrayResponseType> {
        return this.http.get<IEmail[]>(`${this.resourceUrl}/unidade/${id}`, { observe: 'response' });
    }

    findRedeSociaisByLaboratorio(id?: any): Observable<EntityArrayResponseType> {
        return this.http.get<IEmail[]>(`${this.resourceUrl}/laboratorio/${id}`, { observe: 'response' });
    }
}

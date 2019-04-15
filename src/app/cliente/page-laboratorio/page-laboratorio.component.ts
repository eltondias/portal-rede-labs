import { IEndereco } from './../../model/endereco.model';
import { ICaracterizacaoLaboratorio } from './../../model/caracterizacao-laboratorio.model';
import { IMarker, IPontoGeolocalizavel } from './../../model/ponto-geolocalizavel.model';
import { Laboratorio } from './../../model/laboratorio.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from './../../services/api.service';
import { MouseEvent } from '@agm/core';

import { faFlag, faQuestionCircle, faUser } from '@fortawesome/free-regular-svg-icons';
import {
    faAt,
    faAward,
    faBalanceScale,
    faBoxOpen,
    faBuilding,
    faCogs,
    faDice,
    faFlask,
    faGlobeAmericas,
    faMapSigns,
    faMedal,
    faNewspaper,
    faUniversity,
    faUsersCog
} from '@fortawesome/free-solid-svg-icons';
import { faAtom } from '@fortawesome/free-solid-svg-icons/faAtom';
import { Pesquisador } from 'src/app/model/pesquisador.model';


@Component({
    selector: 'app-page-laboratorio',
    templateUrl: './page-laboratorio.component.html',
    styleUrls: ['page-laboratorio.component.css']
})
export class PageLaboratorioComponent implements OnInit {
    question = faQuestionCircle;
    arrowRight = faMapSigns;
    flask = faFlask;
    fanews = faNewspaper;
    at = faAt;
    facertificate = faAward;
    faBoxes = faBoxOpen;
    faflask = faAtom;
    fasegmento = faCogs;
    faArea = faBalanceScale;
    fauniversity = faUniversity;
    faintcert = faMedal;
    fauser = faUser;
    famembro = faUsersCog;
    facity = faBuilding;
    fastate = faFlag;
    facontry = faGlobeAmericas;

    laboratorio: Laboratorio;
    coordenador: Pesquisador;
    marker: IMarker = {};
    geolocalizacao: IPontoGeolocalizavel = {};
    public zoom: number;
    newListLabs: Laboratorio[] = [];

    constructor(private activatedRoute: ActivatedRoute, private api: ApiService) {}

    ngOnInit() {
        this.carregarMapa(this.geolocalizacao);
        this.getLaboratorio();
    }

    markerDragEnd($event: MouseEvent) {
        this.marker.lat = $event.coords.lat;
        this.marker.lng = $event.coords.lng;
        this.geolocalizacao.latitude = $event.coords.lat.toString();
        this.geolocalizacao.longitude = $event.coords.lng.toString();
    }

    private carregarMapa(geolocaliezacao?: IPontoGeolocalizavel) {
        console.log(geolocaliezacao);
        this.zoom = 15;
        this.marker = {
            lat: !!geolocaliezacao ? Number(geolocaliezacao.latitude) : -1.474765,
            lng: !!geolocaliezacao ? Number(geolocaliezacao.longitude) : -48.456923,
            label: 'L',
            draggable: true
        };
    }

    getLaboratorio() {
        this.activatedRoute.params.subscribe(params => {
            this.api.getLaboratorio(params.id).subscribe(laboratorio => {
                this.laboratorio = <Laboratorio>laboratorio;
                this.newListLabs.push(this.laboratorio);
                this.getMembrosLaboratorio();
                this.getTelefonesLaboratorio();
                this.getEmailsLaboratorio();
                this.getEmailsLaboratorio();
                this.getLinkRedeSocialsLaboratorio();
                this.getAcreditacaosLaboratorio();
                this.getPhotosLaboratorio();
                this.getCaracterizacaoLaboratoriosLaboratorio();
                this.getEndereco();
                this.getPesquisador();
                console.log(this.laboratorio);
            });
        });
    }

    getPesquisador() {
        this.api.getPesquisadors(this.laboratorio.coordenadorId).subscribe(coordenador => {
            this.coordenador = <Pesquisador>coordenador;
        });
    }

    getMembrosLaboratorio() {
        this.api.getMembrosLaboratorio(this.laboratorio.id).subscribe(membros => {
            this.laboratorio.membros = membros;
        });
    }

    getTelefonesLaboratorio() {
        this.api.getTelefonesLaboratorio(this.laboratorio.id).subscribe(telefones => {
            this.laboratorio.telefones = telefones;
        });
    }

    getEmailsLaboratorio() {
        this.api.getEmailsLaboratorio(this.laboratorio.id).subscribe(emails => {
            this.laboratorio.emails = emails;
        });
    }

    getLinkRedeSocialsLaboratorio() {
        this.api.getLinkRedeSocialsLaboratorio(this.laboratorio.id).subscribe(redesocials => {
            this.laboratorio.redesocials = redesocials;
        });
    }

    getAcreditacaosLaboratorio() {
        this.api.getAcreditacaosLaboratorio(this.laboratorio.id).subscribe(certificacaos => {
            this.laboratorio.certificacaos = certificacaos;
        });
    }

    getPhotosLaboratorio() {
        this.api.getPhotosLaboratorio(this.laboratorio.id).subscribe(photos => {
            this.laboratorio.photos = photos;
        });
    }

    getCaracterizacaoLaboratoriosLaboratorio() {
        this.api
            .getCaracterizacaoLaboratoriosLaboratorio(this.laboratorio.caracterizacaoLaboratorioId)
            .subscribe(caracterizacaoLaboratorio => {
                this.laboratorio.caracterizacaoLaboratorio = <ICaracterizacaoLaboratorio>caracterizacaoLaboratorio;
            });
    }

    getEndereco() {
        this.api.getEndereco(this.laboratorio.enderecoId).subscribe(endereco => {
            this.laboratorio.endereco = <IEndereco>endereco;
            this.geolocalizacao = this.laboratorio.endereco.geolocalizacao;
            this.carregarMapa(this.geolocalizacao);
        });
    }

    truncateText(texto: String) {
        const tamanho = 20;
        const nText = texto.length - tamanho < 0 ? texto.length : tamanho;

        let novoTexto = '';
        for (let i = 0; i < nText; i++) {
            novoTexto += texto[i];
        }
        return novoTexto + '...';
    }

    //   getEnsaio() {
    //     this.api.getEnsaio(this.laboratorio.id).subscribe( resposnse => {
    //     });
    //   }

    //   getPesquisadors() {
    //     this.api.getPesquisadors(this.laboratorio.id).subscribe( resposnse => {
    //     });
    //   }
}

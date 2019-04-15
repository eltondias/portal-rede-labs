import { ISegmento } from './../../model/segmento.model';
import { IAreaDeAtuacao } from './../../model/area-de-atuacao.model';
import { IAreaConhecimento } from './../../model/area-conhecimento.model';
import { ICaracterizacaoLaboratorio } from './../../model/caracterizacao-laboratorio.model';
import { IEndereco } from './../../model/endereco.model';
import { ILaboratorio, Laboratorio, Status } from './../../model/laboratorio.model';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-observatorio',
  templateUrl: './observatorio.component.html',
  styleUrls: ['./observatorio.component.css']
})
export class ObservatorioComponent implements OnInit {

  constructor(private http: HttpClient, private api: ApiService) {}

  laboratorios: any;
  private _laboratorio: ILaboratorio;
  private _endereco: IEndereco;
  private _caracterizacaoLaboratorio: ICaracterizacaoLaboratorio;
  private _areaConhecimento: IAreaConhecimento;
  private _subareaConhecimento: IAreaConhecimento;
  private _areaatuacao: IAreaDeAtuacao;
  private _segmento: ISegmento;
  areasConhecimento: IAreaConhecimento[] = [];

  ngOnInit() {
    this.getLaboratorios();
  }

  getLaboratorios() {
    this.http.get<any[]>('http://177.74.1.48:8080/sigap/api/mapa/laboratorios').subscribe( labs => {
     console.log(labs);
     this.laboratorios = labs;
    });
  }

  get laboratorio() {
    return this._laboratorio;
  }

  set laboratorio(laboratorio: ILaboratorio) {
      this._laboratorio = laboratorio;
  }

  get endereco() {
    return this._endereco;
}

set endereco(endereco: IEndereco) {
    this._endereco = endereco;
}

get caracterizacaoLaboratorio() {
    return this._caracterizacaoLaboratorio;
}

set caracterizacaoLaboratorio(caracterizacaoLaboratorio: ICaracterizacaoLaboratorio) {
    this._caracterizacaoLaboratorio = caracterizacaoLaboratorio;
}

get areaConhecimento() {
    return this._areaConhecimento;
}

set areaConhecimento(areaConhecimento: IAreaConhecimento) {
    this._areaConhecimento = areaConhecimento;
}

get subareaConhecimento() {
    return this._subareaConhecimento;
}

set subareaConhecimento(subareaConhecimento: IAreaConhecimento) {
    this._subareaConhecimento = subareaConhecimento;
}

get areaatuacao() {
    return this._areaatuacao;
}

set areaatuacao(areaatuacao: IAreaDeAtuacao) {
    this._areaatuacao = areaatuacao;
}

get segmento() {
    return this._segmento;
}

set segmento(segmento: ISegmento) {
    this._segmento = segmento;
}

  criarLab() {

    this.laboratorio.areasConhecimentos = [];
    this.laboratorio.ensaios = [];
    this.laboratorio.ensaios = [];
    // this.laboratorio.areasConhecimentos = this.areasConhecimento;
    this.laboratorio.endereco = this.endereco;
    this.laboratorio.caracterizacaoLaboratorio = this.caracterizacaoLaboratorio;


    // this.laboratorio.id = null;
    // this.laboratorio =  {
    //   "nome" : "Lab  teste",
    //   "sigla" : "TESTE",
    //   "cnpj" : "00000000000001",
    //   "descricao" : "teste",
    //   "website" : "teste.com",
    //   "status" : Status.PENDENTE,
    //   "logotipo" : null,
    //   "logotipoContentType" : null,
    //   "coordenadorId" : 11,
    //   "coordenadorNome" : "elton",
    //   "enderecoId" : 31,
    //   "caracterizacaoLaboratorioId" : 25,
    //   "areasConhecimentos" : [ ],
    //   "ensaios" : [ ],
    //   "instituicaoId" : 3,
    //   "instituicaoSigla" : "ALUNORTE",
    //   "unidadeId" : null,
    //   "unidadeNome" : null
    // }




    // this.laboratorio.nome = 'Lab teste';
    // this.laboratorio.acreditacaos = []
    // this.laboratorio.areasConhecimentos = [];
    // this.laboratorio.caracterizacaoLaboratorio = null;
    // this.laboratorio.certificacaos = [];
    // this.laboratorio.cnpj =  '545644654';
    // this.laboratorio.coordenadorId =  7;
    // this.laboratorio.coordenadorNome = 'Fulano';
    // this.laboratorio.descricao = 'descriacao';
    // this.laboratorio.emails = [];
    // this.laboratorio.endereco = null;
    // this.laboratorio.enderecoId = 22;
    // this.laboratorio.ensaios = [];
    // this.laboratorio.instituicaoId = 1;
    // this.laboratorio.instituicaoSigla  = 'UFPAsigla';
    // this.laboratorio.sigla =  'UFPA';
    // this.laboratorio.membros = [];
    // this.laboratorio.telefones = [];
    // this.laboratorio.website = 'wwww';
    // this.laboratorio.status = Status.PENDENTE;
    // this.laboratorio.photos = [];
    // this.laboratorio.logotipo = '';
    // this.laboratorio.unidadeNome = '';
    // this.laboratorio.logotipoContentType = '';
    // this.laboratorio.redesocials = [];
    // this.laboratorio.unidadeId = null;
    // this.laboratorio.caracterizacaoLaboratorioId = 16;

    this.api.criarLaboratorio(this.laboratorio).subscribe(response => {
      console.log(response);
    } );

  }



}
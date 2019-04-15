import { IPontoGeolocalizavel } from './ponto-geolocalizavel.model';

export interface IEndereco {
    id?: number;
    logradouro?: string;
    numero?: string;
    cep?: string;
    bairro?: string;
    cidadeId?: number;
    geolocalizacaoId?: number;
    geolocalizacao?: IPontoGeolocalizavel;
}

export class Endereco implements IEndereco {
    constructor(
        public id?: number,
        public logradouro?: string,
        public numero?: string,
        public cep?: string,
        public bairro?: string,
        public cidadeId?: number,
        public geolocalizacaoId?: number,
        public geolocalizacao?: IPontoGeolocalizavel
    ) {}
}

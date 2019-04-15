import { ISegmento } from './segmento.model';


export interface IAreaDeAtuacao {
    id?: number;
    nome?: string;
    descricao?: string;
    logotipoContentType?: string;
    logotipo?: any;
    segmentos?: ISegmento[];
}

export class AreaDeAtuacao implements IAreaDeAtuacao {
    constructor(
        public id?: number,
        public nome?: string,
        public descricao?: string,
        public logotipoContentType?: string,
        public logotipo?: any,
        public segmentos?: ISegmento[]
    ) {}
}

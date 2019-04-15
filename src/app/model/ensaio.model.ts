import { ISegmento } from './segmento.model';

export const enum Origem {
    GERAL = 'GERAL',
    EXTERNO = 'EXTERNO'
}

export interface IEnsaio {
    id?: number;
    nome?: string;
    descricao?: string;
    origem?: Origem;
    segmentos?: ISegmento[];
    itHasAcreditacao?: boolean;
}

export class Ensaio implements IEnsaio {
    constructor(
        public id?: number,
        public nome?: string,
        public descricao?: string,
        public origem?: Origem,
        public segmentos?: ISegmento[],
        public itHasAcreditacao?: false
    ) {}
}

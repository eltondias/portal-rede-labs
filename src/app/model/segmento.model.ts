import { IEnsaio } from './ensaio.model';
import { IAreaDeAtuacao } from './area-de-atuacao.model';

export interface ISegmento {
    id?: number;
    nome?: string;
    descricao?: string;
    logotipoContentType?: string;
    logotipo?: any;
    areaatuacaos?: IAreaDeAtuacao[];
    ensaios?: IEnsaio[];
}

export class Segmento implements ISegmento {
    constructor(
        public id?: number,
        public nome?: string,
        public descricao?: string,
        public logotipoContentType?: string,
        public logotipo?: any,
        public areaatuacaos?: IAreaDeAtuacao[],
        public ensaios?: IEnsaio[]
    ) {}
}

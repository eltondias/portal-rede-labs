import { IEnsaio } from './ensaio.model';

import { Moment } from 'moment';


export const enum Status {
    PENDENTE = 'PENDENTE',
    ATIVO = 'ATIVO',
    INATIVO = 'INATIVO',
    SUSPENSO = 'SUSPENSO'
}

export interface IAcreditacao {
    id?: number;
    descricao?: string;
    data?: Moment;
    status?: Status;
    laboratorioId?: number;
    ensaioId?: number;
    ensaio?: IEnsaio;
}

export class Acreditacao implements IAcreditacao {
    constructor(
        public id?: number,
        public descricao?: string,
        public data?: Moment,
        public status?: Status,
        public laboratorioId?: number,
        public ensaioId?: number,
        public ensaio?: IEnsaio
    ) {}
}

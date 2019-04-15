import { Moment } from 'moment';

export interface ICertificacao {
    id?: number;
    nome?: string;
    dataConferida?: Moment;
    descricao?: string;
    laboratorioId?: number;
    laboratorioNome?: string;
    certificadoraId?: number;
    certificadoraNome?: string;
}

export class Certificacao implements ICertificacao {
    constructor(
        public id?: number,
        public nome?: string,
        public dataConferida?: Moment,
        public descricao?: string,
        public laboratorioId?: number,
        public laboratorioNome?: string,
        public certificadoraId?: number,
        public certificadoraNome?: string
    ) {}
}

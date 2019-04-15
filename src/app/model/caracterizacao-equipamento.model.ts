import { Moment } from 'moment';

export const enum Importancia {
    ESSENCIAL = 'ESSENCIAL',
    APOIO = 'APOIO'
}

export const enum Porte {
    PEQUENO = 'PEQUENO',
    MEDIO = 'MEDIO',
    GRANDE = 'GRANDE',
    NAO_APLICAVEL = 'NAO_APLICAVEL'
}

export const enum Utilizacao {
    RESTRITO = 'RESTRITO',
    MULTIUSUARIO = 'MULTIUSUARIO'
}

export const enum Situacao {
    ATIVO = 'ATIVO',
    INATIVO = 'INATIVO'
}

export const enum Frequencia {
    NUNCA = 'NUNCA',
    ESPORADICO = 'ESPORADICO',
    DIAS_SEMANA = 'DIAS_SEMANA',
    DIAS_UTEIS = 'DIAS_UTEIS',
    CONTINUA = 'CONTINUA'
}

export const enum UnidadeMonetaria {
    REAL = 'REAL',
    DOLAR = 'DOLAR',
    EURO = 'EURO'
}

export const enum Origem {
    GERAL = 'GERAL',
    EXTERNO = 'EXTERNO'
}

export interface ICaracterizacaoEquipamento {
    id?: number;
    descricao?: string;
    quantidade?: number;
    custo?: number;
    dataAquisicao?: Moment;
    dataInicioOperacao?: Moment;
    importancia?: Importancia;
    porte?: Porte;
    utilizacao?: Utilizacao;
    situacao?: Situacao;
    frequencia?: Frequencia;
    unidadeMonetaria?: UnidadeMonetaria;
    origem?: Origem;
}

export class CaracterizacaoEquipamento implements ICaracterizacaoEquipamento {
    constructor(
        public id?: number,
        public descricao?: string,
        public quantidade?: number,
        public custo?: number,
        public dataAquisicao?: Moment,
        public dataInicioOperacao?: Moment,
        public importancia?: Importancia,
        public porte?: Porte,
        public utilizacao?: Utilizacao,
        public situacao?: Situacao,
        public frequencia?: Frequencia,
        public unidadeMonetaria?: UnidadeMonetaria,
        public origem?: Origem
    ) {}
}

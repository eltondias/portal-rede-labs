import { IPesquisador } from './pesquisador.model';
import { IMembro } from './membro.model';


export const enum Cargo {
    DISCENTE_DOUTORADO = 'DISCENTE_DOUTORADO',
    DISCENTE_MESTRADO = 'DISCENTE_MESTRADO',
    DISCENTE_ESPECIALIZACAO = 'DISCENTE_ESPECIALIZACAO',
    DISCENTE_GRADUACAO = 'DISCENTE_GRADUACAO',
    PESQUISADOR_VISITANTE = 'PESQUISADOR_VISITANTE',
    PESQUISADOR = 'PESQUISADOR',
    BOLSISTA = 'BOLSISTA',
    ESTAGIARIO = 'ESTAGIARIO',
    TECNICO_ADMINISTRATIVO = 'TECNICO_ADMINISTRATIVO',
    TESCNICO_ESPECIALIZADO = 'TESCNICO_ESPECIALIZADO'
}

export const enum Status {
    PENDENTE = 'PENDENTE',
    ATIVO = 'ATIVO',
    INATIVO = 'INATIVO',
    SUSPENSO = 'SUSPENSO'
}

export interface IAtuacaoMembro {
    id?: number;
    cargo?: Cargo;
    email?: String;
    status?: Status;
    laboratorioId?: number;
    laboratorio?: string;
    membroId?: number;
    membro?: IMembro;
    pesquisadorId?: number;
    pesquisador?: IPesquisador;
}

export class AtuacaoMembro implements IAtuacaoMembro {
    constructor(
        public id?: number,
        public cargo?: Cargo,
        public email?: String,
        public status?: Status,
        public laboratorioId?: number,
        public laboratorio?: string,
        public membroId?: number,
        public membro?: IMembro,
        public pesquisadorId?: number,
        public pesquisador?: IPesquisador
    ) {}
}

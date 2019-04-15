import { IUnidade } from './unidade.model';
import { IInstituicao } from './instituicao.model';

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

export interface IVinculoProfissional {
    id?: number;
    cargo?: Cargo;
    instituicaos?: IInstituicao[];
    unidades?: IUnidade[];
    pesquisadorId?: number;
}

export class VinculoProfissional implements IVinculoProfissional {
    constructor(
        public id?: number,
        public cargo?: Cargo,
        public instituicaos?: IInstituicao[],
        public unidades?: IUnidade[],
        public pesquisadorId?: number
    ) {}
}

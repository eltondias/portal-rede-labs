import { IInstituicao } from './instituicao.model';

export const enum Status {
    PENDENTE = 'PENDENTE',
    ATIVO = 'ATIVO',
    INATIVO = 'INATIVO',
    SUSPENSO = 'SUSPENSO'
}

export interface IEquipamento {
    id?: number;
    nome?: string;
    status?: Status;
    caracterizacaoId?: number;
    financiadoras?: IInstituicao[];
    laboratorioId?: number;
}

export class Equipamento implements IEquipamento {
    constructor(
        public id?: number,
        public nome?: string,
        public status?: Status,
        public caracterizacaoId?: number,
        public financiadoras?: IInstituicao[],
        public laboratorioId?: number
    ) {}
}

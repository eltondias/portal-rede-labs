import { IEnsaio } from './ensaio.model';

export const enum Status {
    PENDENTE = 'PENDENTE',
    ATIVO = 'ATIVO',
    INATIVO = 'INATIVO',
    SUSPENSO = 'SUSPENSO'
}

export interface ICadeiaProdutiva {
    id?: number;
    nome?: string;
    descricao?: string;
    status?: Status;
    ensaios?: IEnsaio[];
}

export class CadeiaProdutiva implements ICadeiaProdutiva {
    constructor(public id?: number, public nome?: string, public descricao?: string, public status?: Status, public ensaios?: IEnsaio[]) {}
}

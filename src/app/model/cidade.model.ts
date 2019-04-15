export interface ICidade {
    id?: number;
    nome?: string;
    estadoId?: number;
    estadoNome?: string;
}

export class Cidade implements ICidade {
    constructor(public id?: number, public nome?: string, public estadoId?: number, public estadoNome?: string) {}
}

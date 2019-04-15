export interface IEstado {
    id?: number;
    nome?: string;
    paisId?: number;
    paisNome?: string;
}

export class Estado implements IEstado {
    constructor(public id?: number, public nome?: string, public paisId?: number, public paisNome?: string) {}
}

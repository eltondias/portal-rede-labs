export interface IPais {
    id?: number;
    nome?: string;
}

export class Pais implements IPais {
    constructor(public id?: number, public nome?: string) {}
}

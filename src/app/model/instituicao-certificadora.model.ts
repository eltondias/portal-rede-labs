export interface IInstituicaoCertificadora {
    id?: number;
    nome?: string;
    sigla?: string;
}

export class InstituicaoCertificadora implements IInstituicaoCertificadora {
    constructor(public id?: number, public nome?: string, public sigla?: string) {}
}

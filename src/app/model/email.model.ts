export interface IEmail {
    id?: number;
    endereco?: string;
    pesquisadorId?: number;
    laboratorioId?: number;
    instituicaoId?: number;
}

export class Email implements IEmail {
    constructor(
        public id?: number,
        public endereco?: string,
        public pesquisadorId?: number,
        public laboratorioId?: number,
        public instituicaoId?: number
    ) {}
}

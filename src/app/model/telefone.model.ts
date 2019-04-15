export interface ITelefone {
    id?: number;
    codidoPais?: string;
    codigoArea?: string;
    numero?: string;
    pesquisadorId?: number;
    laboratorioId?: number;
    instituicaoId?: number;
}

export class Telefone implements ITelefone {
    constructor(
        public id?: number,
        public codidoPais?: string,
        public codigoArea?: string,
        public numero?: string,
        public pesquisadorId?: number,
        public laboratorioId?: number,
        public instituicaoId?: number
    ) {}
}

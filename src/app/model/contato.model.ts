export interface IContato {
    id?: number;
    pesquisadorId?: number;
    laboratorioId?: number;
    instituicaoId?: number;
    unidadeId?: number;
}

export class Contato implements IContato {
    constructor(
        public id?: number,
        public pesquisadorId?: number,
        public laboratorioId?: number,
        public instituicaoId?: number,
        public unidadeId?: number
    ) {}
}

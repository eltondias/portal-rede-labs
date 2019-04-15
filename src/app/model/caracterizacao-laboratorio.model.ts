export interface ICaracterizacaoLaboratorio {
    id?: number;
    pesquisa?: boolean;
    servicoEspecializado?: boolean;
    ensino?: boolean;
    extensao?: boolean;
    pED?: boolean;
}

export class CaracterizacaoLaboratorio implements ICaracterizacaoLaboratorio {
    constructor(
        public id?: number,
        public pesquisa?: boolean,
        public servicoEspecializado?: boolean,
        public ensino?: boolean,
        public extensao?: boolean,
        public pED?: boolean
    ) {
        this.pesquisa = this.pesquisa || false;
        this.servicoEspecializado = this.servicoEspecializado || false;
        this.ensino = this.ensino || false;
        this.extensao = this.extensao || false;
        this.pED = this.pED || false;
    }
}

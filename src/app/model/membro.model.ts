import { IAtuacaoMembro } from './atuacao-membro.model';

export interface IMembro {
    id?: number;
    nome?: string;
    cpf?: string;
    email?: string;
    atuacaoId?: number;
    atuacaoMembro?: IAtuacaoMembro;
}

export class Membro implements IMembro {
    constructor(
        public id?: number,
        public nome?: string,
        public cpf?: string,
        public email?: string,
        public atuacaoId?: number,
        public atuacaomembro?: IAtuacaoMembro
    ) {}
}

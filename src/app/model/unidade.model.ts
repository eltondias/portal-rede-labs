import { ILaboratorio } from './laboratorio.model';
import { ITelefone } from './telefone.model';
import { ILinkRedeSocial } from './link-rede-social.model';
import { IEmail } from './email.model';
import { IEndereco } from './endereco.model';

export const enum Status {
    PENDENTE = 'PENDENTE',
    ATIVO = 'ATIVO',
    INATIVO = 'INATIVO',
    SUSPENSO = 'SUSPENSO'
}

export interface IUnidade {
    id?: number;
    nome?: string;
    sigla?: string;
    cnpj?: string;
    razaoSocial?: string;
    inscricaoEstadual?: string;
    website?: string;
    financiadora?: boolean;
    descricao?: string;
    status?: Status;
    instituicaoId?: number;
    instituicao?: string;
    enderecoId?: number;
    endereco?: IEndereco;
    emails?: IEmail[];
    telefones?: ITelefone[];
    redesocials?: ILinkRedeSocial[];
    subUnidades?: IUnidade[];
    laboratorios?: ILaboratorio[];
    vinculoId?: number;
    unidadeId?: number;
}

export class Unidade implements IUnidade {
    constructor(
        public id?: number,
        public nome?: string,
        public sigla?: string,
        public cnpj?: string,
        public razaoSocial?: string,
        public inscricaoEstadual?: string,
        public website?: string,
        public financiadora?: boolean,
        public descricao?: string,
        public status?: Status,
        public instituicaoId?: number,
        public instituicao?: string,
        public enderecoId?: number,
        public endereco?: IEndereco,
        public emails?: IEmail[],
        public telefones?: ITelefone[],
        public redesocials?: ILinkRedeSocial[],
        public subUnidades?: IUnidade[],
        public laboratorios?: ILaboratorio[],
        public vinculoId?: number,
        public unidadeId?: number
    ) {
        this.financiadora = this.financiadora || false;
    }
}

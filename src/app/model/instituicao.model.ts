import { ILaboratorio } from './laboratorio.model';
import { IUnidade } from './unidade.model';
import { ILinkRedeSocial } from './link-rede-social.model';
import { ITelefone } from './telefone.model';
import { IEmail } from './email.model';
import { IEndereco } from './endereco.model';

export const enum Status {
    PENDENTE = 'PENDENTE',
    ATIVO = 'ATIVO',
    INATIVO = 'INATIVO',
    SUSPENSO = 'SUSPENSO'
}

export const enum Natuteza {
    PUBLICA = 'PUBLICA',
    PRIVADA = 'PRIVADA'
}

export const enum Origem {
    GERAL = 'GERAL',
    EXTERNO = 'EXTERNO'
}

export interface IInstituicao {
    id?: number;
    nome?: string;
    sigla?: string;
    cnpj?: string;
    razaoSocial?: string;
    inscricaoEstadual?: string;
    website?: string;
    financiadora?: boolean;
    descricao?: string;
    parceria?: boolean;
    status?: Status;
    natureza?: Natuteza;
    origem?: Origem;
    logotipoContentType?: string;
    logotipo?: any;
    enderecoId?: number;
    endereco?: IEndereco;
    emails?: IEmail[];
    telefones?: ITelefone[];
    redesocials?: ILinkRedeSocial[];
    unidades?: IUnidade[];
    laboratorios?: ILaboratorio[];
    vinculoId?: number;
}

export class Instituicao implements IInstituicao {
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
        public parceria?: boolean,
        public status?: Status,
        public natureza?: Natuteza,
        public origem?: Origem,
        public logotipoContentType?: string,
        public logotipo?: any,
        public enderecoId?: number,
        public endereco?: IEndereco,
        public emails?: IEmail[],
        public telefones?: ITelefone[],
        public redesocials?: ILinkRedeSocial[],
        public unidades?: IUnidade[],
        public laboratorios?: ILaboratorio[],
        public vinculoId?: number
    ) {
        this.financiadora = this.financiadora || false;
        this.parceria = this.parceria || false;
    }
}

import { IAtuacaoMembro } from './atuacao-membro.model';
import { IVinculoProfissional } from './vinculo-profissional.model';
import { ILinkRedeSocial } from './link-rede-social.model';
import { ITelefone } from './telefone.model';
import { IEmail } from './email.model';
import { Moment } from 'moment';

export const enum Titulacao {
    DOUTOR = 'DOUTOR',
    MESTRE = 'MESTRE',
    ESPECIALISTA = 'ESPECIALISTA',
    GRADUADO = 'GRADUADO',
    TECNICO = 'TECNICO',
    ENSINO_MEDIO = 'ENSINO_MEDIO',
    ENSINO_FUNDAMENTAL = 'ENSINO_FUNDAMENTAL'
}

export interface IPesquisador {
    id?: number;
    nome?: string;
    idCNPQ?: string;
    dataSincronizacao?: Moment;
    cnpqLink?: string;
    titulacao?: Titulacao;
    imagemContentType?: string;
    imagem?: any;
    userLogin?: string;
    email?: string;
    userId?: number;
    userFirstName?: string;
    userLastName?: string;
    cpf?: string;
    emails?: IEmail[];
    telefones?: ITelefone[];
    redesocials?: ILinkRedeSocial[];
    vinculos?: IVinculoProfissional[];
    atuacaos?: IAtuacaoMembro[];
}

export class Pesquisador implements IPesquisador {
    constructor(
        public id?: number,
        public nome?: string,
        public idCNPQ?: string,
        public dataSincronizacao?: Moment,
        public cnpqLink?: string,
        public titulacao?: Titulacao,
        public imagemContentType?: string,
        public imagem?: any,
        public userLogin?: string,
        public email?: string,
        public userFirstName?: string,
        public userLastName?: string,
        public cpf?: string,
        public userId?: number,
        public emails?: IEmail[],
        public telefones?: ITelefone[],
        public redesocials?: ILinkRedeSocial[],
        public atuacaos?: IAtuacaoMembro[],
        public vinculos?: IVinculoProfissional[]
    ) {}
}

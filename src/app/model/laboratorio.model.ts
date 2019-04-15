import { IEnsaio } from './ensaio.model';
import { IAreaConhecimento } from './area-conhecimento.model';
import { IAcreditacao } from './acreditacao.model';
import { ICertificacao } from './certificacao.model';
import { IAtuacaoMembro } from './atuacao-membro.model';
import { IPhoto } from './photo.model';
import { ILinkRedeSocial } from './link-rede-social.model';
import { ITelefone } from './telefone.model';
import { IEmail } from './email.model';
import { ICaracterizacaoLaboratorio } from './caracterizacao-laboratorio.model';
import { IEndereco } from './endereco.model';

export const enum Status {
    PENDENTE = 'PENDENTE',
    ATIVO = 'ATIVO',
    INATIVO = 'INATIVO',
    SUSPENSO = 'SUSPENSO'
}

export interface ILaboratorio {
    id?: number;
    nome?: string;
    sigla?: string;
    cnpj?: string;
    descricao?: string;
    website?: string;
    status?: Status;
    logotipoContentType?: string;
    logotipo?: any;
    coordenadorId?: number;
    coordenadorNome?: string;
    enderecoId?: number;
    endereco?: IEndereco;
    caracterizacaoLaboratorioId?: number;
    caracterizacaoLaboratorio?: ICaracterizacaoLaboratorio;
    emails?: IEmail[];
    telefones?: ITelefone[];
    redesocials?: ILinkRedeSocial[];
    photos?: IPhoto[];
    membros?: IAtuacaoMembro[];
    certificacaos?: ICertificacao[];
    acreditacaos?: IAcreditacao[];
    areasConhecimentos?: IAreaConhecimento[];
    ensaios?: IEnsaio[];
    instituicaoId?: number;
    instituicaoSigla?: string;
    unidadeId?: number;
    unidadeNome?: string;
}

export class Laboratorio implements ILaboratorio {
    constructor(
        public id?: number,
        public nome?: string,
        public sigla?: string,
        public cnpj?: string,
        public descricao?: string,
        public website?: string,
        public status?: Status,
        public logotipoContentType?: string,
        public logotipo?: any,
        public coordenadorId?: number,
        public coordenadorNome?: string,
        public enderecoId?: number,
        public endereco?: IEndereco,
        public caracterizacaoLaboratorioId?: number,
        public caracterizacaoLaboratorio?: ICaracterizacaoLaboratorio,
        public emails?: IEmail[],
        public telefones?: ITelefone[],
        public redesocials?: ILinkRedeSocial[],
        public photos?: IPhoto[],
        public membros?: IAtuacaoMembro[],
        public certificacaos?: ICertificacao[],
        public acreditacaos?: IAcreditacao[],
        public areasConhecimentos?: IAreaConhecimento[],
        public ensaios?: IEnsaio[],
        public instituicaoId?: number,
        public instituicaoSigla?: string,
        public unidadeId?: number,
        public unidadeNome?: string
    ) {}
}

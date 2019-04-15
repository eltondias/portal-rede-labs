export  enum RedeSocial {
    LINKEDIN = 'LINKEDIN',
    FACEBOOK = 'FACEBOOK',
    TWITTER = 'TWITTER',
    YOUTUBE = 'YOUTUBE',
    INSTAGRAM = 'INSTAGRAM',
    GITHUB = 'GITHUB'
}

export interface ILinkRedeSocial {
    id?: number;
    url?: string;
    nome?: RedeSocial;
    pesquisadorId?: number;
    laboratorioId?: number;
    instituicaoId?: number;
}

export class LinkRedeSocial implements ILinkRedeSocial {
    constructor(
        public id?: number,
        public url?: string,
        public nome?: RedeSocial,
        public pesquisadorId?: number,
        public laboratorioId?: number,
        public instituicaoId?: number
    ) {}
}

import { Moment } from 'moment';

export interface IImagem {
    id?: number;
    title?: string;
    imagemContentType?: string;
    imagem?: any;
    uploaded?: Moment;
}

export class Imagem implements IImagem {
    constructor(
        public id?: number,
        public title?: string,
        public imagemContentType?: string,
        public imagem?: any,
        public uploaded?: Moment
    ) {}
}

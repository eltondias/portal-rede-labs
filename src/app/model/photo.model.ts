import { Moment } from 'moment';

export interface IPhoto {
    id?: number;
    title?: string;
    descricao?: string;
    imagemContentType?: string;
    imagem?: any;
    uploaded?: Moment;
    noticiaId?: number;
    laboratorioId?: number;
}

export class Photo implements IPhoto {
    constructor(
        public id?: number,
        public title?: string,
        public descricao?: string,
        public imagemContentType?: string,
        public imagem?: any,
        public uploaded?: Moment,
        public noticiaId?: number,
        public laboratorioId?: number
    ) {}
}

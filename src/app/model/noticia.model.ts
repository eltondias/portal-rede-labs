import { IPhoto } from './photo.model';

export interface INoticia {
    id?: number;
    titulo?: string;
    conteudo?: string;
    url?: string;
    photos?: IPhoto[];
}

export class Noticia implements INoticia {
    constructor(public id?: number, public titulo?: string, public conteudo?: string, public url?: string, public photos?: IPhoto[]) {}
}

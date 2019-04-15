import { ILaboratorio } from './laboratorio.model';


export interface IAreaConhecimento {
    id?: number;
    nome?: string;
    subAreas?: IAreaConhecimento[];
    areaConhecimentoId?: number;
    areaconhecimentoNome?: string;
    laboratorios?: ILaboratorio[];
}

export class AreaConhecimento implements IAreaConhecimento {
    constructor(
        public id?: number,
        public nome?: string,
        public subAreas?: IAreaConhecimento[],
        public areaConhecimentoId?: number,
        public areaconhecimentoNome?: string,
        public laboratorios?: ILaboratorio[]
    ) {}
}

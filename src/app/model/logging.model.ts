import { Moment } from 'moment';

export interface ILogging {
    id?: number;
    ocorrencia?: string;
    data?: Moment;
    instante?: Moment;
    userLogin?: string;
    userId?: number;
}

export class Logging implements ILogging {
    constructor(
        public id?: number,
        public ocorrencia?: string,
        public data?: Moment,
        public instante?: Moment,
        public userLogin?: string,
        public userId?: number
    ) {}
}

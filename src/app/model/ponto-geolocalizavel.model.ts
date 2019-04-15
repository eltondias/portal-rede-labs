export interface IPontoGeolocalizavel {
    id?: number;
    latitude?: string;
    longitude?: string;
}

export class PontoGeolocalizavel implements IPontoGeolocalizavel {
    constructor(public id?: number, public latitude?: string, public longitude?: string) {}
}

export interface IMarker {
    lat?: number;
    lng?: number;
    label?: string;
    draggable?: boolean;
}

export class Marker implements IMarker {
    constructor(public latitude?: number, public longitude?: number, public labe?: number, public draggable?: boolean) {}
}

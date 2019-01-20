
    export interface Travel {
        country: string;
        city: string;
    }

    export interface Meta {
        travels: Travel[];
    }

    export class UserProfile {
        id: string;
        registrationDate: Date;
        name: string;
        gender: string;
        birthday: Date;
        country: string;
        city: string;
        occupation: string;
        languages: any[];
        height: number;
        hair: string;
        thumbnail: string;
        presence: number;
        tags: string[];
        about: string;
        drink: string;
        education: string;
        relationship: string;
        kids: boolean;
        cover: string;
        devices: string[];
        passport: string;
        realm: string;
        meta: Meta;
    }




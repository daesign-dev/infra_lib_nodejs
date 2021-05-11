import * as Interface from "./Interfaces";
import { Model_service } from "./Model_service";
/**
  service d'enregistrement
*/
export declare class Model_authentication extends Model_service implements Interface.Iauthentication {
    /**
      service d'enregistrement
    */
    constructor(obj?: any);
    _class: string;
    /**
mailInfoUrl
*/
    "mailInfoUrl": string;
    /**
mailAccountCreatedUrl
*/
    "mailAccountCreatedUrl": string;
    /**
nombre de jour de validité d'une demande de reset de password
*/
    "durationResetDay": number;
    /**
SSO DB URL
*/
    "ssoBdUrl": string;
    /**
INFRA DB URL
*/
    "infraBdUrl": string;
    /**
FRONT APPS DB URL
*/
    "platformBdUrl": string;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_authentication>;
}

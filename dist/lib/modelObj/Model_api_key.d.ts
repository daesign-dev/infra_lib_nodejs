import * as Interface from "./Interfaces";
import { Model_certificat } from "./Model_certificat";
/**
  Défini un certificat utilisant uniquement une clé d'API pour une application donnée
*/
export declare class Model_api_key extends Model_certificat implements Interface.Iapi_key {
    /**
      Défini un certificat utilisant uniquement une clé d'API pour une application donnée
    */
    constructor(obj?: any);
    _class: string;
    /**
Clé API
*/
    "key"?: string;
    /**
Application liée à la clé
*/
    "app"?: string;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_api_key>;
}

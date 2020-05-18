import * as Interface from "./Interfaces";
import { Model_application_configuration_web } from "./Model_application_configuration_web";
/**
  generic conf
*/
export declare class Model_application_configuration_generic extends Model_application_configuration_web implements Interface.Iapplication_configuration_generic {
    /**
      generic conf
    */
    constructor(obj?: any);
    _class: string;
    /**
c'est l'url de la base de donnée de l'application
*/
    "configurationUrlDb": string;
    /**
url racine des services
*/
    "urlBase": string;
    /**
url du service d'acces au info client
*/
    "clientServiceUrl": string;
    /**
template générique a appliquer aux enregistrements
*/
    "aclTemplate"?: Interface.I_acl;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_application_configuration_generic>;
}

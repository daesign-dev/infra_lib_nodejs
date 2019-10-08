import * as Interface from "./Interfaces";
import { Model_application_configuration_web } from "./Model_application_configuration_web";
/**
  c'est la configuration d'une application Client
*/
export declare class Model_application_configuration_appClient extends Model_application_configuration_web implements Interface.Iapplication_configuration_appClient {
    /**
      c'est la configuration d'une application Client
    */
    constructor(obj?: any);
    _class: string;
    /**
url de la bd de l'application
*/
    "configurationUrlDb": string;
    /**
url racine des services
*/
    "urlBase": string;
    /**
url du service d'enregistrement d'utilisateur
*/
    "signinUrl": string;
    /**
url du service de gestion des sessions
*/
    "serviceSessionUrl": string;
    /**
url du service d'acces au info client
*/
    "clientServiceUrl": string;
    /**
url du file service pour le forum
*/
    "fileServiceUrl"?: string;
    /**
template des acl
*/
    "aclTemplate"?: Interface.I_acl;
    /**
boolean to set prospect workspace
*/
    "isForProspect"?: boolean;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_application_configuration_appClient>;
}

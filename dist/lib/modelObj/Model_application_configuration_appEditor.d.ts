import * as Interface from "./Interfaces";
import { Model_application_configuration } from "./Model_application_configuration";
/**
  c'est la configuration d'une application type editeur
*/
export declare class Model_application_configuration_appEditor extends Model_application_configuration implements Interface.Iapplication_configuration_appEditor {
    /**
      c'est la configuration d'une application type editeur
    */
    constructor(obj?: any);
    _class: string;
    /**
url du file service pour le forum
*/
    "fileServiceUrl"?: string;
    /**
url du file service du drive
*/
    "URL_FileService"?: string;
    /**
c'est l'url de la base de donnée de l'application
*/
    "configurationUrlDb": string;
    /**
l'url racine des services
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
    static create(target: any, path?: string): Promise<Model_application_configuration_appEditor>;
}

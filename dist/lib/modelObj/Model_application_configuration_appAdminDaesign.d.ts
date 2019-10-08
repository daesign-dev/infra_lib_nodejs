import * as Interface from "./Interfaces";
import { Model_application_configuration } from "./Model_application_configuration";
/**
  Application configuration for Daesign admin that have specific inputs
*/
export declare class Model_application_configuration_appAdminDaesign extends Model_application_configuration implements Interface.Iapplication_configuration_appAdminDaesign {
    /**
      Application configuration for Daesign admin that have specific inputs
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
The deploy service url
*/
    "deployServiceUrl"?: string;
    /**
The web admin application identifier
*/
    "webAppAdminId"?: string;
    /**
The web apprenant application identifier
*/
    "webAppApprenantId"?: string;
    /**
The savvy learner application instance identifier
*/
    "savvyLearnerInstanceId"?: string;
    /**
URL of the license token service
*/
    "licenseTokenUrl"?: string;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_application_configuration_appAdminDaesign>;
}

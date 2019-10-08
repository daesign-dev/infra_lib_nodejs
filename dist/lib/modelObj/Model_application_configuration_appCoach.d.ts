import * as Interface from "./Interfaces";
import { Model_application_configuration_web } from "./Model_application_configuration_web";
/**
  c'est la configuration d'une application coach
*/
export declare class Model_application_configuration_appCoach extends Model_application_configuration_web implements Interface.Iapplication_configuration_appCoach {
    /**
      c'est la configuration d'une application coach
    */
    constructor(obj?: any);
    _class: string;
    /**
url de service de bdd du forum
*/
    "forumUrl"?: string;
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
client service URL for custom client
*/
    "clientServiceUrl"?: string;
    /**
l'url du service de like et note
*/
    "likeServiceUrl": string;
    /**
template générique a appliquer aux enregistrements
*/
    "aclTemplate"?: Interface.I_acl;
    /**
url du service trainning course
*/
    "trainingCourseServiceUrl": string;
    /**
url du service tuteur
*/
    "tutorServiceUrl": string;
    /**
url du service de socket io
*/
    "syncSoketioUrl": string;
    /**
syncSoketioPath
*/
    "syncSoketioPath": string;
    /**
tutorVideoCallUrl
*/
    "tutorVideoCallUrl"?: string;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_application_configuration_appCoach>;
}

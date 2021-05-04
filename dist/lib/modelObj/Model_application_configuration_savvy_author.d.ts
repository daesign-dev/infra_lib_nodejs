import * as Interface from "./Interfaces";
import { Model_application_configuration_web } from "./Model_application_configuration_web";
/**
  Configuration pour l'application Savvy - Author
*/
export declare class Model_application_configuration_savvy_author extends Model_application_configuration_web implements Interface.Iapplication_configuration_savvy_author {
    /**
      Configuration pour l'application Savvy - Author
    */
    constructor(obj?: any);
    _class: string;
    /**
c'est l'url de la base de donnée de l'application
*/
    "configurationUrlDb": string;
    /**
template générique a appliquer aux enregistrements
*/
    "aclTemplate"?: Interface.I_acl;
    /**
URL vers la BD infra
*/
    "urlInfraDb"?: string;
    /**
URL vers la BD des front-apps
*/
    "urlFrontAppsDb"?: string;
    /**
Super admin pour les utilisateurs de end_client
*/
    "su_clientId"?: string;
    /**
Est-ce que c'est une conf de super Admin ?
*/
    "su_conf"?: boolean;
    /**
Identifiant de l'application savvy learner
*/
    "savvyLearnerAppId"?: string;
    /**
URL for push notification service
*/
    "pushNotificationServiceUrl"?: string;
    /**
liste des noms des couleurs des rewards (liées aux assets de savvy learner)
*/
    "rewardColors"?: string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_application_configuration_savvy_author>;
}

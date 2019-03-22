import * as Interface from "./Interfaces";
import { Model_application_configuration_appApprenant } from "./Model_application_configuration_appApprenant";
/**
  configuration de l'application Savvy Learner
*/
export declare class Model_application_configuration_savvy_learner extends Model_application_configuration_appApprenant implements Interface.Iapplication_configuration_savvy_learner {
    /**
      configuration de l'application Savvy Learner
    */
    constructor(obj?: any);
    _class: string;
    /**
URL de la BD de Savvy
*/
    "savvyDbUrl"?: string;
    /**
Reference vers l'application savvy author
*/
    "savvyAuthorId"?: string;
    /**
Reference vers l'application savvy author - Super admin
*/
    "savvyAuthorSUId"?: string;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_application_configuration_savvy_learner>;
}

import * as Interface from "./Interfaces";
import { Model_deploy_template } from "./Model_deploy_template";
/**
  Template used by deploy service - application configuration specific
*/
export declare class Model_deploy_template_application_configuration extends Model_deploy_template implements Interface.Ideploy_template_application_configuration {
    /**
      Template used by deploy service - application configuration specific
    */
    constructor(obj?: any);
    _class: string;
    /**
Application id
*/
    "application_id"?: string;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_deploy_template_application_configuration>;
}

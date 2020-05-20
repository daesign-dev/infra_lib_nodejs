import * as Interface from "./Interfaces";
import { Model_deploy_template } from "./Model_deploy_template";
/**
  Template used by deploy service - application licence store specific
*/
export declare class Model_deploy_template_licence_store_application extends Model_deploy_template implements Interface.Ideploy_template_licence_store_application {
    /**
      Template used by deploy service - application licence store specific
    */
    constructor(obj?: any);
    _class: string;
    /**
Application
*/
    "application"?: string;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_deploy_template_licence_store_application>;
}

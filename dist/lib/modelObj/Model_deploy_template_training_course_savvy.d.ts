import * as Interface from "./Interfaces";
import { Model_deploy_template } from "./Model_deploy_template";
/**
  Deploy template for SAVVY training courses
*/
export declare class Model_deploy_template_training_course_savvy extends Model_deploy_template implements Interface.Ideploy_template_training_course_savvy {
    /**
      Deploy template for SAVVY training courses
    */
    constructor(obj?: any);
    _class: string;
    /**
Application instance
*/
    "application_instance"?: string;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_deploy_template_training_course_savvy>;
}

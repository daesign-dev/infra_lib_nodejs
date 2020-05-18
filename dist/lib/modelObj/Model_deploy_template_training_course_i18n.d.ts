import * as Interface from "./Interfaces";
import { Model_deploy_template } from "./Model_deploy_template";
/**
  Template used by deploy service - training course internationalisation
*/
export declare class Model_deploy_template_training_course_i18n extends Model_deploy_template implements Interface.Ideploy_template_training_course_i18n {
    /**
      Template used by deploy service - training course internationalisation
    */
    constructor(obj?: any);
    _class: string;
    /**
Langage
*/
    "lang"?: string;
    /**
The template that is related to
*/
    "parentTemplate"?: string;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_deploy_template_training_course_i18n>;
}

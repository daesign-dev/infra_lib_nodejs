import * as Interface from "./Interfaces";
import { Base } from "utils";
/**
  Templates collection used by the deployment service
*/
export declare class Model_deploy_template extends Base implements Interface.Ideploy_template {
    /**
      Templates collection used by the deployment service
    */
    constructor(obj?: any);
    _class: string;
    /**
The template name
*/
    "name"?: string;
    /**
The JSON template used by lodash
*/
    "template"?: string;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_deploy_template>;
}

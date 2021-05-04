import * as Interface from "./Interfaces";
import { Base } from "utils";
/**
  module ID validy for adaptivmat app teacher
*/
export declare class Model_module_validity extends Base implements Interface.Imodule_validity {
    /**
      module ID validy for adaptivmat app teacher
    */
    constructor(obj?: any);
    _class: string;
    /**
module id
*/
    "module"?: string;
    /**
enable
*/
    "enable"?: boolean;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_module_validity>;
}

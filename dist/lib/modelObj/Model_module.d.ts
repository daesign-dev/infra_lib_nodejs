import * as Interface from "./Interfaces";
import { Base } from "utils";
/**
  Define a learning module like Math
*/
export declare class Model_module extends Base implements Interface.Imodule {
    /**
      Define a learning module like Math
    */
    constructor(obj?: any);
    _class: string;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_module>;
}

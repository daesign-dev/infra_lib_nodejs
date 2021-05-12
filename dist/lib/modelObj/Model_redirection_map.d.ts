import * as Interface from "./Interfaces";
import { Base } from "utils";
/**
  redirection_map
*/
export declare class Model_redirection_map extends Base implements Interface.Iredirection_map {
    /**
      redirection_map
    */
    constructor(obj?: any);
    _class: string;
    /**
activation
*/
    "activation"?: Interface.Iactivation_map[];
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_redirection_map>;
}

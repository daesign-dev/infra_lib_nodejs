import * as Interface from "./Interfaces";
import { Base } from "utils";
/**
  activation IDs  mapping
*/
export declare class Model_activation_map extends Base implements Interface.Iactivation_map {
    /**
      activation IDs  mapping
    */
    constructor(obj?: any);
    _class: string;
    /**
test
*/
    "test"?: string;
    /**
trainingID
*/
    "trainingID"?: string;
    /**
redirect trainingID
*/
    "redirectID"?: string;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_activation_map>;
}

import * as Interface from "./Interfaces";
import { Base } from "utils";
/**
  User profile collection
*/
export declare class Model_user_profile extends Base implements Interface.Iuser_profile {
    /**
      User profile collection
    */
    constructor(obj?: any);
    _class: string;
    /**
User profile key value
*/
    "name": string;
    /**
User profile description
*/
    "description"?: string;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_user_profile>;
}

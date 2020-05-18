import * as Interface from "./Interfaces";
import { Base } from "utils";
/**
  User account collection
*/
export declare class Model_user extends Base implements Interface.Iuser {
    /**
      User account collection
    */
    constructor(obj?: any);
    _class: string;
    /**
User first name
*/
    "first_name": string;
    /**
User last name
*/
    "last_name": string;
    /**
User email address
*/
    "email": Interface.Ifield;
    /**
User profile
*/
    "user_profile": string;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_user>;
}

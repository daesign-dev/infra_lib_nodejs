import * as Interface from "./Interfaces";
import { Base } from "utils";
/**
  mail sender params (name, email, ..)
*/
export declare class Model_mailSenderParams extends Base implements Interface.ImailSenderParams {
    /**
      mail sender params (name, email, ..)
    */
    constructor(obj?: any);
    _class: string;
    /**
name of sender to display
*/
    "name": string;
    /**
email of sender
*/
    "email"?: string;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_mailSenderParams>;
}

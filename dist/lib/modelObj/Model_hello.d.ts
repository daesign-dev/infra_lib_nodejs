import * as Interface from "./Interfaces";
import { Base } from "utils";
/**
  log collection for template backend service
*/
export declare class Model_hello extends Base implements Interface.Ihello {
    /**
      log collection for template backend service
    */
    constructor(obj?: any);
    _class: string;
    /**
The category
*/
    "category": string;
    /**
The message
*/
    "message": string;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_hello>;
}

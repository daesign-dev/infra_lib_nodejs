import * as Interface from "./Interfaces";
import { Base } from "utils";
/**
  A daesign mobile application object description used by deployment
*/
export declare class Model_daesignMobileApplication extends Base implements Interface.IdaesignMobileApplication {
    /**
      A daesign mobile application object description used by deployment
    */
    constructor(obj?: any);
    _class: string;
    /**
The application ID ( not the instance, nor the configuration )
*/
    "id": string;
    /**
The application name
*/
    "name": string;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_daesignMobileApplication>;
}

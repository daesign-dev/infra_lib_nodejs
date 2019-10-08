import * as Interface from "./Interfaces";
import { Base } from "utils";
/**
  daesignApplication
*/
export declare class Model_daesignApplication extends Base implements Interface.IdaesignApplication {
    /**
      daesignApplication
    */
    constructor(obj?: any);
    _class: string;
    /**
The application ID
*/
    "id": string;
    /**
Name of the application
*/
    "name"?: string;
    /**
The DNS domain to install on OVH
*/
    "domainToInstallOn"?: string;
    /**
Application instance name used as suffix
*/
    "appInstanceNameSuffix"?: string;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_daesignApplication>;
}

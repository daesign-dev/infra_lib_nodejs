import * as Interface from "./Interfaces";
import { Model_application_configuration } from "./Model_application_configuration";
/**
  Application configuration for web applications
*/
export declare class Model_application_configuration_web extends Model_application_configuration implements Interface.Iapplication_configuration_web {
    /**
      Application configuration for web applications
    */
    constructor(obj?: any);
    _class: string;
    /**
The web application url
*/
    "appUrl": string;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_application_configuration_web>;
}

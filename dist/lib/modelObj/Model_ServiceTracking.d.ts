import * as Interface from "./Interfaces";
import { Model_service } from "./Model_service";
/**
  Service to acces tracking for application
*/
export declare class Model_ServiceTracking extends Model_service implements Interface.IServiceTracking {
    /**
      Service to acces tracking for application
    */
    constructor(obj?: any);
    _class: string;
    /**
URL to the Savvy database
*/
    "savvyDbUrl"?: string;
    /**
URL to the Savvy tracking database
*/
    "savvyTrackingDbUrl"?: string;
    /**
infraBdUrl
*/
    "infraBdUrl"?: string;
    /**
platformBdUrl
*/
    "platformBdUrl"?: string;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_ServiceTracking>;
}

import * as Interface from "./Interfaces";
import { Model_service } from "./Model_service";
/**
  Service d'exemple
*/
export declare class Model_service_hello extends Model_service implements Interface.Iservice_hello {
    /**
      Service d'exemple
    */
    constructor(obj?: any);
    _class: string;
    /**
ssoBdUrl
*/
    "ssoBdUrl": string;
    /**
infraBdUrl
*/
    "infraBdUrl": string;
    /**
platformBdUrl
*/
    "platformBdUrl": string;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_service_hello>;
}

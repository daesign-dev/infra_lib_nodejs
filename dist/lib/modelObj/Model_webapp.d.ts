import * as Interface from "./Interfaces";
import { Model_application } from "./Model_application";
/**
  webapp
*/
export declare class Model_webapp extends Model_application implements Interface.Iwebapp {
    /**
      webapp
    */
    constructor(obj?: any);
    _class: string;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_webapp>;
}

import * as Interface from "./Interfaces";
import { Model_application } from "./Model_application";
/**
  app_training_course
*/
export declare class Model_app_training_course extends Model_application implements Interface.Iapp_training_course {
    /**
      app_training_course
    */
    constructor(obj?: any);
    _class: string;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_app_training_course>;
}

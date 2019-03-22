import * as Interface from "./Interfaces";
import { Model_application_configuration } from "./Model_application_configuration";
/**
  application_configuration_parcours
*/
export declare class Model_application_configuration_parcours extends Model_application_configuration implements Interface.Iapplication_configuration_parcours {
    /**
      application_configuration_parcours
    */
    constructor(obj?: any);
    _class: string;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_application_configuration_parcours>;
}

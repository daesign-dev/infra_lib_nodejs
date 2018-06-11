import * as Interface from "./Interfaces";
import { Base } from "../Base";
/**
  liste des applications
*/
export declare class Model_application extends Base implements Interface.Iapplication {
    /**
      liste des applications
    */
    constructor(obj?: any);
    _class: string;
    /**
le nom de l'application
*/
    "name"?: string;
    /**
la description public de l'appli
*/
    "description"?: string;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_application>;
}

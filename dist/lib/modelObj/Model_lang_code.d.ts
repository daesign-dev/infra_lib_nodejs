import * as Interface from "./Interfaces";
import { Base } from "utils";
/**
  Définit le code pour une langue (se référer au code ISO 639 : https://fr.wikipedia.org/wiki/Liste_des_codes_ISO_639-1)
*/
export declare class Model_lang_code extends Base implements Interface.Ilang_code {
    /**
      Définit le code pour une langue (se référer au code ISO 639 : https://fr.wikipedia.org/wiki/Liste_des_codes_ISO_639-1)
    */
    constructor(obj?: any);
    _class: string;
    /**
Code de la langue
*/
    "code": string;
    /**
Nom dans la langue correspondante
*/
    "name"?: string;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_lang_code>;
}

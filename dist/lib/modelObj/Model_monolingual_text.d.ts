import * as Interface from "./Interfaces";
import { Base } from "utils";
/**
  Définit un texte dans une langue
*/
export declare class Model_monolingual_text extends Base implements Interface.Imonolingual_text {
    /**
      Définit un texte dans une langue
    */
    constructor(obj?: any);
    _class: string;
    /**
Définit dans quelle langue est le texte
*/
    "lang"?: string;
    /**
Définit le texte dans la langue choisi
*/
    "texte"?: string;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_monolingual_text>;
}

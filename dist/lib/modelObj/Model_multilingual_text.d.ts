import * as Interface from "./Interfaces";
import { Base } from "utils";
/**
  Définit un texte multilingue
*/
export declare class Model_multilingual_text extends Base implements Interface.Imultilingual_text {
    /**
      Définit un texte multilingue
    */
    constructor(obj?: any);
    _class: string;
    /**
Nom du texte pour le retrouver plus facilement.
*/
    "name": string;
    /**
Description pour retrouver facilement l'objet
*/
    "description"?: string;
    /**
Liste des textes dans les différentes langue
*/
    "texts"?: Interface.Imonolingual_text[];
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_multilingual_text>;
}

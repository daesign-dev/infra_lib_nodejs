import * as Interface from "./Interfaces";
import { Base } from "../Base";
/**
  c'est le client que l'on facture
*/
export declare class Model_end_client extends Base implements Interface.Iend_client {
    /**
      c'est le client que l'on facture
    */
    constructor(obj?: any);
    _class: string;
    /**
le nom de la société
*/
    "name"?: string;
    /**
liste des instance d'application au quelle le end_client a accés
*/
    "applications"?: string[];
    /**
liste des administrateurs du end_client
*/
    "admins"?: string[];
    /**
distributeur de licence
*/
    "licenceStore"?: Interface.IlicenceStore[];
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_end_client>;
}

import * as Interface from "./Interfaces";
import { Model_service } from "./Model_service";
/**
  Service servant de passerelle entre Nathan et notre infra
*/
export declare class Model_service_nathan_gateway extends Model_service implements Interface.Iservice_nathan_gateway {
    /**
      Service servant de passerelle entre Nathan et notre infra
    */
    constructor(obj?: any);
    _class: string;
    /**
URL du webservice Prospect
*/
    "url_webservice_prospect"?: string;
    /**
URL de la description wsdl du service de prospect
*/
    "url_wsdl_prospect"?: string;
    /**
Login pour utiliser le webservice
*/
    "login"?: string;
    /**
Mot de passe pour utiliser le webservice
*/
    "password"?: string;
    /**
Licence à utiliser
*/
    "licence"?: string;
    /**
Url de la collection de licence
*/
    "url_licence_collection"?: string;
    /**
URL vers savvy author
*/
    "savvy_author_db_url"?: string;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_service_nathan_gateway>;
}

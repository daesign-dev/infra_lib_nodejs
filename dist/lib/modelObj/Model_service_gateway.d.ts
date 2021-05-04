import * as Interface from "./Interfaces";
import { Model_service } from "./Model_service";
/**
  service passerelle vers l'interne
*/
export declare class Model_service_gateway extends Model_service implements Interface.Iservice_gateway {
    /**
      service passerelle vers l'interne
    */
    constructor(obj?: any);
    _class: string;
    /**
clef privé a mettre dans le package scorm
*/
    "privateKey": string;
    /**
id du end client
*/
    "endClientId": string;
    /**
url du service de signin
*/
    "signinUrl": string;
    /**
url  de licencetoken
*/
    "licenceServiceUrl": string;
    /**
templateUser
*/
    "templateUser": any;
    /**
templateProfileUser
*/
    "templateProfileUser": any;
    /**
apiUrl
*/
    "apiUrl"?: string;
    /**
licence Admin ref to acces over acl
*/
    "licenceAdminId"?: string;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_service_gateway>;
}

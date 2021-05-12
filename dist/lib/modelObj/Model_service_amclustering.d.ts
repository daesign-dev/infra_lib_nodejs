import * as Interface from "./Interfaces";
import { Model_service } from "./Model_service";
/**
  service passerelle pour le clustering
*/
export declare class Model_service_amclustering extends Model_service implements Interface.Iservice_amclustering {
    /**
      service passerelle pour le clustering
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
apiUrl
*/
    "apiUrl"?: string;
    /**
licence Admin ref to acces over acl
*/
    "licenceAdminId"?: string;
    /**
evidence B clustering url
*/
    "clusteringUrl"?: string;
    /**
bearer code
*/
    "bearer"?: string;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_service_amclustering>;
}

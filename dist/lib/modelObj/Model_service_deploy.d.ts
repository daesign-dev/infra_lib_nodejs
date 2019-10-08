import * as Interface from "./Interfaces";
import { Model_service } from "./Model_service";
/**
  Service qu'il est bien sympathique pour déployer des applications de qualité
*/
export declare class Model_service_deploy extends Model_service implements Interface.Iservice_deploy {
    /**
      Service qu'il est bien sympathique pour déployer des applications de qualité
    */
    constructor(obj?: any);
    _class: string;
    /**
The URL to the SSO database
*/
    "ssoBdUrl": string;
    /**
The URL to the infra database
*/
    "infraBdUrl": string;
    /**
The URL to the platform database
*/
    "platformBdUrl": string;
    /**
This will be inject in the deployment template URIs
*/
    "templateUriEnv"?: string;
    /**
The daesign IDS required
*/
    "daesignIdsRequired"?: Interface.IdaesignIdsRequired;
    /**
The daesign applications references
*/
    "daesignApplications"?: Interface.IdaesignApplication[];
    /**
The daesign mobile applications description
*/
    "daesignMobileApplications"?: Interface.IdaesignMobileApplication[];
    /**
nginx configurations by domains
*/
    "nginxDomainsConfigurations"?: Interface.InginxDomainConfiguration[];
    /**
The url of the infra service
*/
    "infraServiceUrl"?: string;
    /**
URL used to reload service conf
*/
    "nginxSgamesServicesUrl"?: string;
    /**
URL used to reload supervisor
*/
    "nginxSgamesSupvUrl"?: string;
    /**
The supervisor URL for mailToInfra service
*/
    "mailToInfraSupvUrl"?: string;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_service_deploy>;
}

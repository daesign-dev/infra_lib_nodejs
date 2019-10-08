import * as Interface from "./Interfaces";
import { Base } from "utils";
/**
  All informations needed for the nginx / hosting domain deployment
*/
export declare class Model_nginxDomainConfiguration extends Base implements Interface.InginxDomainConfiguration {
    /**
      All informations needed for the nginx / hosting domain deployment
    */
    constructor(obj?: any);
    _class: string;
    /**
The application Name
*/
    "domainName": string;
    /**
The nginx suffix to use for this application
*/
    "nginxSuffix": string;
    /**
The DNS Zone where the CNAME will be published
*/
    "dnsZone": string;
    /**
The DNS Target where the CNAME will redirect
*/
    "dnsTarget": string;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_nginxDomainConfiguration>;
}

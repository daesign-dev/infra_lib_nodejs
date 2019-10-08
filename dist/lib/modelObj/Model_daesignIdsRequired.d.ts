import * as Interface from "./Interfaces";
import { Base } from "utils";
/**
  The IDS required for deployment
*/
export declare class Model_daesignIdsRequired extends Base implements Interface.IdaesignIdsRequired {
    /**
      The IDS required for deployment
    */
    constructor(obj?: any);
    _class: string;
    /**
The daesign EndClient ID
*/
    "daesignEndClientId": string;
    /**
The infra admin application instance ID
*/
    "infraAdminInstanceId": string;
    /**
The nathan EndClient ID
*/
    "nathanEndClientId": string;
    /**
The savvy learner application instance ID
*/
    "savvyLearnerInstanceId": string;
    /**
The reviz quiz application instance ID
*/
    "revizQuizInstanceId": string;
    /**
The ID of NginxMultiConfigurator service
*/
    "serviceNginxMultiConfiguratorId": string;
    /**
The serviceMailToInfraSavvyId
*/
    "serviceMailToInfraSavvyId": string;
    /**
The identifier of the super administrator endclient
*/
    "superAdminEndclientId": string;
    /**
The identifier of the super administrator application instance
*/
    "superAdminApplicationInstanceId": string;
    /**
The Daesign savvy author admin instance ID
*/
    "daesignSavvyAuthorAdminInstanceId": string;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_daesignIdsRequired>;
}

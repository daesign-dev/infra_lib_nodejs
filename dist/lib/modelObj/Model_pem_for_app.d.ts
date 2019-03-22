import * as Interface from "./Interfaces";
import { Model_certificat } from "./Model_certificat";
/**
  Certificat PEM pour une app donnée
*/
export declare class Model_pem_for_app extends Model_certificat implements Interface.Ipem_for_app {
    /**
      Certificat PEM pour une app donnée
    */
    constructor(obj?: any);
    _class: string;
    /**
Application associé au certificat
*/
    "app"?: string;
    /**
Data du certificat encodé en base 64.voir https://medium.com/@dhaval/integrate-sns-push-notifications-with-cordova-ios-app-664e0c4c3a18
*/
    "certificat"?: string;
    /**
Il s'agit de la clé privée
*/
    "private_key"?: string;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_pem_for_app>;
}

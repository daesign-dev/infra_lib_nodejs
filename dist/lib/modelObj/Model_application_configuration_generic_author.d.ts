import * as Interface from "./Interfaces";
import { Model_application_configuration_web } from "./Model_application_configuration_web";
/**
  conf for generic authos app
*/
export declare class Model_application_configuration_generic_author extends Model_application_configuration_web implements Interface.Iapplication_configuration_generic_author {
    /**
      conf for generic authos app
    */
    constructor(obj?: any);
    _class: string;
    /**
c'est l'url de la base de donnée de l'application
*/
    "configurationUrlDb": string;
    /**
url racine des services
*/
    "urlBase": string;
    /**
url to acces upload service
*/
    "uploadServiceURL"?: string;
    /**
url du service d'acces au info client
*/
    "clientServiceUrl": string;
    /**
template générique a appliquer aux enregistrements
*/
    "aclTemplate"?: Interface.I_acl;
    /**
Api key for TinyMCE
*/
    "tinymcekey"?: string;
    /**
aws region
*/
    "aws_region"?: string;
    /**
aws access key id
*/
    "aws_access_key_id"?: string;
    /**
aws secret access key
*/
    "aws_secret_access_key"?: string;
    /**
aws s3 bucket name
*/
    "aws_s3_bucket_name"?: string;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_application_configuration_generic_author>;
}

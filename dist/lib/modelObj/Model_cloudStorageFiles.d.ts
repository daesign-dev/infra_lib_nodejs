import * as Interface from "./Interfaces";
import { Base } from "utils";
/**
  List of files stored in a cloud storage
*/
export declare class Model_cloudStorageFiles extends Base implements Interface.IcloudStorageFiles {
    /**
      List of files stored in a cloud storage
    */
    constructor(obj?: any);
    _class: string;
    /**
Name of the file
*/
    "name": string;
    /**
The URI of the resource
*/
    "uri"?: string;
    /**
List of string used to filter files
*/
    "tags"?: string[];
    /**
The ressource type (eg. Scorm, Img )
*/
    "type": string;
    /**
The raw file mime-type from the PUT headers
*/
    "mimeType": string;
    /**
Date of creation of the file
*/
    "creationDate": Date;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_cloudStorageFiles>;
}

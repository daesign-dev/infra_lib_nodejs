import * as Interface from "./Interfaces";
import { Base } from "utils";
/**
  List of folders stored in a cloud storage with ACL
*/
export declare class Model_cloudStorageFolders extends Base implements Interface.IcloudStorageFolders {
    /**
      List of folders stored in a cloud storage with ACL
    */
    constructor(obj?: any);
    _class: string;
    /**
Name of the folder
*/
    "name": string;
    /**
The linked parent of the folder
*/
    "parent"?: string;
    /**
Files associated to the folder
*/
    "files"?: string[];
    /**
Access Control List of the folder
*/
    "_acl"?: Interface.I_acl;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_cloudStorageFolders>;
}

import * as Interface from "./Interfaces";
import { Model_service } from "./Model_service";
/**
  Service used to upload files to AWS S3
*/
export declare class Model_service_cloud_storage extends Model_service implements Interface.Iservice_cloud_storage {
    /**
      Service used to upload files to AWS S3
    */
    constructor(obj?: any);
    _class: string;
    /**
assets_db
*/
    "assets_db": string;
    /**
Maximum number of keys S3 returned before paginate
*/
    "S3_MaxKeys": number;
    /**
The class used to store S3 object
*/
    "S3_DefaultStorageClass": string;
    /**
Infra endclient used for ACL injection
*/
    "InfraEndclient": string;
    /**
Infra application instance used for ACL injection
*/
    "InfraApplicationInstance": string;
    /**
Number of tags currently supported by the service for search filtering
*/
    "NumberOfSearchTagsSupported": number;
    /**
Search tag that will be ignored by the aggregation to support fewer tags than max tags supported by the service.
*/
    "EmptySearchTag": string;
    /**
Depth used for search aggregation graphlookup
*/
    "SearchMaxDepth": number;
    /**
Max file size for document (doc, xls, ppt, pdf, odt) in Mb.
*/
    "MaxFileSizeDocument": number;
    /**
Max file size for image (gif, jpg, png, svg) in Mb.
*/
    "MaxFileSizeImage": number;
    /**
Max file size for sound (mp3) in Mb.
*/
    "MaxFileSizeSound": number;
    /**
Max file size for video (mp4) in Mb.
*/
    "MaxFileSizeVideo": number;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_service_cloud_storage>;
}

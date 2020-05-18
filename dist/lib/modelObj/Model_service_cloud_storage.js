"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const Model_service_1 = require("./Model_service");
/**
  Service used to upload files to AWS S3
*/
class Model_service_cloud_storage extends Model_service_1.Model_service {
    /**
      Service used to upload files to AWS S3
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "service_cloud_storage";
        /**
  Maximum number of keys S3 returned before paginate
  */
        this["S3_MaxKeys"] = 500;
        /**
  The class used to store S3 object
  */
        this["S3_DefaultStorageClass"] = "STANDARD";
        /**
  Number of tags currently supported by the service for search filtering
  */
        this["NumberOfSearchTagsSupported"] = 3;
        /**
  Search tag that will be ignored by the aggregation to support fewer tags than max tags supported by the service.
  */
        this["EmptySearchTag"] = "empty_tag";
        /**
  Max file size for document (doc, xls, ppt, pdf, odt) in Mb.
  */
        this["MaxFileSizeDocument"] = 2;
        /**
  Max file size for image (gif, jpg, png, svg) in Mb.
  */
        this["MaxFileSizeImage"] = 2;
        /**
  Max file size for sound (mp3) in Mb.
  */
        this["MaxFileSizeSound"] = 2;
        /**
  Max file size for video (mp4) in Mb.
  */
        this["MaxFileSizeVideo"] = 5;
        if (obj["assets_db"] != undefined) {
            this["assets_db"] = obj["assets_db"].toString();
        }
        if (obj["S3_MaxKeys"] != undefined) {
            this["S3_MaxKeys"] = new Number(obj["S3_MaxKeys"]).valueOf();
        }
        if (obj["S3_DefaultStorageClass"] != undefined) {
            this["S3_DefaultStorageClass"] = obj["S3_DefaultStorageClass"].toString();
        }
        if (obj["InfraEndclient"] != undefined) {
            if (_.isString(obj["InfraEndclient"])) {
                this["InfraEndclient"] = obj["InfraEndclient"];
            }
            else if (obj["InfraEndclient"]._id) {
                this["InfraEndclient"] = obj["InfraEndclient"]._id;
            }
        }
        if (obj["InfraApplicationInstance"] != undefined) {
            if (_.isString(obj["InfraApplicationInstance"])) {
                this["InfraApplicationInstance"] = obj["InfraApplicationInstance"];
            }
            else if (obj["InfraApplicationInstance"]._id) {
                this["InfraApplicationInstance"] = obj["InfraApplicationInstance"]._id;
            }
        }
        if (obj["NumberOfSearchTagsSupported"] != undefined) {
            this["NumberOfSearchTagsSupported"] = new Number(obj["NumberOfSearchTagsSupported"]).valueOf();
        }
        if (obj["EmptySearchTag"] != undefined) {
            this["EmptySearchTag"] = obj["EmptySearchTag"].toString();
        }
        if (obj["SearchMaxDepth"] != undefined) {
            this["SearchMaxDepth"] = new Number(obj["SearchMaxDepth"]).valueOf();
        }
        if (obj["MaxFileSizeDocument"] != undefined) {
            this["MaxFileSizeDocument"] = new Number(obj["MaxFileSizeDocument"]).valueOf();
        }
        if (obj["MaxFileSizeImage"] != undefined) {
            this["MaxFileSizeImage"] = new Number(obj["MaxFileSizeImage"]).valueOf();
        }
        if (obj["MaxFileSizeSound"] != undefined) {
            this["MaxFileSizeSound"] = new Number(obj["MaxFileSizeSound"]).valueOf();
        }
        if (obj["MaxFileSizeVideo"] != undefined) {
            this["MaxFileSizeVideo"] = new Number(obj["MaxFileSizeVideo"]).valueOf();
        }
    }
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            if (isCompleteObj && (target["assets_db"] == null || target["assets_db"] == undefined)) {
                throw new Error(path + "assets_db is required");
            }
            if (target["assets_db"] != null && target["assets_db"] != undefined) {
                let _assets_db = target["assets_db"];
                if (!_.isString(_assets_db)) {
                    throw new Error(path + "assets_db is not a string");
                }
            }
            if (isCompleteObj && (target["S3_MaxKeys"] == null || target["S3_MaxKeys"] == undefined)) {
                throw new Error(path + "S3_MaxKeys is required");
            }
            if (target["S3_MaxKeys"] != null && target["S3_MaxKeys"] != undefined) {
                let _S3_MaxKeys = target["S3_MaxKeys"];
                if (!_.isNumber(_S3_MaxKeys)) {
                    throw new Error(path + "S3_MaxKeys is not a number");
                }
                if (_S3_MaxKeys > 1) {
                    throw new Error(path + "S3_MaxKeys must be greater than  1");
                }
                if (_S3_MaxKeys < 2000) {
                    throw new Error(path + "S3_MaxKeys must be less than 2000");
                }
            }
            if (isCompleteObj && (target["S3_DefaultStorageClass"] == null || target["S3_DefaultStorageClass"] == undefined)) {
                throw new Error(path + "S3_DefaultStorageClass is required");
            }
            if (target["S3_DefaultStorageClass"] != null && target["S3_DefaultStorageClass"] != undefined) {
                let _S3_DefaultStorageClass = target["S3_DefaultStorageClass"];
                if (!_.isString(_S3_DefaultStorageClass)) {
                    throw new Error(path + "S3_DefaultStorageClass is not a string");
                }
            }
            if (isCompleteObj && (target["InfraEndclient"] == null || target["InfraEndclient"] == undefined)) {
                throw new Error(path + "InfraEndclient is required");
            }
            if (target["InfraEndclient"] != null && target["InfraEndclient"] != undefined) {
                let _InfraEndclient = target["InfraEndclient"];
                if (!_.isString(_InfraEndclient)) {
                    throw new Error(path + "InfraEndclient is not a string");
                }
            }
            if (isCompleteObj && (target["InfraApplicationInstance"] == null || target["InfraApplicationInstance"] == undefined)) {
                throw new Error(path + "InfraApplicationInstance is required");
            }
            if (target["InfraApplicationInstance"] != null && target["InfraApplicationInstance"] != undefined) {
                let _InfraApplicationInstance = target["InfraApplicationInstance"];
                if (!_.isString(_InfraApplicationInstance)) {
                    throw new Error(path + "InfraApplicationInstance is not a string");
                }
            }
            if (isCompleteObj && (target["NumberOfSearchTagsSupported"] == null || target["NumberOfSearchTagsSupported"] == undefined)) {
                throw new Error(path + "NumberOfSearchTagsSupported is required");
            }
            if (target["NumberOfSearchTagsSupported"] != null && target["NumberOfSearchTagsSupported"] != undefined) {
                let _NumberOfSearchTagsSupported = target["NumberOfSearchTagsSupported"];
                if (!_.isNumber(_NumberOfSearchTagsSupported)) {
                    throw new Error(path + "NumberOfSearchTagsSupported is not a number");
                }
            }
            if (isCompleteObj && (target["EmptySearchTag"] == null || target["EmptySearchTag"] == undefined)) {
                throw new Error(path + "EmptySearchTag is required");
            }
            if (target["EmptySearchTag"] != null && target["EmptySearchTag"] != undefined) {
                let _EmptySearchTag = target["EmptySearchTag"];
                if (!_.isString(_EmptySearchTag)) {
                    throw new Error(path + "EmptySearchTag is not a string");
                }
            }
            if (isCompleteObj && (target["SearchMaxDepth"] == null || target["SearchMaxDepth"] == undefined)) {
                throw new Error(path + "SearchMaxDepth is required");
            }
            if (target["SearchMaxDepth"] != null && target["SearchMaxDepth"] != undefined) {
                let _SearchMaxDepth = target["SearchMaxDepth"];
                if (!_.isNumber(_SearchMaxDepth)) {
                    throw new Error(path + "SearchMaxDepth is not a number");
                }
            }
            if (isCompleteObj && (target["MaxFileSizeDocument"] == null || target["MaxFileSizeDocument"] == undefined)) {
                throw new Error(path + "MaxFileSizeDocument is required");
            }
            if (target["MaxFileSizeDocument"] != null && target["MaxFileSizeDocument"] != undefined) {
                let _MaxFileSizeDocument = target["MaxFileSizeDocument"];
                if (!_.isNumber(_MaxFileSizeDocument)) {
                    throw new Error(path + "MaxFileSizeDocument is not a number");
                }
            }
            if (isCompleteObj && (target["MaxFileSizeImage"] == null || target["MaxFileSizeImage"] == undefined)) {
                throw new Error(path + "MaxFileSizeImage is required");
            }
            if (target["MaxFileSizeImage"] != null && target["MaxFileSizeImage"] != undefined) {
                let _MaxFileSizeImage = target["MaxFileSizeImage"];
                if (!_.isNumber(_MaxFileSizeImage)) {
                    throw new Error(path + "MaxFileSizeImage is not a number");
                }
            }
            if (isCompleteObj && (target["MaxFileSizeSound"] == null || target["MaxFileSizeSound"] == undefined)) {
                throw new Error(path + "MaxFileSizeSound is required");
            }
            if (target["MaxFileSizeSound"] != null && target["MaxFileSizeSound"] != undefined) {
                let _MaxFileSizeSound = target["MaxFileSizeSound"];
                if (!_.isNumber(_MaxFileSizeSound)) {
                    throw new Error(path + "MaxFileSizeSound is not a number");
                }
            }
            if (isCompleteObj && (target["MaxFileSizeVideo"] == null || target["MaxFileSizeVideo"] == undefined)) {
                throw new Error(path + "MaxFileSizeVideo is required");
            }
            if (target["MaxFileSizeVideo"] != null && target["MaxFileSizeVideo"] != undefined) {
                let _MaxFileSizeVideo = target["MaxFileSizeVideo"];
                if (!_.isNumber(_MaxFileSizeVideo)) {
                    throw new Error(path + "MaxFileSizeVideo is not a number");
                }
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_service_cloud_storage.check(target, true, path).then(() => {
            return new Model_service_cloud_storage(target);
        });
    }
}
exports.Model_service_cloud_storage = Model_service_cloud_storage;
//# sourceMappingURL=Model_service_cloud_storage.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_cloudStorageFiles = void 0;
const _ = require("lodash");
const utils_1 = require("utils");
/**
  List of files stored in a cloud storage
*/
class Model_cloudStorageFiles extends utils_1.Base {
    /**
      List of files stored in a cloud storage
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "cloudStorageFiles";
        if (obj["name"] != undefined) {
            this["name"] = obj["name"].toString();
        }
        if (obj["uri"] != undefined) {
            this["uri"] = obj["uri"].toString();
        }
        if (obj["tags"] != undefined && obj["tags"] != null && _.isArray(obj["tags"])) {
            this["tags"] = obj["tags"].map((value) => {
                return value.toString();
            });
        }
        if (obj["type"] != undefined) {
            this["type"] = obj["type"].toString();
        }
        if (obj["mimeType"] != undefined) {
            this["mimeType"] = obj["mimeType"].toString();
        }
        if (obj["creationDate"] != undefined) {
            this["creationDate"] = new Date(obj["creationDate"]);
        }
    }
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            if (isCompleteObj && (target["name"] == null || target["name"] == undefined)) {
                throw new Error(path + "name is required");
            }
            if (target["name"] != null && target["name"] != undefined) {
                let _name = target["name"];
                if (!_.isString(_name)) {
                    throw new Error(path + "name is not a string");
                }
            }
            if (target["uri"] != null && target["uri"] != undefined) {
                let _uri = target["uri"];
                if (!_.isString(_uri)) {
                    throw new Error(path + "uri is not a string");
                }
            }
            if (target["tags"] != null && target["tags"] != undefined) {
                target["tags"].forEach((_tags, index) => {
                    if (!_.isString(_tags)) {
                        throw new Error(path + "tags index: " + index + "is not a string");
                    }
                });
            }
            if (isCompleteObj && (target["type"] == null || target["type"] == undefined)) {
                throw new Error(path + "type is required");
            }
            if (target["type"] != null && target["type"] != undefined) {
                let _type = target["type"];
                if (!_.isString(_type)) {
                    throw new Error(path + "type is not a string");
                }
            }
            if (isCompleteObj && (target["mimeType"] == null || target["mimeType"] == undefined)) {
                throw new Error(path + "mimeType is required");
            }
            if (target["mimeType"] != null && target["mimeType"] != undefined) {
                let _mimeType = target["mimeType"];
                if (!_.isString(_mimeType)) {
                    throw new Error(path + "mimeType is not a string");
                }
            }
            if (isCompleteObj && (target["creationDate"] == null || target["creationDate"] == undefined)) {
                throw new Error(path + "creationDate is required");
            }
            if (target["creationDate"] != null && target["creationDate"] != undefined) {
                let _creationDate = target["creationDate"];
                if (!_.isDate(_creationDate)) {
                    throw new Error(path + "creationDate is not a Date");
                }
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_cloudStorageFiles.check(target, true, path).then(() => {
            return new Model_cloudStorageFiles(target);
        });
    }
}
exports.Model_cloudStorageFiles = Model_cloudStorageFiles;
//# sourceMappingURL=Model_cloudStorageFiles.js.map
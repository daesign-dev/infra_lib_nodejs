"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const Index = require("./Index");
const utils_1 = require("utils");
/**
  List of folders stored in a cloud storage with ACL
*/
class Model_cloudStorageFolders extends utils_1.Base {
    /**
      List of folders stored in a cloud storage with ACL
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "cloudStorageFolders";
        if (obj["name"] != undefined) {
            this["name"] = obj["name"].toString();
        }
        if (obj["parent"] != undefined) {
            if (_.isString(obj["parent"])) {
                this["parent"] = obj["parent"];
            }
            else if (obj["parent"]._id) {
                this["parent"] = obj["parent"]._id;
            }
        }
        if (obj["files"] != undefined && obj["files"] != null && _.isArray(obj["files"])) {
            this["files"] = obj["files"].map((value) => {
                if (_.isString(value)) {
                    return value;
                }
                else if (value._id) {
                    return value._id;
                }
            });
        }
        if (obj["_acl"] != undefined) {
            if (obj._class) {
                this["_acl"] = new Index[obj._class](obj["_acl"]);
            }
            else {
                this["_acl"] = new Index["_acl"](obj["_acl"]);
            }
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
            if (target["parent"] != null && target["parent"] != undefined) {
                let _parent = target["parent"];
                if (!_.isString(_parent)) {
                    throw new Error(path + "parent is not a string");
                }
            }
            if (target["files"] != null && target["files"] != undefined) {
                target["files"].forEach((_files, index) => {
                    if (!_.isString(_files)) {
                        throw new Error(path + "files is not a string");
                    }
                });
            }
            if (target["_acl"] != null && target["_acl"] != undefined) {
                let __acl = target["_acl"];
                promArr.push(Index["_acl"].check(__acl, isCompleteObj, path + "_acl.")
                    .catch((err) => {
                    throw new Error(path + "_acl is not ");
                }));
                if (__acl._class != null && __acl._class != undefined) {
                    promArr.push(Index[__acl._class].check(__acl, isCompleteObj, path + "_acl.")
                        .catch((err) => {
                        throw new Error(path + "_acl is not a " + __acl._class);
                    }));
                }
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_cloudStorageFolders.check(target, true, path).then(() => {
            return new Model_cloudStorageFolders(target);
        });
    }
}
exports.Model_cloudStorageFolders = Model_cloudStorageFolders;
//# sourceMappingURL=Model_cloudStorageFolders.js.map
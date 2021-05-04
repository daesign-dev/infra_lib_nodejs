"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_activation_map = void 0;
const _ = require("lodash");
const utils_1 = require("utils");
/**
  activation IDs  mapping
*/
class Model_activation_map extends utils_1.Base {
    /**
      activation IDs  mapping
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "activation_map";
        if (obj["test"] != undefined) {
            this["test"] = obj["test"].toString();
        }
        if (obj["trainingID"] != undefined) {
            if (_.isString(obj["trainingID"])) {
                this["trainingID"] = obj["trainingID"];
            }
            else if (obj["trainingID"]._id) {
                this["trainingID"] = obj["trainingID"]._id;
            }
        }
        if (obj["redirectID"] != undefined) {
            if (_.isString(obj["redirectID"])) {
                this["redirectID"] = obj["redirectID"];
            }
            else if (obj["redirectID"]._id) {
                this["redirectID"] = obj["redirectID"]._id;
            }
        }
    }
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            if (target["test"] != null && target["test"] != undefined) {
                let _test = target["test"];
                if (!_.isString(_test)) {
                    throw new Error(path + "test is not a string");
                }
            }
            if (target["trainingID"] != null && target["trainingID"] != undefined) {
                let _trainingID = target["trainingID"];
                if (!_.isString(_trainingID)) {
                    throw new Error(path + "trainingID is not a string");
                }
            }
            if (target["redirectID"] != null && target["redirectID"] != undefined) {
                let _redirectID = target["redirectID"];
                if (!_.isString(_redirectID)) {
                    throw new Error(path + "redirectID is not a string");
                }
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_activation_map.check(target, true, path).then(() => {
            return new Model_activation_map(target);
        });
    }
}
exports.Model_activation_map = Model_activation_map;
//# sourceMappingURL=Model_activation_map.js.map
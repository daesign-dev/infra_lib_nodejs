"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const Model_service_1 = require("./Model_service");
/**
  Service d'exemple
*/
class Model_service_hello extends Model_service_1.Model_service {
    /**
      Service d'exemple
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "service_hello";
        if (obj["ssoBdUrl"] != undefined) {
            this["ssoBdUrl"] = obj["ssoBdUrl"].toString();
        }
        if (obj["infraBdUrl"] != undefined) {
            this["infraBdUrl"] = obj["infraBdUrl"].toString();
        }
        if (obj["platformBdUrl"] != undefined) {
            this["platformBdUrl"] = obj["platformBdUrl"].toString();
        }
    }
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            if (isCompleteObj && (target["ssoBdUrl"] == null || target["ssoBdUrl"] == undefined)) {
                throw new Error(path + "ssoBdUrl is required");
            }
            if (target["ssoBdUrl"] != null && target["ssoBdUrl"] != undefined) {
                let _ssoBdUrl = target["ssoBdUrl"];
                if (!_.isString(_ssoBdUrl)) {
                    throw new Error(path + "ssoBdUrl is not a string");
                }
            }
            if (isCompleteObj && (target["infraBdUrl"] == null || target["infraBdUrl"] == undefined)) {
                throw new Error(path + "infraBdUrl is required");
            }
            if (target["infraBdUrl"] != null && target["infraBdUrl"] != undefined) {
                let _infraBdUrl = target["infraBdUrl"];
                if (!_.isString(_infraBdUrl)) {
                    throw new Error(path + "infraBdUrl is not a string");
                }
            }
            if (isCompleteObj && (target["platformBdUrl"] == null || target["platformBdUrl"] == undefined)) {
                throw new Error(path + "platformBdUrl is required");
            }
            if (target["platformBdUrl"] != null && target["platformBdUrl"] != undefined) {
                let _platformBdUrl = target["platformBdUrl"];
                if (!_.isString(_platformBdUrl)) {
                    throw new Error(path + "platformBdUrl is not a string");
                }
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_service_hello.check(target, true, path).then(() => {
            return new Model_service_hello(target);
        });
    }
}
exports.Model_service_hello = Model_service_hello;
//# sourceMappingURL=Model_service_hello.js.map
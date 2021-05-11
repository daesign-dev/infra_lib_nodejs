"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_hello = void 0;
const _ = require("lodash");
const utils_1 = require("utils");
/**
  log collection for template backend service
*/
class Model_hello extends utils_1.Base {
    /**
      log collection for template backend service
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "hello";
        if (obj["category"] != undefined) {
            this["category"] = obj["category"].toString();
        }
        if (obj["message"] != undefined) {
            this["message"] = obj["message"].toString();
        }
    }
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            if (isCompleteObj && (target["category"] == null || target["category"] == undefined)) {
                throw new Error(path + "category is required");
            }
            if (target["category"] != null && target["category"] != undefined) {
                let _category = target["category"];
                if (!_.isString(_category)) {
                    throw new Error(path + "category is not a string");
                }
            }
            if (isCompleteObj && (target["message"] == null || target["message"] == undefined)) {
                throw new Error(path + "message is required");
            }
            if (target["message"] != null && target["message"] != undefined) {
                let _message = target["message"];
                if (!_.isString(_message)) {
                    throw new Error(path + "message is not a string");
                }
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_hello.check(target, true, path).then(() => {
            return new Model_hello(target);
        });
    }
}
exports.Model_hello = Model_hello;
//# sourceMappingURL=Model_hello.js.map
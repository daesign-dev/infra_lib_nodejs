"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_mailSenderParams = void 0;
const _ = require("lodash");
const utils_1 = require("utils");
/**
  mail sender params (name, email, ..)
*/
class Model_mailSenderParams extends utils_1.Base {
    /**
      mail sender params (name, email, ..)
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "mailSenderParams";
        if (obj["name"] != undefined) {
            this["name"] = obj["name"].toString();
        }
        if (obj["email"] != undefined) {
            this["email"] = obj["email"].toString();
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
            if (target["email"] != null && target["email"] != undefined) {
                let _email = target["email"];
                if (!_.isString(_email)) {
                    throw new Error(path + "email is not a string");
                }
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_mailSenderParams.check(target, true, path).then(() => {
            return new Model_mailSenderParams(target);
        });
    }
}
exports.Model_mailSenderParams = Model_mailSenderParams;
//# sourceMappingURL=Model_mailSenderParams.js.map
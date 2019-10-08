"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const utils_1 = require("utils");
/**
  A daesign mobile application object description used by deployment
*/
class Model_daesignMobileApplication extends utils_1.Base {
    /**
      A daesign mobile application object description used by deployment
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "daesignMobileApplication";
        if (obj["id"] != undefined) {
            this["id"] = obj["id"].toString();
        }
        if (obj["name"] != undefined) {
            this["name"] = obj["name"].toString();
        }
    }
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            if (isCompleteObj && (target["id"] == null || target["id"] == undefined)) {
                throw new Error(path + "id is required");
            }
            if (target["id"] != null && target["id"] != undefined) {
                let _id = target["id"];
                if (!_.isString(_id)) {
                    throw new Error(path + "id is not a string");
                }
            }
            if (isCompleteObj && (target["name"] == null || target["name"] == undefined)) {
                throw new Error(path + "name is required");
            }
            if (target["name"] != null && target["name"] != undefined) {
                let _name = target["name"];
                if (!_.isString(_name)) {
                    throw new Error(path + "name is not a string");
                }
                let _enum_name = ["savvyLearner", "revizQuiz"];
                if (_enum_name.indexOf(_name) == -1) {
                    throw new Error(path + "name dont match one of savvyLearner , revizQuiz");
                }
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_daesignMobileApplication.check(target, true, path).then(() => {
            return new Model_daesignMobileApplication(target);
        });
    }
}
exports.Model_daesignMobileApplication = Model_daesignMobileApplication;
//# sourceMappingURL=Model_daesignMobileApplication.js.map
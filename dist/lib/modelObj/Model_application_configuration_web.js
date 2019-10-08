"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const Model_application_configuration_1 = require("./Model_application_configuration");
/**
  Application configuration for web applications
*/
class Model_application_configuration_web extends Model_application_configuration_1.Model_application_configuration {
    /**
      Application configuration for web applications
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "application_configuration_web";
        if (obj["appUrl"] != undefined) {
            this["appUrl"] = obj["appUrl"].toString();
        }
    }
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            if (isCompleteObj && (target["appUrl"] == null || target["appUrl"] == undefined)) {
                throw new Error(path + "appUrl is required");
            }
            if (target["appUrl"] != null && target["appUrl"] != undefined) {
                let _appUrl = target["appUrl"];
                if (!_.isString(_appUrl)) {
                    throw new Error(path + "appUrl is not a string");
                }
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_application_configuration_web.check(target, true, path).then(() => {
            return new Model_application_configuration_web(target);
        });
    }
}
exports.Model_application_configuration_web = Model_application_configuration_web;
//# sourceMappingURL=Model_application_configuration_web.js.map
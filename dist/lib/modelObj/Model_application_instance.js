"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const utils_1 = require("utils");
/**
  c'est le couple application configuration
*/
class Model_application_instance extends utils_1.Base {
    /**
      c'est le couple application configuration
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "application_instance";
        if (obj["name"] != undefined) {
            this["name"] = obj["name"].toString();
        }
        if (obj["application"] != undefined) {
            if (_.isString(obj["application"])) {
                this["application"] = obj["application"];
            }
            else if (obj["application"]._id) {
                this["application"] = obj["application"]._id;
            }
        }
        if (obj["configuration"] != undefined) {
            if (_.isString(obj["configuration"])) {
                this["configuration"] = obj["configuration"];
            }
            else if (obj["configuration"]._id) {
                this["configuration"] = obj["configuration"]._id;
            }
        }
    }
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            if (target["name"] != null && target["name"] != undefined) {
                let _name = target["name"];
                if (!_.isString(_name)) {
                    throw new Error(path + "name is not a string");
                }
            }
            if (target["application"] != null && target["application"] != undefined) {
                let _application = target["application"];
                if (!_.isString(_application)) {
                    throw new Error(path + "application is not a string");
                }
            }
            if (target["configuration"] != null && target["configuration"] != undefined) {
                let _configuration = target["configuration"];
                if (!_.isString(_configuration)) {
                    throw new Error(path + "configuration is not a string");
                }
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_application_instance.check(target, true, path).then(() => {
            return new Model_application_instance(target);
        });
    }
}
exports.Model_application_instance = Model_application_instance;
//# sourceMappingURL=Model_application_instance.js.map
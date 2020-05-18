"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const utils_1 = require("utils");
/**
  Templates collection used by the deployment service
*/
class Model_deploy_template extends utils_1.Base {
    /**
      Templates collection used by the deployment service
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "deploy_template";
        if (obj["name"] != undefined) {
            this["name"] = obj["name"].toString();
        }
        if (obj["template"] != undefined) {
            this["template"] = obj["template"].toString();
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
            if (target["template"] != null && target["template"] != undefined) {
                let _template = target["template"];
                if (!_.isString(_template)) {
                    throw new Error(path + "template is not a string");
                }
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_deploy_template.check(target, true, path).then(() => {
            return new Model_deploy_template(target);
        });
    }
}
exports.Model_deploy_template = Model_deploy_template;
//# sourceMappingURL=Model_deploy_template.js.map
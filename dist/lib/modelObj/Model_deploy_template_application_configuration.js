"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const Model_deploy_template_1 = require("./Model_deploy_template");
/**
  Template used by deploy service - application configuration specific
*/
class Model_deploy_template_application_configuration extends Model_deploy_template_1.Model_deploy_template {
    /**
      Template used by deploy service - application configuration specific
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "deploy_template_application_configuration";
        if (obj["application_id"] != undefined) {
            if (_.isString(obj["application_id"])) {
                this["application_id"] = obj["application_id"];
            }
            else if (obj["application_id"]._id) {
                this["application_id"] = obj["application_id"]._id;
            }
        }
    }
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            if (target["application_id"] != null && target["application_id"] != undefined) {
                let _application_id = target["application_id"];
                if (!_.isString(_application_id)) {
                    throw new Error(path + "application_id is not a string");
                }
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_deploy_template_application_configuration.check(target, true, path).then(() => {
            return new Model_deploy_template_application_configuration(target);
        });
    }
}
exports.Model_deploy_template_application_configuration = Model_deploy_template_application_configuration;
//# sourceMappingURL=Model_deploy_template_application_configuration.js.map
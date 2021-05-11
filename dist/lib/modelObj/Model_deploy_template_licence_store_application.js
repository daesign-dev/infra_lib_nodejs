"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_deploy_template_licence_store_application = void 0;
const _ = require("lodash");
const Model_deploy_template_1 = require("./Model_deploy_template");
/**
  Template used by deploy service - application licence store specific
*/
class Model_deploy_template_licence_store_application extends Model_deploy_template_1.Model_deploy_template {
    /**
      Template used by deploy service - application licence store specific
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "deploy_template_licence_store_application";
        if (obj["application"] != undefined) {
            if (_.isString(obj["application"])) {
                this["application"] = obj["application"];
            }
            else if (obj["application"]._id) {
                this["application"] = obj["application"]._id;
            }
        }
    }
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            if (target["application"] != null && target["application"] != undefined) {
                let _application = target["application"];
                if (!_.isString(_application)) {
                    throw new Error(path + "application is not a string");
                }
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_deploy_template_licence_store_application.check(target, true, path).then(() => {
            return new Model_deploy_template_licence_store_application(target);
        });
    }
}
exports.Model_deploy_template_licence_store_application = Model_deploy_template_licence_store_application;
//# sourceMappingURL=Model_deploy_template_licence_store_application.js.map
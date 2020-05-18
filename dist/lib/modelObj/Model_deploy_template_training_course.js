"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const Model_deploy_template_1 = require("./Model_deploy_template");
/**
  Template used by deploy service - training course specific
*/
class Model_deploy_template_training_course extends Model_deploy_template_1.Model_deploy_template {
    /**
      Template used by deploy service - training course specific
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "deploy_template_training_course";
        if (obj["application_instance"] != undefined) {
            if (_.isString(obj["application_instance"])) {
                this["application_instance"] = obj["application_instance"];
            }
            else if (obj["application_instance"]._id) {
                this["application_instance"] = obj["application_instance"]._id;
            }
        }
    }
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            if (target["application_instance"] != null && target["application_instance"] != undefined) {
                let _application_instance = target["application_instance"];
                if (!_.isString(_application_instance)) {
                    throw new Error(path + "application_instance is not a string");
                }
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_deploy_template_training_course.check(target, true, path).then(() => {
            return new Model_deploy_template_training_course(target);
        });
    }
}
exports.Model_deploy_template_training_course = Model_deploy_template_training_course;
//# sourceMappingURL=Model_deploy_template_training_course.js.map
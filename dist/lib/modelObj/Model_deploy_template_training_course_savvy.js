"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_deploy_template_training_course_savvy = void 0;
const _ = require("lodash");
const Model_deploy_template_1 = require("./Model_deploy_template");
/**
  Deploy template for SAVVY training courses
*/
class Model_deploy_template_training_course_savvy extends Model_deploy_template_1.Model_deploy_template {
    /**
      Deploy template for SAVVY training courses
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "deploy_template_training_course_savvy";
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
        return Model_deploy_template_training_course_savvy.check(target, true, path).then(() => {
            return new Model_deploy_template_training_course_savvy(target);
        });
    }
}
exports.Model_deploy_template_training_course_savvy = Model_deploy_template_training_course_savvy;
//# sourceMappingURL=Model_deploy_template_training_course_savvy.js.map
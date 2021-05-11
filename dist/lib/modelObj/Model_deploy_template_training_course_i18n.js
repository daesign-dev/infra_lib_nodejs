"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_deploy_template_training_course_i18n = void 0;
const _ = require("lodash");
const Model_deploy_template_1 = require("./Model_deploy_template");
/**
  Template used by deploy service - training course internationalisation
*/
class Model_deploy_template_training_course_i18n extends Model_deploy_template_1.Model_deploy_template {
    /**
      Template used by deploy service - training course internationalisation
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "deploy_template_training_course_i18n";
        if (obj["lang"] != undefined) {
            if (_.isString(obj["lang"])) {
                this["lang"] = obj["lang"];
            }
            else if (obj["lang"]._id) {
                this["lang"] = obj["lang"]._id;
            }
        }
        if (obj["parentTemplate"] != undefined) {
            if (_.isString(obj["parentTemplate"])) {
                this["parentTemplate"] = obj["parentTemplate"];
            }
            else if (obj["parentTemplate"]._id) {
                this["parentTemplate"] = obj["parentTemplate"]._id;
            }
        }
    }
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            if (target["lang"] != null && target["lang"] != undefined) {
                let _lang = target["lang"];
                if (!_.isString(_lang)) {
                    throw new Error(path + "lang is not a string");
                }
            }
            if (target["parentTemplate"] != null && target["parentTemplate"] != undefined) {
                let _parentTemplate = target["parentTemplate"];
                if (!_.isString(_parentTemplate)) {
                    throw new Error(path + "parentTemplate is not a string");
                }
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_deploy_template_training_course_i18n.check(target, true, path).then(() => {
            return new Model_deploy_template_training_course_i18n(target);
        });
    }
}
exports.Model_deploy_template_training_course_i18n = Model_deploy_template_training_course_i18n;
//# sourceMappingURL=Model_deploy_template_training_course_i18n.js.map
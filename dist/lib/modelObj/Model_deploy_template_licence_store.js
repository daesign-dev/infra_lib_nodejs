"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const Model_deploy_template_1 = require("./Model_deploy_template");
/**
   Template used by deploy service - licence store specific
*/
class Model_deploy_template_licence_store extends Model_deploy_template_1.Model_deploy_template {
    /**
       Template used by deploy service - licence store specific
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "deploy_template_licence_store";
        if (obj["application_instance"] != undefined) {
            if (_.isString(obj["application_instance"])) {
                this["application_instance"] = obj["application_instance"];
            }
            else if (obj["application_instance"]._id) {
                this["application_instance"] = obj["application_instance"]._id;
            }
        }
        if (obj["lang"] != undefined) {
            if (_.isString(obj["lang"])) {
                this["lang"] = obj["lang"];
            }
            else if (obj["lang"]._id) {
                this["lang"] = obj["lang"]._id;
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
            if (target["lang"] != null && target["lang"] != undefined) {
                let _lang = target["lang"];
                if (!_.isString(_lang)) {
                    throw new Error(path + "lang is not a string");
                }
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_deploy_template_licence_store.check(target, true, path).then(() => {
            return new Model_deploy_template_licence_store(target);
        });
    }
}
exports.Model_deploy_template_licence_store = Model_deploy_template_licence_store;
//# sourceMappingURL=Model_deploy_template_licence_store.js.map
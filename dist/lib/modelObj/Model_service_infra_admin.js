"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const Model_service_1 = require("./Model_service");
/**
  administration de l'infra
*/
class Model_service_infra_admin extends Model_service_1.Model_service {
    /**
      administration de l'infra
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "service_infra_admin";
        if (obj["ssoBdUrl"] != undefined) {
            this["ssoBdUrl"] = obj["ssoBdUrl"].toString();
        }
        if (obj["infraBdUrl"] != undefined) {
            this["infraBdUrl"] = obj["infraBdUrl"].toString();
        }
        if (obj["platformBdUrl"] != undefined) {
            this["platformBdUrl"] = obj["platformBdUrl"].toString();
        }
        if (obj["service_nginxMultiConfiguratorId"] != undefined) {
            if (_.isString(obj["service_nginxMultiConfiguratorId"])) {
                this["service_nginxMultiConfiguratorId"] = obj["service_nginxMultiConfiguratorId"];
            }
            else if (obj["service_nginxMultiConfiguratorId"]._id) {
                this["service_nginxMultiConfiguratorId"] = obj["service_nginxMultiConfiguratorId"]._id;
            }
        }
        if (obj["nginxApplicationSuffixWebapp1"] != undefined) {
            this["nginxApplicationSuffixWebapp1"] = obj["nginxApplicationSuffixWebapp1"].toString();
        }
        if (obj["nginxApplicationSuffixWebapp2"] != undefined) {
            this["nginxApplicationSuffixWebapp2"] = obj["nginxApplicationSuffixWebapp2"].toString();
        }
    }
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            if (isCompleteObj && (target["ssoBdUrl"] == null || target["ssoBdUrl"] == undefined)) {
                throw new Error(path + "ssoBdUrl is required");
            }
            if (target["ssoBdUrl"] != null && target["ssoBdUrl"] != undefined) {
                let _ssoBdUrl = target["ssoBdUrl"];
                if (!_.isString(_ssoBdUrl)) {
                    throw new Error(path + "ssoBdUrl is not a string");
                }
            }
            if (isCompleteObj && (target["infraBdUrl"] == null || target["infraBdUrl"] == undefined)) {
                throw new Error(path + "infraBdUrl is required");
            }
            if (target["infraBdUrl"] != null && target["infraBdUrl"] != undefined) {
                let _infraBdUrl = target["infraBdUrl"];
                if (!_.isString(_infraBdUrl)) {
                    throw new Error(path + "infraBdUrl is not a string");
                }
            }
            if (target["platformBdUrl"] != null && target["platformBdUrl"] != undefined) {
                let _platformBdUrl = target["platformBdUrl"];
                if (!_.isString(_platformBdUrl)) {
                    throw new Error(path + "platformBdUrl is not a string");
                }
            }
            if (isCompleteObj && (target["service_nginxMultiConfiguratorId"] == null || target["service_nginxMultiConfiguratorId"] == undefined)) {
                throw new Error(path + "service_nginxMultiConfiguratorId is required");
            }
            if (target["service_nginxMultiConfiguratorId"] != null && target["service_nginxMultiConfiguratorId"] != undefined) {
                let _service_nginxMultiConfiguratorId = target["service_nginxMultiConfiguratorId"];
                if (!_.isString(_service_nginxMultiConfiguratorId)) {
                    throw new Error(path + "service_nginxMultiConfiguratorId is not a string");
                }
            }
            if (target["nginxApplicationSuffixWebapp1"] != null && target["nginxApplicationSuffixWebapp1"] != undefined) {
                let _nginxApplicationSuffixWebapp1 = target["nginxApplicationSuffixWebapp1"];
                if (!_.isString(_nginxApplicationSuffixWebapp1)) {
                    throw new Error(path + "nginxApplicationSuffixWebapp1 is not a string");
                }
            }
            if (target["nginxApplicationSuffixWebapp2"] != null && target["nginxApplicationSuffixWebapp2"] != undefined) {
                let _nginxApplicationSuffixWebapp2 = target["nginxApplicationSuffixWebapp2"];
                if (!_.isString(_nginxApplicationSuffixWebapp2)) {
                    throw new Error(path + "nginxApplicationSuffixWebapp2 is not a string");
                }
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_service_infra_admin.check(target, true, path).then(() => {
            return new Model_service_infra_admin(target);
        });
    }
}
exports.Model_service_infra_admin = Model_service_infra_admin;
//# sourceMappingURL=Model_service_infra_admin.js.map
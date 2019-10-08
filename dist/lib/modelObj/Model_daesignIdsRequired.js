"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const utils_1 = require("utils");
/**
  The IDS required for deployment
*/
class Model_daesignIdsRequired extends utils_1.Base {
    /**
      The IDS required for deployment
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "daesignIdsRequired";
        if (obj["daesignEndClientId"] != undefined) {
            if (_.isString(obj["daesignEndClientId"])) {
                this["daesignEndClientId"] = obj["daesignEndClientId"];
            }
            else if (obj["daesignEndClientId"]._id) {
                this["daesignEndClientId"] = obj["daesignEndClientId"]._id;
            }
        }
        if (obj["infraAdminInstanceId"] != undefined) {
            if (_.isString(obj["infraAdminInstanceId"])) {
                this["infraAdminInstanceId"] = obj["infraAdminInstanceId"];
            }
            else if (obj["infraAdminInstanceId"]._id) {
                this["infraAdminInstanceId"] = obj["infraAdminInstanceId"]._id;
            }
        }
        if (obj["nathanEndClientId"] != undefined) {
            if (_.isString(obj["nathanEndClientId"])) {
                this["nathanEndClientId"] = obj["nathanEndClientId"];
            }
            else if (obj["nathanEndClientId"]._id) {
                this["nathanEndClientId"] = obj["nathanEndClientId"]._id;
            }
        }
        if (obj["savvyLearnerInstanceId"] != undefined) {
            if (_.isString(obj["savvyLearnerInstanceId"])) {
                this["savvyLearnerInstanceId"] = obj["savvyLearnerInstanceId"];
            }
            else if (obj["savvyLearnerInstanceId"]._id) {
                this["savvyLearnerInstanceId"] = obj["savvyLearnerInstanceId"]._id;
            }
        }
        if (obj["revizQuizInstanceId"] != undefined) {
            if (_.isString(obj["revizQuizInstanceId"])) {
                this["revizQuizInstanceId"] = obj["revizQuizInstanceId"];
            }
            else if (obj["revizQuizInstanceId"]._id) {
                this["revizQuizInstanceId"] = obj["revizQuizInstanceId"]._id;
            }
        }
        if (obj["serviceNginxMultiConfiguratorId"] != undefined) {
            if (_.isString(obj["serviceNginxMultiConfiguratorId"])) {
                this["serviceNginxMultiConfiguratorId"] = obj["serviceNginxMultiConfiguratorId"];
            }
            else if (obj["serviceNginxMultiConfiguratorId"]._id) {
                this["serviceNginxMultiConfiguratorId"] = obj["serviceNginxMultiConfiguratorId"]._id;
            }
        }
        if (obj["serviceMailToInfraSavvyId"] != undefined) {
            if (_.isString(obj["serviceMailToInfraSavvyId"])) {
                this["serviceMailToInfraSavvyId"] = obj["serviceMailToInfraSavvyId"];
            }
            else if (obj["serviceMailToInfraSavvyId"]._id) {
                this["serviceMailToInfraSavvyId"] = obj["serviceMailToInfraSavvyId"]._id;
            }
        }
        if (obj["superAdminEndclientId"] != undefined) {
            if (_.isString(obj["superAdminEndclientId"])) {
                this["superAdminEndclientId"] = obj["superAdminEndclientId"];
            }
            else if (obj["superAdminEndclientId"]._id) {
                this["superAdminEndclientId"] = obj["superAdminEndclientId"]._id;
            }
        }
        if (obj["superAdminApplicationInstanceId"] != undefined) {
            if (_.isString(obj["superAdminApplicationInstanceId"])) {
                this["superAdminApplicationInstanceId"] = obj["superAdminApplicationInstanceId"];
            }
            else if (obj["superAdminApplicationInstanceId"]._id) {
                this["superAdminApplicationInstanceId"] = obj["superAdminApplicationInstanceId"]._id;
            }
        }
        if (obj["daesignSavvyAuthorAdminInstanceId"] != undefined) {
            if (_.isString(obj["daesignSavvyAuthorAdminInstanceId"])) {
                this["daesignSavvyAuthorAdminInstanceId"] = obj["daesignSavvyAuthorAdminInstanceId"];
            }
            else if (obj["daesignSavvyAuthorAdminInstanceId"]._id) {
                this["daesignSavvyAuthorAdminInstanceId"] = obj["daesignSavvyAuthorAdminInstanceId"]._id;
            }
        }
    }
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            if (isCompleteObj && (target["daesignEndClientId"] == null || target["daesignEndClientId"] == undefined)) {
                throw new Error(path + "daesignEndClientId is required");
            }
            if (target["daesignEndClientId"] != null && target["daesignEndClientId"] != undefined) {
                let _daesignEndClientId = target["daesignEndClientId"];
                if (!_.isString(_daesignEndClientId)) {
                    throw new Error(path + "daesignEndClientId is not a string");
                }
            }
            if (isCompleteObj && (target["infraAdminInstanceId"] == null || target["infraAdminInstanceId"] == undefined)) {
                throw new Error(path + "infraAdminInstanceId is required");
            }
            if (target["infraAdminInstanceId"] != null && target["infraAdminInstanceId"] != undefined) {
                let _infraAdminInstanceId = target["infraAdminInstanceId"];
                if (!_.isString(_infraAdminInstanceId)) {
                    throw new Error(path + "infraAdminInstanceId is not a string");
                }
            }
            if (isCompleteObj && (target["nathanEndClientId"] == null || target["nathanEndClientId"] == undefined)) {
                throw new Error(path + "nathanEndClientId is required");
            }
            if (target["nathanEndClientId"] != null && target["nathanEndClientId"] != undefined) {
                let _nathanEndClientId = target["nathanEndClientId"];
                if (!_.isString(_nathanEndClientId)) {
                    throw new Error(path + "nathanEndClientId is not a string");
                }
            }
            if (isCompleteObj && (target["savvyLearnerInstanceId"] == null || target["savvyLearnerInstanceId"] == undefined)) {
                throw new Error(path + "savvyLearnerInstanceId is required");
            }
            if (target["savvyLearnerInstanceId"] != null && target["savvyLearnerInstanceId"] != undefined) {
                let _savvyLearnerInstanceId = target["savvyLearnerInstanceId"];
                if (!_.isString(_savvyLearnerInstanceId)) {
                    throw new Error(path + "savvyLearnerInstanceId is not a string");
                }
            }
            if (isCompleteObj && (target["revizQuizInstanceId"] == null || target["revizQuizInstanceId"] == undefined)) {
                throw new Error(path + "revizQuizInstanceId is required");
            }
            if (target["revizQuizInstanceId"] != null && target["revizQuizInstanceId"] != undefined) {
                let _revizQuizInstanceId = target["revizQuizInstanceId"];
                if (!_.isString(_revizQuizInstanceId)) {
                    throw new Error(path + "revizQuizInstanceId is not a string");
                }
            }
            if (isCompleteObj && (target["serviceNginxMultiConfiguratorId"] == null || target["serviceNginxMultiConfiguratorId"] == undefined)) {
                throw new Error(path + "serviceNginxMultiConfiguratorId is required");
            }
            if (target["serviceNginxMultiConfiguratorId"] != null && target["serviceNginxMultiConfiguratorId"] != undefined) {
                let _serviceNginxMultiConfiguratorId = target["serviceNginxMultiConfiguratorId"];
                if (!_.isString(_serviceNginxMultiConfiguratorId)) {
                    throw new Error(path + "serviceNginxMultiConfiguratorId is not a string");
                }
            }
            if (isCompleteObj && (target["serviceMailToInfraSavvyId"] == null || target["serviceMailToInfraSavvyId"] == undefined)) {
                throw new Error(path + "serviceMailToInfraSavvyId is required");
            }
            if (target["serviceMailToInfraSavvyId"] != null && target["serviceMailToInfraSavvyId"] != undefined) {
                let _serviceMailToInfraSavvyId = target["serviceMailToInfraSavvyId"];
                if (!_.isString(_serviceMailToInfraSavvyId)) {
                    throw new Error(path + "serviceMailToInfraSavvyId is not a string");
                }
            }
            if (isCompleteObj && (target["superAdminEndclientId"] == null || target["superAdminEndclientId"] == undefined)) {
                throw new Error(path + "superAdminEndclientId is required");
            }
            if (target["superAdminEndclientId"] != null && target["superAdminEndclientId"] != undefined) {
                let _superAdminEndclientId = target["superAdminEndclientId"];
                if (!_.isString(_superAdminEndclientId)) {
                    throw new Error(path + "superAdminEndclientId is not a string");
                }
            }
            if (isCompleteObj && (target["superAdminApplicationInstanceId"] == null || target["superAdminApplicationInstanceId"] == undefined)) {
                throw new Error(path + "superAdminApplicationInstanceId is required");
            }
            if (target["superAdminApplicationInstanceId"] != null && target["superAdminApplicationInstanceId"] != undefined) {
                let _superAdminApplicationInstanceId = target["superAdminApplicationInstanceId"];
                if (!_.isString(_superAdminApplicationInstanceId)) {
                    throw new Error(path + "superAdminApplicationInstanceId is not a string");
                }
            }
            if (isCompleteObj && (target["daesignSavvyAuthorAdminInstanceId"] == null || target["daesignSavvyAuthorAdminInstanceId"] == undefined)) {
                throw new Error(path + "daesignSavvyAuthorAdminInstanceId is required");
            }
            if (target["daesignSavvyAuthorAdminInstanceId"] != null && target["daesignSavvyAuthorAdminInstanceId"] != undefined) {
                let _daesignSavvyAuthorAdminInstanceId = target["daesignSavvyAuthorAdminInstanceId"];
                if (!_.isString(_daesignSavvyAuthorAdminInstanceId)) {
                    throw new Error(path + "daesignSavvyAuthorAdminInstanceId is not a string");
                }
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_daesignIdsRequired.check(target, true, path).then(() => {
            return new Model_daesignIdsRequired(target);
        });
    }
}
exports.Model_daesignIdsRequired = Model_daesignIdsRequired;
//# sourceMappingURL=Model_daesignIdsRequired.js.map
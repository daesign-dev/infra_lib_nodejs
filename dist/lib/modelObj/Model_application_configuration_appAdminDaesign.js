"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_application_configuration_appAdminDaesign = void 0;
const _ = require("lodash");
const Index = require("./Index");
const Model_application_configuration_web_1 = require("./Model_application_configuration_web");
/**
  Application configuration for Daesign admin that have specific inputs
*/
class Model_application_configuration_appAdminDaesign extends Model_application_configuration_web_1.Model_application_configuration_web {
    /**
      Application configuration for Daesign admin that have specific inputs
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "application_configuration_appAdminDaesign";
        /**
  The deploy service url
  */
        this["deployServiceUrl"] = "https://services-dev.daesign.com/deploy/";
        if (obj["configurationUrlDb"] != undefined) {
            this["configurationUrlDb"] = obj["configurationUrlDb"].toString();
        }
        if (obj["urlBase"] != undefined) {
            this["urlBase"] = obj["urlBase"].toString();
        }
        if (obj["signinUrl"] != undefined) {
            this["signinUrl"] = obj["signinUrl"].toString();
        }
        if (obj["serviceSessionUrl"] != undefined) {
            this["serviceSessionUrl"] = obj["serviceSessionUrl"].toString();
        }
        if (obj["clientServiceUrl"] != undefined) {
            this["clientServiceUrl"] = obj["clientServiceUrl"].toString();
        }
        if (obj["fileServiceUrl"] != undefined) {
            this["fileServiceUrl"] = obj["fileServiceUrl"].toString();
        }
        if (obj["aclTemplate"] != undefined) {
            if (obj._class) {
                this["aclTemplate"] = new Index[obj._class](obj["aclTemplate"]);
            }
            else {
                this["aclTemplate"] = new Index["_acl"](obj["aclTemplate"]);
            }
        }
        if (obj["deployServiceUrl"] != undefined) {
            this["deployServiceUrl"] = obj["deployServiceUrl"].toString();
        }
        if (obj["webAppAdminId"] != undefined) {
            this["webAppAdminId"] = obj["webAppAdminId"].toString();
        }
        if (obj["webAppApprenantId"] != undefined) {
            this["webAppApprenantId"] = obj["webAppApprenantId"].toString();
        }
        if (obj["savvyLearnerInstanceId"] != undefined) {
            this["savvyLearnerInstanceId"] = obj["savvyLearnerInstanceId"].toString();
        }
        if (obj["licenseTokenUrl"] != undefined) {
            this["licenseTokenUrl"] = obj["licenseTokenUrl"].toString();
        }
    }
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            if (isCompleteObj && (target["configurationUrlDb"] == null || target["configurationUrlDb"] == undefined)) {
                throw new Error(path + "configurationUrlDb is required");
            }
            if (target["configurationUrlDb"] != null && target["configurationUrlDb"] != undefined) {
                let _configurationUrlDb = target["configurationUrlDb"];
                if (!_.isString(_configurationUrlDb)) {
                    throw new Error(path + "configurationUrlDb is not a string");
                }
            }
            if (isCompleteObj && (target["urlBase"] == null || target["urlBase"] == undefined)) {
                throw new Error(path + "urlBase is required");
            }
            if (target["urlBase"] != null && target["urlBase"] != undefined) {
                let _urlBase = target["urlBase"];
                if (!_.isString(_urlBase)) {
                    throw new Error(path + "urlBase is not a string");
                }
            }
            if (isCompleteObj && (target["signinUrl"] == null || target["signinUrl"] == undefined)) {
                throw new Error(path + "signinUrl is required");
            }
            if (target["signinUrl"] != null && target["signinUrl"] != undefined) {
                let _signinUrl = target["signinUrl"];
                if (!_.isString(_signinUrl)) {
                    throw new Error(path + "signinUrl is not a string");
                }
            }
            if (isCompleteObj && (target["serviceSessionUrl"] == null || target["serviceSessionUrl"] == undefined)) {
                throw new Error(path + "serviceSessionUrl is required");
            }
            if (target["serviceSessionUrl"] != null && target["serviceSessionUrl"] != undefined) {
                let _serviceSessionUrl = target["serviceSessionUrl"];
                if (!_.isString(_serviceSessionUrl)) {
                    throw new Error(path + "serviceSessionUrl is not a string");
                }
            }
            if (isCompleteObj && (target["clientServiceUrl"] == null || target["clientServiceUrl"] == undefined)) {
                throw new Error(path + "clientServiceUrl is required");
            }
            if (target["clientServiceUrl"] != null && target["clientServiceUrl"] != undefined) {
                let _clientServiceUrl = target["clientServiceUrl"];
                if (!_.isString(_clientServiceUrl)) {
                    throw new Error(path + "clientServiceUrl is not a string");
                }
            }
            if (target["fileServiceUrl"] != null && target["fileServiceUrl"] != undefined) {
                let _fileServiceUrl = target["fileServiceUrl"];
                if (!_.isString(_fileServiceUrl)) {
                    throw new Error(path + "fileServiceUrl is not a string");
                }
            }
            if (target["aclTemplate"] != null && target["aclTemplate"] != undefined) {
                let _aclTemplate = target["aclTemplate"];
                promArr.push(Index["_acl"].check(_aclTemplate, isCompleteObj, path + "aclTemplate.")
                    .catch((err) => {
                    throw new Error(path + "aclTemplate is not ");
                }));
                if (_aclTemplate._class != null && _aclTemplate._class != undefined) {
                    promArr.push(Index[_aclTemplate._class].check(_aclTemplate, isCompleteObj, path + "aclTemplate.")
                        .catch((err) => {
                        throw new Error(path + "aclTemplate is not a " + _aclTemplate._class);
                    }));
                }
            }
            if (target["deployServiceUrl"] != null && target["deployServiceUrl"] != undefined) {
                let _deployServiceUrl = target["deployServiceUrl"];
                if (!_.isString(_deployServiceUrl)) {
                    throw new Error(path + "deployServiceUrl is not a string");
                }
            }
            if (target["webAppAdminId"] != null && target["webAppAdminId"] != undefined) {
                let _webAppAdminId = target["webAppAdminId"];
                if (!_.isString(_webAppAdminId)) {
                    throw new Error(path + "webAppAdminId is not a string");
                }
            }
            if (target["webAppApprenantId"] != null && target["webAppApprenantId"] != undefined) {
                let _webAppApprenantId = target["webAppApprenantId"];
                if (!_.isString(_webAppApprenantId)) {
                    throw new Error(path + "webAppApprenantId is not a string");
                }
            }
            if (target["savvyLearnerInstanceId"] != null && target["savvyLearnerInstanceId"] != undefined) {
                let _savvyLearnerInstanceId = target["savvyLearnerInstanceId"];
                if (!_.isString(_savvyLearnerInstanceId)) {
                    throw new Error(path + "savvyLearnerInstanceId is not a string");
                }
            }
            if (target["licenseTokenUrl"] != null && target["licenseTokenUrl"] != undefined) {
                let _licenseTokenUrl = target["licenseTokenUrl"];
                if (!_.isString(_licenseTokenUrl)) {
                    throw new Error(path + "licenseTokenUrl is not a string");
                }
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_application_configuration_appAdminDaesign.check(target, true, path).then(() => {
            return new Model_application_configuration_appAdminDaesign(target);
        });
    }
}
exports.Model_application_configuration_appAdminDaesign = Model_application_configuration_appAdminDaesign;
//# sourceMappingURL=Model_application_configuration_appAdminDaesign.js.map
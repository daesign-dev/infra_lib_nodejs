"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const Index = require("./Index");
const Model_application_configuration_1 = require("./Model_application_configuration");
/**
  Configuration pour l'application Savvy - Author
*/
class Model_application_configuration_savvy_author extends Model_application_configuration_1.Model_application_configuration {
    /**
      Configuration pour l'application Savvy - Author
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "application_configuration_savvy_author";
        if (obj["configurationUrlDb"] != undefined) {
            this["configurationUrlDb"] = obj["configurationUrlDb"].toString();
        }
        if (obj["aclTemplate"] != undefined) {
            if (obj._class) {
                this["aclTemplate"] = new Index[obj._class](obj["aclTemplate"]);
            }
            else {
                this["aclTemplate"] = new Index["_acl"](obj["aclTemplate"]);
            }
        }
        if (obj["urlInfraDb"] != undefined) {
            this["urlInfraDb"] = obj["urlInfraDb"].toString();
        }
        if (obj["urlFrontAppsDb"] != undefined) {
            this["urlFrontAppsDb"] = obj["urlFrontAppsDb"].toString();
        }
        if (obj["su_clientId"] != undefined) {
            if (_.isString(obj["su_clientId"])) {
                this["su_clientId"] = obj["su_clientId"];
            }
            else if (obj["su_clientId"]._id) {
                this["su_clientId"] = obj["su_clientId"]._id;
            }
        }
        if (obj["su_conf"] != undefined) {
            this["su_conf"] = new Boolean(obj["su_conf"]).valueOf();
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
            if (target["urlInfraDb"] != null && target["urlInfraDb"] != undefined) {
                let _urlInfraDb = target["urlInfraDb"];
                if (!_.isString(_urlInfraDb)) {
                    throw new Error(path + "urlInfraDb is not a string");
                }
            }
            if (target["urlFrontAppsDb"] != null && target["urlFrontAppsDb"] != undefined) {
                let _urlFrontAppsDb = target["urlFrontAppsDb"];
                if (!_.isString(_urlFrontAppsDb)) {
                    throw new Error(path + "urlFrontAppsDb is not a string");
                }
            }
            if (target["su_clientId"] != null && target["su_clientId"] != undefined) {
                let _su_clientId = target["su_clientId"];
                if (!_.isString(_su_clientId)) {
                    throw new Error(path + "su_clientId is not a string");
                }
            }
            if (target["su_conf"] != null && target["su_conf"] != undefined) {
                let _su_conf = target["su_conf"];
                if (!_.isBoolean(_su_conf)) {
                    throw new Error(path + "su_conf is not a boolean");
                }
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_application_configuration_savvy_author.check(target, true, path).then(() => {
            return new Model_application_configuration_savvy_author(target);
        });
    }
}
exports.Model_application_configuration_savvy_author = Model_application_configuration_savvy_author;
//# sourceMappingURL=Model_application_configuration_savvy_author.js.map
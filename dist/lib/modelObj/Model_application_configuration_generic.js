"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_application_configuration_generic = void 0;
const _ = require("lodash");
const Index = require("./Index");
const Model_application_configuration_web_1 = require("./Model_application_configuration_web");
/**
  generic conf
*/
class Model_application_configuration_generic extends Model_application_configuration_web_1.Model_application_configuration_web {
    /**
      generic conf
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "application_configuration_generic";
        if (obj["configurationUrlDb"] != undefined) {
            this["configurationUrlDb"] = obj["configurationUrlDb"].toString();
        }
        if (obj["urlBase"] != undefined) {
            this["urlBase"] = obj["urlBase"].toString();
        }
        if (obj["clientServiceUrl"] != undefined) {
            this["clientServiceUrl"] = obj["clientServiceUrl"].toString();
        }
        if (obj["aclTemplate"] != undefined) {
            if (obj._class) {
                this["aclTemplate"] = new Index[obj._class](obj["aclTemplate"]);
            }
            else {
                this["aclTemplate"] = new Index["_acl"](obj["aclTemplate"]);
            }
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
            if (isCompleteObj && (target["clientServiceUrl"] == null || target["clientServiceUrl"] == undefined)) {
                throw new Error(path + "clientServiceUrl is required");
            }
            if (target["clientServiceUrl"] != null && target["clientServiceUrl"] != undefined) {
                let _clientServiceUrl = target["clientServiceUrl"];
                if (!_.isString(_clientServiceUrl)) {
                    throw new Error(path + "clientServiceUrl is not a string");
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
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_application_configuration_generic.check(target, true, path).then(() => {
            return new Model_application_configuration_generic(target);
        });
    }
}
exports.Model_application_configuration_generic = Model_application_configuration_generic;
//# sourceMappingURL=Model_application_configuration_generic.js.map
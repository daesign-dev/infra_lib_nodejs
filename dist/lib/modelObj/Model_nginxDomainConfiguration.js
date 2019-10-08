"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const utils_1 = require("utils");
/**
  All informations needed for the nginx / hosting domain deployment
*/
class Model_nginxDomainConfiguration extends utils_1.Base {
    /**
      All informations needed for the nginx / hosting domain deployment
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "nginxDomainConfiguration";
        if (obj["domainName"] != undefined) {
            this["domainName"] = obj["domainName"].toString();
        }
        if (obj["nginxSuffix"] != undefined) {
            this["nginxSuffix"] = obj["nginxSuffix"].toString();
        }
        if (obj["dnsZone"] != undefined) {
            this["dnsZone"] = obj["dnsZone"].toString();
        }
        if (obj["dnsTarget"] != undefined) {
            this["dnsTarget"] = obj["dnsTarget"].toString();
        }
    }
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            if (isCompleteObj && (target["domainName"] == null || target["domainName"] == undefined)) {
                throw new Error(path + "domainName is required");
            }
            if (target["domainName"] != null && target["domainName"] != undefined) {
                let _domainName = target["domainName"];
                if (!_.isString(_domainName)) {
                    throw new Error(path + "domainName is not a string");
                }
            }
            if (isCompleteObj && (target["nginxSuffix"] == null || target["nginxSuffix"] == undefined)) {
                throw new Error(path + "nginxSuffix is required");
            }
            if (target["nginxSuffix"] != null && target["nginxSuffix"] != undefined) {
                let _nginxSuffix = target["nginxSuffix"];
                if (!_.isString(_nginxSuffix)) {
                    throw new Error(path + "nginxSuffix is not a string");
                }
            }
            if (isCompleteObj && (target["dnsZone"] == null || target["dnsZone"] == undefined)) {
                throw new Error(path + "dnsZone is required");
            }
            if (target["dnsZone"] != null && target["dnsZone"] != undefined) {
                let _dnsZone = target["dnsZone"];
                if (!_.isString(_dnsZone)) {
                    throw new Error(path + "dnsZone is not a string");
                }
            }
            if (isCompleteObj && (target["dnsTarget"] == null || target["dnsTarget"] == undefined)) {
                throw new Error(path + "dnsTarget is required");
            }
            if (target["dnsTarget"] != null && target["dnsTarget"] != undefined) {
                let _dnsTarget = target["dnsTarget"];
                if (!_.isString(_dnsTarget)) {
                    throw new Error(path + "dnsTarget is not a string");
                }
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_nginxDomainConfiguration.check(target, true, path).then(() => {
            return new Model_nginxDomainConfiguration(target);
        });
    }
}
exports.Model_nginxDomainConfiguration = Model_nginxDomainConfiguration;
//# sourceMappingURL=Model_nginxDomainConfiguration.js.map
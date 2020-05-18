"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const Index = require("./Index");
const Model_application_configuration_web_1 = require("./Model_application_configuration_web");
/**
  conf for generic authos app
*/
class Model_application_configuration_generic_author extends Model_application_configuration_web_1.Model_application_configuration_web {
    /**
      conf for generic authos app
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "application_configuration_generic_author";
        if (obj["configurationUrlDb"] != undefined) {
            this["configurationUrlDb"] = obj["configurationUrlDb"].toString();
        }
        if (obj["urlBase"] != undefined) {
            this["urlBase"] = obj["urlBase"].toString();
        }
        if (obj["uploadServiceURL"] != undefined) {
            this["uploadServiceURL"] = obj["uploadServiceURL"].toString();
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
        if (obj["tinymcekey"] != undefined) {
            this["tinymcekey"] = obj["tinymcekey"].toString();
        }
        if (obj["aws_region"] != undefined) {
            this["aws_region"] = obj["aws_region"].toString();
        }
        if (obj["aws_access_key_id"] != undefined) {
            this["aws_access_key_id"] = obj["aws_access_key_id"].toString();
        }
        if (obj["aws_secret_access_key"] != undefined) {
            this["aws_secret_access_key"] = obj["aws_secret_access_key"].toString();
        }
        if (obj["aws_s3_bucket_name"] != undefined) {
            this["aws_s3_bucket_name"] = obj["aws_s3_bucket_name"].toString();
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
            if (target["uploadServiceURL"] != null && target["uploadServiceURL"] != undefined) {
                let _uploadServiceURL = target["uploadServiceURL"];
                if (!_.isString(_uploadServiceURL)) {
                    throw new Error(path + "uploadServiceURL is not a string");
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
            if (target["tinymcekey"] != null && target["tinymcekey"] != undefined) {
                let _tinymcekey = target["tinymcekey"];
                if (!_.isString(_tinymcekey)) {
                    throw new Error(path + "tinymcekey is not a string");
                }
            }
            if (target["aws_region"] != null && target["aws_region"] != undefined) {
                let _aws_region = target["aws_region"];
                if (!_.isString(_aws_region)) {
                    throw new Error(path + "aws_region is not a string");
                }
            }
            if (target["aws_access_key_id"] != null && target["aws_access_key_id"] != undefined) {
                let _aws_access_key_id = target["aws_access_key_id"];
                if (!_.isString(_aws_access_key_id)) {
                    throw new Error(path + "aws_access_key_id is not a string");
                }
            }
            if (target["aws_secret_access_key"] != null && target["aws_secret_access_key"] != undefined) {
                let _aws_secret_access_key = target["aws_secret_access_key"];
                if (!_.isString(_aws_secret_access_key)) {
                    throw new Error(path + "aws_secret_access_key is not a string");
                }
            }
            if (target["aws_s3_bucket_name"] != null && target["aws_s3_bucket_name"] != undefined) {
                let _aws_s3_bucket_name = target["aws_s3_bucket_name"];
                if (!_.isString(_aws_s3_bucket_name)) {
                    throw new Error(path + "aws_s3_bucket_name is not a string");
                }
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_application_configuration_generic_author.check(target, true, path).then(() => {
            return new Model_application_configuration_generic_author(target);
        });
    }
}
exports.Model_application_configuration_generic_author = Model_application_configuration_generic_author;
//# sourceMappingURL=Model_application_configuration_generic_author.js.map
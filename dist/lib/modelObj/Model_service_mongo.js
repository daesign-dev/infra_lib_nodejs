"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_service_mongo = void 0;
const _ = require("lodash");
const Model_service_1 = require("./Model_service");
/**
  configure un service mongo
*/
class Model_service_mongo extends Model_service_1.Model_service {
    /**
      configure un service mongo
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "service_mongo";
        /**
  clef secrète de communication interne a l'infra
  */
        this["secretKey"] = "$$ENV.SECRET";
        /**
  The max pool size for mongo connection
  */
        this["mongoPoolSize"] = 5;
        if (obj["mongoosePath"] != undefined) {
            this["mongoosePath"] = obj["mongoosePath"].toString();
        }
        if (obj["mongoAuthSource"] != undefined) {
            this["mongoAuthSource"] = obj["mongoAuthSource"].toString();
        }
        if (obj["secretKey"] != undefined) {
            this["secretKey"] = obj["secretKey"].toString();
        }
        if (obj["mongoPoolSize"] != undefined) {
            this["mongoPoolSize"] = new Number(obj["mongoPoolSize"]).valueOf();
        }
    }
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            if (target["mongoosePath"] != null && target["mongoosePath"] != undefined) {
                let _mongoosePath = target["mongoosePath"];
                if (!_.isString(_mongoosePath)) {
                    throw new Error(path + "mongoosePath is not a string");
                }
            }
            if (target["mongoAuthSource"] != null && target["mongoAuthSource"] != undefined) {
                let _mongoAuthSource = target["mongoAuthSource"];
                if (!_.isString(_mongoAuthSource)) {
                    throw new Error(path + "mongoAuthSource is not a string");
                }
            }
            if (target["secretKey"] != null && target["secretKey"] != undefined) {
                let _secretKey = target["secretKey"];
                if (!_.isString(_secretKey)) {
                    throw new Error(path + "secretKey is not a string");
                }
            }
            if (target["mongoPoolSize"] != null && target["mongoPoolSize"] != undefined) {
                let _mongoPoolSize = target["mongoPoolSize"];
                if (!_.isNumber(_mongoPoolSize)) {
                    throw new Error(path + "mongoPoolSize is not a number");
                }
                if (_mongoPoolSize > 5) {
                    throw new Error(path + "mongoPoolSize must be greater than  5");
                }
                if (_mongoPoolSize < 1000) {
                    throw new Error(path + "mongoPoolSize must be less than 1000");
                }
                if (_mongoPoolSize % 1 > 0) {
                    throw new Error(path + "mongoPoolSize must be have a step of 1");
                }
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_service_mongo.check(target, true, path).then(() => {
            return new Model_service_mongo(target);
        });
    }
}
exports.Model_service_mongo = Model_service_mongo;
//# sourceMappingURL=Model_service_mongo.js.map
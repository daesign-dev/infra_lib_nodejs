"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_api_key = void 0;
const _ = require("lodash");
const Model_certificat_1 = require("./Model_certificat");
/**
  Défini un certificat utilisant uniquement une clé d'API pour une application donnée
*/
class Model_api_key extends Model_certificat_1.Model_certificat {
    /**
      Défini un certificat utilisant uniquement une clé d'API pour une application donnée
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "api_key";
        if (obj["key"] != undefined) {
            this["key"] = obj["key"].toString();
        }
        if (obj["app"] != undefined) {
            if (_.isString(obj["app"])) {
                this["app"] = obj["app"];
            }
            else if (obj["app"]._id) {
                this["app"] = obj["app"]._id;
            }
        }
    }
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            if (target["key"] != null && target["key"] != undefined) {
                let _key = target["key"];
                if (!_.isString(_key)) {
                    throw new Error(path + "key is not a string");
                }
            }
            if (target["app"] != null && target["app"] != undefined) {
                let _app = target["app"];
                if (!_.isString(_app)) {
                    throw new Error(path + "app is not a string");
                }
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_api_key.check(target, true, path).then(() => {
            return new Model_api_key(target);
        });
    }
}
exports.Model_api_key = Model_api_key;
//# sourceMappingURL=Model_api_key.js.map
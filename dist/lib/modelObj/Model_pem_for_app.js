"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const Model_certificat_1 = require("./Model_certificat");
/**
  Certificat PEM pour une app donnée
*/
class Model_pem_for_app extends Model_certificat_1.Model_certificat {
    /**
      Certificat PEM pour une app donnée
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "pem_for_app";
        if (obj["app"] != undefined) {
            if (_.isString(obj["app"])) {
                this["app"] = obj["app"];
            }
            else if (obj["app"]._id) {
                this["app"] = obj["app"]._id;
            }
        }
        if (obj["certificat"] != undefined) {
            this["certificat"] = obj["certificat"].toString();
        }
        if (obj["private_key"] != undefined) {
            this["private_key"] = obj["private_key"].toString();
        }
    }
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            if (target["app"] != null && target["app"] != undefined) {
                let _app = target["app"];
                if (!_.isString(_app)) {
                    throw new Error(path + "app is not a string");
                }
            }
            if (target["certificat"] != null && target["certificat"] != undefined) {
                let _certificat = target["certificat"];
                if (!_.isString(_certificat)) {
                    throw new Error(path + "certificat is not a string");
                }
            }
            if (target["private_key"] != null && target["private_key"] != undefined) {
                let _private_key = target["private_key"];
                if (!_.isString(_private_key)) {
                    throw new Error(path + "private_key is not a string");
                }
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_pem_for_app.check(target, true, path).then(() => {
            return new Model_pem_for_app(target);
        });
    }
}
exports.Model_pem_for_app = Model_pem_for_app;
//# sourceMappingURL=Model_pem_for_app.js.map
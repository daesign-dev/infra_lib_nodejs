"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_lang_code = void 0;
const _ = require("lodash");
const utils_1 = require("utils");
/**
  Définit le code pour une langue (se référer au code ISO 639 : https://fr.wikipedia.org/wiki/Liste_des_codes_ISO_639-1)
*/
class Model_lang_code extends utils_1.Base {
    /**
      Définit le code pour une langue (se référer au code ISO 639 : https://fr.wikipedia.org/wiki/Liste_des_codes_ISO_639-1)
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "lang_code";
        if (obj["code"] != undefined) {
            this["code"] = obj["code"].toString();
        }
        if (obj["name"] != undefined) {
            this["name"] = obj["name"].toString();
        }
    }
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            if (isCompleteObj && (target["code"] == null || target["code"] == undefined)) {
                throw new Error(path + "code is required");
            }
            if (target["code"] != null && target["code"] != undefined) {
                let _code = target["code"];
                if (!_.isString(_code)) {
                    throw new Error(path + "code is not a string");
                }
            }
            if (target["name"] != null && target["name"] != undefined) {
                let _name = target["name"];
                if (!_.isString(_name)) {
                    throw new Error(path + "name is not a string");
                }
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_lang_code.check(target, true, path).then(() => {
            return new Model_lang_code(target);
        });
    }
}
exports.Model_lang_code = Model_lang_code;
//# sourceMappingURL=Model_lang_code.js.map
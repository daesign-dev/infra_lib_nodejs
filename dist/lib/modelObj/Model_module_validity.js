"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_module_validity = void 0;
const _ = require("lodash");
const utils_1 = require("utils");
/**
  module ID validy for adaptivmat app teacher
*/
class Model_module_validity extends utils_1.Base {
    /**
      module ID validy for adaptivmat app teacher
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "module_validity";
        if (obj["module"] != undefined) {
            if (_.isString(obj["module"])) {
                this["module"] = obj["module"];
            }
            else if (obj["module"]._id) {
                this["module"] = obj["module"]._id;
            }
        }
        if (obj["enable"] != undefined) {
            this["enable"] = new Boolean(obj["enable"]).valueOf();
        }
    }
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            if (target["module"] != null && target["module"] != undefined) {
                let _module = target["module"];
                if (!_.isString(_module)) {
                    throw new Error(path + "module is not a string");
                }
            }
            if (target["enable"] != null && target["enable"] != undefined) {
                let _enable = target["enable"];
                if (!_.isBoolean(_enable)) {
                    throw new Error(path + "enable is not a boolean");
                }
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_module_validity.check(target, true, path).then(() => {
            return new Model_module_validity(target);
        });
    }
}
exports.Model_module_validity = Model_module_validity;
//# sourceMappingURL=Model_module_validity.js.map
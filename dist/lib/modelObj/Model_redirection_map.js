"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_redirection_map = void 0;
const _ = require("lodash");
const Index = require("./Index");
const utils_1 = require("utils");
/**
  redirection_map
*/
class Model_redirection_map extends utils_1.Base {
    /**
      redirection_map
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "redirection_map";
        if (obj["activation"] != undefined && obj["activation"] != null && _.isArray(obj["activation"])) {
            this["activation"] = obj["activation"].map((value) => {
                if (value._class) {
                    return new Index[value._class](value);
                }
                else {
                    return new Index["activation_map"](value);
                }
            });
        }
    }
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            if (target["activation"] != null && target["activation"] != undefined) {
                target["activation"].forEach((_activation, index) => {
                    promArr.push(Index["activation_map"].check(_activation, isCompleteObj, path + "activation.")
                        .catch((err) => {
                        throw new Error(path + "activation index: " + index + "is not activation_map");
                    }));
                    if (_activation._class != null && _activation._class != undefined) {
                        promArr.push(Index[_activation._class].check(_activation, isCompleteObj, path + "activation.")
                            .catch((err) => {
                            throw new Error(path + "activation index: " + index + "is not a " + _activation._class);
                        }));
                    }
                });
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_redirection_map.check(target, true, path).then(() => {
            return new Model_redirection_map(target);
        });
    }
}
exports.Model_redirection_map = Model_redirection_map;
//# sourceMappingURL=Model_redirection_map.js.map
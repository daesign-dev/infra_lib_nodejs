"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_module = void 0;
const utils_1 = require("utils");
/**
  Define a learning module like Math
*/
class Model_module extends utils_1.Base {
    /**
      Define a learning module like Math
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "module";
    }
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_module.check(target, true, path).then(() => {
            return new Model_module(target);
        });
    }
}
exports.Model_module = Model_module;
//# sourceMappingURL=Model_module.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Model_application_1 = require("./Model_application");
/**
  webapp
*/
class Model_webapp extends Model_application_1.Model_application {
    /**
      webapp
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "webapp";
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
        return Model_webapp.check(target, true, path).then(() => {
            return new Model_webapp(target);
        });
    }
}
exports.Model_webapp = Model_webapp;
//# sourceMappingURL=Model_webapp.js.map
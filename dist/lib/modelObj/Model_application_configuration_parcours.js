"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Model_application_configuration_1 = require("./Model_application_configuration");
/**
  application_configuration_parcours
*/
class Model_application_configuration_parcours extends Model_application_configuration_1.Model_application_configuration {
    /**
      application_configuration_parcours
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "application_configuration_parcours";
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
        return Model_application_configuration_parcours.check(target, true, path).then(() => {
            return new Model_application_configuration_parcours(target);
        });
    }
}
exports.Model_application_configuration_parcours = Model_application_configuration_parcours;
//# sourceMappingURL=Model_application_configuration_parcours.js.map
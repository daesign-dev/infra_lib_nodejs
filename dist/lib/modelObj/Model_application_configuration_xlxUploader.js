"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_application_configuration_xlxUploader = void 0;
const Model_application_configuration_1 = require("./Model_application_configuration");
/**
  application_configuration_xlxUploader
*/
class Model_application_configuration_xlxUploader extends Model_application_configuration_1.Model_application_configuration {
    /**
      application_configuration_xlxUploader
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "application_configuration_xlxUploader";
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
        return Model_application_configuration_xlxUploader.check(target, true, path).then(() => {
            return new Model_application_configuration_xlxUploader(target);
        });
    }
}
exports.Model_application_configuration_xlxUploader = Model_application_configuration_xlxUploader;
//# sourceMappingURL=Model_application_configuration_xlxUploader.js.map
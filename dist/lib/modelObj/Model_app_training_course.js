"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_app_training_course = void 0;
const Model_application_1 = require("./Model_application");
/**
  app_training_course
*/
class Model_app_training_course extends Model_application_1.Model_application {
    /**
      app_training_course
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "app_training_course";
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
        return Model_app_training_course.check(target, true, path).then(() => {
            return new Model_app_training_course(target);
        });
    }
}
exports.Model_app_training_course = Model_app_training_course;
//# sourceMappingURL=Model_app_training_course.js.map
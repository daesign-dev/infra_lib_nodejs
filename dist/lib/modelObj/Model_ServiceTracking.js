"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_ServiceTracking = void 0;
const _ = require("lodash");
const Model_service_1 = require("./Model_service");
/**
  Service to acces tracking for application
*/
class Model_ServiceTracking extends Model_service_1.Model_service {
    /**
      Service to acces tracking for application
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "ServiceTracking";
        if (obj["savvyDbUrl"] != undefined) {
            this["savvyDbUrl"] = obj["savvyDbUrl"].toString();
        }
        if (obj["savvyTrackingDbUrl"] != undefined) {
            this["savvyTrackingDbUrl"] = obj["savvyTrackingDbUrl"].toString();
        }
        if (obj["infraBdUrl"] != undefined) {
            this["infraBdUrl"] = obj["infraBdUrl"].toString();
        }
        if (obj["platformBdUrl"] != undefined) {
            this["platformBdUrl"] = obj["platformBdUrl"].toString();
        }
    }
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            if (target["savvyDbUrl"] != null && target["savvyDbUrl"] != undefined) {
                let _savvyDbUrl = target["savvyDbUrl"];
                if (!_.isString(_savvyDbUrl)) {
                    throw new Error(path + "savvyDbUrl is not a string");
                }
            }
            if (target["savvyTrackingDbUrl"] != null && target["savvyTrackingDbUrl"] != undefined) {
                let _savvyTrackingDbUrl = target["savvyTrackingDbUrl"];
                if (!_.isString(_savvyTrackingDbUrl)) {
                    throw new Error(path + "savvyTrackingDbUrl is not a string");
                }
            }
            if (target["infraBdUrl"] != null && target["infraBdUrl"] != undefined) {
                let _infraBdUrl = target["infraBdUrl"];
                if (!_.isString(_infraBdUrl)) {
                    throw new Error(path + "infraBdUrl is not a string");
                }
            }
            if (target["platformBdUrl"] != null && target["platformBdUrl"] != undefined) {
                let _platformBdUrl = target["platformBdUrl"];
                if (!_.isString(_platformBdUrl)) {
                    throw new Error(path + "platformBdUrl is not a string");
                }
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_ServiceTracking.check(target, true, path).then(() => {
            return new Model_ServiceTracking(target);
        });
    }
}
exports.Model_ServiceTracking = Model_ServiceTracking;
//# sourceMappingURL=Model_ServiceTracking.js.map
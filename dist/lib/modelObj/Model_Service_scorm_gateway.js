"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const Index = require("./Index");
const Model_service_1 = require("./Model_service");
/**
  service passerelle d'un package scorm vers l'interne
*/
class Model_Service_scorm_gateway extends Model_service_1.Model_service {
    /**
      service passerelle d'un package scorm vers l'interne
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "Service_scorm_gateway";
        if (obj["privateKey"] != undefined) {
            this["privateKey"] = obj["privateKey"].toString();
        }
        if (obj["endClientId"] != undefined) {
            if (_.isString(obj["endClientId"])) {
                this["endClientId"] = obj["endClientId"];
            }
            else if (obj["endClientId"]._id) {
                this["endClientId"] = obj["endClientId"]._id;
            }
        }
        if (obj["signinUrl"] != undefined) {
            this["signinUrl"] = obj["signinUrl"].toString();
        }
        if (obj["licenceUrl"] != undefined) {
            this["licenceUrl"] = obj["licenceUrl"].toString();
        }
        if (obj["templateUser"] != undefined) {
            if (obj._class) {
                this["templateUser"] = new Index[obj._class](obj["templateUser"]);
            }
            else {
                this["templateUser"] = new Index["object"](obj["templateUser"]);
            }
        }
        if (obj["templateProfileUser"] != undefined) {
            if (obj._class) {
                this["templateProfileUser"] = new Index[obj._class](obj["templateProfileUser"]);
            }
            else {
                this["templateProfileUser"] = new Index["object"](obj["templateProfileUser"]);
            }
        }
    }
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            if (isCompleteObj && (target["privateKey"] == null || target["privateKey"] == undefined)) {
                throw new Error(path + "privateKey is required");
            }
            if (target["privateKey"] != null && target["privateKey"] != undefined) {
                let _privateKey = target["privateKey"];
                if (!_.isString(_privateKey)) {
                    throw new Error(path + "privateKey is not a string");
                }
            }
            if (isCompleteObj && (target["endClientId"] == null || target["endClientId"] == undefined)) {
                throw new Error(path + "endClientId is required");
            }
            if (target["endClientId"] != null && target["endClientId"] != undefined) {
                let _endClientId = target["endClientId"];
                if (!_.isString(_endClientId)) {
                    throw new Error(path + "endClientId is not a string");
                }
            }
            if (isCompleteObj && (target["signinUrl"] == null || target["signinUrl"] == undefined)) {
                throw new Error(path + "signinUrl is required");
            }
            if (target["signinUrl"] != null && target["signinUrl"] != undefined) {
                let _signinUrl = target["signinUrl"];
                if (!_.isString(_signinUrl)) {
                    throw new Error(path + "signinUrl is not a string");
                }
            }
            if (isCompleteObj && (target["licenceUrl"] == null || target["licenceUrl"] == undefined)) {
                throw new Error(path + "licenceUrl is required");
            }
            if (target["licenceUrl"] != null && target["licenceUrl"] != undefined) {
                let _licenceUrl = target["licenceUrl"];
                if (!_.isString(_licenceUrl)) {
                    throw new Error(path + "licenceUrl is not a string");
                }
            }
            if (isCompleteObj && (target["templateUser"] == null || target["templateUser"] == undefined)) {
                throw new Error(path + "templateUser is required");
            }
            if (target["templateUser"] != null && target["templateUser"] != undefined) {
                let _templateUser = target["templateUser"];
                promArr.push(Index["object"].check(_templateUser, isCompleteObj, path + "templateUser.")
                    .catch((err) => {
                    throw new Error(path + "templateUser is not ");
                }));
                if (_templateUser._class != null && _templateUser._class != undefined) {
                    promArr.push(Index[_templateUser._class].check(_templateUser, isCompleteObj, path + "templateUser.")
                        .catch((err) => {
                        throw new Error(path + "templateUser is not a " + _templateUser._class);
                    }));
                }
            }
            if (isCompleteObj && (target["templateProfileUser"] == null || target["templateProfileUser"] == undefined)) {
                throw new Error(path + "templateProfileUser is required");
            }
            if (target["templateProfileUser"] != null && target["templateProfileUser"] != undefined) {
                let _templateProfileUser = target["templateProfileUser"];
                promArr.push(Index["object"].check(_templateProfileUser, isCompleteObj, path + "templateProfileUser.")
                    .catch((err) => {
                    throw new Error(path + "templateProfileUser is not ");
                }));
                if (_templateProfileUser._class != null && _templateProfileUser._class != undefined) {
                    promArr.push(Index[_templateProfileUser._class].check(_templateProfileUser, isCompleteObj, path + "templateProfileUser.")
                        .catch((err) => {
                        throw new Error(path + "templateProfileUser is not a " + _templateProfileUser._class);
                    }));
                }
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_Service_scorm_gateway.check(target, true, path).then(() => {
            return new Model_Service_scorm_gateway(target);
        });
    }
}
exports.Model_Service_scorm_gateway = Model_Service_scorm_gateway;
//# sourceMappingURL=Model_Service_scorm_gateway.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_service_gateway = void 0;
const _ = require("lodash");
const Model_service_1 = require("./Model_service");
/**
  service passerelle vers l'interne
*/
class Model_service_gateway extends Model_service_1.Model_service {
    /**
      service passerelle vers l'interne
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "service_gateway";
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
        if (obj["licenceServiceUrl"] != undefined) {
            this["licenceServiceUrl"] = obj["licenceServiceUrl"].toString();
        }
        if (obj["templateUser"] != undefined) {
            this["templateUser"] = obj["templateUser"];
        }
        if (obj["templateProfileUser"] != undefined) {
            this["templateProfileUser"] = obj["templateProfileUser"];
        }
        if (obj["apiUrl"] != undefined) {
            this["apiUrl"] = obj["apiUrl"].toString();
        }
        if (obj["licenceAdminId"] != undefined) {
            if (_.isString(obj["licenceAdminId"])) {
                this["licenceAdminId"] = obj["licenceAdminId"];
            }
            else if (obj["licenceAdminId"]._id) {
                this["licenceAdminId"] = obj["licenceAdminId"]._id;
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
            if (isCompleteObj && (target["licenceServiceUrl"] == null || target["licenceServiceUrl"] == undefined)) {
                throw new Error(path + "licenceServiceUrl is required");
            }
            if (target["licenceServiceUrl"] != null && target["licenceServiceUrl"] != undefined) {
                let _licenceServiceUrl = target["licenceServiceUrl"];
                if (!_.isString(_licenceServiceUrl)) {
                    throw new Error(path + "licenceServiceUrl is not a string");
                }
            }
            if (isCompleteObj && (target["templateUser"] == null || target["templateUser"] == undefined)) {
                throw new Error(path + "templateUser is required");
            }
            if (target["templateUser"] != null && target["templateUser"] != undefined) {
                // public "templateUser":Iobject;
            }
            if (isCompleteObj && (target["templateProfileUser"] == null || target["templateProfileUser"] == undefined)) {
                throw new Error(path + "templateProfileUser is required");
            }
            if (target["templateProfileUser"] != null && target["templateProfileUser"] != undefined) {
                // public "templateProfileUser":Iobject;
            }
            if (target["apiUrl"] != null && target["apiUrl"] != undefined) {
                let _apiUrl = target["apiUrl"];
                if (!_.isString(_apiUrl)) {
                    throw new Error(path + "apiUrl is not a string");
                }
            }
            if (target["licenceAdminId"] != null && target["licenceAdminId"] != undefined) {
                let _licenceAdminId = target["licenceAdminId"];
                if (!_.isString(_licenceAdminId)) {
                    throw new Error(path + "licenceAdminId is not a string");
                }
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_service_gateway.check(target, true, path).then(() => {
            return new Model_service_gateway(target);
        });
    }
}
exports.Model_service_gateway = Model_service_gateway;
//# sourceMappingURL=Model_service_gateway.js.map
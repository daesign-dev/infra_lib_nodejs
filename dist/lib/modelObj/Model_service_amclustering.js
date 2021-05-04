"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_service_amclustering = void 0;
const _ = require("lodash");
const Model_service_1 = require("./Model_service");
/**
  service passerelle pour le clustering
*/
class Model_service_amclustering extends Model_service_1.Model_service {
    /**
      service passerelle pour le clustering
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "service_amclustering";
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
        if (obj["clusteringUrl"] != undefined) {
            this["clusteringUrl"] = obj["clusteringUrl"].toString();
        }
        if (obj["bearer"] != undefined) {
            this["bearer"] = obj["bearer"].toString();
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
            if (target["clusteringUrl"] != null && target["clusteringUrl"] != undefined) {
                let _clusteringUrl = target["clusteringUrl"];
                if (!_.isString(_clusteringUrl)) {
                    throw new Error(path + "clusteringUrl is not a string");
                }
            }
            if (target["bearer"] != null && target["bearer"] != undefined) {
                let _bearer = target["bearer"];
                if (!_.isString(_bearer)) {
                    throw new Error(path + "bearer is not a string");
                }
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_service_amclustering.check(target, true, path).then(() => {
            return new Model_service_amclustering(target);
        });
    }
}
exports.Model_service_amclustering = Model_service_amclustering;
//# sourceMappingURL=Model_service_amclustering.js.map
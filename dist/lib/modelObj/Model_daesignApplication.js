"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const utils_1 = require("utils");
/**
  daesignApplication
*/
class Model_daesignApplication extends utils_1.Base {
    /**
      daesignApplication
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "daesignApplication";
        if (obj["id"] != undefined) {
            this["id"] = obj["id"].toString();
        }
        if (obj["name"] != undefined) {
            this["name"] = obj["name"].toString();
        }
        if (obj["domainToInstallOn"] != undefined) {
            this["domainToInstallOn"] = obj["domainToInstallOn"].toString();
        }
        if (obj["appInstanceNameSuffix"] != undefined) {
            this["appInstanceNameSuffix"] = obj["appInstanceNameSuffix"].toString();
        }
    }
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            if (isCompleteObj && (target["id"] == null || target["id"] == undefined)) {
                throw new Error(path + "id is required");
            }
            if (target["id"] != null && target["id"] != undefined) {
                let _id = target["id"];
                if (!_.isString(_id)) {
                    throw new Error(path + "id is not a string");
                }
            }
            if (target["name"] != null && target["name"] != undefined) {
                let _name = target["name"];
                if (!_.isString(_name)) {
                    throw new Error(path + "name is not a string");
                }
                let _enum_name = ["appClient", "appApprenant", "appCoach", "appDialogEditor", "appSavvyAuthor", "appSavvyAuthorAdmin"];
                if (_enum_name.indexOf(_name) == -1) {
                    throw new Error(path + "name dont match one of appClient , appApprenant , appCoach , appDialogEditor , appSavvyAuthor , appSavvyAuthorAdmin");
                }
            }
            if (target["domainToInstallOn"] != null && target["domainToInstallOn"] != undefined) {
                let _domainToInstallOn = target["domainToInstallOn"];
                if (!_.isString(_domainToInstallOn)) {
                    throw new Error(path + "domainToInstallOn is not a string");
                }
                let _enum_domainToInstallOn = [".daesign.com", ".savvy-author.com"];
                if (_enum_domainToInstallOn.indexOf(_domainToInstallOn) == -1) {
                    throw new Error(path + "domainToInstallOn dont match one of .daesign.com , .savvy-author.com");
                }
            }
            if (target["appInstanceNameSuffix"] != null && target["appInstanceNameSuffix"] != undefined) {
                let _appInstanceNameSuffix = target["appInstanceNameSuffix"];
                if (!_.isString(_appInstanceNameSuffix)) {
                    throw new Error(path + "appInstanceNameSuffix is not a string");
                }
                let _enum_appInstanceNameSuffix = ["-adminacademy", "-academy", "-mentoracademy", "-dialogeditor", "-savvyauthor", "-adminsavvyauthor"];
                if (_enum_appInstanceNameSuffix.indexOf(_appInstanceNameSuffix) == -1) {
                    throw new Error(path + "appInstanceNameSuffix dont match one of -adminacademy , -academy , -mentoracademy , -dialogeditor , -savvyauthor , -adminsavvyauthor");
                }
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_daesignApplication.check(target, true, path).then(() => {
            return new Model_daesignApplication(target);
        });
    }
}
exports.Model_daesignApplication = Model_daesignApplication;
//# sourceMappingURL=Model_daesignApplication.js.map
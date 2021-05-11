"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_MultilangSendGridTemplate = void 0;
const _ = require("lodash");
const Index = require("./Index");
const utils_1 = require("utils");
/**
  décrit un template multi langue d'envoie de mail avec sendGrid
*/
class Model_MultilangSendGridTemplate extends utils_1.Base {
    /**
      décrit un template multi langue d'envoie de mail avec sendGrid
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "MultilangSendGridTemplate";
        if (obj["name"] != undefined) {
            this["name"] = obj["name"].toString();
        }
        if (obj["type"] != undefined) {
            this["type"] = obj["type"].toString();
        }
        if (obj["sendGridTemplates"] != undefined && obj["sendGridTemplates"] != null && _.isArray(obj["sendGridTemplates"])) {
            this["sendGridTemplates"] = obj["sendGridTemplates"].map((value) => {
                if (value._class) {
                    return new Index[value._class](value);
                }
                else {
                    return new Index["sendGridTemplate"](value);
                }
            });
        }
    }
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            if (isCompleteObj && (target["name"] == null || target["name"] == undefined)) {
                throw new Error(path + "name is required");
            }
            if (target["name"] != null && target["name"] != undefined) {
                let _name = target["name"];
                if (!_.isString(_name)) {
                    throw new Error(path + "name is not a string");
                }
            }
            if (target["type"] != null && target["type"] != undefined) {
                let _type = target["type"];
                if (!_.isString(_type)) {
                    throw new Error(path + "type is not a string");
                }
                let _enum_type = ["_TRAININGCOURSE_INVITATION_", "_TRAININGCOURSE_UNSTARTED_", "_TRAININGCOURSE_INACTIVITY_", "_TRAININGCOURSE_COMPLETE_", "_TRAININGCOURSE_SUCCEED_", "_TRAININGCOURSE_UNSUCCEED_", "_TRAININGSESSION_ENDED_", "_SAVVYLEARNER_INVITATION_"];
                if (_enum_type.indexOf(_type) == -1) {
                    throw new Error(path + "type dont match one of _TRAININGCOURSE_INVITATION_ , _TRAININGCOURSE_UNSTARTED_ , _TRAININGCOURSE_INACTIVITY_ , _TRAININGCOURSE_COMPLETE_ , _TRAININGCOURSE_SUCCEED_ , _TRAININGCOURSE_UNSUCCEED_ , _TRAININGSESSION_ENDED_ , _SAVVYLEARNER_INVITATION_");
                }
            }
            if (target["sendGridTemplates"] != null && target["sendGridTemplates"] != undefined) {
                target["sendGridTemplates"].forEach((_sendGridTemplates, index) => {
                    promArr.push(Index["sendGridTemplate"].check(_sendGridTemplates, isCompleteObj, path + "sendGridTemplates.")
                        .catch((err) => {
                        throw new Error(path + "sendGridTemplates index: " + index + "is not sendGridTemplate");
                    }));
                    if (_sendGridTemplates._class != null && _sendGridTemplates._class != undefined) {
                        promArr.push(Index[_sendGridTemplates._class].check(_sendGridTemplates, isCompleteObj, path + "sendGridTemplates.")
                            .catch((err) => {
                            throw new Error(path + "sendGridTemplates index: " + index + "is not a " + _sendGridTemplates._class);
                        }));
                    }
                });
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_MultilangSendGridTemplate.check(target, true, path).then(() => {
            return new Model_MultilangSendGridTemplate(target);
        });
    }
}
exports.Model_MultilangSendGridTemplate = Model_MultilangSendGridTemplate;
//# sourceMappingURL=Model_MultilangSendGridTemplate.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_TrainingCourses = void 0;
const _ = require("lodash");
const utils_1 = require("utils");
/**
  parcours que Daesign a créé et qu’il peuvent mettre à disposition de leurs clients
*/
class Model_TrainingCourses extends utils_1.Base {
    /**
      parcours que Daesign a créé et qu’il peuvent mettre à disposition de leurs clients
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "TrainingCourses";
        if (obj["Tag"] != undefined) {
            this["Tag"] = obj["Tag"].toString();
        }
        if (obj["lang"] != undefined) {
            if (_.isString(obj["lang"])) {
                this["lang"] = obj["lang"];
            }
            else if (obj["lang"]._id) {
                this["lang"] = obj["lang"]._id;
            }
        }
        if (obj["title"] != undefined) {
            if (_.isString(obj["title"])) {
                this["title"] = obj["title"];
            }
            else if (obj["title"]._id) {
                this["title"] = obj["title"]._id;
            }
        }
        if (obj["description"] != undefined && obj["description"] != null && _.isArray(obj["description"])) {
            this["description"] = obj["description"].map((value) => {
                if (_.isString(value)) {
                    return value;
                }
                else if (value._id) {
                    return value._id;
                }
            });
        }
        if (obj["helpInfo"] != undefined) {
            if (_.isString(obj["helpInfo"])) {
                this["helpInfo"] = obj["helpInfo"];
            }
            else if (obj["helpInfo"]._id) {
                this["helpInfo"] = obj["helpInfo"]._id;
            }
        }
        if (obj["texts"] != undefined && obj["texts"] != null && _.isArray(obj["texts"])) {
            this["texts"] = obj["texts"].map((value) => {
                if (_.isString(value)) {
                    return value;
                }
                else if (value._id) {
                    return value._id;
                }
            });
        }
        if (obj["Scoring"] != undefined) {
            this["Scoring"] = new Boolean(obj["Scoring"]).valueOf();
        }
        if (obj["competencies"] != undefined && obj["competencies"] != null && _.isArray(obj["competencies"])) {
            this["competencies"] = obj["competencies"].map((value) => {
                return value.toString();
            });
        }
        if (obj["SubTrainingCourses"] != undefined && obj["SubTrainingCourses"] != null && _.isArray(obj["SubTrainingCourses"])) {
            this["SubTrainingCourses"] = obj["SubTrainingCourses"].map((value) => {
                if (_.isString(value)) {
                    return value;
                }
                else if (value._id) {
                    return value._id;
                }
            });
        }
        if (obj["Contents"] != undefined && obj["Contents"] != null && _.isArray(obj["Contents"])) {
            this["Contents"] = obj["Contents"].map((value) => {
                if (_.isString(value)) {
                    return value;
                }
                else if (value._id) {
                    return value._id;
                }
            });
        }
        if (obj["isSubtraining"] != undefined) {
            this["isSubtraining"] = new Boolean(obj["isSubtraining"]).valueOf();
        }
        if (obj["frname"] != undefined) {
            this["frname"] = obj["frname"].toString();
        }
        if (obj["frdescription"] != undefined) {
            this["frdescription"] = obj["frdescription"].toString();
        }
        if (obj["frduration"] != undefined) {
            this["frduration"] = obj["frduration"].toString();
        }
    }
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            if (isCompleteObj && (target["Tag"] == null || target["Tag"] == undefined)) {
                throw new Error(path + "Tag is required");
            }
            if (target["Tag"] != null && target["Tag"] != undefined) {
                let _Tag = target["Tag"];
                if (!_.isString(_Tag)) {
                    throw new Error(path + "Tag is not a string");
                }
            }
            if (target["lang"] != null && target["lang"] != undefined) {
                let _lang = target["lang"];
                if (!_.isString(_lang)) {
                    throw new Error(path + "lang is not a string");
                }
            }
            if (target["title"] != null && target["title"] != undefined) {
                let _title = target["title"];
                if (!_.isString(_title)) {
                    throw new Error(path + "title is not a string");
                }
            }
            if (target["description"] != null && target["description"] != undefined) {
                target["description"].forEach((_description, index) => {
                    if (!_.isString(_description)) {
                        throw new Error(path + "description is not a string");
                    }
                });
            }
            if (target["helpInfo"] != null && target["helpInfo"] != undefined) {
                let _helpInfo = target["helpInfo"];
                if (!_.isString(_helpInfo)) {
                    throw new Error(path + "helpInfo is not a string");
                }
            }
            if (target["texts"] != null && target["texts"] != undefined) {
                target["texts"].forEach((_texts, index) => {
                    if (!_.isString(_texts)) {
                        throw new Error(path + "texts is not a string");
                    }
                });
            }
            if (target["Scoring"] != null && target["Scoring"] != undefined) {
                let _Scoring = target["Scoring"];
                if (!_.isBoolean(_Scoring)) {
                    throw new Error(path + "Scoring is not a boolean");
                }
            }
            if (target["competencies"] != null && target["competencies"] != undefined) {
                target["competencies"].forEach((_competencies, index) => {
                    if (!_.isString(_competencies)) {
                        throw new Error(path + "competencies index: " + index + "is not a string");
                    }
                });
            }
            if (target["SubTrainingCourses"] != null && target["SubTrainingCourses"] != undefined) {
                target["SubTrainingCourses"].forEach((_SubTrainingCourses, index) => {
                    if (!_.isString(_SubTrainingCourses)) {
                        throw new Error(path + "SubTrainingCourses is not a string");
                    }
                });
            }
            if (target["Contents"] != null && target["Contents"] != undefined) {
                target["Contents"].forEach((_Contents, index) => {
                    if (!_.isString(_Contents)) {
                        throw new Error(path + "Contents is not a string");
                    }
                });
            }
            if (isCompleteObj && (target["isSubtraining"] == null || target["isSubtraining"] == undefined)) {
                throw new Error(path + "isSubtraining is required");
            }
            if (target["isSubtraining"] != null && target["isSubtraining"] != undefined) {
                let _isSubtraining = target["isSubtraining"];
                if (!_.isBoolean(_isSubtraining)) {
                    throw new Error(path + "isSubtraining is not a boolean");
                }
            }
            if (target["frname"] != null && target["frname"] != undefined) {
                let _frname = target["frname"];
                if (!_.isString(_frname)) {
                    throw new Error(path + "frname is not a string");
                }
            }
            if (target["frdescription"] != null && target["frdescription"] != undefined) {
                let _frdescription = target["frdescription"];
                if (!_.isString(_frdescription)) {
                    throw new Error(path + "frdescription is not a string");
                }
            }
            if (target["frduration"] != null && target["frduration"] != undefined) {
                let _frduration = target["frduration"];
                if (!_.isString(_frduration)) {
                    throw new Error(path + "frduration is not a string");
                }
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_TrainingCourses.check(target, true, path).then(() => {
            return new Model_TrainingCourses(target);
        });
    }
}
exports.Model_TrainingCourses = Model_TrainingCourses;
//# sourceMappingURL=Model_TrainingCourses.js.map
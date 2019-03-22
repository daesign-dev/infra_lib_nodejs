"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const Index = require("./Index");
const utils_1 = require("utils");
/**
  Définit un texte multilingue
*/
class Model_multilingual_text extends utils_1.Base {
    /**
      Définit un texte multilingue
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "multilingual_text";
        if (obj["name"] != undefined) {
            this["name"] = obj["name"].toString();
        }
        if (obj["description"] != undefined) {
            this["description"] = obj["description"].toString();
        }
        if (obj["texts"] != undefined && obj["texts"] != null && _.isArray(obj["texts"])) {
            this["texts"] = obj["texts"].map((value) => {
                if (value._class) {
                    return new Index[value._class](value);
                }
                else {
                    return new Index["monolingual_text"](value);
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
            if (target["description"] != null && target["description"] != undefined) {
                let _description = target["description"];
                if (!_.isString(_description)) {
                    throw new Error(path + "description is not a string");
                }
            }
            if (target["texts"] != null && target["texts"] != undefined) {
                target["texts"].forEach((_texts, index) => {
                    promArr.push(Index["monolingual_text"].check(_texts, isCompleteObj, path + "texts.")
                        .catch((err) => {
                        throw new Error(path + "texts index: " + index + "is not monolingual_text");
                    }));
                    if (_texts._class != null && _texts._class != undefined) {
                        promArr.push(Index[_texts._class].check(_texts, isCompleteObj, path + "texts.")
                            .catch((err) => {
                            throw new Error(path + "texts index: " + index + "is not a " + _texts._class);
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
        return Model_multilingual_text.check(target, true, path).then(() => {
            return new Model_multilingual_text(target);
        });
    }
}
exports.Model_multilingual_text = Model_multilingual_text;
//# sourceMappingURL=Model_multilingual_text.js.map
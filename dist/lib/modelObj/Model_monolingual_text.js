"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const utils_1 = require("utils");
/**
  Définit un texte dans une langue
*/
class Model_monolingual_text extends utils_1.Base {
    /**
      Définit un texte dans une langue
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "monolingual_text";
        if (obj["lang"] != undefined) {
            if (_.isString(obj["lang"])) {
                this["lang"] = obj["lang"];
            }
            else if (obj["lang"]._id) {
                this["lang"] = obj["lang"]._id;
            }
        }
        if (obj["texte"] != undefined) {
            this["texte"] = obj["texte"].toString();
        }
    }
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            if (target["lang"] != null && target["lang"] != undefined) {
                let _lang = target["lang"];
                if (!_.isString(_lang)) {
                    throw new Error(path + "lang is not a string");
                }
            }
            if (target["texte"] != null && target["texte"] != undefined) {
                let _texte = target["texte"];
                if (!_.isString(_texte)) {
                    throw new Error(path + "texte is not a string");
                }
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_monolingual_text.check(target, true, path).then(() => {
            return new Model_monolingual_text(target);
        });
    }
}
exports.Model_monolingual_text = Model_monolingual_text;
//# sourceMappingURL=Model_monolingual_text.js.map
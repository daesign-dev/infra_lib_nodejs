import * as Interface from "./Interfaces";
import { Base } from "utils";
/**
  parcours que Daesign a créé et qu’il peuvent mettre à disposition de leurs clients
*/
export declare class Model_TrainingCourses extends Base implements Interface.ITrainingCourses {
    /**
      parcours que Daesign a créé et qu’il peuvent mettre à disposition de leurs clients
    */
    constructor(obj?: any);
    _class: string;
    /**
Tag of TrainingCourse
*/
    "Tag": string;
    /**
lang of training course
*/
    "lang"?: string;
    /**
Multinlingual tilte
*/
    "title"?: string;
    /**
Multilingual Description
*/
    "description"?: string[];
    /**
Multilingual Help for this trainingcourse
*/
    "helpInfo"?: string;
    /**
Multilingual Texts
*/
    "texts"?: string[];
    /**
Training has a scoring
*/
    "Scoring"?: boolean;
    /**
TrainingCourse competencies
*/
    "competencies"?: string[];
    /**
sub training courses
*/
    "SubTrainingCourses"?: string[];
    /**
contents for this training course
*/
    "Contents"?: string[];
    /**
training is a subtraining
*/
    "isSubtraining": boolean;
    /**
frname
*/
    "frname"?: string;
    /**
frdescription
*/
    "frdescription"?: string;
    /**
frduration
*/
    "frduration"?: string;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_TrainingCourses>;
}

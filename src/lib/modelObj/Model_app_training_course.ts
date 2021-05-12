import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;


import {Model_application } from "./Model_application"


/**
  app_training_course
*/
export class Model_app_training_course extends   Model_application   implements Interface.Iapp_training_course {

/**
  app_training_course
*/
  constructor(obj:any={}){
    super(obj);
    
  }
  

    public _class:string  = "app_training_course" ;

        


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_app_training_course>{
        return Model_app_training_course.check(target, true, path).then(()=>{
          return new Model_app_training_course(target) ;
        })
      }

   }

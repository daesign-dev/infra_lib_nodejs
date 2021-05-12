import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;


import {Model_application } from "./Model_application"


/**
  webapp
*/
export class Model_webapp extends   Model_application   implements Interface.Iwebapp {

/**
  webapp
*/
  constructor(obj:any={}){
    super(obj);
    
  }
  

    public _class:string  = "webapp" ;

        


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_webapp>{
        return Model_webapp.check(target, true, path).then(()=>{
          return new Model_webapp(target) ;
        })
      }

   }

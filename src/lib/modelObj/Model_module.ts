import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;



/**
  Define a learning module like Math
*/
export class Model_module extends  Base  implements Interface.Imodule {

/**
  Define a learning module like Math
*/
  constructor(obj:any={}){
    super(obj);
    
  }
  

    public _class:string  = "module" ;

        


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_module>{
        return Model_module.check(target, true, path).then(()=>{
          return new Model_module(target) ;
        })
      }

   }

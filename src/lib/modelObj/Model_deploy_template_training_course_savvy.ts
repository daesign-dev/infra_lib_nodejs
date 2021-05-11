import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;


import {Model_deploy_template } from "./Model_deploy_template"


/**
  Deploy template for SAVVY training courses
*/
export class Model_deploy_template_training_course_savvy extends   Model_deploy_template   implements Interface.Ideploy_template_training_course_savvy {

/**
  Deploy template for SAVVY training courses
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["application_instance"] != undefined){
          
          if(_.isString(obj["application_instance"])){
            this["application_instance"] = obj["application_instance"];
          }else if(obj["application_instance"]._id){
            this["application_instance"] = obj["application_instance"]._id ;
          }
          
        }
        
    
  }
  

    public _class:string  = "deploy_template_training_course_savvy" ;

        
              /**
        Application instance
        */
               public "application_instance"?:string ;
              
       


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
              
              if(target["application_instance"] != null && target["application_instance"] != undefined ){
              
                  let _application_instance  = target["application_instance"] ;
                  
                  if( ! _.isString(_application_instance)){
                   throw new Error(path + "application_instance is not a string") ;
                  }
                  

              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_deploy_template_training_course_savvy>{
        return Model_deploy_template_training_course_savvy.check(target, true, path).then(()=>{
          return new Model_deploy_template_training_course_savvy(target) ;
        })
      }

   }

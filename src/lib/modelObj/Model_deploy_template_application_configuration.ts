import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;


import {Model_deploy_template } from "./Model_deploy_template"


/**
  Template used by deploy service - application configuration specific
*/
export class Model_deploy_template_application_configuration extends   Model_deploy_template   implements Interface.Ideploy_template_application_configuration {

/**
  Template used by deploy service - application configuration specific
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["application_id"] != undefined){
          
          if(_.isString(obj["application_id"])){
            this["application_id"] = obj["application_id"];
          }else if(obj["application_id"]._id){
            this["application_id"] = obj["application_id"]._id ;
          }
          
        }
        
    
  }
  

    public _class:string  = "deploy_template_application_configuration" ;

        
              /**
        Application id
        */
               public "application_id"?:string ;
              
       


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
              
              if(target["application_id"] != null && target["application_id"] != undefined ){
              
                  let _application_id  = target["application_id"] ;
                  
                  if( ! _.isString(_application_id)){
                   throw new Error(path + "application_id is not a string") ;
                  }
                  

              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_deploy_template_application_configuration>{
        return Model_deploy_template_application_configuration.check(target, true, path).then(()=>{
          return new Model_deploy_template_application_configuration(target) ;
        })
      }

   }

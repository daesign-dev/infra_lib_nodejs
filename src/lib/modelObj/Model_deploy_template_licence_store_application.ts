import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;


import {Model_deploy_template } from "./Model_deploy_template"


/**
  Template used by deploy service - application licence store specific
*/
export class Model_deploy_template_licence_store_application extends   Model_deploy_template   implements Interface.Ideploy_template_licence_store_application {

/**
  Template used by deploy service - application licence store specific
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["application"] != undefined){
          
          if(_.isString(obj["application"])){
            this["application"] = obj["application"];
          }else if(obj["application"]._id){
            this["application"] = obj["application"]._id ;
          }
          
        }
        
    
  }
  

    public _class:string  = "deploy_template_licence_store_application" ;

        
              /**
        Application
        */
               public "application"?:string ;
              
       


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
              
              if(target["application"] != null && target["application"] != undefined ){
              
                  let _application  = target["application"] ;
                  
                  if( ! _.isString(_application)){
                   throw new Error(path + "application is not a string") ;
                  }
                  

              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_deploy_template_licence_store_application>{
        return Model_deploy_template_licence_store_application.check(target, true, path).then(()=>{
          return new Model_deploy_template_licence_store_application(target) ;
        })
      }

   }

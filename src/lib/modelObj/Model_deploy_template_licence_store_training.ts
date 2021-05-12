import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;


import {Model_deploy_template } from "./Model_deploy_template"


/**
   Template used by deploy service - training licence store specific
*/
export class Model_deploy_template_licence_store_training extends   Model_deploy_template   implements Interface.Ideploy_template_licence_store_training {

/**
   Template used by deploy service - training licence store specific
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
        
    
        
        if(obj["lang"] != undefined){
          
          if(_.isString(obj["lang"])){
            this["lang"] = obj["lang"];
          }else if(obj["lang"]._id){
            this["lang"] = obj["lang"]._id ;
          }
          
        }
        
    
  }
  

    public _class:string  = "deploy_template_licence_store_training" ;

        
              /**
        Application instance
        */
               public "application_instance"?:string ;
              
       
              /**
        Langage
        */
               public "lang"?:string ;
              
       


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
           
              
              if(target["lang"] != null && target["lang"] != undefined ){
              
                  let _lang  = target["lang"] ;
                  
                  if( ! _.isString(_lang)){
                   throw new Error(path + "lang is not a string") ;
                  }
                  

              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_deploy_template_licence_store_training>{
        return Model_deploy_template_licence_store_training.check(target, true, path).then(()=>{
          return new Model_deploy_template_licence_store_training(target) ;
        })
      }

   }

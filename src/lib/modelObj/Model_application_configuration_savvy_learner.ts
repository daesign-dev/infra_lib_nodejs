import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;


import {Model_application_configuration_appApprenant } from "./Model_application_configuration_appApprenant"


/**
  configuration de l'application Savvy Learner
*/
export class Model_application_configuration_savvy_learner extends   Model_application_configuration_appApprenant   implements Interface.Iapplication_configuration_savvy_learner {

/**
  configuration de l'application Savvy Learner
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["savvyDbUrl"] != undefined){
          
           this["savvyDbUrl"] = obj["savvyDbUrl"].toString() ;
           
        }
        
    
        
        if(obj["savvyAuthorId"] != undefined){
          
          if(_.isString(obj["savvyAuthorId"])){
            this["savvyAuthorId"] = obj["savvyAuthorId"];
          }else if(obj["savvyAuthorId"]._id){
            this["savvyAuthorId"] = obj["savvyAuthorId"]._id ;
          }
          
        }
        
    
        
        if(obj["savvyAuthorSUId"] != undefined){
          
          if(_.isString(obj["savvyAuthorSUId"])){
            this["savvyAuthorSUId"] = obj["savvyAuthorSUId"];
          }else if(obj["savvyAuthorSUId"]._id){
            this["savvyAuthorSUId"] = obj["savvyAuthorSUId"]._id ;
          }
          
        }
        
    
        
        if(obj["savvyAuthorIdList"] != undefined && obj["savvyAuthorIdList"] != null && _.isArray(obj["savvyAuthorIdList"])){
          
          this["savvyAuthorIdList"] = obj["savvyAuthorIdList"].map((value)=>{
            if(_.isString(value)){
              return value ;
            }else if(value._id){
              return value._id ;
            }
          })
          
          
        }
        
    
  }
  

    public _class:string  = "application_configuration_savvy_learner" ;

        
              /**
        URL de la BD de Savvy
        */
               public "savvyDbUrl"?:string ;
              
       
              /**
        Reference vers l'application savvy author
        */
               public "savvyAuthorId"?:string ;
              
       
              /**
        Reference vers l'application savvy author - Super admin
        */
               public "savvyAuthorSUId"?:string ;
              
       
              /**
        List of Savvy Author application instance for author detection
        */
               public "savvyAuthorIdList"?:string[] ;
              
       


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
              
              if(target["savvyDbUrl"] != null && target["savvyDbUrl"] != undefined ){
              
                let _savvyDbUrl  = target["savvyDbUrl"] ;
                

                 if(! _.isString(_savvyDbUrl)){
                    throw new Error(path+"savvyDbUrl is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["savvyAuthorId"] != null && target["savvyAuthorId"] != undefined ){
              
                  let _savvyAuthorId  = target["savvyAuthorId"] ;
                  
                  if( ! _.isString(_savvyAuthorId)){
                   throw new Error(path + "savvyAuthorId is not a string") ;
                  }
                  

              
              
           }
           
              
              if(target["savvyAuthorSUId"] != null && target["savvyAuthorSUId"] != undefined ){
              
                  let _savvyAuthorSUId  = target["savvyAuthorSUId"] ;
                  
                  if( ! _.isString(_savvyAuthorSUId)){
                   throw new Error(path + "savvyAuthorSUId is not a string") ;
                  }
                  

              
              
           }
           
              
              if(target["savvyAuthorIdList"] != null && target["savvyAuthorIdList"] != undefined ){
              
                  target["savvyAuthorIdList"].forEach((_savvyAuthorIdList , index:number)=>{
                  
                  if( ! _.isString(_savvyAuthorIdList)){
                   throw new Error(path + "savvyAuthorIdList is not a string") ;
                  }
                  });

              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_application_configuration_savvy_learner>{
        return Model_application_configuration_savvy_learner.check(target, true, path).then(()=>{
          return new Model_application_configuration_savvy_learner(target) ;
        })
      }

   }

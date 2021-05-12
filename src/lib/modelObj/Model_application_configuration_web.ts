import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;


import {Model_application_configuration } from "./Model_application_configuration"


/**
  Application configuration for web applications
*/
export class Model_application_configuration_web extends   Model_application_configuration   implements Interface.Iapplication_configuration_web {

/**
  Application configuration for web applications
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["appUrl"] != undefined){
          
           this["appUrl"] = obj["appUrl"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "application_configuration_web" ;

        
              /**
        The web application url
        */
               public "appUrl":string ;
              
       


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
              
              if( isCompleteObj && (target["appUrl"] == null || target["appUrl"] == undefined) ){
                  throw new Error(path + "appUrl is required") ;
              }
              
              if(target["appUrl"] != null && target["appUrl"] != undefined ){
              
                let _appUrl  = target["appUrl"] ;
                

                 if(! _.isString(_appUrl)){
                    throw new Error(path+"appUrl is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_application_configuration_web>{
        return Model_application_configuration_web.check(target, true, path).then(()=>{
          return new Model_application_configuration_web(target) ;
        })
      }

   }

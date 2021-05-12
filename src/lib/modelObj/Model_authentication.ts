import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;


import {Model_service } from "./Model_service"


/**
  service d'enregistrement
*/
export class Model_authentication extends   Model_service   implements Interface.Iauthentication {

/**
  service d'enregistrement
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["mailInfoUrl"] != undefined){
          
           this["mailInfoUrl"] = obj["mailInfoUrl"].toString() ;
           
        }
        
    
        
        if(obj["mailAccountCreatedUrl"] != undefined){
          
           this["mailAccountCreatedUrl"] = obj["mailAccountCreatedUrl"].toString() ;
           
        }
        
    
        
        if(obj["durationResetDay"] != undefined){
          
           this["durationResetDay"] = new Number(obj["durationResetDay"]).valueOf();
          
        }
        
    
        
        if(obj["ssoBdUrl"] != undefined){
          
           this["ssoBdUrl"] = obj["ssoBdUrl"].toString() ;
           
        }
        
    
        
        if(obj["infraBdUrl"] != undefined){
          
           this["infraBdUrl"] = obj["infraBdUrl"].toString() ;
           
        }
        
    
        
        if(obj["platformBdUrl"] != undefined){
          
           this["platformBdUrl"] = obj["platformBdUrl"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "authentication" ;

        
              /**
        mailInfoUrl
        */
               public "mailInfoUrl":string ;
              
       
              /**
        mailAccountCreatedUrl
        */
               public "mailAccountCreatedUrl":string ;
              
       
              /**
        nombre de jour de validité d'une demande de reset de password
        */
               public "durationResetDay":number ;
              
       
              /**
        SSO DB URL
        */
               public "ssoBdUrl":string ;
              
       
              /**
        INFRA DB URL
        */
               public "infraBdUrl":string ;
              
       
              /**
        FRONT APPS DB URL
        */
               public "platformBdUrl":string ;
              
       


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
              
              if( isCompleteObj && (target["mailInfoUrl"] == null || target["mailInfoUrl"] == undefined) ){
                  throw new Error(path + "mailInfoUrl is required") ;
              }
              
              if(target["mailInfoUrl"] != null && target["mailInfoUrl"] != undefined ){
              
                let _mailInfoUrl  = target["mailInfoUrl"] ;
                

                 if(! _.isString(_mailInfoUrl)){
                    throw new Error(path+"mailInfoUrl is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if( isCompleteObj && (target["mailAccountCreatedUrl"] == null || target["mailAccountCreatedUrl"] == undefined) ){
                  throw new Error(path + "mailAccountCreatedUrl is required") ;
              }
              
              if(target["mailAccountCreatedUrl"] != null && target["mailAccountCreatedUrl"] != undefined ){
              
                let _mailAccountCreatedUrl  = target["mailAccountCreatedUrl"] ;
                

                 if(! _.isString(_mailAccountCreatedUrl)){
                    throw new Error(path+"mailAccountCreatedUrl is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if( isCompleteObj && (target["durationResetDay"] == null || target["durationResetDay"] == undefined) ){
                  throw new Error(path + "durationResetDay is required") ;
              }
              
              if(target["durationResetDay"] != null && target["durationResetDay"] != undefined ){
              
                let _durationResetDay  = target["durationResetDay"] ;
                
                  if(! _.isNumber(_durationResetDay)){
                      throw new Error(path+"durationResetDay is not a number") ;
                      
                  }
                  
                
                
                  if(_durationResetDay % 1 > 0){
                    throw new Error(path+"durationResetDay must be have a step of 1" ) ;
                    
                  }
                

                
              
              
           }
           
              
              if( isCompleteObj && (target["ssoBdUrl"] == null || target["ssoBdUrl"] == undefined) ){
                  throw new Error(path + "ssoBdUrl is required") ;
              }
              
              if(target["ssoBdUrl"] != null && target["ssoBdUrl"] != undefined ){
              
                let _ssoBdUrl  = target["ssoBdUrl"] ;
                

                 if(! _.isString(_ssoBdUrl)){
                    throw new Error(path+"ssoBdUrl is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if( isCompleteObj && (target["infraBdUrl"] == null || target["infraBdUrl"] == undefined) ){
                  throw new Error(path + "infraBdUrl is required") ;
              }
              
              if(target["infraBdUrl"] != null && target["infraBdUrl"] != undefined ){
              
                let _infraBdUrl  = target["infraBdUrl"] ;
                

                 if(! _.isString(_infraBdUrl)){
                    throw new Error(path+"infraBdUrl is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if( isCompleteObj && (target["platformBdUrl"] == null || target["platformBdUrl"] == undefined) ){
                  throw new Error(path + "platformBdUrl is required") ;
              }
              
              if(target["platformBdUrl"] != null && target["platformBdUrl"] != undefined ){
              
                let _platformBdUrl  = target["platformBdUrl"] ;
                

                 if(! _.isString(_platformBdUrl)){
                    throw new Error(path+"platformBdUrl is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_authentication>{
        return Model_authentication.check(target, true, path).then(()=>{
          return new Model_authentication(target) ;
        })
      }

   }

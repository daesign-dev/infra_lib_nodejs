import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;


import {Model_service } from "./Model_service"


/**
  Service d'exemple
*/
export class Model_service_hello extends   Model_service   implements Interface.Iservice_hello {

/**
  Service d'exemple
*/
  constructor(obj:any={}){
    super(obj);
    
        
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
  

    public _class:string  = "service_hello" ;

        
              /**
        ssoBdUrl
        */
               public "ssoBdUrl":string ;
              
       
              /**
        infraBdUrl
        */
               public "infraBdUrl":string ;
              
       
              /**
        platformBdUrl
        */
               public "platformBdUrl":string ;
              
       


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
              
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

      public static create(target:any, path:string=""):Promise<Model_service_hello>{
        return Model_service_hello.check(target, true, path).then(()=>{
          return new Model_service_hello(target) ;
        })
      }

   }

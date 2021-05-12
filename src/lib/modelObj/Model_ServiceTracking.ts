import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;


import {Model_service } from "./Model_service"


/**
  Service to acces tracking for application
*/
export class Model_ServiceTracking extends   Model_service   implements Interface.IServiceTracking {

/**
  Service to acces tracking for application
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["savvyDbUrl"] != undefined){
          
           this["savvyDbUrl"] = obj["savvyDbUrl"].toString() ;
           
        }
        
    
        
        if(obj["savvyTrackingDbUrl"] != undefined){
          
           this["savvyTrackingDbUrl"] = obj["savvyTrackingDbUrl"].toString() ;
           
        }
        
    
        
        if(obj["infraBdUrl"] != undefined){
          
           this["infraBdUrl"] = obj["infraBdUrl"].toString() ;
           
        }
        
    
        
        if(obj["platformBdUrl"] != undefined){
          
           this["platformBdUrl"] = obj["platformBdUrl"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "ServiceTracking" ;

        
              /**
        URL to the Savvy database
        */
               public "savvyDbUrl"?:string ;
              
       
              /**
        URL to the Savvy tracking database
        */
               public "savvyTrackingDbUrl"?:string ;
              
       
              /**
        infraBdUrl
        */
               public "infraBdUrl"?:string ;
              
       
              /**
        platformBdUrl
        */
               public "platformBdUrl"?:string ;
              
       


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
           
              
              if(target["savvyTrackingDbUrl"] != null && target["savvyTrackingDbUrl"] != undefined ){
              
                let _savvyTrackingDbUrl  = target["savvyTrackingDbUrl"] ;
                

                 if(! _.isString(_savvyTrackingDbUrl)){
                    throw new Error(path+"savvyTrackingDbUrl is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["infraBdUrl"] != null && target["infraBdUrl"] != undefined ){
              
                let _infraBdUrl  = target["infraBdUrl"] ;
                

                 if(! _.isString(_infraBdUrl)){
                    throw new Error(path+"infraBdUrl is not a string") ;
                    
                  }
                  
                  
                 
              
              
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

      public static create(target:any, path:string=""):Promise<Model_ServiceTracking>{
        return Model_ServiceTracking.check(target, true, path).then(()=>{
          return new Model_ServiceTracking(target) ;
        })
      }

   }

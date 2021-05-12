import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;



/**
  log collection for template backend service
*/
export class Model_hello extends  Base  implements Interface.Ihello {

/**
  log collection for template backend service
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["category"] != undefined){
          
           this["category"] = obj["category"].toString() ;
           
        }
        
    
        
        if(obj["message"] != undefined){
          
           this["message"] = obj["message"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "hello" ;

        
              /**
        The category
        */
               public "category":string ;
              
       
              /**
        The message
        */
               public "message":string ;
              
       


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
              
              if( isCompleteObj && (target["category"] == null || target["category"] == undefined) ){
                  throw new Error(path + "category is required") ;
              }
              
              if(target["category"] != null && target["category"] != undefined ){
              
                let _category  = target["category"] ;
                

                 if(! _.isString(_category)){
                    throw new Error(path+"category is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if( isCompleteObj && (target["message"] == null || target["message"] == undefined) ){
                  throw new Error(path + "message is required") ;
              }
              
              if(target["message"] != null && target["message"] != undefined ){
              
                let _message  = target["message"] ;
                

                 if(! _.isString(_message)){
                    throw new Error(path+"message is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_hello>{
        return Model_hello.check(target, true, path).then(()=>{
          return new Model_hello(target) ;
        })
      }

   }

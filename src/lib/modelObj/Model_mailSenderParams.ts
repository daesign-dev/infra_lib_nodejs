import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;



/**
  mail sender params (name, email, ..)
*/
export class Model_mailSenderParams extends  Base  implements Interface.ImailSenderParams {

/**
  mail sender params (name, email, ..)
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["name"] != undefined){
          
           this["name"] = obj["name"].toString() ;
           
        }
        
    
        
        if(obj["email"] != undefined){
          
           this["email"] = obj["email"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "mailSenderParams" ;

        
              /**
        name of sender to display
        */
               public "name":string ;
              
       
              /**
        email of sender
        */
               public "email"?:string ;
              
       


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
              
              if( isCompleteObj && (target["name"] == null || target["name"] == undefined) ){
                  throw new Error(path + "name is required") ;
              }
              
              if(target["name"] != null && target["name"] != undefined ){
              
                let _name  = target["name"] ;
                

                 if(! _.isString(_name)){
                    throw new Error(path+"name is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["email"] != null && target["email"] != undefined ){
              
                let _email  = target["email"] ;
                

                 if(! _.isString(_email)){
                    throw new Error(path+"email is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_mailSenderParams>{
        return Model_mailSenderParams.check(target, true, path).then(()=>{
          return new Model_mailSenderParams(target) ;
        })
      }

   }

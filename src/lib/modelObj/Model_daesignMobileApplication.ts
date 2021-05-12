import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;



/**
  A daesign mobile application object description used by deployment
*/
export class Model_daesignMobileApplication extends  Base  implements Interface.IdaesignMobileApplication {

/**
  A daesign mobile application object description used by deployment
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["id"] != undefined){
          
           this["id"] = obj["id"].toString() ;
           
        }
        
    
        
        if(obj["name"] != undefined){
          
           this["name"] = obj["name"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "daesignMobileApplication" ;

        
              /**
        The application ID ( not the instance, nor the configuration )
        */
               public "id":string ;
              
       
              /**
        The application name
        */
               public "name":string ;
              
       


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
              
              if( isCompleteObj && (target["id"] == null || target["id"] == undefined) ){
                  throw new Error(path + "id is required") ;
              }
              
              if(target["id"] != null && target["id"] != undefined ){
              
                let _id  = target["id"] ;
                

                 if(! _.isString(_id)){
                    throw new Error(path+"id is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if( isCompleteObj && (target["name"] == null || target["name"] == undefined) ){
                  throw new Error(path + "name is required") ;
              }
              
              if(target["name"] != null && target["name"] != undefined ){
              
                let _name  = target["name"] ;
                

                 if(! _.isString(_name)){
                    throw new Error(path+"name is not a string") ;
                    
                  }
                  
                  
                    let _enum_name:string[] = ["savvyLearner","revizQuiz"] ;
                    if(_enum_name.indexOf(_name)==-1){
                        throw new Error(path+"name dont match one of savvyLearner , revizQuiz" ) ;
                        
                    }
                  
                 
              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_daesignMobileApplication>{
        return Model_daesignMobileApplication.check(target, true, path).then(()=>{
          return new Model_daesignMobileApplication(target) ;
        })
      }

   }

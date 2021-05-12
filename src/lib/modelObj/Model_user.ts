import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;



/**
  User account collection
*/
export class Model_user extends  Base  implements Interface.Iuser {

/**
  User account collection
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["first_name"] != undefined){
          
           this["first_name"] = obj["first_name"].toString() ;
           
        }
        
    
        
        if(obj["last_name"] != undefined){
          
           this["last_name"] = obj["last_name"].toString() ;
           
        }
        
    
        
        if(obj["email"] != undefined){
          
           this["email"] = obj["email"] ;
          
        }
        
    
        
        if(obj["user_profile"] != undefined){
          
          if(_.isString(obj["user_profile"])){
            this["user_profile"] = obj["user_profile"];
          }else if(obj["user_profile"]._id){
            this["user_profile"] = obj["user_profile"]._id ;
          }
          
        }
        
    
  }
  

    public _class:string  = "user" ;

        
              /**
        User first name
        */
               public "first_name":string ;
              
       
              /**
        User last name
        */
               public "last_name":string ;
              
       
              /**
        User email address
        */
               public "email":Interface.Ifield;
              
       
              /**
        User profile
        */
               public "user_profile":string ;
              
       


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
              
              if( isCompleteObj && (target["first_name"] == null || target["first_name"] == undefined) ){
                  throw new Error(path + "first_name is required") ;
              }
              
              if(target["first_name"] != null && target["first_name"] != undefined ){
              
                let _first_name  = target["first_name"] ;
                

                 if(! _.isString(_first_name)){
                    throw new Error(path+"first_name is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if( isCompleteObj && (target["last_name"] == null || target["last_name"] == undefined) ){
                  throw new Error(path + "last_name is required") ;
              }
              
              if(target["last_name"] != null && target["last_name"] != undefined ){
              
                let _last_name  = target["last_name"] ;
                

                 if(! _.isString(_last_name)){
                    throw new Error(path+"last_name is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if( isCompleteObj && (target["email"] == null || target["email"] == undefined) ){
                  throw new Error(path + "email is required") ;
              }
              
              if(target["email"] != null && target["email"] != undefined ){
              
               // public "email":Ifield;
              
              
           }
           
              
              if( isCompleteObj && (target["user_profile"] == null || target["user_profile"] == undefined) ){
                  throw new Error(path + "user_profile is required") ;
              }
              
              if(target["user_profile"] != null && target["user_profile"] != undefined ){
              
                  let _user_profile  = target["user_profile"] ;
                  
                  if( ! _.isString(_user_profile)){
                   throw new Error(path + "user_profile is not a string") ;
                  }
                  

              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_user>{
        return Model_user.check(target, true, path).then(()=>{
          return new Model_user(target) ;
        })
      }

   }

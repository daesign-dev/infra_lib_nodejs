import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;


import {Model_certificat } from "./Model_certificat"


/**
  Défini un certificat utilisant uniquement une clé d'API pour une application donnée
*/
export class Model_api_key extends   Model_certificat   implements Interface.Iapi_key {

/**
  Défini un certificat utilisant uniquement une clé d'API pour une application donnée
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["key"] != undefined){
          
           this["key"] = obj["key"].toString() ;
           
        }
        
    
        
        if(obj["app"] != undefined){
          
          if(_.isString(obj["app"])){
            this["app"] = obj["app"];
          }else if(obj["app"]._id){
            this["app"] = obj["app"]._id ;
          }
          
        }
        
    
  }
  

    public _class:string  = "api_key" ;

        
              /**
        Clé API
        */
               public "key"?:string ;
              
       
              /**
        Application liée à la clé
        */
               public "app"?:string ;
              
       


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
              
              if(target["key"] != null && target["key"] != undefined ){
              
                let _key  = target["key"] ;
                

                 if(! _.isString(_key)){
                    throw new Error(path+"key is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["app"] != null && target["app"] != undefined ){
              
                  let _app  = target["app"] ;
                  
                  if( ! _.isString(_app)){
                   throw new Error(path + "app is not a string") ;
                  }
                  

              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_api_key>{
        return Model_api_key.check(target, true, path).then(()=>{
          return new Model_api_key(target) ;
        })
      }

   }

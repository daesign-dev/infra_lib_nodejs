import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;


import {Model_certificat } from "./Model_certificat"


/**
  Certificat PEM pour une app donnée
*/
export class Model_pem_for_app extends   Model_certificat   implements Interface.Ipem_for_app {

/**
  Certificat PEM pour une app donnée
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["app"] != undefined){
          
          if(_.isString(obj["app"])){
            this["app"] = obj["app"];
          }else if(obj["app"]._id){
            this["app"] = obj["app"]._id ;
          }
          
        }
        
    
        
        if(obj["certificat"] != undefined){
          
           this["certificat"] = obj["certificat"].toString() ;
           
        }
        
    
        
        if(obj["private_key"] != undefined){
          
           this["private_key"] = obj["private_key"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "pem_for_app" ;

        
              /**
        Application associé au certificat
        */
               public "app"?:string ;
              
       
              /**
        Data du certificat encodé en base 64.voir https://medium.com/@dhaval/integrate-sns-push-notifications-with-cordova-ios-app-664e0c4c3a18
        */
               public "certificat"?:string ;
              
       
              /**
         Il s'agit de la clé privée
        */
               public "private_key"?:string ;
              
       


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
              
              if(target["app"] != null && target["app"] != undefined ){
              
                  let _app  = target["app"] ;
                  
                  if( ! _.isString(_app)){
                   throw new Error(path + "app is not a string") ;
                  }
                  

              
              
           }
           
              
              if(target["certificat"] != null && target["certificat"] != undefined ){
              
                let _certificat  = target["certificat"] ;
                

                 if(! _.isString(_certificat)){
                    throw new Error(path+"certificat is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["private_key"] != null && target["private_key"] != undefined ){
              
                let _private_key  = target["private_key"] ;
                

                 if(! _.isString(_private_key)){
                    throw new Error(path+"private_key is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_pem_for_app>{
        return Model_pem_for_app.check(target, true, path).then(()=>{
          return new Model_pem_for_app(target) ;
        })
      }

   }

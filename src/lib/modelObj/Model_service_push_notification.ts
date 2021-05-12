import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;


import {Model_service } from "./Model_service"


/**
  Service pour gérer les notifications push des applications
*/
export class Model_service_push_notification extends   Model_service   implements Interface.Iservice_push_notification {

/**
  Service pour gérer les notifications push des applications
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["url_service_db"] != undefined){
          
           this["url_service_db"] = obj["url_service_db"].toString() ;
           
        }
        
    
        
        if(obj["url_certificate_collection"] != undefined){
          
           this["url_certificate_collection"] = obj["url_certificate_collection"].toString() ;
           
        }
        
    
        
        if(obj["context"] != undefined){
          
           this["context"] = obj["context"].toString() ;
           
        }
        
    
        
        if(obj["aws_access_key_id"] != undefined){
          
           this["aws_access_key_id"] = obj["aws_access_key_id"].toString() ;
           
        }
        
    
        
        if(obj["aws_secret_access_key"] != undefined){
          
           this["aws_secret_access_key"] = obj["aws_secret_access_key"].toString() ;
           
        }
        
    
        
        if(obj["aws_region"] != undefined){
          
           this["aws_region"] = obj["aws_region"].toString() ;
           
        }
        
    
        
        if(obj["url_service_task"] != undefined){
          
           this["url_service_task"] = obj["url_service_task"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "service_push_notification" ;

        
              /**
        URL de la BD dédié à la notification push pour faire le lien entre id d'app et id côté amazon
        */
               public "url_service_db"?:string ;
              
       
              /**
        Url de la BD vers la collection de certificat
        */
               public "url_certificate_collection"?:string ;
              
       
              /**
        Contexte du service pour mettre des libellés correctes dans les nom dans amazon SNS
        */
               public "context"?:string ;
              
       
              /**
        Clé d'accès au serveur AWS
        */
               public "aws_access_key_id"?:string ;
              
       
              /**
        Clé privée pour accéder au serveur AWS
        */
               public "aws_secret_access_key"?:string ;
              
       
              /**
        Code region du serveur AWS
        */
               public "aws_region"?:string ;
              
       
              /**
        URL du service de planification de tâche
        */
               public "url_service_task"?:string ="$ENV.SERVICES_DOMAINE$$/plannedTasks/";
              
       


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
              
              if(target["url_service_db"] != null && target["url_service_db"] != undefined ){
              
                let _url_service_db  = target["url_service_db"] ;
                

                 if(! _.isString(_url_service_db)){
                    throw new Error(path+"url_service_db is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["url_certificate_collection"] != null && target["url_certificate_collection"] != undefined ){
              
                let _url_certificate_collection  = target["url_certificate_collection"] ;
                

                 if(! _.isString(_url_certificate_collection)){
                    throw new Error(path+"url_certificate_collection is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["context"] != null && target["context"] != undefined ){
              
                let _context  = target["context"] ;
                

                 if(! _.isString(_context)){
                    throw new Error(path+"context is not a string") ;
                    
                  }
                  
                  
                    let _enum_context:string[] = ["dev","preprod","prod"] ;
                    if(_enum_context.indexOf(_context)==-1){
                        throw new Error(path+"context dont match one of dev , preprod , prod" ) ;
                        
                    }
                  
                 
              
              
           }
           
              
              if(target["aws_access_key_id"] != null && target["aws_access_key_id"] != undefined ){
              
                let _aws_access_key_id  = target["aws_access_key_id"] ;
                

                 if(! _.isString(_aws_access_key_id)){
                    throw new Error(path+"aws_access_key_id is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["aws_secret_access_key"] != null && target["aws_secret_access_key"] != undefined ){
              
                let _aws_secret_access_key  = target["aws_secret_access_key"] ;
                

                 if(! _.isString(_aws_secret_access_key)){
                    throw new Error(path+"aws_secret_access_key is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["aws_region"] != null && target["aws_region"] != undefined ){
              
                let _aws_region  = target["aws_region"] ;
                

                 if(! _.isString(_aws_region)){
                    throw new Error(path+"aws_region is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["url_service_task"] != null && target["url_service_task"] != undefined ){
              
                let _url_service_task  = target["url_service_task"] ;
                

                 if(! _.isString(_url_service_task)){
                    throw new Error(path+"url_service_task is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_service_push_notification>{
        return Model_service_push_notification.check(target, true, path).then(()=>{
          return new Model_service_push_notification(target) ;
        })
      }

   }

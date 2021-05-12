import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;


import {Model_service } from "./Model_service"


/**
  Service servant de passerelle entre Nathan et notre infra
*/
export class Model_service_nathan_gateway extends   Model_service   implements Interface.Iservice_nathan_gateway {

/**
  Service servant de passerelle entre Nathan et notre infra
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["url_webservice_prospect"] != undefined){
          
           this["url_webservice_prospect"] = obj["url_webservice_prospect"].toString() ;
           
        }
        
    
        
        if(obj["url_wsdl_prospect"] != undefined){
          
           this["url_wsdl_prospect"] = obj["url_wsdl_prospect"].toString() ;
           
        }
        
    
        
        if(obj["login"] != undefined){
          
           this["login"] = obj["login"].toString() ;
           
        }
        
    
        
        if(obj["password"] != undefined){
          
           this["password"] = obj["password"].toString() ;
           
        }
        
    
        
        if(obj["licence"] != undefined){
          
          if(_.isString(obj["licence"])){
            this["licence"] = obj["licence"];
          }else if(obj["licence"]._id){
            this["licence"] = obj["licence"]._id ;
          }
          
        }
        
    
        
        if(obj["lerobertLicence"] != undefined){
          
          if(_.isString(obj["lerobertLicence"])){
            this["lerobertLicence"] = obj["lerobertLicence"];
          }else if(obj["lerobertLicence"]._id){
            this["lerobertLicence"] = obj["lerobertLicence"]._id ;
          }
          
        }
        
    
        
        if(obj["url_licence_collection"] != undefined){
          
           this["url_licence_collection"] = obj["url_licence_collection"].toString() ;
           
        }
        
    
        
        if(obj["savvy_author_db_url"] != undefined){
          
           this["savvy_author_db_url"] = obj["savvy_author_db_url"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "service_nathan_gateway" ;

        
              /**
        URL du webservice Prospect
        */
               public "url_webservice_prospect"?:string ;
              
       
              /**
        URL de la description wsdl du service de prospect
        */
               public "url_wsdl_prospect"?:string ;
              
       
              /**
        Login pour utiliser le webservice
        */
               public "login"?:string ;
              
       
              /**
        Mot de passe pour utiliser le webservice
        */
               public "password"?:string ;
              
       
              /**
        Licence à utiliser
        */
               public "licence"?:string ;
              
       
              /**
         Licence avec la liste des packs le robert pour la route lerobertConf
        */
               public "lerobertLicence"?:string ;
              
       
              /**
        Url de la collection de licence
        */
               public "url_licence_collection"?:string ;
              
       
              /**
        URL vers savvy author
        */
               public "savvy_author_db_url"?:string ;
              
       


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
              
              if(target["url_webservice_prospect"] != null && target["url_webservice_prospect"] != undefined ){
              
                let _url_webservice_prospect  = target["url_webservice_prospect"] ;
                

                 if(! _.isString(_url_webservice_prospect)){
                    throw new Error(path+"url_webservice_prospect is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["url_wsdl_prospect"] != null && target["url_wsdl_prospect"] != undefined ){
              
                let _url_wsdl_prospect  = target["url_wsdl_prospect"] ;
                

                 if(! _.isString(_url_wsdl_prospect)){
                    throw new Error(path+"url_wsdl_prospect is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["login"] != null && target["login"] != undefined ){
              
                let _login  = target["login"] ;
                

                 if(! _.isString(_login)){
                    throw new Error(path+"login is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["password"] != null && target["password"] != undefined ){
              
                let _password  = target["password"] ;
                

                 if(! _.isString(_password)){
                    throw new Error(path+"password is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["licence"] != null && target["licence"] != undefined ){
              
                  let _licence  = target["licence"] ;
                  
                  if( ! _.isString(_licence)){
                   throw new Error(path + "licence is not a string") ;
                  }
                  

              
              
           }
           
              
              if(target["lerobertLicence"] != null && target["lerobertLicence"] != undefined ){
              
                  let _lerobertLicence  = target["lerobertLicence"] ;
                  
                  if( ! _.isString(_lerobertLicence)){
                   throw new Error(path + "lerobertLicence is not a string") ;
                  }
                  

              
              
           }
           
              
              if(target["url_licence_collection"] != null && target["url_licence_collection"] != undefined ){
              
                let _url_licence_collection  = target["url_licence_collection"] ;
                

                 if(! _.isString(_url_licence_collection)){
                    throw new Error(path+"url_licence_collection is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["savvy_author_db_url"] != null && target["savvy_author_db_url"] != undefined ){
              
                let _savvy_author_db_url  = target["savvy_author_db_url"] ;
                

                 if(! _.isString(_savvy_author_db_url)){
                    throw new Error(path+"savvy_author_db_url is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_service_nathan_gateway>{
        return Model_service_nathan_gateway.check(target, true, path).then(()=>{
          return new Model_service_nathan_gateway(target) ;
        })
      }

   }

import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;


import {Model_service } from "./Model_service"


/**
  service passerelle vers l'interne
*/
export class Model_service_gateway extends   Model_service   implements Interface.Iservice_gateway {

/**
  service passerelle vers l'interne
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["privateKey"] != undefined){
          
           this["privateKey"] = obj["privateKey"].toString() ;
           
        }
        
    
        
        if(obj["endClientId"] != undefined){
          
          if(_.isString(obj["endClientId"])){
            this["endClientId"] = obj["endClientId"];
          }else if(obj["endClientId"]._id){
            this["endClientId"] = obj["endClientId"]._id ;
          }
          
        }
        
    
        
        if(obj["signinUrl"] != undefined){
          
           this["signinUrl"] = obj["signinUrl"].toString() ;
           
        }
        
    
        
        if(obj["licenceServiceUrl"] != undefined){
          
           this["licenceServiceUrl"] = obj["licenceServiceUrl"].toString() ;
           
        }
        
    
        
        if(obj["templateUser"] != undefined){
          
           this["templateUser"] = obj["templateUser"] ;
          
        }
        
    
        
        if(obj["templateProfileUser"] != undefined){
          
           this["templateProfileUser"] = obj["templateProfileUser"] ;
          
        }
        
    
        
        if(obj["apiUrl"] != undefined){
          
           this["apiUrl"] = obj["apiUrl"].toString() ;
           
        }
        
    
        
        if(obj["licenceAdminId"] != undefined){
          
          if(_.isString(obj["licenceAdminId"])){
            this["licenceAdminId"] = obj["licenceAdminId"];
          }else if(obj["licenceAdminId"]._id){
            this["licenceAdminId"] = obj["licenceAdminId"]._id ;
          }
          
        }
        
    
  }
  

    public _class:string  = "service_gateway" ;

        
              /**
        clef privé a mettre dans le package scorm
        */
               public "privateKey":string ;
              
       
              /**
        id du end client
        */
               public "endClientId":string ;
              
       
              /**
        url du service de signin
        */
               public "signinUrl":string ;
              
       
              /**
        url  de licencetoken
        */
               public "licenceServiceUrl":string ;
              
       
              /**
        templateUser
        */
               public "templateUser":any ;
              
       
              /**
        templateProfileUser
        */
               public "templateProfileUser":any ;
              
       
              /**
        apiUrl
        */
               public "apiUrl"?:string ;
              
       
              /**
        licence Admin ref to acces over acl
        */
               public "licenceAdminId"?:string ;
              
       


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
              
              if( isCompleteObj && (target["privateKey"] == null || target["privateKey"] == undefined) ){
                  throw new Error(path + "privateKey is required") ;
              }
              
              if(target["privateKey"] != null && target["privateKey"] != undefined ){
              
                let _privateKey  = target["privateKey"] ;
                

                 if(! _.isString(_privateKey)){
                    throw new Error(path+"privateKey is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if( isCompleteObj && (target["endClientId"] == null || target["endClientId"] == undefined) ){
                  throw new Error(path + "endClientId is required") ;
              }
              
              if(target["endClientId"] != null && target["endClientId"] != undefined ){
              
                  let _endClientId  = target["endClientId"] ;
                  
                  if( ! _.isString(_endClientId)){
                   throw new Error(path + "endClientId is not a string") ;
                  }
                  

              
              
           }
           
              
              if( isCompleteObj && (target["signinUrl"] == null || target["signinUrl"] == undefined) ){
                  throw new Error(path + "signinUrl is required") ;
              }
              
              if(target["signinUrl"] != null && target["signinUrl"] != undefined ){
              
                let _signinUrl  = target["signinUrl"] ;
                

                 if(! _.isString(_signinUrl)){
                    throw new Error(path+"signinUrl is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if( isCompleteObj && (target["licenceServiceUrl"] == null || target["licenceServiceUrl"] == undefined) ){
                  throw new Error(path + "licenceServiceUrl is required") ;
              }
              
              if(target["licenceServiceUrl"] != null && target["licenceServiceUrl"] != undefined ){
              
                let _licenceServiceUrl  = target["licenceServiceUrl"] ;
                

                 if(! _.isString(_licenceServiceUrl)){
                    throw new Error(path+"licenceServiceUrl is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if( isCompleteObj && (target["templateUser"] == null || target["templateUser"] == undefined) ){
                  throw new Error(path + "templateUser is required") ;
              }
              
              if(target["templateUser"] != null && target["templateUser"] != undefined ){
              
               // public "templateUser":Iobject;
              
              
           }
           
              
              if( isCompleteObj && (target["templateProfileUser"] == null || target["templateProfileUser"] == undefined) ){
                  throw new Error(path + "templateProfileUser is required") ;
              }
              
              if(target["templateProfileUser"] != null && target["templateProfileUser"] != undefined ){
              
               // public "templateProfileUser":Iobject;
              
              
           }
           
              
              if(target["apiUrl"] != null && target["apiUrl"] != undefined ){
              
                let _apiUrl  = target["apiUrl"] ;
                

                 if(! _.isString(_apiUrl)){
                    throw new Error(path+"apiUrl is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["licenceAdminId"] != null && target["licenceAdminId"] != undefined ){
              
                  let _licenceAdminId  = target["licenceAdminId"] ;
                  
                  if( ! _.isString(_licenceAdminId)){
                   throw new Error(path + "licenceAdminId is not a string") ;
                  }
                  

              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_service_gateway>{
        return Model_service_gateway.check(target, true, path).then(()=>{
          return new Model_service_gateway(target) ;
        })
      }

   }

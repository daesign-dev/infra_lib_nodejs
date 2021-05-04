import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;


import {Model_service } from "./Model_service"


/**
  service passerelle pour le clustering
*/
export class Model_service_amclustering extends   Model_service   implements Interface.Iservice_amclustering {

/**
  service passerelle pour le clustering
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
        
    
        
        if(obj["clusteringUrl"] != undefined){
          
           this["clusteringUrl"] = obj["clusteringUrl"].toString() ;
           
        }
        
    
        
        if(obj["bearer"] != undefined){
          
           this["bearer"] = obj["bearer"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "service_amclustering" ;

        
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
        apiUrl
        */
               public "apiUrl"?:string ;
              
       
              /**
        licence Admin ref to acces over acl
        */
               public "licenceAdminId"?:string ;
              
       
              /**
        evidence B clustering url
        */
               public "clusteringUrl"?:string ;
              
       
              /**
        bearer code
        */
               public "bearer"?:string ;
              
       


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
           
              
              if(target["clusteringUrl"] != null && target["clusteringUrl"] != undefined ){
              
                let _clusteringUrl  = target["clusteringUrl"] ;
                

                 if(! _.isString(_clusteringUrl)){
                    throw new Error(path+"clusteringUrl is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["bearer"] != null && target["bearer"] != undefined ){
              
                let _bearer  = target["bearer"] ;
                

                 if(! _.isString(_bearer)){
                    throw new Error(path+"bearer is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_service_amclustering>{
        return Model_service_amclustering.check(target, true, path).then(()=>{
          return new Model_service_amclustering(target) ;
        })
      }

   }

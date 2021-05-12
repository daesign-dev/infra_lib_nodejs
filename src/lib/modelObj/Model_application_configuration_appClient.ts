import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;


import {Model_application_configuration_web } from "./Model_application_configuration_web"


/**
  c'est la configuration d'une application Client
*/
export class Model_application_configuration_appClient extends   Model_application_configuration_web   implements Interface.Iapplication_configuration_appClient {

/**
  c'est la configuration d'une application Client
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["configurationUrlDb"] != undefined){
          
           this["configurationUrlDb"] = obj["configurationUrlDb"].toString() ;
           
        }
        
    
        
        if(obj["urlBase"] != undefined){
          
           this["urlBase"] = obj["urlBase"].toString() ;
           
        }
        
    
        
        if(obj["signinUrl"] != undefined){
          
           this["signinUrl"] = obj["signinUrl"].toString() ;
           
        }
        
    
        
        if(obj["licenseServiceUrl"] != undefined){
          
           this["licenseServiceUrl"] = obj["licenseServiceUrl"].toString() ;
           
        }
        
    
        
        if(obj["serviceSessionUrl"] != undefined){
          
           this["serviceSessionUrl"] = obj["serviceSessionUrl"].toString() ;
           
        }
        
    
        
        if(obj["clientServiceUrl"] != undefined){
          
           this["clientServiceUrl"] = obj["clientServiceUrl"].toString() ;
           
        }
        
    
        
        if(obj["fileServiceUrl"] != undefined){
          
           this["fileServiceUrl"] = obj["fileServiceUrl"].toString() ;
           
        }
        
    
        
        if(obj["trackingServiceUrl"] != undefined){
          
           this["trackingServiceUrl"] = obj["trackingServiceUrl"].toString() ;
           
        }
        
    
        
        if(obj["aclTemplate"] != undefined){
          
            if(obj._class){
              this["aclTemplate"] =  new Index[obj._class](obj["aclTemplate"]) ;
            }else{
              this["aclTemplate"] =  new Index["_acl"](obj["aclTemplate"]) ;
            }
          
        }
        
    
        
        if(obj["isForProspect"] != undefined){
          
           this["isForProspect"] = new Boolean(obj["isForProspect"]).valueOf() ;
          
        }
        
    
        
        if(obj["licenseTokenUrl"] != undefined){
          
           this["licenseTokenUrl"] = obj["licenseTokenUrl"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "application_configuration_appClient" ;

        
              /**
        url de la bd de l'application
        */
               public "configurationUrlDb":string ;
              
       
              /**
        url racine des services
        */
               public "urlBase":string ;
              
       
              /**
        url du service d'enregistrement d'utilisateur
        */
               public "signinUrl":string ;
              
       
              /**
        license service url
        */
               public "licenseServiceUrl"?:string ;
              
       
              /**
        url du service de gestion des sessions
        */
               public "serviceSessionUrl":string ;
              
       
              /**
        url du service d'acces au info client
        */
               public "clientServiceUrl":string ;
              
       
              /**
        url du file service pour le forum
        */
               public "fileServiceUrl"?:string ;
              
       
              /**
        url of tracking service.
        */
               public "trackingServiceUrl"?:string ;
              
       
              /**
        template des acl
        */
               public "aclTemplate"?:Interface.I_acl;
              
       
              /**
        boolean to set prospect workspace
        */
               public "isForProspect"?:boolean ;
              
       
              /**
        LicenceToken service URL
        */
               public "licenseTokenUrl"?:string ;
              
       


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
              
              if( isCompleteObj && (target["configurationUrlDb"] == null || target["configurationUrlDb"] == undefined) ){
                  throw new Error(path + "configurationUrlDb is required") ;
              }
              
              if(target["configurationUrlDb"] != null && target["configurationUrlDb"] != undefined ){
              
                let _configurationUrlDb  = target["configurationUrlDb"] ;
                

                 if(! _.isString(_configurationUrlDb)){
                    throw new Error(path+"configurationUrlDb is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if( isCompleteObj && (target["urlBase"] == null || target["urlBase"] == undefined) ){
                  throw new Error(path + "urlBase is required") ;
              }
              
              if(target["urlBase"] != null && target["urlBase"] != undefined ){
              
                let _urlBase  = target["urlBase"] ;
                

                 if(! _.isString(_urlBase)){
                    throw new Error(path+"urlBase is not a string") ;
                    
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
           
              
              if(target["licenseServiceUrl"] != null && target["licenseServiceUrl"] != undefined ){
              
                let _licenseServiceUrl  = target["licenseServiceUrl"] ;
                

                 if(! _.isString(_licenseServiceUrl)){
                    throw new Error(path+"licenseServiceUrl is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if( isCompleteObj && (target["serviceSessionUrl"] == null || target["serviceSessionUrl"] == undefined) ){
                  throw new Error(path + "serviceSessionUrl is required") ;
              }
              
              if(target["serviceSessionUrl"] != null && target["serviceSessionUrl"] != undefined ){
              
                let _serviceSessionUrl  = target["serviceSessionUrl"] ;
                

                 if(! _.isString(_serviceSessionUrl)){
                    throw new Error(path+"serviceSessionUrl is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if( isCompleteObj && (target["clientServiceUrl"] == null || target["clientServiceUrl"] == undefined) ){
                  throw new Error(path + "clientServiceUrl is required") ;
              }
              
              if(target["clientServiceUrl"] != null && target["clientServiceUrl"] != undefined ){
              
                let _clientServiceUrl  = target["clientServiceUrl"] ;
                

                 if(! _.isString(_clientServiceUrl)){
                    throw new Error(path+"clientServiceUrl is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["fileServiceUrl"] != null && target["fileServiceUrl"] != undefined ){
              
                let _fileServiceUrl  = target["fileServiceUrl"] ;
                

                 if(! _.isString(_fileServiceUrl)){
                    throw new Error(path+"fileServiceUrl is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["trackingServiceUrl"] != null && target["trackingServiceUrl"] != undefined ){
              
                let _trackingServiceUrl  = target["trackingServiceUrl"] ;
                

                 if(! _.isString(_trackingServiceUrl)){
                    throw new Error(path+"trackingServiceUrl is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["aclTemplate"] != null && target["aclTemplate"] != undefined ){
              
                  let _aclTemplate  = target["aclTemplate"] ;
                  
                  
                    promArr.push( Index["_acl"].check(_aclTemplate, isCompleteObj , path+"aclTemplate.")
                      .catch((err)=>{
                        throw new Error(path+"aclTemplate is not ") ;
                        

                      }) )
                  if(_aclTemplate._class != null && _aclTemplate._class != undefined){
                    promArr.push( Index[_aclTemplate._class].check(_aclTemplate, isCompleteObj , path+"aclTemplate.")
                      .catch((err)=>{
                        throw new Error(path+"aclTemplate is not a " + _aclTemplate._class ) ;
                        

                      })
                    )
                  }

                  
              
              
           }
           
              
              if(target["isForProspect"] != null && target["isForProspect"] != undefined ){
              
                let _isForProspect  = target["isForProspect"] ;
                
                  if(! _.isBoolean(_isForProspect)){
                    throw new Error(path+"isForProspect is not a boolean") ;
                    
                  }
                

              
              
           }
           
              
              if(target["licenseTokenUrl"] != null && target["licenseTokenUrl"] != undefined ){
              
                let _licenseTokenUrl  = target["licenseTokenUrl"] ;
                

                 if(! _.isString(_licenseTokenUrl)){
                    throw new Error(path+"licenseTokenUrl is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_application_configuration_appClient>{
        return Model_application_configuration_appClient.check(target, true, path).then(()=>{
          return new Model_application_configuration_appClient(target) ;
        })
      }

   }

import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;


import {Model_application_configuration_web } from "./Model_application_configuration_web"


/**
  Configuration pour l'application Savvy - Author
*/
export class Model_application_configuration_savvy_author extends   Model_application_configuration_web   implements Interface.Iapplication_configuration_savvy_author {

/**
  Configuration pour l'application Savvy - Author
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["configurationUrlDb"] != undefined){
          
           this["configurationUrlDb"] = obj["configurationUrlDb"].toString() ;
           
        }
        
    
        
        if(obj["aclTemplate"] != undefined){
          
            if(obj._class){
              this["aclTemplate"] =  new Index[obj._class](obj["aclTemplate"]) ;
            }else{
              this["aclTemplate"] =  new Index["_acl"](obj["aclTemplate"]) ;
            }
          
        }
        
    
        
        if(obj["urlInfraDb"] != undefined){
          
           this["urlInfraDb"] = obj["urlInfraDb"].toString() ;
           
        }
        
    
        
        if(obj["urlFrontAppsDb"] != undefined){
          
           this["urlFrontAppsDb"] = obj["urlFrontAppsDb"].toString() ;
           
        }
        
    
        
        if(obj["su_clientId"] != undefined){
          
          if(_.isString(obj["su_clientId"])){
            this["su_clientId"] = obj["su_clientId"];
          }else if(obj["su_clientId"]._id){
            this["su_clientId"] = obj["su_clientId"]._id ;
          }
          
        }
        
    
        
        if(obj["su_conf"] != undefined){
          
           this["su_conf"] = new Boolean(obj["su_conf"]).valueOf() ;
          
        }
        
    
        
        if(obj["savvyLearnerAppId"] != undefined){
          
          if(_.isString(obj["savvyLearnerAppId"])){
            this["savvyLearnerAppId"] = obj["savvyLearnerAppId"];
          }else if(obj["savvyLearnerAppId"]._id){
            this["savvyLearnerAppId"] = obj["savvyLearnerAppId"]._id ;
          }
          
        }
        
    
        
        if(obj["pushNotificationServiceUrl"] != undefined){
          
           this["pushNotificationServiceUrl"] = obj["pushNotificationServiceUrl"].toString() ;
           
        }
        
    
        
        if(obj["rewardColors"] != undefined && obj["rewardColors"] != null && _.isArray(obj["rewardColors"])){
          
           this["rewardColors"] = obj["rewardColors"].map((value)=>{
              return value.toString();
            })
          
        }
        
    
  }
  

    public _class:string  = "application_configuration_savvy_author" ;

        
              /**
        c'est l'url de la base de donnée de l'application
        */
               public "configurationUrlDb":string ;
              
       
              /**
        template générique a appliquer aux enregistrements
        */
               public "aclTemplate"?:Interface.I_acl;
              
       
              /**
        URL vers la BD infra
        */
               public "urlInfraDb"?:string ;
              
       
              /**
        URL vers la BD des front-apps
        */
               public "urlFrontAppsDb"?:string ;
              
       
              /**
        Super admin pour les utilisateurs de end_client
        */
               public "su_clientId"?:string ;
              
       
              /**
        Est-ce que c'est une conf de super Admin ?
        */
               public "su_conf"?:boolean ;
              
       
              /**
        Identifiant de l'application savvy learner
        */
               public "savvyLearnerAppId"?:string ;
              
       
              /**
        URL for push notification service
        */
               public "pushNotificationServiceUrl"?:string ;
              
       
              /**
        liste des noms des couleurs des rewards (liées aux assets de savvy learner)
        */
               public "rewardColors"?:string[];
              
       


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
           
              
              if(target["urlInfraDb"] != null && target["urlInfraDb"] != undefined ){
              
                let _urlInfraDb  = target["urlInfraDb"] ;
                

                 if(! _.isString(_urlInfraDb)){
                    throw new Error(path+"urlInfraDb is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["urlFrontAppsDb"] != null && target["urlFrontAppsDb"] != undefined ){
              
                let _urlFrontAppsDb  = target["urlFrontAppsDb"] ;
                

                 if(! _.isString(_urlFrontAppsDb)){
                    throw new Error(path+"urlFrontAppsDb is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["su_clientId"] != null && target["su_clientId"] != undefined ){
              
                  let _su_clientId  = target["su_clientId"] ;
                  
                  if( ! _.isString(_su_clientId)){
                   throw new Error(path + "su_clientId is not a string") ;
                  }
                  

              
              
           }
           
              
              if(target["su_conf"] != null && target["su_conf"] != undefined ){
              
                let _su_conf  = target["su_conf"] ;
                
                  if(! _.isBoolean(_su_conf)){
                    throw new Error(path+"su_conf is not a boolean") ;
                    
                  }
                

              
              
           }
           
              
              if(target["savvyLearnerAppId"] != null && target["savvyLearnerAppId"] != undefined ){
              
                  let _savvyLearnerAppId  = target["savvyLearnerAppId"] ;
                  
                  if( ! _.isString(_savvyLearnerAppId)){
                   throw new Error(path + "savvyLearnerAppId is not a string") ;
                  }
                  

              
              
           }
           
              
              if(target["pushNotificationServiceUrl"] != null && target["pushNotificationServiceUrl"] != undefined ){
              
                let _pushNotificationServiceUrl  = target["pushNotificationServiceUrl"] ;
                

                 if(! _.isString(_pushNotificationServiceUrl)){
                    throw new Error(path+"pushNotificationServiceUrl is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["rewardColors"] != null && target["rewardColors"] != undefined ){
              
                target["rewardColors"].forEach((_rewardColors , index:number)=>{
                

                 if(! _.isString(_rewardColors)){
                    throw new Error(path+"rewardColors index: "+ index +"is not a string")
                    
                  }
                  
                  
                 });
              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_application_configuration_savvy_author>{
        return Model_application_configuration_savvy_author.check(target, true, path).then(()=>{
          return new Model_application_configuration_savvy_author(target) ;
        })
      }

   }

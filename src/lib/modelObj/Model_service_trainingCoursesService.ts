import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;


import {Model_service } from "./Model_service"


/**
  service de gestion des parcourts de formation
*/
export class Model_service_trainingCoursesService extends   Model_service   implements Interface.Iservice_trainingCoursesService {

/**
  service de gestion des parcourts de formation
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["apiSession"] != undefined){
          
           this["apiSession"] = obj["apiSession"].toString() ;
           
        }
        
    
        
        if(obj["licenceServiceUrl"] != undefined){
          
           this["licenceServiceUrl"] = obj["licenceServiceUrl"].toString() ;
           
        }
        
    
        
        if(obj["signinServiceUrl"] != undefined){
          
           this["signinServiceUrl"] = obj["signinServiceUrl"].toString() ;
           
        }
        
    
        
        if(obj["taskServiceUrl"] != undefined){
          
           this["taskServiceUrl"] = obj["taskServiceUrl"].toString() ;
           
        }
        
    
        
        if(obj["mailServiceUrl"] != undefined){
          
           this["mailServiceUrl"] = obj["mailServiceUrl"].toString() ;
           
        }
        
    
        
        if(obj["defaultSender"] != undefined){
          
            if(obj._class){
              this["defaultSender"] =  new Index[obj._class](obj["defaultSender"]) ;
            }else{
              this["defaultSender"] =  new Index["mailSenderParams"](obj["defaultSender"]) ;
            }
          
        }
        
    
        
        if(obj["defaultNameSender"] != undefined){
          
           this["defaultNameSender"] = obj["defaultNameSender"].toString() ;
           
        }
        
    
        
        if(obj["clientInfraUrl"] != undefined){
          
           this["clientInfraUrl"] = obj["clientInfraUrl"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "service_trainingCoursesService" ;

        
              /**
        url de la bdd des sessions
        */
               public "apiSession":string ;
              
       
              /**
        url du licence service
        */
               public "licenceServiceUrl":string ;
              
       
              /**
        signinServiceUrl
        */
               public "signinServiceUrl"?:string ;
              
       
              /**
        url du service de gestion des tache planifier
        */
               public "taskServiceUrl":string ;
              
       
              /**
        url du service d'envoie de mail
        */
               public "mailServiceUrl":string ;
              
       
              /**
        default Sender params
        */
               public "defaultSender"?:Interface.ImailSenderParams;
              
       
              /**
        default name sender for mail notifications
        */
               public "defaultNameSender"?:string ="Academy Daesign (dev)";
              
       
              /**
        l'url de la bd d'infra
        */
               public "clientInfraUrl":string ;
              
       


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
              
              if( isCompleteObj && (target["apiSession"] == null || target["apiSession"] == undefined) ){
                  throw new Error(path + "apiSession is required") ;
              }
              
              if(target["apiSession"] != null && target["apiSession"] != undefined ){
              
                let _apiSession  = target["apiSession"] ;
                

                 if(! _.isString(_apiSession)){
                    throw new Error(path+"apiSession is not a string") ;
                    
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
           
              
              if(target["signinServiceUrl"] != null && target["signinServiceUrl"] != undefined ){
              
                let _signinServiceUrl  = target["signinServiceUrl"] ;
                

                 if(! _.isString(_signinServiceUrl)){
                    throw new Error(path+"signinServiceUrl is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if( isCompleteObj && (target["taskServiceUrl"] == null || target["taskServiceUrl"] == undefined) ){
                  throw new Error(path + "taskServiceUrl is required") ;
              }
              
              if(target["taskServiceUrl"] != null && target["taskServiceUrl"] != undefined ){
              
                let _taskServiceUrl  = target["taskServiceUrl"] ;
                

                 if(! _.isString(_taskServiceUrl)){
                    throw new Error(path+"taskServiceUrl is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if( isCompleteObj && (target["mailServiceUrl"] == null || target["mailServiceUrl"] == undefined) ){
                  throw new Error(path + "mailServiceUrl is required") ;
              }
              
              if(target["mailServiceUrl"] != null && target["mailServiceUrl"] != undefined ){
              
                let _mailServiceUrl  = target["mailServiceUrl"] ;
                

                 if(! _.isString(_mailServiceUrl)){
                    throw new Error(path+"mailServiceUrl is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["defaultSender"] != null && target["defaultSender"] != undefined ){
              
                  let _defaultSender  = target["defaultSender"] ;
                  
                  
                    promArr.push( Index["mailSenderParams"].check(_defaultSender, isCompleteObj , path+"defaultSender.")
                      .catch((err)=>{
                        throw new Error(path+"defaultSender is not ") ;
                        

                      }) )
                  if(_defaultSender._class != null && _defaultSender._class != undefined){
                    promArr.push( Index[_defaultSender._class].check(_defaultSender, isCompleteObj , path+"defaultSender.")
                      .catch((err)=>{
                        throw new Error(path+"defaultSender is not a " + _defaultSender._class ) ;
                        

                      })
                    )
                  }

                  
              
              
           }
           
              
              if(target["defaultNameSender"] != null && target["defaultNameSender"] != undefined ){
              
                let _defaultNameSender  = target["defaultNameSender"] ;
                

                 if(! _.isString(_defaultNameSender)){
                    throw new Error(path+"defaultNameSender is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if( isCompleteObj && (target["clientInfraUrl"] == null || target["clientInfraUrl"] == undefined) ){
                  throw new Error(path + "clientInfraUrl is required") ;
              }
              
              if(target["clientInfraUrl"] != null && target["clientInfraUrl"] != undefined ){
              
                let _clientInfraUrl  = target["clientInfraUrl"] ;
                

                 if(! _.isString(_clientInfraUrl)){
                    throw new Error(path+"clientInfraUrl is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_service_trainingCoursesService>{
        return Model_service_trainingCoursesService.check(target, true, path).then(()=>{
          return new Model_service_trainingCoursesService(target) ;
        })
      }

   }

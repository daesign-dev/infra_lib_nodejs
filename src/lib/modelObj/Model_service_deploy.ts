import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;


import {Model_service } from "./Model_service"


/**
  Service qu'il est bien sympathique pour déployer des applications de qualité
*/
export class Model_service_deploy extends   Model_service   implements Interface.Iservice_deploy {

/**
  Service qu'il est bien sympathique pour déployer des applications de qualité
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["ssoBdUrl"] != undefined){
          
           this["ssoBdUrl"] = obj["ssoBdUrl"].toString() ;
           
        }
        
    
        
        if(obj["infraBdUrl"] != undefined){
          
           this["infraBdUrl"] = obj["infraBdUrl"].toString() ;
           
        }
        
    
        
        if(obj["platformBdUrl"] != undefined){
          
           this["platformBdUrl"] = obj["platformBdUrl"].toString() ;
           
        }
        
    
        
        if(obj["templateUriEnv"] != undefined){
          
           this["templateUriEnv"] = obj["templateUriEnv"].toString() ;
           
        }
        
    
        
        if(obj["daesignIdsRequired"] != undefined){
          
            if(obj._class){
              this["daesignIdsRequired"] =  new Index[obj._class](obj["daesignIdsRequired"]) ;
            }else{
              this["daesignIdsRequired"] =  new Index["daesignIdsRequired"](obj["daesignIdsRequired"]) ;
            }
          
        }
        
    
        
        if(obj["daesignApplications"] != undefined && obj["daesignApplications"] != null && _.isArray(obj["daesignApplications"])){
          

            this["daesignApplications"] = obj["daesignApplications"].map((value)=>{
              if(value._class){
                return new Index[value._class](value) ;
              }else{
                return new Index["daesignApplication"](value) ;
              }
            })
            
          
        }
        
    
        
        if(obj["daesignMobileApplications"] != undefined && obj["daesignMobileApplications"] != null && _.isArray(obj["daesignMobileApplications"])){
          

            this["daesignMobileApplications"] = obj["daesignMobileApplications"].map((value)=>{
              if(value._class){
                return new Index[value._class](value) ;
              }else{
                return new Index["daesignMobileApplication"](value) ;
              }
            })
            
          
        }
        
    
        
        if(obj["nginxDomainsConfigurations"] != undefined && obj["nginxDomainsConfigurations"] != null && _.isArray(obj["nginxDomainsConfigurations"])){
          

            this["nginxDomainsConfigurations"] = obj["nginxDomainsConfigurations"].map((value)=>{
              if(value._class){
                return new Index[value._class](value) ;
              }else{
                return new Index["nginxDomainConfiguration"](value) ;
              }
            })
            
          
        }
        
    
        
        if(obj["infraServiceUrl"] != undefined){
          
           this["infraServiceUrl"] = obj["infraServiceUrl"].toString() ;
           
        }
        
    
        
        if(obj["nginxSgamesServicesUrl"] != undefined){
          
           this["nginxSgamesServicesUrl"] = obj["nginxSgamesServicesUrl"].toString() ;
           
        }
        
    
        
        if(obj["nginxSgamesSupvUrl"] != undefined){
          
           this["nginxSgamesSupvUrl"] = obj["nginxSgamesSupvUrl"].toString() ;
           
        }
        
    
        
        if(obj["mailToInfraSupvUrl"] != undefined){
          
           this["mailToInfraSupvUrl"] = obj["mailToInfraSupvUrl"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "service_deploy" ;

        
              /**
        The URL to the SSO database
        */
               public "ssoBdUrl":string ;
              
       
              /**
        The URL to the infra database
        */
               public "infraBdUrl":string ;
              
       
              /**
        The URL to the platform database
        */
               public "platformBdUrl":string ;
              
       
              /**
        This will be inject in the deployment template URIs
        */
               public "templateUriEnv"?:string ;
              
       
              /**
        The daesign IDS required
        */
               public "daesignIdsRequired"?:Interface.IdaesignIdsRequired;
              
       
              /**
        The daesign applications references
        */
               public "daesignApplications"?:Interface.IdaesignApplication[];
              
       
              /**
        The daesign mobile applications description
        */
               public "daesignMobileApplications"?:Interface.IdaesignMobileApplication[];
              
       
              /**
        nginx configurations by domains
        */
               public "nginxDomainsConfigurations"?:Interface.InginxDomainConfiguration[];
              
       
              /**
        The url of the infra service
        */
               public "infraServiceUrl"?:string ;
              
       
              /**
        URL used to reload service conf
        */
               public "nginxSgamesServicesUrl"?:string ;
              
       
              /**
        URL used to reload supervisor
        */
               public "nginxSgamesSupvUrl"?:string ;
              
       
              /**
        The supervisor URL for mailToInfra service
        */
               public "mailToInfraSupvUrl"?:string ;
              
       


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
              
              if( isCompleteObj && (target["ssoBdUrl"] == null || target["ssoBdUrl"] == undefined) ){
                  throw new Error(path + "ssoBdUrl is required") ;
              }
              
              if(target["ssoBdUrl"] != null && target["ssoBdUrl"] != undefined ){
              
                let _ssoBdUrl  = target["ssoBdUrl"] ;
                

                 if(! _.isString(_ssoBdUrl)){
                    throw new Error(path+"ssoBdUrl is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if( isCompleteObj && (target["infraBdUrl"] == null || target["infraBdUrl"] == undefined) ){
                  throw new Error(path + "infraBdUrl is required") ;
              }
              
              if(target["infraBdUrl"] != null && target["infraBdUrl"] != undefined ){
              
                let _infraBdUrl  = target["infraBdUrl"] ;
                

                 if(! _.isString(_infraBdUrl)){
                    throw new Error(path+"infraBdUrl is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if( isCompleteObj && (target["platformBdUrl"] == null || target["platformBdUrl"] == undefined) ){
                  throw new Error(path + "platformBdUrl is required") ;
              }
              
              if(target["platformBdUrl"] != null && target["platformBdUrl"] != undefined ){
              
                let _platformBdUrl  = target["platformBdUrl"] ;
                

                 if(! _.isString(_platformBdUrl)){
                    throw new Error(path+"platformBdUrl is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["templateUriEnv"] != null && target["templateUriEnv"] != undefined ){
              
                let _templateUriEnv  = target["templateUriEnv"] ;
                

                 if(! _.isString(_templateUriEnv)){
                    throw new Error(path+"templateUriEnv is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["daesignIdsRequired"] != null && target["daesignIdsRequired"] != undefined ){
              
                  let _daesignIdsRequired  = target["daesignIdsRequired"] ;
                  
                  
                    promArr.push( Index["daesignIdsRequired"].check(_daesignIdsRequired, isCompleteObj , path+"daesignIdsRequired.")
                      .catch((err)=>{
                        throw new Error(path+"daesignIdsRequired is not ") ;
                        

                      }) )
                  if(_daesignIdsRequired._class != null && _daesignIdsRequired._class != undefined){
                    promArr.push( Index[_daesignIdsRequired._class].check(_daesignIdsRequired, isCompleteObj , path+"daesignIdsRequired.")
                      .catch((err)=>{
                        throw new Error(path+"daesignIdsRequired is not a " + _daesignIdsRequired._class ) ;
                        

                      })
                    )
                  }

                  
              
              
           }
           
              
              if(target["daesignApplications"] != null && target["daesignApplications"] != undefined ){
              
                  target["daesignApplications"].forEach((_daesignApplications , index:number)=>{
                  
                  
                    promArr.push( Index["daesignApplication"].check(_daesignApplications, isCompleteObj , path+"daesignApplications.")
                      .catch((err)=>{
                        throw new Error(path+"daesignApplications index: "+ index +"is not daesignApplication")
                        

                      }) )
                  if(_daesignApplications._class != null && _daesignApplications._class != undefined){
                    promArr.push( Index[_daesignApplications._class].check(_daesignApplications, isCompleteObj , path+"daesignApplications.")
                      .catch((err)=>{
                        throw new Error(path+"daesignApplications index: "+ index +"is not a " + _daesignApplications._class )
                        

                      })
                    )
                  }

                  });
              
              
           }
           
              
              if(target["daesignMobileApplications"] != null && target["daesignMobileApplications"] != undefined ){
              
                  target["daesignMobileApplications"].forEach((_daesignMobileApplications , index:number)=>{
                  
                  
                    promArr.push( Index["daesignMobileApplication"].check(_daesignMobileApplications, isCompleteObj , path+"daesignMobileApplications.")
                      .catch((err)=>{
                        throw new Error(path+"daesignMobileApplications index: "+ index +"is not daesignMobileApplication")
                        

                      }) )
                  if(_daesignMobileApplications._class != null && _daesignMobileApplications._class != undefined){
                    promArr.push( Index[_daesignMobileApplications._class].check(_daesignMobileApplications, isCompleteObj , path+"daesignMobileApplications.")
                      .catch((err)=>{
                        throw new Error(path+"daesignMobileApplications index: "+ index +"is not a " + _daesignMobileApplications._class )
                        

                      })
                    )
                  }

                  });
              
              
           }
           
              
              if(target["nginxDomainsConfigurations"] != null && target["nginxDomainsConfigurations"] != undefined ){
              
                  target["nginxDomainsConfigurations"].forEach((_nginxDomainsConfigurations , index:number)=>{
                  
                  
                    promArr.push( Index["nginxDomainConfiguration"].check(_nginxDomainsConfigurations, isCompleteObj , path+"nginxDomainsConfigurations.")
                      .catch((err)=>{
                        throw new Error(path+"nginxDomainsConfigurations index: "+ index +"is not nginxDomainConfiguration")
                        

                      }) )
                  if(_nginxDomainsConfigurations._class != null && _nginxDomainsConfigurations._class != undefined){
                    promArr.push( Index[_nginxDomainsConfigurations._class].check(_nginxDomainsConfigurations, isCompleteObj , path+"nginxDomainsConfigurations.")
                      .catch((err)=>{
                        throw new Error(path+"nginxDomainsConfigurations index: "+ index +"is not a " + _nginxDomainsConfigurations._class )
                        

                      })
                    )
                  }

                  });
              
              
           }
           
              
              if(target["infraServiceUrl"] != null && target["infraServiceUrl"] != undefined ){
              
                let _infraServiceUrl  = target["infraServiceUrl"] ;
                

                 if(! _.isString(_infraServiceUrl)){
                    throw new Error(path+"infraServiceUrl is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["nginxSgamesServicesUrl"] != null && target["nginxSgamesServicesUrl"] != undefined ){
              
                let _nginxSgamesServicesUrl  = target["nginxSgamesServicesUrl"] ;
                

                 if(! _.isString(_nginxSgamesServicesUrl)){
                    throw new Error(path+"nginxSgamesServicesUrl is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["nginxSgamesSupvUrl"] != null && target["nginxSgamesSupvUrl"] != undefined ){
              
                let _nginxSgamesSupvUrl  = target["nginxSgamesSupvUrl"] ;
                

                 if(! _.isString(_nginxSgamesSupvUrl)){
                    throw new Error(path+"nginxSgamesSupvUrl is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["mailToInfraSupvUrl"] != null && target["mailToInfraSupvUrl"] != undefined ){
              
                let _mailToInfraSupvUrl  = target["mailToInfraSupvUrl"] ;
                

                 if(! _.isString(_mailToInfraSupvUrl)){
                    throw new Error(path+"mailToInfraSupvUrl is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_service_deploy>{
        return Model_service_deploy.check(target, true, path).then(()=>{
          return new Model_service_deploy(target) ;
        })
      }

   }

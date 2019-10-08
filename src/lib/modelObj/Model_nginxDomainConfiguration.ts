import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;



/**
  All informations needed for the nginx / hosting domain deployment
*/
export class Model_nginxDomainConfiguration extends  Base  implements Interface.InginxDomainConfiguration {

/**
  All informations needed for the nginx / hosting domain deployment
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["domainName"] != undefined){
          
           this["domainName"] = obj["domainName"].toString() ;
           
        }
        
    
        
        if(obj["nginxSuffix"] != undefined){
          
           this["nginxSuffix"] = obj["nginxSuffix"].toString() ;
           
        }
        
    
        
        if(obj["dnsZone"] != undefined){
          
           this["dnsZone"] = obj["dnsZone"].toString() ;
           
        }
        
    
        
        if(obj["dnsTarget"] != undefined){
          
           this["dnsTarget"] = obj["dnsTarget"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "nginxDomainConfiguration" ;

        
              /**
        The application Name
        */
               public "domainName":string ;
              
       
              /**
        The nginx suffix to use for this application
        */
               public "nginxSuffix":string ;
              
       
              /**
        The DNS Zone where the CNAME will be published
        */
               public "dnsZone":string ;
              
       
              /**
         The DNS Target where the CNAME will redirect
        */
               public "dnsTarget":string ;
              
       


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
              
              if( isCompleteObj && (target["domainName"] == null || target["domainName"] == undefined) ){
                  throw new Error(path + "domainName is required") ;
              }
              
              if(target["domainName"] != null && target["domainName"] != undefined ){
              
                let _domainName  = target["domainName"] ;
                

                 if(! _.isString(_domainName)){
                    throw new Error(path+"domainName is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if( isCompleteObj && (target["nginxSuffix"] == null || target["nginxSuffix"] == undefined) ){
                  throw new Error(path + "nginxSuffix is required") ;
              }
              
              if(target["nginxSuffix"] != null && target["nginxSuffix"] != undefined ){
              
                let _nginxSuffix  = target["nginxSuffix"] ;
                

                 if(! _.isString(_nginxSuffix)){
                    throw new Error(path+"nginxSuffix is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if( isCompleteObj && (target["dnsZone"] == null || target["dnsZone"] == undefined) ){
                  throw new Error(path + "dnsZone is required") ;
              }
              
              if(target["dnsZone"] != null && target["dnsZone"] != undefined ){
              
                let _dnsZone  = target["dnsZone"] ;
                

                 if(! _.isString(_dnsZone)){
                    throw new Error(path+"dnsZone is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if( isCompleteObj && (target["dnsTarget"] == null || target["dnsTarget"] == undefined) ){
                  throw new Error(path + "dnsTarget is required") ;
              }
              
              if(target["dnsTarget"] != null && target["dnsTarget"] != undefined ){
              
                let _dnsTarget  = target["dnsTarget"] ;
                

                 if(! _.isString(_dnsTarget)){
                    throw new Error(path+"dnsTarget is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_nginxDomainConfiguration>{
        return Model_nginxDomainConfiguration.check(target, true, path).then(()=>{
          return new Model_nginxDomainConfiguration(target) ;
        })
      }

   }

import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;


import {Model_application_configuration_web } from "./Model_application_configuration_web"


/**
  generic conf
*/
export class Model_application_configuration_adaptivmath_teacher extends   Model_application_configuration_web   implements Interface.Iapplication_configuration_adaptivmath_teacher {

/**
  generic conf
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["configurationUrlDb"] != undefined){
          
           this["configurationUrlDb"] = obj["configurationUrlDb"].toString() ;
           
        }
        
    
        
        if(obj["urlBase"] != undefined){
          
           this["urlBase"] = obj["urlBase"].toString() ;
           
        }
        
    
        
        if(obj["clientServiceUrl"] != undefined){
          
           this["clientServiceUrl"] = obj["clientServiceUrl"].toString() ;
           
        }
        
    
        
        if(obj["aclTemplate"] != undefined){
          
            if(obj._class){
              this["aclTemplate"] =  new Index[obj._class](obj["aclTemplate"]) ;
            }else{
              this["aclTemplate"] =  new Index["_acl"](obj["aclTemplate"]) ;
            }
          
        }
        
    
        
        if(obj["clusteringServiceUrl"] != undefined){
          
           this["clusteringServiceUrl"] = obj["clusteringServiceUrl"].toString() ;
           
        }
        
    
        
        if(obj["module_validity"] != undefined && obj["module_validity"] != null && _.isArray(obj["module_validity"])){
          

            this["module_validity"] = obj["module_validity"].map((value)=>{
              if(value._class){
                return new Index[value._class](value) ;
              }else{
                return new Index["module_validity"](value) ;
              }
            })
            
          
        }
        
    
  }
  

    public _class:string  = "application_configuration_adaptivmath_teacher" ;

        
              /**
        c'est l'url de la base de donnée de l'application
        */
               public "configurationUrlDb":string ;
              
       
              /**
        url racine des services
        */
               public "urlBase":string ;
              
       
              /**
        url du service d'acces au info client
        */
               public "clientServiceUrl":string ;
              
       
              /**
        template générique a appliquer aux enregistrements
        */
               public "aclTemplate"?:Interface.I_acl;
              
       
              /**
        clustering url
        */
               public "clusteringServiceUrl"?:string ;
              
       
              /**
        module validity flag
        */
               public "module_validity"?:Interface.Imodule_validity[];
              
       


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
           
              
              if( isCompleteObj && (target["clientServiceUrl"] == null || target["clientServiceUrl"] == undefined) ){
                  throw new Error(path + "clientServiceUrl is required") ;
              }
              
              if(target["clientServiceUrl"] != null && target["clientServiceUrl"] != undefined ){
              
                let _clientServiceUrl  = target["clientServiceUrl"] ;
                

                 if(! _.isString(_clientServiceUrl)){
                    throw new Error(path+"clientServiceUrl is not a string") ;
                    
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
           
              
              if(target["clusteringServiceUrl"] != null && target["clusteringServiceUrl"] != undefined ){
              
                let _clusteringServiceUrl  = target["clusteringServiceUrl"] ;
                

                 if(! _.isString(_clusteringServiceUrl)){
                    throw new Error(path+"clusteringServiceUrl is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["module_validity"] != null && target["module_validity"] != undefined ){
              
                  target["module_validity"].forEach((_module_validity , index:number)=>{
                  
                  
                    promArr.push( Index["module_validity"].check(_module_validity, isCompleteObj , path+"module_validity.")
                      .catch((err)=>{
                        throw new Error(path+"module_validity index: "+ index +"is not module_validity")
                        

                      }) )
                  if(_module_validity._class != null && _module_validity._class != undefined){
                    promArr.push( Index[_module_validity._class].check(_module_validity, isCompleteObj , path+"module_validity.")
                      .catch((err)=>{
                        throw new Error(path+"module_validity index: "+ index +"is not a " + _module_validity._class )
                        

                      })
                    )
                  }

                  });
              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_application_configuration_adaptivmath_teacher>{
        return Model_application_configuration_adaptivmath_teacher.check(target, true, path).then(()=>{
          return new Model_application_configuration_adaptivmath_teacher(target) ;
        })
      }

   }

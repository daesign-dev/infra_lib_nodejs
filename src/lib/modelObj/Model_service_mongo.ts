import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;


import {Model_service } from "./Model_service"


/**
  configure un service mongo
*/
export class Model_service_mongo extends   Model_service   implements Interface.Iservice_mongo {

/**
  configure un service mongo
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["mongoosePath"] != undefined){
          
           this["mongoosePath"] = obj["mongoosePath"].toString() ;
           
        }
        
    
        
        if(obj["mongoAuthSource"] != undefined){
          
           this["mongoAuthSource"] = obj["mongoAuthSource"].toString() ;
           
        }
        
    
        
        if(obj["secretKey"] != undefined){
          
           this["secretKey"] = obj["secretKey"].toString() ;
           
        }
        
    
        
        if(obj["mongoPoolSize"] != undefined){
          
           this["mongoPoolSize"] = new Number(obj["mongoPoolSize"]).valueOf();
          
        }
        
    
  }
  

    public _class:string  = "service_mongo" ;

        
              /**
        l'url de connection a mongodb
        */
               public "mongoosePath"?:string ;
              
       
              /**
        le nom de la base sur laquelle la connexion doit s'établir. Cela permet de pouvoir créer des bases automatiquements
        */
               public "mongoAuthSource"?:string ;
              
       
              /**
        clef secrète de communication interne a l'infra
        */
               public "secretKey"?:string ="$$ENV.SECRET";
              
       
              /**
        The max pool size for mongo connection
        */
               public "mongoPoolSize"?:number =5;
              
       


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
              
              if(target["mongoosePath"] != null && target["mongoosePath"] != undefined ){
              
                let _mongoosePath  = target["mongoosePath"] ;
                

                 if(! _.isString(_mongoosePath)){
                    throw new Error(path+"mongoosePath is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["mongoAuthSource"] != null && target["mongoAuthSource"] != undefined ){
              
                let _mongoAuthSource  = target["mongoAuthSource"] ;
                

                 if(! _.isString(_mongoAuthSource)){
                    throw new Error(path+"mongoAuthSource is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["secretKey"] != null && target["secretKey"] != undefined ){
              
                let _secretKey  = target["secretKey"] ;
                

                 if(! _.isString(_secretKey)){
                    throw new Error(path+"secretKey is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["mongoPoolSize"] != null && target["mongoPoolSize"] != undefined ){
              
                let _mongoPoolSize  = target["mongoPoolSize"] ;
                
                  if(! _.isNumber(_mongoPoolSize)){
                      throw new Error(path+"mongoPoolSize is not a number") ;
                      
                  }
                  
                  if(_mongoPoolSize > 5){
                    throw new Error(path+"mongoPoolSize must be greater than  5" ) ;
                    
                  }
                
                
                  if(_mongoPoolSize < 1000){
                    throw new Error(path+"mongoPoolSize must be less than 1000" ) ;
                    
                  }
                
                
                  if(_mongoPoolSize % 1 > 0){
                    throw new Error(path+"mongoPoolSize must be have a step of 1" ) ;
                    
                  }
                

                
              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_service_mongo>{
        return Model_service_mongo.check(target, true, path).then(()=>{
          return new Model_service_mongo(target) ;
        })
      }

   }

import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;



/**
  List of files stored in a cloud storage
*/
export class Model_cloudStorageFiles extends  Base  implements Interface.IcloudStorageFiles {

/**
  List of files stored in a cloud storage
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["name"] != undefined){
          
           this["name"] = obj["name"].toString() ;
           
        }
        
    
        
        if(obj["uri"] != undefined){
          
           this["uri"] = obj["uri"].toString() ;
           
        }
        
    
        
        if(obj["tags"] != undefined && obj["tags"] != null && _.isArray(obj["tags"])){
          
           this["tags"] = obj["tags"].map((value)=>{
              return value.toString();
            })
          
        }
        
    
        
        if(obj["type"] != undefined){
          
           this["type"] = obj["type"].toString() ;
           
        }
        
    
        
        if(obj["mimeType"] != undefined){
          
           this["mimeType"] = obj["mimeType"].toString() ;
           
        }
        
    
        
        if(obj["creationDate"] != undefined){
          
            this["creationDate"] = new Date(obj["creationDate"]) ;
          
        }
        
    
  }
  

    public _class:string  = "cloudStorageFiles" ;

        
              /**
        Name of the file
        */
               public "name":string ;
              
       
              /**
        The URI of the resource
        */
               public "uri"?:string ;
              
       
              /**
        List of string used to filter files
        */
               public "tags"?:string[];
              
       
              /**
        The ressource type (eg. Scorm, Img )
        */
               public "type":string ;
              
       
              /**
        The raw file mime-type from the PUT headers
        */
               public "mimeType":string ;
              
       
              /**
        Date of creation of the file
        */
               public "creationDate":Date ;
              
       


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
              
              if( isCompleteObj && (target["name"] == null || target["name"] == undefined) ){
                  throw new Error(path + "name is required") ;
              }
              
              if(target["name"] != null && target["name"] != undefined ){
              
                let _name  = target["name"] ;
                

                 if(! _.isString(_name)){
                    throw new Error(path+"name is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["uri"] != null && target["uri"] != undefined ){
              
                let _uri  = target["uri"] ;
                

                 if(! _.isString(_uri)){
                    throw new Error(path+"uri is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["tags"] != null && target["tags"] != undefined ){
              
                target["tags"].forEach((_tags , index:number)=>{
                

                 if(! _.isString(_tags)){
                    throw new Error(path+"tags index: "+ index +"is not a string")
                    
                  }
                  
                  
                 });
              
              
           }
           
              
              if( isCompleteObj && (target["type"] == null || target["type"] == undefined) ){
                  throw new Error(path + "type is required") ;
              }
              
              if(target["type"] != null && target["type"] != undefined ){
              
                let _type  = target["type"] ;
                

                 if(! _.isString(_type)){
                    throw new Error(path+"type is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if( isCompleteObj && (target["mimeType"] == null || target["mimeType"] == undefined) ){
                  throw new Error(path + "mimeType is required") ;
              }
              
              if(target["mimeType"] != null && target["mimeType"] != undefined ){
              
                let _mimeType  = target["mimeType"] ;
                

                 if(! _.isString(_mimeType)){
                    throw new Error(path+"mimeType is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if( isCompleteObj && (target["creationDate"] == null || target["creationDate"] == undefined) ){
                  throw new Error(path + "creationDate is required") ;
              }
              
              if(target["creationDate"] != null && target["creationDate"] != undefined ){
              
                let _creationDate  = target["creationDate"] ;
                
                if(! _.isDate(_creationDate)){

                      throw new Error(path+"creationDate is not a Date") ;
                      
                }
                
                
                
              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_cloudStorageFiles>{
        return Model_cloudStorageFiles.check(target, true, path).then(()=>{
          return new Model_cloudStorageFiles(target) ;
        })
      }

   }

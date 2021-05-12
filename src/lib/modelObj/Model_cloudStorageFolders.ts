import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;



/**
  List of folders stored in a cloud storage with ACL
*/
export class Model_cloudStorageFolders extends  Base  implements Interface.IcloudStorageFolders {

/**
  List of folders stored in a cloud storage with ACL
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["name"] != undefined){
          
           this["name"] = obj["name"].toString() ;
           
        }
        
    
        
        if(obj["parent"] != undefined){
          
          if(_.isString(obj["parent"])){
            this["parent"] = obj["parent"];
          }else if(obj["parent"]._id){
            this["parent"] = obj["parent"]._id ;
          }
          
        }
        
    
        
        if(obj["files"] != undefined && obj["files"] != null && _.isArray(obj["files"])){
          
          this["files"] = obj["files"].map((value)=>{
            if(_.isString(value)){
              return value ;
            }else if(value._id){
              return value._id ;
            }
          })
          
          
        }
        
    
        
        if(obj["_acl"] != undefined){
          
            if(obj._class){
              this["_acl"] =  new Index[obj._class](obj["_acl"]) ;
            }else{
              this["_acl"] =  new Index["_acl"](obj["_acl"]) ;
            }
          
        }
        
    
  }
  

    public _class:string  = "cloudStorageFolders" ;

        
              /**
        Name of the folder 
        */
               public "name":string ;
              
       
              /**
        The linked parent of the folder
        */
               public "parent"?:string ;
              
       
              /**
        Files associated to the folder
        */
               public "files"?:string[] ;
              
       
              /**
        Access Control List of the folder
        */
               public "_acl"?:Interface.I_acl;
              
       


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
           
              
              if(target["parent"] != null && target["parent"] != undefined ){
              
                  let _parent  = target["parent"] ;
                  
                  if( ! _.isString(_parent)){
                   throw new Error(path + "parent is not a string") ;
                  }
                  

              
              
           }
           
              
              if(target["files"] != null && target["files"] != undefined ){
              
                  target["files"].forEach((_files , index:number)=>{
                  
                  if( ! _.isString(_files)){
                   throw new Error(path + "files is not a string") ;
                  }
                  });

              
              
           }
           
              
              if(target["_acl"] != null && target["_acl"] != undefined ){
              
                  let __acl  = target["_acl"] ;
                  
                  
                    promArr.push( Index["_acl"].check(__acl, isCompleteObj , path+"_acl.")
                      .catch((err)=>{
                        throw new Error(path+"_acl is not ") ;
                        

                      }) )
                  if(__acl._class != null && __acl._class != undefined){
                    promArr.push( Index[__acl._class].check(__acl, isCompleteObj , path+"_acl.")
                      .catch((err)=>{
                        throw new Error(path+"_acl is not a " + __acl._class ) ;
                        

                      })
                    )
                  }

                  
              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_cloudStorageFolders>{
        return Model_cloudStorageFolders.check(target, true, path).then(()=>{
          return new Model_cloudStorageFolders(target) ;
        })
      }

   }

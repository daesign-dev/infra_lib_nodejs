import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;



/**
  Définit le code pour une langue (se référer au code ISO 639 : https://fr.wikipedia.org/wiki/Liste_des_codes_ISO_639-1)
*/
export class Model_lang_code extends  Base  implements Interface.Ilang_code {

/**
  Définit le code pour une langue (se référer au code ISO 639 : https://fr.wikipedia.org/wiki/Liste_des_codes_ISO_639-1)
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["code"] != undefined){
          
           this["code"] = obj["code"].toString() ;
           
        }
        
    
        
        if(obj["name"] != undefined){
          
           this["name"] = obj["name"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "lang_code" ;

        
              /**
        Code de la langue
        */
               public "code":string ;
              
       
              /**
        Nom dans la langue correspondante
        */
               public "name"?:string ;
              
       


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
              
              if( isCompleteObj && (target["code"] == null || target["code"] == undefined) ){
                  throw new Error(path + "code is required") ;
              }
              
              if(target["code"] != null && target["code"] != undefined ){
              
                let _code  = target["code"] ;
                

                 if(! _.isString(_code)){
                    throw new Error(path+"code is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["name"] != null && target["name"] != undefined ){
              
                let _name  = target["name"] ;
                

                 if(! _.isString(_name)){
                    throw new Error(path+"name is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_lang_code>{
        return Model_lang_code.check(target, true, path).then(()=>{
          return new Model_lang_code(target) ;
        })
      }

   }

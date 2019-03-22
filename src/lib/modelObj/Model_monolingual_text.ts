import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;



/**
  Définit un texte dans une langue
*/
export class Model_monolingual_text extends  Base  implements Interface.Imonolingual_text {

/**
  Définit un texte dans une langue
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["lang"] != undefined){
          
          if(_.isString(obj["lang"])){
            this["lang"] = obj["lang"];
          }else if(obj["lang"]._id){
            this["lang"] = obj["lang"]._id ;
          }
          
        }
        
    
        
        if(obj["texte"] != undefined){
          
           this["texte"] = obj["texte"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "monolingual_text" ;

        
              /**
        Définit dans quelle langue est le texte
        */
               public "lang"?:string ;
              
       
              /**
        Définit le texte dans la langue choisi
        */
               public "texte"?:string ;
              
       


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
              
              if(target["lang"] != null && target["lang"] != undefined ){
              
                  let _lang  = target["lang"] ;
                  
                  if( ! _.isString(_lang)){
                   throw new Error(path + "lang is not a string") ;
                  }
                  

              
              
           }
           
              
              if(target["texte"] != null && target["texte"] != undefined ){
              
                let _texte  = target["texte"] ;
                

                 if(! _.isString(_texte)){
                    throw new Error(path+"texte is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_monolingual_text>{
        return Model_monolingual_text.check(target, true, path).then(()=>{
          return new Model_monolingual_text(target) ;
        })
      }

   }

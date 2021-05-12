import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;



/**
  Définit un texte multilingue
*/
export class Model_multilingual_text extends  Base  implements Interface.Imultilingual_text {

/**
  Définit un texte multilingue
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["name"] != undefined){
          
           this["name"] = obj["name"].toString() ;
           
        }
        
    
        
        if(obj["description"] != undefined){
          
           this["description"] = obj["description"].toString() ;
           
        }
        
    
        
        if(obj["texts"] != undefined && obj["texts"] != null && _.isArray(obj["texts"])){
          

            this["texts"] = obj["texts"].map((value)=>{
              if(value._class){
                return new Index[value._class](value) ;
              }else{
                return new Index["monolingual_text"](value) ;
              }
            })
            
          
        }
        
    
  }
  

    public _class:string  = "multilingual_text" ;

        
              /**
        Nom du texte pour le retrouver plus facilement.
        */
               public "name":string ;
              
       
              /**
        Description pour retrouver facilement l'objet
        */
               public "description"?:string ;
              
       
              /**
        Liste des textes dans les différentes langue
        */
               public "texts"?:Interface.Imonolingual_text[];
              
       


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
           
              
              if(target["description"] != null && target["description"] != undefined ){
              
                let _description  = target["description"] ;
                

                 if(! _.isString(_description)){
                    throw new Error(path+"description is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["texts"] != null && target["texts"] != undefined ){
              
                  target["texts"].forEach((_texts , index:number)=>{
                  
                  
                    promArr.push( Index["monolingual_text"].check(_texts, isCompleteObj , path+"texts.")
                      .catch((err)=>{
                        throw new Error(path+"texts index: "+ index +"is not monolingual_text")
                        

                      }) )
                  if(_texts._class != null && _texts._class != undefined){
                    promArr.push( Index[_texts._class].check(_texts, isCompleteObj , path+"texts.")
                      .catch((err)=>{
                        throw new Error(path+"texts index: "+ index +"is not a " + _texts._class )
                        

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

      public static create(target:any, path:string=""):Promise<Model_multilingual_text>{
        return Model_multilingual_text.check(target, true, path).then(()=>{
          return new Model_multilingual_text(target) ;
        })
      }

   }

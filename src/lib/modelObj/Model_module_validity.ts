import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;



/**
  module ID validy for adaptivmat app teacher
*/
export class Model_module_validity extends  Base  implements Interface.Imodule_validity {

/**
  module ID validy for adaptivmat app teacher
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["module"] != undefined){
          
          if(_.isString(obj["module"])){
            this["module"] = obj["module"];
          }else if(obj["module"]._id){
            this["module"] = obj["module"]._id ;
          }
          
        }
        
    
        
        if(obj["enable"] != undefined){
          
           this["enable"] = new Boolean(obj["enable"]).valueOf() ;
          
        }
        
    
  }
  

    public _class:string  = "module_validity" ;

        
              /**
        module id
        */
               public "module"?:string ;
              
       
              /**
        enable
        */
               public "enable"?:boolean ;
              
       


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
              
              if(target["module"] != null && target["module"] != undefined ){
              
                  let _module  = target["module"] ;
                  
                  if( ! _.isString(_module)){
                   throw new Error(path + "module is not a string") ;
                  }
                  

              
              
           }
           
              
              if(target["enable"] != null && target["enable"] != undefined ){
              
                let _enable  = target["enable"] ;
                
                  if(! _.isBoolean(_enable)){
                    throw new Error(path+"enable is not a boolean") ;
                    
                  }
                

              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_module_validity>{
        return Model_module_validity.check(target, true, path).then(()=>{
          return new Model_module_validity(target) ;
        })
      }

   }

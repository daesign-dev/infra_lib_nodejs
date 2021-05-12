import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;



/**
  Templates collection used by the deployment service
*/
export class Model_deploy_template extends  Base  implements Interface.Ideploy_template {

/**
  Templates collection used by the deployment service
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["name"] != undefined){
          
           this["name"] = obj["name"].toString() ;
           
        }
        
    
        
        if(obj["template"] != undefined){
          
           this["template"] = obj["template"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "deploy_template" ;

        
              /**
        The template name
        */
               public "name"?:string ;
              
       
              /**
        The JSON template used by lodash
        */
               public "template"?:string ;
              
       


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
              
              if(target["name"] != null && target["name"] != undefined ){
              
                let _name  = target["name"] ;
                

                 if(! _.isString(_name)){
                    throw new Error(path+"name is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["template"] != null && target["template"] != undefined ){
              
                let _template  = target["template"] ;
                

                 if(! _.isString(_template)){
                    throw new Error(path+"template is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_deploy_template>{
        return Model_deploy_template.check(target, true, path).then(()=>{
          return new Model_deploy_template(target) ;
        })
      }

   }

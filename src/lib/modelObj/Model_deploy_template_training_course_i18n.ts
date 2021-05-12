import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;


import {Model_deploy_template } from "./Model_deploy_template"


/**
  Template used by deploy service - training course internationalisation
*/
export class Model_deploy_template_training_course_i18n extends   Model_deploy_template   implements Interface.Ideploy_template_training_course_i18n {

/**
  Template used by deploy service - training course internationalisation
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
        
    
        
        if(obj["parentTemplate"] != undefined){
          
          if(_.isString(obj["parentTemplate"])){
            this["parentTemplate"] = obj["parentTemplate"];
          }else if(obj["parentTemplate"]._id){
            this["parentTemplate"] = obj["parentTemplate"]._id ;
          }
          
        }
        
    
  }
  

    public _class:string  = "deploy_template_training_course_i18n" ;

        
              /**
        Langage
        */
               public "lang"?:string ;
              
       
              /**
        The template that is related to
        */
               public "parentTemplate"?:string ;
              
       


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
           
              
              if(target["parentTemplate"] != null && target["parentTemplate"] != undefined ){
              
                  let _parentTemplate  = target["parentTemplate"] ;
                  
                  if( ! _.isString(_parentTemplate)){
                   throw new Error(path + "parentTemplate is not a string") ;
                  }
                  

              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_deploy_template_training_course_i18n>{
        return Model_deploy_template_training_course_i18n.check(target, true, path).then(()=>{
          return new Model_deploy_template_training_course_i18n(target) ;
        })
      }

   }

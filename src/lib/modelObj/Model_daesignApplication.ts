import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;



/**
  daesignApplication
*/
export class Model_daesignApplication extends  Base  implements Interface.IdaesignApplication {

/**
  daesignApplication
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["id"] != undefined){
          
           this["id"] = obj["id"].toString() ;
           
        }
        
    
        
        if(obj["name"] != undefined){
          
           this["name"] = obj["name"].toString() ;
           
        }
        
    
        
        if(obj["domainToInstallOn"] != undefined){
          
           this["domainToInstallOn"] = obj["domainToInstallOn"].toString() ;
           
        }
        
    
        
        if(obj["appInstanceNameSuffix"] != undefined){
          
           this["appInstanceNameSuffix"] = obj["appInstanceNameSuffix"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "daesignApplication" ;

        
              /**
        The application ID
        */
               public "id":string ;
              
       
              /**
        Name of the application
        */
               public "name"?:string ;
              
       
              /**
        The DNS domain to install on OVH
        */
               public "domainToInstallOn"?:string ;
              
       
              /**
        Application instance name used as suffix
        */
               public "appInstanceNameSuffix"?:string ;
              
       


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
              
              if( isCompleteObj && (target["id"] == null || target["id"] == undefined) ){
                  throw new Error(path + "id is required") ;
              }
              
              if(target["id"] != null && target["id"] != undefined ){
              
                let _id  = target["id"] ;
                

                 if(! _.isString(_id)){
                    throw new Error(path+"id is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["name"] != null && target["name"] != undefined ){
              
                let _name  = target["name"] ;
                

                 if(! _.isString(_name)){
                    throw new Error(path+"name is not a string") ;
                    
                  }
                  
                  
                    let _enum_name:string[] = ["appClient","appApprenant","appCoach","appDialogEditor","appSavvyAuthor","appSavvyAuthorAdmin","SavvyLearner"] ;
                    if(_enum_name.indexOf(_name)==-1){
                        throw new Error(path+"name dont match one of appClient , appApprenant , appCoach , appDialogEditor , appSavvyAuthor , appSavvyAuthorAdmin , SavvyLearner" ) ;
                        
                    }
                  
                 
              
              
           }
           
              
              if(target["domainToInstallOn"] != null && target["domainToInstallOn"] != undefined ){
              
                let _domainToInstallOn  = target["domainToInstallOn"] ;
                

                 if(! _.isString(_domainToInstallOn)){
                    throw new Error(path+"domainToInstallOn is not a string") ;
                    
                  }
                  
                  
                    let _enum_domainToInstallOn:string[] = [".daesign.com",".savvy-author.com",".savvy-learner.com"] ;
                    if(_enum_domainToInstallOn.indexOf(_domainToInstallOn)==-1){
                        throw new Error(path+"domainToInstallOn dont match one of .daesign.com , .savvy-author.com , .savvy-learner.com" ) ;
                        
                    }
                  
                 
              
              
           }
           
              
              if(target["appInstanceNameSuffix"] != null && target["appInstanceNameSuffix"] != undefined ){
              
                let _appInstanceNameSuffix  = target["appInstanceNameSuffix"] ;
                

                 if(! _.isString(_appInstanceNameSuffix)){
                    throw new Error(path+"appInstanceNameSuffix is not a string") ;
                    
                  }
                  
                  
                    let _enum_appInstanceNameSuffix:string[] = ["-adminacademy","-academy","-mentoracademy","-dialogeditor","-savvyauthor","-adminsavvyauthor",""] ;
                    if(_enum_appInstanceNameSuffix.indexOf(_appInstanceNameSuffix)==-1){
                        throw new Error(path+"appInstanceNameSuffix dont match one of -adminacademy , -academy , -mentoracademy , -dialogeditor , -savvyauthor , -adminsavvyauthor , " ) ;
                        
                    }
                  
                 
              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_daesignApplication>{
        return Model_daesignApplication.check(target, true, path).then(()=>{
          return new Model_daesignApplication(target) ;
        })
      }

   }

import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;



/**
  redirection_map
*/
export class Model_redirection_map extends  Base  implements Interface.Iredirection_map {

/**
  redirection_map
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["activation"] != undefined && obj["activation"] != null && _.isArray(obj["activation"])){
          

            this["activation"] = obj["activation"].map((value)=>{
              if(value._class){
                return new Index[value._class](value) ;
              }else{
                return new Index["activation_map"](value) ;
              }
            })
            
          
        }
        
    
  }
  

    public _class:string  = "redirection_map" ;

        
              /**
        activation
        */
               public "activation"?:Interface.Iactivation_map[];
              
       


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
              
              if(target["activation"] != null && target["activation"] != undefined ){
              
                  target["activation"].forEach((_activation , index:number)=>{
                  
                  
                    promArr.push( Index["activation_map"].check(_activation, isCompleteObj , path+"activation.")
                      .catch((err)=>{
                        throw new Error(path+"activation index: "+ index +"is not activation_map")
                        

                      }) )
                  if(_activation._class != null && _activation._class != undefined){
                    promArr.push( Index[_activation._class].check(_activation, isCompleteObj , path+"activation.")
                      .catch((err)=>{
                        throw new Error(path+"activation index: "+ index +"is not a " + _activation._class )
                        

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

      public static create(target:any, path:string=""):Promise<Model_redirection_map>{
        return Model_redirection_map.check(target, true, path).then(()=>{
          return new Model_redirection_map(target) ;
        })
      }

   }

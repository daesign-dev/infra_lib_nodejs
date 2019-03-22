import * as Interface from "./Interfaces";
import { Model_service } from "./Model_service";
/**
  Service pour gérer les notifications push des applications
*/
export declare class Model_service_push_notification extends Model_service implements Interface.Iservice_push_notification {
    /**
      Service pour gérer les notifications push des applications
    */
    constructor(obj?: any);
    _class: string;
    /**
URL de la BD dédié à la notification push pour faire le lien entre id d'app et id côté amazon
*/
    "url_service_db"?: string;
    /**
Url de la BD vers la collection de certificat
*/
    "url_certificate_collection"?: string;
    /**
Contexte du service pour mettre des libellés correctes dans les nom dans amazon SNS
*/
    "context"?: string;
    /**
Clé d'accès au serveur AWS
*/
    "aws_access_key_id"?: string;
    /**
Clé privée pour accéder au serveur AWS
*/
    "aws_secret_access_key"?: string;
    /**
Code region du serveur AWS
*/
    "aws_region"?: string;
    /**
URL du service de planification de tâche
*/
    "url_service_task"?: string;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_service_push_notification>;
}

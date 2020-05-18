import { UtilsSecu, CtxInterpretor, IHttpResult, HttpServiceBase, HttpAbstractService, MiddleWareConfig } from "utils";
import * as Interfaces from "../../lib/modelObj/Interfaces";
export declare class api_collection_plateform {
    constructor(conf: any);
    protected url: string;
    protected secure: UtilsSecu;
    /**
     service d'accès à la collection :certificat
     desc: certificat
     
     info: vous pouvez voir tous les objets de cette collection y compris les enfants
     liste des interfaces héritées possibles:
     
        Irsa      certificat RSA
     
        Iapi_key      Défini un certificat utilisant uniquement une clé d'API pour une application donnée
     
        Ipem_for_app      Certificat PEM pour une app donnée
     
     
    */
    certificat: HttpServiceBase<Interfaces.Icertificat>;
    /**
    service d'accès a la sous-collection :rsa
    desc: certificat RSA
    info: vous ne pouvez voir que ce type d'objet
   */
    rsa: HttpServiceBase<Interfaces.Irsa>;
    /**
    service d'accès a la sous-collection :api_key
    desc: Défini un certificat utilisant uniquement une clé d'API pour une application donnée
    info: vous ne pouvez voir que ce type d'objet
   */
    api_key: HttpServiceBase<Interfaces.Iapi_key>;
    /**
    service d'accès a la sous-collection :pem_for_app
    desc: Certificat PEM pour une app donnée
    info: vous ne pouvez voir que ce type d'objet
   */
    pem_for_app: HttpServiceBase<Interfaces.Ipem_for_app>;
    /**
     service d'accès à la collection :application_configuration
     desc: c'est la configuration d'une application
     
     info: vous pouvez voir tous les objets de cette collection y compris les enfants
     liste des interfaces héritées possibles:
     
        Iapplication_configuration_super_admin_mongo      configuration de l'application superAdminMongo
     
        Iapplication_configuration_parcours      application_configuration_parcours
     
        Iapplication_configuration_xlxUploader      application_configuration_xlxUploader
     
        Iapplication_configuration_web      Application configuration for web applications
     
        Iapplication_configuration_appApprenant      c'est la configuration d'une application Apprenant
     
        Iapplication_configuration_appCoach      c'est la configuration d'une application coach
     
        Iapplication_configuration_appEditor      c'est la configuration d'une application type editeur
     
        Iapplication_configuration_savvy_learner      configuration de l'application Savvy Learner
     
        Iapplication_configuration_appClient      c'est la configuration d'une application Client
     
        Iapplication_configuration_savvy_author      Configuration pour l'application Savvy - Author
     
        Iapplication_configuration_appAdminDaesign      Application configuration for Daesign admin that have specific inputs
     
        Iapplication_configuration_generic_author      conf for generic authos app
     
        Iapplication_configuration_generic      generic conf
     
     
    */
    application_configuration: HttpServiceBase<Interfaces.Iapplication_configuration>;
    /**
    service d'accès a la sous-collection :application_configuration_super_admin_mongo
    desc: configuration de l'application superAdminMongo
    info: vous ne pouvez voir que ce type d'objet
   */
    application_configuration_super_admin_mongo: HttpServiceBase<Interfaces.Iapplication_configuration_super_admin_mongo>;
    /**
    service d'accès a la sous-collection :application_configuration_parcours
    desc: application_configuration_parcours
    info: vous ne pouvez voir que ce type d'objet
   */
    application_configuration_parcours: HttpServiceBase<Interfaces.Iapplication_configuration_parcours>;
    /**
    service d'accès a la sous-collection :application_configuration_xlxUploader
    desc: application_configuration_xlxUploader
    info: vous ne pouvez voir que ce type d'objet
   */
    application_configuration_xlxUploader: HttpServiceBase<Interfaces.Iapplication_configuration_xlxUploader>;
    /**
    service d'accès a la sous-collection :application_configuration_web
    desc: Application configuration for web applications
    info: vous ne pouvez voir que ce type d'objet
   */
    application_configuration_web: HttpServiceBase<Interfaces.Iapplication_configuration_web>;
    /**
    service d'accès a la sous-collection :application_configuration_appApprenant
    desc: c'est la configuration d'une application Apprenant
    info: vous ne pouvez voir que ce type d'objet
   */
    application_configuration_appApprenant: HttpServiceBase<Interfaces.Iapplication_configuration_appApprenant>;
    /**
    service d'accès a la sous-collection :application_configuration_appCoach
    desc: c'est la configuration d'une application coach
    info: vous ne pouvez voir que ce type d'objet
   */
    application_configuration_appCoach: HttpServiceBase<Interfaces.Iapplication_configuration_appCoach>;
    /**
    service d'accès a la sous-collection :application_configuration_appEditor
    desc: c'est la configuration d'une application type editeur
    info: vous ne pouvez voir que ce type d'objet
   */
    application_configuration_appEditor: HttpServiceBase<Interfaces.Iapplication_configuration_appEditor>;
    /**
    service d'accès a la sous-collection :application_configuration_savvy_learner
    desc: configuration de l'application Savvy Learner
    info: vous ne pouvez voir que ce type d'objet
   */
    application_configuration_savvy_learner: HttpServiceBase<Interfaces.Iapplication_configuration_savvy_learner>;
    /**
    service d'accès a la sous-collection :application_configuration_appClient
    desc: c'est la configuration d'une application Client
    info: vous ne pouvez voir que ce type d'objet
   */
    application_configuration_appClient: HttpServiceBase<Interfaces.Iapplication_configuration_appClient>;
    /**
    service d'accès a la sous-collection :application_configuration_savvy_author
    desc: Configuration pour l'application Savvy - Author
    info: vous ne pouvez voir que ce type d'objet
   */
    application_configuration_savvy_author: HttpServiceBase<Interfaces.Iapplication_configuration_savvy_author>;
    /**
    service d'accès a la sous-collection :application_configuration_appAdminDaesign
    desc: Application configuration for Daesign admin that have specific inputs
    info: vous ne pouvez voir que ce type d'objet
   */
    application_configuration_appAdminDaesign: HttpServiceBase<Interfaces.Iapplication_configuration_appAdminDaesign>;
    /**
    service d'accès a la sous-collection :application_configuration_generic_author
    desc: conf for generic authos app
    info: vous ne pouvez voir que ce type d'objet
   */
    application_configuration_generic_author: HttpServiceBase<Interfaces.Iapplication_configuration_generic_author>;
    /**
    service d'accès a la sous-collection :application_configuration_generic
    desc: generic conf
    info: vous ne pouvez voir que ce type d'objet
   */
    application_configuration_generic: HttpServiceBase<Interfaces.Iapplication_configuration_generic>;
    /**
     service d'accès à la collection :service_access
     desc: décrit les régles de paramètre des servies
     

     
    */
    service_access: HttpServiceBase<Interfaces.Iservice_access>;
    /**
     service d'accès à la collection :service
     desc: identification du service
     
     info: vous pouvez voir tous les objets de cette collection y compris les enfants
     liste des interfaces héritées possibles:
     
        Iservice_sso      c'est un sso
     
        Iservice_init      service qui génére la configuration d'une application cliente (url du sso, id client, id_instance...)
     
        Iservice_mailtoinfra      service qui permet de configurer l'authentification a partir d'un mail
     
        Iservice_mongo      configure un service mongo
     
        Iservice_socketIo      communication temps réelle multi format
     
        Iservice_supervision      service_supervision
     
        Iservice_configuration      c'est le service de distribution des configurations des services
     
        Iservice_goshabaGateway      passerelle pour goshaba
     
        Iservice_like      service permettant de liker un objet de la base
     
        Iservice_signin      service d'enregistrement
     
        Iservice_sendGrid      permet d'envoyer des mail via l'api send grid v3
     
        Iservice_licence_token      c'est un service en charge de valider les licences et retourner les configurations des applications web
     
        Iservice_dumy_fso      simple remote file system a n utiliser que pour des test
     
        Iservice_push_notification      Service pour gérer les notifications push des applications
     
        Iservice_socket_io      service messagerie de soket.io
     
        Iservice_tutor      service de gestion des message tutoré
     
        Iservice_nginxConfigurator      service_nginxConfigurator
     
        Iservice_nginxMultiConfigurator      configuration d'un service nginx multi configuration
     
        Iservice_init_js      service qui retourne un init.js
     
        Iservice_planned_tasks      Service de Taches planifiées
     
        IService_scorm_gateway      service passerelle d'un package scorm vers l'interne
     
        Iservice_infra_admin      administration de l'infra
     
        Iservice_nathan_gateway      Service servant de passerelle entre Nathan et notre infra
     
        Iservice_mailtoinfra2      retrouve la configuration de connection de l'app savy a partir du mail de l'utilisateur
     
        Iservice_trainingCoursesService      service de gestion des parcourts de formation
     
        Iservice_deploy      Service qu'il est bien sympathique pour déployer des applications de qualité
     
        Iservice_hello      Service d'exemple
     
        IServiceTracking      Service to acces tracking for application
     
        Iservice_cloud_storage      Service used to upload files to AWS S3
     
     
    */
    service: HttpServiceBase<Interfaces.Iservice>;
    /**
    service d'accès a la sous-collection :service_sso
    desc: c'est un sso
    info: vous ne pouvez voir que ce type d'objet
   */
    service_sso: HttpServiceBase<Interfaces.Iservice_sso>;
    /**
    service d'accès a la sous-collection :service_init
    desc: service qui génére la configuration d'une application cliente (url du sso, id client, id_instance...)
    info: vous ne pouvez voir que ce type d'objet
   */
    service_init: HttpServiceBase<Interfaces.Iservice_init>;
    /**
    service d'accès a la sous-collection :service_mailtoinfra
    desc: service qui permet de configurer l'authentification a partir d'un mail
    info: vous ne pouvez voir que ce type d'objet
   */
    service_mailtoinfra: HttpServiceBase<Interfaces.Iservice_mailtoinfra>;
    /**
    service d'accès a la sous-collection :service_mongo
    desc: configure un service mongo
    info: vous ne pouvez voir que ce type d'objet
   */
    service_mongo: HttpServiceBase<Interfaces.Iservice_mongo>;
    /**
    service d'accès a la sous-collection :service_socketIo
    desc: communication temps réelle multi format
    info: vous ne pouvez voir que ce type d'objet
   */
    service_socketIo: HttpServiceBase<Interfaces.Iservice_socketIo>;
    /**
    service d'accès a la sous-collection :service_supervision
    desc: service_supervision
    info: vous ne pouvez voir que ce type d'objet
   */
    service_supervision: HttpServiceBase<Interfaces.Iservice_supervision>;
    /**
    service d'accès a la sous-collection :service_configuration
    desc: c'est le service de distribution des configurations des services
    info: vous ne pouvez voir que ce type d'objet
   */
    service_configuration: HttpServiceBase<Interfaces.Iservice_configuration>;
    /**
    service d'accès a la sous-collection :service_goshabaGateway
    desc: passerelle pour goshaba
    info: vous ne pouvez voir que ce type d'objet
   */
    service_goshabaGateway: HttpServiceBase<Interfaces.Iservice_goshabaGateway>;
    /**
    service d'accès a la sous-collection :service_like
    desc: service permettant de liker un objet de la base
    info: vous ne pouvez voir que ce type d'objet
   */
    service_like: HttpServiceBase<Interfaces.Iservice_like>;
    /**
    service d'accès a la sous-collection :service_signin
    desc: service d'enregistrement
    info: vous ne pouvez voir que ce type d'objet
   */
    service_signin: HttpServiceBase<Interfaces.Iservice_signin>;
    /**
    service d'accès a la sous-collection :service_sendGrid
    desc: permet d'envoyer des mail via l'api send grid v3
    info: vous ne pouvez voir que ce type d'objet
   */
    service_sendGrid: HttpServiceBase<Interfaces.Iservice_sendGrid>;
    /**
    service d'accès a la sous-collection :service_licence_token
    desc: c'est un service en charge de valider les licences et retourner les configurations des applications web
    info: vous ne pouvez voir que ce type d'objet
   */
    service_licence_token: HttpServiceBase<Interfaces.Iservice_licence_token>;
    /**
    service d'accès a la sous-collection :service_dumy_fso
    desc: simple remote file system a n utiliser que pour des test
    info: vous ne pouvez voir que ce type d'objet
   */
    service_dumy_fso: HttpServiceBase<Interfaces.Iservice_dumy_fso>;
    /**
    service d'accès a la sous-collection :service_push_notification
    desc: Service pour gérer les notifications push des applications
    info: vous ne pouvez voir que ce type d'objet
   */
    service_push_notification: HttpServiceBase<Interfaces.Iservice_push_notification>;
    /**
    service d'accès a la sous-collection :service_socket_io
    desc: service messagerie de soket.io
    info: vous ne pouvez voir que ce type d'objet
   */
    service_socket_io: HttpServiceBase<Interfaces.Iservice_socket_io>;
    /**
    service d'accès a la sous-collection :service_tutor
    desc: service de gestion des message tutoré
    info: vous ne pouvez voir que ce type d'objet
   */
    service_tutor: HttpServiceBase<Interfaces.Iservice_tutor>;
    /**
    service d'accès a la sous-collection :service_nginxConfigurator
    desc: service_nginxConfigurator
    info: vous ne pouvez voir que ce type d'objet
   */
    service_nginxConfigurator: HttpServiceBase<Interfaces.Iservice_nginxConfigurator>;
    /**
    service d'accès a la sous-collection :service_nginxMultiConfigurator
    desc: configuration d'un service nginx multi configuration
    info: vous ne pouvez voir que ce type d'objet
   */
    service_nginxMultiConfigurator: HttpServiceBase<Interfaces.Iservice_nginxMultiConfigurator>;
    /**
    service d'accès a la sous-collection :service_init_js
    desc: service qui retourne un init.js
    info: vous ne pouvez voir que ce type d'objet
   */
    service_init_js: HttpServiceBase<Interfaces.Iservice_init_js>;
    /**
    service d'accès a la sous-collection :service_planned_tasks
    desc: Service de Taches planifiées
    info: vous ne pouvez voir que ce type d'objet
   */
    service_planned_tasks: HttpServiceBase<Interfaces.Iservice_planned_tasks>;
    /**
    service d'accès a la sous-collection :Service_scorm_gateway
    desc: service passerelle d'un package scorm vers l'interne
    info: vous ne pouvez voir que ce type d'objet
   */
    Service_scorm_gateway: HttpServiceBase<Interfaces.IService_scorm_gateway>;
    /**
    service d'accès a la sous-collection :service_infra_admin
    desc: administration de l'infra
    info: vous ne pouvez voir que ce type d'objet
   */
    service_infra_admin: HttpServiceBase<Interfaces.Iservice_infra_admin>;
    /**
    service d'accès a la sous-collection :service_nathan_gateway
    desc: Service servant de passerelle entre Nathan et notre infra
    info: vous ne pouvez voir que ce type d'objet
   */
    service_nathan_gateway: HttpServiceBase<Interfaces.Iservice_nathan_gateway>;
    /**
    service d'accès a la sous-collection :service_mailtoinfra2
    desc: retrouve la configuration de connection de l'app savy a partir du mail de l'utilisateur
    info: vous ne pouvez voir que ce type d'objet
   */
    service_mailtoinfra2: HttpServiceBase<Interfaces.Iservice_mailtoinfra2>;
    /**
    service d'accès a la sous-collection :service_trainingCoursesService
    desc: service de gestion des parcourts de formation
    info: vous ne pouvez voir que ce type d'objet
   */
    service_trainingCoursesService: HttpServiceBase<Interfaces.Iservice_trainingCoursesService>;
    /**
    service d'accès a la sous-collection :service_deploy
    desc: Service qu'il est bien sympathique pour déployer des applications de qualité
    info: vous ne pouvez voir que ce type d'objet
   */
    service_deploy: HttpServiceBase<Interfaces.Iservice_deploy>;
    /**
    service d'accès a la sous-collection :service_hello
    desc: Service d'exemple
    info: vous ne pouvez voir que ce type d'objet
   */
    service_hello: HttpServiceBase<Interfaces.Iservice_hello>;
    /**
    service d'accès a la sous-collection :ServiceTracking
    desc: Service to acces tracking for application
    info: vous ne pouvez voir que ce type d'objet
   */
    ServiceTracking: HttpServiceBase<Interfaces.IServiceTracking>;
    /**
    service d'accès a la sous-collection :service_cloud_storage
    desc: Service used to upload files to AWS S3
    info: vous ne pouvez voir que ce type d'objet
   */
    service_cloud_storage: HttpServiceBase<Interfaces.Iservice_cloud_storage>;
    /**
     service d'accès à la collection :protoschema
     desc: protoschema est un méta modéle. il permet de créer les autres modèle de la base
     

     
    */
    protoschema: HttpServiceBase<Interfaces.Iprotoschema>;
    /**
     service d'accès à la collection :mail
     desc: collection de mail
     
     info: vous pouvez voir tous les objets de cette collection y compris les enfants
     liste des interfaces héritées possibles:
     
        Imail_sendgrid      objet envoyé a l'api sendgrid
     
     
    */
    mail: HttpServiceBase<Interfaces.Imail>;
    /**
    service d'accès a la sous-collection :mail_sendgrid
    desc: objet envoyé a l'api sendgrid
    info: vous ne pouvez voir que ce type d'objet
   */
    mail_sendgrid: HttpServiceBase<Interfaces.Imail_sendgrid>;
    /**
     service d'accès à la collection :nginxConfigurationFile
     desc: description d'un fichier de configuration nginx
     

     
    */
    nginxConfigurationFile: HttpServiceBase<Interfaces.InginxConfigurationFile>;
    /**
     service d'accès à la collection :_view
     desc: créer des pipe d'agrégation intérogeable https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline/
     
     info: vous pouvez voir tous les objets de cette collection y compris les enfants
     liste des interfaces héritées possibles:
     
        I_view_params      view avec des params
     
     
    */
    _view: HttpServiceBase<Interfaces.I_view>;
    /**
    service d'accès a la sous-collection :_view_params
    desc: view avec des params
    info: vous ne pouvez voir que ce type d'objet
   */
    _view_params: HttpServiceBase<Interfaces.I_view_params>;
    /**
     service d'accès à la collection :TemplateLodash
     desc: template lodash + nom
     

     
    */
    TemplateLodash: HttpServiceBase<Interfaces.ITemplateLodash>;
    /**
     service d'accès à la collection :lang_code
     desc: Définit le code pour une langue (se référer au code ISO 639 : https://fr.wikipedia.org/wiki/Liste_des_codes_ISO_639-1)
     

     
    */
    lang_code: HttpServiceBase<Interfaces.Ilang_code>;
    /**
     service d'accès à la collection :multilingual_text
     desc: Définit un texte multilingue
     

     
    */
    multilingual_text: HttpServiceBase<Interfaces.Imultilingual_text>;
    /**
     service d'accès à la collection :licence
     desc: représente la licence d'un utilisateur pour un service (ou application) distribué par un end_client
     
     info: vous pouvez voir tous les objets de cette collection y compris les enfants
     liste des interfaces héritées possibles:
     
        Ilicence_temporelle      c'est une licence qui dure un certain temps
     
     
    */
    licence: HttpServiceBase<Interfaces.Ilicence>;
    /**
    service d'accès a la sous-collection :licence_temporelle
    desc: c'est une licence qui dure un certain temps
    info: vous ne pouvez voir que ce type d'objet
   */
    licence_temporelle: HttpServiceBase<Interfaces.Ilicence_temporelle>;
    /**
     service d'accès à la collection :end_client
     desc: c'est le client que l'on facture
     

     
    */
    end_client: HttpServiceBase<Interfaces.Iend_client>;
    /**
     service d'accès à la collection :MultilangSendGridTemplate
     desc: décrit un template multi langue d'envoie de mail avec sendGrid
     

     
    */
    MultilangSendGridTemplate: HttpServiceBase<Interfaces.IMultilangSendGridTemplate>;
    /**
     service d'accès à la collection :application
     desc: liste des applications
     
     info: vous pouvez voir tous les objets de cette collection y compris les enfants
     liste des interfaces héritées possibles:
     
        Ipack_card      c'est un paquet de carte
     
        Iwebapp      webapp
     
        Iapp_training_course      app_training_course
     
     
    */
    application: HttpServiceBase<Interfaces.Iapplication>;
    /**
    service d'accès a la sous-collection :pack_card
    desc: c'est un paquet de carte
    info: vous ne pouvez voir que ce type d'objet
   */
    pack_card: HttpServiceBase<Interfaces.Ipack_card>;
    /**
    service d'accès a la sous-collection :webapp
    desc: webapp
    info: vous ne pouvez voir que ce type d'objet
   */
    webapp: HttpServiceBase<Interfaces.Iwebapp>;
    /**
    service d'accès a la sous-collection :app_training_course
    desc: app_training_course
    info: vous ne pouvez voir que ce type d'objet
   */
    app_training_course: HttpServiceBase<Interfaces.Iapp_training_course>;
    /**
     service d'accès à la collection :application_instance
     desc: c'est le couple application configuration
     

     
    */
    application_instance: HttpServiceBase<Interfaces.Iapplication_instance>;
    /**
     service d'accès à la collection :hello
     desc: log collection for template backend service
     

     
    */
    hello: HttpServiceBase<Interfaces.Ihello>;
    /**
     service d'accès à la collection :user_profile
     desc: User profile collection
     

     
    */
    user_profile: HttpServiceBase<Interfaces.Iuser_profile>;
    /**
     service d'accès à la collection :user
     desc: User account collection
     

     
    */
    user: HttpServiceBase<Interfaces.Iuser>;
    /**
     service d'accès à la collection :cloudStorageFiles
     desc: List of files stored in a cloud storage
     

     
    */
    cloudStorageFiles: HttpServiceBase<Interfaces.IcloudStorageFiles>;
    /**
     service d'accès à la collection :cloudStorageFolders
     desc: List of folders stored in a cloud storage with ACL
     

     
    */
    cloudStorageFolders: HttpServiceBase<Interfaces.IcloudStorageFolders>;
    /**
     service d'accès à la collection :deploy_template
     desc: Templates collection used by the deployment service
     
     info: vous pouvez voir tous les objets de cette collection y compris les enfants
     liste des interfaces héritées possibles:
     
        Ideploy_template_application_configuration      Template used by deploy service - application configuration specific
     
        Ideploy_template_licence_store       Template used by deploy service - licence store specific
     
        Ideploy_template_training_course      Template used by deploy service - training course specific
     
        Ideploy_template_training_course_i18n      Template used by deploy service - training course internationalisation
     
     
    */
    deploy_template: HttpServiceBase<Interfaces.Ideploy_template>;
    /**
    service d'accès a la sous-collection :deploy_template_application_configuration
    desc: Template used by deploy service - application configuration specific
    info: vous ne pouvez voir que ce type d'objet
   */
    deploy_template_application_configuration: HttpServiceBase<Interfaces.Ideploy_template_application_configuration>;
    /**
    service d'accès a la sous-collection :deploy_template_licence_store
    desc:  Template used by deploy service - licence store specific
    info: vous ne pouvez voir que ce type d'objet
   */
    deploy_template_licence_store: HttpServiceBase<Interfaces.Ideploy_template_licence_store>;
    /**
    service d'accès a la sous-collection :deploy_template_training_course
    desc: Template used by deploy service - training course specific
    info: vous ne pouvez voir que ce type d'objet
   */
    deploy_template_training_course: HttpServiceBase<Interfaces.Ideploy_template_training_course>;
    /**
    service d'accès a la sous-collection :deploy_template_training_course_i18n
    desc: Template used by deploy service - training course internationalisation
    info: vous ne pouvez voir que ce type d'objet
   */
    deploy_template_training_course_i18n: HttpServiceBase<Interfaces.Ideploy_template_training_course_i18n>;
}
/**
    accès à la vue :UserLicence
    retourne la liste des licences d'un utilisateur pour le client courrant
*/
export declare class api_view_UserLicence extends HttpAbstractService {
    conf: any;
    /**
        accès à la vue :UserLicence
        
    */
    constructor(conf: any);
    protected url: string;
    protected globalCtxInt: CtxInterpretor;
    /**
    génére une requette sur la vue UserLicence
    
    */
    get(userId: string, query?: string, headers?: any): Promise<IHttpResult<Interfaces.Ilicence>>;
    /** middleware
    génére une requette sur la vue UserLicence
    
    */
    getMiddleware: (config: MiddleWareConfig) => (req: any, res: any, next: any) => void;
}
/**
    accès à la vue :Client
    retourne la donnée du client connecté
*/
export declare class api_view_Client extends HttpAbstractService {
    conf: any;
    /**
        accès à la vue :Client
        
    */
    constructor(conf: any);
    protected url: string;
    protected globalCtxInt: CtxInterpretor;
    /**
    génére une requette sur la vue Client
    
    */
    get(query?: string, headers?: any): Promise<IHttpResult<Interfaces.Iend_client>>;
    /** middleware
    génére une requette sur la vue Client
    
    */
    getMiddleware: (config: MiddleWareConfig) => (req: any, res: any, next: any) => void;
}
/**
    accès à la vue :CloudStorageFolderList
    View used to get cloudStorageFolder nested folders
*/
export declare class api_view_CloudStorageFolderList extends HttpAbstractService {
    conf: any;
    /**
        accès à la vue :CloudStorageFolderList
        
    */
    constructor(conf: any);
    protected url: string;
    protected globalCtxInt: CtxInterpretor;
    /**
    génére une requette sur la vue CloudStorageFolderList
    
    */
    get(folderId: string, depth: number, query?: string, headers?: any): Promise<IHttpResult<Interfaces.IcloudStorageFolders>>;
    /** middleware
    génére une requette sur la vue CloudStorageFolderList
    
    */
    getMiddleware: (config: MiddleWareConfig) => (req: any, res: any, next: any) => void;
}
/**
    accès à la vue :CloudStorageFolderAncestors
    Aggregation that returns every ancestors of a folder ordered from farer to current folder
*/
export declare class api_view_CloudStorageFolderAncestors extends HttpAbstractService {
    conf: any;
    /**
        accès à la vue :CloudStorageFolderAncestors
        
    */
    constructor(conf: any);
    protected url: string;
    protected globalCtxInt: CtxInterpretor;
    /**
    génére une requette sur la vue CloudStorageFolderAncestors
    
    */
    get(folderId: string, query?: string, headers?: any): Promise<IHttpResult<Interfaces.IcloudStorageFolders>>;
    /** middleware
    génére une requette sur la vue CloudStorageFolderAncestors
    
    */
    getMiddleware: (config: MiddleWareConfig) => (req: any, res: any, next: any) => void;
}
/**
    accès à la vue :CloudStorageFolderSearch
    View used to filter Folders by tags
*/
export declare class api_view_CloudStorageFolderSearch extends HttpAbstractService {
    conf: any;
    /**
        accès à la vue :CloudStorageFolderSearch
        
    */
    constructor(conf: any);
    protected url: string;
    protected globalCtxInt: CtxInterpretor;
    /**
    génére une requette sur la vue CloudStorageFolderSearch
    
    */
    get(folderId: string, depth: number, tag1: string, tag2: string, tag3: string, type: string, query?: string, headers?: any): Promise<IHttpResult<Interfaces.IcloudStorageFolders>>;
    /** middleware
    génére une requette sur la vue CloudStorageFolderSearch
    
    */
    getMiddleware: (config: MiddleWareConfig) => (req: any, res: any, next: any) => void;
}
export declare class api_view_plateform {
    conf: any;
    constructor(conf: any);
    /**
    accès à la vue :UserLicence     retourne la liste des licences d'un utilisateur pour le client courrant
    */
    UserLicence: api_view_UserLicence;
    /**
    accès à la vue :Client     retourne la donnée du client connecté
    */
    Client: api_view_Client;
    /**
    accès à la vue :CloudStorageFolderList     View used to get cloudStorageFolder nested folders
    */
    CloudStorageFolderList: api_view_CloudStorageFolderList;
    /**
    accès à la vue :CloudStorageFolderAncestors     Aggregation that returns every ancestors of a folder ordered from farer to current folder
    */
    CloudStorageFolderAncestors: api_view_CloudStorageFolderAncestors;
    /**
    accès à la vue :CloudStorageFolderSearch     View used to filter Folders by tags
    */
    CloudStorageFolderSearch: api_view_CloudStorageFolderSearch;
}
export declare class Api_plateforme {
    conf: any;
    constructor(conf: any);
    /**
        liste des collections de l'api
    */
    collections: api_collection_plateform;
    /**
        liste des vues de l'api
    */
    views: api_view_plateform;
}

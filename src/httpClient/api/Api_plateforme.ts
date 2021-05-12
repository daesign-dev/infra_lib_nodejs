

import {UtilsSecu , CtxInterpretor ,IHttpResult , IBase ,HttpServiceBase  ,HttpAbstractService ,  MiddleWareConfig } from "utils" ;

import * as Interfaces from "../../lib/modelObj/Interfaces" ;


export class api_collection_plateform {

	constructor(conf:any ){
	this.url = conf.url ;
	this.secure = conf.secure ;
	

		this.certificat= new HttpServiceBase<Interfaces.Icertificat>( {url:conf.url + "collection/certificat/" , secure:conf.secure} )  ;

		
		 
		this.rsa= new HttpServiceBase<Interfaces.Irsa>({url:conf.url + "collection/rsa/" , secure:conf.secure})  ;

		 
		 
		this.api_key= new HttpServiceBase<Interfaces.Iapi_key>({url:conf.url + "collection/api_key/" , secure:conf.secure})  ;

		 
		 
		this.pem_for_app= new HttpServiceBase<Interfaces.Ipem_for_app>({url:conf.url + "collection/pem_for_app/" , secure:conf.secure})  ;

		 
	

		this.application_configuration= new HttpServiceBase<Interfaces.Iapplication_configuration>( {url:conf.url + "collection/application_configuration/" , secure:conf.secure} )  ;

		
		 
		this.application_configuration_super_admin_mongo= new HttpServiceBase<Interfaces.Iapplication_configuration_super_admin_mongo>({url:conf.url + "collection/application_configuration_super_admin_mongo/" , secure:conf.secure})  ;

		 
		 
		this.application_configuration_parcours= new HttpServiceBase<Interfaces.Iapplication_configuration_parcours>({url:conf.url + "collection/application_configuration_parcours/" , secure:conf.secure})  ;

		 
		 
		this.application_configuration_xlxUploader= new HttpServiceBase<Interfaces.Iapplication_configuration_xlxUploader>({url:conf.url + "collection/application_configuration_xlxUploader/" , secure:conf.secure})  ;

		 
		 
		this.application_configuration_web= new HttpServiceBase<Interfaces.Iapplication_configuration_web>({url:conf.url + "collection/application_configuration_web/" , secure:conf.secure})  ;

		 
		 
		this.application_configuration_appApprenant= new HttpServiceBase<Interfaces.Iapplication_configuration_appApprenant>({url:conf.url + "collection/application_configuration_appApprenant/" , secure:conf.secure})  ;

		 
		 
		this.application_configuration_appCoach= new HttpServiceBase<Interfaces.Iapplication_configuration_appCoach>({url:conf.url + "collection/application_configuration_appCoach/" , secure:conf.secure})  ;

		 
		 
		this.application_configuration_appEditor= new HttpServiceBase<Interfaces.Iapplication_configuration_appEditor>({url:conf.url + "collection/application_configuration_appEditor/" , secure:conf.secure})  ;

		 
		 
		this.application_configuration_savvy_learner= new HttpServiceBase<Interfaces.Iapplication_configuration_savvy_learner>({url:conf.url + "collection/application_configuration_savvy_learner/" , secure:conf.secure})  ;

		 
		 
		this.application_configuration_appAdminDaesign= new HttpServiceBase<Interfaces.Iapplication_configuration_appAdminDaesign>({url:conf.url + "collection/application_configuration_appAdminDaesign/" , secure:conf.secure})  ;

		 
		 
		this.application_configuration_generic_author= new HttpServiceBase<Interfaces.Iapplication_configuration_generic_author>({url:conf.url + "collection/application_configuration_generic_author/" , secure:conf.secure})  ;

		 
		 
		this.application_configuration_generic= new HttpServiceBase<Interfaces.Iapplication_configuration_generic>({url:conf.url + "collection/application_configuration_generic/" , secure:conf.secure})  ;

		 
		 
		this.application_configuration_adaptivmath_teacher= new HttpServiceBase<Interfaces.Iapplication_configuration_adaptivmath_teacher>({url:conf.url + "collection/application_configuration_adaptivmath_teacher/" , secure:conf.secure})  ;

		 
		 
		this.application_configuration_adaptivmath_student= new HttpServiceBase<Interfaces.Iapplication_configuration_adaptivmath_student>({url:conf.url + "collection/application_configuration_adaptivmath_student/" , secure:conf.secure})  ;

		 
		 
		this.application_configuration_savvy_author= new HttpServiceBase<Interfaces.Iapplication_configuration_savvy_author>({url:conf.url + "collection/application_configuration_savvy_author/" , secure:conf.secure})  ;

		 
		 
		this.application_configuration_appClient= new HttpServiceBase<Interfaces.Iapplication_configuration_appClient>({url:conf.url + "collection/application_configuration_appClient/" , secure:conf.secure})  ;

		 
	

		this.service_access= new HttpServiceBase<Interfaces.Iservice_access>( {url:conf.url + "collection/service_access/" , secure:conf.secure} )  ;

		
	

		this.service= new HttpServiceBase<Interfaces.Iservice>( {url:conf.url + "collection/service/" , secure:conf.secure} )  ;

		
		 
		this.service_sso= new HttpServiceBase<Interfaces.Iservice_sso>({url:conf.url + "collection/service_sso/" , secure:conf.secure})  ;

		 
		 
		this.service_init= new HttpServiceBase<Interfaces.Iservice_init>({url:conf.url + "collection/service_init/" , secure:conf.secure})  ;

		 
		 
		this.service_mailtoinfra= new HttpServiceBase<Interfaces.Iservice_mailtoinfra>({url:conf.url + "collection/service_mailtoinfra/" , secure:conf.secure})  ;

		 
		 
		this.service_socketIo= new HttpServiceBase<Interfaces.Iservice_socketIo>({url:conf.url + "collection/service_socketIo/" , secure:conf.secure})  ;

		 
		 
		this.service_supervision= new HttpServiceBase<Interfaces.Iservice_supervision>({url:conf.url + "collection/service_supervision/" , secure:conf.secure})  ;

		 
		 
		this.service_configuration= new HttpServiceBase<Interfaces.Iservice_configuration>({url:conf.url + "collection/service_configuration/" , secure:conf.secure})  ;

		 
		 
		this.service_goshabaGateway= new HttpServiceBase<Interfaces.Iservice_goshabaGateway>({url:conf.url + "collection/service_goshabaGateway/" , secure:conf.secure})  ;

		 
		 
		this.service_like= new HttpServiceBase<Interfaces.Iservice_like>({url:conf.url + "collection/service_like/" , secure:conf.secure})  ;

		 
		 
		this.service_sendGrid= new HttpServiceBase<Interfaces.Iservice_sendGrid>({url:conf.url + "collection/service_sendGrid/" , secure:conf.secure})  ;

		 
		 
		this.service_dumy_fso= new HttpServiceBase<Interfaces.Iservice_dumy_fso>({url:conf.url + "collection/service_dumy_fso/" , secure:conf.secure})  ;

		 
		 
		this.service_push_notification= new HttpServiceBase<Interfaces.Iservice_push_notification>({url:conf.url + "collection/service_push_notification/" , secure:conf.secure})  ;

		 
		 
		this.service_socket_io= new HttpServiceBase<Interfaces.Iservice_socket_io>({url:conf.url + "collection/service_socket_io/" , secure:conf.secure})  ;

		 
		 
		this.service_tutor= new HttpServiceBase<Interfaces.Iservice_tutor>({url:conf.url + "collection/service_tutor/" , secure:conf.secure})  ;

		 
		 
		this.service_nginxConfigurator= new HttpServiceBase<Interfaces.Iservice_nginxConfigurator>({url:conf.url + "collection/service_nginxConfigurator/" , secure:conf.secure})  ;

		 
		 
		this.service_nginxMultiConfigurator= new HttpServiceBase<Interfaces.Iservice_nginxMultiConfigurator>({url:conf.url + "collection/service_nginxMultiConfigurator/" , secure:conf.secure})  ;

		 
		 
		this.service_init_js= new HttpServiceBase<Interfaces.Iservice_init_js>({url:conf.url + "collection/service_init_js/" , secure:conf.secure})  ;

		 
		 
		this.service_planned_tasks= new HttpServiceBase<Interfaces.Iservice_planned_tasks>({url:conf.url + "collection/service_planned_tasks/" , secure:conf.secure})  ;

		 
		 
		this.service_infra_admin= new HttpServiceBase<Interfaces.Iservice_infra_admin>({url:conf.url + "collection/service_infra_admin/" , secure:conf.secure})  ;

		 
		 
		this.service_mailtoinfra2= new HttpServiceBase<Interfaces.Iservice_mailtoinfra2>({url:conf.url + "collection/service_mailtoinfra2/" , secure:conf.secure})  ;

		 
		 
		this.service_deploy= new HttpServiceBase<Interfaces.Iservice_deploy>({url:conf.url + "collection/service_deploy/" , secure:conf.secure})  ;

		 
		 
		this.service_hello= new HttpServiceBase<Interfaces.Iservice_hello>({url:conf.url + "collection/service_hello/" , secure:conf.secure})  ;

		 
		 
		this.ServiceTracking= new HttpServiceBase<Interfaces.IServiceTracking>({url:conf.url + "collection/ServiceTracking/" , secure:conf.secure})  ;

		 
		 
		this.service_cloud_storage= new HttpServiceBase<Interfaces.Iservice_cloud_storage>({url:conf.url + "collection/service_cloud_storage/" , secure:conf.secure})  ;

		 
		 
		this.service_licence_token= new HttpServiceBase<Interfaces.Iservice_licence_token>({url:conf.url + "collection/service_licence_token/" , secure:conf.secure})  ;

		 
		 
		this.service_mongo= new HttpServiceBase<Interfaces.Iservice_mongo>({url:conf.url + "collection/service_mongo/" , secure:conf.secure})  ;

		 
		 
		this.service_gateway= new HttpServiceBase<Interfaces.Iservice_gateway>({url:conf.url + "collection/service_gateway/" , secure:conf.secure})  ;

		 
		 
		this.service_amclustering= new HttpServiceBase<Interfaces.Iservice_amclustering>({url:conf.url + "collection/service_amclustering/" , secure:conf.secure})  ;

		 
		 
		this.service_nathan_gateway= new HttpServiceBase<Interfaces.Iservice_nathan_gateway>({url:conf.url + "collection/service_nathan_gateway/" , secure:conf.secure})  ;

		 
		 
		this.Service_scorm_gateway= new HttpServiceBase<Interfaces.IService_scorm_gateway>({url:conf.url + "collection/Service_scorm_gateway/" , secure:conf.secure})  ;

		 
		 
		this.authentication= new HttpServiceBase<Interfaces.Iauthentication>({url:conf.url + "collection/authentication/" , secure:conf.secure})  ;

		 
		 
		this.signin_service= new HttpServiceBase<Interfaces.Isignin_service>({url:conf.url + "collection/signin_service/" , secure:conf.secure})  ;

		 
		 
		this.service_signin= new HttpServiceBase<Interfaces.Iservice_signin>({url:conf.url + "collection/service_signin/" , secure:conf.secure})  ;

		 
		 
		this.service_trainingCoursesService= new HttpServiceBase<Interfaces.Iservice_trainingCoursesService>({url:conf.url + "collection/service_trainingCoursesService/" , secure:conf.secure})  ;

		 
	

		this.protoschema= new HttpServiceBase<Interfaces.Iprotoschema>( {url:conf.url + "collection/protoschema/" , secure:conf.secure} )  ;

		
	

		this.mail= new HttpServiceBase<Interfaces.Imail>( {url:conf.url + "collection/mail/" , secure:conf.secure} )  ;

		
		 
		this.mail_sendgrid= new HttpServiceBase<Interfaces.Imail_sendgrid>({url:conf.url + "collection/mail_sendgrid/" , secure:conf.secure})  ;

		 
	

		this.nginxConfigurationFile= new HttpServiceBase<Interfaces.InginxConfigurationFile>( {url:conf.url + "collection/nginxConfigurationFile/" , secure:conf.secure} )  ;

		
	

		this._view= new HttpServiceBase<Interfaces.I_view>( {url:conf.url + "collection/_view/" , secure:conf.secure} )  ;

		
		 
		this._view_params= new HttpServiceBase<Interfaces.I_view_params>({url:conf.url + "collection/_view_params/" , secure:conf.secure})  ;

		 
	

		this.TemplateLodash= new HttpServiceBase<Interfaces.ITemplateLodash>( {url:conf.url + "collection/TemplateLodash/" , secure:conf.secure} )  ;

		
	

		this.lang_code= new HttpServiceBase<Interfaces.Ilang_code>( {url:conf.url + "collection/lang_code/" , secure:conf.secure} )  ;

		
	

		this.multilingual_text= new HttpServiceBase<Interfaces.Imultilingual_text>( {url:conf.url + "collection/multilingual_text/" , secure:conf.secure} )  ;

		
	

		this.MultilangSendGridTemplate= new HttpServiceBase<Interfaces.IMultilangSendGridTemplate>( {url:conf.url + "collection/MultilangSendGridTemplate/" , secure:conf.secure} )  ;

		
	

		this.application= new HttpServiceBase<Interfaces.Iapplication>( {url:conf.url + "collection/application/" , secure:conf.secure} )  ;

		
		 
		this.pack_card= new HttpServiceBase<Interfaces.Ipack_card>({url:conf.url + "collection/pack_card/" , secure:conf.secure})  ;

		 
		 
		this.webapp= new HttpServiceBase<Interfaces.Iwebapp>({url:conf.url + "collection/webapp/" , secure:conf.secure})  ;

		 
		 
		this.app_training_course= new HttpServiceBase<Interfaces.Iapp_training_course>({url:conf.url + "collection/app_training_course/" , secure:conf.secure})  ;

		 
	

		this.application_instance= new HttpServiceBase<Interfaces.Iapplication_instance>( {url:conf.url + "collection/application_instance/" , secure:conf.secure} )  ;

		
	

		this.hello= new HttpServiceBase<Interfaces.Ihello>( {url:conf.url + "collection/hello/" , secure:conf.secure} )  ;

		
	

		this.user_profile= new HttpServiceBase<Interfaces.Iuser_profile>( {url:conf.url + "collection/user_profile/" , secure:conf.secure} )  ;

		
	

		this.user= new HttpServiceBase<Interfaces.Iuser>( {url:conf.url + "collection/user/" , secure:conf.secure} )  ;

		
	

		this.cloudStorageFiles= new HttpServiceBase<Interfaces.IcloudStorageFiles>( {url:conf.url + "collection/cloudStorageFiles/" , secure:conf.secure} )  ;

		
	

		this.cloudStorageFolders= new HttpServiceBase<Interfaces.IcloudStorageFolders>( {url:conf.url + "collection/cloudStorageFolders/" , secure:conf.secure} )  ;

		
	

		this.deploy_template= new HttpServiceBase<Interfaces.Ideploy_template>( {url:conf.url + "collection/deploy_template/" , secure:conf.secure} )  ;

		
		 
		this.deploy_template_application_configuration= new HttpServiceBase<Interfaces.Ideploy_template_application_configuration>({url:conf.url + "collection/deploy_template_application_configuration/" , secure:conf.secure})  ;

		 
		 
		this.deploy_template_training_course= new HttpServiceBase<Interfaces.Ideploy_template_training_course>({url:conf.url + "collection/deploy_template_training_course/" , secure:conf.secure})  ;

		 
		 
		this.deploy_template_training_course_i18n= new HttpServiceBase<Interfaces.Ideploy_template_training_course_i18n>({url:conf.url + "collection/deploy_template_training_course_i18n/" , secure:conf.secure})  ;

		 
		 
		this.deploy_template_licence_store_training= new HttpServiceBase<Interfaces.Ideploy_template_licence_store_training>({url:conf.url + "collection/deploy_template_licence_store_training/" , secure:conf.secure})  ;

		 
		 
		this.deploy_template_licence_store_application= new HttpServiceBase<Interfaces.Ideploy_template_licence_store_application>({url:conf.url + "collection/deploy_template_licence_store_application/" , secure:conf.secure})  ;

		 
		 
		this.deploy_template_training_course_savvy= new HttpServiceBase<Interfaces.Ideploy_template_training_course_savvy>({url:conf.url + "collection/deploy_template_training_course_savvy/" , secure:conf.secure})  ;

		 
	

		this.licence= new HttpServiceBase<Interfaces.Ilicence>( {url:conf.url + "collection/licence/" , secure:conf.secure} )  ;

		
		 
		this.licence_temporelle= new HttpServiceBase<Interfaces.Ilicence_temporelle>({url:conf.url + "collection/licence_temporelle/" , secure:conf.secure})  ;

		 
	

		this.end_client= new HttpServiceBase<Interfaces.Iend_client>( {url:conf.url + "collection/end_client/" , secure:conf.secure} )  ;

		
	
	}
	protected url:string ;
	protected secure: UtilsSecu = null
	
		/**
		 service d'accès à la collection :certificat
		 desc: certificat
		 
		 info: vous pouvez voir tous les objets de cette collection y compris les enfants
		 liste des interfaces héritées possibles:
		 
		 	Irsa      certificat RSA
		 
		 	Iapi_key      Défini un certificat utilisant uniquement une clé d'API pour une application donnée
		 
		 	Ipem_for_app      Certificat PEM pour une app donnée
		 
		 
		*/
		public certificat:HttpServiceBase<Interfaces.Icertificat> ;

		
		 /**
		 service d'accès a la sous-collection :rsa
		 desc: certificat RSA
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public rsa:HttpServiceBase<Interfaces.Irsa> ;

		 
		 /**
		 service d'accès a la sous-collection :api_key
		 desc: Défini un certificat utilisant uniquement une clé d'API pour une application donnée
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public api_key:HttpServiceBase<Interfaces.Iapi_key> ;

		 
		 /**
		 service d'accès a la sous-collection :pem_for_app
		 desc: Certificat PEM pour une app donnée
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public pem_for_app:HttpServiceBase<Interfaces.Ipem_for_app> ;

		 
	
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
		 
		 	Iapplication_configuration_appAdminDaesign      Application configuration for Daesign admin that have specific inputs
		 
		 	Iapplication_configuration_generic_author      conf for generic authos app
		 
		 	Iapplication_configuration_generic      generic conf
		 
		 	Iapplication_configuration_adaptivmath_teacher      generic conf
		 
		 	Iapplication_configuration_adaptivmath_student      generic conf
		 
		 	Iapplication_configuration_savvy_author      Configuration pour l'application Savvy - Author
		 
		 	Iapplication_configuration_appClient      c'est la configuration d'une application Client
		 
		 
		*/
		public application_configuration:HttpServiceBase<Interfaces.Iapplication_configuration> ;

		
		 /**
		 service d'accès a la sous-collection :application_configuration_super_admin_mongo
		 desc: configuration de l'application superAdminMongo
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public application_configuration_super_admin_mongo:HttpServiceBase<Interfaces.Iapplication_configuration_super_admin_mongo> ;

		 
		 /**
		 service d'accès a la sous-collection :application_configuration_parcours
		 desc: application_configuration_parcours
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public application_configuration_parcours:HttpServiceBase<Interfaces.Iapplication_configuration_parcours> ;

		 
		 /**
		 service d'accès a la sous-collection :application_configuration_xlxUploader
		 desc: application_configuration_xlxUploader
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public application_configuration_xlxUploader:HttpServiceBase<Interfaces.Iapplication_configuration_xlxUploader> ;

		 
		 /**
		 service d'accès a la sous-collection :application_configuration_web
		 desc: Application configuration for web applications
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public application_configuration_web:HttpServiceBase<Interfaces.Iapplication_configuration_web> ;

		 
		 /**
		 service d'accès a la sous-collection :application_configuration_appApprenant
		 desc: c'est la configuration d'une application Apprenant
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public application_configuration_appApprenant:HttpServiceBase<Interfaces.Iapplication_configuration_appApprenant> ;

		 
		 /**
		 service d'accès a la sous-collection :application_configuration_appCoach
		 desc: c'est la configuration d'une application coach
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public application_configuration_appCoach:HttpServiceBase<Interfaces.Iapplication_configuration_appCoach> ;

		 
		 /**
		 service d'accès a la sous-collection :application_configuration_appEditor
		 desc: c'est la configuration d'une application type editeur
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public application_configuration_appEditor:HttpServiceBase<Interfaces.Iapplication_configuration_appEditor> ;

		 
		 /**
		 service d'accès a la sous-collection :application_configuration_savvy_learner
		 desc: configuration de l'application Savvy Learner
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public application_configuration_savvy_learner:HttpServiceBase<Interfaces.Iapplication_configuration_savvy_learner> ;

		 
		 /**
		 service d'accès a la sous-collection :application_configuration_appAdminDaesign
		 desc: Application configuration for Daesign admin that have specific inputs
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public application_configuration_appAdminDaesign:HttpServiceBase<Interfaces.Iapplication_configuration_appAdminDaesign> ;

		 
		 /**
		 service d'accès a la sous-collection :application_configuration_generic_author
		 desc: conf for generic authos app
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public application_configuration_generic_author:HttpServiceBase<Interfaces.Iapplication_configuration_generic_author> ;

		 
		 /**
		 service d'accès a la sous-collection :application_configuration_generic
		 desc: generic conf
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public application_configuration_generic:HttpServiceBase<Interfaces.Iapplication_configuration_generic> ;

		 
		 /**
		 service d'accès a la sous-collection :application_configuration_adaptivmath_teacher
		 desc: generic conf
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public application_configuration_adaptivmath_teacher:HttpServiceBase<Interfaces.Iapplication_configuration_adaptivmath_teacher> ;

		 
		 /**
		 service d'accès a la sous-collection :application_configuration_adaptivmath_student
		 desc: generic conf
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public application_configuration_adaptivmath_student:HttpServiceBase<Interfaces.Iapplication_configuration_adaptivmath_student> ;

		 
		 /**
		 service d'accès a la sous-collection :application_configuration_savvy_author
		 desc: Configuration pour l'application Savvy - Author
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public application_configuration_savvy_author:HttpServiceBase<Interfaces.Iapplication_configuration_savvy_author> ;

		 
		 /**
		 service d'accès a la sous-collection :application_configuration_appClient
		 desc: c'est la configuration d'une application Client
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public application_configuration_appClient:HttpServiceBase<Interfaces.Iapplication_configuration_appClient> ;

		 
	
		/**
		 service d'accès à la collection :service_access
		 desc: décrit les régles de paramètre des servies
		 

		 
		*/
		public service_access:HttpServiceBase<Interfaces.Iservice_access> ;

		
	
		/**
		 service d'accès à la collection :service
		 desc: identification du service
		 
		 info: vous pouvez voir tous les objets de cette collection y compris les enfants
		 liste des interfaces héritées possibles:
		 
		 	Iservice_sso      c'est un sso
		 
		 	Iservice_init      service qui génére la configuration d'une application cliente (url du sso, id client, id_instance...)
		 
		 	Iservice_mailtoinfra      service qui permet de configurer l'authentification a partir d'un mail
		 
		 	Iservice_socketIo      communication temps réelle multi format
		 
		 	Iservice_supervision      service_supervision
		 
		 	Iservice_configuration      c'est le service de distribution des configurations des services
		 
		 	Iservice_goshabaGateway      passerelle pour goshaba
		 
		 	Iservice_like      service permettant de liker un objet de la base
		 
		 	Iservice_sendGrid      permet d'envoyer des mail via l'api send grid v3
		 
		 	Iservice_dumy_fso      simple remote file system a n utiliser que pour des test
		 
		 	Iservice_push_notification      Service pour gérer les notifications push des applications
		 
		 	Iservice_socket_io      service messagerie de soket.io
		 
		 	Iservice_tutor      service de gestion des message tutoré
		 
		 	Iservice_nginxConfigurator      service_nginxConfigurator
		 
		 	Iservice_nginxMultiConfigurator      configuration d'un service nginx multi configuration
		 
		 	Iservice_init_js      service qui retourne un init.js
		 
		 	Iservice_planned_tasks      Service de Taches planifiées
		 
		 	Iservice_infra_admin      administration de l'infra
		 
		 	Iservice_mailtoinfra2      retrouve la configuration de connection de l'app savy a partir du mail de l'utilisateur
		 
		 	Iservice_deploy      Service qu'il est bien sympathique pour déployer des applications de qualité
		 
		 	Iservice_hello      Service d'exemple
		 
		 	IServiceTracking      Service to acces tracking for application
		 
		 	Iservice_cloud_storage      Service used to upload files to AWS S3
		 
		 	Iservice_licence_token      c'est un service en charge de valider les licences et retourner les configurations des applications web
		 
		 	Iservice_mongo      configure un service mongo
		 
		 	Iservice_gateway      service passerelle vers l'interne
		 
		 	Iservice_amclustering      service passerelle pour le clustering
		 
		 	Iservice_nathan_gateway      Service servant de passerelle entre Nathan et notre infra
		 
		 	IService_scorm_gateway      service passerelle d'un package scorm vers l'interne
		 
		 	Iauthentication      service d'enregistrement
		 
		 	Isignin_service      service d'enregistrement
		 
		 	Iservice_signin      service d'enregistrement
		 
		 	Iservice_trainingCoursesService      service de gestion des parcourts de formation
		 
		 
		*/
		public service:HttpServiceBase<Interfaces.Iservice> ;

		
		 /**
		 service d'accès a la sous-collection :service_sso
		 desc: c'est un sso
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_sso:HttpServiceBase<Interfaces.Iservice_sso> ;

		 
		 /**
		 service d'accès a la sous-collection :service_init
		 desc: service qui génére la configuration d'une application cliente (url du sso, id client, id_instance...)
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_init:HttpServiceBase<Interfaces.Iservice_init> ;

		 
		 /**
		 service d'accès a la sous-collection :service_mailtoinfra
		 desc: service qui permet de configurer l'authentification a partir d'un mail
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_mailtoinfra:HttpServiceBase<Interfaces.Iservice_mailtoinfra> ;

		 
		 /**
		 service d'accès a la sous-collection :service_socketIo
		 desc: communication temps réelle multi format
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_socketIo:HttpServiceBase<Interfaces.Iservice_socketIo> ;

		 
		 /**
		 service d'accès a la sous-collection :service_supervision
		 desc: service_supervision
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_supervision:HttpServiceBase<Interfaces.Iservice_supervision> ;

		 
		 /**
		 service d'accès a la sous-collection :service_configuration
		 desc: c'est le service de distribution des configurations des services
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_configuration:HttpServiceBase<Interfaces.Iservice_configuration> ;

		 
		 /**
		 service d'accès a la sous-collection :service_goshabaGateway
		 desc: passerelle pour goshaba
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_goshabaGateway:HttpServiceBase<Interfaces.Iservice_goshabaGateway> ;

		 
		 /**
		 service d'accès a la sous-collection :service_like
		 desc: service permettant de liker un objet de la base
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_like:HttpServiceBase<Interfaces.Iservice_like> ;

		 
		 /**
		 service d'accès a la sous-collection :service_sendGrid
		 desc: permet d'envoyer des mail via l'api send grid v3
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_sendGrid:HttpServiceBase<Interfaces.Iservice_sendGrid> ;

		 
		 /**
		 service d'accès a la sous-collection :service_dumy_fso
		 desc: simple remote file system a n utiliser que pour des test
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_dumy_fso:HttpServiceBase<Interfaces.Iservice_dumy_fso> ;

		 
		 /**
		 service d'accès a la sous-collection :service_push_notification
		 desc: Service pour gérer les notifications push des applications
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_push_notification:HttpServiceBase<Interfaces.Iservice_push_notification> ;

		 
		 /**
		 service d'accès a la sous-collection :service_socket_io
		 desc: service messagerie de soket.io
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_socket_io:HttpServiceBase<Interfaces.Iservice_socket_io> ;

		 
		 /**
		 service d'accès a la sous-collection :service_tutor
		 desc: service de gestion des message tutoré
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_tutor:HttpServiceBase<Interfaces.Iservice_tutor> ;

		 
		 /**
		 service d'accès a la sous-collection :service_nginxConfigurator
		 desc: service_nginxConfigurator
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_nginxConfigurator:HttpServiceBase<Interfaces.Iservice_nginxConfigurator> ;

		 
		 /**
		 service d'accès a la sous-collection :service_nginxMultiConfigurator
		 desc: configuration d'un service nginx multi configuration
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_nginxMultiConfigurator:HttpServiceBase<Interfaces.Iservice_nginxMultiConfigurator> ;

		 
		 /**
		 service d'accès a la sous-collection :service_init_js
		 desc: service qui retourne un init.js
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_init_js:HttpServiceBase<Interfaces.Iservice_init_js> ;

		 
		 /**
		 service d'accès a la sous-collection :service_planned_tasks
		 desc: Service de Taches planifiées
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_planned_tasks:HttpServiceBase<Interfaces.Iservice_planned_tasks> ;

		 
		 /**
		 service d'accès a la sous-collection :service_infra_admin
		 desc: administration de l'infra
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_infra_admin:HttpServiceBase<Interfaces.Iservice_infra_admin> ;

		 
		 /**
		 service d'accès a la sous-collection :service_mailtoinfra2
		 desc: retrouve la configuration de connection de l'app savy a partir du mail de l'utilisateur
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_mailtoinfra2:HttpServiceBase<Interfaces.Iservice_mailtoinfra2> ;

		 
		 /**
		 service d'accès a la sous-collection :service_deploy
		 desc: Service qu'il est bien sympathique pour déployer des applications de qualité
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_deploy:HttpServiceBase<Interfaces.Iservice_deploy> ;

		 
		 /**
		 service d'accès a la sous-collection :service_hello
		 desc: Service d'exemple
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_hello:HttpServiceBase<Interfaces.Iservice_hello> ;

		 
		 /**
		 service d'accès a la sous-collection :ServiceTracking
		 desc: Service to acces tracking for application
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public ServiceTracking:HttpServiceBase<Interfaces.IServiceTracking> ;

		 
		 /**
		 service d'accès a la sous-collection :service_cloud_storage
		 desc: Service used to upload files to AWS S3
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_cloud_storage:HttpServiceBase<Interfaces.Iservice_cloud_storage> ;

		 
		 /**
		 service d'accès a la sous-collection :service_licence_token
		 desc: c'est un service en charge de valider les licences et retourner les configurations des applications web
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_licence_token:HttpServiceBase<Interfaces.Iservice_licence_token> ;

		 
		 /**
		 service d'accès a la sous-collection :service_mongo
		 desc: configure un service mongo
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_mongo:HttpServiceBase<Interfaces.Iservice_mongo> ;

		 
		 /**
		 service d'accès a la sous-collection :service_gateway
		 desc: service passerelle vers l'interne
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_gateway:HttpServiceBase<Interfaces.Iservice_gateway> ;

		 
		 /**
		 service d'accès a la sous-collection :service_amclustering
		 desc: service passerelle pour le clustering
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_amclustering:HttpServiceBase<Interfaces.Iservice_amclustering> ;

		 
		 /**
		 service d'accès a la sous-collection :service_nathan_gateway
		 desc: Service servant de passerelle entre Nathan et notre infra
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_nathan_gateway:HttpServiceBase<Interfaces.Iservice_nathan_gateway> ;

		 
		 /**
		 service d'accès a la sous-collection :Service_scorm_gateway
		 desc: service passerelle d'un package scorm vers l'interne
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public Service_scorm_gateway:HttpServiceBase<Interfaces.IService_scorm_gateway> ;

		 
		 /**
		 service d'accès a la sous-collection :authentication
		 desc: service d'enregistrement
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public authentication:HttpServiceBase<Interfaces.Iauthentication> ;

		 
		 /**
		 service d'accès a la sous-collection :signin_service
		 desc: service d'enregistrement
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public signin_service:HttpServiceBase<Interfaces.Isignin_service> ;

		 
		 /**
		 service d'accès a la sous-collection :service_signin
		 desc: service d'enregistrement
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_signin:HttpServiceBase<Interfaces.Iservice_signin> ;

		 
		 /**
		 service d'accès a la sous-collection :service_trainingCoursesService
		 desc: service de gestion des parcourts de formation
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_trainingCoursesService:HttpServiceBase<Interfaces.Iservice_trainingCoursesService> ;

		 
	
		/**
		 service d'accès à la collection :protoschema
		 desc: protoschema est un méta modéle. il permet de créer les autres modèle de la base
		 

		 
		*/
		public protoschema:HttpServiceBase<Interfaces.Iprotoschema> ;

		
	
		/**
		 service d'accès à la collection :mail
		 desc: collection de mail
		 
		 info: vous pouvez voir tous les objets de cette collection y compris les enfants
		 liste des interfaces héritées possibles:
		 
		 	Imail_sendgrid      objet envoyé a l'api sendgrid 
		 
		 
		*/
		public mail:HttpServiceBase<Interfaces.Imail> ;

		
		 /**
		 service d'accès a la sous-collection :mail_sendgrid
		 desc: objet envoyé a l'api sendgrid 
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public mail_sendgrid:HttpServiceBase<Interfaces.Imail_sendgrid> ;

		 
	
		/**
		 service d'accès à la collection :nginxConfigurationFile
		 desc: description d'un fichier de configuration nginx
		 

		 
		*/
		public nginxConfigurationFile:HttpServiceBase<Interfaces.InginxConfigurationFile> ;

		
	
		/**
		 service d'accès à la collection :_view
		 desc: créer des pipe d'agrégation intérogeable https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline/
		 
		 info: vous pouvez voir tous les objets de cette collection y compris les enfants
		 liste des interfaces héritées possibles:
		 
		 	I_view_params      view avec des params
		 
		 
		*/
		public _view:HttpServiceBase<Interfaces.I_view> ;

		
		 /**
		 service d'accès a la sous-collection :_view_params
		 desc: view avec des params
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public _view_params:HttpServiceBase<Interfaces.I_view_params> ;

		 
	
		/**
		 service d'accès à la collection :TemplateLodash
		 desc: template lodash + nom
		 

		 
		*/
		public TemplateLodash:HttpServiceBase<Interfaces.ITemplateLodash> ;

		
	
		/**
		 service d'accès à la collection :lang_code
		 desc: Définit le code pour une langue (se référer au code ISO 639 : https://fr.wikipedia.org/wiki/Liste_des_codes_ISO_639-1)
		 

		 
		*/
		public lang_code:HttpServiceBase<Interfaces.Ilang_code> ;

		
	
		/**
		 service d'accès à la collection :multilingual_text
		 desc: Définit un texte multilingue
		 

		 
		*/
		public multilingual_text:HttpServiceBase<Interfaces.Imultilingual_text> ;

		
	
		/**
		 service d'accès à la collection :MultilangSendGridTemplate
		 desc: décrit un template multi langue d'envoie de mail avec sendGrid
		 

		 
		*/
		public MultilangSendGridTemplate:HttpServiceBase<Interfaces.IMultilangSendGridTemplate> ;

		
	
		/**
		 service d'accès à la collection :application
		 desc: liste des applications
		 
		 info: vous pouvez voir tous les objets de cette collection y compris les enfants
		 liste des interfaces héritées possibles:
		 
		 	Ipack_card      c'est un paquet de carte
		 
		 	Iwebapp      webapp
		 
		 	Iapp_training_course      app_training_course
		 
		 
		*/
		public application:HttpServiceBase<Interfaces.Iapplication> ;

		
		 /**
		 service d'accès a la sous-collection :pack_card
		 desc: c'est un paquet de carte
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public pack_card:HttpServiceBase<Interfaces.Ipack_card> ;

		 
		 /**
		 service d'accès a la sous-collection :webapp
		 desc: webapp
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public webapp:HttpServiceBase<Interfaces.Iwebapp> ;

		 
		 /**
		 service d'accès a la sous-collection :app_training_course
		 desc: app_training_course
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public app_training_course:HttpServiceBase<Interfaces.Iapp_training_course> ;

		 
	
		/**
		 service d'accès à la collection :application_instance
		 desc: c'est le couple application configuration 
		 

		 
		*/
		public application_instance:HttpServiceBase<Interfaces.Iapplication_instance> ;

		
	
		/**
		 service d'accès à la collection :hello
		 desc: log collection for template backend service
		 

		 
		*/
		public hello:HttpServiceBase<Interfaces.Ihello> ;

		
	
		/**
		 service d'accès à la collection :user_profile
		 desc: User profile collection
		 

		 
		*/
		public user_profile:HttpServiceBase<Interfaces.Iuser_profile> ;

		
	
		/**
		 service d'accès à la collection :user
		 desc: User account collection
		 

		 
		*/
		public user:HttpServiceBase<Interfaces.Iuser> ;

		
	
		/**
		 service d'accès à la collection :cloudStorageFiles
		 desc: List of files stored in a cloud storage
		 

		 
		*/
		public cloudStorageFiles:HttpServiceBase<Interfaces.IcloudStorageFiles> ;

		
	
		/**
		 service d'accès à la collection :cloudStorageFolders
		 desc: List of folders stored in a cloud storage with ACL
		 

		 
		*/
		public cloudStorageFolders:HttpServiceBase<Interfaces.IcloudStorageFolders> ;

		
	
		/**
		 service d'accès à la collection :deploy_template
		 desc: Templates collection used by the deployment service
		 
		 info: vous pouvez voir tous les objets de cette collection y compris les enfants
		 liste des interfaces héritées possibles:
		 
		 	Ideploy_template_application_configuration      Template used by deploy service - application configuration specific
		 
		 	Ideploy_template_training_course      Template used by deploy service - training course specific
		 
		 	Ideploy_template_training_course_i18n      Template used by deploy service - training course internationalisation
		 
		 	Ideploy_template_licence_store_training       Template used by deploy service - training licence store specific
		 
		 	Ideploy_template_licence_store_application      Template used by deploy service - application licence store specific
		 
		 	Ideploy_template_training_course_savvy      Deploy template for SAVVY training courses
		 
		 
		*/
		public deploy_template:HttpServiceBase<Interfaces.Ideploy_template> ;

		
		 /**
		 service d'accès a la sous-collection :deploy_template_application_configuration
		 desc: Template used by deploy service - application configuration specific
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public deploy_template_application_configuration:HttpServiceBase<Interfaces.Ideploy_template_application_configuration> ;

		 
		 /**
		 service d'accès a la sous-collection :deploy_template_training_course
		 desc: Template used by deploy service - training course specific
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public deploy_template_training_course:HttpServiceBase<Interfaces.Ideploy_template_training_course> ;

		 
		 /**
		 service d'accès a la sous-collection :deploy_template_training_course_i18n
		 desc: Template used by deploy service - training course internationalisation
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public deploy_template_training_course_i18n:HttpServiceBase<Interfaces.Ideploy_template_training_course_i18n> ;

		 
		 /**
		 service d'accès a la sous-collection :deploy_template_licence_store_training
		 desc:  Template used by deploy service - training licence store specific
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public deploy_template_licence_store_training:HttpServiceBase<Interfaces.Ideploy_template_licence_store_training> ;

		 
		 /**
		 service d'accès a la sous-collection :deploy_template_licence_store_application
		 desc: Template used by deploy service - application licence store specific
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public deploy_template_licence_store_application:HttpServiceBase<Interfaces.Ideploy_template_licence_store_application> ;

		 
		 /**
		 service d'accès a la sous-collection :deploy_template_training_course_savvy
		 desc: Deploy template for SAVVY training courses
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public deploy_template_training_course_savvy:HttpServiceBase<Interfaces.Ideploy_template_training_course_savvy> ;

		 
	
		/**
		 service d'accès à la collection :licence
		 desc: représente la licence d'un utilisateur pour un service (ou application) distribué par un end_client
		 
		 info: vous pouvez voir tous les objets de cette collection y compris les enfants
		 liste des interfaces héritées possibles:
		 
		 	Ilicence_temporelle      c'est une licence qui dure un certain temps
		 
		 
		*/
		public licence:HttpServiceBase<Interfaces.Ilicence> ;

		
		 /**
		 service d'accès a la sous-collection :licence_temporelle
		 desc: c'est une licence qui dure un certain temps
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public licence_temporelle:HttpServiceBase<Interfaces.Ilicence_temporelle> ;

		 
	
		/**
		 service d'accès à la collection :end_client
		 desc: c'est le client que l'on facture
		 

		 
		*/
		public end_client:HttpServiceBase<Interfaces.Iend_client> ;

		
	
	
}


/**
	accès à la vue :CloudStorageFolderList 
	View used to get cloudStorageFolder nested folders
*/
export class api_view_CloudStorageFolderList extends HttpAbstractService {
/**
	accès à la vue :CloudStorageFolderList 
	
*/	
	constructor( public conf:any ) {
			super( conf )
			this.url = conf.url ;
		}

	protected url:string ;

	protected  globalCtxInt:CtxInterpretor = new CtxInterpretor(process.env) ;

	/**
	génére une requette sur la vue CloudStorageFolderList
	
	*/
	public get( folderId:string , depth:number ,  query: string = '*', headers: any = {}   ): Promise<IHttpResult<Interfaces.IcloudStorageFolders>> {

		return this.baseGet<Interfaces.IcloudStorageFolders>(this.url + folderId.toString() + "/" + depth.toString() + "/" +  query , headers)
	}

	/** middleware
	génére une requette sur la vue CloudStorageFolderList
	
	*/
	public  getMiddleware = (config:MiddleWareConfig) =>{   
	    config = this.globalCtxInt.updateEnv(config , true) ;
	    return (req , res , next) =>{
	      var localCtxInt:CtxInterpretor = new CtxInterpretor(req.ctx)
	      localCtxInt.startPatern = "$ctx." ;
	      var localConfig = localCtxInt.updateEnv(config , true) ;
	      this.get( localConfig.params.folderId , localConfig.params.depth ,  localConfig.params.query, localConfig.headers)
	      .then((data)=>{
	        req.ctx[localConfig.output] = data ;
	        next() ;
	      }).catch((err)=>{
	        next(err)
	      })
	    }
	  }
	}

/**
	accès à la vue :CloudStorageFolderAncestors 
	Aggregation that returns every ancestors of a folder ordered from farer to current folder
*/
export class api_view_CloudStorageFolderAncestors extends HttpAbstractService {
/**
	accès à la vue :CloudStorageFolderAncestors 
	
*/	
	constructor( public conf:any ) {
			super( conf )
			this.url = conf.url ;
		}

	protected url:string ;

	protected  globalCtxInt:CtxInterpretor = new CtxInterpretor(process.env) ;

	/**
	génére une requette sur la vue CloudStorageFolderAncestors
	
	*/
	public get( folderId:string ,  query: string = '*', headers: any = {}   ): Promise<IHttpResult<Interfaces.IcloudStorageFolders>> {

		return this.baseGet<Interfaces.IcloudStorageFolders>(this.url + folderId.toString() + "/" +  query , headers)
	}

	/** middleware
	génére une requette sur la vue CloudStorageFolderAncestors
	
	*/
	public  getMiddleware = (config:MiddleWareConfig) =>{   
	    config = this.globalCtxInt.updateEnv(config , true) ;
	    return (req , res , next) =>{
	      var localCtxInt:CtxInterpretor = new CtxInterpretor(req.ctx)
	      localCtxInt.startPatern = "$ctx." ;
	      var localConfig = localCtxInt.updateEnv(config , true) ;
	      this.get( localConfig.params.folderId ,  localConfig.params.query, localConfig.headers)
	      .then((data)=>{
	        req.ctx[localConfig.output] = data ;
	        next() ;
	      }).catch((err)=>{
	        next(err)
	      })
	    }
	  }
	}

/**
	accès à la vue :CloudStorageFolderSearch 
	View used to filter Folders by tags
*/
export class api_view_CloudStorageFolderSearch extends HttpAbstractService {
/**
	accès à la vue :CloudStorageFolderSearch 
	
*/	
	constructor( public conf:any ) {
			super( conf )
			this.url = conf.url ;
		}

	protected url:string ;

	protected  globalCtxInt:CtxInterpretor = new CtxInterpretor(process.env) ;

	/**
	génére une requette sur la vue CloudStorageFolderSearch
	
	*/
	public get( folderId:string , depth:number , tag1:string , tag2:string , tag3:string , type:string ,  query: string = '*', headers: any = {}   ): Promise<IHttpResult<Interfaces.IcloudStorageFolders>> {

		return this.baseGet<Interfaces.IcloudStorageFolders>(this.url + folderId.toString() + "/" + depth.toString() + "/" + tag1.toString() + "/" + tag2.toString() + "/" + tag3.toString() + "/" + type.toString() + "/" +  query , headers)
	}

	/** middleware
	génére une requette sur la vue CloudStorageFolderSearch
	
	*/
	public  getMiddleware = (config:MiddleWareConfig) =>{   
	    config = this.globalCtxInt.updateEnv(config , true) ;
	    return (req , res , next) =>{
	      var localCtxInt:CtxInterpretor = new CtxInterpretor(req.ctx)
	      localCtxInt.startPatern = "$ctx." ;
	      var localConfig = localCtxInt.updateEnv(config , true) ;
	      this.get( localConfig.params.folderId , localConfig.params.depth , localConfig.params.tag1 , localConfig.params.tag2 , localConfig.params.tag3 , localConfig.params.type ,  localConfig.params.query, localConfig.headers)
	      .then((data)=>{
	        req.ctx[localConfig.output] = data ;
	        next() ;
	      }).catch((err)=>{
	        next(err)
	      })
	    }
	  }
	}

/**
	accès à la vue :Client 
	retourne la donnée du client connecté
*/
export class api_view_Client extends HttpAbstractService {
/**
	accès à la vue :Client 
	
*/	
	constructor( public conf:any ) {
			super( conf )
			this.url = conf.url ;
		}

	protected url:string ;

	protected  globalCtxInt:CtxInterpretor = new CtxInterpretor(process.env) ;

	/**
	génére une requette sur la vue Client
	
	*/
	public get(  query: string = '*', headers: any = {}   ): Promise<IHttpResult<Interfaces.Iend_client>> {

		return this.baseGet<Interfaces.Iend_client>(this.url +  query , headers)
	}

	/** middleware
	génére une requette sur la vue Client
	
	*/
	public  getMiddleware = (config:MiddleWareConfig) =>{   
	    config = this.globalCtxInt.updateEnv(config , true) ;
	    return (req , res , next) =>{
	      var localCtxInt:CtxInterpretor = new CtxInterpretor(req.ctx)
	      localCtxInt.startPatern = "$ctx." ;
	      var localConfig = localCtxInt.updateEnv(config , true) ;
	      this.get(  localConfig.params.query, localConfig.headers)
	      .then((data)=>{
	        req.ctx[localConfig.output] = data ;
	        next() ;
	      }).catch((err)=>{
	        next(err)
	      })
	    }
	  }
	}

/**
	accès à la vue :licensesUser 
	retourne la liste des licences d'un utilisateur pour le client courrant
*/
export class api_view_licensesUser extends HttpAbstractService {
/**
	accès à la vue :licensesUser 
	
*/	
	constructor( public conf:any ) {
			super( conf )
			this.url = conf.url ;
		}

	protected url:string ;

	protected  globalCtxInt:CtxInterpretor = new CtxInterpretor(process.env) ;

	/**
	génére une requette sur la vue licensesUser
	
	*/
	public get( userId:string ,  query: string = '*', headers: any = {}   ): Promise<IHttpResult<Interfaces.Ilicence>> {

		return this.baseGet<Interfaces.Ilicence>(this.url + userId.toString() + "/" +  query , headers)
	}

	/** middleware
	génére une requette sur la vue licensesUser
	
	*/
	public  getMiddleware = (config:MiddleWareConfig) =>{   
	    config = this.globalCtxInt.updateEnv(config , true) ;
	    return (req , res , next) =>{
	      var localCtxInt:CtxInterpretor = new CtxInterpretor(req.ctx)
	      localCtxInt.startPatern = "$ctx." ;
	      var localConfig = localCtxInt.updateEnv(config , true) ;
	      this.get( localConfig.params.userId ,  localConfig.params.query, localConfig.headers)
	      .then((data)=>{
	        req.ctx[localConfig.output] = data ;
	        next() ;
	      }).catch((err)=>{
	        next(err)
	      })
	    }
	  }
	}

/**
	accès à la vue :usersLicense 
	retourne la liste des utilisateurs pour le client courant et la licence donnée
*/
export class api_view_usersLicense extends HttpAbstractService {
/**
	accès à la vue :usersLicense 
	
*/	
	constructor( public conf:any ) {
			super( conf )
			this.url = conf.url ;
		}

	protected url:string ;

	protected  globalCtxInt:CtxInterpretor = new CtxInterpretor(process.env) ;

	/**
	génére une requette sur la vue usersLicense
	
	*/
	public get( licenceStoreRef:string ,  query: string = '*', headers: any = {}   ): Promise<IHttpResult<Interfaces.Ilicence>> {

		return this.baseGet<Interfaces.Ilicence>(this.url + licenceStoreRef.toString() + "/" +  query , headers)
	}

	/** middleware
	génére une requette sur la vue usersLicense
	
	*/
	public  getMiddleware = (config:MiddleWareConfig) =>{   
	    config = this.globalCtxInt.updateEnv(config , true) ;
	    return (req , res , next) =>{
	      var localCtxInt:CtxInterpretor = new CtxInterpretor(req.ctx)
	      localCtxInt.startPatern = "$ctx." ;
	      var localConfig = localCtxInt.updateEnv(config , true) ;
	      this.get( localConfig.params.licenceStoreRef ,  localConfig.params.query, localConfig.headers)
	      .then((data)=>{
	        req.ctx[localConfig.output] = data ;
	        next() ;
	      }).catch((err)=>{
	        next(err)
	      })
	    }
	  }
	}

/**
	accès à la vue :clientParent 
	Get the client parent
*/
export class api_view_clientParent extends HttpAbstractService {
/**
	accès à la vue :clientParent 
	
*/	
	constructor( public conf:any ) {
			super( conf )
			this.url = conf.url ;
		}

	protected url:string ;

	protected  globalCtxInt:CtxInterpretor = new CtxInterpretor(process.env) ;

	/**
	génére une requette sur la vue clientParent
	
	*/
	public get(  query: string = '*', headers: any = {}   ): Promise<IHttpResult<Interfaces.Iend_client>> {

		return this.baseGet<Interfaces.Iend_client>(this.url +  query , headers)
	}

	/** middleware
	génére une requette sur la vue clientParent
	
	*/
	public  getMiddleware = (config:MiddleWareConfig) =>{   
	    config = this.globalCtxInt.updateEnv(config , true) ;
	    return (req , res , next) =>{
	      var localCtxInt:CtxInterpretor = new CtxInterpretor(req.ctx)
	      localCtxInt.startPatern = "$ctx." ;
	      var localConfig = localCtxInt.updateEnv(config , true) ;
	      this.get(  localConfig.params.query, localConfig.headers)
	      .then((data)=>{
	        req.ctx[localConfig.output] = data ;
	        next() ;
	      }).catch((err)=>{
	        next(err)
	      })
	    }
	  }
	}

/**
	accès à la vue :UserLicence 
	retourne la liste des licences d'un utilisateur pour le client courrant ( == licensesUser)
*/
export class api_view_UserLicence extends HttpAbstractService {
/**
	accès à la vue :UserLicence 
	
*/	
	constructor( public conf:any ) {
			super( conf )
			this.url = conf.url ;
		}

	protected url:string ;

	protected  globalCtxInt:CtxInterpretor = new CtxInterpretor(process.env) ;

	/**
	génére une requette sur la vue UserLicence
	
	*/
	public get( userId:string ,  query: string = '*', headers: any = {}   ): Promise<IHttpResult<Interfaces.Ilicence>> {

		return this.baseGet<Interfaces.Ilicence>(this.url + userId.toString() + "/" +  query , headers)
	}

	/** middleware
	génére une requette sur la vue UserLicence
	
	*/
	public  getMiddleware = (config:MiddleWareConfig) =>{   
	    config = this.globalCtxInt.updateEnv(config , true) ;
	    return (req , res , next) =>{
	      var localCtxInt:CtxInterpretor = new CtxInterpretor(req.ctx)
	      localCtxInt.startPatern = "$ctx." ;
	      var localConfig = localCtxInt.updateEnv(config , true) ;
	      this.get( localConfig.params.userId ,  localConfig.params.query, localConfig.headers)
	      .then((data)=>{
	        req.ctx[localConfig.output] = data ;
	        next() ;
	      }).catch((err)=>{
	        next(err)
	      })
	    }
	  }
	}



export class api_view_plateform {

	constructor( public conf:any ){
	
	this.CloudStorageFolderList = new api_view_CloudStorageFolderList({url:conf.url + "views/CloudStorageFolderList/" , secure:conf.secure})  ;
		
	this.CloudStorageFolderAncestors = new api_view_CloudStorageFolderAncestors({url:conf.url + "views/CloudStorageFolderAncestors/" , secure:conf.secure})  ;
		
	this.CloudStorageFolderSearch = new api_view_CloudStorageFolderSearch({url:conf.url + "views/CloudStorageFolderSearch/" , secure:conf.secure})  ;
		
	this.Client = new api_view_Client({url:conf.url + "views/Client/" , secure:conf.secure})  ;
		
	this.licensesUser = new api_view_licensesUser({url:conf.url + "views/licensesUser/" , secure:conf.secure})  ;
		
	this.usersLicense = new api_view_usersLicense({url:conf.url + "views/usersLicense/" , secure:conf.secure})  ;
		
	this.clientParent = new api_view_clientParent({url:conf.url + "views/clientParent/" , secure:conf.secure})  ;
		
	this.UserLicence = new api_view_UserLicence({url:conf.url + "views/UserLicence/" , secure:conf.secure})  ;
		
	}

	
	/**
	accès à la vue :CloudStorageFolderList     View used to get cloudStorageFolder nested folders
	*/
	public CloudStorageFolderList:api_view_CloudStorageFolderList ;
	
	/**
	accès à la vue :CloudStorageFolderAncestors     Aggregation that returns every ancestors of a folder ordered from farer to current folder
	*/
	public CloudStorageFolderAncestors:api_view_CloudStorageFolderAncestors ;
	
	/**
	accès à la vue :CloudStorageFolderSearch     View used to filter Folders by tags
	*/
	public CloudStorageFolderSearch:api_view_CloudStorageFolderSearch ;
	
	/**
	accès à la vue :Client     retourne la donnée du client connecté
	*/
	public Client:api_view_Client ;
	
	/**
	accès à la vue :licensesUser     retourne la liste des licences d'un utilisateur pour le client courrant
	*/
	public licensesUser:api_view_licensesUser ;
	
	/**
	accès à la vue :usersLicense     retourne la liste des utilisateurs pour le client courant et la licence donnée
	*/
	public usersLicense:api_view_usersLicense ;
	
	/**
	accès à la vue :clientParent     Get the client parent
	*/
	public clientParent:api_view_clientParent ;
	
	/**
	accès à la vue :UserLicence     retourne la liste des licences d'un utilisateur pour le client courrant ( == licensesUser)
	*/
	public UserLicence:api_view_UserLicence ;
	
	
}


export  class Api_plateforme {

	constructor(public conf:any  ){
		this.collections = new api_collection_plateform(conf ) ;
 		this.views = new api_view_plateform(conf) ;
	}



	/**
		liste des collections de l'api
	*/
	public collections:api_collection_plateform ;
	/**
		liste des vues de l'api
	*/
	public views: api_view_plateform ; 
} 


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

		 
		 
		this.application_configuration_appAdminDaesign= new HttpServiceBase<Interfaces.Iapplication_configuration_appAdminDaesign>({url:conf.url + "collection/application_configuration_appAdminDaesign/" , secure:conf.secure})  ;

		 
		 
		this.application_configuration_appClient= new HttpServiceBase<Interfaces.Iapplication_configuration_appClient>({url:conf.url + "collection/application_configuration_appClient/" , secure:conf.secure})  ;

		 
		 
		this.application_configuration_web= new HttpServiceBase<Interfaces.Iapplication_configuration_web>({url:conf.url + "collection/application_configuration_web/" , secure:conf.secure})  ;

		 
		 
		this.application_configuration_appApprenant= new HttpServiceBase<Interfaces.Iapplication_configuration_appApprenant>({url:conf.url + "collection/application_configuration_appApprenant/" , secure:conf.secure})  ;

		 
		 
		this.application_configuration_appCoach= new HttpServiceBase<Interfaces.Iapplication_configuration_appCoach>({url:conf.url + "collection/application_configuration_appCoach/" , secure:conf.secure})  ;

		 
		 
		this.application_configuration_appEditor= new HttpServiceBase<Interfaces.Iapplication_configuration_appEditor>({url:conf.url + "collection/application_configuration_appEditor/" , secure:conf.secure})  ;

		 
		 
		this.application_configuration_savvy_author= new HttpServiceBase<Interfaces.Iapplication_configuration_savvy_author>({url:conf.url + "collection/application_configuration_savvy_author/" , secure:conf.secure})  ;

		 
		 
		this.application_configuration_savvy_learner= new HttpServiceBase<Interfaces.Iapplication_configuration_savvy_learner>({url:conf.url + "collection/application_configuration_savvy_learner/" , secure:conf.secure})  ;

		 
	

		this.service_access= new HttpServiceBase<Interfaces.Iservice_access>( {url:conf.url + "collection/service_access/" , secure:conf.secure} )  ;

		
	

		this.service= new HttpServiceBase<Interfaces.Iservice>( {url:conf.url + "collection/service/" , secure:conf.secure} )  ;

		
		 
		this.service_sso= new HttpServiceBase<Interfaces.Iservice_sso>({url:conf.url + "collection/service_sso/" , secure:conf.secure})  ;

		 
		 
		this.service_init= new HttpServiceBase<Interfaces.Iservice_init>({url:conf.url + "collection/service_init/" , secure:conf.secure})  ;

		 
		 
		this.service_mailtoinfra= new HttpServiceBase<Interfaces.Iservice_mailtoinfra>({url:conf.url + "collection/service_mailtoinfra/" , secure:conf.secure})  ;

		 
		 
		this.service_mongo= new HttpServiceBase<Interfaces.Iservice_mongo>({url:conf.url + "collection/service_mongo/" , secure:conf.secure})  ;

		 
		 
		this.service_socketIo= new HttpServiceBase<Interfaces.Iservice_socketIo>({url:conf.url + "collection/service_socketIo/" , secure:conf.secure})  ;

		 
		 
		this.service_supervision= new HttpServiceBase<Interfaces.Iservice_supervision>({url:conf.url + "collection/service_supervision/" , secure:conf.secure})  ;

		 
		 
		this.service_configuration= new HttpServiceBase<Interfaces.Iservice_configuration>({url:conf.url + "collection/service_configuration/" , secure:conf.secure})  ;

		 
		 
		this.service_goshabaGateway= new HttpServiceBase<Interfaces.Iservice_goshabaGateway>({url:conf.url + "collection/service_goshabaGateway/" , secure:conf.secure})  ;

		 
		 
		this.service_like= new HttpServiceBase<Interfaces.Iservice_like>({url:conf.url + "collection/service_like/" , secure:conf.secure})  ;

		 
		 
		this.service_signin= new HttpServiceBase<Interfaces.Iservice_signin>({url:conf.url + "collection/service_signin/" , secure:conf.secure})  ;

		 
		 
		this.service_sendGrid= new HttpServiceBase<Interfaces.Iservice_sendGrid>({url:conf.url + "collection/service_sendGrid/" , secure:conf.secure})  ;

		 
		 
		this.service_licence_token= new HttpServiceBase<Interfaces.Iservice_licence_token>({url:conf.url + "collection/service_licence_token/" , secure:conf.secure})  ;

		 
		 
		this.service_dumy_fso= new HttpServiceBase<Interfaces.Iservice_dumy_fso>({url:conf.url + "collection/service_dumy_fso/" , secure:conf.secure})  ;

		 
		 
		this.service_push_notification= new HttpServiceBase<Interfaces.Iservice_push_notification>({url:conf.url + "collection/service_push_notification/" , secure:conf.secure})  ;

		 
		 
		this.service_socket_io= new HttpServiceBase<Interfaces.Iservice_socket_io>({url:conf.url + "collection/service_socket_io/" , secure:conf.secure})  ;

		 
		 
		this.service_tutor= new HttpServiceBase<Interfaces.Iservice_tutor>({url:conf.url + "collection/service_tutor/" , secure:conf.secure})  ;

		 
		 
		this.service_nginxConfigurator= new HttpServiceBase<Interfaces.Iservice_nginxConfigurator>({url:conf.url + "collection/service_nginxConfigurator/" , secure:conf.secure})  ;

		 
		 
		this.service_nginxMultiConfigurator= new HttpServiceBase<Interfaces.Iservice_nginxMultiConfigurator>({url:conf.url + "collection/service_nginxMultiConfigurator/" , secure:conf.secure})  ;

		 
		 
		this.service_init_js= new HttpServiceBase<Interfaces.Iservice_init_js>({url:conf.url + "collection/service_init_js/" , secure:conf.secure})  ;

		 
		 
		this.service_planned_tasks= new HttpServiceBase<Interfaces.Iservice_planned_tasks>({url:conf.url + "collection/service_planned_tasks/" , secure:conf.secure})  ;

		 
		 
		this.Service_scorm_gateway= new HttpServiceBase<Interfaces.IService_scorm_gateway>({url:conf.url + "collection/Service_scorm_gateway/" , secure:conf.secure})  ;

		 
		 
		this.service_infra_admin= new HttpServiceBase<Interfaces.Iservice_infra_admin>({url:conf.url + "collection/service_infra_admin/" , secure:conf.secure})  ;

		 
		 
		this.service_nathan_gateway= new HttpServiceBase<Interfaces.Iservice_nathan_gateway>({url:conf.url + "collection/service_nathan_gateway/" , secure:conf.secure})  ;

		 
		 
		this.service_mailtoinfra2= new HttpServiceBase<Interfaces.Iservice_mailtoinfra2>({url:conf.url + "collection/service_mailtoinfra2/" , secure:conf.secure})  ;

		 
		 
		this.service_trainingCoursesService= new HttpServiceBase<Interfaces.Iservice_trainingCoursesService>({url:conf.url + "collection/service_trainingCoursesService/" , secure:conf.secure})  ;

		 
		 
		this.service_deploy= new HttpServiceBase<Interfaces.Iservice_deploy>({url:conf.url + "collection/service_deploy/" , secure:conf.secure})  ;

		 
		 
		this.service_hello= new HttpServiceBase<Interfaces.Iservice_hello>({url:conf.url + "collection/service_hello/" , secure:conf.secure})  ;

		 
	

		this.protoschema= new HttpServiceBase<Interfaces.Iprotoschema>( {url:conf.url + "collection/protoschema/" , secure:conf.secure} )  ;

		
	

		this.mail= new HttpServiceBase<Interfaces.Imail>( {url:conf.url + "collection/mail/" , secure:conf.secure} )  ;

		
		 
		this.mail_sendgrid= new HttpServiceBase<Interfaces.Imail_sendgrid>({url:conf.url + "collection/mail_sendgrid/" , secure:conf.secure})  ;

		 
	

		this.nginxConfigurationFile= new HttpServiceBase<Interfaces.InginxConfigurationFile>( {url:conf.url + "collection/nginxConfigurationFile/" , secure:conf.secure} )  ;

		
	

		this._view= new HttpServiceBase<Interfaces.I_view>( {url:conf.url + "collection/_view/" , secure:conf.secure} )  ;

		
		 
		this._view_params= new HttpServiceBase<Interfaces.I_view_params>({url:conf.url + "collection/_view_params/" , secure:conf.secure})  ;

		 
	

		this.TemplateLodash= new HttpServiceBase<Interfaces.ITemplateLodash>( {url:conf.url + "collection/TemplateLodash/" , secure:conf.secure} )  ;

		
	

		this.lang_code= new HttpServiceBase<Interfaces.Ilang_code>( {url:conf.url + "collection/lang_code/" , secure:conf.secure} )  ;

		
	

		this.multilingual_text= new HttpServiceBase<Interfaces.Imultilingual_text>( {url:conf.url + "collection/multilingual_text/" , secure:conf.secure} )  ;

		
	

		this.licence= new HttpServiceBase<Interfaces.Ilicence>( {url:conf.url + "collection/licence/" , secure:conf.secure} )  ;

		
		 
		this.licence_temporelle= new HttpServiceBase<Interfaces.Ilicence_temporelle>({url:conf.url + "collection/licence_temporelle/" , secure:conf.secure})  ;

		 
	

		this.end_client= new HttpServiceBase<Interfaces.Iend_client>( {url:conf.url + "collection/end_client/" , secure:conf.secure} )  ;

		
	

		this.MultilangSendGridTemplate= new HttpServiceBase<Interfaces.IMultilangSendGridTemplate>( {url:conf.url + "collection/MultilangSendGridTemplate/" , secure:conf.secure} )  ;

		
	

		this.application= new HttpServiceBase<Interfaces.Iapplication>( {url:conf.url + "collection/application/" , secure:conf.secure} )  ;

		
		 
		this.pack_card= new HttpServiceBase<Interfaces.Ipack_card>({url:conf.url + "collection/pack_card/" , secure:conf.secure})  ;

		 
		 
		this.webapp= new HttpServiceBase<Interfaces.Iwebapp>({url:conf.url + "collection/webapp/" , secure:conf.secure})  ;

		 
		 
		this.app_training_course= new HttpServiceBase<Interfaces.Iapp_training_course>({url:conf.url + "collection/app_training_course/" , secure:conf.secure})  ;

		 
	

		this.application_instance= new HttpServiceBase<Interfaces.Iapplication_instance>( {url:conf.url + "collection/application_instance/" , secure:conf.secure} )  ;

		
	

		this.hello= new HttpServiceBase<Interfaces.Ihello>( {url:conf.url + "collection/hello/" , secure:conf.secure} )  ;

		
	
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
		 
		 	Iapplication_configuration_appAdminDaesign      Application configuration for Daesign admin that have specific inputs
		 
		 	Iapplication_configuration_appClient      c'est la configuration d'une application Client
		 
		 	Iapplication_configuration_web      Application configuration for web applications
		 
		 	Iapplication_configuration_appApprenant      c'est la configuration d'une application Apprenant
		 
		 	Iapplication_configuration_appCoach      c'est la configuration d'une application coach
		 
		 	Iapplication_configuration_appEditor      c'est la configuration d'une application type editeur
		 
		 	Iapplication_configuration_savvy_author      Configuration pour l'application Savvy - Author
		 
		 	Iapplication_configuration_savvy_learner      configuration de l'application Savvy Learner
		 
		 
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
		 service d'accès a la sous-collection :application_configuration_appAdminDaesign
		 desc: Application configuration for Daesign admin that have specific inputs
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public application_configuration_appAdminDaesign:HttpServiceBase<Interfaces.Iapplication_configuration_appAdminDaesign> ;

		 
		 /**
		 service d'accès a la sous-collection :application_configuration_appClient
		 desc: c'est la configuration d'une application Client
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public application_configuration_appClient:HttpServiceBase<Interfaces.Iapplication_configuration_appClient> ;

		 
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
		 service d'accès a la sous-collection :application_configuration_savvy_author
		 desc: Configuration pour l'application Savvy - Author
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public application_configuration_savvy_author:HttpServiceBase<Interfaces.Iapplication_configuration_savvy_author> ;

		 
		 /**
		 service d'accès a la sous-collection :application_configuration_savvy_learner
		 desc: configuration de l'application Savvy Learner
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public application_configuration_savvy_learner:HttpServiceBase<Interfaces.Iapplication_configuration_savvy_learner> ;

		 
	
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
		 service d'accès a la sous-collection :service_mongo
		 desc: configure un service mongo
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_mongo:HttpServiceBase<Interfaces.Iservice_mongo> ;

		 
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
		 service d'accès a la sous-collection :service_signin
		 desc: service d'enregistrement
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_signin:HttpServiceBase<Interfaces.Iservice_signin> ;

		 
		 /**
		 service d'accès a la sous-collection :service_sendGrid
		 desc: permet d'envoyer des mail via l'api send grid v3
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_sendGrid:HttpServiceBase<Interfaces.Iservice_sendGrid> ;

		 
		 /**
		 service d'accès a la sous-collection :service_licence_token
		 desc: c'est un service en charge de valider les licences et retourner les configurations des applications web
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_licence_token:HttpServiceBase<Interfaces.Iservice_licence_token> ;

		 
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
		 service d'accès a la sous-collection :Service_scorm_gateway
		 desc: service passerelle d'un package scorm vers l'interne
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public Service_scorm_gateway:HttpServiceBase<Interfaces.IService_scorm_gateway> ;

		 
		 /**
		 service d'accès a la sous-collection :service_infra_admin
		 desc: administration de l'infra
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_infra_admin:HttpServiceBase<Interfaces.Iservice_infra_admin> ;

		 
		 /**
		 service d'accès a la sous-collection :service_nathan_gateway
		 desc: Service servant de passerelle entre Nathan et notre infra
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_nathan_gateway:HttpServiceBase<Interfaces.Iservice_nathan_gateway> ;

		 
		 /**
		 service d'accès a la sous-collection :service_mailtoinfra2
		 desc: retrouve la configuration de connection de l'app savy a partir du mail de l'utilisateur
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_mailtoinfra2:HttpServiceBase<Interfaces.Iservice_mailtoinfra2> ;

		 
		 /**
		 service d'accès a la sous-collection :service_trainingCoursesService
		 desc: service de gestion des parcourts de formation
		 info: vous ne pouvez voir que ce type d'objet
		*/
		public service_trainingCoursesService:HttpServiceBase<Interfaces.Iservice_trainingCoursesService> ;

		 
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

		
	
	
}


/**
	accès à la vue :UserLicence 
	retourne la liste des licences d'un utilisateur pour le client courrant
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



export class api_view_plateform {

	constructor( public conf:any ){
	
	this.UserLicence = new api_view_UserLicence({url:conf.url + "views/UserLicence/" , secure:conf.secure})  ;
		
	this.Client = new api_view_Client({url:conf.url + "views/Client/" , secure:conf.secure})  ;
		
	}

	
	/**
	accès à la vue :UserLicence     retourne la liste des licences d'un utilisateur pour le client courrant
	*/
	public UserLicence:api_view_UserLicence ;
	
	/**
	accès à la vue :Client     retourne la donnée du client connecté
	*/
	public Client:api_view_Client ;
	
	
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
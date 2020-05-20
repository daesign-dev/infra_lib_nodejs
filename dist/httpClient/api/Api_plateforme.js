"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("utils");
class api_collection_plateform {
    constructor(conf) {
        this.secure = null;
        this.url = conf.url;
        this.secure = conf.secure;
        this.certificat = new utils_1.HttpServiceBase({ url: conf.url + "collection/certificat/", secure: conf.secure });
        this.rsa = new utils_1.HttpServiceBase({ url: conf.url + "collection/rsa/", secure: conf.secure });
        this.api_key = new utils_1.HttpServiceBase({ url: conf.url + "collection/api_key/", secure: conf.secure });
        this.pem_for_app = new utils_1.HttpServiceBase({ url: conf.url + "collection/pem_for_app/", secure: conf.secure });
        this.application_configuration = new utils_1.HttpServiceBase({ url: conf.url + "collection/application_configuration/", secure: conf.secure });
        this.application_configuration_super_admin_mongo = new utils_1.HttpServiceBase({ url: conf.url + "collection/application_configuration_super_admin_mongo/", secure: conf.secure });
        this.application_configuration_parcours = new utils_1.HttpServiceBase({ url: conf.url + "collection/application_configuration_parcours/", secure: conf.secure });
        this.application_configuration_xlxUploader = new utils_1.HttpServiceBase({ url: conf.url + "collection/application_configuration_xlxUploader/", secure: conf.secure });
        this.application_configuration_web = new utils_1.HttpServiceBase({ url: conf.url + "collection/application_configuration_web/", secure: conf.secure });
        this.application_configuration_appApprenant = new utils_1.HttpServiceBase({ url: conf.url + "collection/application_configuration_appApprenant/", secure: conf.secure });
        this.application_configuration_appCoach = new utils_1.HttpServiceBase({ url: conf.url + "collection/application_configuration_appCoach/", secure: conf.secure });
        this.application_configuration_appEditor = new utils_1.HttpServiceBase({ url: conf.url + "collection/application_configuration_appEditor/", secure: conf.secure });
        this.application_configuration_savvy_learner = new utils_1.HttpServiceBase({ url: conf.url + "collection/application_configuration_savvy_learner/", secure: conf.secure });
        this.application_configuration_appClient = new utils_1.HttpServiceBase({ url: conf.url + "collection/application_configuration_appClient/", secure: conf.secure });
        this.application_configuration_savvy_author = new utils_1.HttpServiceBase({ url: conf.url + "collection/application_configuration_savvy_author/", secure: conf.secure });
        this.application_configuration_appAdminDaesign = new utils_1.HttpServiceBase({ url: conf.url + "collection/application_configuration_appAdminDaesign/", secure: conf.secure });
        this.application_configuration_generic_author = new utils_1.HttpServiceBase({ url: conf.url + "collection/application_configuration_generic_author/", secure: conf.secure });
        this.application_configuration_generic = new utils_1.HttpServiceBase({ url: conf.url + "collection/application_configuration_generic/", secure: conf.secure });
        this.service_access = new utils_1.HttpServiceBase({ url: conf.url + "collection/service_access/", secure: conf.secure });
        this.service = new utils_1.HttpServiceBase({ url: conf.url + "collection/service/", secure: conf.secure });
        this.service_sso = new utils_1.HttpServiceBase({ url: conf.url + "collection/service_sso/", secure: conf.secure });
        this.service_init = new utils_1.HttpServiceBase({ url: conf.url + "collection/service_init/", secure: conf.secure });
        this.service_mailtoinfra = new utils_1.HttpServiceBase({ url: conf.url + "collection/service_mailtoinfra/", secure: conf.secure });
        this.service_mongo = new utils_1.HttpServiceBase({ url: conf.url + "collection/service_mongo/", secure: conf.secure });
        this.service_socketIo = new utils_1.HttpServiceBase({ url: conf.url + "collection/service_socketIo/", secure: conf.secure });
        this.service_supervision = new utils_1.HttpServiceBase({ url: conf.url + "collection/service_supervision/", secure: conf.secure });
        this.service_configuration = new utils_1.HttpServiceBase({ url: conf.url + "collection/service_configuration/", secure: conf.secure });
        this.service_goshabaGateway = new utils_1.HttpServiceBase({ url: conf.url + "collection/service_goshabaGateway/", secure: conf.secure });
        this.service_like = new utils_1.HttpServiceBase({ url: conf.url + "collection/service_like/", secure: conf.secure });
        this.service_signin = new utils_1.HttpServiceBase({ url: conf.url + "collection/service_signin/", secure: conf.secure });
        this.service_sendGrid = new utils_1.HttpServiceBase({ url: conf.url + "collection/service_sendGrid/", secure: conf.secure });
        this.service_licence_token = new utils_1.HttpServiceBase({ url: conf.url + "collection/service_licence_token/", secure: conf.secure });
        this.service_dumy_fso = new utils_1.HttpServiceBase({ url: conf.url + "collection/service_dumy_fso/", secure: conf.secure });
        this.service_push_notification = new utils_1.HttpServiceBase({ url: conf.url + "collection/service_push_notification/", secure: conf.secure });
        this.service_socket_io = new utils_1.HttpServiceBase({ url: conf.url + "collection/service_socket_io/", secure: conf.secure });
        this.service_tutor = new utils_1.HttpServiceBase({ url: conf.url + "collection/service_tutor/", secure: conf.secure });
        this.service_nginxConfigurator = new utils_1.HttpServiceBase({ url: conf.url + "collection/service_nginxConfigurator/", secure: conf.secure });
        this.service_nginxMultiConfigurator = new utils_1.HttpServiceBase({ url: conf.url + "collection/service_nginxMultiConfigurator/", secure: conf.secure });
        this.service_init_js = new utils_1.HttpServiceBase({ url: conf.url + "collection/service_init_js/", secure: conf.secure });
        this.service_planned_tasks = new utils_1.HttpServiceBase({ url: conf.url + "collection/service_planned_tasks/", secure: conf.secure });
        this.Service_scorm_gateway = new utils_1.HttpServiceBase({ url: conf.url + "collection/Service_scorm_gateway/", secure: conf.secure });
        this.service_infra_admin = new utils_1.HttpServiceBase({ url: conf.url + "collection/service_infra_admin/", secure: conf.secure });
        this.service_nathan_gateway = new utils_1.HttpServiceBase({ url: conf.url + "collection/service_nathan_gateway/", secure: conf.secure });
        this.service_mailtoinfra2 = new utils_1.HttpServiceBase({ url: conf.url + "collection/service_mailtoinfra2/", secure: conf.secure });
        this.service_trainingCoursesService = new utils_1.HttpServiceBase({ url: conf.url + "collection/service_trainingCoursesService/", secure: conf.secure });
        this.service_deploy = new utils_1.HttpServiceBase({ url: conf.url + "collection/service_deploy/", secure: conf.secure });
        this.service_hello = new utils_1.HttpServiceBase({ url: conf.url + "collection/service_hello/", secure: conf.secure });
        this.ServiceTracking = new utils_1.HttpServiceBase({ url: conf.url + "collection/ServiceTracking/", secure: conf.secure });
        this.service_cloud_storage = new utils_1.HttpServiceBase({ url: conf.url + "collection/service_cloud_storage/", secure: conf.secure });
        this.protoschema = new utils_1.HttpServiceBase({ url: conf.url + "collection/protoschema/", secure: conf.secure });
        this.mail = new utils_1.HttpServiceBase({ url: conf.url + "collection/mail/", secure: conf.secure });
        this.mail_sendgrid = new utils_1.HttpServiceBase({ url: conf.url + "collection/mail_sendgrid/", secure: conf.secure });
        this.nginxConfigurationFile = new utils_1.HttpServiceBase({ url: conf.url + "collection/nginxConfigurationFile/", secure: conf.secure });
        this._view = new utils_1.HttpServiceBase({ url: conf.url + "collection/_view/", secure: conf.secure });
        this._view_params = new utils_1.HttpServiceBase({ url: conf.url + "collection/_view_params/", secure: conf.secure });
        this.TemplateLodash = new utils_1.HttpServiceBase({ url: conf.url + "collection/TemplateLodash/", secure: conf.secure });
        this.lang_code = new utils_1.HttpServiceBase({ url: conf.url + "collection/lang_code/", secure: conf.secure });
        this.multilingual_text = new utils_1.HttpServiceBase({ url: conf.url + "collection/multilingual_text/", secure: conf.secure });
        this.licence = new utils_1.HttpServiceBase({ url: conf.url + "collection/licence/", secure: conf.secure });
        this.licence_temporelle = new utils_1.HttpServiceBase({ url: conf.url + "collection/licence_temporelle/", secure: conf.secure });
        this.end_client = new utils_1.HttpServiceBase({ url: conf.url + "collection/end_client/", secure: conf.secure });
        this.MultilangSendGridTemplate = new utils_1.HttpServiceBase({ url: conf.url + "collection/MultilangSendGridTemplate/", secure: conf.secure });
        this.application = new utils_1.HttpServiceBase({ url: conf.url + "collection/application/", secure: conf.secure });
        this.pack_card = new utils_1.HttpServiceBase({ url: conf.url + "collection/pack_card/", secure: conf.secure });
        this.webapp = new utils_1.HttpServiceBase({ url: conf.url + "collection/webapp/", secure: conf.secure });
        this.app_training_course = new utils_1.HttpServiceBase({ url: conf.url + "collection/app_training_course/", secure: conf.secure });
        this.application_instance = new utils_1.HttpServiceBase({ url: conf.url + "collection/application_instance/", secure: conf.secure });
        this.hello = new utils_1.HttpServiceBase({ url: conf.url + "collection/hello/", secure: conf.secure });
        this.user_profile = new utils_1.HttpServiceBase({ url: conf.url + "collection/user_profile/", secure: conf.secure });
        this.user = new utils_1.HttpServiceBase({ url: conf.url + "collection/user/", secure: conf.secure });
        this.cloudStorageFiles = new utils_1.HttpServiceBase({ url: conf.url + "collection/cloudStorageFiles/", secure: conf.secure });
        this.cloudStorageFolders = new utils_1.HttpServiceBase({ url: conf.url + "collection/cloudStorageFolders/", secure: conf.secure });
        this.deploy_template = new utils_1.HttpServiceBase({ url: conf.url + "collection/deploy_template/", secure: conf.secure });
        this.deploy_template_application_configuration = new utils_1.HttpServiceBase({ url: conf.url + "collection/deploy_template_application_configuration/", secure: conf.secure });
        this.deploy_template_training_course = new utils_1.HttpServiceBase({ url: conf.url + "collection/deploy_template_training_course/", secure: conf.secure });
        this.deploy_template_training_course_i18n = new utils_1.HttpServiceBase({ url: conf.url + "collection/deploy_template_training_course_i18n/", secure: conf.secure });
        this.deploy_template_licence_store_training = new utils_1.HttpServiceBase({ url: conf.url + "collection/deploy_template_licence_store_training/", secure: conf.secure });
        this.deploy_template_licence_store_application = new utils_1.HttpServiceBase({ url: conf.url + "collection/deploy_template_licence_store_application/", secure: conf.secure });
    }
}
exports.api_collection_plateform = api_collection_plateform;
/**
    accès à la vue :UserLicence
    retourne la liste des licences d'un utilisateur pour le client courrant
*/
class api_view_UserLicence extends utils_1.HttpAbstractService {
    /**
        accès à la vue :UserLicence
        
    */
    constructor(conf) {
        super(conf);
        this.conf = conf;
        this.globalCtxInt = new utils_1.CtxInterpretor(process.env);
        /** middleware
        génére une requette sur la vue UserLicence
        
        */
        this.getMiddleware = (config) => {
            config = this.globalCtxInt.updateEnv(config, true);
            return (req, res, next) => {
                var localCtxInt = new utils_1.CtxInterpretor(req.ctx);
                localCtxInt.startPatern = "$ctx.";
                var localConfig = localCtxInt.updateEnv(config, true);
                this.get(localConfig.params.userId, localConfig.params.query, localConfig.headers)
                    .then((data) => {
                    req.ctx[localConfig.output] = data;
                    next();
                }).catch((err) => {
                    next(err);
                });
            };
        };
        this.url = conf.url;
    }
    /**
    génére une requette sur la vue UserLicence
    
    */
    get(userId, query = '*', headers = {}) {
        return this.baseGet(this.url + userId.toString() + "/" + query, headers);
    }
}
exports.api_view_UserLicence = api_view_UserLicence;
/**
    accès à la vue :Client
    retourne la donnée du client connecté
*/
class api_view_Client extends utils_1.HttpAbstractService {
    /**
        accès à la vue :Client
        
    */
    constructor(conf) {
        super(conf);
        this.conf = conf;
        this.globalCtxInt = new utils_1.CtxInterpretor(process.env);
        /** middleware
        génére une requette sur la vue Client
        
        */
        this.getMiddleware = (config) => {
            config = this.globalCtxInt.updateEnv(config, true);
            return (req, res, next) => {
                var localCtxInt = new utils_1.CtxInterpretor(req.ctx);
                localCtxInt.startPatern = "$ctx.";
                var localConfig = localCtxInt.updateEnv(config, true);
                this.get(localConfig.params.query, localConfig.headers)
                    .then((data) => {
                    req.ctx[localConfig.output] = data;
                    next();
                }).catch((err) => {
                    next(err);
                });
            };
        };
        this.url = conf.url;
    }
    /**
    génére une requette sur la vue Client
    
    */
    get(query = '*', headers = {}) {
        return this.baseGet(this.url + query, headers);
    }
}
exports.api_view_Client = api_view_Client;
/**
    accès à la vue :CloudStorageFolderList
    View used to get cloudStorageFolder nested folders
*/
class api_view_CloudStorageFolderList extends utils_1.HttpAbstractService {
    /**
        accès à la vue :CloudStorageFolderList
        
    */
    constructor(conf) {
        super(conf);
        this.conf = conf;
        this.globalCtxInt = new utils_1.CtxInterpretor(process.env);
        /** middleware
        génére une requette sur la vue CloudStorageFolderList
        
        */
        this.getMiddleware = (config) => {
            config = this.globalCtxInt.updateEnv(config, true);
            return (req, res, next) => {
                var localCtxInt = new utils_1.CtxInterpretor(req.ctx);
                localCtxInt.startPatern = "$ctx.";
                var localConfig = localCtxInt.updateEnv(config, true);
                this.get(localConfig.params.folderId, localConfig.params.depth, localConfig.params.query, localConfig.headers)
                    .then((data) => {
                    req.ctx[localConfig.output] = data;
                    next();
                }).catch((err) => {
                    next(err);
                });
            };
        };
        this.url = conf.url;
    }
    /**
    génére une requette sur la vue CloudStorageFolderList
    
    */
    get(folderId, depth, query = '*', headers = {}) {
        return this.baseGet(this.url + folderId.toString() + "/" + depth.toString() + "/" + query, headers);
    }
}
exports.api_view_CloudStorageFolderList = api_view_CloudStorageFolderList;
/**
    accès à la vue :CloudStorageFolderAncestors
    Aggregation that returns every ancestors of a folder ordered from farer to current folder
*/
class api_view_CloudStorageFolderAncestors extends utils_1.HttpAbstractService {
    /**
        accès à la vue :CloudStorageFolderAncestors
        
    */
    constructor(conf) {
        super(conf);
        this.conf = conf;
        this.globalCtxInt = new utils_1.CtxInterpretor(process.env);
        /** middleware
        génére une requette sur la vue CloudStorageFolderAncestors
        
        */
        this.getMiddleware = (config) => {
            config = this.globalCtxInt.updateEnv(config, true);
            return (req, res, next) => {
                var localCtxInt = new utils_1.CtxInterpretor(req.ctx);
                localCtxInt.startPatern = "$ctx.";
                var localConfig = localCtxInt.updateEnv(config, true);
                this.get(localConfig.params.folderId, localConfig.params.query, localConfig.headers)
                    .then((data) => {
                    req.ctx[localConfig.output] = data;
                    next();
                }).catch((err) => {
                    next(err);
                });
            };
        };
        this.url = conf.url;
    }
    /**
    génére une requette sur la vue CloudStorageFolderAncestors
    
    */
    get(folderId, query = '*', headers = {}) {
        return this.baseGet(this.url + folderId.toString() + "/" + query, headers);
    }
}
exports.api_view_CloudStorageFolderAncestors = api_view_CloudStorageFolderAncestors;
/**
    accès à la vue :CloudStorageFolderSearch
    View used to filter Folders by tags
*/
class api_view_CloudStorageFolderSearch extends utils_1.HttpAbstractService {
    /**
        accès à la vue :CloudStorageFolderSearch
        
    */
    constructor(conf) {
        super(conf);
        this.conf = conf;
        this.globalCtxInt = new utils_1.CtxInterpretor(process.env);
        /** middleware
        génére une requette sur la vue CloudStorageFolderSearch
        
        */
        this.getMiddleware = (config) => {
            config = this.globalCtxInt.updateEnv(config, true);
            return (req, res, next) => {
                var localCtxInt = new utils_1.CtxInterpretor(req.ctx);
                localCtxInt.startPatern = "$ctx.";
                var localConfig = localCtxInt.updateEnv(config, true);
                this.get(localConfig.params.folderId, localConfig.params.depth, localConfig.params.tag1, localConfig.params.tag2, localConfig.params.tag3, localConfig.params.type, localConfig.params.query, localConfig.headers)
                    .then((data) => {
                    req.ctx[localConfig.output] = data;
                    next();
                }).catch((err) => {
                    next(err);
                });
            };
        };
        this.url = conf.url;
    }
    /**
    génére une requette sur la vue CloudStorageFolderSearch
    
    */
    get(folderId, depth, tag1, tag2, tag3, type, query = '*', headers = {}) {
        return this.baseGet(this.url + folderId.toString() + "/" + depth.toString() + "/" + tag1.toString() + "/" + tag2.toString() + "/" + tag3.toString() + "/" + type.toString() + "/" + query, headers);
    }
}
exports.api_view_CloudStorageFolderSearch = api_view_CloudStorageFolderSearch;
class api_view_plateform {
    constructor(conf) {
        this.conf = conf;
        this.UserLicence = new api_view_UserLicence({ url: conf.url + "views/UserLicence/", secure: conf.secure });
        this.Client = new api_view_Client({ url: conf.url + "views/Client/", secure: conf.secure });
        this.CloudStorageFolderList = new api_view_CloudStorageFolderList({ url: conf.url + "views/CloudStorageFolderList/", secure: conf.secure });
        this.CloudStorageFolderAncestors = new api_view_CloudStorageFolderAncestors({ url: conf.url + "views/CloudStorageFolderAncestors/", secure: conf.secure });
        this.CloudStorageFolderSearch = new api_view_CloudStorageFolderSearch({ url: conf.url + "views/CloudStorageFolderSearch/", secure: conf.secure });
    }
}
exports.api_view_plateform = api_view_plateform;
class Api_plateforme {
    constructor(conf) {
        this.conf = conf;
        this.collections = new api_collection_plateform(conf);
        this.views = new api_view_plateform(conf);
    }
}
exports.Api_plateforme = Api_plateforme;
//# sourceMappingURL=Api_plateforme.js.map
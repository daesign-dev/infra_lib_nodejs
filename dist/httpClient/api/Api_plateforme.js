"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("utils");
const HttpServiceBase_1 = require("../HttpServiceBase");
const HttpAbstractService_1 = require("../HttpAbstractService");
class api_collection_plateform {
    constructor(conf) {
        this.secure = null;
        this.url = conf.url;
        this.secure = conf.secure;
        this.certificat = new HttpServiceBase_1.HttpServiceBase({ url: conf.url + "collection/certificat/", secure: conf.secure });
        this.rsa = new HttpServiceBase_1.HttpServiceBase({ url: conf.url + "collection/rsa/", secure: conf.secure });
        this.end_client = new HttpServiceBase_1.HttpServiceBase({ url: conf.url + "collection/end_client/", secure: conf.secure });
        this.oidc_Client = new HttpServiceBase_1.HttpServiceBase({ url: conf.url + "collection/oidc_Client/", secure: conf.secure });
        this.application_configuration = new HttpServiceBase_1.HttpServiceBase({ url: conf.url + "collection/application_configuration/", secure: conf.secure });
        this.application_configuration_phoneCard = new HttpServiceBase_1.HttpServiceBase({ url: conf.url + "collection/application_configuration_phoneCard/", secure: conf.secure });
        this.application_configuration_appCoach = new HttpServiceBase_1.HttpServiceBase({ url: conf.url + "collection/application_configuration_appCoach/", secure: conf.secure });
        this.application_configuration_super_admin_mongo = new HttpServiceBase_1.HttpServiceBase({ url: conf.url + "collection/application_configuration_super_admin_mongo/", secure: conf.secure });
        this.application_configuration_antico = new HttpServiceBase_1.HttpServiceBase({ url: conf.url + "collection/application_configuration_antico/", secure: conf.secure });
        this.application_configuration_appClient = new HttpServiceBase_1.HttpServiceBase({ url: conf.url + "collection/application_configuration_appClient/", secure: conf.secure });
        this.application_configuration_appApprenant = new HttpServiceBase_1.HttpServiceBase({ url: conf.url + "collection/application_configuration_appApprenant/", secure: conf.secure });
        this.application_instance = new HttpServiceBase_1.HttpServiceBase({ url: conf.url + "collection/application_instance/", secure: conf.secure });
        this.oidc_account = new HttpServiceBase_1.HttpServiceBase({ url: conf.url + "collection/oidc_account/", secure: conf.secure });
        this.service_access = new HttpServiceBase_1.HttpServiceBase({ url: conf.url + "collection/service_access/", secure: conf.secure });
        this.service = new HttpServiceBase_1.HttpServiceBase({ url: conf.url + "collection/service/", secure: conf.secure });
        this.service_sso = new HttpServiceBase_1.HttpServiceBase({ url: conf.url + "collection/service_sso/", secure: conf.secure });
        this.service_init = new HttpServiceBase_1.HttpServiceBase({ url: conf.url + "collection/service_init/", secure: conf.secure });
        this.service_mailtoinfra = new HttpServiceBase_1.HttpServiceBase({ url: conf.url + "collection/service_mailtoinfra/", secure: conf.secure });
        this.service_licence_token = new HttpServiceBase_1.HttpServiceBase({ url: conf.url + "collection/service_licence_token/", secure: conf.secure });
        this.service_goshabaGateway = new HttpServiceBase_1.HttpServiceBase({ url: conf.url + "collection/service_goshabaGateway/", secure: conf.secure });
        this.service_mongo = new HttpServiceBase_1.HttpServiceBase({ url: conf.url + "collection/service_mongo/", secure: conf.secure });
        this.service_socketIo = new HttpServiceBase_1.HttpServiceBase({ url: conf.url + "collection/service_socketIo/", secure: conf.secure });
        this.service_supervision = new HttpServiceBase_1.HttpServiceBase({ url: conf.url + "collection/service_supervision/", secure: conf.secure });
        this.service_configuration = new HttpServiceBase_1.HttpServiceBase({ url: conf.url + "collection/service_configuration/", secure: conf.secure });
        this.service_nginxConfigurator = new HttpServiceBase_1.HttpServiceBase({ url: conf.url + "collection/service_nginxConfigurator/", secure: conf.secure });
        this.service_nginxMultiConfigurator = new HttpServiceBase_1.HttpServiceBase({ url: conf.url + "collection/service_nginxMultiConfigurator/", secure: conf.secure });
        this.service_push_notification = new HttpServiceBase_1.HttpServiceBase({ url: conf.url + "collection/service_push_notification/", secure: conf.secure });
        this.service_like = new HttpServiceBase_1.HttpServiceBase({ url: conf.url + "collection/service_like/", secure: conf.secure });
        this.service_dumy_fso = new HttpServiceBase_1.HttpServiceBase({ url: conf.url + "collection/service_dumy_fso/", secure: conf.secure });
        this.service_planned_tasks = new HttpServiceBase_1.HttpServiceBase({ url: conf.url + "collection/service_planned_tasks/", secure: conf.secure });
        this.service_signin = new HttpServiceBase_1.HttpServiceBase({ url: conf.url + "collection/service_signin/", secure: conf.secure });
        this.service_sendGrid = new HttpServiceBase_1.HttpServiceBase({ url: conf.url + "collection/service_sendGrid/", secure: conf.secure });
        this.service_trainingCoursesService = new HttpServiceBase_1.HttpServiceBase({ url: conf.url + "collection/service_trainingCoursesService/", secure: conf.secure });
        this.service_orchestrator = new HttpServiceBase_1.HttpServiceBase({ url: conf.url + "collection/service_orchestrator/", secure: conf.secure });
        this.service_socket_io = new HttpServiceBase_1.HttpServiceBase({ url: conf.url + "collection/service_socket_io/", secure: conf.secure });
        this.service_tutor = new HttpServiceBase_1.HttpServiceBase({ url: conf.url + "collection/service_tutor/", secure: conf.secure });
        this.protoschema = new HttpServiceBase_1.HttpServiceBase({ url: conf.url + "collection/protoschema/", secure: conf.secure });
        this.mail = new HttpServiceBase_1.HttpServiceBase({ url: conf.url + "collection/mail/", secure: conf.secure });
        this.mail_sendgrid = new HttpServiceBase_1.HttpServiceBase({ url: conf.url + "collection/mail_sendgrid/", secure: conf.secure });
        this.service_serviceOrchestrator = new HttpServiceBase_1.HttpServiceBase({ url: conf.url + "collection/service_serviceOrchestrator/", secure: conf.secure });
        this._view = new HttpServiceBase_1.HttpServiceBase({ url: conf.url + "collection/_view/", secure: conf.secure });
        this._view_params = new HttpServiceBase_1.HttpServiceBase({ url: conf.url + "collection/_view_params/", secure: conf.secure });
        this.licence = new HttpServiceBase_1.HttpServiceBase({ url: conf.url + "collection/licence/", secure: conf.secure });
        this.licence_temporelle = new HttpServiceBase_1.HttpServiceBase({ url: conf.url + "collection/licence_temporelle/", secure: conf.secure });
        this.application = new HttpServiceBase_1.HttpServiceBase({ url: conf.url + "collection/application/", secure: conf.secure });
        this.pack_card = new HttpServiceBase_1.HttpServiceBase({ url: conf.url + "collection/pack_card/", secure: conf.secure });
        this.MultilangSendGridTemplate = new HttpServiceBase_1.HttpServiceBase({ url: conf.url + "collection/MultilangSendGridTemplate/", secure: conf.secure });
    }
}
exports.api_collection_plateform = api_collection_plateform;
/**
    accès à la vue :Client
    retourne la donnée du client connecté
*/
class api_view_Client extends HttpAbstractService_1.HttpAbstractService {
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
    accès à la vue :UserLicence
    retourne la liste des licences d'un utilisateur pour le client courrant
*/
class api_view_UserLicence extends HttpAbstractService_1.HttpAbstractService {
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
class api_view_plateform {
    constructor(conf) {
        this.conf = conf;
        this.Client = new api_view_Client({ url: conf.url + "views/Client/", secure: conf.secure });
        this.UserLicence = new api_view_UserLicence({ url: conf.url + "views/UserLicence/", secure: conf.secure });
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
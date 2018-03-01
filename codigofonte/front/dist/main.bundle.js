webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"carregando\" class=\"animar\" style=\"visibility: hidden;\">\r\n  <span style=\"width: 100%\"><span></span></span>\r\n</div>\r\n<router-outlet></router-outlet>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_service_worker__ = __webpack_require__("../../../service-worker/esm5/service-worker.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_validation__ = __webpack_require__("../../../../ng2-validation/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_validation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_validation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_route__ = __webpack_require__("../../../../../src/app/app.route.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__interceptor_http_factory__ = __webpack_require__("../../../../../src/app/interceptor/http.factory.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__conteudo_conteudo_component__ = __webpack_require__("../../../../../src/app/conteudo/conteudo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__conteudo_conteudo_module__ = __webpack_require__("../../../../../src/app/conteudo/conteudo.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__assets_currency_format_pipe__ = __webpack_require__("../../../../../src/assets/currency-format.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_12__conteudo_conteudo_module__["a" /* ConteudoModule */],
                __WEBPACK_IMPORTED_MODULE_7__app_route__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_6_ng2_validation__["CustomFormsModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_service_worker__["a" /* ServiceWorkerModule */].register('/ngsw-worker.js', { enabled: __WEBPACK_IMPORTED_MODULE_8__environments_environment__["a" /* environment */].production })
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_11__conteudo_conteudo_component__["a" /* ConteudoComponent */],
                __WEBPACK_IMPORTED_MODULE_13__assets_currency_format_pipe__["a" /* CurrencyFormatPipe */]
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], useFactory: __WEBPACK_IMPORTED_MODULE_10__interceptor_http_factory__["a" /* httpFactory */], deps: [__WEBPACK_IMPORTED_MODULE_3__angular_http__["e" /* XHRBackend */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]] },
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_common__["h" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_1__angular_common__["e" /* HashLocationStrategy */] }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.route.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__conteudo_conteudo_component__ = __webpack_require__("../../../../../src/app/conteudo/conteudo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__conteudo_conteudo_route__ = __webpack_require__("../../../../../src/app/conteudo/conteudo.route.ts");



var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__conteudo_conteudo_component__["a" /* ConteudoComponent */],
        children: __WEBPACK_IMPORTED_MODULE_2__conteudo_conteudo_route__["b" /* MODULE_ROUTES_CONTEUDO */]
    },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(appRoutes);


/***/ }),

/***/ "../../../../../src/app/conteudo/conteudo.component.html":
/***/ (function(module, exports) {

module.exports = "<main>\r\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\r\n    <a class=\"navbar-brand\" href=\"javascript:void(0);\">Mercado</a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarText\"\r\n            aria-controls=\"navbarText\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarText\">\r\n      <ul class=\"navbar-nav mr-auto\">\r\n        <li class=\"nav-item active\">\r\n          <a class=\"nav-link\" href=\"javascript:void(0);\">Início <span class=\"sr-only\">(current)</span></a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"javascript:void(0);\">Produtos</a>\r\n        </li>\r\n      </ul>\r\n      <span class=\"navbar-text\">\r\n      Entrar\r\n    </span>\r\n    </div>\r\n  </nav>\r\n\r\n\r\n  <div class=\"padding-top-5\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n\r\n</main>\r\n"

/***/ }),

/***/ "../../../../../src/app/conteudo/conteudo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConteudoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ConteudoComponent = /** @class */ (function () {
    function ConteudoComponent() {
    }
    ConteudoComponent.prototype.ngOnInit = function () {
    };
    ConteudoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-conteudo-component',
            moduleId: module.i,
            template: __webpack_require__("../../../../../src/app/conteudo/conteudo.component.html"),
            styles: [__webpack_require__("../../../../../src/app/conteudo/conteudo.style.css")]
        })
    ], ConteudoComponent);
    return ConteudoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/conteudo/conteudo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConteudoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_text_mask__ = __webpack_require__("../../../../angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_text_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_text_mask__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__conteudo_route__ = __webpack_require__("../../../../../src/app/conteudo/conteudo.route.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ConteudoModule = /** @class */ (function () {
    function ConteudoModule() {
    }
    ConteudoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5_angular2_text_mask__["TextMaskModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forChild([])
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_6__conteudo_route__["a" /* MODULE_COMPONENTS_CONTEUDO */]],
            providers: [__WEBPACK_IMPORTED_MODULE_6__conteudo_route__["c" /* MODULE_SERVICES_CONTEUDO */]]
        })
    ], ConteudoModule);
    return ConteudoModule;
}());



/***/ }),

/***/ "../../../../../src/app/conteudo/conteudo.route.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MODULE_ROUTES_CONTEUDO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MODULE_COMPONENTS_CONTEUDO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return MODULE_SERVICES_CONTEUDO; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__conteudo_service__ = __webpack_require__("../../../../../src/app/conteudo/conteudo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__inicio_inicio_component__ = __webpack_require__("../../../../../src/app/conteudo/inicio/inicio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inicio_inicio_service__ = __webpack_require__("../../../../../src/app/conteudo/inicio/inicio.service.ts");



var MODULE_ROUTES_CONTEUDO = [
    { path: 'inicio', component: __WEBPACK_IMPORTED_MODULE_1__inicio_inicio_component__["a" /* InicioComponent */] },
    { path: '', redirectTo: 'inicio', pathMatch: 'full' }
];
var MODULE_COMPONENTS_CONTEUDO = [
    __WEBPACK_IMPORTED_MODULE_1__inicio_inicio_component__["a" /* InicioComponent */]
];
var MODULE_SERVICES_CONTEUDO = [
    __WEBPACK_IMPORTED_MODULE_0__conteudo_service__["a" /* ConteudoService */],
    __WEBPACK_IMPORTED_MODULE_2__inicio_inicio_service__["a" /* InicioService */]
];


/***/ }),

/***/ "../../../../../src/app/conteudo/conteudo.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConteudoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ConteudoService = /** @class */ (function () {
    function ConteudoService() {
    }
    ConteudoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], ConteudoService);
    return ConteudoService;
}());



/***/ }),

/***/ "../../../../../src/app/conteudo/conteudo.style.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/conteudo/inicio/inicio.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n  <div class=\"row\">\r\n\r\n\r\n    <div *ngFor=\"let produto of produtos\">\r\n    <div class=\"col-sm-12 col-md-4 padding-top-10\">\r\n\r\n      <div class=\"card\">\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">{{ produto.nome }}</h5>\r\n          <p class=\"card-text\">\r\n            Quantidade disponível: {{ produto.quantidade }} {{ produto.unidade.nome }}\r\n          </p>\r\n          <div class=\"col-auto\">\r\n            <label class=\"sr-only\" for=\"quantidade\">Quantidade</label>\r\n            <div class=\"input-group mb-2\">\r\n              <div class=\"input-group-prepend\">\r\n                <a href=\"javascript:void(0);\" class=\"input-group-text fa fa-arrow-down no-underline\"\r\n                (click)=\"removerDoCarrinho(produto);\"></a>\r\n              </div>\r\n              <input type=\"text\" class=\"form-control\" id=\"quantidade\" placeholder=\"Quantidade\">\r\n              <div class=\"input-group-prepend\">\r\n                <a href=\"javascript:void(0);\" class=\"input-group-text fa fa-arrow-up no-underline\"\r\n                (click)=\"adicionarAoCarrinho(produto);\"></a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n    </div>\r\n\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/conteudo/inicio/inicio.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inicio_service__ = __webpack_require__("../../../../../src/app/conteudo/inicio/inicio.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var InicioComponent = /** @class */ (function () {
    function InicioComponent(router, inicioService) {
        this.router = router;
        this.inicioService = inicioService;
        this.produtos = [];
    }
    InicioComponent.prototype.ngOnInit = function () {
    };
    InicioComponent.prototype.getProdutos = function () {
        this.produtos = this.inicioService.getProdutos();
    };
    InicioComponent.prototype.adicionarAoCarrinho = function (produto) {
    };
    InicioComponent.prototype.removerDoCarrinho = function (produto) {
    };
    InicioComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-inicio-component',
            moduleId: module.i,
            template: __webpack_require__("../../../../../src/app/conteudo/inicio/inicio.component.html"),
            styles: [__webpack_require__("../../../../../src/app/conteudo/inicio/inicio.style.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__inicio_service__["a" /* InicioService */]))
    ], InicioComponent);
    return InicioComponent;
}());



/***/ }),

/***/ "../../../../../src/app/conteudo/inicio/inicio.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_produto__ = __webpack_require__("../../../../../src/app/model/produto.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_unidade__ = __webpack_require__("../../../../../src/app/model/unidade.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var InicioService = /** @class */ (function () {
    function InicioService(http) {
        this.http = http;
    }
    InicioService.prototype.getProdutos = function () {
        var unidade = new __WEBPACK_IMPORTED_MODULE_3__model_unidade__["a" /* Unidade */]();
        unidade.id = '1';
        unidade.nome = 'Unidade(s)';
        var kg = new __WEBPACK_IMPORTED_MODULE_3__model_unidade__["a" /* Unidade */]();
        unidade.id = '2';
        unidade.nome = 'Kilo(s)';
        var produtos = [];
        var produto1 = new __WEBPACK_IMPORTED_MODULE_2__model_produto__["a" /* Produto */]();
        produto1.id = '1';
        produto1.nome = 'Sabonete';
        produto1.quantidade = 9.0;
        produto1.valor = 0.95;
        produto1.id_unidade = unidade.id;
        produto1.unidade = unidade;
        var produto2 = new __WEBPACK_IMPORTED_MODULE_2__model_produto__["a" /* Produto */]();
        produto1.id = '2';
        produto1.nome = 'Picanha';
        produto1.quantidade = 11.0;
        produto1.valor = 58.99;
        produto1.id_unidade = kg.id;
        produto1.unidade = kg;
        produtos.push(produto1);
        produtos.push(produto2);
        return produtos;
    };
    InicioService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]))
    ], InicioService);
    return InicioService;
}());



/***/ }),

/***/ "../../../../../src/app/conteudo/inicio/inicio.style.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".no-underline {\r\n  text-decoration: none;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/interceptor/http.factory.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = httpFactory;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__http_interceptor__ = __webpack_require__("../../../../../src/app/interceptor/http.interceptor.ts");

function httpFactory(xhrBackend, requestOptions, router) {
    return new __WEBPACK_IMPORTED_MODULE_0__http_interceptor__["a" /* InterceptedHttp */](xhrBackend, requestOptions, router);
}


/***/ }),

/***/ "../../../../../src/app/interceptor/http.interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InterceptedHttp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InterceptedHttp = /** @class */ (function (_super) {
    __extends(InterceptedHttp, _super);
    function InterceptedHttp(backend, defaultOptions, router) {
        var _this = _super.call(this, backend, defaultOptions) || this;
        _this.router = router;
        return _this;
    }
    InterceptedHttp.prototype.request = function (url, options) {
        var _this = this;
        this.beforeRequest();
        return _super.prototype.request.call(this, url, this.getRequestOptionArgs(options))
            .catch(function (res) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(res);
        }).finally(function () {
            _this.afterRequest();
        });
    };
    InterceptedHttp.prototype.get = function (url, options) {
        return _super.prototype.get.call(this, url, this.getRequestOptionArgs(options));
    };
    InterceptedHttp.prototype.post = function (url, body, options) {
        return _super.prototype.post.call(this, url, body, this.getRequestOptionArgs(options));
    };
    InterceptedHttp.prototype.put = function (url, body, options) {
        return _super.prototype.put.call(this, url, body, this.getRequestOptionArgs(options));
    };
    InterceptedHttp.prototype.delete = function (url, options) {
        return _super.prototype.delete.call(this, url, this.getRequestOptionArgs(options));
    };
    InterceptedHttp.prototype.beforeRequest = function () {
        var $carregando = $('#carregando');
        $carregando.css('visibility', 'visible');
        $carregando.find('> span').each(function () {
            $(this)
                .data('origWidth', $(this).width())
                .width(0)
                .animate({
                width: $(this).data('origWidth')
            }, 1200);
        });
    };
    InterceptedHttp.prototype.afterRequest = function () {
        $('#carregando').css('visibility', 'hidden');
    };
    InterceptedHttp.prototype.getRequestOptionArgs = function (options) {
        if (!options) {
            options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]();
        }
        if (!options.headers) {
            options.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            options.headers.append('Content-Type', 'application/json');
        }
        var token = JSON.parse(localStorage.getItem('token'));
        if (token)
            options.headers.append('auth-token', token);
        if (options.headers.get('intercept')) {
            options = null;
        }
        return options;
    };
    InterceptedHttp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], InterceptedHttp);
    return InterceptedHttp;
}(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]));



/***/ }),

/***/ "../../../../../src/app/model/produto.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Produto; });
var Produto = /** @class */ (function () {
    function Produto() {
    }
    return Produto;
}());



/***/ }),

/***/ "../../../../../src/app/model/unidade.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Unidade; });
var Unidade = /** @class */ (function () {
    function Unidade() {
    }
    return Unidade;
}());



/***/ }),

/***/ "../../../../../src/assets/currency-format.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrencyFormatPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var CurrencyFormatPipe = /** @class */ (function () {
    function CurrencyFormatPipe() {
    }
    CurrencyFormatPipe.prototype.transform = function (value, currencyCode, symbolDisplay, digits) {
        if (currencyCode === void 0) { currencyCode = 'BRL'; }
        if (symbolDisplay === void 0) { symbolDisplay = true; }
        if (!value) {
            return '';
        }
        var currencyPipe = new __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CurrencyPipe */]('pt-BR');
        var newValue = currencyPipe.transform(value, currencyCode, symbolDisplay, digits);
        return newValue;
    };
    CurrencyFormatPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'currencyformat'
        })
    ], CurrencyFormatPipe);
    return CurrencyFormatPipe;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
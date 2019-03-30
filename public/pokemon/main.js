(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/api-client.service.ts":
/*!***************************************!*\
  !*** ./src/app/api-client.service.ts ***!
  \***************************************/
/*! exports provided: ApiClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiClientService", function() { return ApiClientService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pokemon_preview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pokemon-preview */ "./src/app/pokemon-preview.ts");



var ApiClientService = /** @class */ (function () {
    function ApiClientService() {
    }
    ApiClientService.prototype.gottaCatchEmAll = function () {
        return fetch('/pokemons')
            .then(function (res) { return res.json(); })
            .then(function (res) { return res.map(_pokemon_preview__WEBPACK_IMPORTED_MODULE_2__["PokemonPreview"].parse); });
    };
    ApiClientService.prototype.catchOne = function (pokemonId) {
        return fetch('/pokemons/' + pokemonId)
            .then(function (res) { return res.json(); });
    };
    ApiClientService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ApiClientService);
    return ApiClientService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sound {\n  position: fixed;\n  bottom: -2em;\n  left: 0;\n  height: 2em;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLE9BQU87RUFDUCxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zb3VuZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAtMmVtO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDJlbTtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar (inputChanged)=\"searchChange($event)\"></app-navbar>\n<app-dashboard (cardClicked)=\"selectPokemon($event)\" [filterString]=\"filterString\"></app-dashboard>\n<app-detail \n  *ngIf=\"pokemon\" \n  [pokemon]=\"pokemon\" \n  [class.detail--visible]=\"pokemon !== undefined\"\n  (unselected)=\"selectPokemon($event)\">\n</app-detail>\n<iframe class=\"sound\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay\" src=\"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/276046276&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true\"></iframe>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api-client.service */ "./src/app/api-client.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(apiClient) {
        this.apiClient = apiClient;
    }
    AppComponent.prototype.searchChange = function (event) {
        this.filterString = event;
    };
    AppComponent.prototype.selectPokemon = function (event) {
        this.pokemon = event;
    };
    AppComponent.prototype.unselectPokemon = function (event) {
        this.pokemon = event;
    };
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_client_service__WEBPACK_IMPORTED_MODULE_2__["ApiClientService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./card/card.component */ "./src/app/card/card.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/detail/detail.component.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
                _card_card_component__WEBPACK_IMPORTED_MODULE_6__["CardComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
                _detail_detail_component__WEBPACK_IMPORTED_MODULE_8__["DetailComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/card/card.component.css":
/*!*****************************************!*\
  !*** ./src/app/card/card.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  box-shadow: 0px 10px 27px -6px rgba(0,0,0,0.75);  \n  margin: 5px;\n  padding: 10px;\n  background-color: white;\n  width: 10vw;\n  min-width: 7rem;\n  max-width: 10rem;\n  text-align: center;\n  cursor: pointer;\n}\n\n.name {\n  font-weight: 700;\n  text-align: center;\n}\n\n.type {\n  text-align: center;\n  font-style: italic;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyZC9jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrQ0FBK0M7RUFDL0MsV0FBVztFQUNYLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NhcmQvY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBib3gtc2hhZG93OiAwcHggMTBweCAyN3B4IC02cHggcmdiYSgwLDAsMCwwLjc1KTsgIFxuICBtYXJnaW46IDVweDtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAxMHZ3O1xuICBtaW4td2lkdGg6IDdyZW07XG4gIG1heC13aWR0aDogMTByZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnR5cGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/card/card.component.html":
/*!******************************************!*\
  !*** ./src/app/card/card.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  \n  <div class=\"card\" (click)=\"cardClicked()\">\n    <img class=\"img\" src=\"{{pokemon.sprite}}\" alt=\"poke-image\">\n    <div class=\"name\">{{pokemon.name | titlecase}}</div>\n    <div class=\"type\">{{pokemon.types.join(', ') | titlecase}}</div>\n  </div>"

/***/ }),

/***/ "./src/app/card/card.component.ts":
/*!****************************************!*\
  !*** ./src/app/card/card.component.ts ***!
  \****************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pokemon_preview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pokemon-preview */ "./src/app/pokemon-preview.ts");



var CardComponent = /** @class */ (function () {
    function CardComponent() {
        this.selectedPokemon = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    CardComponent.prototype.cardClicked = function () {
        this.selectedPokemon.emit(this.pokemon.id);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CardComponent.prototype, "selectedPokemon", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _pokemon_preview__WEBPACK_IMPORTED_MODULE_2__["PokemonPreview"])
    ], CardComponent.prototype, "pokemon", void 0);
    CardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-card',
            template: __webpack_require__(/*! ./card.component.html */ "./src/app/card/card.component.html"),
            styles: [__webpack_require__(/*! ./card.component.css */ "./src/app/card/card.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: -moz-flex;\n  display: -ms-flex;\n  display: -o-flex;\n  display: flex;\n  flex-wrap: wrap;\n  padding: 5px;\n  background: var(--color5);\n};\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGVBQWU7RUFDZixZQUFZO0VBQ1oseUJBQXlCO0FBQzNCLENBQUEiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogLW1vei1mbGV4O1xuICBkaXNwbGF5OiAtbXMtZmxleDtcbiAgZGlzcGxheTogLW8tZmxleDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yNSk7XG59OyJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-card \n  *ngFor=\"let pokemon of pokemonList\"\n  [pokemon]=\"pokemon\"\n  (selectedPokemon)=\"onClick($event)\">\n</app-card> \n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api-client.service */ "./src/app/api-client.service.ts");




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(apiClient) {
        this.apiClient = apiClient;
        this.cardClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    DashboardComponent.prototype.ngOnChanges = function () {
        if (this.originalList !== undefined && this.pokemonList !== undefined) {
            this.filterPokemonList();
        }
    };
    DashboardComponent.prototype.filterPokemonList = function () {
        var _this = this;
        this.pokemonList = this.originalList.filter(function (pokemon) {
            return (pokemon.name.indexOf(_this.filterString) !== -1
                || pokemon.types.some(function (type) { return type.indexOf(_this.filterString) !== -1; })
            // || pokemon.abilities.some(ability => ability.indexOf(this.filterString) !== -1)
            // || pokemon.moves.some(move => move.indexOf(this.filterString) !== -1)
            );
        });
    };
    DashboardComponent.prototype.onClick = function (id) {
        this.cardClicked.emit((this.originalList.find(function (pokemon) {
            return pokemon.id === id;
        })));
    };
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiClient.gottaCatchEmAll().then(function (res) {
            _this.pokemonList = res;
            _this.originalList = res;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DashboardComponent.prototype, "filterString", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DashboardComponent.prototype, "cardClicked", void 0);
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_client_service__WEBPACK_IMPORTED_MODULE_2__["ApiClientService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/detail/detail.component.css":
/*!*********************************************!*\
  !*** ./src/app/detail/detail.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  position: fixed;\n  right: 0;\n  width: 25vw;\n  top: var(--navbar-height);\n  padding: 2rem 1rem;\n\n  background: white;\n  border-left: 1px solid black;\n  height: calc(100vh - 3rem);\n\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n\n  overflow-y: scroll;\n  box-sizing: border-box;\n\n\n  -webkit-animation: fadein 0.5s;\n\n\n          animation: fadein 0.5s;\n  /* transform: scaleX(0);\n  transition: transform 1s ease-in; */\n}\n\n:host::-webkit-scrollbar {\n  width: 0px;\n  background: transparent; /* make scrollbar transparent */\n }\n\n.detail__close {\n  cursor: pointer;\n  position: absolute;\n  top: 5px;\n  right: 5px;\n }\n\n.detail__image-container {\n  margin: 1rem;\n}\n\n.detail__image {\n  height: 5rem;\n  width: auto;\n}\n\n.detail__name {\n  font-weight: 700;\n}\n\n.detail__types {\n  font-style: italic;\n}\n\n.detail__abilities, .detail__moves {\n  margin-top: 1rem;\n  text-align: left;\n  width: 100%;\n}\n\n.detail__abilities-title, .detail__moves-title {\n  font-weight: 700;\n}\n\n.detail__cry {\n  margin: 1em 0;\n}\n\n@-webkit-keyframes fadein {\n  from { right: -25vw; }\n  to   { right: 0; }\n}\n\n@keyframes fadein {\n  from { right: -25vw; }\n  to   { right: 0; }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWlsL2RldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLFFBQVE7RUFDUixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGtCQUFrQjs7RUFFbEIsaUJBQWlCO0VBQ2pCLDRCQUE0QjtFQUM1QiwwQkFBMEI7O0VBRTFCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLG1CQUFtQjs7RUFFbkIsa0JBQWtCO0VBQ2xCLHNCQUFzQjs7O0VBR3RCLDhCQUFzQjs7O1VBQXRCLHNCQUFzQjtFQUN0QjtxQ0FDbUM7QUFDckM7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsdUJBQXVCLEVBQUUsK0JBQStCO0NBQ3pEOztBQUVEO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsVUFBVTtDQUNYOztBQUVEO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsT0FBTyxZQUFZLEVBQUU7RUFDckIsT0FBTyxRQUFRLEVBQUU7QUFDbkI7O0FBSEE7RUFDRSxPQUFPLFlBQVksRUFBRTtFQUNyQixPQUFPLFFBQVEsRUFBRTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbC9kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDI1dnc7XG4gIHRvcDogdmFyKC0tbmF2YmFyLWhlaWdodCk7XG4gIHBhZGRpbmc6IDJyZW0gMXJlbTtcblxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBibGFjaztcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gM3JlbSk7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuXG4gIGFuaW1hdGlvbjogZmFkZWluIDAuNXM7XG4gIC8qIHRyYW5zZm9ybTogc2NhbGVYKDApO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZS1pbjsgKi9cbn1cblxuOmhvc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDBweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IC8qIG1ha2Ugc2Nyb2xsYmFyIHRyYW5zcGFyZW50ICovXG4gfVxuXG4uZGV0YWlsX19jbG9zZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDVweDtcbiAgcmlnaHQ6IDVweDtcbiB9XG5cbi5kZXRhaWxfX2ltYWdlLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogMXJlbTtcbn1cblxuLmRldGFpbF9faW1hZ2Uge1xuICBoZWlnaHQ6IDVyZW07XG4gIHdpZHRoOiBhdXRvO1xufVxuXG4uZGV0YWlsX19uYW1lIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmRldGFpbF9fdHlwZXMge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi5kZXRhaWxfX2FiaWxpdGllcywgLmRldGFpbF9fbW92ZXMge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmRldGFpbF9fYWJpbGl0aWVzLXRpdGxlLCAuZGV0YWlsX19tb3Zlcy10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5kZXRhaWxfX2NyeSB7XG4gIG1hcmdpbjogMWVtIDA7XG59XG5cbkBrZXlmcmFtZXMgZmFkZWluIHtcbiAgZnJvbSB7IHJpZ2h0OiAtMjV2dzsgfVxuICB0byAgIHsgcmlnaHQ6IDA7IH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/detail/detail.component.html":
/*!**********************************************!*\
  !*** ./src/app/detail/detail.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img class=\"detail__close\" src=\"https://img.icons8.com/material-outlined/24/000000/multiply.png\"\n  (click)=\"cardClicked($event)\">\n<div class=\"detail__image-container\">\n  <img class=\"detail__image\" src=\"{{pokemon.gif}}\" alt={{pokemon.name}} />\n</div>\n<div class=\"detail__name\">{{pokemon.name | titlecase}}</div>\n<div class=\"detail__types\">{{pokemon.types.join(', ') | titlecase}}</div>\n<div class=\"detail__weight\">Weight: {{pokemon.weight}}</div>\n<div class=\"detail__cry\" >\n  <audio controls autoplay src=\"{{pokemon.cry}}\">\n    Your browser does not support the audio tag.\n  </audio>\n</div>\n<div class=\"detail__abilities\">\n  <span class=\"detail__abilities-title\">Abilities</span>\n  <div *ngFor=\"let ability of pokemon.abilities\">\n    <li>{{ability | titlecase}}</li>\n  </div>\n</div>\n<div class=\"detail__moves\">\n  <span class=\"detail__moves-title\">Moves</span>\n  <div *ngFor=\"let move of pokemon.moves\">\n    <li>{{move | titlecase}}</li>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/detail/detail.component.ts":
/*!********************************************!*\
  !*** ./src/app/detail/detail.component.ts ***!
  \********************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pokemon_preview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pokemon-preview */ "./src/app/pokemon-preview.ts");



var DetailComponent = /** @class */ (function () {
    function DetailComponent() {
        this.unselected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    DetailComponent.prototype.ngOnInit = function () {
    };
    DetailComponent.prototype.cardClicked = function () {
        this.unselected.emit(undefined);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DetailComponent.prototype, "unselected", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _pokemon_preview__WEBPACK_IMPORTED_MODULE_2__["PokemonPreview"])
    ], DetailComponent.prototype, "pokemon", void 0);
    DetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detail',
            template: __webpack_require__(/*! ./detail.component.html */ "./src/app/detail/detail.component.html"),
            styles: [__webpack_require__(/*! ./detail.component.css */ "./src/app/detail/detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: var(--color1);\n  padding: 10px;\n  color: white;\n  font-weight: 700;\n  font-size: 2rem;\n  height: var(--navbar-height);\n  line-height: 2rem;\n  box-sizing: border-box;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n\n}\n\n.navbar__search {\n  width: 20rem;\n  height: 2rem;\n  padding: 0 1rem;\n  margin-right: 1rem;\n}\n\n.navbar__logo {\n  height: 2em;\n}\n\n.navbar__image {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZiw0QkFBNEI7RUFDNUIsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0Qix3QkFBZ0I7RUFBaEIsZ0JBQWdCO0VBQ2hCLE1BQU07O0FBRVI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3IxKTtcbiAgcGFkZGluZzogMTBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDJyZW07XG4gIGhlaWdodDogdmFyKC0tbmF2YmFyLWhlaWdodCk7XG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG5cbn1cblxuLm5hdmJhcl9fc2VhcmNoIHtcbiAgd2lkdGg6IDIwcmVtO1xuICBoZWlnaHQ6IDJyZW07XG4gIHBhZGRpbmc6IDAgMXJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xufVxuXG4ubmF2YmFyX19sb2dvIHtcbiAgaGVpZ2h0OiAyZW07XG59XG5cbi5uYXZiYXJfX2ltYWdlIHtcbiAgaGVpZ2h0OiAxMDAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar__logo\"><img class=\"navbar__image\" src=\"/pokelogo.png\" alt='logo'></div>\n<input type='text' (keyup)=\"onChange($event)\" class=\"navbar__search\" />"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
        this.inputChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    NavbarComponent.prototype.onChange = function (evt) {
        this.inputChanged.emit(evt.target.value);
    };
    NavbarComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NavbarComponent.prototype, "inputChanged", void 0);
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/pokemon-preview.ts":
/*!************************************!*\
  !*** ./src/app/pokemon-preview.ts ***!
  \************************************/
/*! exports provided: PokemonPreview */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonPreview", function() { return PokemonPreview; });
var PokemonPreview = /** @class */ (function () {
    function PokemonPreview() {
    }
    Object.defineProperty(PokemonPreview.prototype, "sprite", {
        get: function () {
            return this.sprites.front_default;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PokemonPreview.prototype, "cry", {
        get: function () {
            return 'sound/' + String(this.id).padStart(3, '0') + '.wav';
        },
        enumerable: true,
        configurable: true
    });
    PokemonPreview.parse = function (pokemon) {
        var pokePreview = Object.assign(new PokemonPreview(), pokemon);
        var name = pokemon.name.replace('-', '');
        pokePreview.gif = "http://www.pokestadium.com/sprites/xy/" + name + ".gif";
        return pokePreview;
    };
    return PokemonPreview;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/felix/Documents/2019/pokemon/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about-person/about-person.component.html":
/*!**********************************************************!*\
  !*** ./src/app/about-person/about-person.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"about-porson\">\n  <app-container>\n    <div class=\"left-column\">\n      <h2 class=\"section-title\">Anita Allen</h2>\n      <p class=\"section-title-descr\">Graphic Designer</p>\n      <p class=\"section-descr\">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>\n    </div>\n    <div class=\"right-column\">\n      \n    </div>\n  </app-container>\n</section>"

/***/ }),

/***/ "./src/app/about-person/about-person.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/about-person/about-person.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".about-porson {\n  padding: 25px 15px; }\n\n.section-title {\n  color: #333;\n  margin: 0;\n  font-family: Bernadette;\n  font-size: 65px;\n  font-weight: 400;\n  letter-spacing: -1.58px; }\n\n.section-title-descr {\n  color: #505050;\n  font-size: 22px;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n  margin: 0 0 20px 0; }\n\n.section-descr {\n  color: #040404;\n  font-size: 18px;\n  font-weight: 300;\n  letter-spacing: 0.45px;\n  margin: 0 0 40px 0; }\n"

/***/ }),

/***/ "./src/app/about-person/about-person.component.ts":
/*!********************************************************!*\
  !*** ./src/app/about-person/about-person.component.ts ***!
  \********************************************************/
/*! exports provided: AboutPersonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPersonComponent", function() { return AboutPersonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutPersonComponent = /** @class */ (function () {
    function AboutPersonComponent() {
    }
    AboutPersonComponent.prototype.ngOnInit = function () {
    };
    AboutPersonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about-person',
            template: __webpack_require__(/*! ./about-person.component.html */ "./src/app/about-person/about-person.component.html"),
            styles: [__webpack_require__(/*! ./about-person.component.scss */ "./src/app/about-person/about-person.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutPersonComponent);
    return AboutPersonComponent;
}());



/***/ }),

/***/ "./src/app/about-us/about-us-card/about-us-card.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/about-us/about-us-card/about-us-card.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <figure class=\"cards-figure\">\n    <img [src]=\"card.imgSrc\" [alt]=\"card.title\">\n    <figcaption>\n      <h3 class=\"title\">{{ card.title }}</h3>\n      <p class=\"description\">{{ description }}</p>\n      <app-button class=\"-gradient\" *ngIf=\"!fullCard\" (onClick)=\"onClick()\">Read More</app-button>\n    </figcaption>\n  </figure>\n</div>"

/***/ }),

/***/ "./src/app/about-us/about-us-card/about-us-card.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/about-us/about-us-card/about-us-card.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cards-item {\n  padding: 15px; }\n\n.cards-figure {\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 0 49px rgba(0, 0, 0, 0.07);\n  border-radius: 11px;\n  background-color: #fff;\n  overflow: hidden; }\n\n.cards-figure img {\n    width: 100%; }\n\n.cards-figure figcaption {\n    text-align: center;\n    padding: 15px; }\n\n.cards-figure figcaption .title {\n      color: #332;\n      font-size: 25px;\n      font-weight: 700;\n      letter-spacing: 0.61px; }\n\n.cards-figure figcaption .description {\n      color: #040404;\n      font-size: 16px;\n      font-weight: 300;\n      line-height: 24px;\n      position: relative;\n      white-space: normal; }\n\n.cards-figure figcaption button {\n      position: absolute;\n      bottom: 0;\n      left: 50%;\n      -webkit-transform: translate(-50%, -50%);\n              transform: translate(-50%, -50%); }\n"

/***/ }),

/***/ "./src/app/about-us/about-us-card/about-us-card.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/about-us/about-us-card/about-us-card.component.ts ***!
  \*******************************************************************/
/*! exports provided: AboutUsCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsCardComponent", function() { return AboutUsCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutUsCardComponent = /** @class */ (function () {
    function AboutUsCardComponent() {
        this.btnOnClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
    }
    AboutUsCardComponent.prototype.ngOnInit = function () {
        var cliTruncate = __webpack_require__(/*! cli-truncate */ "./node_modules/cli-truncate/index.js");
        this.description = !this.fullCard ? cliTruncate(this.card.description, 120) : this.card.description;
    };
    AboutUsCardComponent.prototype.onClick = function () {
        this.btnOnClick.emit(this.card);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AboutUsCardComponent.prototype, "card", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AboutUsCardComponent.prototype, "fullCard", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AboutUsCardComponent.prototype, "btnOnClick", void 0);
    AboutUsCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about-us-card',
            template: __webpack_require__(/*! ./about-us-card.component.html */ "./src/app/about-us/about-us-card/about-us-card.component.html"),
            styles: [__webpack_require__(/*! ./about-us-card.component.scss */ "./src/app/about-us/about-us-card/about-us-card.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutUsCardComponent);
    return AboutUsCardComponent;
}());



/***/ }),

/***/ "./src/app/about-us/about-us.component.html":
/*!**************************************************!*\
  !*** ./src/app/about-us/about-us.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"about-us\">\n  <div class=\"cards-wrap\">\n    <ul class=\"cards-list\">\n      <drag-scroll>\n        <li drag-scroll-item class=\"cards-item\" *ngFor=\"let card of aboutUsCardsList\">\n            <app-about-us-card [card]=\"card\" (btnOnClick)=\"openCardModal($event)\"></app-about-us-card>\n        </li>\n      </drag-scroll>\n    </ul>\n  </div>\n  <app-container>\n    <div class=\"columns-wrap\">\n      <div class=\"column column-left\">\n        <h2 class=\"section-title\">We are <br/> Creative Agency</h2>\n        <p class=\"title-descr\"><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>\n        <div class=\"button-wrap\">\n          <app-button class=\"-gradient\">Read more</app-button>\n        </div>\n      </div>\n      <div class=\"column column-right\">\n        <p class=\"quote\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>\n        <div class=\"quote-author\">Anita Allen</div>\n      </div>\n    </div>\n  </app-container>\n  <app-modal *ngIf=\"modalIsVisible\" (onClose)=\"closeCardModal()\">\n    <app-about-us-card [card]=\"modalCard\" [fullCard]=\"true\"></app-about-us-card>\n  </app-modal>\n</section>"

/***/ }),

/***/ "./src/app/about-us/about-us.component.scss":
/*!**************************************************!*\
  !*** ./src/app/about-us/about-us.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".about-us {\n  margin-top: -200px; }\n  .about-us .cards-wrap {\n    max-width: 1200px;\n    margin: 0 auto; }\n  .about-us .cards-list {\n    list-style: none;\n    padding: 0;\n    display: flex;\n    justify-content: center;\n    margin: 0;\n    cursor: pointer;\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none; }\n  .about-us .cards-item {\n    width: 33.33%;\n    min-width: 290px;\n    padding: 10px; }\n  .columns-wrap {\n  padding: 100px 0;\n  display: flex;\n  position: relative; }\n  @media (max-width: 900px) {\n    .columns-wrap {\n      flex-direction: column; } }\n  .columns-wrap:before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: -1;\n    background: url(/assets/img/A.png) center center no-repeat;\n    background-size: 36%; }\n  @media (max-width: 1200px) {\n      .columns-wrap:before {\n        background-size: 24%; } }\n  @media (max-width: 900px) {\n      .columns-wrap:before {\n        display: none; } }\n  .columns-wrap .column {\n    width: 50%; }\n  @media (max-width: 900px) {\n      .columns-wrap .column {\n        width: 100%; } }\n  .columns-wrap .column-left {\n    padding-right: 18%; }\n  @media (max-width: 1200px) {\n      .columns-wrap .column-left {\n        padding-right: 12%; } }\n  @media (max-width: 900px) {\n      .columns-wrap .column-left {\n        padding-right: 0; } }\n  .columns-wrap .column-right {\n    padding-left: 18%; }\n  @media (max-width: 1200px) {\n      .columns-wrap .column-right {\n        padding-left: 14%; } }\n  @media (max-width: 900px) {\n      .columns-wrap .column-right {\n        padding-left: 0; } }\n  .section-title {\n  color: #333;\n  font-family: Bernadette;\n  font-size: 50px;\n  font-weight: 400;\n  letter-spacing: -1.58px;\n  margin: 0 0 30px 0; }\n  @media (max-width: 1200px) {\n    .section-title {\n      font-size: 45px; } }\n  @media (max-width: 900px) {\n    .section-title {\n      font-size: 45px; } }\n  .title-descr {\n  color: #040404;\n  font-family: Lato;\n  font-size: 18px;\n  line-height: 1.4;\n  letter-spacing: 0.45px;\n  font-weight: 300; }\n  .title-descr span {\n    font-weight: 400; }\n  @media (max-width: 700px) {\n    .title-descr {\n      font-size: 16px; } }\n  @media (max-width: 900px) {\n  .button-wrap {\n    text-align: center; } }\n  .quote {\n  color: #040404;\n  font-family: Lato;\n  font-size: 18px;\n  font-style: italic;\n  line-height: 1.4;\n  letter-spacing: 0.45px;\n  padding-top: 50px;\n  margin-bottom: 30px;\n  position: relative; }\n  @media (max-width: 900px) {\n    .quote {\n      padding-left: 60px;\n      padding-top: 0;\n      margin-top: 50px; } }\n  @media (max-width: 700px) {\n    .quote {\n      font-size: 16px;\n      margin-top: 30px;\n      padding-left: 50px; } }\n  .quote:before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: -100px;\n    width: 83px;\n    height: 88px;\n    background: url(/assets/img/quote-icon.png) center center no-repeat; }\n  @media (max-width: 1200px) {\n      .quote:before {\n        width: 60px;\n        height: 60px;\n        background-size: contain;\n        left: -72px;\n        top: 11px; } }\n  @media (max-width: 900px) {\n      .quote:before {\n        left: 0;\n        top: 0;\n        width: 50px;\n        height: 50px; } }\n  @media (max-width: 700px) {\n      .quote:before {\n        width: 40px;\n        height: 40px; } }\n  .quote-author {\n  color: #333;\n  font-family: Bernadette;\n  font-size: 47px;\n  font-weight: 400;\n  letter-spacing: -1.58px;\n  text-align: center; }\n  @media (max-width: 900px) {\n    .quote-author {\n      font-size: 38px; } }\n"

/***/ }),

/***/ "./src/app/about-us/about-us.component.ts":
/*!************************************************!*\
  !*** ./src/app/about-us/about-us.component.ts ***!
  \************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutUsComponent = /** @class */ (function () {
    function AboutUsComponent() {
        this.aboutUsCardsList = [
            {
                title: 'Best TrackRecord',
                description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                imgSrc: 'assets/img/about-us-1.jpg',
            },
            {
                title: 'Trusted by leaders',
                description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                imgSrc: 'assets/img/about-us-2.jpg',
            },
            {
                title: 'Brand Equity',
                description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                imgSrc: 'assets/img/about-us-3.jpg',
            },
        ];
        this.modalIsVisible = false;
        this.modalCard = {};
    }
    AboutUsComponent.prototype.ngOnInit = function () {
    };
    AboutUsComponent.prototype.openCardModal = function (card) {
        this.modalIsVisible = true;
        this.modalCard = card;
    };
    AboutUsComponent.prototype.closeCardModal = function () {
        this.modalIsVisible = false;
        this.modalCard = {};
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AboutUsComponent.prototype, "scrollbarHidden", void 0);
    AboutUsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about-us',
            template: __webpack_require__(/*! ./about-us.component.html */ "./src/app/about-us/about-us.component.html"),
            styles: [__webpack_require__(/*! ./about-us.component.scss */ "./src/app/about-us/about-us.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutUsComponent);
    return AboutUsComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<app-top-section></app-top-section>\n<app-about-us></app-about-us>\n<app-features></app-features>\n<app-services></app-services>\n<app-team></app-team>\n<!-- <app-about-person></app-about-person> -->\n<app-get-in-touch></app-get-in-touch>\n<app-footer></app-footer>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _top_section_top_section_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./top-section/top-section.component */ "./src/app/top-section/top-section.component.ts");
/* harmony import */ var _components_logo_logo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/logo/logo.component */ "./src/app/components/logo/logo.component.ts");
/* harmony import */ var _components_button_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/button/button.component */ "./src/app/components/button/button.component.ts");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about-us/about-us.component */ "./src/app/about-us/about-us.component.ts");
/* harmony import */ var _components_container_container_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/container/container.component */ "./src/app/components/container/container.component.ts");
/* harmony import */ var _about_us_about_us_card_about_us_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./about-us/about-us-card/about-us-card.component */ "./src/app/about-us/about-us-card/about-us-card.component.ts");
/* harmony import */ var _features_features_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./features/features.component */ "./src/app/features/features.component.ts");
/* harmony import */ var _services_section_services_section_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services-section/services-section.component */ "./src/app/services-section/services-section.component.ts");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/services.component */ "./src/app/services/services.component.ts");
/* harmony import */ var _components_services_icon_services_icon_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/services-icon/services-icon.component */ "./src/app/components/services-icon/services-icon.component.ts");
/* harmony import */ var _team_team_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./team/team.component */ "./src/app/team/team.component.ts");
/* harmony import */ var _components_team_card_team_card_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/team-card/team-card.component */ "./src/app/components/team-card/team-card.component.ts");
/* harmony import */ var _about_person_about_person_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./about-person/about-person.component */ "./src/app/about-person/about-person.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _get_in_touch_get_in_touch_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./get-in-touch/get-in-touch.component */ "./src/app/get-in-touch/get-in-touch.component.ts");
/* harmony import */ var ngx_drag_scroll__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-drag-scroll */ "./node_modules/ngx-drag-scroll/lib/index.js");
/* harmony import */ var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/modal/modal.component */ "./src/app/components/modal/modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
                _top_section_top_section_component__WEBPACK_IMPORTED_MODULE_4__["TopSectionComponent"],
                _components_logo_logo_component__WEBPACK_IMPORTED_MODULE_5__["LogoComponent"],
                _components_button_button_component__WEBPACK_IMPORTED_MODULE_6__["ButtonComponent"],
                _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_7__["AboutUsComponent"],
                _components_container_container_component__WEBPACK_IMPORTED_MODULE_8__["ContainerComponent"],
                _about_us_about_us_card_about_us_card_component__WEBPACK_IMPORTED_MODULE_9__["AboutUsCardComponent"],
                _features_features_component__WEBPACK_IMPORTED_MODULE_10__["FeaturesComponent"],
                _services_section_services_section_component__WEBPACK_IMPORTED_MODULE_11__["ServicesSectionComponent"],
                _services_services_component__WEBPACK_IMPORTED_MODULE_12__["ServicesComponent"],
                _components_services_icon_services_icon_component__WEBPACK_IMPORTED_MODULE_13__["ServicesIconComponent"],
                _team_team_component__WEBPACK_IMPORTED_MODULE_14__["TeamComponent"],
                _components_team_card_team_card_component__WEBPACK_IMPORTED_MODULE_15__["TeamCardComponent"],
                _about_person_about_person_component__WEBPACK_IMPORTED_MODULE_16__["AboutPersonComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_17__["FooterComponent"],
                _get_in_touch_get_in_touch_component__WEBPACK_IMPORTED_MODULE_18__["GetInTouchComponent"],
                _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_20__["ModalComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                ngx_drag_scroll__WEBPACK_IMPORTED_MODULE_19__["DragScrollModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/button/button.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/button/button.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button [class]=\"class\" (click)=\"click()\">\n  <ng-content></ng-content>\n</button>"

/***/ }),

/***/ "./src/app/components/button/button.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/button/button.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  color: #020202;\n  font-size: 16px;\n  line-height: 20px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.32px;\n  padding: 10px 15px;\n  border-radius: 20px;\n  box-shadow: 0 0 49px rgba(0, 0, 0, 0.07);\n  background-color: #fff;\n  border: 0; }\n  button.-gradient {\n    color: #fff;\n    background-image: linear-gradient(to right, #de813c 0%, #3f519a 100%); }\n  button.-transparent {\n    background: transparent;\n    padding: 0;\n    display: flex; }\n"

/***/ }),

/***/ "./src/app/components/button/button.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/button/button.component.ts ***!
  \*******************************************************/
/*! exports provided: ButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ButtonComponent = /** @class */ (function () {
    function ButtonComponent() {
        this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
    }
    ButtonComponent.prototype.ngOnInit = function () {
    };
    ButtonComponent.prototype.click = function () {
        this.onClick.emit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ButtonComponent.prototype, "class", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ButtonComponent.prototype, "onClick", void 0);
    ButtonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-button',
            template: __webpack_require__(/*! ./button.component.html */ "./src/app/components/button/button.component.html"),
            styles: [__webpack_require__(/*! ./button.component.scss */ "./src/app/components/button/button.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ButtonComponent);
    return ButtonComponent;
}());



/***/ }),

/***/ "./src/app/components/container/container.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/container/container.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <ng-content></ng-content>\n</div>"

/***/ }),

/***/ "./src/app/components/container/container.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/container/container.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  padding: 0 15px;\n  max-width: 1200px;\n  width: 100%;\n  margin: 0 auto;\n  position: relative;\n  overflow: hidden; }\n  @media (max-width: 1200px) {\n    .container {\n      max-width: 900px; } }\n  @media (max-width: 900px) {\n    .container {\n      max-width: 700px; } }\n  @media (max-width: 700px) {\n    .container {\n      max-width: 100%; } }\n"

/***/ }),

/***/ "./src/app/components/container/container.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/container/container.component.ts ***!
  \*************************************************************/
/*! exports provided: ContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerComponent", function() { return ContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContainerComponent = /** @class */ (function () {
    function ContainerComponent() {
    }
    ContainerComponent.prototype.ngOnInit = function () {
    };
    ContainerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-container',
            template: __webpack_require__(/*! ./container.component.html */ "./src/app/components/container/container.component.html"),
            styles: [__webpack_require__(/*! ./container.component.scss */ "./src/app/components/container/container.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContainerComponent);
    return ContainerComponent;
}());



/***/ }),

/***/ "./src/app/components/logo/logo.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/logo/logo.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"logo-wrap\">\n  <a href=\"#\">digital</a>\n</div>"

/***/ }),

/***/ "./src/app/components/logo/logo.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/logo/logo.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo-wrap a {\n  color: #fff;\n  font-size: 60px;\n  font-weight: 900;\n  letter-spacing: -1.39px;\n  text-decoration: none;\n  display: flex;\n  align-items: flex-end; }\n  @media (max-width: 700px) {\n    .logo-wrap a {\n      font-size: 50px; } }\n  .logo-wrap a:after {\n    content: '';\n    width: .2333em;\n    height: .2333em;\n    background-color: #fba419;\n    border-radius: 50%;\n    margin-left: .05em;\n    margin-bottom: .28em; }\n  .logo-wrap a:hover {\n    -webkit-mask-image: linear-gradient(-75deg, rgba(0, 0, 0, 0.6) 30%, #000 50%, rgba(0, 0, 0, 0.6) 70%);\n    -webkit-mask-size: 200%;\n    -webkit-animation: shine 2s infinite;\n            animation: shine 2s infinite; }\n  @-webkit-keyframes shine {\n  from {\n    -webkit-mask-position: 150%; }\n  to {\n    -webkit-mask-position: -50%; } }\n"

/***/ }),

/***/ "./src/app/components/logo/logo.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/logo/logo.component.ts ***!
  \***************************************************/
/*! exports provided: LogoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoComponent", function() { return LogoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LogoComponent = /** @class */ (function () {
    function LogoComponent() {
    }
    LogoComponent.prototype.ngOnInit = function () {
    };
    LogoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-logo',
            template: __webpack_require__(/*! ./logo.component.html */ "./src/app/components/logo/logo.component.html"),
            styles: [__webpack_require__(/*! ./logo.component.scss */ "./src/app/components/logo/logo.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LogoComponent);
    return LogoComponent;
}());



/***/ }),

/***/ "./src/app/components/modal/modal.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/modal/modal.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-wrap\">\n  <div class=\"modal-content\">\n    <app-button class=\"-transparent close-btn\" (onClick)=\"close()\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\"/><path d=\"M0 0h24v24H0z\" fill=\"none\"/></svg>\n    </app-button>\n    <ng-content></ng-content>\n  </div>\n  <div class=\"bg\" (click)=\"close()\"></div>\n</div>"

/***/ }),

/***/ "./src/app/components/modal/modal.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/modal/modal.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal-wrap {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100vh;\n  z-index: 999;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.modal-content {\n  position: relative;\n  max-width: 700px;\n  padding: 30px 20px;\n  background: #fff;\n  border-radius: 5px;\n  z-index: 1;\n  -webkit-transform: translateY(-200px);\n          transform: translateY(-200px);\n  opacity: 0;\n  -webkit-animation: modalContent .2s .1s forwards ease-in-out;\n          animation: modalContent .2s .1s forwards ease-in-out; }\n\n@-webkit-keyframes modalContent {\n  from {\n    -webkit-transform: translateY(-200px);\n            transform: translateY(-200px);\n    opacity: 0; }\n  to {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n    opacity: 1; } }\n\n@keyframes modalContent {\n  from {\n    -webkit-transform: translateY(-200px);\n            transform: translateY(-200px);\n    opacity: 0; }\n  to {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n    opacity: 1; } }\n\n.close-btn {\n  position: absolute;\n  top: 5px;\n  right: 5px; }\n\n.close-btn:hover {\n    box-shadow: inset 0 0.5px 1px rgba(0, 0, 0, 0.125) !important; }\n\n.close-btn:active {\n    box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125) !important; }\n\n.bg {\n  width: 100%;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.4);\n  opacity: 0;\n  -webkit-animation: modalBg .2s forwards linear;\n          animation: modalBg .2s forwards linear; }\n\n@-webkit-keyframes modalBg {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@keyframes modalBg {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n"

/***/ }),

/***/ "./src/app/components/modal/modal.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/modal/modal.component.ts ***!
  \*****************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModalComponent = /** @class */ (function () {
    function ModalComponent() {
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.modalIsVisible = this.show;
    }
    ModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.addEventListener('keydown', function (e) {
            if (e.keyCode === 27) {
                _this.onClose.emit();
            }
        });
    };
    ModalComponent.prototype.close = function () {
        this.onClose.emit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ModalComponent.prototype, "show", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ModalComponent.prototype, "onClose", void 0);
    ModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modal',
            template: __webpack_require__(/*! ./modal.component.html */ "./src/app/components/modal/modal.component.html"),
            styles: [__webpack_require__(/*! ./modal.component.scss */ "./src/app/components/modal/modal.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/app/components/services-icon/services-icon.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/services-icon/services-icon.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<figure class=\"figure\">\n  <img [src]=\"icon.imgSrc\" [alt]=\"icon.title\">\n  <figcaption>{{icon.title}}</figcaption>\n</figure>"

/***/ }),

/***/ "./src/app/components/services-icon/services-icon.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/services-icon/services-icon.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".figure {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 5px;\n  padding: 25px 35px; }\n  @media (max-width: 1200px) {\n    .figure {\n      padding: 20px; } }\n  .figure img {\n    height: 46px;\n    margin-bottom: 10px; }\n  .figure figcaption {\n    color: #fff;\n    font-size: 17px;\n    font-weight: 600;\n    letter-spacing: 0.42px;\n    text-align: center; }\n"

/***/ }),

/***/ "./src/app/components/services-icon/services-icon.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/services-icon/services-icon.component.ts ***!
  \*********************************************************************/
/*! exports provided: ServicesIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesIconComponent", function() { return ServicesIconComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServicesIconComponent = /** @class */ (function () {
    function ServicesIconComponent() {
    }
    ServicesIconComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ServicesIconComponent.prototype, "icon", void 0);
    ServicesIconComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-services-icon',
            template: __webpack_require__(/*! ./services-icon.component.html */ "./src/app/components/services-icon/services-icon.component.html"),
            styles: [__webpack_require__(/*! ./services-icon.component.scss */ "./src/app/components/services-icon/services-icon.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ServicesIconComponent);
    return ServicesIconComponent;
}());



/***/ }),

/***/ "./src/app/components/team-card/team-card.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/team-card/team-card.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<figure class=\"figure\">\n  <img [src]=\"person.imgSrc\" [alt]=\"person.fullName\">\n  <figcaption class=\"figcaption\">\n    <h3 class=\"full-name\">{{person.fullName}}</h3>\n    <p class=\"job-title\">{{person.jobTitle}}</p>\n  </figcaption>\n</figure>"

/***/ }),

/***/ "./src/app/components/team-card/team-card.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/team-card/team-card.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".figure img {\n  width: 100%;\n  border-radius: 11px; }\n\n.figcaption {\n  padding: 30px 0; }\n\n@media (max-width: 700px) {\n    .figcaption {\n      padding: 15px 0; } }\n\n.full-name {\n  color: #333;\n  font-size: 25px;\n  font-weight: 500;\n  letter-spacing: 0.61px;\n  margin: 0; }\n\n@media (max-width: 1200px) {\n    .full-name {\n      font-size: 23px; } }\n\n@media (max-width: 1200px) {\n    .full-name {\n      font-size: 20px; } }\n\n.job-title {\n  color: #a3a3a3;\n  font-size: 20px;\n  font-weight: 300;\n  letter-spacing: 0.5px;\n  padding: 0; }\n\n@media (max-width: 1200px) {\n    .job-title {\n      font-size: 18px; } }\n\n@media (max-width: 1200px) {\n    .job-title {\n      font-size: 15px; } }\n"

/***/ }),

/***/ "./src/app/components/team-card/team-card.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/team-card/team-card.component.ts ***!
  \*************************************************************/
/*! exports provided: TeamCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamCardComponent", function() { return TeamCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TeamCardComponent = /** @class */ (function () {
    function TeamCardComponent() {
    }
    TeamCardComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TeamCardComponent.prototype, "person", void 0);
    TeamCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-team-card',
            template: __webpack_require__(/*! ./team-card.component.html */ "./src/app/components/team-card/team-card.component.html"),
            styles: [__webpack_require__(/*! ./team-card.component.scss */ "./src/app/components/team-card/team-card.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TeamCardComponent);
    return TeamCardComponent;
}());



/***/ }),

/***/ "./src/app/features/features.component.html":
/*!**************************************************!*\
  !*** ./src/app/features/features.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"features\">\n  <app-container>\n    <ul class=\"features-list\">\n      <li *ngFor=\"let img of imgs\" class=\"features-item\">\n        <img [src]=\"img\" alt=\"\">\n      </li>\n    </ul>\n    <div class=\"features-content\">\n      <h2 class=\"title\">Amazing features</h2>\n      <p class=\"description\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>\n      <app-button class=\"-gradient\">Read more</app-button>\n    </div>\n  </app-container>\n</section>"

/***/ }),

/***/ "./src/app/features/features.component.scss":
/*!**************************************************!*\
  !*** ./src/app/features/features.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".features {\n  padding-bottom: 50px; }\n\n.features-list {\n  display: flex;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  flex-wrap: wrap;\n  margin: -12px; }\n\n.features-item {\n  width: 50%;\n  font-size: 0;\n  border-radius: 11px;\n  overflow: hidden;\n  padding: 12px; }\n\n.features-item img {\n    width: 100%; }\n\n@media (max-width: 700px) {\n    .features-item {\n      width: 100%; }\n      .features-item:nth-child(3), .features-item:nth-child(4) {\n        display: none; } }\n\n.features-content {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  padding: 4% 2%;\n  box-shadow: 0 0 49px rgba(0, 0, 0, 0.07);\n  border-radius: 10px;\n  background-color: #fff;\n  text-align: center;\n  width: 80%;\n  max-width: 700px; }\n\n@media (max-width: 700px) {\n    .features-content {\n      padding: 20px 15px; } }\n\n@media (max-width: 500px) {\n    .features-content {\n      width: 85%; } }\n\n.features-content .title {\n    color: #333;\n    font-family: Bernadette;\n    font-size: 50px;\n    font-weight: 400;\n    letter-spacing: -1.58px;\n    margin: 0 0 25px 0; }\n\n@media (max-width: 1200px) {\n      .features-content .title {\n        font-size: 45px; } }\n\n@media (max-width: 500px) {\n      .features-content .title {\n        font-size: 38px; } }\n\n@media (max-width: 370px) {\n      .features-content .title {\n        font-size: 34px; } }\n\n.features-content .description {\n    color: #040404;\n    font-size: 18px;\n    font-style: italic;\n    line-height: 1.5;\n    letter-spacing: 0.45px;\n    margin: 0 0 15px 0; }\n\n@media (max-width: 900px) {\n      .features-content .description {\n        font-size: 16px;\n        line-height: 1.4; } }\n\n@media (max-width: 500px) {\n      .features-content .description {\n        font-size: 14px;\n        line-height: 1.3; } }\n"

/***/ }),

/***/ "./src/app/features/features.component.ts":
/*!************************************************!*\
  !*** ./src/app/features/features.component.ts ***!
  \************************************************/
/*! exports provided: FeaturesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesComponent", function() { return FeaturesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FeaturesComponent = /** @class */ (function () {
    function FeaturesComponent() {
        this.imgs = [
            '/assets/img/features_1.jpg',
            '/assets/img/features_2.jpg',
            '/assets/img/features_3.jpg',
            '/assets/img/features_4.jpg',
        ];
    }
    FeaturesComponent.prototype.ngOnInit = function () {
    };
    FeaturesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-features',
            template: __webpack_require__(/*! ./features.component.html */ "./src/app/features/features.component.html"),
            styles: [__webpack_require__(/*! ./features.component.scss */ "./src/app/features/features.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FeaturesComponent);
    return FeaturesComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n  <app-container>\n    <address class=\"address\">\n      <ul class=\"address-list\">\n        <li class=\"address-item\">\n          <figure>\n            <div class=\"img-wrap\"><img src=\"/assets/img/email-icon.png\" alt=\"Email\"></div>\n            <figcaption>\n              <h3 class=\"address-title\">Email</h3>\n              <a class=\"address-link\" href=\"mailto:email@keenethics.com\">email@keenethics.com</a>\n              <a class=\"address-link\" href=\"mailto:email@keenethics.com\">email@keenethics.com</a>\n            </figcaption>\n          </figure>\n        </li>\n        <li class=\"address-item\">\n          <figure>\n            <div class=\"img-wrap\"><img src=\"/assets/img/phone-icon.png\" alt=\"Phone\"></div>\n            <figcaption>\n              <h3 class=\"address-title\">Call Us</h3>\n              <a class=\"address-link\" href=\"tel:+1234567890\">+123 456 7890</a>\n              <a class=\"address-link\" href=\"tel:+1234567890\">+123 456 7890</a>\n            </figcaption>\n          </figure>\n        </li>\n        <li class=\"address-item\">\n          <figure>\n            <div class=\"img-wrap\"><img src=\"/assets/img/location-icon.png\" alt=\"Location\"></div>\n            <figcaption>\n              <h3 class=\"address-title\">Address</h3>\n              <a class=\"address-link\" href=\"#\">123, Main Road, New City, My Country 123456</a>\n            </figcaption>\n          </figure>\n        </li>\n      </ul>\n    </address>\n  </app-container>\n</footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  padding: 50px 0; }\n\n.address {\n  font-style: normal; }\n\n.address-list {\n  margin: 0 -15px;\n  padding: 0;\n  display: flex;\n  flex-wrap: wrap;\n  list-style: none;\n  justify-content: space-between; }\n\n.address-item {\n  padding: 15px; }\n\n.address-item figure {\n    display: flex; }\n\n.address-item .img-wrap {\n    margin-right: 30px; }\n\n.address-item .img-wrap img {\n      width: 100%; }\n\n.address-item figcaption {\n    display: flex;\n    flex-direction: column;\n    max-width: 225px; }\n\n.address-item .address-title {\n    margin-bottom: 5px;\n    color: #494949;\n    font-size: 17px;\n    font-weight: 700;\n    text-transform: uppercase;\n    letter-spacing: 0.42px; }\n\n.address-item .address-link {\n    color: #494949;\n    font-size: 16px;\n    font-weight: 400;\n    letter-spacing: 0.4px;\n    text-decoration: none;\n    line-height: 24px; }\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/get-in-touch/get-in-touch.component.html":
/*!**********************************************************!*\
  !*** ./src/app/get-in-touch/get-in-touch.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"get-in-touch\">\n  <div class=\"bg\">\n    <app-container>\n      <h2 class=\"section-title\">Get in Touch</h2>\n      <address class=\"address\">\n        <ul class=\"social-icons-list\">\n          <li class=\"social-icons-item\" *ngFor=\"let icon of socialIcons\">\n            <a [href]=\"icon.href\" class=\"icon-link\">\n              <div class=\"icon-wrap\">\n                <img [src]=\"icon.iconSrc\" [alt]=\"icon.title\" [title]=\"icon.title\" class=\"icon\">\n              </div>\n            </a>\n          </li>\n        </ul>\n      </address>\n    </app-container>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/get-in-touch/get-in-touch.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/get-in-touch/get-in-touch.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".get-in-touch {\n  background-color: #000;\n  background: linear-gradient(to right, rgba(222, 129, 60, 0.82) 0%, rgba(63, 81, 154, 0.82) 100%);\n  box-shadow: 0 0 49px rgba(0, 0, 0, 0.07); }\n  .get-in-touch .bg {\n    padding: 50px 0;\n    background: url(/assets/img/get-in-touch-bg.png) center center no-repeat;\n    background-size: cover; }\n  .section-title {\n  color: #fff;\n  font-family: Bernadette;\n  font-size: 50px;\n  font-weight: 400;\n  letter-spacing: -1.58px;\n  text-align: center;\n  margin: 10px 0 30px 0; }\n  @media (max-width: 1200px) {\n    .section-title {\n      font-size: 45px; } }\n  .address {\n  font-style: normal; }\n  .social-icons-list {\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n  margin: 0 -15px;\n  padding: 0;\n  list-style: none; }\n  @media (max-width: 420px) {\n    .social-icons-list {\n      justify-content: center; } }\n  .social-icons-item {\n  padding: 18px; }\n  @media (max-width: 445px) {\n    .social-icons-item {\n      width: 21%;\n      padding: 20px 15px; } }\n  .icon-wrap {\n  position: relative;\n  width: 50px;\n  height: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap; }\n  @media (max-width: 1200px) {\n    .icon-wrap {\n      width: 40px;\n      height: 40px; } }\n  @media (max-width: 700px) {\n    .icon-wrap {\n      width: 25px;\n      height: 25px; } }\n  @media (max-width: 420px) {\n    .icon-wrap {\n      margin: 0 auto; } }\n  .icon-wrap:before {\n    content: '';\n    width: 80px;\n    height: 80px;\n    border: 3px solid #fff;\n    border-radius: 50%;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%); }\n  @media (max-width: 1200px) {\n      .icon-wrap:before {\n        width: 60px;\n        height: 60px; } }\n  @media (max-width: 700px) {\n      .icon-wrap:before {\n        width: 45px;\n        height: 45px; } }\n  .icon {\n  max-width: 100%;\n  max-height: 100%; }\n"

/***/ }),

/***/ "./src/app/get-in-touch/get-in-touch.component.ts":
/*!********************************************************!*\
  !*** ./src/app/get-in-touch/get-in-touch.component.ts ***!
  \********************************************************/
/*! exports provided: GetInTouchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetInTouchComponent", function() { return GetInTouchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GetInTouchComponent = /** @class */ (function () {
    function GetInTouchComponent() {
        this.socialIcons = [
            {
                title: 'Facebook',
                iconSrc: '/assets/img/facebook.png',
                href: '#',
            },
            {
                title: 'Google+',
                iconSrc: '/assets/img/google+.png',
                href: '#',
            },
            {
                title: 'Vk',
                iconSrc: '/assets/img/vk.png',
                href: '#',
            },
            {
                title: 'YouTube',
                iconSrc: '/assets/img/youtube.png',
                href: '#',
            },
            {
                title: 'Linkedin',
                iconSrc: '/assets/img/linkedin.png',
                href: '#',
            },
            {
                title: 'Digg',
                iconSrc: '/assets/img/digg.png',
                href: '#',
            },
            {
                title: 'Hz',
                iconSrc: '/assets/img/hz.png',
                href: '#',
            },
        ];
    }
    GetInTouchComponent.prototype.ngOnInit = function () {
    };
    GetInTouchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-get-in-touch',
            template: __webpack_require__(/*! ./get-in-touch.component.html */ "./src/app/get-in-touch/get-in-touch.component.html"),
            styles: [__webpack_require__(/*! ./get-in-touch.component.scss */ "./src/app/get-in-touch/get-in-touch.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], GetInTouchComponent);
    return GetInTouchComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\n  <app-logo></app-logo>\n  <nav class=\"nav\" *ngIf=\"leftBarIsVisible || !hamburgerButtonIsVisible\" (click)=\"toggleMenu($event)\">\n    <ul class=\"nav-list\">\n      <li *ngFor=\"let item of navList\" class=\"nav-item\">\n        <a href=\"#\">{{ item }}</a>\n      </li>\n    </ul>\n  </nav>\n  <app-button class=\"-transparent\" *ngIf=\"hamburgerButtonIsVisible\" (click)=\"toggleMenu()\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"30\" height=\"30\" viewBox=\"0 0 24 24\" fill=\"#fff\"><path d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z\"/></svg>\n  </app-button>\n</header>"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  width: 100%;\n  padding: 10px 15px;\n  justify-content: space-between;\n  align-items: center; }\n\n@media (max-width: 900px) {\n  .nav {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100vh;\n    background: rgba(0, 0, 0, 0.3);\n    z-index: 9; } }\n\n.nav-list {\n  display: flex;\n  list-style-type: none;\n  margin: 0;\n  padding: 0; }\n\n@media (max-width: 900px) {\n    .nav-list {\n      padding: 30px;\n      width: 180px;\n      flex-direction: column;\n      background: #fff;\n      height: 100%;\n      -webkit-animation: leftBar .4s ease-in-out;\n              animation: leftBar .4s ease-in-out; } }\n\n@-webkit-keyframes leftBar {\n  from {\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%); }\n  to {\n    -webkit-transform: translateX(0);\n            transform: translateX(0); } }\n\n@keyframes leftBar {\n  from {\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%); }\n  to {\n    -webkit-transform: translateX(0);\n            transform: translateX(0); } }\n\n.nav-item {\n  margin-right: 15px;\n  padding: 20px 5px; }\n\n@media (max-width: 1200px) {\n    .nav-item {\n      margin-right: 10px; } }\n\n@media (max-width: 900px) {\n    .nav-item {\n      margin: 0;\n      padding: 0; } }\n\n.nav-item:last-child {\n    margin-right: 0; }\n\n.nav-item a {\n    color: #fff;\n    font-size: 15px;\n    font-weight: 700;\n    text-transform: uppercase;\n    letter-spacing: 0.24px;\n    text-decoration: none;\n    display: inline-block;\n    position: relative; }\n\n@media (max-width: 900px) {\n      .nav-item a {\n        color: rgba(0, 0, 0, 0.75);\n        padding: 10px;\n        display: inline-block; } }\n\n.nav-item a:before {\n      content: '';\n      position: absolute;\n      left: 0;\n      bottom: -20px;\n      width: 100%;\n      height: 3px;\n      opacity: 0;\n      background: currentColor;\n      border-radius: 2px;\n      transition: bottom .2s ease-in-out, opacity .2s ease-in-out; }\n\n@media (max-width: 900px) {\n        .nav-item a:before {\n          bottom: -10px; } }\n\n.nav-item a:hover:before, .nav-item a:active:before {\n      bottom: -10px;\n      opacity: .5; }\n\n@media (max-width: 900px) {\n        .nav-item a:hover:before, .nav-item a:active:before {\n          bottom: 2px; } }\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.navList = [
            'Features',
            'Offer',
            'Pricing',
            'Clients',
            'Facts',
            'Projects',
            'Team',
            'Contact',
        ];
        this.leftBarIsVisible = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.hamburgerButtonIsVisible = window.innerWidth > 900 ? false : true;
        window.addEventListener('resize', function () {
            if (window.innerWidth > 900) {
                _this.hamburgerButtonIsVisible = false;
            }
            else {
                _this.hamburgerButtonIsVisible = true;
            }
        });
    };
    HeaderComponent.prototype.toggleMenu = function (e) {
        if (e && e.target.classList.contains('nav-list')) {
            return;
        }
        this.leftBarIsVisible = !this.leftBarIsVisible;
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/services-section/services-section.component.html":
/*!******************************************************************!*\
  !*** ./src/app/services-section/services-section.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  services-section works!\n</p>\n"

/***/ }),

/***/ "./src/app/services-section/services-section.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/services-section/services-section.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/services-section/services-section.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/services-section/services-section.component.ts ***!
  \****************************************************************/
/*! exports provided: ServicesSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesSectionComponent", function() { return ServicesSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServicesSectionComponent = /** @class */ (function () {
    function ServicesSectionComponent() {
    }
    ServicesSectionComponent.prototype.ngOnInit = function () {
    };
    ServicesSectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-services-section',
            template: __webpack_require__(/*! ./services-section.component.html */ "./src/app/services-section/services-section.component.html"),
            styles: [__webpack_require__(/*! ./services-section.component.scss */ "./src/app/services-section/services-section.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ServicesSectionComponent);
    return ServicesSectionComponent;
}());



/***/ }),

/***/ "./src/app/services/services.component.html":
/*!**************************************************!*\
  !*** ./src/app/services/services.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"services\">\n  <app-container>\n    <div class=\"services-content\">\n      <h2 class=\"title\">Services<br/>We Provide</h2>\n      <p class=\"description\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\n      <p class=\"description\">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>\n      <app-button class=\"-gradient\">Read more</app-button>\n    </div>\n  </app-container>\n  <div class=\"icons\">\n    <ul class=\"icons-list\">\n      <li class=\"icons-item\" *ngFor=\"let icon of icons\">\n        <app-services-icon [icon]=\"icon\"></app-services-icon>\n      </li>\n    </ul>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/services/services.component.scss":
/*!**************************************************!*\
  !*** ./src/app/services/services.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".services {\n  padding: 50px 0;\n  background: #f4f4f4 url(/assets/img/services-section-bg.png) right center no-repeat;\n  background-size: contain;\n  position: relative; }\n  @media (max-width: 1200px) {\n    .services {\n      background-position-x: 135%; } }\n  @media (max-width: 900px) {\n    .services {\n      background-position: bottom center;\n      background-size: 540px; } }\n  .services-content {\n  max-width: 45%; }\n  @media (max-width: 1200px) {\n    .services-content {\n      max-width: 50%; } }\n  @media (max-width: 900px) {\n    .services-content {\n      max-width: unset; } }\n  .title {\n  color: #333;\n  font-family: Bernadette;\n  font-size: 50px;\n  font-weight: 400;\n  letter-spacing: -1.58px;\n  margin: 10px 0 20px 0; }\n  .title + .description {\n    font-weight: 600; }\n  @media (max-width: 1200px) {\n    .title {\n      font-size: 45px; } }\n  .description {\n  color: #040404;\n  font-size: 18px;\n  line-height: 1.4;\n  letter-spacing: 0.45px;\n  font-weight: 300;\n  margin-bottom: 15px; }\n  @media (max-width: 700px) {\n    .description {\n      font-size: 16px; } }\n  .icons {\n  position: absolute;\n  top: 50%;\n  left: 61%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  box-shadow: 0 0 49px rgba(0, 0, 0, 0.07);\n  border-radius: 10px;\n  background-color: #646464;\n  background-image: linear-gradient(-225deg, #de813c 0%, #3f519a 100%);\n  width: 350px;\n  max-width: 100%;\n  opacity: .95; }\n  @media (max-width: 1200px) {\n    .icons {\n      left: 68%;\n      width: 300px; } }\n  @media (max-width: 900px) {\n    .icons {\n      position: static;\n      -webkit-transform: unset;\n              transform: unset;\n      margin: 0 auto;\n      margin-top: 70px; } }\n  .icons-list {\n  display: flex;\n  flex-wrap: wrap;\n  list-style: none;\n  margin: 0;\n  padding: 0; }\n  .icons-item {\n  width: 50%; }\n"

/***/ }),

/***/ "./src/app/services/services.component.ts":
/*!************************************************!*\
  !*** ./src/app/services/services.component.ts ***!
  \************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServicesComponent = /** @class */ (function () {
    function ServicesComponent() {
        this.icons = [
            {
                title: 'Logo & Branding',
                imgSrc: '/assets/img/services-icon-1.png',
            },
            {
                title: 'Social Media Branding',
                imgSrc: '/assets/img/services-icon-2.png',
            },
            {
                title: 'Digital Products',
                imgSrc: '/assets/img/services-icon-3.png',
            },
            {
                title: 'Logo & Branding',
                imgSrc: '/assets/img/services-icon-4.png',
            },
            {
                title: 'Loreipsum dolor',
                imgSrc: '/assets/img/services-icon-5.png',
            },
            {
                title: 'Mobile & Web',
                imgSrc: '/assets/img/services-icon-6.png',
            },
        ];
    }
    ServicesComponent.prototype.ngOnInit = function () {
    };
    ServicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-services',
            template: __webpack_require__(/*! ./services.component.html */ "./src/app/services/services.component.html"),
            styles: [__webpack_require__(/*! ./services.component.scss */ "./src/app/services/services.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ServicesComponent);
    return ServicesComponent;
}());



/***/ }),

/***/ "./src/app/team/team.component.html":
/*!******************************************!*\
  !*** ./src/app/team/team.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"team\">\n  <app-container>\n    <h2 class=\"title\">We are Perfect Team</h2>\n    <p class=\"description\"></p>\n    <ul class=\"team-list\">\n      <li class=\"team-item\" *ngFor=\"let person of team\">\n        <app-team-card [person]=\"person\"></app-team-card>\n      </li>\n    </ul>\n  </app-container>\n</section>"

/***/ }),

/***/ "./src/app/team/team.component.scss":
/*!******************************************!*\
  !*** ./src/app/team/team.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".team {\n  padding: 50px 15px 0 15px;\n  text-align: center; }\n\n.title {\n  color: #333;\n  font-family: Bernadette;\n  font-size: 50px;\n  font-weight: 400;\n  letter-spacing: -1.58px;\n  margin: 10px 0 25px 0; }\n\n@media (max-width: 1200px) {\n    .title {\n      font-size: 45px; } }\n\n.description {\n  color: #313131;\n  font-size: 18px;\n  font-weight: 300;\n  letter-spacing: 0.45px;\n  margin: 0 0 20px 0; }\n\n.team-list {\n  margin: 0 -15px;\n  padding: 0;\n  list-style: none;\n  display: flex;\n  flex-wrap: wrap;\n  position: relative;\n  justify-content: space-around; }\n\n.team-list:before {\n    content: '';\n    position: absolute;\n    bottom: 0;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%);\n    width: 105%;\n    height: 70%;\n    z-index: -1;\n    background-color: #f4f4f4; }\n\n@media (max-width: 1200px) {\n      .team-list:before {\n        height: 50%;\n        bottom: 25px; } }\n\n@media (max-width: 900px) {\n      .team-list:before {\n        width: 110%;\n        height: 70%; } }\n\n@media (max-width: 580px) {\n      .team-list:before {\n        display: none; } }\n\n.team-item {\n  width: 20%;\n  padding: 15px; }\n\n@media (max-width: 900px) {\n    .team-item {\n      width: 33.33%; } }\n\n@media (max-width: 530px) {\n    .team-item {\n      width: 50%; } }\n\n@media (max-width: 420px) {\n    .team-item {\n      padding: 10px; } }\n"

/***/ }),

/***/ "./src/app/team/team.component.ts":
/*!****************************************!*\
  !*** ./src/app/team/team.component.ts ***!
  \****************************************/
/*! exports provided: TeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamComponent", function() { return TeamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TeamComponent = /** @class */ (function () {
    function TeamComponent() {
        this.team = [
            {
                fullName: 'Jeff Norton',
                imgSrc: '/assets/img/team-1.jpg',
                jobTitle: 'Graphic Designer',
            },
            {
                fullName: 'Anita Allen',
                imgSrc: '/assets/img/team-2.jpg',
                jobTitle: 'Graphic Designer',
            },
            {
                fullName: 'Jeff Norton',
                imgSrc: '/assets/img/team-3.jpg',
                jobTitle: 'Graphic Designer',
            },
            {
                fullName: 'Anita Allen',
                imgSrc: '/assets/img/team-4.jpg',
                jobTitle: 'Graphic Designer',
            },
            {
                fullName: 'Jeff Norton',
                imgSrc: '/assets/img/team-5.jpg',
                jobTitle: 'Graphic Designer',
            },
        ];
    }
    TeamComponent.prototype.ngOnInit = function () {
    };
    TeamComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-team',
            template: __webpack_require__(/*! ./team.component.html */ "./src/app/team/team.component.html"),
            styles: [__webpack_require__(/*! ./team.component.scss */ "./src/app/team/team.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TeamComponent);
    return TeamComponent;
}());



/***/ }),

/***/ "./src/app/top-section/top-section.component.html":
/*!********************************************************!*\
  !*** ./src/app/top-section/top-section.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"top-section\">\n   <h1 class=\"title js-splitme\">Simply the Best</h1>\n   <p class=\"title-description\">Reasons for Choosing Us</p>\n   <p class=\"description\">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>\n   <app-button>Read More</app-button>\n</section>\n"

/***/ }),

/***/ "./src/app/top-section/top-section.component.scss":
/*!********************************************************!*\
  !*** ./src/app/top-section/top-section.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".top-section {\n  min-height: 100vh;\n  background-color: #3f519a;\n  background-image: linear-gradient(-225deg, #de813c 0%, #3f519a 100%);\n  color: #fff;\n  padding: 90px 15px 210px 15px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center; }\n  .top-section .title {\n    font-family: Bernadette;\n    font-size: 111px;\n    letter-spacing: -1.05px;\n    padding: .15em 0;\n    margin-bottom: 10px;\n    display: flex; }\n  @media (max-width: 900px) {\n      .top-section .title {\n        font-size: 95px; } }\n  @media (max-width: 700px) {\n      .top-section .title {\n        font-size: 60px; } }\n  @media (max-width: 440px) {\n      .top-section .title {\n        font-size: 42px; } }\n  .top-section .title-description {\n    font-size: 37px;\n    font-weight: 700;\n    letter-spacing: 0.61px;\n    margin-bottom: 15px; }\n  @media (max-width: 700px) {\n      .top-section .title-description {\n        font-size: 28px; } }\n  @media (max-width: 440px) {\n      .top-section .title-description {\n        font-size: 23px; } }\n  .top-section .description {\n    max-width: 650px;\n    font-size: 16px;\n    font-weight: 300;\n    line-height: 24px;\n    letter-spacing: 0.4px; }\n"

/***/ }),

/***/ "./src/app/top-section/top-section.component.ts":
/*!******************************************************!*\
  !*** ./src/app/top-section/top-section.component.ts ***!
  \******************************************************/
/*! exports provided: TopSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopSectionComponent", function() { return TopSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TopSectionComponent = /** @class */ (function () {
    function TopSectionComponent() {
    }
    // animation() {
    //   const t1 = new TimelineMax();
    //   const els = document.querySelectorAll(".js-splitme");
    //   [].forEach.call(els, function(el) {
    //       el.outerHTML = Splitter(el.outerHTML, '<span class="letter">$</span>');
    //   });
    //   t1
    //     .fromTo('.header .logo-wrap', 1, {x:-200, opacity:0}, {x:0, opacity:1} )
    //     .staggerFromTo('.header .nav-list .nav-item', 3, {y:50, opacity:0}, {y:0, opacity:1}, 0.1)
    //     .staggerFromTo('.top-section .title .letter', .8, {y:40, opacity:0}, {y:0, opacity:1, ease: Back.easeOut.config(3)}, 0.1);
    // }
    TopSectionComponent.prototype.ngOnInit = function () {
        // this.animation();
    };
    TopSectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-top-section',
            template: __webpack_require__(/*! ./top-section.component.html */ "./src/app/top-section/top-section.component.html"),
            styles: [__webpack_require__(/*! ./top-section.component.scss */ "./src/app/top-section/top-section.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TopSectionComponent);
    return TopSectionComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/maxsol/Документы/soloviovmax.github.io/angular-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
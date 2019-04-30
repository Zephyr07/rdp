var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { InformationsPersonnellePage } from '../informations-personnelle/informations-personnelle';
import { AbonnementsPage } from '../abonnements/abonnements';
import { DomicilesPage } from '../domiciles/domiciles';
/**
 * Generated class for the ComptePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ComptePage = /** @class */ (function () {
    function ComptePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ComptePage.prototype.onGoToInfosPerso = function () {
        this.navCtrl.push(InformationsPersonnellePage);
    };
    ComptePage.prototype.onGoToAbonnements = function () {
        this.navCtrl.push(AbonnementsPage);
    };
    ComptePage.prototype.onGoToDomiciles = function () {
        this.navCtrl.push(DomicilesPage);
    };
    ComptePage = __decorate([
        Component({
            selector: 'page-compte',
            templateUrl: 'compte.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], ComptePage);
    return ComptePage;
}());
export { ComptePage };
//# sourceMappingURL=compte.js.map
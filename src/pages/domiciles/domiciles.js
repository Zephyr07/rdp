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
import { ModalController } from 'ionic-angular';
import { AjoutDomicilePage } from '../ajout-domicile/ajout-domicile';
/**
 * Generated class for the DomicilesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DomicilesPage = /** @class */ (function () {
    function DomicilesPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
    }
    DomicilesPage.prototype.openModal = function () {
        var modalPage = this.modalCtrl.create('ModalPage');
        modalPage.present();
    };
    DomicilesPage.prototype.onGoToEditDomicile = function () {
        this.navCtrl.push(AjoutDomicilePage);
    };
    DomicilesPage = __decorate([
        Component({
            selector: 'page-domiciles',
            templateUrl: 'domiciles.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, ModalController])
    ], DomicilesPage);
    return DomicilesPage;
}());
export { DomicilesPage };
//# sourceMappingURL=domiciles.js.map
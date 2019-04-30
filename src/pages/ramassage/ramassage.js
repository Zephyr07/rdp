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
import { ConfirmationRamassagePage } from '../confirmation-ramassage/confirmation-ramassage';
import { ToastController } from 'ionic-angular';
/**
 * Generated class for the RamassagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RamassagePage = /** @class */ (function () {
    function RamassagePage(navCtrl, navParams, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
    }
    RamassagePage.prototype.onGoToConfirmationRamasage = function () {
        this.navCtrl.push(ConfirmationRamassagePage);
    };
    RamassagePage.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: 'User was added successfully',
            duration: 3000,
            position: 'top'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    RamassagePage = __decorate([
        Component({
            selector: 'page-ramassage',
            templateUrl: 'ramassage.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, ToastController])
    ], RamassagePage);
    return RamassagePage;
}());
export { RamassagePage };
//# sourceMappingURL=ramassage.js.map
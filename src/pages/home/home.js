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
import { NavController } from 'ionic-angular';
import { RamassagePage } from '../ramassage/ramassage';
import { InfosPage } from '../infos/infos';
import { ServicesPage } from '../services/services';
import { ComptePage } from '../compte/compte';
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.onGoToRamasage = function () {
        /*let options: NativeTransitionOptions = {
          direction: 'up',
          duration: 500,
          slowdownfactor: 3,
          slidePixels: 20,
          iosdelay: 100,
          androiddelay: 150,
          fixedPixelsTop: 0,
          fixedPixelsBottom: 60
        }
    
        this.nativePageTransitions.slide(options);
    
        this.navCtrl.setRoot('RamassagePage');*/
        this.navCtrl.push(RamassagePage);
    };
    HomePage.prototype.onGoToInfos = function () {
        this.navCtrl.push(InfosPage);
    };
    HomePage.prototype.onGoToService = function () {
        this.navCtrl.push(ServicesPage);
    };
    HomePage.prototype.onGoToCompte = function () {
        this.navCtrl.push(ComptePage);
    };
    HomePage = __decorate([
        Component({
            selector: 'page-home',
            templateUrl: 'home.html'
        }),
        __metadata("design:paramtypes", [NavController])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.js.map
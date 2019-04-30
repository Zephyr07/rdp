import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RamassagePage } from '../ramassage/ramassage';
import { InfosPage } from '../infos/infos';
import { ServicesPage } from '../services/services';
import { ComptePage } from '../compte/compte';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  onGoToRamasage(){
  	this.navCtrl.push(RamassagePage);
  }

  onGoToInfos(){
    this.navCtrl.push(InfosPage);
  }

  onGoToService(){
    this.navCtrl.push(ServicesPage);
  }

  onGoToCompte(){
    this.navCtrl.push(ComptePage);
  }


}

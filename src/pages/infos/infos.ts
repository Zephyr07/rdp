import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MentionsLegalesPage } from '../mentions-legales/mentions-legales';
import { ProposPage } from '../propos/propos';
import { SuggestionPage } from '../suggestion/suggestion';

/**
 * Generated class for the InfosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-infos',
  templateUrl: 'infos.html',
})
export class InfosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onGoToMentions(){
  	this.navCtrl.push(MentionsLegalesPage);
  }

  onGoToPropos(){
  	this.navCtrl.push(ProposPage);
  }

  onGoToSuggestion(){
  	this.navCtrl.push(SuggestionPage);
  }

}

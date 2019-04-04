import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RamassagePage } from '../pages/ramassage/ramassage';
import { ConfirmationRamassagePage } from '../pages/confirmation-ramassage/confirmation-ramassage';
import { InfosPage } from '../pages/infos/infos';
import { MentionsLegalesPage } from '../pages/mentions-legales/mentions-legales';
import { ProposPage } from '../pages/propos/propos';
import { SuggestionPage } from '../pages/suggestion/suggestion';
import { ServicesPage } from '../pages/services/services';
import { ChoixDomicilePage } from '../pages/choix-domicile/choix-domicile';
import { ComptePage } from '../pages/compte/compte';
import { InformationsPersonnellePage } from '../pages/informations-personnelle/informations-personnelle';
import { AbonnementsPage } from '../pages/abonnements/abonnements';
import { ReabonnementPage } from '../pages/reabonnement/reabonnement';
import { DomicilesPage } from '../pages/domiciles/domiciles';
import { AjoutDomicilePage } from '../pages/ajout-domicile/ajout-domicile';
import { EditInfosPage } from '../pages/edit-infos/edit-infos';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RamassagePage,
    ConfirmationRamassagePage,
    InfosPage,
    MentionsLegalesPage,
    ProposPage,
    SuggestionPage,
    ServicesPage,
    ChoixDomicilePage,
    ComptePage,
    InformationsPersonnellePage,
    AbonnementsPage,
    ReabonnementPage,
    DomicilesPage,
    AjoutDomicilePage,
    EditInfosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RamassagePage,
    ConfirmationRamassagePage,
    InfosPage,
    MentionsLegalesPage,
    ProposPage,
    SuggestionPage,
    ServicesPage,
    ChoixDomicilePage,
    ComptePage,
    InformationsPersonnellePage,
    AbonnementsPage,
    ReabonnementPage,
    DomicilesPage,
    AjoutDomicilePage,
    EditInfosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

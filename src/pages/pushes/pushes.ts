import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { Constants } from '../../utils/constants';

@Component({
  selector: 'page-pushes',
  template: `
  <ion-header>
    <ion-toolbar>
      <ion-title>潽柿</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content class="card-background-page">
    <ion-card>
      <div class="card-title">GitHub</div>
      <div class="card-subtitle">41 messages / 2 repositories</div>
    </ion-card>
    <ion-card class="button-card" (click)="addPush()">
      <div class="card-icon">
        <ion-icon ios="md-add" md="md-add"></ion-icon>
      </div>
    </ion-card>
  </ion-content>
  `
})
export class PushesPage {

  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController) {

  }

  addPush() {
    let modal = this.modalCtrl.create(Constants.PAGE._COLLECTION_PAGE);
    modal.onDidDismiss((data)=>{
    });
    modal.present();
  }
}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  template: `<ion-content class="card-background-page">
    <ion-card>
      <div class="card-title">GitHub</div>
      <div class="card-subtitle">41 messages / 2 repositories</div>
    </ion-card>
  </ion-content>`
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

}

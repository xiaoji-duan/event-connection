import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  template: `<ion-content>
  <ion-grid>
    <ion-row>
      <ion-card>
        <img src="assets/imgs/github.jpg" />
        <div class="card-title">GitHub</div>
        <div class="card-subtitle">41 messages / 2 repositories</div>
      </ion-card>
    </ion-row>
  </ion-grid>
  </ion-content>`
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

}

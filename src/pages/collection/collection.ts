import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

@Component({
  selector: 'page-collection',
  template: `
  <ion-content>
    <ion-grid>
      <ion-row>
        <ion-grid>
          <ion-row align-items-center justify-content-center class="full-width fir-color">
            <img src="assets/imgs/fir.im/firim-logo.png" class="fir-logo">
            <img src="assets/imgs/fir.im/plane.svg" class="fir-plane">
            <div class="rorate-proreller">
              <img src="assets/imgs/fir.im/propeller.svg" class="fir-propeller">
            </div>
            <div class="firim-help">
            <button ion-button color="dark" class="border" clear round small (click)="help()">设置帮助</button>
            </div>
          </ion-row>
          <ion-row align-items-center justify-content-center class="full-width github-color">
            <ion-icon ios="logo-github" md="logo-github" class="github-logo"></ion-icon>
            <div class="github-help">
            <button ion-button color="dark" class="border" clear round small (click)="help()">设置帮助</button>
            </div>
          </ion-row>
        </ion-grid>
      </ion-row>
    </ion-grid>
  </ion-content>
  `
})
export class CollectionPage {

  constructor(public navCtrl: NavController) {

  }

}

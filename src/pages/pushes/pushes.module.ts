import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PushesPage } from "./pushes";

@NgModule({
  declarations: [
    PushesPage,
  ],
  imports: [
    IonicPageModule.forChild(PushesPage),
  ],
  providers: [],
})
export class PushesPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CollectionPage } from "./collection";

@NgModule({
  declarations: [
    CollectionPage,
  ],
  imports: [
    IonicPageModule.forChild(CollectionPage),
  ],
  providers: [],
})
export class CollectionPageModule {}

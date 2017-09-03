import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BuyPage } from './buy';
import { BuyResultsPage } from '../buy-results/buy-results';

@NgModule({
  declarations: [
    BuyPage,
    BuyResultsPage
  ],
  imports: [
    IonicPageModule.forChild(BuyPage),
  ],
})
export class BuyPageModule {
}

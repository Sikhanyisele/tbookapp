import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {BuyPage,SellPage} from '../'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

   goToBuyPage() {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.push(BuyPage);
  }
 goToSellPage() {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.push(SellPage);
  }
}

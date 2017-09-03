import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BookDetailPage } from '../book-detail/book-detail'


@Component({
  selector: 'page-buy-results',
  templateUrl: 'buy-results.html',
})
export class BuyResultsPage {
  searchQuery: string = '';
  books: string[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuyResultsPage');
  }
 goToBokDetailsPage(){
    this.navCtrl.push(BookDetailPage);
  }
    initializeItems() {
    this.books = [
      'Amsterdam',
      'Bogota',
      'data',
      'good'
    ];
  }

  getBooks(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.books = this.books.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}

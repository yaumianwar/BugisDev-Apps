import {Page, NavController} from 'ionic-angular';
import {OrderAPI} from '../services/OrderAPI';

/*
  Generated class for the AddOrderPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/add-order/add-order.html',
  providers:[OrderAPI]
})
export class AddOrderPage {
  static get parameters() {
    return [[NavController], [OrderAPI]];
  }

  constructor(nav, api) {
    this.nav = nav;
    this.order = {};
    this.api = api;
  }

  addOrder(){
    this.api.addOrder(this.order)
    .subscribe(data => {
      this.orders = data.data;
    }, error => {
      console.log(JSON.stringify(error.json()))
    })
  }
}

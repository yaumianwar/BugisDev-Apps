import {Page, NavController} from 'ionic-angular';

/*
  Generated class for the UpdateOrderPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/update-order/update-order.html',
})
export class UpdateOrderPage {
  static get parameters() {
    return [[NavController]];
  }

  constructor(nav) {
    this.nav = nav;
  }
}

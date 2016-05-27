import {Page, NavController} from 'ionic-angular';

/*
  Generated class for the DetailOrderPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/detail-order/detail-order.html',
})
export class DetailOrderPage {
  static get parameters() {
    return [[NavController]];
  }

  constructor(nav) {
    this.nav = nav;
  }
}

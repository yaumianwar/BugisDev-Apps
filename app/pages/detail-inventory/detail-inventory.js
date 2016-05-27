import {Page, NavController} from 'ionic-angular';

/*
  Generated class for the DetailInventoryPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/detail-inventory/detail-inventory.html',
})
export class DetailInventoryPage {
  static get parameters() {
    return [[NavController]];
  }

  constructor(nav) {
    this.nav = nav;
  }
}

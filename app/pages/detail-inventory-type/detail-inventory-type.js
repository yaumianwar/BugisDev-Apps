import {Page, NavController} from 'ionic-angular';

/*
  Generated class for the DetailInventoryTypePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/detail-inventory-type/detail-inventory-type.html',
})
export class DetailInventoryTypePage {
  static get parameters() {
    return [[NavController]];
  }

  constructor(nav) {
    this.nav = nav;
  }
}

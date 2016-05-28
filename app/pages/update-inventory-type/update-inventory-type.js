import {Page, NavController} from 'ionic-angular';

/*
  Generated class for the UpdateInventoryTypePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/update-inventory-type/update-inventory-type.html',
})
export class UpdateInventoryTypePage {
  static get parameters() {
    return [[NavController]];
  }

  constructor(nav) {
    this.nav = nav;
  }
}

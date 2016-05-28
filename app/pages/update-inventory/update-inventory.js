import {Page, NavController} from 'ionic-angular';

/*
  Generated class for the UpdateInventoryPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/update-inventory/update-inventory.html',
})
export class UpdateInventoryPage {
  static get parameters() {
    return [[NavController]];
  }

  constructor(nav) {
    this.nav = nav;
  }
}

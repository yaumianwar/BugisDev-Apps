import {Page, NavController} from 'ionic-angular';
import {InventoryHeaderAPI} from '../services/InventoryHeaderAPI';

/*
  Generated class for the AddInventoryTypePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/add-inventory-type/add-inventory-type.html',
  providers: [InventoryHeaderAPI]
})
export class AddInventoryTypePage {
  static get parameters() {
    return [[NavController], [InventoryHeaderAPI]];
  }

  constructor(nav, api) {
    this.nav = nav;
    this.api = api;
    this.inventoryHeader = {};
  }

  addInventoryHeader(){
    this.api.addInventoryHeader(this.inventoryHeader)
    .subscribe(data => {
      this.inventoryHeaders = data.data;
    }, error => {
      console.log(JSON.stringify(error.json()))
    })
  }
}

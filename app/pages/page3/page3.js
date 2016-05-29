import {Page, NavController, ViewController} from 'ionic-angular';
import {AddInventoryTypePage} from '../add-inventory-type/add-inventory-type';
import {ListInventoryPage} from '../list-inventory/list-inventory';
import {InventoryHeaderAPI} from '../services/InventoryHeaderAPI';

@Page({
  templateUrl: 'build/pages/page3/page3.html',
  providers: [InventoryHeaderAPI]
})
export class Page3 {
  static get parameters() {
    return [[NavController], [ViewController], [InventoryHeaderAPI]];
  }
  constructor(nav, view, api) {
    this.nav = nav;
    this.view = view;
    this.api = api;
    this.getInventoryHeaders();

  }


  getInventoryHeaders() {
        this.api.getInventoryHeaders()
        .subscribe(data => {
            this.inventories = data.data;
        }, error => {
            console.log(JSON.stringify(error.json()));
        });
    }

    goToAddInventoryType(){
      this.nav.push(AddInventoryTypePage);
    }



  goToListInventory(){
    this.nav.push(ListInventoryPage);
  }
}

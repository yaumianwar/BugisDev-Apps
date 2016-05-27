import {Page, NavController, ViewController} from 'ionic-angular';
import {AddInventory} from '../add-inventory/add-inventory';


@Page({
  templateUrl: 'build/pages/page3/page3.html'
})
export class Page3 {
  static get parameters() {
    return [[NavController], [ViewController]];
  }
  constructor(nav, view) {
    this.nav = nav;
    this.view = view;
    this.getInventory();

  }

  goToAddInventory(){
    this.nav.push(AddInventory);
  }

  getInventory(){
    this.inventories=[
    {name:"test", code:"NY12", quantity:"4", price:"2000"},
    {name:"test", code:"NY43", quantity:"7", price:"1000"},
    {name:"test", code:"NY16", quantity:"2", price:"2300"}
    ]
  }
}

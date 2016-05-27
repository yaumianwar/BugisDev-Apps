import {Page, NavController, ViewController} from 'ionic-angular';
import {AddOrder} from '../add-order/add-order';


@Page({
  templateUrl: 'build/pages/page2/page2.html'
})
export class Page2 {
    static get parameters() {
    return [[NavController], [ViewController]];
  }
  constructor(nav, view) {
    this.nav = nav;
    this.view = view;
    this.getOrder();

  }

  goToAddOrder(){
    this.nav.push(AddOrder);
  }

  getOrder(){
    this.orders=[
    {date:"2016/09/02", code:"NY12", quantity:"4", amount:"45000"},
    {date:"2016/09/02", code:"NY43", quantity:"7", amount:"36000"},
    {date:"2016/01/05", code:"NY16", quantity:"2", amount:"100000"}
    ]
  }
}

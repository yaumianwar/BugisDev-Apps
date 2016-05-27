import {Page, NavController, ViewController} from 'ionic-angular';
import {AddSelling} from '../add-selling/add-selling';


@Page({
  templateUrl: 'build/pages/page1/page1.html'
})
export class Page1 {
    static get parameters() {
    return [[NavController], [ViewController]];
  }
  constructor(nav, view) {
    this.nav = nav;
    this.view = view;
    this.getSelling();

  }

  goToAddSelling(){
    this.nav.push(AddSelling);
  }

  getSelling(){
    this.sellings=[
    {date:"2016/09/02", code:"NY12", quantity:"4", amount:"45000"},
    {date:"2016/09/02", code:"NY43", quantity:"7", amount:"36000"},
    {date:"2016/01/05", code:"NY16", quantity:"2", amount:"100000"}
    ]
  }
}

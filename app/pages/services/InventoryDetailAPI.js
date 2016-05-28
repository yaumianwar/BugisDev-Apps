import { Inject } from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/add/operator/map';

export class InventoryDetailAPI {

    static get parameters(){

        return[ [Http] ];
    }

    constructor(http) {

        this.apiUrl = "http://mypocket.bugisdev.com/api";
        this.http = http;
    }

    getInventoryDeatils() {

        return this.http.get(this.apiUrl + "/inventory/detail")
            .map(res => res.json());
    }

    getInventoryDetail(ID) {

        return this.http.get(this.apiUrl + "/inventory/detail" + ID)
            .map(res => res.json());
    }

    addInventoryDetail(data) {

        data = JSON.stringify({
            InventoryHeaderID: data.InventoryHeaderID,
            Name: data.Name,
            Code: data.Code,
            Description: data.Description,
            Price: data.Price,
            Quantity: data.Quantity
        })

        return this.http.post(this.apiUrl + "/inventory/detail", data)
            .map(res => res.json());
    }
}

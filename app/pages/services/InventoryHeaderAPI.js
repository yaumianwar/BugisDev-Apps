import {Inject} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

export class InventoryHeaderAPI {

    static get parameters(){

        return[ [Http] ];
    }

    constructor(http) {

        this.apiUrl = "http://mypocket.bugisdev.com/api";
        this.http = http;
    }

    getInventoryHeaders() {

        return this.http.get(this.apiUrl + "/inventory/header")
            .map(res => res.json());
    }

    getInventoryHeader(ID) {

        return this.http.get(this.apiUrl + "/inventory/header" + ID)
            .map(res => res.json());
    }

    addInventoryHeader(data) {

        data = JSON.stringify({
            Name: data.Name,
            Description: data.Description
        })

        return this.http.post(this.apiUrl + "/inventory/header", data)
            .map(res => res.json());
    }

}

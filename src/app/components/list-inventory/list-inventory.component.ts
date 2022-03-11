import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ResponseApi } from 'src/app/models/response-api';
import { InventoryServiceService } from 'src/app/services/inventory-service.service';

@Component({
  selector: 'app-list-inventory',
  templateUrl: './list-inventory.component.html',
  styleUrls: ['./list-inventory.component.css']
})
export class ListInventoryComponent implements OnInit {

  inventory:Product[] = [];

  constructor(private _servive: InventoryServiceService) { }

  ngOnInit(): void {
    this.getDataTable();
  }

  getDataTable() {
    this._servive.getAllInventory((response: any) => {
      this.inventory = response.response as Product[];
    }, this.responseError);
  }

  btnDeleteProduct(id: number) {
    this._servive.deleteProduct(id, (response:any) => {
      this.getDataTable();
    }, this.responseError);
  }

  btnUpdateProduct(id: number) {
    window.location.href = `/form/${id}`;
  }

  responseError(error: ResponseApi) {
    console.log('error: ', error);
    
  }

}

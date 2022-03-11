import { DatePipe } from '@angular/common';
import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
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
  showFilter: boolean = false;

  constructor(private _servive: InventoryServiceService, private _datepipe: DatePipe) { }

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

  btnFilters() {
    this.showFilter = !this.showFilter;
  }

  searchFilter(formFilter: FormGroup) {
    let params = new HttpParams();
    if (formFilter.get('fechaIngreso')?.value) {
      params = params.append('fecha', formFilter.get('fechaIngreso')?.value);
    }
    if (formFilter.get('nombreUsuProducto')?.value) {
      params = params.append('search', formFilter.get('nombreUsuProducto')?.value);
    }
    if (params.has('fecha') || params.has('search')) {
      this._servive.getProductFilter(params, (response: ResponseApi) => {
        this.inventory = response.response as Product[];
      }, null);
    } else {
      this.getDataTable();
    }
  }

}

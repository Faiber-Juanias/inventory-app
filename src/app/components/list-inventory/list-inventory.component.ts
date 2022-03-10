import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
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
    this._servive.getAllInventory().subscribe(inv => this.inventory = inv);
  }

}

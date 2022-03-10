import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { User } from '../models/user';
import { Url } from './url';

@Injectable({
  providedIn: 'root'
})
export class InventoryServiceService {

  constructor(private _http: HttpClient) { }

  //  Product Methods

  /**
   * Obtiene todos los productos del inventario
   * @returns 
   */
  public getAllInventory(): Observable<Product[]> {
    return this._http.get<Product[]>(Url.getUrlAllProducts());
  }

  public async saveProduct(product: Product, manageResponse: any, manageError: any) {
    let headers:HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json')
    return this._http.post(Url.getUrlSaveProduct(), product, { headers }).toPromise()
      .then((response:any) => manageResponse(response))
      .catch(error => manageError(error));
  }

  //  FIN Product Methods


  //  User Methods

  /**
   * Obtiene todos los usuario que existen
   * @returns 
   */
  public getAllUser(): Observable<User[]> {
    return this._http.get<User[]>(Url.getUrlAllUsers());
  }


  //  FIN User Methods

}

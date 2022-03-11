import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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
  public async getAllInventory(manageResponse: any, manageError: any) {
    return this._http.get(Url.getUrlAllProducts()).toPromise()
      .then(response => manageResponse(response))
      .catch(error => manageError(error));
  }

  public async saveProduct(product: Product, manageResponse: any, manageError: any) {
    let headers:HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json')
    return this._http.post(Url.getUrlSaveProduct(), product, { headers }).toPromise()
      .then(response => manageResponse(response))
      .catch(error => manageError(error));
  }

  public async updateProduct(product: Product, manageResponse: any, manageError: any) {
    let headers:HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json')
    return this._http.put(Url.getUrlSaveProduct(), product, { headers }).toPromise()
      .then(response => manageResponse(response))
      .catch(error => manageError(error));
  }

  public async deleteProduct(id:number, manageResponse: any, manageError: any) {
    return this._http.delete(Url.getUrlDeleteProduct()+id).toPromise()
      .then(response => manageResponse(response))
      .catch(error => manageError(error));
  }

  public async getProductById(id:number, manageResponse: any, manageError: any) {
    return this._http.get(Url.getUrlProductById()+id).toPromise()
      .then(response => manageResponse(response))
      .catch(error => manageError(error));
  }

  public async getProductFilter(params: HttpParams, manageResponse: any, manageError: any) {
    return this._http.get(Url.getUrlProductFilter(), { params }).toPromise()
      .then(response => manageResponse(response))
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

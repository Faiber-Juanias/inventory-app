import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from "@angular/router";
import { FormUtil } from 'src/app/form-util/form-send';
import { Product } from 'src/app/models/product';
import { ResponseApi } from 'src/app/models/response-api';
import { User } from 'src/app/models/user';
import { InventoryServiceService } from 'src/app/services/inventory-service.service';

@Component({
  selector: 'app-form-inventory',
  templateUrl: './form-inventory.component.html',
  styleUrls: ['./form-inventory.component.css']
})
export class FormInventoryComponent implements OnInit {

  users: User[] = [];
  formUser: FormGroup = new FormGroup({});
  sendFormSave: boolean = false;
  formUpdate: boolean = false;

  constructor(private _service: InventoryServiceService, private _rute: ActivatedRoute, private _datepipe: DatePipe) { 
    this._rute.params.subscribe(param => {
      if (param['id'] != undefined) {
        this.formUpdate = true;
        this._service.getProductById(param['id'], (response:any) => {
          this.updateFormSave(response.response);
        }, null);
      }
    })
  }

  ngOnInit(): void {
    this.createFormSave();
    this._service.getAllUser().subscribe(u => this.users = u);
  }

  updateFormSave(prod: Product) {

    let id: number = 0;
    let nombre: string = '';
    let cantidad: number = 0;
    let fechaIngreso: any;
    let usuarioRegistro: number = 0;
    let usuarioActualiza: number|null = null;

    if (prod && prod.idProducto) { id = prod.idProducto }
    if (prod && prod.nombreProducto) { nombre = prod.nombreProducto; }
    if (prod && prod.cantidad) { cantidad = prod.cantidad; }
    if (prod && prod.fechaIngreso) { 
      fechaIngreso = this._datepipe.transform(prod.fechaIngreso, 'yyyy-MM-ddTHH:mm:ss');
    }
    if (prod && prod.usuarioRegistro && prod.usuarioRegistro.idUsuario) { usuarioRegistro = prod.usuarioRegistro.idUsuario; }
    if (prod && prod.usuarioActualiza && prod.usuarioActualiza.idUsuario) { usuarioActualiza = prod.usuarioActualiza.idUsuario; }

    this.formUser = new FormGroup({
      idProduct: new FormControl(id),
      nombre: new FormControl(nombre, Validators.required),
      cantidad: new FormControl(cantidad, Validators.required),
      fechaIngreso: new FormControl(fechaIngreso, Validators.required),
      usuarioRegistro: new FormControl(usuarioRegistro, Validators.required),
      usuarioActualiza: new FormControl(usuarioActualiza, Validators.required),
    });
  }

  createFormSave() {
    this.formUser = new FormGroup({
      idProduct: new FormControl(''),
      nombre: new FormControl('', Validators.required),
      cantidad: new FormControl('', Validators.required),
      fechaIngreso: new FormControl('', Validators.required),
      usuarioRegistro: new FormControl('', Validators.required),
      usuarioActualiza: new FormControl(''),
    });
  }

  onSubmit() {
    this.sendFormSave = true;
    if (this.formUser.valid) {
      let producto: Product;
      if (this.formUpdate) {
        producto = FormUtil.castFormUpdateToProduct(this.formUser, this._datepipe);
        this._service.updateProduct(producto, this.responseSave, this.responseError);
      } else {
        producto = FormUtil.castFormSaveToProduct(this.formUser);
        this._service.saveProduct(producto, this.responseSave, this.responseError);
      }
      console.log('request', producto);
    }
  }

  responseSave(response: ResponseApi) {
    window.location.href = "/";
  }

  responseError(error: ResponseApi) {
    console.log('error: ', error);
  }

}

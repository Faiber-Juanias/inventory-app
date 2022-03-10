import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  constructor(private _service: InventoryServiceService) { }

  ngOnInit(): void {
    this.createFormSave();

    this._service.getAllUser().subscribe(u => this.users = u);
  }

  createFormSave() {
    this.formUser = new FormGroup({
      idProduct: new FormControl(''),
      nombre: new FormControl('', Validators.required),
      cantidad: new FormControl('', Validators.required),
      fechaIngreso: new FormControl('', Validators.required),
      usuarioRegistro: new FormControl('', Validators.required),
      usuarioActualiza: new FormControl(''),
      fechaActualiza: new FormControl(''),
    });
  }

  onSubmit() {
    this.sendFormSave = true;
    if (this.formUser.valid) {
      let producto: Product = FormUtil.castFormSaveToProduct(this.formUser);
      this._service.saveProduct(producto, this.responseSave, this.responseError);
    }
  }

  responseSave(response: ResponseApi) {
    console.log('response: ', response.response);
    window.location.href = "/";
  }

  responseError(error: ResponseApi) {
    console.log('error: ', error);
    
  }

}

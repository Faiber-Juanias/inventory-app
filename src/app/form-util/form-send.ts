import { FormGroup } from "@angular/forms";
import { Product } from "../models/product";

export class FormUtil {

    static castFormSaveToProduct(form: FormGroup) {

        let id: number = 0;
        let nombre: string = '';
        let cantidad: number = 0;
        let fechaIngreso: string = '';
        let usuarioRegistro: number = 0;
        let usuarioActualiza: number = 0;
        let fechaActualiza: string = '';

        if (form.get('idProduct')?.value != null) { id = form.get('idProduct')?.value; }
        if (form.get('nombre')?.value != null) { nombre = form.get('nombre')?.value; }
        if (form.get('cantidad')?.value != null) { cantidad = form.get('cantidad')?.value; }
        if (form.get('fechaIngreso')?.value != null) { fechaIngreso = form.get('fechaIngreso')?.value; }
        if (form.get('usuarioRegistro')?.value != null) { usuarioRegistro = form.get('usuarioRegistro')?.value; }
        if (form.get('usuarioActualiza')?.value != null) { usuarioActualiza = form.get('usuarioActualiza')?.value; }
        if (form.get('fechaActualiza')?.value != null) { fechaActualiza = form.get('fechaActualiza')?.value; }

        return <Product> {
            "nombreProducto": nombre,
            "cantidad": cantidad,
            "fechaIngreso": fechaIngreso,
            "usuarioRegistro": {
                "idUsuario": usuarioRegistro
            }
        }

    }

}
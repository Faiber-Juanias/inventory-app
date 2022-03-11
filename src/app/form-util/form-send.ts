import { DatePipe } from "@angular/common";
import { FormGroup } from "@angular/forms";
import { Product } from "../models/product";

export class FormUtil {

    static castFormSaveToProduct(form: FormGroup) {

        let nombre: string = '';
        let cantidad: number = 0;
        let fechaIngreso: string = '';
        let usuarioRegistro: number = 0;

        if (form.get('nombre')?.value != null) { nombre = form.get('nombre')?.value; }
        if (form.get('cantidad')?.value != null) { cantidad = form.get('cantidad')?.value; }
        if (form.get('fechaIngreso')?.value != null) { fechaIngreso = form.get('fechaIngreso')?.value; }
        if (form.get('usuarioRegistro')?.value != null) { usuarioRegistro = form.get('usuarioRegistro')?.value; }

        return <Product> {
            "nombreProducto": nombre,
            "cantidad": cantidad,
            "fechaIngreso": fechaIngreso,
            "usuarioRegistro": {
                "idUsuario": usuarioRegistro
            }
        }

    }

    static castFormUpdateToProduct(form: FormGroup, datepipe: DatePipe) {

        let id: number = 0;
        let nombre: string = '';
        let cantidad: number = 0;
        let fechaIngreso: string = '';
        let usuarioRegistro: number = 0;
        let usuarioActualiza: number = 0;

        if (form.get('idProduct')?.value != null) { id = form.get('idProduct')?.value; }
        if (form.get('nombre')?.value != null) { nombre = form.get('nombre')?.value; }
        if (form.get('cantidad')?.value != null) { cantidad = form.get('cantidad')?.value; }
        if (form.get('fechaIngreso')?.value != null) { fechaIngreso = form.get('fechaIngreso')?.value; }
        if (form.get('usuarioRegistro')?.value != null) { usuarioRegistro = form.get('usuarioRegistro')?.value; }
        if (form.get('usuarioActualiza')?.value != null) { usuarioActualiza = form.get('usuarioActualiza')?.value; }

        return <Product> {
            "idProducto": id,
            "nombreProducto": nombre,
            "cantidad": cantidad,
            "fechaIngreso": fechaIngreso,
            "usuarioRegistro": {
                "idUsuario": usuarioRegistro
            },
            "usuarioActualiza": {
                "idUsuario": usuarioActualiza
            },
            "fechaActualiza": datepipe.transform(new Date(), 'yyyy-MM-ddTHH:mm:ss')
        }

    }

}
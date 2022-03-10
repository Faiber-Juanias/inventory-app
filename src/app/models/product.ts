import { User } from "./user";

export interface Product {
    idProducto: number,
    nombreProducto: string,
    cantidad: number,
    fechaIngreso: string,
    usuarioRegistro: User,
    usuarioActualiza: User,
    fechaActualiza: string
}

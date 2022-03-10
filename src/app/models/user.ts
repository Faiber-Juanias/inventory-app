import { Cargo } from "./cargo";

export interface User {
    idUsuario: number,
    edad: number,
    fechaIngreso: string,
    cargoIdCargo: Cargo,
    nombre: string
}
export interface Cliente {
    id?:               number;
    nombre:            string;
    apellido:          string;
    email:             string;
    cuit:              string;
    telCelular:        string;
    fechaNacimiento :  Date | string;
    domicilio:         string;
}
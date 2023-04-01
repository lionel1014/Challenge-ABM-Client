import { Cliente } from "../interfaces/user.interface";

export const usersMock: Cliente[] = [
    {
      id: 1,
      nombre: 'Juan',
      apellido: 'Pérez',
      email: 'juanperez@example.com',
      cuit: '20-12345678-9',
      telCelular: '1122334455',
      fechaNacimiento: new Date('1990-01-01'),
      domicilio: 'Calle Falsa 123'
    },
    {
      id: 2,
      nombre: 'María',
      apellido: 'González',
      email: 'mariagonzalez@example.com',
      cuit: '20-23456789-0',
      telCelular: '1122334466',
      fechaNacimiento: new Date('1995-05-05'),
      domicilio: 'Avenida Siempreviva 456'
    },
    {
      id: 3,
      nombre: 'Carlos',
      apellido: 'Rodríguez',
      email: 'carlosrodriguez@example.com',
      cuit: '20-34567890-1',
      telCelular: '1122334477',
      fechaNacimiento: new Date('1985-10-10'),
      domicilio: 'Calle 13 789'
    },
    {
      id: 4,
      nombre: 'Laura',
      apellido: 'Gómez',
      email: 'lauragomez@example.com',
      cuit: '20-45678901-2',
      telCelular: '1122334488',
      fechaNacimiento: new Date('1992-03-15'),
      domicilio: 'Boulevard Los Andes 321'
    },
    {
      id: 5,
      nombre: 'Pedro',
      apellido: 'Díaz',
      email: 'pedrodiaz@example.com',
      cuit: '20-56789012-3',
      telCelular: '1122334499',
      fechaNacimiento: new Date('1988-12-25'),
      domicilio: 'Calle San Martín 456'
    }
  ];
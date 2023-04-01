import { Component, OnInit } from '@angular/core';
import { empty } from 'rxjs';
import { Cliente } from '../interfaces/user.interface';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent implements OnInit{

  public isAnUserToEdit : boolean = false;

  public formUser: Cliente = {
    nombre : '',
    apellido: '',
    cuit: '',
    telCelular: '',
    domicilio: '',
    email: '',
    fechaNacimiento : new Date()
  };

  constructor(private userService: UserService ){}

  ngOnInit(): void {
    this.userService.getUserToEdit$().subscribe( user => {
      this.isAnUserToEdit = user?.id ? true : false;
      this.formUser = {...user, fechaNacimiento: new Date(user.fechaNacimiento).toISOString().slice(0,10)};
    })
  }

  sendUser(){

    if((this.formUser.nombre && this.formUser.apellido && this.formUser.cuit && this.formUser.fechaNacimiento ) == (null || '')){
      console.log("falto un campo");
      return
    }
    //preguntar por el id, si es vacio es uno nuevo, si ya tiene es para editar
    console.log(this.formUser.id)
    if(this.formUser.id != undefined && this.isAnUserToEdit ){
      console.log("soy el editar")
      this.userService.updateUser(this.formUser);
    }else{
      console.log("soy el guardar")
      this.userService.saveUser$(this.formUser);
    }

  }

  swithButton(): void{
    this.isAnUserToEdit = false;
    console.log(this.isAnUserToEdit);
    this.formUser = {
      nombre : '',
      apellido: '',
      cuit: '',
      telCelular: '',
      domicilio: '',
      email: '',
      fechaNacimiento : new Date()
    };
  }

}

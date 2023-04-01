import { Injectable } from '@angular/core';
import { Cliente } from '../interfaces/user.interface';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly URL = "https://localhost:7024/api/";

  private users$ = new BehaviorSubject<Cliente[]>([]);
  private userToEdit$ = new BehaviorSubject<Cliente>({
    nombre : '',
    apellido: '',
    cuit: '',
    telCelular: '',
    domicilio: '',
    email: '',
    fechaNacimiento : new Date(),
  });
  
  
  public getUserToEdit$() : Observable<Cliente> {
    return this.userToEdit$.asObservable()
  }
  

  constructor(private http: HttpClient) { }

  public saveUser$ ( userForm : Cliente): void {
    this.addNewUser(userForm)
  }

  public getAllUsers$(): Observable<Cliente[]> {
    return this.getAllUser();
  }

  public deleteUser$(  userRow : Cliente):void {

    if ( userRow.id == undefined){
      console.log("el usuario no tiene id")
      return
    }

    this.deleteUser(userRow.id)
  }

  public setuserToEdit$( user: Cliente ): void {
    this.userToEdit$.next(user);
  }  
  

  private addNewUser( userForm: Cliente ):void {

    this.http.post<Cliente[]>(`${this.URL}Cliente/AddNewCliente`,userForm)
      .subscribe( users => {
        if(users.length > 0){
          const oldUsers = this.users$.getValue().length
          this.users$.next(users)
          const newUsers = this.users$.getValue().length
          if(newUsers > oldUsers)
            console.log("🎉🎉 Se crearon nuevos usuarios" , users)
        }else{
          Error("Error al crear el usuario 😾😾😾")
        }
      })
  }

  private getAllUser():Observable<Cliente[]>{

    const usersBe = this.http.get<Cliente[]>(`${this.URL}Cliente/GetAllClientes`);
    usersBe.subscribe( users => {
      if(users.length > 0){
        this.users$.next(users)
        console.log("🎉🎉 se trajeron los usuarios" , users)
      }else{
        Error("Error en traer los usuarios 😾😾😾")
      }
    })
    
    return this.users$.asObservable();
  }

  public updateUser(userForm: Cliente ):void{

    const usersBe = this.http.put<Cliente[]>(`${this.URL}Cliente/UpdateCliente/${userForm.id}`,userForm);
    usersBe.subscribe( users => {
      if(users.length > 0){
        this.users$.next(users)
        console.log("🎉🎉 USUARIO EDITADO" , users)
      }else{
        Error("ERROR AL EDITAR EDITADO 🍖🍖🍖")
      }
    })
  }

  private deleteUser( idUser: number ):void {

    this.http.delete<Cliente[]>(`${this.URL}Cliente/DeleteCliente/${idUser}`)
    .subscribe( users => {
        const oldUsers = this.users$.getValue().length
        this.users$.next(users)
        const newUsers = this.users$.getValue().length
        if(newUsers < oldUsers){
          console.log("🎉🎉USUARIO BORRADO" , users)
        }else{
          Error("ERROR AL BORRAR 😾😾😾")
        }
      })
  }

  public searchUser(term: string ):Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${this.URL}Cliente/SeachUserByNameOrLastname/${term}`);
  }
}

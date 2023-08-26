import { Component } from '@angular/core';
import { Cliente } from '../shared/interfaces/user.interface';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-seach-user',
  templateUrl: './seach-user.component.html',
  styleUrls: ['./seach-user.component.css']
})
export class SeachUserComponent {
  public term : string = '';
  public users: Cliente[] = [];
  public hasClientFound : boolean = false;
  public errorMessage: string = '';

  constructor(private userService: UserService){}

  seachUser(term: string):void{

    if(term.length <= 3)
      return

    this.userService.searchUser(term).subscribe({
      next: users => { //si no hay error llama aqui
        this.users = users;
        this.hasClientFound = true;
        this.errorMessage = '';
      },
      error: error => {
        console.log(error);
        this.hasClientFound = false;
        this.errorMessage = error.error;
        this.users = [];
      },//cuando se completa, tanto error o no pasa por el complete. es como el try, cath 
      complete: () => console.info('complete papapa')
    });
  }
}

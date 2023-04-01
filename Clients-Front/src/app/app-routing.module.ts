import { NgModule } from '@angular/core';
import { RouterModule , Routes} from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';



const routes: Routes = [
  {
    path:'',
    component: CreateUserComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { FormUserComponent } from './shared/form-user/form-user.component';
import { GetAllUsersComponent } from './get-all-users/get-all-users.component';
import { FormsModule } from '@angular/forms';
import { SeachUserComponent } from './seach-user/seach-user.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CreateUserComponent,
    FormUserComponent,
    GetAllUsersComponent,
    SeachUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

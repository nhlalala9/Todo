import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { AddItemComponent } from './Components/add-item/add-item.component';
import { DeleteComponent } from './Components/delete/delete.component';
import { ViewItemComponent } from './Components/view-item/view-item.component';
import { SearchComponent } from './Components/search/search.component';
import { LogoutComponent } from './Components/logout/logout.component';
import { EditItemComponent } from './Components/edit-item/edit-item.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    AddItemComponent,
    DeleteComponent,
    ViewItemComponent,
    SearchComponent,
    LogoutComponent,
    EditItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

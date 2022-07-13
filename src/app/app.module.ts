import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HeaderComponent } from './components/header/header.component';


import { HomeComponent } from './pages/home/home.component';
import { CenzorComponent } from './pages/cenzor/cenzor.component';
import { UsersListComponent } from './pages/users-list/users-list.component';
import { TaskListComponent } from './pages/task-list/task-list.component';
import { ChildComponent } from './pages/task-list/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CenzorComponent,
    UsersListComponent,
    TaskListComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

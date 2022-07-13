import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './pages/home/home.component';
import { CenzorComponent } from './pages/cenzor/cenzor.component';
import { UsersListComponent } from './pages/users-list/users-list.component';
import { TaskListComponent } from './pages/task-list/task-list.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "cenzor", component: CenzorComponent},
  {path: "users-list", component: UsersListComponent},
  {path: "task-list", component: TaskListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

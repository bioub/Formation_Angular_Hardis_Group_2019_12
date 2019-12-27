import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserDetailsComponent } from './user-details/user-details.component';

// Exercice :
// Importer UserModule dans AppModule (comme BrowserModule)
// !!!! Avant AppRoutingModule

// Créer ici 3 routes
// /users -> UsersComponent
// /users/add -> UserAddComponent
// /users/123 -> UserDetailsComponent

// Ajouter des liens dans la top-bar vers ces 3 pages

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
      {
        path: 'add',
        component: UserAddComponent
      },
      {
        path: ':id',
        component: UserDetailsComponent
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }

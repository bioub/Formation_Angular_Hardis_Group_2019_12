import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { ContactUsComponent } from './core/contact-us/contact-us.component';
import { NotFoundComponent } from './core/not-found/not-found.component';

// les routes ne contiennent pas
// le slash de début
const routes: Routes = [{
  path: '', // url : /
  component: HomeComponent
},
{
  path: 'users',
  loadChildren: () => import('./users/users.module').then((exports) => exports.UsersModule),
},
{
  path: 'contactez-nous', // url /contactez-nous
  component: ContactUsComponent,
}, {
  path: '**', // toutes les urls restantes (non-déclarées)
  component: NotFoundComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

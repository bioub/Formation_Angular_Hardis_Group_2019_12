import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { ContactUsComponent } from './core/contact-us/contact-us.component';


const routes: Routes = [{
  path: '',
  component: HomeComponent
}, {
  path: 'contactez-nous',
  component: ContactUsComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

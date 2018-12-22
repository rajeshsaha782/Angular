import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServerComponent }  from './server/server.component';
import { LayoutComponent } from './Layout/layout/layout.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  {path: '', component: LayoutComponent},
  {path: 'signin', component: SigninComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[ServerComponent];
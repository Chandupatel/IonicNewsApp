import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'logout', loadChildren: './logout/logout.module#LogoutPageModule' },
  { path: 'rateus', loadChildren: './rateus/rateus.module#RateusPageModule' },
  { path: 'savedstory', loadChildren: './savedstory/savedstory.module#SavedstoryPageModule' },
  { path: 'myactivity', loadChildren: './myactivity/myactivity.module#MyactivityPageModule' },
  { path: 'morenews', loadChildren: './morenews/morenews.module#MorenewsPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

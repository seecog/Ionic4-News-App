import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'employee', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'news', loadChildren: './news/news.module#NewsPageModule' },
  { path: 'newsdetail', loadChildren: './newsdetail/newsdetail.module#NewsdetailPageModule' },
  { path: 'employee', loadChildren: './employee/employee.module#EmployeePageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

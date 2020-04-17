import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

import { ListComponent } from "./list/list.component";
import { DetailComponent } from "./detail/detail.component";
import { DoNotShowSecondaryOnRefreshGuard } from "./routerGuard.guard";


const routes: Routes = [
  {path: '', redirectTo: '/list', pathMatch:'full'},
  {path: 'list', component: ListComponent},
  {path: 'detail', component: DetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

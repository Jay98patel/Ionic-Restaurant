import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DishdetailsComponent } from './dishdetails/dishdetails.component';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage
  }
  ,{
    path:':id',component:DishdetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}

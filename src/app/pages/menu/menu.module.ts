import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuPageRoutingModule } from './menu-routing.module';

import { MenuPage } from './menu.page';
import { DishdetailsComponent } from './dishdetails/dishdetails.component';
import { baseURL } from 'src/app/shared/baseurl';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuPageRoutingModule
  ],
  declarations: [MenuPage,DishdetailsComponent],
  providers:[{ provide:'BaseURL',useValue:baseURL}]
})
export class MenuPageModule {}

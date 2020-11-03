import { Component, OnInit,Inject } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { DishService } from 'src/app/providers/dish.service';
import { Dish } from 'src/app/shared/dish';
import { DishdetailsComponent } from './dishdetails/dishdetails.component';
 
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  dishes:Dish[];
  constructor(private _dishservice:DishService,@Inject('BaseURL') public BaseURL) { }

  ngOnInit() {
    this._dishservice.getDishes().subscribe(dishes=>this.dishes=dishes)
  }
 
}

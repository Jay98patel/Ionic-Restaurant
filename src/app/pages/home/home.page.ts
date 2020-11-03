import { Component, OnInit,Inject } from '@angular/core';
import { DishService } from 'src/app/providers/dish.service';
import { LeaderService } from 'src/app/providers/leader.service';
import { PromotionService } from 'src/app/providers/promotion.service';
import { Dish } from 'src/app/shared/dish';
import { Leader } from 'src/app/shared/leader';
import { Promotion } from 'src/app/shared/promotion';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
dish:Dish;
promotion:Promotion;
leader:Leader;

  constructor(private _dishservice:DishService,
    private _promotionservice:PromotionService,
    private _leaderservice:LeaderService,
    @Inject('BaseURL') public BaseURL) { }

  ngOnInit() {
    this._dishservice.getFeaturedDish().subscribe(
      dish=>this.dish=dish
    )
    this._promotionservice.getFeaturedPromotion().subscribe(
      promotion=>this.promotion=promotion
    )
    this._leaderservice.getFeaturedLeader().subscribe(
      leader=>this.leader=leader
    )
  }


}

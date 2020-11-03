import { Component, OnInit ,Inject} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { NavController, NavParams } from '@ionic/angular';
import { switchMap } from 'rxjs/operators';
import { DishService } from 'src/app/providers/dish.service';
import { Dish } from 'src/app/shared/dish';
import { Location } from '@angular/common';
@Component({
  selector: 'app-dishdetails',
  templateUrl: './dishdetails.component.html',
  styleUrls: ['./dishdetails.component.scss'],
})
export class DishdetailsComponent implements OnInit {
  dishs:Dish;
  avgstars:string;
  numcomments:number;
  id:number;
  constructor(private _detailservice:DishService,private router :ActivatedRoute,@Inject('BaseURL') public BaseURL
  ,private location:Location) {
   
  }
  ngOnInit():void {
    // this.id=this.router.snapshot.params.id;
    // this._detailservice.getDish(this.id).pipe().subscribe((dish)=>this.dishs=dish)
    this.router.params
      .pipe(switchMap((params: Params) => {
        return this._detailservice.getDish(params['id']); 
      })).subscribe(dish => { 
        this.dishs = dish;
        this.numcomments = this.dishs.comments.length;
        let total = 0;
        this.dishs.comments.forEach(comment => total += comment.rating );
        this.avgstars = (total/this.numcomments).toFixed(2);
      }
      )}
      goBack(){
        this.location.back();
      }
}


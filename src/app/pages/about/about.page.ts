import { Component, Inject, OnInit } from '@angular/core';
import { LeaderService } from 'src/app/providers/leader.service';
import { Leader } from 'src/app/shared/leader';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  leader:Leader[];
  constructor(private _leaderservice:LeaderService,@Inject('BaseURL') public BaseURL) { }

  ngOnInit() {
    this._leaderservice.getLeaders().subscribe(leader=>this.leader=leader)
  }

}

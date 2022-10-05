import { Component, OnInit } from '@angular/core';
import { SharedService } from './shared/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  providers: [SharedService]
})
export class AppComponent implements OnInit{
  j;
  use : {name:string;stat:string}[]=[];
  ngOnInit(){
    // this.j=this.user.i;
    this.use=this.user.users;
  }
  constructor(private user :SharedService) {
    
    // console.log(this.j);
    console.log(this.use=user.users);
  }
}

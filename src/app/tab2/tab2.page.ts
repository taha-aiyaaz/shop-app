import { SharedService } from './../shared/shared.service';
import { Component, Input, OnInit } from '@angular/core';
import { Tab3Page } from '../tab3/tab3.page';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
// import { Tab1Page } from '../tab1/tab1.page';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})






export class Tab2Page implements OnInit {
  message: string;
  constructor(private router?: Router, private _location?: Location, private shared?: SharedService) { }
  ngOnInit(): void {
  }

  goBack() {
    this._location.back();
  }
  sendData(a,b){
    this.shared.addUser(a,b);
    // this.shared.getdata(a,b);
  }


  fetch_Tab2() {
  let  a:SharedService=new SharedService();
    console.log(a.fetch_Data());
  }

  getMessage() {
    // this.message = this.shared.getMessage();
    console.log(this.shared.users);
    this.shared.setItems();
  }
  initialize(){
    this.shared.initialize();
  }
  

}















  // a;
  // b;
  // students:Tab3Page;
  // a2 : Tab3Page[][][]=
  // [
  //   [
  //     [{id : 2,name : 'mohammad'},{id:3,name:'aiyaaz'}],
  //   ]
  //   ];

  // getdata(id:any ,name:any){
  // this.a=id;
  // this.b=name;

  // this.students={id:this.a,name:this.b}
  // console.log(this.students);

  // this.a2[0][0].push(this.students);
  // console.log(this.a2);
  // };


  
export class bcd {
  a2: abcde[][][][] =
    [
      [
        [
          [{ ids: 4, names: "yfvhb" }]
        ]
      ]
    ]
}

export class abcde {
  ids: number;
  names: string;

}
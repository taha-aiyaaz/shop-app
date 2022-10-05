import { Injectable, AfterViewInit } from '@angular/core';
import { abcde } from '../tab2/tab2.page';
import { bcd } from '../tab2/tab2.page';

@Injectable({
  providedIn: 'root'
})

//just practice
export class SharedService {
  users= [
    {
    name : 'taa' , stat : 'y'
    },
    {
      name : 'ha' , stat : 'n'
    }
];
addUser(name:string,stat:string){
  this.users.push({name,stat});

}
//end of practice

// 
  a2: abcde[][][][] =
  [
    [
      [
        [
         {ids:1,names:'h'} 
        ]
      ]
    ]
  ]

  private  message:string;
  year:number;
  month:number;
  date:number;
  constructor() {
    
   }
  
  setItems(){
    // this.items=item;
    this.a2[0][0][1][0]={ids:3,names:'jkh'}
  }
  setMessage(data)
  {
    this.message=data;
  }
  getMessage(){
    return this.message;
  }
initialize(){
  for (var a=0;a<2;a++){
    for(var b=0;b<12;b++){
      for (var c=0;c<30;c++){
        for(var d=0;d<40;d++){
          this.a2[a][b][c][d]={ids:5,names:"dsds"}
        }
      }
    }
  }
}


  
  students: abcde[] = [];

  obj: bcd = new bcd();
  a1 = {} as abcde;
  i = 0;
  getdata(id: any, name: any) {
    console.log(name, id);
    this.a1.ids = id;
    this.a1.names = name;
    this.students.push(this.a1);
    console.log(this.students);
    this.obj.a2[0][0][0].push(this.students[this.i]);
    console.log(this.obj.a2);
    this.i++;
  };

  fetch_Data(){
    console.log(this.students);
  }
}

import { IonicModule } from '@ionic/angular';
import { NgModule, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { CalendarModule } from 'ion2-calendar';
import { Tab1PageRoutingModule } from './tab1-routing.module';
import { NgCalendarModule  } from 'ionic2-calendar';
import { CalendarComponent } from 'ionic2-calendar';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    CalendarModule,
    NgCalendarModule    
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule implements OnInit {
  
  date: string;
  type: 'string';
  constructor( private cal:CalendarModule) { 
    console.log(cal);
    // onViewTitleChanged(title) {
    //   this.viewTitle = title;
    // }
  }
 
  ngOnInit(): void {
    
  }
}

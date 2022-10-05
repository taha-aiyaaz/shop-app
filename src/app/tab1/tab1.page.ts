import { Tab2Page } from './../tab2/tab2.page';
import { Component, OnInit, ViewChild, AfterViewInit,Input } from '@angular/core';
import { NgCalendarModule } from 'ionic2-calendar';
import { Router } from '@angular/router'; 
import { CalendarComponent } from 'ionic2-calendar';
import { SharedService } from '../shared/shared.service';

 
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements  AfterViewInit,OnInit {
    @Input( ) use:{name:string;stat:string};

  go() {  
    this.router.navigate(['Tab2Page']);  
  }  

  year_To_Fetch;
  date_To_Fetch;
  month_To_Fetch;
  eventSource = [];
  viewTitle: string;
  calendar = {
    mode: 'month',
    currentDate: new Date()
  };
  event = {
    title: '',
    desc: '',
    startTime: null,
    endTime: '',
    allDay: true
  };

  @ViewChild(CalendarComponent) myCal: CalendarComponent;

  constructor(private router: Router,private ss : SharedService) {   }
  ngAfterViewInit() { }
  message  = "yo buddy";
  onTimeSelected = (ev: { selectedTime: Date }) => {
    console.log('Selected time: ' + ev.selectedTime.getDate() + ev.selectedTime.getMonth() + ev.selectedTime.getFullYear());
    this.date_To_Fetch = ev.selectedTime.getDate();
    this.month_To_Fetch = ev.selectedTime.getMonth();
    this.year_To_Fetch = ev.selectedTime.getFullYear();
  };
  fetch() {
  // let  a:SharedService=new SharedService();
  // a.fetch_Data();
  // console.log(this.use);
  console.log(this.ss.users)
    
  }

  add() {
    
  }
  
  ngOnInit(): void {
    // this.sahred.setMessage(this.message);
  }




}

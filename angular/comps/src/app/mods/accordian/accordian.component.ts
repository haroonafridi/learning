import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.css']
})
export class AccordianComponent implements OnInit {

  @Input() items=[] as any;

  openedItemIndex = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(i:number):void {
    if(i===this.openedItemIndex){
        this.openedItemIndex =-1;
    }
    else {
      this.openedItemIndex = i;
    }
      
  }

}

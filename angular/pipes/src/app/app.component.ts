import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  name: string = '';
  date: string = '';
  amount: number = 0;
  height: number = 0;
  miles:number=0;

  cars = [
    {
      make: "Toyota",
      model: "corola",
      yaer: "2020"
    },

    {
      make: "Volkwagen",
      model: "GTI",
      yaer: "2020"
    },

    {
      make: "BMW",
      model: "9i",
      yaer: "2020"
    },

    {
      make: "Audo",
      model: "A2",
      yaer: "2020"
    },
  ]


  onMilesChange(event: any) {
    this.miles = event.target.value;
  }

  onNameChange(event: any) {
    this.name = event.target.value;
  }

  onDateChange(event: any) {
    this.date = event.target.value;
  }

  onAmountChange(event: any) {
    this.amount = parseFloat(event.target.value);
  }

  onHeightChange(event: any) {
    this.height = parseInt(event.target.value);
  }
}

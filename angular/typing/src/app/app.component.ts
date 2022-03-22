import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'typing';
  randomText = lorem.sentence();
  showSuccess: boolean = false;
  enteredText: string = '';
  handleInput(event: any) {
    this.enteredText = event.target.value;
  }

  compare(randomLetter: string, eneteredLetter: string) {
    if (!eneteredLetter) {
      return 'pending';
    }

    return randomLetter === eneteredLetter ? 'correct' : 'incorrect';

  }
}

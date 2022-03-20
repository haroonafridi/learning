import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  length: Number = 0;
  password: string = '';
  isUseLetter: boolean = false;
  isUseNumber: boolean = false;
  isSpecialCharacters: boolean = false;

  onButtonClick() {
    const chars = 'abcdefghijklmnopqrstuvwxyz';
    const nums = '0123456789';
    const symbols = '~!@#$%^&*()_+';
    let pass: string = '';

    if (this.isUseLetter) {
      pass += chars;
    }

    if (this.isUseNumber) {
      pass += nums;
    }

    if (this.isSpecialCharacters) {
      pass += symbols;
    }
    let generatedPassword = '';
    for (let count: number = 0; count < this.length; count++) {
      generatedPassword += pass[Math.floor(Math.random() * pass.length)];
    }

    this.password = generatedPassword;
  }

  useLetter() {
    this.isUseLetter = !this.isUseLetter;
  }

  useNumbers() {
    this.isUseNumber = !this.isUseNumber;
  }

  useSymbols() {
    this.isSpecialCharacters = !this.isSpecialCharacters;
  }

  valueChanged(event: Event) {

    const valueEntered = parseInt((<HTMLInputElement>event.target).value);

    if (!isNaN(valueEntered)) {
      this.length = valueEntered;
    }

  }
  disableButton() {
    return !this.isUseLetter && !this.isUseNumber && !this.isSpecialCharacters;
  }
}

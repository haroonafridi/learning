import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {

  showModel: boolean = false;

  items = [
    { title: 'Why the sky is blue', content: 'Because it is like that' },
    { title: 'What is an orange', content: 'Orange is a fruite' },
    { title: 'What is tiger', content: 'Tiger is an animal' }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.showModel = !this.showModel;
    console.log("Running click event");
  }

}

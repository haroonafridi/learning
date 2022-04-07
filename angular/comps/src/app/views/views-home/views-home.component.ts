import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent implements OnInit {

  stats = [
    { value: 22, label: 'Number of Useres' },
    { value: 900, label: 'Label of Revenue' },
    { value: 50, label: 'Label of Satisfaction Score' }
  ]

  items = [
    { image: '/assets/images/couch.jpeg', title: 'Couch', description: 'Nice Couch' },
    { image: '/assets/images/dresser.jpeg', title: 'Dresser', description: 'Nice Dresser' }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

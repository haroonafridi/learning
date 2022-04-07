import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {
  data = [
    { name: 'James', age: '24', job: 'Designer', employee: 'Yes' },
    { name: 'Rock', age: '30', job: 'Developer', employee: 'No' },
    { name: 'Smith', age: '35', job: 'Commedian', employee: 'No' },
    { name: 'Jimm', age: '50', job: 'Actor', employee: 'Yes' },
    { name: 'Tomm', age: '28', job: 'Surfer', employee: 'Yes' },
    { name: 'Yousuf', age: '29', job: 'Teachere', employee: 'Yes' },
  ];

  headers = [
    { key: 'employee', label: 'Has a job? ' },
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

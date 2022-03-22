import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = [
    {
      "title": "Spring and trees",
      "userName": "@treeLover",
      "imageUrl": "assets/tree.jpeg",
      "content": "Spring is back"
    },
    {
      "title": "Snow mountain",
      "userName": "@mountainLover",
      "imageUrl": "assets/mountain.jpeg",
      "content": "Picture of snow mountains"
    },
    {
      "title": "Lovely biking",
      "userName": "@biker",
      "imageUrl": "assets/biking.jpeg",
      "content": "Great biking expereince"
    },
  ]
}

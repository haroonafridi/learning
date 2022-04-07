import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage = 0;
  images = [
    {
      "title": "At the beach",
      "imageUrl": "https://images.unsplash.com/photo-1509233725247-49e657c54213?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80"
    },
    {
      "title": "Mountains",
      "imageUrl": "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
    },
    {
      "title": "Spring",
      "imageUrl": "https://images.unsplash.com/photo-1523766775147-152d0d6e2adb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3ByaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      "title": "Moon",
      "imageUrl": "https://images.unsplash.com/photo-1570751485906-b0bbe415db74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      "title": "At the beach",
      "imageUrl": "https://images.unsplash.com/photo-1509233725247-49e657c54213?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80"
    },
    {
      "title": "Mountains",
      "imageUrl": "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
    },
    {
      "title": "Spring",
      "imageUrl": "https://images.unsplash.com/photo-1523766775147-152d0d6e2adb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3ByaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      "title": "Moon",
      "imageUrl": "https://images.unsplash.com/photo-1570751485906-b0bbe415db74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      "title": "At the beach",
      "imageUrl": "https://images.unsplash.com/photo-1509233725247-49e657c54213?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80"
    },
    {
      "title": "Mountains",
      "imageUrl": "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
    },
    {
      "title": "Spring",
      "imageUrl": "https://images.unsplash.com/photo-1523766775147-152d0d6e2adb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3ByaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      "title": "Moon",
      "imageUrl": "https://images.unsplash.com/photo-1570751485906-b0bbe415db74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      "title": "At the beach",
      "imageUrl": "https://images.unsplash.com/photo-1509233725247-49e657c54213?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80"
    },
    {
      "title": "Mountains",
      "imageUrl": "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
    },
    {
      "title": "Spring",
      "imageUrl": "https://images.unsplash.com/photo-1523766775147-152d0d6e2adb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3ByaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      "title": "Moon",
      "imageUrl": "https://images.unsplash.com/photo-1570751485906-b0bbe415db74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      "title": "At the beach",
      "imageUrl": "https://images.unsplash.com/photo-1509233725247-49e657c54213?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80"
    },
    {
      "title": "Mountains",
      "imageUrl": "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
    },
    {
      "title": "Spring",
      "imageUrl": "https://images.unsplash.com/photo-1523766775147-152d0d6e2adb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3ByaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      "title": "Moon",
      "imageUrl": "https://images.unsplash.com/photo-1570751485906-b0bbe415db74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      "title": "At the beach",
      "imageUrl": "https://images.unsplash.com/photo-1509233725247-49e657c54213?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80"
    },
    {
      "title": "Mountains",
      "imageUrl": "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
    },
    {
      "title": "Spring",
      "imageUrl": "https://images.unsplash.com/photo-1523766775147-152d0d6e2adb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3ByaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      "title": "Moon",
      "imageUrl": "https://images.unsplash.com/photo-1570751485906-b0bbe415db74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      "title": "At the beach",
      "imageUrl": "https://images.unsplash.com/photo-1509233725247-49e657c54213?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80"
    },
    {
      "title": "Mountains",
      "imageUrl": "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
    },
    {
      "title": "Spring",
      "imageUrl": "https://images.unsplash.com/photo-1523766775147-152d0d6e2adb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3ByaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      "title": "Moon",
      "imageUrl": "https://images.unsplash.com/photo-1570751485906-b0bbe415db74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      "title": "At the beach",
      "imageUrl": "https://images.unsplash.com/photo-1509233725247-49e657c54213?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80"
    },
    {
      "title": "Mountains",
      "imageUrl": "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
    },
    {
      "title": "Spring",
      "imageUrl": "https://images.unsplash.com/photo-1523766775147-152d0d6e2adb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3ByaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      "title": "Moon",
      "imageUrl": "https://images.unsplash.com/photo-1570751485906-b0bbe415db74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      "title": "At the beach",
      "imageUrl": "https://images.unsplash.com/photo-1509233725247-49e657c54213?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80"
    },
    {
      "title": "Mountains",
      "imageUrl": "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
    },
    {
      "title": "Spring",
      "imageUrl": "https://images.unsplash.com/photo-1523766775147-152d0d6e2adb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3ByaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      "title": "Moon",
      "imageUrl": "https://images.unsplash.com/photo-1570751485906-b0bbe415db74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      "title": "At the beach",
      "imageUrl": "https://images.unsplash.com/photo-1509233725247-49e657c54213?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80"
    },
    {
      "title": "Mountains",
      "imageUrl": "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
    },
    {
      "title": "Spring",
      "imageUrl": "https://images.unsplash.com/photo-1523766775147-152d0d6e2adb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3ByaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      "title": "Moon",
      "imageUrl": "https://images.unsplash.com/photo-1570751485906-b0bbe415db74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      "title": "At the beach",
      "imageUrl": "https://images.unsplash.com/photo-1509233725247-49e657c54213?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80"
    },
    {
      "title": "Mountains",
      "imageUrl": "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
    },
    {
      "title": "Spring",
      "imageUrl": "https://images.unsplash.com/photo-1523766775147-152d0d6e2adb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3ByaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      "title": "Moon",
      "imageUrl": "https://images.unsplash.com/photo-1570751485906-b0bbe415db74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      "title": "At the beach",
      "imageUrl": "https://images.unsplash.com/photo-1509233725247-49e657c54213?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80"
    },
    {
      "title": "Mountains",
      "imageUrl": "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
    },
    {
      "title": "Spring",
      "imageUrl": "https://images.unsplash.com/photo-1523766775147-152d0d6e2adb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3ByaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      "title": "Moon",
      "imageUrl": "https://images.unsplash.com/photo-1570751485906-b0bbe415db74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      "title": "At the beach",
      "imageUrl": "https://images.unsplash.com/photo-1509233725247-49e657c54213?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80"
    },
    {
      "title": "Mountains",
      "imageUrl": "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
    },
    {
      "title": "Spring",
      "imageUrl": "https://images.unsplash.com/photo-1523766775147-152d0d6e2adb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3ByaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      "title": "Moon",
      "imageUrl": "https://images.unsplash.com/photo-1570751485906-b0bbe415db74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      "title": "At the beach",
      "imageUrl": "https://images.unsplash.com/photo-1509233725247-49e657c54213?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80"
    },
    {
      "title": "Mountains",
      "imageUrl": "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
    },
    {
      "title": "Spring",
      "imageUrl": "https://images.unsplash.com/photo-1523766775147-152d0d6e2adb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3ByaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      "title": "Moon",
      "imageUrl": "https://images.unsplash.com/photo-1570751485906-b0bbe415db74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      "title": "At the beach",
      "imageUrl": "https://images.unsplash.com/photo-1509233725247-49e657c54213?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80"
    },
    {
      "title": "Mountains",
      "imageUrl": "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
    },
    {
      "title": "Spring",
      "imageUrl": "https://images.unsplash.com/photo-1523766775147-152d0d6e2adb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3ByaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      "title": "Moon",
      "imageUrl": "https://images.unsplash.com/photo-1570751485906-b0bbe415db74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      "title": "At the beach",
      "imageUrl": "https://images.unsplash.com/photo-1509233725247-49e657c54213?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80"
    },
    {
      "title": "Mountains",
      "imageUrl": "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
    },
    {
      "title": "Spring",
      "imageUrl": "https://images.unsplash.com/photo-1523766775147-152d0d6e2adb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3ByaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      "title": "Moon",
      "imageUrl": "https://images.unsplash.com/photo-1570751485906-b0bbe415db74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      "title": "At the beach",
      "imageUrl": "https://images.unsplash.com/photo-1509233725247-49e657c54213?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80"
    },
    {
      "title": "Mountains",
      "imageUrl": "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
    },
    {
      "title": "Spring",
      "imageUrl": "https://images.unsplash.com/photo-1523766775147-152d0d6e2adb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3ByaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      "title": "Moon",
      "imageUrl": "https://images.unsplash.com/photo-1570751485906-b0bbe415db74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      "title": "At the beach",
      "imageUrl": "https://images.unsplash.com/photo-1509233725247-49e657c54213?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80"
    },
    {
      "title": "Mountains",
      "imageUrl": "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
    },
    {
      "title": "Spring",
      "imageUrl": "https://images.unsplash.com/photo-1523766775147-152d0d6e2adb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3ByaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      "title": "Moon",
      "imageUrl": "https://images.unsplash.com/photo-1570751485906-b0bbe415db74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      "title": "At the beach",
      "imageUrl": "https://images.unsplash.com/photo-1509233725247-49e657c54213?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80"
    },
    {
      "title": "Mountains",
      "imageUrl": "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
    },
    {
      "title": "Spring",
      "imageUrl": "https://images.unsplash.com/photo-1523766775147-152d0d6e2adb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3ByaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      "title": "Moon",
      "imageUrl": "https://images.unsplash.com/photo-1570751485906-b0bbe415db74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      "title": "At the beach",
      "imageUrl": "https://images.unsplash.com/photo-1509233725247-49e657c54213?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80"
    },
    {
      "title": "Mountains",
      "imageUrl": "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
    },
    {
      "title": "Spring",
      "imageUrl": "https://images.unsplash.com/photo-1523766775147-152d0d6e2adb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3ByaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      "title": "Moon",
      "imageUrl": "https://images.unsplash.com/photo-1570751485906-b0bbe415db74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
  ]

  checkWindowIndex(index:number) {
    return Math.abs(this.currentPage - index) < 5;
  }
}

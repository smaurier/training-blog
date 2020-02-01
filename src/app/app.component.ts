import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'training-blog';

  posts = [
    {
      title: 'Mon premier post',
      content: ' Text 1 '
    },
    {
      title: 'Mon second post',
      content: ' Text 2 '
    },
    {
      title: 'Un autre post',
      content: ' Text 3 '
    }
  ];
}



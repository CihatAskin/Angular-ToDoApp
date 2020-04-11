import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = 'Cihat';
  items= [
    { description: 'Yazılım', action: 'No' },
    { description: 'Kahvaltı', action: 'No' },
    { description: 'Spor', action: 'No' },
    { description: 'İngilizce', action: 'No' },
  ];
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 public listItems: Array<string> = ["X-Small", "Small", "Medium", "Large", "X-Large", "2X-Large"];
}


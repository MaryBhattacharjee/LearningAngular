import { Component, OnInit } from '@angular/core';

import { DropDownsModule } from '@progress/kendo-angular-dropdowns';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  public listCities: Array<{ value: number, text: string }>;
  public listLanguages: Array<{ value: number, text: string }>;

  constructor() { }

  ngOnInit() {
    this.listCities = [{ value: 1, text: 'Hyderabad' },
    { value: 2, text: 'Chennai' }, { value: 3, text: 'Delhi' }, { value: 1, text: 'Mumbai' }];
    this.listLanguages = [{ value: 1, text: 'Hindi' },
    { value: 2, text: 'Telugu' }, { value: 3, text: 'Tamil' }, { value: 1, text: 'Marathi' }];
  }

}

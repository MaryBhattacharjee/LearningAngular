import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';


import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { NavBarComponent } from './app-header/nav-bar/nav-bar.component';
import { AppFooterComponent } from './app-footer/app-footer.component';


@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    NavBarComponent,
    AppFooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DropDownsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

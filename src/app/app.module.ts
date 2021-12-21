import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstChildComponent } from './components/first-child/first-child.component';
import { ParentComponent } from './components/parent/parent.component';
import { SecondChildComponent } from './components/second-child/second-child.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.modules';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    FirstChildComponent,
    SecondChildComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

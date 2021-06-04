import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChildItemsPipe, MasterItemsPipe } from './app.pipes';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, MasterItemsPipe, ChildItemsPipe],
  bootstrap: [AppComponent]
})
export class AppModule {}

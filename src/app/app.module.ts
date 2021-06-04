import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AppComponent } from './app.component';
import {
  ChildItemsPipe,
  MasterItemsPipe,
  ReduceItemsToIdsPipe
} from './app.pipes';

@NgModule({
  imports: [BrowserModule, FormsModule, DragDropModule],
  declarations: [
    AppComponent,
    MasterItemsPipe,
    ChildItemsPipe,
    ReduceItemsToIdsPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

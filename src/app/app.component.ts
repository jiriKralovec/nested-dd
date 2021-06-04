import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, VERSION } from '@angular/core';
import { Item } from './app.models';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items: Item[] = [
    { title: 'Item 1', id: 1, parentId: null },
    { title: 'Item 1.1', id: 2, parentId: 1 },
    { title: 'Item 1.1.1', id: 3, parentId: 2 },
    { title: 'Item 1.1.2', id: 4, parentId: 2 },
    { title: 'Item 2', id: 5, parentId: null },
    { title: 'Item 2.0', id: 8, parentId: 5 },
    { title: 'Item 2.1', id: 6, parentId: 5 },
    { title: 'Item 2.1.1', id: 7, parentId: 6 }
  ];
  name = 'Angular ' + VERSION.major;
  onDragAndDrop(event: CdkDragDrop<Item[]>) {
    const newParentId = event.container.id;
    this.items = this.items.map(i => {
      if(i.id === (event.item.data as Item).id) {
        i.parentId = newParentId == '-1' ? null : parseInt(newParentId, 10);
      }
      return i;
    });
    console.log(event);
  }
}

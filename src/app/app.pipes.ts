import { Pipe, PipeTransform } from '@angular/core';
import { Item } from './app.models';

@Pipe({
  name: 'reduceItemsToIds'
})
export class ReduceItemsToIdsPipe implements PipeTransform {
  transform(items: Item[]): string[] {
    return items.map(i => i.id.toString());
  }
}

@Pipe({
  name: 'masterItems'
})
export class MasterItemsPipe implements PipeTransform {
  transform(items: Item[]): Item[] {
    return !items ? null : items.filter(i => i.parentId === null);
  }
}

@Pipe({
  name: 'childItems'
})
export class ChildItemsPipe implements PipeTransform {
  transform(items: Item[], master: Item): Item[] {
    return !items || !master
      ? null
      : items.filter(i => i.parentId === master.id);
  }
}

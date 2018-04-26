import { Component } from '@angular/core';

import { LayoutOrientation, ToDo } from './../../types';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.sass' ]
})
export class HomeComponent {

  readonly LAYOUT_ORIENTATION = LayoutOrientation;

  layoutOrientation: (LayoutOrientation.HORIZONTAL | LayoutOrientation.VERTICAL) = LayoutOrientation.HORIZONTAL;

  todos: ToDo[] = [];

  ngOnInit() {
    this.todos = [
      { id: 1, text: 'Play soccer with friends', selected: true, deleted: false },
      { id: 2, text: 'Open Photoshop', selected: false, deleted: false },
      { id: 3, text: 'Finish client work', selected: true, deleted: false },
      { id: 4, text: 'Give away some PSDs', selected: false, deleted: true },
      { id: 5, text: 'Post a new shot to Dribble', selected: false, deleted: false }
    ];
  }

  setLayout(newLayoutOrientation: (LayoutOrientation.HORIZONTAL | LayoutOrientation.VERTICAL)): void {
    this.layoutOrientation = newLayoutOrientation;
  }

  todoListLayoutModifierClass(): string {
    return 'm-' + this.layoutOrientation.toString().toLowerCase();
  }

  todoListMarginModifierClass(): string {
    return this.layoutOrientation === LayoutOrientation.HORIZONTAL ? 'm-margin-bottom' : 'm-margin-right';
  }

  activeTodos(): ToDo[] {
    return this.todos.filter( todo => todo.deleted === false );
  }

  deletedTodos(): ToDo[] {
    return this.todos.filter( todo => todo.deleted === true );
  }

}

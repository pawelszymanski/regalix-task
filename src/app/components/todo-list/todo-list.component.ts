import { Component } from '@angular/core';

import { LayoutOrientation, ToDo } from './../../types';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.sass' ]
})
export class TodoListComponent {

  LAYOUT_ORIENTATION = LayoutOrientation;

  layoutOrientation: (LayoutOrientation.HORIZONTAL | LayoutOrientation.VERTICAL) = LayoutOrientation.HORIZONTAL;

  todos: ToDo[] = [];

  ngOnInit() {
    this.todos = [
      { text: 'Play soccer with friends', selected: true, deleted: false },
      { text: 'Open Photoshop', selected: false, deleted: false },
      { text: 'Finish client work', selected: true, deleted: false },
      { text: 'Give away some PSDs', selected: false, deleted: true },
      { text: 'Post a new shot to Dribble', selected: false, deleted: false }
    ];
  }

  setLayout(newLayoutOrientation: (LayoutOrientation.HORIZONTAL | LayoutOrientation.VERTICAL)): void {
    this.layoutOrientation = newLayoutOrientation;
  }

  todoListModifierClass(): string {
    return 'm-' + this.layoutOrientation.toString().toLowerCase();
  }

  activeTodos(): ToDo[] {
    return this.todos.filter( todo => todo.deleted === false );
  }

  deletedTodos(): ToDo[] {
    return this.todos.filter( todo => todo.deleted === true );
  }

}

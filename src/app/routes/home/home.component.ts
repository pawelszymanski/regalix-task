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
      { id: 1, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', selected: true, deleted: false },
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

  onAddTodo(newTodo: ToDo): void {
    this.todos.push(newTodo);
  }

  onSoftDeleteTodos(idsOfTodosToBeRemoved: number[]): void {
    this.todos.forEach( todo => {
      if (idsOfTodosToBeRemoved.indexOf(todo.id) > -1) {
        todo.selected = false;
        todo.deleted = true;
      }
    });
  }

  onHardDeleteTodos(idsOfTodosToBeRemoved: number[]): void {
    this.todos = this.todos.filter( todo => idsOfTodosToBeRemoved.indexOf(todo.id) === -1 );
  }

}

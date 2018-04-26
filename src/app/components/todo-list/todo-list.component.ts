import { Component, Input } from '@angular/core';

import { ToDo } from './../../types';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: [ './todo-list.component.sass' ]
})
export class ToDoListComponent {

  @Input() todos: ToDo[] = [];

  isAnyTodoSelected(): boolean {
    return this.todos.filter( todo => todo.selected === true ).length > 0;
  }

  areAllTodoSelected(): boolean {
    return this.todos.filter( todo => !todo.selected === true ).length === 0;
  }

  onToggleAllClick(): void {
    switch (this.areAllTodoSelected()) {
      case true:
        this.todos.forEach( todo => todo.selected = false );
        break;
      case false:
        this.todos.forEach( todo => todo.selected = true );
        break;
    }
  }

  onAddClick(): void {

  }

  onRemoveClick(): void {

  }

  onSettingsClick(): void {

  }

}

import { Component } from '@angular/core';

import { LayoutOrientation, ToDo } from './../../types';
import { ToDoGeneratorService } from './../../services';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.sass' ]
})
export class HomeComponent {

  readonly LAYOUT_ORIENTATION = LayoutOrientation;

  layoutOrientation: (LayoutOrientation.HORIZONTAL | LayoutOrientation.VERTICAL) = LayoutOrientation.HORIZONTAL;

  todos: ToDo[] = [];

  constructor(
    private toDoGeneratorService: ToDoGeneratorService
  ) {}

  setLayout(newLayoutOrientation: (LayoutOrientation.HORIZONTAL | LayoutOrientation.VERTICAL)): void {
    this.layoutOrientation = newLayoutOrientation;
  }

  addRandomTodo(): void {
    this.todos.push(this.toDoGeneratorService.generateTodo());
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
    let todosWithNoChanges = this.todos.filter( todo => idsOfTodosToBeRemoved.indexOf(todo.id) === -1);
    let todosToBeMoved = this.todos.filter( todo => idsOfTodosToBeRemoved.indexOf(todo.id) > -1 );
    todosToBeMoved.forEach( todo => {
      todo.selected = false;
      todo.deleted = true;
      delete todo.isEditModeOn;
    });
    this.todos = todosWithNoChanges.concat(todosToBeMoved);  // Need to make sure deleted items would be moved to the end of the list
  }

  onHardDeleteTodos(idsOfTodosToBeRemoved: number[]): void {
    this.todos = this.todos.filter( todo => idsOfTodosToBeRemoved.indexOf(todo.id) === -1 );
  }

}

import { Component, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';

import { ToDo } from './../../types';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: [ './todo-list.component.sass' ]
})
export class ToDoListComponent implements OnChanges {

  readonly TODOS_PER_PAGE = 5;

  @Input() todos: ToDo[] = [];
  currentPage = 1;

  @Output() addTodo: EventEmitter<ToDo> = new EventEmitter();
  @Output() removeTodos: EventEmitter<number[]> = new EventEmitter();

  ngOnChanges(changes: SimpleChanges) {
    let todosCount = changes.todos.currentValue.length;
    let firstDisplayedTodoEq = ((this.currentPage - 1) * this.TODOS_PER_PAGE) + 1;
    if (firstDisplayedTodoEq > todosCount) { this.currentPage = 1; }
  }

  isAnyTodoSelected(): boolean {
    return !!this.todos['find']( todo => todo.selected === true );
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
    this.addTodo.emit({
      id: new Date().getTime(),
      selected: false,
      deleted: false,
      text: 'New todo...'
    });
  }

  onRemoveClick(): void {
    let selectedTodoIds = this.todos
      .filter( todo => todo.selected === true)
      .map(todo => todo.id);
    this.removeTodos.emit(selectedTodoIds);
  }

  firstDisplayedTodoEq(): number {
    return (this.currentPage - 1) * this.TODOS_PER_PAGE;
  }

  visibleTodos(): ToDo[] {
    let start = this.firstDisplayedTodoEq();
    return this.todos.slice(start, start + this.TODOS_PER_PAGE);
  }

  isPageFirst(): boolean {
    return this.currentPage === 1;
  }

  isPageLast(): boolean {
    let totalPages = Math.ceil(this.todos.length / this.TODOS_PER_PAGE);
    return this.currentPage === totalPages;
  }

  howManyPagesOfTodos(): number {
    return Math.ceil(this.todos.length / this.TODOS_PER_PAGE);
  }

  goPrevPage(): void {
    if (this.isPageFirst()) { return; }
    this.currentPage -= 1;
  }

  goNextPage(): void {
    if (this.isPageLast()) { return; }
    this.currentPage += 1;
  }

  paginationText(): string {
    if (this.todos.length === 0) { return 'No todos to be listed' };
    let currentPageStart = ((this.currentPage - 1) * this.TODOS_PER_PAGE) + 1;
    let currentPageEnd =  ((this.currentPage - 1) * this.TODOS_PER_PAGE) + this.TODOS_PER_PAGE;
    let actualEnd = Math.min(currentPageEnd, this.todos.length);
    return `${currentPageStart} - ${actualEnd} of ${this.todos.length} (page ${this.currentPage} of ${this.howManyPagesOfTodos()})`;
  }

}

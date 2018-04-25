import { Component, Input, Output } from '@angular/core';

import { ToDo } from './../../types';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: [ './todo-list.component.sass' ]
})
export class ToDoListComponent {

  @Input() todos: ToDo[] = [];
  @Input() layoutModifierClasses: string;

}

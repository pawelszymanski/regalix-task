import { Injectable } from '@angular/core';

import { ToDo } from '../types';

@Injectable()
export class ToDoGeneratorService {

  generateTodoId(): number {
    return new Date().getTime();
  }

  generateTodo(): ToDo {
    return {
      id: this.generateTodoId(),
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      selected: false,
      deleted: false
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { TodoListItem } from 'src/app/models';
import { Store, select } from '@ngrx/store';
import { AppState, selectTodoListItems } from 'src/app/reducers';
import { todoItemAdded, todoItemCompleted } from 'src/app/actions/todo.actions';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { TodoEntity } from 'src/app/reducers/todos.reducer';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  items$: Observable<TodoListItem[]>;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.items$ = this.store.pipe(
      select(selectTodoListItems)
    );
  }

  addTodo(itemEl: HTMLInputElement) {
    this.store.dispatch(todoItemAdded({ description: itemEl.value }));
    itemEl.value = '';
    itemEl.focus();
  }

  markComplete(item: TodoEntity) {
    this.store.dispatch(todoItemCompleted({ payload: item }));
  }
}

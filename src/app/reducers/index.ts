import { ActionReducerMap, createSelector } from '@ngrx/store';
import * as fromTodo from './todos.reducer';
import { TodoListItem } from '../models';
export interface AppState {
  todos: fromTodo.TodoState;
}

export const reducer: ActionReducerMap<AppState> = {
  todos: fromTodo.reducer
};


// 1. Feature Selector


// 2. A selector per branch of the state.

const selectTodosBranch = (state: AppState) => state.todos;

// 3. Any helper selectors you might need.
const { selectAll: selectAllTodoEntities, selectTotal: selectTodoItemCount } = fromTodo.adapter.getSelectors(selectTodosBranch);

// 4. What do the components need?
// TodoListItem[]

export const selectTodoListItems = createSelector(
  selectAllTodoEntities,
  todos => todos as TodoListItem[]
);

export const selectNumberOfTodoItems = createSelector(
  selectTodoItemCount,
  c => c
);

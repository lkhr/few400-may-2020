import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, Action, on } from '@ngrx/store';
import * as actions from '../actions/todo.actions';
export interface TodoEntity {
  id: string;
  description: string;
  completed: boolean;
}

export interface TodoState extends EntityState<TodoEntity> {

}

export const adapter = createEntityAdapter<TodoEntity>();

const initialState = adapter.getInitialState();



const reducerFunction = createReducer(
  initialState,
  on(actions.todoItemAdded, (currentState, action) => adapter.addOne(action.payload, currentState)),
  on(actions.todoItemCompleted, (currentState, action) => adapter.updateOne(
    {
      id: action.payload.id,
      changes: {
        completed: true
      }
    }, currentState))
);

export function reducer(state: TodoState = initialState, action: Action) {
  return reducerFunction(state, action);
}

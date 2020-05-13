import { createAction, props } from '@ngrx/store';
import { TodoEntity } from '../reducers/todos.reducer';

let firstId = 0;
// action creator - a function that creates an Action
// an action is an object that has a type:string property
// and any other data that the reducer will need to create a new
// state based on this action.
export const todoItemAdded = createAction(
  '[app todos] todo item added',
  ({ description }: { description: string }) => ({
    payload: {
      id: 'T' + firstId++,
      description,
      completed: false
    } as TodoEntity
  })
);


export const todoItemCompleted = createAction(
  '[app todos] todo item completed',
  props<{ payload: TodoEntity }>()
);

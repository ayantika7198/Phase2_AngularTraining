import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TodoState } from "./todos.state";

export const todosDataState =  createFeatureSelector<TodoState>('todos');

export const getTodos =createSelector(todosDataState,state=>state.todos);
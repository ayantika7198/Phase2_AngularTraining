import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { TodoState } from "./todo.reducer";

export const selectTodos =  (state:AppState)=> state.todos;
export const selectAllTodos:any = createSelector(
  selectTodos,
  (state:TodoState)=>state.todos

)

export const todosDataState =  createFeatureSelector('todos');
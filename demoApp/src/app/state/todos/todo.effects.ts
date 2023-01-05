import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { mergeMap, map, catchError, of } from "rxjs";
import { ToDoService } from "src/app/todo/todo.service";
import { loadTodos, LoadTodoSuccess, LoadTodoFailure } from "./todo.actions";

@Injectable()

export class TodoEffects{

constructor(private actions$:Actions,private todoService:ToDoService){}
//when the loadtodos action is dispatched .,, this effect is run

loadTodos$= createEffect(()=>{
let err1 : string | any;
  return this.actions$
  .pipe(
    ofType(loadTodos),
    //calls the service gettodos
    mergeMap(()=>this.todoService.getTodos()
    //taking the returned value ,returns a new success action which contains the todos
    .pipe(map(todos=>LoadTodoSuccess({todos})),
    catchError(error=>of(LoadTodoFailure({ error })))
    ))
  )



})
}
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadTodos } from '../state/todos/todo.actions';
import { selectAllTodos } from '../state/todos/todo.selectors';
import { Todo } from './todo';
import { ToDoService } from './todo.service';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit{

  public allTodos$:Observable<Todo[]> =this.store.select(selectAllTodos);
  public todo='';
  constructor(private store:Store, todoService: ToDoService){}
  ngOnInit(): void {
    console.log('in init')
    this.store.dispatch(loadTodos());

  }

removeTodo(todo:Todo){}

  onSubmit(todoForm:NgForm){
   console.log(todoForm.value);
   
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  todos:any[]=[];
  todoTitle!:string;
  idForTodo!:number;
  constructor() { }

  ngOnInit(): void {
    this.todoTitle='';
    this.idForTodo=0;
    this.todos=[
      // {
      //   'id':1,
      //   'title':'take a walk',
      //   'completed':false
      // },

      // {
      //   'id':2,
      //   'title':'take a shower',
      //   'completed':false
      // },

      // {
      //   'id':3,
      //   'title':'have dinner',
      //   'completed':false
      // }
    ]
  }

  addTodo(){
    if(this.todoTitle.trim().length===0){
      return;
    }
    this.todos.push(
      {
        'id':this.idForTodo,
        'title':this.todoTitle,
        'completed':false
      }
    )
    this.todoTitle='';
    this.idForTodo++;
  }

  deleteTodo(id:number){
    this.todos=this.todos.filter(todo=>todo.id !=id)
  }
  todoLength():number{
    return this.todos.length;
  }
  remainingItems():number{
    return this.todos.filter(todo=> !todo.completed).length;
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  todos = [
    { id: 11, name: 'Task1' },
    { id: 12, name: 'Task2' },
    { id: 13, name: 'Task3' },
    { id: 14, name: 'Task4' },
    { id: 15, name: 'Task5' },
    { id: 16, name: 'Task6' },
    { id: 17, name: 'Task7' },
    { id: 18, name: 'Task8' },
    { id: 19, name: 'Task9' },
    { id: 20, name: 'Task10' }
  ];

  onDelete = (todo) => {
     this.todos = this.todos.filter(task => (task.id !== todo.id));
  }

  onEdit = (todo) => {
    console.log('oNeDIT cALLED IN mAIN aPP====>>>', todo);
  }
}

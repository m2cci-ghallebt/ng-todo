import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModel, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
})
export class TodosComponent {
  todos: string[] = ['aaaa', 'bbbbb'];
  newTodo: string = '';

  addTodo() {
    if (this.newTodo.trim()) {
      this.todos.push(this.newTodo);
      this.newTodo = '';
    }
  }
  removeTodo(index: number) {
    this.todos.splice(index, 1);
  }
}

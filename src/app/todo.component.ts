
import { Component } from '@angular/core'
import { TodoService } from './todo.service'

@Component({
    selector: 'todo',
    templateUrl: './todo.html',
    providers: [TodoService]
})

export class TodoComponent {
    test;
    todos;
    isFavorite;
    
    addTodo(){
        console.log(this.test + "- TODOS")
    }
    
    constructor(todoService: TodoService){
        this.todos = todoService.getTodos();
    
    }
}

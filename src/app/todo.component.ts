
import { Component } from '@angular/core'
import { TodoService } from './todo.service'

@Component({
    selector: 'todo',
    templateUrl: './todo.html',
    providers: [TodoService],
    styles: [
        `
        .todo-list{
            margin-top: 2em;
            list-style-type: none;
            font-weight: bold;
        }
        .delete{
            margin-left: 15em;
            cursor: pointer;
        }
        `
    ]
})

export class TodoComponent {
    newTodo;
    todos;
    ifHover = false;
    public show:number;
    
    addTodo(){
        this.todos.push(this.newTodo);
    }

    hover(hoverState, index){
    
        this.show = index;
        if(hoverState == 'hoverActive'){
            this.show = index;
        } else {
            this.show = null;
        }
    }
    
    constructor(todoService: TodoService){
        this.todos = todoService.getTodos();
    
    }
}

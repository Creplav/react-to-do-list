import React from 'react';
import ReactDOM from 'react-dom';

import ToDo from './ToDo';
import '../css/todo-list.css';

class ToDoList extends React.Component {

    constructor(props){
        super(props);
        this.todos = ['Take out the trash', 'Flip a table', 'Shoot something'];

        this.toDoItems = this.todos.map((todo) =>
            <ToDo value={todo}/>
        );

        this.state = {
            task: '',
            todos: [],
        };
    }

    updateTaskInputValue(evt){
        this.setState({
            task: evt.target.value
        });
    }

    insertTaskIntoList(task){
        this.todos.push(task);
        this.updateToDoItems();
    }

    updateToDoItems(){
        console.log('Updating thing');
        this.toDoItems = this.todos.map((todo) =>
            <ToDo value={todo}/>
        );
        console.log(this.state.todos)
        this.setState({
            todos: this.toDoItems,
        })
    }


    render(){
        return (
            <div className="container">
                <h1>To-Do List</h1>
                <h3>Tasks</h3>
                <ul>{this.state.toDoItems}</ul>
                <div className="input-area">
                    <input
                        type="text"
                        id="taskInput"
                        value={this.state.task}
                        onChange={(evt) => {
                            this.updateTaskInputValue(evt)
                            }}
                        placeholder="New Todo" />

                    <button class="primary"
                        onClick={() => {
                                console.log(this.todos);
                                this.insertTaskIntoList(this.state.task);
                                console.log(this.todos);
                                this.updateToDoItems();
                            }
                        }>
                        &#10010;
                    </button>
                </div>
            </div>
        );
    }
}

export default ToDoList;
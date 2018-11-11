import React from 'react';
import ReactDOM from 'react-dom';

import ToDo from './ToDo';
import '../css/todo-list.css';

class ToDoList extends React.Component {

    constructor(props){
        super(props);
        this.todos = ['Take out the trash', 'Flip a table', 'Shoot something'];

        
        this.state = {
            task: '',
            todos: [],
        };
        
        this.toDoItems = this.todos.map((todo) =>
            <ToDo value={todo}/>
        );
    }

    updateTaskInputValue(evt){
        this.setState({
            task: evt.target.value
        });
    }

    addNewTask(){
        this.insertTaskIntoList(this.state.task)
        this.updateToDoItems();
        this.clearTask();
    }

    insertTaskIntoList(task){
        this.todos.push(task);
    }

    updateToDoItems(){
        this.toDoItems = this.todos.map((todo) =>
            <ToDo value={todo}/>
        );
        this.setState({
            todos: this.toDoItems,
        })
    }

    clearTask(){
        this.setState({
            task: ''
        });
    };


    render(){
        return (
            <div className="container">
                <h1>To-Do List</h1>
                <h3>Tasks</h3>
                <ul>{this.toDoItems}</ul>
                <div className="input-area">
                    <input
                        type="text"
                        id="taskInput"
                        value={this.state.task}
                        onChange={(evt) => {
                            this.updateTaskInputValue(evt)
                            }}
                        placeholder="New Todo" />

                    <button className="primary"
                        onClick={() => {
                                this.addNewTask();
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
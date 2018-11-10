import React from 'react';
import ReactDOM from 'react-dom';

import ToDo from './ToDo';
import '../css/todo-list.css';

class ToDoList extends React.Component {

    constructor(props){
        super(props);
        let todos = ['Take out the trash', 'Flip a table', 'Shoot something'];

        this.toDoItems = todos.map((todo) =>
            <ToDo value={todo}/>
        );
    }


    render(){
        return (
            <div className="container">
                <h1>To-Do List</h1>
                <h3>Tasks</h3>
                <ul>{this.toDoItems}</ul>
            </div>
        );
    }
}

export default ToDoList;
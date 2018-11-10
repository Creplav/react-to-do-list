import React from 'react';
import ReactDOM from 'react-dom';

class ToDoList extends React.Component{
    render(){
        return (
            <div className="container">
                <h1>To-Do List</h1>
                <h3>Tasks</h3>
                <p>2 + 2 = { 2 + 2 }</p>
            </div>
        );
    }
}

export default ToDoList;
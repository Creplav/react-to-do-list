import React from 'react';
import ReactDOM from 'react-dom';

import '../css/todo.css';

class ToDo extends React.Component {
    constructor(props){
        super(props);

        // Temporary
        this.completed = false;
    }

    isCompleted(){
        return this.completed;
    }

    render() {
        return (
            <div className="todo">
                <button className="success">&#x2714;</button>
                <p>{this.props.value}</p>
                <button className="danger">X</button>
            </div>
        )
    }
}

export default ToDo;
import React from 'react';
import ReactDOM from 'react-dom';


class ToDo extends React.Component {
    render() {
        return (
            <div className="todo">
                <button className="success">&#x2714;</button>
                <p>{this.props.value}</p>
                <p>{this.props.id}</p>
                <button className="danger" onClick={this.deleteTodo}>X</button>
            </div>
        )
    }
}

export default ToDo;
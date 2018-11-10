import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ToDoList from '../components/ToDoList';

Enzyme.configure({adapter: new Adapter()});

test('new todo is inserted properly', () => {
    const wrapper = shallow(<ToDoList />);
    const instance = wrapper.instance();
    const taskListLength = instance.todos.length;
    instance.insertTaskIntoList('Hello World');
    expect(wrapper.state('todos')).toHaveLength(taskListLength + 1);
});
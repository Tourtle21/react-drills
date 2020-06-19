import React from 'react';
import Todo from './Todo';

const List = props => {
    const mappedTodos = props.todos.map((item, i) => (<Todo key={i} item={item}/>));
    return (
        <div>
            {mappedTodos}
        </div>
    )
}

export default List
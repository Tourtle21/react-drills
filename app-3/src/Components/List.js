import React from 'react';

function List(props) {
    const mappedArray = props.list.map(item => (<h3>{item}</h3>));
    return (
        <div>
            {mappedArray}
        </div>
    )
}

export default List;
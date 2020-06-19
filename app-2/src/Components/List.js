import React from 'react';


function List(props) {

    const mappedList = props.list.map(item => (<h2>{item}</h2>))

    return (
        <div>
            {mappedList}
        </div>
    )
}

export default List;
import { Fragment } from 'react';
import React from "react";

const listItems = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
];

const FragmentExample = () => {
    return (
        <Fragment>
            <h2>List of Items</h2>
            <ul>
                {listItems.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </Fragment>
    );
}

export default FragmentExample;



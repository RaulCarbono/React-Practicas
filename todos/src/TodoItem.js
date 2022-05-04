import React from "react";

function TodoItem(props){
    return (
        <li className="TodoItem">
            <span className={`Icon Icon-check ${props.complete && 'Icon-check--active'} `}>
                √
            </span>
            <p className={`TodoItem-p ${props.complete && 'TodoItem-p--complete'}`}>
                {props.text}
            </p>
            <span className="Icon Icon-delete">
                X
            </span>
        </li>
    );
}

export {TodoItem}
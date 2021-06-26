import React from 'react'
import { Toditm } from '../myComp/Toditm';
export const Todoslist = (props) => {
    return (
        <div className="container">
            <h3>In the bucket</h3>
            <Toditm todos={props.todos[0]}/>
            
        </div>
    )
} 

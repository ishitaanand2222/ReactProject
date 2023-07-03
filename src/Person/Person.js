import React from "react";
import './Person.css';

const Person = (props) => {
    return (
    <div className="Person" > 
        <p onClick={props.click}>Hi my name is {props.name} and age is {props.age}</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}></input>
    </div>
    );
}


export default Person;
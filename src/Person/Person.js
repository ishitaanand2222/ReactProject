import React from "react";
import Radium from "radium";
import './Person.css';

const Person = (props) => {
    console.log("hey"+props.children);
    return (
    <div className="Person"> 
        <p onClick={props.click}>Hi my name is {props.name} and age is {props.age}</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}></input>
    </div>
    );
}


export default Radium(Person);
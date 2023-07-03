import React from "react";
import Radium from "radium";
import './Person.css';

const Person = (props) => {
    const style = {
        '@media (min-width: 500px)' : {
            width: '450px'
        }
    }
    return (
    <div className="Person" style = {style}> 
        <p onClick={props.click}>Hi my name is {props.name} and age is {props.age}</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}></input>
    </div>
    );
}


export default Radium(Person);
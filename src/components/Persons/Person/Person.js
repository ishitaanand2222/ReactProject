import React from "react";
import classes from './Person.module.css';

const Person = (props) => {
    return (
    <div className={classes.Person} > 
        <p onClick={props.click}>Hi my name is {props.name} and age is {props.age}</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}></input>
    </div>
    );
}


export default Person;
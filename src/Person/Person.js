import React from "react";

const Person = (props) => {
    console.log("hey"+props.children);
    return (
    <div className="Person"> 
        <p onClick={props.click}>Hi my name is {props.name} and age is {props.age}</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.value}></input>
    </div>
    );
}


export default Person;
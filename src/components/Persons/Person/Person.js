import React, {Component} from "react";
import classes from './Person.module.css';

class Person extends Component{
    render(){
        console.log("[Person.js] child prop rendering")
        return (
            <div className={classes.Person} > 
                <p onClick={this.props.click}>Hi my name is {this.props.name} and age is {this.props.age}</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}></input>
            </div>
        )
    }
}


export default Person;
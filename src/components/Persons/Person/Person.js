import React, {Component} from "react";
import classes from './Person.module.css';
import Auxillary from '../../../hoc/Auxillary';
import withClass from "../../../hoc/withClass";

class Person extends Component{
    render(){
        console.log("[Person.js] child prop rendering")
        return(
            <Auxillary>
                <p key="i1" onClick={this.props.click}>Hi my name is {this.props.name} and age is {this.props.age}</p>
                <p key="i2">{this.props.children}</p>
                <input key = "i3" type="text" onChange={this.props.changed} value={this.props.name}></input>
            </Auxillary>
        ) 
    }
}


export default withClass(Person, classes.Person);
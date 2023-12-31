import React, {Component} from "react";
import classes from './Person.module.css';
import Auxillary from '../../../hoc/Auxillary';
import withClass from "../../../hoc/withClass";
import PropTypes from 'prop-types';
import AuthContext from "../../../context/auth-context";

class Person extends Component{
    constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext

    componentDidMount(){
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated)
    }
    render(){
        console.log("[Person.js] child prop rendering")
        return(
            <Auxillary>
                {this.context.authenticated ? <p>Authenticated!</p>:<p>Please log in</p>}
                <p key="i1" onClick={this.props.click}>Hi my name is {this.props.name} and age is {this.props.age}</p>
                <p key="i2">{this.props.children}</p>
                <input 
                  key = "i3" 
                  //ref={(inputEl) => {this.inputElement = inputEl}}
                  ref={this.inputElementRef}
                  type="text" 
                  onChange={this.props.changed} 
                  value={this.props.name}
                />
            </Auxillary>
        ) 
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}


export default withClass(Person, classes.Person);
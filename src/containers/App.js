import React, { Component } from 'react';
import Person from '../components/Persons/Persons'
import classes from './App.module.css'
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component{

  state = {
    persons: [
      {id:'hfh11', name:"Ishita", age:22},
      {id:'jjjs', name:"John", age:23},
      {id:'iisi', name:"Paul", age:24}
    ],
    showPerson:false
  }

  togglePersonHandler = () =>{
    const doesShow = this.state.showPerson;
    this.setState({showPerson: !doesShow});
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
      {name:"Ishita", age:22},
      {name: newName , age:23},
      {name:"Paul", age:24}
      ]}
    )
  }

  nameChangedHandler = (event,id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    const person = {...this.state.persons[personIndex]};
    console.log("hey here");

    person.name = event.target.value;
    console.log(person.name);

    const persons = [...this.state.persons];
    
    persons[personIndex] = person;
    
    this.setState({persons: persons}
    )
  }

  deletePersonHandler = (personIndex) =>{
  //  const persons = this.state.persons;//mutating the original state
    const persons = [...this.state.persons];
    
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  render(){

    let persons = null;
    if(this.state.showPerson){
      persons = 
          <Person persons= {this.state.persons}
           clicked={this.deletePersonHandler} 
           changed={this.nameChangedHandler}/>
    }

  
    return(
      <div className={classes.App}>
        <Cockpit 
          title = {this.props.appTitle}
          showPerson={this.state.showPerson}
          persons={this.state.persons}
          togglePersonHandler= {this.togglePersonHandler}/>
          {persons}
      </div>
  
    )
  }
}


export default App;
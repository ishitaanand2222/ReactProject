import React, { Component } from 'react';
import Person from './Person/Person'
import classes from './App.module.css'
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

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
    let btnClass = ''
    if(this.state.showPerson){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <ErrorBoundary  key={person.id}><Person 
            click={() => this.deletePersonHandler(index)} 
            name={person.name} 
            age={person.age}
            changed = {(event) => this.nameChangedHandler(event,person.id)}/></ErrorBoundary>
          })}
        </div>
      )

      btnClass = classes.Red;
    }

    const assignedClasses = [];

    if(this.state.persons.length <= 2){
      assignedClasses.push(classes.red);
    }

    if(this.state.persons.length <= 1){
      assignedClasses.push(classes.bold);
    }

    return(
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={ assignedClasses.join(' ')}>This is really working</p>
        <button className={btnClass} onClick={this.togglePersonHandler}>Toggle Persons</button>
        {persons}
      </div>
  
    )
  }
}


export default App;
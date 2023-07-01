import React, { Component } from 'react';
import Person from './Person/Person'
import './App.css'

class App extends Component{

  state = {
    persons: [
      {name:"Ishita", age:22},
      {name:"John", age:23},
      {name:"Paul", age:24}
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

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
      {name:"Ishita", age:22},
      {name: event.target.value, age:23},
      {name:"Paul", age:24}
      ]}
    )
  }

  deletePersonHandler = (personIndex) =>{
  //  const persons = this.state.persons;//mutating the original state
  //  const persons = this.state.persons.splice()//without mutating-one way
    //second way:
    const persons = [...this.state.persons];
    
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  render(){
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    if(this.state.showPerson){
      // persons = this.state.persons.map((person) => {
      //   return <Person name={person.name} age={person.age}/>
      // })
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
            click={() => this.deletePersonHandler(index)} 
            name={person.name} 
            age={person.age}/>
          })}
        </div>
      )
    }


    return(
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working</p>
        <button style={style} onClick={this.togglePersonHandler}>Toggle Persons</button>
        {persons}
      </div>
    )
  }
}


export default App;
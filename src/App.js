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
        <>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age}
          click = {this.switchNameHandler.bind(this, "Jonny !")}
          changed = {this.nameChangedHandler}> My Hobbies: Racing </Person>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
        </>
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
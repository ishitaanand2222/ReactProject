import React, { Component } from 'react';
import Person from '../components/Persons/Persons'
import classes from './App.module.css'
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Auxillary from '../hoc/Auxillary';

class App extends Component{

  constructor(props){
    super(props);
    console.log("step1 : [App.js] constructor");
  }

  static getDerivedStateFromProps(props, state){
    console.log("step2 : [App.js] getDerivedStateFromProps", props);
    return state;
  }

  // componentWillMount(){
  //   console.log("step 4 [App.js] componentWillmount")
  // }
  componentDidMount(){
    console.log("step 5: [App.js] componentDidMount")
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log("[App.js] shouldComponentUpdate");
    return true;
  }

  componentDidUpdate(){
    console.log("[App.js] componentDidUpdate");
  }
  
  state = {
    persons: [
      {id:'hfh11', name:"Ishita", age:22},
      {id:'jjjs', name:"John", age:23},
      {id:'iisi', name:"Paul", age:24}
    ],
    showPerson:false,
    showCockpit: true,
    changeCounter: 0
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
    
    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1//react gurantees it to be the previous state
      }
    })

  }

  deletePersonHandler = (personIndex) =>{
  //  const persons = this.state.persons;//mutating the original state
    const persons = [...this.state.persons];
    
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  render(){
    console.log("step 3 , [App.js] render");
    let persons = null;
    if(this.state.showPerson){
      persons = 
          <Person persons= {this.state.persons}
           clicked={this.deletePersonHandler} 
           changed={this.nameChangedHandler}/>
    }

  
    return(
      <Auxillary>
        <button onClick={() => {
          this.setState({showCockpit: false});
        }}
        >
          Remove
        </button>
        {this.state.showCockpit ? 
        <Cockpit 
          title = {this.props.appTitle}
          showPerson={this.state.showPerson}
          personsLength={this.state.persons.length}
          togglePersonHandler= {this.togglePersonHandler}/> : null}
          {persons}
      </Auxillary>
  
    )
  }
}


export default withClass(App, classes.App);
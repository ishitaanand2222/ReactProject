import './App.css';
import {setState, useState} from 'react'

const person = [
  {name:"ishita", age:22},
  {name:"john", age:23},
  {name:"paul", age:24}
]
function Person(props){
  return <h4>Hi my name is {props.name} and age is {props.age}</h4>
}
function App() {
  const[showPerson, setShowPerson] = useState(false);

  const togglePersonHandler = ()=>{
    setShowPerson(!showPerson);
  }

  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  }

  return (
    <div className = "App">
      <h1>Hi I'm React App</h1>
      <h3>This is really working !</h3>
      <button onClick={togglePersonHandler}>Toggle Persons</button>

      {showPerson ? <div>
          <Person name = {person[0].name} age = {person[0].age}/>
          <Person name = {person[1].name} age = {person[1].age}/>
          <Person name = {person[2].name} age = {person[2].age}/>
      </div> : null}

    </div>
  );
}

export default App;

import React, {useEffect} from "react";
import classes from './Cockpit.module.css'

//Presentational/Dumb component
const Cockpit = (props) => {

    useEffect(() => { //combination of componentDidUpdate and componentDidMount
        console.log("[Cockpit.js] useEffect");
        //http request
        setTimeout(()=>{
            alert("data got saved to the cloud")
        },1000);

        return () => {
            console.log("[Cockpit.js] cleaning in useEffect")
        }//cleaning up using useEffect
    },[]);//if we pass an empty array it will run only once hence will behave as componentDidMount, as of now it will alert whenever there is a change in data

    useEffect(()=>{
        return () => console.log("[Cockpit.js] cleaning in 2nd useEffect")
    })
    const assignedClasses = [];
    let btnClass = '';
    if(props.showPerson){
        btnClass = classes.red;
    }
    if(props.persons.length <= 2){
      assignedClasses.push(classes.red);
    }

    if(props.persons.length <= 1){
      assignedClasses.push(classes.bold);
    }

    return(
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={ assignedClasses.join(' ')}>This is really working</p>
            <button className={btnClass} onClick={props.togglePersonHandler}>Toggle Persons</button>
        </div>
    )
}

export default Cockpit;
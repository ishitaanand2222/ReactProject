import React, {useEffect, useRef, useContext } from "react";
import classes from './Cockpit.module.css'
import AuthContext from "../../context/auth-context";

//Presentational/Dumb component
const Cockpit = props => {
    const toggleBtnRef = useRef(null);

    const authContext = useContext(AuthContext);

    useEffect(() => { //combination of componentDidUpdate and componentDidMount
        console.log("[Cockpit.js] useEffect");
        //http request
        // setTimeout(()=>{
        //     alert("data got saved to the cloud")
        // },1000);
        toggleBtnRef.current.click();

        return () => {
            console.log("[Cockpit.js] cleaning in useEffect")
        }//cleaning up using useEffect
    }, []);//if we pass an empty array it will run only once hence will behave as componentDidMount, as of now it will alert whenever there is a change in data

    useEffect(()=>{
        return () => console.log("[Cockpit.js] cleaning in 2nd useEffect")
    })
    const assignedClasses = [];
    let btnClass = '';
    if(props.showPerson){
        btnClass = classes.red;
    }
    if(props.personsLength <= 2){
      assignedClasses.push(classes.red);
    }

    if(props.personsLength <= 1){
      assignedClasses.push(classes.bold);
    }

    return(
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={ assignedClasses.join(' ')}>This is really working</p>
            <button  ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
                Toggle Persons
            </button>
            <button onClick={authContext.login}>Log in</button>
        </div>
    )
}

export default React.memo(Cockpit);

//=================  HOOKS ======================================

import React, { useState, useEffect } from "react";

function Age() {
    // const [] is a syntax & not array
    const [age, setAge] = useState(0); // age = 0 ( this.setState ({age : 10})),OR setAge(10);
    const [alive, setAlive] = useState(false);

    useEffect(() => {
        if (alive) {
            console.log(" I'm Alive");
        } else {
            setAlive(true);
            //setAlive = True = No print
        }
        // console.log("Will be called Always");
    }, [alive]);
    useEffect(() => {
        //console.log("Will be called only in First Render");
        console.log("I'm Born");
    }, []);
    //1. Sets True => Re-render is pending
    //2. I'm Born
    //3. I'm Alive


    useEffect(() => {
        //console.log("Will be called Only when there is a change in Age");

        if (age > 5) {
            console.log("Expired!!!");
            // setAlive(false);
        }
    }, [age]);

    //function inside a function
    //function increase() { };
    // OR 
    const increase = () => { // function as a variable
        setAge(age + 1);
        //setAlive(alive + 1);
    };

    // const changeAlive = () => {
    //     setAlive(!alive); // will be called Always
    // };
    return (
        <div>
            <h2>{age}</h2>
            <h3>{alive ? 'I am Alive' : 'Not yet Alive'}</h3>
            <button onClick={increase}>Increase Age</button>
            {/* <button onClick={changeAlive}> Make Alive </button> */}
        </div>
    );
}
export default Age;
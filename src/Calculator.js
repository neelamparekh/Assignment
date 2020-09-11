import React, { useState } from "react";

function Calculator() {
    const [number1, setNum1] = useState(0);
    const [number2, setNum2] = useState(0);
    const [operation, setOperation] = useState(0);
    const [result, setResult] = useState(0);

    const calculate = () => {
        if (operation === "+") {
            setResult(parseInt(number1) + parseInt(number2));
        }
        if (operation === "-") {
            setResult(parseInt(number1) - parseInt(number2));
        }
        if (operation === "*") {
            setResult(parseInt(number1) * parseInt(number2));
        }
        if (operation === "/") {
            setResult(parseInt(number1) / parseInt(number2));
        }
        if (operation === "%") {
            setResult(parseInt(number1) % parseInt(number2));
        }

    };

    return (
        <div>
            <input type="number" onChange={(e) => setNum1(e.target.value)} placeholder="Enter Number 1" />
            <input type="number" onChange={(e) => setNum2(e.target.value)} placeholder="Enter Number 2" /> <br /><br />
            <input type="text" onChange={(e) => setOperation(e.target.value)} placeholder="Operation" /> <br />
            <br />

            <button type="submit" onClick={calculate}> RESULT </button>
            <h3>{result}</h3>
        </div>
    );
}

export default Calculator;

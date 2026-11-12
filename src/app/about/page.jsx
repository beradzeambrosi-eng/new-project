"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";

export default function testpage() {
    //let count = 0;

    const [count, setCount] = useState(0);

    useEffect(() => {
    console.log("გამარჯობა!");
    //dependency array:
    }, [count]);

    useEffect(() => {
    localStorage.setItem("userName", "uhui");

    }, [])

const incrementByOne = () => {
    //count++;

    setCount((prevCount) => {
        return prevCount + 1;
        console.log(prevCount);
   });
};
const decrementByOne = () => {
    
    setCount(prevCount - 1);

    return prevCount - 1;

};
    return (
        <>
     <h2>{count}</h2>
     <button onClick={incrementByOne}>+</button>
     {"    "}
     <button onClick={decrementByOne}>-</button>
     </>
     );
}